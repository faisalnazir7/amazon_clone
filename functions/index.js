const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
const { request, response } = require("express");
const stripe = require('stripe')('sk_test_51LkkMkSELcwMLRfIQt1yyBOG3Fe7lflkKlCNV1ebHyiUmBBLQG28LwlOkMhRD0w4kymROFue6IZkAuSqxZHf58ZJ00zJM7hxka')

// API

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

// End point
// http://localhost:5001/clone-24c33/us-central1/api