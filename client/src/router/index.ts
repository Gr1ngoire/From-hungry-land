import {ref} from "vue";
import {createRouter, createWebHistory} from 'vue-router'
import {SignInView, SignUpView, ProductListView, RecipeBrowserView} from "@/views/views";
import {pathSlashStripper} from "./helpers/helpers";
import {AppRoutes} from "@/common/enums/enums";
import {useAuthStore} from "@/stores/auth.store";

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
            path: AppRoutes.ALL,
            redirect: AppRoutes.RECIPES,
        }
    ]
})

router.beforeEach((to) => {
    const authStore = useAuthStore();
    const user = authStore.getCurrentUserData;
    const isAuth = ref<boolean>(Boolean(user));

    if (!isAuth.value) {
        switch (to.path) {
            case AppRoutes.PRODUCTS: {
                // window.location.pathname = AppRoutes.SIGN_IN
                return {path: AppRoutes.SIGN_IN}
            }
            default:
                break;
        }
    }
})

export default router
