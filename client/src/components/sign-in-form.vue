<script lang="ts" setup>
import {reactive} from 'vue'
import {useRouter} from 'vue-router'
import {userSignIn as signInValidator} from "@/validators/validators";
import {Button, Input} from "@/common/components/components";
import type {ValidationError} from "@/exceptions/exceptions";
import type {UserSignInDto} from "@/common/types/types";
import {useAuthStore} from '@/stores/auth.store'
import {AppRoutes} from "@/common/enums/enums";

const router = useRouter();
const authStore = useAuthStore();

let signInFormState: UserSignInDto = {
  email: "",
  password: "",
};

const signInValidationState: Record<string, string> = reactive<
    Record<string, string>
>({
  email: "",
  password: "",
});

const handleSignUpValidation: (signInDto: UserSignInDto) => void = (
    signInDto: UserSignInDto
): void => {
  try {
    signInValidator.validate(signInDto);
  } catch (err: unknown) {
    const validationError = err as ValidationError;
    signInValidationState[validationError.field] = validationError.message;
  }
};

const handleSignInPropertyChange: (event: Event) => void = (
    event: Event
): void => {
  const input = event.target as HTMLInputElement;
  signInFormState = {
    ...signInFormState,
    [input.name]: input.value,
  } as UserSignInDto;

  signInValidationState[input.name] = "";
  handleSignUpValidation(signInFormState);
};

const handleSubmit: (event: Event) => void = (event: Event) => {
  event.preventDefault();
  if (Object.values(signInValidationState).every((el) => el.length === 0)) {
    authStore.signIn(signInFormState)
    console.log("SIGN IN!", signInFormState)
    router.push(AppRoutes.PRODUCTS);
  }
};

handleSignUpValidation(signInFormState);
</script>

<template>
  <form class="signInForm" @submit="handleSubmit">
    <div class="loginBanner">
      <p>Login</p>
    </div>
    <div class="signInActionSectionWrapper">
      <div class="signInInputWrapper">
        <Input
            type="text"
            name="email"
            :value="signInFormState.email"
            :onInput="handleSignInPropertyChange"
            :errorMessage="signInValidationState.email"
        />
      </div>
      <div class="signInInputWrapper">
        <Input
            type="password"
            name="password"
            :value="signInFormState.password"
            :onInput="handleSignInPropertyChange"
            :errorMessage="signInValidationState.password"
        />
      </div>
      <div class="signInActionButtonsWrapper">
        <Button bg-color="bg-pink" text="Sign In" type="submit"/>
      </div>
      <p class="signInToSignInSwitchParagraph">
        Do you already have an account?
        <RouterLink :to="AppRoutes.SIGN_UP"
        ><span class="switchLink">Sign up</span></RouterLink
        >
      </p>
    </div>
  </form>
</template>


<style scoped>
.signInForm {
  width: 32%;
  min-width: 350px;
  background: rgba(172, 172, 171, 0.37);
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: center;
  border-radius: 37px;
}

.loginBanner {
  width: 100%;
  height: 60px;
  background: var(--header-color);
  border-top-left-radius: 37px;
  border-top-right-radius: 37px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.loginBanner > p {
  text-align: center;
  color: #FFFFFF;
}

.signInActionSectionWrapper {
  width: 90%;
}

.signInInputWrapper label {
  color: var(--header-color);
  margin-top: 15px;
}

.signInActionButtonsWrapper {
  margin-top: 15px;
  display: flex;
  justify-content: center;
}

.signInToSignInSwitchParagraph {
  margin: 20px 0;
  text-align: center;
  color: var(--header-color);
}

.switchLink {
  color: var(--header-color);
}

</style>