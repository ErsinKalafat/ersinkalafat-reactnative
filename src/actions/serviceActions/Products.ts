import axios from "axios";
import { IProduct } from "../../Interfaces";

class Products {
    public static FetchProducts = async () => {
        return await axios.get("https://62286b649fd6174ca82321f1.mockapi.io/case-study/products")
            .then(res => res.data)
            .catch(error => {
                console.log(error)
            });
    }

    public static PostProduct = async (productInfo: IProduct) => {
        return await axios.post("https://62286b649fd6174ca82321f1.mockapi.io/case-study/products", productInfo)
            .then(res => res.data)
            .catch(error => {
                console.log(error)
            });
    }
}

export default Products
