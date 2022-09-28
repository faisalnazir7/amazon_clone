import React, { useEffect, useState } from 'react';
import { db } from './firebase';
import './Orders.css';
import { useStateValue } from './StateProvider';
import Order from './Order';
import { collection, doc, getDoc, getDocs, onSnapshot, orderBy, query } from 'firebase/firestore';





function Orders() {
  const [{ user }, dispatch] = useStateValue();
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

// useEffect(() => {
//   // console.log("🔥"+ user);
//   const getDocs = async () => {
//     try {
//       const collRef = await getDocs(collection(db, "users", user?.uid, "orders"));

//       const orderedRef = query(collRef, orderBy("created", "desc"));
//       const docSnap = onSnapshot(orderedRef, (querySnapshot) => {
//         querySnapshot.map((doc, i) => ({
//           key: {i},
//           id: doc.id,
//           data: doc.data(),
//         }));
//         setOrders(docSnap);
//       });
      
//     } catch (err) {
//       console.log(err.message);
//     }
//   };
//   if (user) {
//     getDocs(!user);
//   }
// }, [user]);

useEffect(() => {
  if (user) {
    console.log(user + " 🔥 "+ user?.uid)
    try {
            const collRef = collection(db, "users", user?.uid, "orders");
      
            const orderedRef = query(collRef, orderBy("created", "desc"));
            const docSnap = onSnapshot(orderedRef, (querySnapshot) => {
              querySnapshot.forEach((doc) => {
                // id: doc.id,
                // data: doc.data()
                console.log(doc.id, " => ", doc.data());

              });
              // setOrders(docSnap);
              console.log(doc.id + "🔥" + doc.data);
            });
            
          } catch (err) {
            console.log(err.message);
          }
        
  } else {
    console.log("not found");
    setOrders([]);
  }
}, [user]);


// useEffect(() => {
//   const getDocs = (user) => {
//     try {
//       const collRef = collection(db, "users", user?.uid, "orders","created");
//       const orderedRef = query(collRef, orderBy("created", "desc"));
//       const docSnap = onSnapshot(orderedRef, (querySnapshot) => {
//         querySnapshot.map((doc, i) => ({
//           key: {i},
//           id: doc.id,
//           data: doc.data(),
//         }));
//         setOrders(docSnap);
//       });
//     } catch (err) {
//       console.log(err.message);
//       // console.log("🔥"+snapshot)
//     }
//   };
//   getDocs();
// }, [user]);
  //   console.log(orders);
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