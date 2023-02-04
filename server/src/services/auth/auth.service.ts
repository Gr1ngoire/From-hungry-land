import {BcryptService, JwtService, UserService} from "@/services/services";
import {type UserSignUpDto, type UserSignInResponseDto, type UserSignInDto, type UserResponseDto} from "@/common/types/types";
import {InvalidCredentialsException} from "@/common/exceptions/user/invalid-credentials.exception";

type UserValidationParams = {
    email: string;
    password: string;
};

class AuthService {
    private PASSWORD_SALT_ROUNDS = 5;
    constructor(private userService: UserService, private jwtService: JwtService, private bcryptService: BcryptService) {}

    public async signIn(signInDto: UserSignInDto): Promise<UserSignInResponseDto> {
        const userInDb = await this.checkUser(signInDto);
        const {id, email, role} = userInDb
        return {
            token: this.jwtService.generateToken({id, email, role}),
            user: userInDb,
        }
    }
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

    private async checkUser(
        userDto: UserValidationParams,
    ): Promise<UserResponseDto | null> {
        const { email, password } = userDto;
        const userInDb = await this.userService.getByEmailWithPassword(email);

        if (!userInDb) {
            throw new InvalidCredentialsException('Invalid email or password');
        }

        const passwordIsValid = await this.bcryptService.comparePasswords(
            password,
            userInDb.password,
        );

        if (!passwordIsValid) {
            throw new InvalidCredentialsException('Invalid email or password');
        }

        const {id, nickname, email: userInDbEmail, role} = userInDb
        return {id, nickname, email: userInDbEmail, role};
    }
}

export {AuthService}