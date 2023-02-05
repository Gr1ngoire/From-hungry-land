import {createRouter, createWebHistory} from 'vue-router'
import {SignInView, SignUpView} from "@/views/views";
import {pathSlashStripper} from "./helpers/helpers";
import {AppRoutes} from "@/common/enums/enums";

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
        // {
        //     path: AppRoutes.ALL,
        //     redirect: anywhere,
        // },
    ]
})

export default router
