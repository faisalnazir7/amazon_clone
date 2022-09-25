import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import "./Payment.css";
import {CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import {useNavigate} from "react-router-dom";
import axios from "./axios";
import { db } from './firebase';
import { collection, addDoc, doc, setDoc } from "firebase/firestore";

function Payment() {
    const [{basket,user}, dispatch] = useStateValue();

    const navigate = useNavigate()

    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [error, setError] = useState(null);
    const [processing, setProcessing] = useState("");
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);
    

    useEffect(() => {
        //generate special stripe secret allows us to charge a customer

        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    }, [basket])

    console.log('the secret is >>> ', clientSecret);
    console.log('🤞', user)

    const handleSubmit = async (e) => {
        // do stuff fancy stripe
        e.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
            }
        }).then(( {paymentIntent} ) => {
            //pay.Intent = pay. confirmation

            // db.collection("users")
            //   .addDoc(user?.uid)
            //   .collection("orders")
            //   .addDoc(paymentIntent.id)
            //   .set({
            //     basket: basket,
            //     amount: paymentIntent.amount,
            //     created: paymentIntent.created
            //   })

            try {

                
                console.log("🔥"+user?.uid);
                console.log("🔥"+paymentIntent.id);
                console.log("🔥"+paymentIntent.amount);
                console.log("🔥"+paymentIntent.created);

                const payRef = doc(db, 'users',user?.uid, 'orders',paymentIntent.id);
                
                setDoc(doc(db, "users",user?.uid, "orders",paymentIntent.id), {
                    basket: basket,
                    amount: paymentIntent.amount,
                    created: paymentIntent.created
                  });
                

              } catch (e) {
                console.error("Error adding document: ", e);
              }
            


            setSucceeded(true);
            setError(null);
            setProcessing(false);

           dispatch({
            type: "EMPTY_BASKET"
        });

        navigate('/orders', { replace: true});
            
        });

    };

    const handleChange = (e) => {
        //listen changes in card element
        //displays any errors on typos
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "");
    }



  return (
    <div className='payment'>
        <div className='payment__container'>
            <h1>
                Checkout (
                    <Link to="/checkout">{basket?.length} items</Link>
                )
            </h1>
            {/* delvery address */}
            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Delivery Address</h3>
                    <div className='payment__address'>
                        <p>{user?.email}</p>
                        <p>123 react lane</p>
                        <p>Kashmir</p>
                    </div>
                </div>

            </div>
            {/* review items */}
            <div className='payment__section'>
            <div className='payment__title'>
                    <h3>Review items and delivery</h3>
                </div>
                <div className='payment__items'>
                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
            </div>
            {/* payment method */}
            <div className='payment__section'>
            <div className='payment__title'>
                    <h3>Payment Method</h3>
                    <div className='payment__details'>
                        <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange} />

                        <div className='payment__priceContainer'>
                        <CurrencyFormat
                            renderText={(value) => (
                                <h3>Order Total: {value} </h3>
                            )}
                            decimalScale={2}
                            value={getBasketTotal(basket)}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"Rs."}
                        />
                        <button disabled={processing || disabled || succeeded}>
                                <span> {processing ? <p>Processing</p> : "Buy Now" } </span>
                        </button>
                        </div>
                        {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>    
    </div>
  )
}

export default Payment