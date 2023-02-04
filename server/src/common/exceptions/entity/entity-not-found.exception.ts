import {ApiException} from "@/common/exceptions/exceptions";

export class EntityNotFoundException extends ApiException {
    id: number


    constructor(message: string, id: number, status?: number) {
        super(message, status);
        this.id = id;
    }
}