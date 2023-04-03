import "./Home.scss"
import { useEffect, useState } from "react";
import ProductService from "@/services/product.service.js";
import HomeProduct from "@/pages/Home/HomeProduct.jsx";

function Home() {
    const [productList, setProductList] = useState([])

    useEffect(() => {
        ProductService.search().then(result => {
            setProductList(result.data.items)
        })
    }, [])

    return (
        <div className={"main-container"}>
            <div className={"product-grid"}>
                {productList.map(product => (
                    <HomeProduct product={product} key={product.id}/>
                ))}
            </div>

        </div>
    )
}

export default Home
