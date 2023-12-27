import axios from "axios";

export const fetchCart = async (userId) => {
    try {
        const response = await axios.get(`http://localhost:3000/carts`)
        const cart = response.data.find(item => item.userId === userId)
        return cart
    } catch (e) {
        console.log(e.message)
    }
}
export const updateCart = async (cartId, payload) => {
    try {
        await axios.put(`http://localhost:3000/carts/${cartId}`, payload)
    } catch (e) {
        console.log(e.message)
    }
}
export const createCart = async (payload) => {
    try {
        await axios.post(`http://localhost:3000/carts`, payload)
    } catch (e) {
        console.log(e.message)
    }
}

export const deleteCart = async (cartId) => {
    try {
        const response = await axios.delete(`http://localhost:3000/carts/${cartId}`)
        return response;
    } catch (e) {
        console.log(e.message)
    }
}