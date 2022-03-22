// import { createContext, useState } from "react";

// export const CreateContext = CreateContext();

// // desafio additem, removeitem, clear, isInCart

// const CreateContext = () => {
//   const [cart, setCart] = useState([]);

//   // ADDITEM ESTA OK
//   const addItem = (product, count) => {
//     let cartProducto = { product, count };
//     console.log("carProduct", cartProduct);
//     let cartAux = [];
//     if (isInCart(product)) {
//         // 1-buscar elemento en el carrito
//         cartProduct = cart.find(item => item.prod == product)
//         //2-modiciar count
//         cartProduct.count = cartProduct.count + count
//         //3-actualizar cartaux
//        cartAux = [...count]
//     } else {
//         console.log("no esta en el carrito")
//         // agregamos producto al carrito
//         cartAux = [cartProduct, ...cart];
//     }
//     // 1 ver si esta en el carrito, 2 si esta modificamos la cantidad, sino esta lo agregamos
//  //los 3 puntos suma todo lo que tiene ese array
//     setCart(cartAux);
//   };

//   // rermove item
//   const removeItem = (product) => {
// //   1-saber si esta en carrito
// if (isInCart(product)) {
//     console.log("para ayuda memoria de remover")
//     // 2- buscar dentro del carrito CAMBIAR EL DESIGUAL
//     const cartAux = cart.filter(item => item.product ≠ product);
//     // 3- actualizar mi carrito con los cambios que hice
//     setCart(cartAux)

// }

//   };

// //   LIMPIAR CARRITO OK
// // boton con la funcion onClick={clear}, hay que llevarla a el boton de aca mismo
//   const clear = () => {
//     setCart([])
//   };

//   const isInCart = (product) => {
//     //   1, revisar que el carrito tengo el producto
//     // 2 revisar que el producto este en el carrito
//     return cart && cart.some(item => item.product == product)
//     }
//   };

//   return <CreateContext.Provider value={{}}>{children}</CreateContext.Provider>;
//   )};

// export default CreateContext;
