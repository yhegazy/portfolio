import {useState} from 'react'

const useProductCounter = () => {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(prevCount => prevCount + 1);
    }

    function decrement() {
        setCount(prevCount => {
            // only decrement if it's bigger than 0
            if (prevCount > 0) {
                return prevCount - 1;
            }
            // don't let it go below 0
            return 0;
        });
    }

    return {count, increment, decrement}
}

export default useProductCounter