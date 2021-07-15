import api from '../services/api';

function getAllProducts() {
  return dispatch => {
    api.get(`/products`).then(res => {
      console.log('return all produtcs: ', res)
      
      //dispatch(loadingProducts())

    }).catch((err) => {
      console.error('Error - Get all products: ',err)
    });
  }
}



function loadingProducts(payload) {
  return { type: 'LOADING_ALL_PRODUCTS', payload}
}


export {  
  getAllProducts 
}
