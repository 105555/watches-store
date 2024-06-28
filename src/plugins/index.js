/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import vuetify from './vuetify'
import router from '../router'
import store from '../store'
export function registerPlugins (app) {
  app
    .use(vuetify)
    .use(router)
    .use(store)
}


// function findGCD(n1, n2){
//   let arr1 = [];
//   let arr2 = [];
  
//   for(let i = 0 ; i<=n1 ; i++){
//       if(n1 % i === 0){
//           arr1.push(i);
//       }
//   }
  
//   for(let i = 0 ; i<=n2 ; i++){
//       if(n2 % i === 0){
//           arr2.push(i);
//       }
//   }
//   console.log(arr1);
//   console.log(arr2);
//   const newArr = arr1.filter((v)=>
//       {
//         console.log(arr2.indexOf(v));

//         console.log(v);
//           // return arr2.indexOf(v);
//       }
//   )
  
//   // newArr!=[] ? true : false;
// }

// findGCD(5,10);
