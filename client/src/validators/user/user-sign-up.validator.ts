import { Abstract } from "../abstract/abstract.validator";
import type { UserSignUpDto } from "@/common/types/types";
import { ValidationError } from "@/exceptions/exceptions";
import { ValidationExceptionMessages } from "@/common/enums/enums";

class UserSignUp extends Abstract<UserSignUpDto> {
  validate(toValidate: UserSignUpDto): void {
    const { nickname, email, password } = toValidate;

    this.validateNickname(nickname);
    this.validateEmail(email);
    this.validatePassword(password);
  }

  private validateEmail(value: string): void {
    const validateField = "email";

    if (value.length === 0) {
      throw new ValidationError({
        field: validateField,
        message: ValidationExceptionMessages.EMAIL_CAN_NOT_BE_EMPTY,
      });
    }

    const EMAIL_FORMAT_VALIDATION = /\w+@\w+\.\w+/;
    if (!value.match(EMAIL_FORMAT_VALIDATION)) {
      throw new ValidationError({
        field: validateField,
        message: ValidationExceptionMessages.EMAIL_SHOULD_BE_IN_PROPER_FORMAT,
      });
    }
  }

  private validatePassword(value: string): void {
    const validateField = "password";

    const PASSWORD_VALIDATION =
      /^(?=.*[!&#%])(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,16}$/;
    if (!value.match(PASSWORD_VALIDATION)) {
      throw new ValidationError({
        field: validateField,
        message: ValidationExceptionMessages.PASSWORD_FORMAT,
      });
    }
  }

  private validateNickname(value: string): void {
    const validatedField = "nickname";

    if (value.length === 0) {
      throw new ValidationError({
        field: validatedField,
        message: ValidationExceptionMessages.NAME_CAN_NOT_BE_EMPTY,
      });
    }
  }

}

export { UserSignUp };
