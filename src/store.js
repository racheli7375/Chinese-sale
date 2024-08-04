import produce from 'immer'
import { createStore } from 'redux'
const initialState = {
    products: [
    ],
    donations: [],
}
export const reducer = produce((state, action) => {
    switch (action.type) {
        case 'addItem': {
            state.products.push(action.payload);
            break;
        }
        case 'addDonation': {
            state.donations.push(action.payload);
            break;
        }
        case 'initalItems': {
            state.products = action.payload;
            break;
        }
        case 'updateItem': {
            let item = state.products.find(x => x.id == action.payload.id);
            item.name = action.payload.name;
            item.picture = action.payload.picture;
            item.price = action.payload.price;
        }
    }

}, initialState
)

export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());