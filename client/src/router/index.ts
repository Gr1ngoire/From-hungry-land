import {ref} from "vue";
import {createRouter, createWebHistory} from 'vue-router'
import {ProductListView, RecipeBrowserView, SignInView, SignUpView, SingleRecipeViewVue} from "@/views/views";
import {pathSlashStripper} from "./helpers/helpers";
import {AppRoutes} from "@/common/enums/enums";
import {useAuthStore} from "@/stores/auth.store";
import {LocalStorageService} from "@/services/localStorage/localStorage.service";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: AppRoutes.SIGN_UP,
            name: pathSlashStripper(AppRoutes.SIGN_UP),
            component: SignUpView
        },
        {
            path: AppRoutes.SIGN_IN,
            name: pathSlashStripper(AppRoutes.SIGN_IN),
            component: SignInView
        },
        {
            path: AppRoutes.PRODUCTS,
            name: "products",
            component: ProductListView,
        },
        {
            path: AppRoutes.RECIPES,
            name: pathSlashStripper(AppRoutes.RECIPES),
            component: RecipeBrowserView
        },
        {
            path: AppRoutes.RECIPES_SINGLE,
            name: pathSlashStripper(AppRoutes.RECIPES_SINGLE),
            component: SingleRecipeViewVue,
        },
        {
            path: AppRoutes.ALL,
            redirect: AppRoutes.RECIPES,
        }
    ]
})

router.beforeEach(async (to) => {
    const authStore = useAuthStore();
    const localStorageService = new LocalStorageService();
    if (localStorageService.getToken()) {
        await authStore.getCurrentUser();
    }
    const user = authStore.getCurrentUserData;
    const isAuth = ref<boolean>(Boolean(user));


    if (!isAuth.value) {
        switch (to.path) {
            case AppRoutes.PRODUCTS: {
                return {path: AppRoutes.SIGN_IN}
            }
            default:
                break;
        }

    } else if (isAuth) {
        switch (to.path) {
            case AppRoutes.SIGN_IN: {
                return {path: AppRoutes.RECIPES}
            }
            case AppRoutes.SIGN_UP: {
                return {path: AppRoutes.RECIPES}
            }
            default:
                break;
        }
    }
})

export default router
