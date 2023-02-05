import {ApiException} from "@/common/exceptions/exceptions";
import {StatusCode} from "@/common/enums/enums";

class UnauthorizedException extends ApiException {

    constructor(message: string) {
        super(message, StatusCode.UNAUTHORIZED);
    }
}

export {UnauthorizedException}