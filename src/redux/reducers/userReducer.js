const initialState = {
    name: '',
    age: 0,
    gender: ''
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_NAME':
            return { ...state, name: action.payload };
        case 'SET_AGE':
            return { ...state, age: action.payload };
        case 'SET_GENDER':
            return { ...state, gender: action.payload };
        default:
            return state;
    }
};

export default userReducer;
