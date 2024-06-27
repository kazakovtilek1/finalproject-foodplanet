import ButtonBasketPizza from "./ButtonBasketPizza";
import CompositionPizza from "./CompositionPizza";
import CounterPizza from "./CounterPizza";
import ImagePizza from "./ImagePizza";
import NamePizza from "./NamePizza";
import PricePizza from "./PricePizza";

export default function ElementPizza(props) {
    return (
        <div className="ElementPizza">
            
			<div className="Content">
			<ImagePizza />
                <NamePizza />
                <CompositionPizza />
                <PricePizza />
                <CounterPizza />
                <ButtonBasketPizza />
            </div>
        </div>
    );
}
