// Import necessary functions from Redux
import { createStore } from 'redux';

// Define initial state
const initialState = {
    data: [],
    loading: true,
    currentPage: 1,
    totalPage: 10
};

// Define reducer function
const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'loading':
            return {
                ...state,
                loading: true
            };
        case 'success':
            return {
                ...state,
                loading: false,
                data: action.payload
            };
        default:
            return state;
    }
};

// Create Redux store
const store = createStore(dataReducer);

// Export the store
export default store;
