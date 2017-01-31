import { app } from '../express';

import { paymentCreateRoutes } from './payment/create';

let routes = [
    paymentCreateRoutes
];

routes.forEach(route => app.use(route));