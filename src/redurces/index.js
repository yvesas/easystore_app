const initialState = {
    user: {},
    products: []
}

export default function exit(state = initialState, { type, payload }) {
    switch (type) {
        case 'LOADING_ALL_PRODUCTS':
            return { ...state, products: payload }
        
        default:
            return state
    }
}
