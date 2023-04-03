import "./HomeProduct.scss"
import { useNavigate } from "react-router-dom";

const imgHost = `${import.meta.env.VITE_API_HOST}/api/files/product`

function HomeProduct({ product }) {
    const navigate = useNavigate();

    const goToProductPage = () => {
        navigate(`/product/${product.id}`)
    }

    return (
        <div
            key={product.id}
            className={"product-item"}
            onClick={goToProductPage}
        >
            <div>
                <img src={`${imgHost}/${product.id}/${product.images[0]}`} alt="img" />
            </div>
            <div>
                {product.name}
            </div>
        </div>
    )
}

export default HomeProduct