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
import savedSearchesPage from 'pages/saved_searches';
import myBidsPage from 'pages/my_bids';
import transactionPage from 'pages/transactions';
import contactInfoPage from 'pages/contact_information';
import billing_informationPage from 'pages/billing_information';
import password_loginPage from 'pages/password_login';
import documentInfoPage from 'pages/document_ids';
import faqPage from "pages/faq_page.vue";
import SearchResultsPage from "pages/search_results.vue";
import newPartsPage from "pages/newPartsPage.vue";
import usedPartsPage from "pages/usedPartsPage.vue";
import reviewPage from "pages/reviewPage.vue";


const routes = [{
        path: "/",
        component: () =>
            import ("layouts/MainLayout.vue"),
        children: [
            { path: "", component: indexPage, name: "homepage" },
            {
                path: "/search_results",
                name: "search",
                component: SearchResultsPage,
                props: true
            },
            { path: "/auction", name: "auction", component: AuctionPage },
            { path: "/request", name: "request", component: RequestPage },
            { path: "/contact", name: "contact", component: ContactPage },
            { path: "/shipping", name: "shipping", component: shippingPage },
            { path: "/about", name: "about", component: aboutPage },
            { path: "/login", name: "login", component: loginPage },
            { path: "/register", name: "register", component: registerPage },
            {
                path: "/auction_car_details",
                name: "auction_car_details",
                component: CarDetailPage,
                props: true
            },
            { path: "/faq", name: "faq", component: faqPage },
            { path: "/newParts", name: "newParts", component: newPartsPage },
            { path: "/usedParts", name: "usedParts", component: usedPartsPage },
            { path: "/CA_reviews", name: "reviews", component: reviewPage },

            // auth pages
            {
                path: "account/bidding_account_limit",
                name: "bidding_account_limit",
                component: biddingLimitPage,
                meta: { auth: true }
            },
            {
                path: "account/watch_list",
                name: "watch_list",
                component: watchListPage,
                meta: { auth: true }
            },
            {
                path: "account/saved_searches",
                name: "saved_searches",
                component: savedSearchesPage,
                meta: { auth: true }
            },
            {
                path: "account/my_bids",
                name: "my_bids",
                component: myBidsPage,
                meta: { auth: true }
            },
            {
                path: "account/transactions",
                name: "transactions",
                component: transactionPage,
                meta: { auth: true }
            },
            {
                path: "account/contact_information",
                name: "contact_information",
                component: contactInfoPage,
                meta: { auth: true }
            },
            {
                path: "account/billing_information",
                name: "billing_information",
                component: billing_informationPage,
                meta: { auth: true }
            },
            {
                path: "account/password_loginPage",
                name: "password_login",
                component: password_loginPage,
                meta: { auth: true }
            },
            {
                path: "account/documents_and_ids",
                name: "documents_and_ids",
                component: documentInfoPage,
                meta: { auth: true }
            }
        ]
    },

    // Always leave this as last one,
    // but you can also remove it
    {
        path: "*",
        component: () =>
            import ("pages/Error404.vue")
    }
];

export default routes