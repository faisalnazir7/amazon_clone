import { collection, doc, getDoc, getDocs, onSnapshot, orderBy, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from './firebase';
import './Orders.css'
import { useStateValue } from './StateProvider';
import Order from './Order';

function Orders() {
  const [{ basket, user}, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);
//   useEffect(() => {
//     if (user) {
//       // console.log("🔥"+created)

//       // const payRef = doc(db, 'users',user?.uid);

//       // const docSnap = getDoc(payRef);

//       // const q = query(payRef, orderBy("created", "desc"));

//       // if (docSnap.exists()) {
//       //   console.log("Document data:", docSnap.data());
//       // } else {
//       //   // doc.data() will be undefined in this case
//       //   console.log("No such document!");
//       // }

//       // db.collection("users")
//       //   .doc(user?.uid)
//       //   .collection("orders")
//       //   .orderBy("created", "desc")
//       //   .onSnapshot((snapshot) => {
//           // console.log(snapshot);

//       const querySnapshot = getDocs(collection(db, "users"));
// // querySnapshot.forEach((doc) => {
// //   console.log(`${doc.id} => ${doc.data()}`);
// // });
//           setOrders(
//             querySnapshot.docs.map((doc) => ({
//               id: doc.id,
//               data: doc.data(),
//             }))
//           );
//         // });
//     } else {
//       setOrders([]);
//     }
//   }, [user]);
useEffect(() => {
  const getDocs = () => {
    try {
      const collRef = collection(db, "users", user?.id, "orders","created");
      const orderedRef = query(collRef, orderBy("created", "desc"));
      const docSnap = onSnapshot(orderedRef, (querySnapshot) => {
        querySnapshot.map((doc, i) => ({
          key: {i},
          id: doc.id,
          data: doc.data(),
        }));
        setOrders(docSnap);
      });
    } catch (err) {
      console.log(err.message);
      // console.log("🔥"+snapshot)
    }
  };
  getDocs();
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