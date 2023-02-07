import {computed, type ComputedRef, ref} from "vue";
import {defineStore} from "pinia";
import {useRouter} from "vue-router";
import {AppRoutes, StoreNames} from "@/common/enums/enums";
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
    const isSignInButtonRenderable = ref<boolean>(false);

    const authService: AuthService = new AuthService();
    const localStorageService: LocalStorageService = new LocalStorageService();
    const router = useRouter()

    const getCurrentUserData: ComputedRef<UserResponseDto | undefined> = computed(() => currentUserData.value);
    const getIsSignInButtonRenderable: ComputedRef<boolean> = computed(() => isSignInButtonRenderable.value)

    const setIsSignInButtonRenderable: (newValue: boolean) => void = (newValue: boolean): void => {
        isSignInButtonRenderable.value = newValue;
    }

    const signIn = async (signInData: UserSignInDto) => {
        const {token, user} = await authService.signIn(signInData);
        localStorageService.setToken(token)
        currentUserData.value = user;
        await router.push(AppRoutes.RECIPES)
    }

    const signUp = async (signUpData: UserSignUpDto) => {
        const {token, user} = await authService.signUp(signUpData);
        localStorageService.setToken(token)
        currentUserData.value = user;
        await router.push(AppRoutes.RECIPES)
    }

    const logout = () => {
        currentUserData.value = undefined;
        localStorageService.clearToken();
    }

    const getCurrentUser = async () => {
        const userData = await authService.getCurrentUser();
        currentUserData.value = userData;
    }

    return {
        getCurrentUserData,
        getIsSignInButtonRenderable,
        setIsSignInButtonRenderable,
        signIn,
        signUp,
        logout,
        getCurrentUser,
    }
})

export {
    useAuthStore
}