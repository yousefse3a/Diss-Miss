import axios from "axios";
// export const baseUrl = 'http://localhost:4000'
export const baseUrl = 'https://ecommercev0.onrender.com'

export const Login = async (user) => {
    const { data } = await axios.post(
        `${baseUrl}/signin`,
        {
            email: user.email,
            password: user.pass
        }
    );
    return data;
};

export const updateCart = async (userToken, cartId, products) => {
    let {data} = await axios.put(`${baseUrl}/Cart/${cartId}`, { products }, {
        headers: {
            authorization: `Bearer ${userToken}`
        }
    });
    console.log({ data })
}