import {ApiException} from "@/common/exceptions/exceptions";
import {StatusCode} from "@/common/enums/enums";

class AlreadyExistsException extends ApiException {

    constructor(message: string) {
        super(message, StatusCode.BAD_REQUEST);
    }
}

export {AlreadyExistsException}