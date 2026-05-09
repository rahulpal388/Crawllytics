import { IncomingHttpHeaders } from "http";
import https from "https";
import zlib from "zlib";

export type HttpsResponseType = {
    url: string;
    method: string;
    header: IncomingHttpHeaders;
    statusCode: number;
    responseTime: number;
    timeToFirstByte: number;
}

export async function fetchWebPage(
    url: URL
): Promise<
    | {
        success: true;
        data: {
            html: string;
            response: HttpsResponseType;
        };
    }
    | {
        success: false;
        data: null;
    }
> {

    return new Promise((resolve) => {



        let html = "";

        let header: IncomingHttpHeaders = {};

        let statusCode = 0;

        let timeToFirstByte = 0;

        let responseTime = 0;

        const start = performance.now();

        const req = https.get(url, {
            headers: {
                "accept-encoding":
                    "gzip, br, deflate",

                "user-agent":
                    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/135.0.0.0 Safari/537.36"
            }
        }, (res) => {


            if (res.statusCode === 301 || res.statusCode === 302 || res.statusCode === 307 || res.statusCode === 308) {
                const location = res.headers["location"];
                console.log(`redirecting to ${location}`)
                if (location) {
                    resolve(fetchWebPage(new URL(location, url))); // recurse
                    res.resume(); // drain the response to free memory
                    return;
                }
            }

            timeToFirstByte =
                performance.now() - start;

            header = res.headers;

            statusCode = res.statusCode || 0;


            const encoding =
                res.headers["content-encoding"];

            let stream: NodeJS.ReadableStream = res;

            if (encoding === "gzip") {

                stream = res.pipe(
                    zlib.createGunzip()
                );

            }
            else if (encoding === "br") {

                stream = res.pipe(
                    zlib.createBrotliDecompress()
                );

            }
            else if (encoding === "deflate") {

                stream = res.pipe(
                    zlib.createInflate()
                );

            }

            stream.on("data", (chunk) => {

                html += chunk.toString();
            })
                ;
            stream.on("end", () => {

                responseTime =
                    performance.now() - start;

                resolve({
                    success: true,
                    data: {
                        html,
                        response: {
                            url: url.href,
                            method: "GET",
                            header,
                            statusCode,
                            timeToFirstByte,
                            responseTime
                        }
                    }
                });

            });

            res.on("error", () => {

                resolve({
                    success: false,
                    data: null
                });

            });

        });

        req.setTimeout(10_000, () => {
            req.destroy();
            resolve({
                success: false,
                data: null
            });
        })

        req.on("error", () => {

            resolve({
                success: false,
                data: null
            });

        });

    });

}