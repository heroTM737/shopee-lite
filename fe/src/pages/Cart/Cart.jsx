import './Cart.scss'
import {useSelector} from "react-redux";

function Cart() {
    const cartItemList = useSelector((state) => state.cart.items)
    const totalPrice = cartItemList.reduce(
        (total, item) => item.quantity * item.product.price,
        0
    )

    return (
        <div className={'Cart'}>
            <table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Unit Price</th>
                        <th>Total Price</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItemList.map((cartItem, i) => (
                        <tr key={i}>
                            <td>{cartItem.product.name}</td>
                            <td>{cartItem.quantity}</td>
                            <td>{cartItem.product.price}</td>
                            <td>{cartItem.quantity * cartItem.product.price}</td>
                        </tr>
                    ))}
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>{totalPrice}</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            <button>Buy</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Cart
