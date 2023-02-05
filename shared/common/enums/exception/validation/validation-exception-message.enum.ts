enum ValidationExceptionMessages {
  EMAIL_CAN_NOT_BE_EMPTY = "Email can not be empty",
  EMAIL_SHOULD_BE_IN_PROPER_FORMAT = "Email should be in proper format",
  NAME_CAN_NOT_BE_EMPTY = "Name can not be empty",
  PASSWORD_FORMAT = "Password must be at least 8 characters in length and maximum 16 characters. Password must contain at least one digit, at least on upper cased letter, at least one lower cased letter and at least one special character",
  INVALID_EMAIL_OR_PASSWORD = "Invalid email or password",
  USER_IS_UNAUTHORIZED = "User is unauthorized",
  USER_WITH_SUCH_EMAIL_ALREADY_EXISTS = "User with such email already exists",

}

export { ValidationExceptionMessages };
