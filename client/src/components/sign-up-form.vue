<script lang="ts" setup>
import {reactive} from 'vue'
import {useRouter} from 'vue-router'
import type {ValidationError} from "@/exceptions/exceptions";
import type {UserSignUpDto} from "@/common/types/types";
import {userSignUp as signUpValidator} from "@/validators/validators";
import {Button, Input} from "@/common/components/components";
import {AppRoutes} from "@/common/enums/enums";
import {useAuthStore} from '@/stores/auth.store'

const router = useRouter();
const authStore = useAuthStore();

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
    authStore.signUp(signUpFormState);
    console.log("SIGN UP!", signUpFormState)
    router.push(AppRoutes.PRODUCTS);
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
        <Button bg-color="bg-pink" text="Sign Up" type="submit"/>
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

<style scoped>
.signUpForm {
  width: 32%;
  min-width: 350px;
  background: rgba(172, 172, 171, 0.37);
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: center;
  border-radius: 37px;
}

.registerBanner {
  width: 100%;
  height: 60px;
  background: var(--header-color);
  border-top-left-radius: 37px;
  border-top-right-radius: 37px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.registerBanner > p {
  text-align: center;
  color: #FFFFFF;
}

.signUpActionSectionWrapper {
  width: 90%;
}

.signUpInputWrapper label {
  color: var(--header-color);
  margin-top: 15px;
}

.signUpActionButtonsWrapper {
  margin-top: 15px;
  display: flex;
  justify-content: center;
}

.signUpToSignInSwitchParagraph {
  margin: 20px 0;
  text-align: center;
  color: var(--header-color);
}

.switchLink {
  color: var(--header-color);
}

</style>