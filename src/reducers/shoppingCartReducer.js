const initialState = {
    cart:[]
}

export default (state = initialState, action) => {
    switch(action.type){
        case 'SET_CART':
            return {...state, cart:action.payload.cart};
            break;
    }

    return state;
}