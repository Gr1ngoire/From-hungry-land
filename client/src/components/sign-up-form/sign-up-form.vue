<script lang="ts" setup>
import {reactive} from 'vue'
import {useRouter} from 'vue-router'
import type {ValidationError} from "@/exceptions/exceptions";
import type {UserSignUpDto} from "@/common/types/types";
import {userSignUp as signUpValidator} from "@/validators/validators";
import {Button, Input} from "@/common/components/components";

import './styles.css'
import {AppRoutes} from "@/common/enums/enums";

const router = useRouter();

let signUpFormState: UserSignUpDto = {
  nickname: "",
  email: "",
  password: "",
};

const signUpValidationState: Record<string, string> = reactive<
    Record<string, string>
>({
  nickname: "",
  email: "",
  password: "",
});

const handleSignUpValidation: (signUpDto: UserSignUpDto) => void = (
    signUpDto: UserSignUpDto
): void => {
  try {
    signUpValidator.validate(signUpDto);
  } catch (err: unknown) {
    const validationError = err as ValidationError;
    signUpValidationState[validationError.field] = validationError.message;
  }
};

const handleSignUpPropertyChange: (event: Event) => void = (
    event: Event
): void => {
  const input = event.target as HTMLInputElement;
  signUpFormState = {
    ...signUpFormState,
    [input.name]: input.value,
  } as UserSignUpDto;

  signUpValidationState[input.name] = "";
  handleSignUpValidation(signUpFormState);
};

const handleSubmit: (event: Event) => void = (event: Event) => {
  event.preventDefault();
  if (Object.values(signUpValidationState).every((el) => el.length === 0)) {
    console.log("SIGN UP!", signUpFormState)
    // router.push(Location for authed users);
  }
};

handleSignUpValidation(signUpFormState);
</script>

<template>
  <form class="signUpForm" @submit="handleSubmit">
    <div class="registerBanner">
      <p>Register</p>
    </div>
    <div class="signUpActionSectionWrapper">
      <div class="signUpInputWrapper">
        <Input
            type="text"
            name="nickname"
            :value="signUpFormState.nickname"
            :onInput="handleSignUpPropertyChange"
            :errorMessage="signUpValidationState.nickname"
        />
      </div>
      <div class="signUpInputWrapper">
        <Input
            type="text"
            name="email"
            :value="signUpFormState.email"
            :onInput="handleSignUpPropertyChange"
            :errorMessage="signUpValidationState.email"
        />
      </div>
      <div class="signUpInputWrapper">
        <Input
            type="password"
            name="password"
            :value="signUpFormState.password"
            :onInput="handleSignUpPropertyChange"
            :errorMessage="signUpValidationState.password"
        />
      </div>
      <div class="signUpActionButtonsWrapper">
        <Button bg-color="bg-pink" text="Sign Up" type="submit" />
      </div>
      <p class="signUpToSignInSwitchParagraph">
        Do you already have an account?
        <RouterLink :to="AppRoutes.SIGN_IN"
        ><span class="switchLink">Sign in</span></RouterLink
        >
      </p>
    </div>
  </form>
</template>
