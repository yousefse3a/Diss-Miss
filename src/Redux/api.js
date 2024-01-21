import axios from "axios";
export const baseUrl = 'https://kawadermedical.com/dissmiss'

export const Login = async (user) => {
    const { data } = await axios.post(
        `${baseUrl}/login.php`,
        {
            identifier: user.email,
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