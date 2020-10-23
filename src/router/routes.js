import indexPage from 'pages/Index.vue'
import AuctionPage from 'pages/auction_page.vue';
import RequestPage from 'pages/request_page.vue';
import ContactPage from 'pages/contact_page.vue';
import shippingPage from 'pages/shipping_page.vue';
import aboutPage from 'pages/about_page.vue';
import loginPage from 'pages/login.vue';
import registerPage from 'pages/register.vue';
import CarDetailPage from 'pages/auction_car_details.vue';
import biddingLimitPage from 'pages/bidding_limit';
import watchListPage from 'pages/watchlist';


const routes = [{
        path: '/',
        component: () =>
            import ('layouts/MainLayout.vue'),
        children: [
            { path: '', component: indexPage, name: 'homepage' },
            { path: '/auction', name: 'auction', component: AuctionPage },
            { path: '/request', name: 'request', component: RequestPage },
            { path: '/contact', name: 'contact', component: ContactPage },
            { path: '/shipping', name: 'shipping', component: shippingPage },
            { path: '/about', name: 'about', component: aboutPage },
            { path: '/login', name: 'login', component: loginPage },
            { path: '/register', name: 'register', component: registerPage },
            { path: '/auction_car_details', name: 'auction_car_details', component: CarDetailPage, props: true },

            // auth pages
            { path: 'account/bidding_account_limit', name: 'bidding_account_limit', component: biddingLimitPage, meta: { auth: true } },
            { path: 'account/watch_list', name: 'watch_list', component: watchListPage, meta: { auth: true } },
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