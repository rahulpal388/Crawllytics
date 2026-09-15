import maxmind from "maxmind";
import path from "node:path";

type IPLocationType = {
    city: string | null;
    region: string | null;
    country: string | null;
    latitude: number | null;
    longitude: number | null;
};

let geoReader: maxmind.Reader<maxmind.CityResponse> | null = null;

const dbPath = path.resolve(
    process.cwd(),
    "../../packages/lib/src/location/data/geoip/GeoLite2-City.mmdb"
);

async function getGeoReader() {
    console.log(`Loading GeoLite2-City database from: ${dbPath}`);
    if (!geoReader) {
        geoReader = await maxmind.open<maxmind.CityResponse>(dbPath);
    }

    return geoReader;
}

export async function getIPLocation(
    ip: string
): Promise<IPLocationType | null> {

    try {
        const reader = await getGeoReader();

        const result = reader.get(ip);

        if (!result) {
            return null;
        }

        return {
            city: result.city?.names?.en ?? null,

            region:
                result.subdivisions?.[0]?.names?.en ??
                null,

            country:
                result.country?.names?.en ??
                null,

            latitude:
                result.location?.latitude ??
                null,

            longitude:
                result.location?.longitude ??
                null,
        };

    } catch (error) {
        console.error(
            `IP geolocation failed for ${ip}:`,
            error
        );

        return null;
    }
}


export async function getLocationByIP(
    ip: string | null
): Promise<string | null> {
    if (!ip) {
        return null;
    }

    const location = await getIPLocation(ip);

    if (!location) {
        return null;
    }

    const { city, region, country } = location;

    const locationParts = [city, region, country].filter(Boolean);
    return locationParts.length > 0 ? locationParts.join(", ") : null;
}