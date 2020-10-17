import indexPage from 'pages/Index.vue'
import AuctionPage from 'pages/auction_page.vue';
import RequestPage from 'pages/request_page.vue';
import ContactPage from 'pages/contact_page.vue';
import loginPage from 'pages/login.vue';
import registerPage from 'pages/register.vue';


const routes = [{
        path: '/',
        component: () =>
            import ('layouts/MainLayout.vue'),
        children: [
            { path: '', component: indexPage, name: 'homepage' },
            { path: '/auctions', name: 'auction', component: AuctionPage },
            { path: '/request', name: 'request', component: RequestPage },
            { path: '/contact', name: 'contact', component: ContactPage },
            { path: '/login', name: 'login', component: loginPage },
            { path: '/register', name: 'register', component: registerPage },
        ]
    },

    // Always leave this as last one,
    // but you can also remove it
    {
        path: '*',
        component: () =>
            import ('pages/Error404.vue')
    }
]

export default routes