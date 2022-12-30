var initialState = [
    {
        id: 1,
        name: 'iphone 7',
        image: '',
        details: '',
        price: 300,
        inventory: 10
    },
    {
        id: 2,
        name: 'iphone 8',
        image: '',
        details: '',
        price: 400,
        inventory: 10
    },
    {
        id: 3,
        name: 'iphone 10',
        image: '',
        details: '',
        price: 500,
        inventory: 10
    }
]

const products = (state = initialState, action) =>{
    switch (action.type) {
        default:
            return [...state]
    }
}

export default products;