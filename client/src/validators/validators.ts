import { UserSignIn } from "./user/user-sign-in.validator";
import { UserSignUp } from "./user/user-sign-up.validator";

const userSignIn = new UserSignIn();
const userSignUp = new UserSignUp();

export {
  userSignIn,
  userSignUp,
};
