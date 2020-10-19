export class CustomError extends Error {
    public statusCode: number;
    public originalErrorType: string;
    public message: string;

    constructor({ message, name = "CustomError" }) {
        super();
        this.statusCode = 400;
        this.originalErrorType = name;
        this.message = message;
    }
}
