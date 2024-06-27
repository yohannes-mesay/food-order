import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import {
  decreaseItemQuantitiy,
  getQuantityById,
  increateItemQuantitiy,
} from "./cartSlice";

function UpdateItemQuantity({ pizzaId }) {
  const dispatch = useDispatch();
  const quantity = useSelector(getQuantityById(pizzaId));
  console.log(quantity);
  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button
        type="round"
        onClick={() => dispatch(decreaseItemQuantitiy(pizzaId))}
      >
        -
      </Button>
      {quantity}
      <Button
        type="round"
        onClick={() => dispatch(increateItemQuantitiy(pizzaId))}
      >
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
