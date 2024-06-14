import { incrementCounter, decrementCounter } from "../counterPizzaSlice";
import { useDispatch, useSelector } from "react-redux";
export default function CounterPizza(props) {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counterPizza.value);
    return (
        <div className="Counter">
            <button className="sign" onClick={() => dispatch(decrementCounter())}>
                -
            </button>
			<span className="value">{count}</span>
			<button className="sign" onClick={() => dispatch(incrementCounter())}>
                +
            </button>
        </div>
    );
}
