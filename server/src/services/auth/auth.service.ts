import {BcryptService, JwtService, UserService} from "@/services/services";
import {UserSignUpDto} from "shared/common/types/user/user-sign-up-dto.type";
import {UserSignInResponseDto} from "shared/common/types/user/user-sign-in-response-dto.type";

class AuthService {
    private PASSWORD_SALT_ROUNDS = 5;
    constructor(private userService: UserService, private jwtService: JwtService, private bcryptService: BcryptService) {}

    public async signUp(signUpDto: UserSignUpDto): Promise<UserSignInResponseDto> {
        const hashedPassword = await this.bcryptService.hashPassword(signUpDto.password, this.PASSWORD_SALT_ROUNDS);
        const newUser = await this.userService.create({
            ...signUpDto,
            password: hashedPassword
        });
        const {id, email, role} = newUser;
        return {
            token: this.jwtService.generateToken({id, email, role}),
            user: newUser
        }
    }
}

export {AuthService}