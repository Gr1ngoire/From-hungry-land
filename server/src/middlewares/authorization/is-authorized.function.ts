import {UnauthorizedException} from "@/common/exceptions/user/unauthorized.exception";
import {ValidationExceptionMessages} from "shared/common/enums/exception/validation/validation-exception-message.enum";
import {jwtService} from "@/services/services";

export const isAuthorizedFunction = (authHeader:string) => {
    const [tokenFormat, token] = authHeader.split(' ')

    if (tokenFormat !== 'Bearer' || !token) {
        throw new UnauthorizedException(ValidationExceptionMessages.USER_IS_UNAUTHORIZED);
    }

    try {
        jwtService.verifyToken(token);
        return token
    } catch {
        throw new UnauthorizedException(ValidationExceptionMessages.USER_IS_UNAUTHORIZED);
    }

}