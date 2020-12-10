import Vue from 'vue';
import * as Sentry from '@sentry/browser';
import { Integrations } from '@sentry/tracing';

export default async({ Vue }) => {
    Sentry.init({
        Vue,
        dsn: 'https://207e3692887948ce8e7935fba5c47318@o489525.ingest.sentry.io/5551994',
        autoSessionTracking: true,
        integrations: [new Integrations.BrowserTracing()],

        // We recommend adjusting this value in production, or using tracesSampler
        // for finer control
        tracesSampleRate: 1.0
    });
};