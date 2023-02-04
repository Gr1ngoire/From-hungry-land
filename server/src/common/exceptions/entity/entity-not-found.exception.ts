import {ApiException} from "@/common/exceptions/exceptions";

export class EntityNotFoundException extends ApiException {

    constructor(message: string, status?: number) {
        super(message, status);
    }
}