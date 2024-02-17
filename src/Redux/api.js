import axios from "axios";
export const baseUrl = 'http://66.29.149.18:8050'
// export const baseUrl = 'https://kawadermedical.com/dissmiss'

export const Login = async (user) => {
    const { data } = await axios.post(
        `${baseUrl}/login`,
        {
            identifier: user.email,
            password: user.pass
        }
    );
    return data;
};

export const addToCart = async (payload) => {
    console.log("add to cart", payload)
    let { data } = await axios.post(`${baseUrl}/addtocart.php`, {
        "user_id": +payload.user_id,
        "token": payload.userToken,
        "product_id": +payload._id,
        "quantity": +payload.Amount
    });
    console.log({ data })
}
export const updateCart = async (payload, products) => {
    let cart_items = products.map((product) => {
        return { product_id: product._id, quantity: product.Amount }
    })

    let { data } = await axios.put(`${baseUrl}/updatecart.php`, {
        "user_id": +payload.user_id,
        "token": payload.userToken,
        "cart_items": cart_items
    });
    console.log({ data })
}