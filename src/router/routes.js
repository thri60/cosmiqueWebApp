import indexPage from 'pages/Index.vue'
import AuctionPage from 'pages/auction_page.vue';


const routes = [{
        path: '/',
        component: () =>
            import ('layouts/MainLayout.vue'),
        children: [
            { path: '', component: indexPage, name: 'homepage' },
            { path: '/auctions', name: 'auction', component: AuctionPage }
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