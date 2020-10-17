import indexPage from 'pages/Index.vue'
import AuctionPage from 'pages/auction_page.vue';
import RequestPage from 'pages/request_page.vue';
import ContactPage from 'pages/contact_page.vue';
<<<<<<< HEAD
import loginPage from 'pages/login.vue';
import registerPage from 'pages/register.vue';

=======
import CarDetailPage from 'pages/auction_car_details.vue';
>>>>>>> 6db83294afb3bf1480f091843cdb334cbb9f43bf

const routes = [{
        path: '/',
        component: () =>
            import ('layouts/MainLayout.vue'),
        children: [
            { path: '', component: indexPage, name: 'homepage' },
            { path: '/auctions', name: 'auction', component: AuctionPage },
            { path: '/request', name: 'request', component: RequestPage },
            { path: '/contact', name: 'contact', component: ContactPage },
<<<<<<< HEAD
            { path: '/login', name: 'login', component: loginPage },
            { path: '/register', name: 'register', component: registerPage },
=======
            { path: '/auction_car_details', name: 'auction_car_details', component: CarDetailPage, props: true },
>>>>>>> 6db83294afb3bf1480f091843cdb334cbb9f43bf
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