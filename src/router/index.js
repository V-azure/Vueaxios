import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/Layout.vue'
import Product from "../views/Product"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: "product",
        name: "Product",
        component: Product,
        meta: {
          isLogin: true
        }
      },
      {
        path: "params",
        name: "Params",
        component: () => import("../views/Params"),
        meta: {
          isLogin: true
        }
      },
      {
        path: "content",
        name: "Content",
        component: () => import("../views/Content"),
        meta: {
          isLogin: true
        }
      },
      {
        path: "",
        name: "HomePage",
        component: () => import("../views/HomePage"),
        meta: {
          isLogin: true
        },
      },
      {
        path: "detail",
        name: "detail",
        component: () => import("../views/HomePage/detailPage/index.vue"),
        meta: {
          isLogin: true
        },
        children:[
          {
            path: "devproduct",
            name: "DevProduct",
            component: () => import("../views/HomePage/detailPage/DevProduct.vue"),
            meta: {
              isLogin: true
            },
          },
          {
            path: "brandmarketing",
            name: "BrandMarketing",
            component: () => import("../views/HomePage/detailPage/BrandMarketing.vue"),
            meta: {
              isLogin: true
            },
          },
          {
            path: "mission",
            name: "Mission",
            component: () => import("../views/HomePage/detailPage/Mission.vue"),
            meta: {
              isLogin: true
            },
          },
          {
            path: "height",
            name: "Height",
            component: () => import("../views/HomePage/detailPage/Height.vue"),
            meta: {
              isLogin: true
            },
          },
        ]
      },
      {
        path: "/leavingmessage",
        name: "LeavingMessage",
        component: () => import("../views/leavingmessage"),
        meta: {
          isLogin: true
        },
      },
    ]
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue")
  },
  {
    path: "/user",
    name: "User",
    component: () => import("../views/User"),
    meta: {
      isLogin: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
