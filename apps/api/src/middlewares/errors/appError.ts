

export class AppError extends Error {

    constructor(message: string, public statusCode: number, public options: ErrorOptions = {}) {
        super(message);
    }
}