import {ApiException} from "@/common/exceptions/exceptions";
import {StatusCode} from "@/common/enums/enums";

class InvalidCredentialsException extends ApiException {

    constructor(message: string) {
        super(message, StatusCode.BAD_REQUEST);
    }
}

export {InvalidCredentialsException}