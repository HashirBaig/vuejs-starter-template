import { createRouter, createWebHistory } from "vue-router"
import { AllRoutesMap } from "@/router/routesConfig"
const APP_TITLE = "Fraud Paneli"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("@/components/layouts/AppLayout.vue"),
      children: [
        {
          path: AllRoutesMap.home,
          name: "dashboard",
          component: () => import("@/views/Home.vue"),
          meta: {
            title: "Dashboard",
            requiresAuth: true,
          },
        },
        {
          path: AllRoutesMap.blacklist,
          name: "blacklist",
          component: () => import("@/views/Blacklist.vue"),
          meta: {
            title: "Blacklist",
            requiresAuth: true,
          },
        },
      ],
    },
    {
      path: AllRoutesMap.login,
      name: "login",
      component: () => import("@/views/Login.vue"),
    },
    {
      path: AllRoutesMap.ga,
      name: "ga",
      component: () => import("@/views/Ga.vue"),
      meta: {
        title: "GA",
        requiresAuth: false,
      },
    },
    {
      path: AllRoutesMap.notFound,
      name: "NotFound",
      component: () => import("@/views/NotFound.vue"),
      meta: {
        title: "404",
        requiresAuth: false,
      },
    },
  ],
})

router.beforeEach((to, from, next) => {
  const token = localStorage?.token

  if (to.meta.requiresAuth) {
    if (token) {
      document.title = `${APP_TITLE} | ${to?.meta?.title || to?.name}`
      next()
    } else {
      next({ name: "login" })
      localStorage.clear()
    }
  } else {
    document.title = `${APP_TITLE} | ${to?.meta?.title || to?.name}`
    next()
  }
})

export default router
