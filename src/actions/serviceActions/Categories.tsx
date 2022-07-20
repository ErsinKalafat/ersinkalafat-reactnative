import axios from "axios";

class Categories {
    public static fetchCategories = async () => {
        return await axios.get("https://62286b649fd6174ca82321f1.mockapi.io/case-study/categories")
            .then(res => res.data)
            .catch(error => {
                console.log(error)
            });
    }
}

export default Categories
