import {sign, verify, decode, JwtPayload} from 'jsonwebtoken'
import {type UserTokenData} from "@/common/types/types";
import {ENV} from "@/common/enums/enums";

const {
    JWT_PRIVATE_KEY,
    JWT_TOKEN_EXPIRY_PERIOD
} = ENV.JWT

class JwtService {
    public generateToken(userData: UserTokenData): string {
        return sign(userData, JWT_PRIVATE_KEY, {expiresIn: JWT_TOKEN_EXPIRY_PERIOD});
    }

    public verifyToken(token: string): void {
        verify(token, JWT_PRIVATE_KEY);
    }

    public decode(token: string): JwtPayload {
        return decode(token, {json: true})
    }
}

export {JwtService}