import {ApiException} from "@/common/exceptions/exceptions";
import {StatusCode} from "@/common/enums/enums";

export class EntityNotFoundException extends ApiException {

    constructor(message: string) {
        super(message, StatusCode.NOT_FOUND);
    }
}