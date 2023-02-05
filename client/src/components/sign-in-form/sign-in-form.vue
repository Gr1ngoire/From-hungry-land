<script lang="ts" setup>
import {reactive} from 'vue'
import {useRouter} from 'vue-router'
import type {ValidationError} from "@/exceptions/exceptions";
import type {UserSignInDto} from "@/common/types/types";
import {userSignIn as signInValidator} from "@/validators/validators";
import {Input} from "@/common/components/components";

import './styles.css'
import {AppRoutes} from "@/common/enums/enums";

const router = useRouter();

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
    console.log("SIGN IN!", signInFormState)
    // router.push(Location for authed users);
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
        <button type="submit">Sign In</button>
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
