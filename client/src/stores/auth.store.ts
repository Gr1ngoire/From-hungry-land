import {computed, type ComputedRef, ref} from "vue";
import {defineStore} from "pinia";
import {StoreNames} from "@/common/enums/enums";
import type {RoleResponseDto, UserResponseDto, UserSignInDto, UserSignUpDto} from "@/common/types/types";
import {AuthService, LocalStorageService} from "@/services/services";

type CurrentUserState = {
    id: number,
    nickname: string,
    email: string,
    role: RoleResponseDto
}

const useAuthStore = defineStore(StoreNames.AUTH, () => {

    const currentUserData = ref<CurrentUserState>();

    const authService: AuthService = new AuthService();
    const localStorageService: LocalStorageService = new LocalStorageService();

    const getCurrentUserData: ComputedRef<UserResponseDto | undefined> = computed(() => currentUserData.value);

    const signIn = async (signInData: UserSignInDto) => {
        const {token, user} = await authService.signIn(signInData);
        localStorageService.setToken(token)
        currentUserData.value = user;
    }

    const signUp = async (signUpData: UserSignUpDto) => {
        const {token, user} = await authService.signUp(signUpData);
        localStorageService.setToken(token)
        currentUserData.value = user;
    }

    const getCurrentUser = async () => {
        const userData = await authService.getCurrentUser();
        currentUserData.value = userData;
    }

    return {
        getCurrentUserData,
        signIn,
        signUp,
        getCurrentUser,
    }
})

export {
    useAuthStore
}