import { createRouter, createWebHistory } from "vue-router";
import { ClientRoutes } from "@/common/enums/enums";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    /* {
      path: '/example',
      name: 'example',
      component: ExampleComponent
    }, */

    {
      path: ClientRoutes.PRODUCTS,
      name: "products",
      component: () => import("@/views/products/ProductListView.vue"),
    },
  ],
});

export default router;
