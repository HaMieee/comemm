import axios from "axios"

export const fetchProducts = async () => {
    try {
        const response = await axios.get('http://localhost:3000/productNew')
        return response.data
    } catch (e) {
        console.log(e.message)
    }
}