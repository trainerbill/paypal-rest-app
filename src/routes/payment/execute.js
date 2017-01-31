import * as express from 'express';
import paypal from '../../sdkconfig';
export let paymentCreateRoutes = express.Router();



let create_payment_json = {
    "intent": "sale",
    "payer": {
        "payment_method": "credit_card",
        "funding_instruments": [{
            "credit_card": {
                "type": "visa",
                "number": "4111111111111111",
                "expire_month": "11",
                "expire_year": "2022",
                "cvv2": "874",
                "first_name": "Joe",
                "last_name": "Shopper",
                "billing_address": {
                    "line1": "52 N Main ST",
                    "city": "Johnstown",
                    "state": "OH",
                    "postal_code": "43210",
                    "country_code": "US"
                }
            }
        }]
    },
    "transactions": [{
        "amount": {
            "total": "7",
            "currency": "USD",
            "details": {
                "subtotal": "5",
                "tax": "1",
                "shipping": "1"
            }
        },
        "description": "This is the payment transaction description."
    }]
};



paymentCreateRoutes.get('/payment/create', (req, res) => {
    paypal.payment.create(create_payment_json, function (error, payment) {
        if (error) {
            res.send(error);
        } else {
            res.send(payment);
        }
    });
});