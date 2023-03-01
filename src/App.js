// import Cart from "./components/Cart/Cart";
// import Layout from "./components/Layout/Layout";
// import Products from "./components/Shop/Products";
// import { useSelector, useDispatch } from "react-redux";
// import { useEffect, Fragment } from "react";
// import { uiActions } from "./store/ui-slice";
// import Notification from "./components/UI/Notification";

// let isInitial = true;

// function App() {
//   const dispatch = useDispatch();
//   const showCart = useSelector((state) => state.ui.cartIsVisible);
//   const cart = useSelector((state) => state.cart);
//   const notification = useSelector((state) => state.ui.notification);
  
//   useEffect(() => {
//     if(isInitial) { 
//       isInitial = false; 
//       return;
//     }
//     const sendCartData = async () => {
//       dispatch(
//         uiActions.showNotification({
//           status: "pending",
//           title: "Sending...",
//           message: "Sending cart data!",
//         })
//       );

//       const response = await fetch(
//         "https://react-http-dd11f-default-rtdb.firebaseio.com/cart.json",
//         {
//           method: "PUT",
//           body: JSON.stringify(cart),
//         }
//       );

//       if (!response.ok) {
//         throw new Error("Sending cart data failed!");
//       }

//       dispatch(
//         uiActions.showNotification({
//           status: "success",
//           title: "Success!",
//           message: "Sent cart data successfully!",
//         })
//       );

//       // const resposneData = await response.json();
//     };


//     sendCartData().catch((error) => {
//       dispatch(
//         uiActions.showNotification({
//           status: "error",
//           title: "Error!",
//           message: "Sending cart data failed!",
//         })
//       );
//     });
//   }, [cart, dispatch]);

//   return (
//     <Fragment>
//       {notification && (
//         <Notification
//           status={notification.status}
//           title={notification.title}
//           message={notification.message}
//         />
//       )}
//       <Layout>
//         {showCart && <Cart />}
//         <Products />
//       </Layout>
//     </Fragment>
//   );
// }

// export default App;



// import { Fragment, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';

// import Cart from './components/Cart/Cart';
// import Layout from './components/Layout/Layout';
// import Products from './components/Shop/Products';
// import Notification from './components/UI/Notification';
// // import { sendCartData } from './store/cart-slice';
// import { sendCartData, fetchCartData } from './store/cart-actions';

// let isInitial = true;

// function App() {
//   const dispatch = useDispatch();
//   const showCart = useSelector((state) => state.ui.cartIsVisible);
//   const cart = useSelector((state) => state.cart);
//   const notification = useSelector((state) => state.ui.notification);
  
//   useEffect(() => {
//     dispatch(fetchCartData())
//   }, [dispatch]);

//   useEffect(() => {
//     if (isInitial) {
//       isInitial = false;
//       return;
//     }

//     cart.changed && dispatch(sendCartData(cart));

//   }, [cart, dispatch]);

//   return (
//     <Fragment>
//       {notification && (
//         <Notification
//           status={notification.status}
//           title={notification.title}
//           message={notification.message}
//         />
//       )}
//       <Layout>
//         {showCart && <Cart />}
//         <Products />
//       </Layout>
//     </Fragment>
//   );
// }

// export default App;



import { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { sendCartData, fetchCartData } from './store/cart-actions';

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;