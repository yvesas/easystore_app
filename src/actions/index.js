import api from '../services/api';

function getAllProducts() {
  return dispatch => {
    api.get(`/products`).then(res => {
      console.log('return all produtcs: ', res)
      
      //dispatch(loadingAllProducts())

    }).catch((err) => {
      console.error('Error - getAllProducts: ',err)
    });
  }
}

function getProductDetail(product) {
  return dispatch => {
    api.get(`/products${product.id}`).then(res => {
      console.log('return deital: ', res)
      
      //dispatch(loadingProducts())

    }).catch((err) => {
      console.error('Error - getProductDetail: ',err)
    });
  }
}

function getCategories() {
  return dispatch => {
    api.get(`/products/categories`).then(res => {    
      dispatch(loadingAllCategories(res.data))
    }).catch((err) => {
      console.error('Error - getCategories: ',err)
    });
  }
}

function getAllProductsByCategory(category) {
  return dispatch => {
    api.get(`/products/category/${category}`).then(res => {
      console.log('return products: ', res)
      
      //dispatch(loadingAllProductsByCategory())

    }).catch((err) => {
      console.error('Error - getAllProductsByCategory: ',err)
    });
  }
}


function loadingAllProducts(payload) {
  return { type: 'LOADING_ALL_PRODUCTS', payload}
}
function loadingProduct(payload) {
  return { type: 'LOADING_PRODUCT', payload}
}
function loadingAllProductsByCategory(payload) {
  return { type: 'LOADING_PRODUCTS_CATEGORY', payload}
}
function loadingAllCategories(payload) {
  return { type: 'LOADING_ALL_CATEGORIES', payload}
}


export {  
  getAllProducts, getProductDetail,
  getCategories, getAllProductsByCategory
}
