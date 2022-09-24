import { doc, getDoc, orderBy, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from './firebase';
import './Orders.css'
import { useStateValue } from './StateProvider';
import Order from './Order';

function Orders() {
  const [{ basket, user, created }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    if (user) {

      const payRef = doc(db, 'users',user?.uid, 'orders', doc.id);

      const docSnap = getDoc(payRef);

      const q = query(payRef, orderBy("created", "desc"));

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }

      

      // db.collection("users")
      //   .doc(user?.uid)
      //   .collection("orders")
      //   .orderBy("created", "desc")
      //   .onSnapshot((snapshot) => {
      //     // console.log(snapshot);
          setOrders(
            q.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        // });
    } else {
      setOrders([]);
    }
  }, [user]);
  //   console.log(orders);
  return (
    <div className="orders">
      <h3>Your Orders</h3>
      <div className="orders__order">
        {orders?.map((order, i) => (
          <Order key={i} order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;