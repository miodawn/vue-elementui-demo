import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import BookHome from '../views/BookHome.vue'
import AddBook from '../views/AddBook.vue'
import UpdateBook from '../views/UpdateBook.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: '图书管理',
        component: Index,
        show: true,
        redirect: "/BookHome",
        children: [
            {
                path: '/BookHome',
                name: '查询图书',
                component: BookHome,
                show: true,
            },
            {
                path: '/AddBook',
                name: '添加图书',
                component: AddBook,
                show: true,
            },
            {
                path: '/update',
                name: '更新图书信息',
                component: UpdateBook,
                show: false,
            }
        ]
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
