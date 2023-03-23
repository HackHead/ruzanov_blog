export default class ServerError extends Error {
    public status: number;
    
    constructor(message: string, status: number) {
        super(message)
        this.status = status;
        this.message = message;
    }
}