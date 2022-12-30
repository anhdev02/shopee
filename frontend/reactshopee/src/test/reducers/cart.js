import * as types from "./../constants/ActionType"
var data = JSON.parse(localStorage.getItem('CART'));
var initialState = [
    {
        product: {
            id: 1,
            name: 'Iphone 7',
            image: 'https://i.imgur.com/LLCrhHs.jpg',
            details: 'Sản phẩm do Apple sản xuất',
            price: 300000
        },
        quantity: 5
    }
];

const cart = (state = initialState, action) =>{
    switch (action.type) {
        case types.ADD_TO_CART:
            console.log(action)
            return {...state}
        default:
            return [...state]
    }
}

export default cart;