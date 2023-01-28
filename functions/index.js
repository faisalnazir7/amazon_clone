const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
const { request, response } = require("express");
const stripe = require('stripe')('sk_test_##################################################################')

// API
// 

// - app cofig
const app = express();

// -middlewares
app.use(cors({ origin: true}));
app.use(express.json());

// - API routes
app.get('/', (request, response) => response.status(200).send("hello world"))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Recieved !!!!! for this account >>> ', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, //subunits of currency
        currency: "inr",
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret
    });
})


// -Listen command
exports.api = functions.https.onRequest(app)

// http://127.0.0.1:5001/#################################



// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
