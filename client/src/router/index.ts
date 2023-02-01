import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
     /* {
      path: '/example',
      name: 'example',
      component: ExampleComponent
    }, */
  ]
})

export default router
