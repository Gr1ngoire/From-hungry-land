import {  IsEmail,
    IsNotEmpty,
    IsString,
    Matches,} from 'class-validator'

const PASSWORD_VALIDATION =
    /^(?=.*[!&#%])(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,16}$/;

class UserSignInValidationDto {
    @IsEmail()
    email: string;

    @IsString()
    @IsNotEmpty()
    @Matches(PASSWORD_VALIDATION)
    password: string;
}

export {UserSignInValidationDto}