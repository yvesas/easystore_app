const initialState = {
    user: {},
    products: [],
    categories: [],
    productSelected: {},    
    categorySelected: ''
}

export default function exit(state = initialState, { type, payload }) {
    switch (type) {
        case 'LOADING_ALL_PRODUCTS':
            return { ...state, products: payload }
        case 'LOADING_PRODUCT':
            return { ...state, productSelected: payload }
        case 'LOADING_ALL_CATEGORIES':
            return { ...state, categories: payload }
        case 'LOADING_PRODUCTS_CATEGORY':
            return { ...state, products: payload }
        
        default:
            return state
    }
}
