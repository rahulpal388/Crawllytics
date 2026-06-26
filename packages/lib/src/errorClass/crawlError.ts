

export class CrawlError extends Error {
    constructor(message: string, public statusCode?: number, public cause?: string) {
        super(message);
    }
}