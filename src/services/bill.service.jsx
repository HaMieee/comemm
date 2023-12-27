import axios from "axios"

export const createBill = async (payload) => {
    try {
        await axios.post('http://localhost:3000/bills', payload)
    } catch (e) {
        console.log(e.message)
    }
}
export const fetchBills = async (userId) => {
    try {
        const response = await axios.get(`http://localhost:3000/bills`)
        const bills = response.data.filter(bill => bill.userId === userId)
        return bills;
    } catch (e) {
        console.log(e.message)
    }
}
export const fetchBill = async (billId) => {
    try {
        const response = await axios.get(`http://localhost:3000/bills/${billId}`)
        return response;
    } catch (e) {
        console.log(e.message)
    }
}