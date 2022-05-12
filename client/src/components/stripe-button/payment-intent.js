	import Stripe from 'stripe';

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);


export default async (req, res) => {
  
  console.log('called')

  if(req.method === 'POST') {

    try {
    const amount = 200;
    //const { amount } = JSON.parse(req.body.amount);
    // const { amount } = JSON.parse(event.body);

    const paymentIntent = stripe.paymentIntents.create({
      amount,
      currency: "gbp",
      payment_method_types: ["card"],
    });
    //so not getting anything back here
    //console.log(paymentIntent)
    return {
      statusCode: 200,
      body: JSON.stringify({ paymentIntent }),
    };
  } catch (error) {
    console.log({ error });

    return {
      statusCode: 400,
      body: JSON.stringify({ error }),
    };
  }





    }
  }
    






