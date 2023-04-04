import './ProductDetails.scss'
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import ProductService from "@/services/product.service.js";
import {useDispatch} from 'react-redux'
import { addItem, addItemById } from "@/store/cart.slice.js";

const imgHost = `${import.meta.env.VITE_API_HOST}/api/files/product`

function ProductDetails() {
    const dispatch = useDispatch()
    const params = useParams()
    const [product, setProduct] = useState(null)
    const [quantity, setQuantity] = useState(1)

    useEffect(() => {
        ProductService.read(params.id).then(result => {
            setProduct(result.data)
        })
    }, [params.id])

    const addToCart = () => {
        // add item using product object
        // dispatch(addItem({
        //     product,
        //     quantity
        // }))

        // add item using product id
        dispatch(addItemById({
            id: product.id,
            quantity
        }))
    }

    if (!product) {
        return null
    }

    return (
        <div className={'ProductDetails'}>
            <div>
                <img src={`${imgHost}/${product.id}/${product.images[0]}`} alt="img"/>
            </div>
            <div>
                <div className={'product-name'}><b>{product.name}</b></div>
                <div className={'price'}>{product.price}</div>
                <div>
                    <input
                        type="number"
                        value={quantity}
                        onChange={e => setQuantity(Number(e.target.value))}
                        min={1}
                    />
                </div>
                <div>
                    <button onClick={addToCart}>Add to cart</button>
                </div>
                <div>
                    {product.description}
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
