import { createRouter, createWebHistory } from 'vue-router'
import {SignInView, SignUpView, ProductListView, RecipeBrowserView} from "@/views/views";
import {pathSlashStripper} from "./helpers/helpers";
import {AppRoutes} from "@/common/enums/enums";
import { SingleRecipeViewVue } from "@/views/views";


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
      path: AppRoutes.RECIPES_SINGLE,
      name: pathSlashStripper(AppRoutes.RECIPES_SINGLE),
      component: SingleRecipeViewVue,
    },
    
    {
      path: AppRoutes.RECIPES,
      name: pathSlashStripper(AppRoutes.RECIPES),
      component: RecipeBrowserView
    }
  ]
})

export default router
