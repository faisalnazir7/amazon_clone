import React, { useEffect, useState } from 'react';
import { db } from './firebase';
import './Orders.css';
import { useStateValue } from './StateProvider';
import Order from './Order';
import { collection, doc, getDoc, getDocs, onSnapshot, orderBy, query } from 'firebase/firestore';





function Orders() {
  const [{ user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);
  

useEffect(() => {
  if (user) {
    console.log(user + " 🔥 "+ user?.uid)
    try {
            const collRef = collection(db, "users", user?.uid, "orders");
      
            const orderedRef = query(collRef, orderBy("created", "desc"));
            const docSnap = onSnapshot(orderedRef, (querySnapshot) => {
              const orderArray = [];
              querySnapshot.forEach((doc) => {
                orderArray.push({
                  id: doc.id,
                  data: doc.data()
                })

              })
              setOrders(orderArray);

});

            
          } catch (err) {
            console.log(err.message);
          }
        
  } else {
    console.log("not found");
    setOrders([]);
  }
}, [user]);

  return (
    <div className="orders">
      <h3>Your Orders</h3>
      <div className="orders__order">
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;