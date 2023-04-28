import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setName, setAge, setGender } from './redux/actions/userActions';
import { increment, decrement } from './redux/actions/counterActions';

function App() {
    const user = useSelector(state => state.user);
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();

    const handleNameChange = e => {
        dispatch(setName(e.target.value));
    };

    const handleAgeChange = e => {
        dispatch(setAge(e.target.value));
    };

    const handleGenderChange = e => {
        dispatch(setGender(e.target.value));
    };

    const handleIncrement = () => {
        dispatch(increment());
    };

    const handleDecrement = () => {
        dispatch(decrement());
    };

    return (
        <div>
            <h1>User Information</h1>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" value={user.name} onChange={handleNameChange} />
            </div>
            <div>
                <label htmlFor="age">Age:</label>
                <input type="number" id="age" value={user.age} onChange={handleAgeChange} />
            </div>
            <div>
                <label htmlFor="gender">Gender:</label>
                <select id="gender" value={user.gender} onChange={handleGenderChange}>
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </div>
            <hr />
            <h1>Counter</h1>
            <div>
                <button onClick={handleIncrement}>Increment</button>
                <span>{counter.count}</span>
                <button onClick={handleDecrement}>Decrement</button>
            </div>
        </div>
    );
}

export default App;
