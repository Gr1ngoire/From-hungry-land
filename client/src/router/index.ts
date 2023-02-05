import { createRouter, createWebHistory } from "vue-router";
import { ClientRoutes } from "@/common/enums/enums";
import { ProductListView } from "@/views/views";

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
      component: ProductListView,
    },
  ],
});

export default router;
