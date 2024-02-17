import axios from "axios";
const baseUrl = "http://66.29.149.18:8050"

export async function getEntity({ pageNumber = 1, setLoading, setAllProduct }) {
    // console.log(pageNumber)
    setLoading(true)
    let { data } = await axios.get(`${baseUrl}product.php?page=${pageNumber}`);
    console.log(data)
    if (data) {
        setLoading(false)
        console.log(data)
        // setAllProduct((prev) => {
        //     console.log(prev)
        //     return [...data.data]
        // })
        setAllProduct((prevProducts) => [...prevProducts, ...data.data]);
    }
}


export async function getEntityByID(productID) {
    let { data } = await axios.get(`${baseUrl}detailsproduct.php?product_id=${productID}`);
    return data
}



// getEntity()

let x = {
    "param_used": "product_id",
    "used_value": "6",
    "products": {
        "Red": {

            "product_id": 6,
            "code": "P001",
            "name": "Aura &&",
            "description": "Auror",
            "price": "1040.20",
            "category": "TOPS",
            "stock": 12,
            "size": ["Medium", "xl"],
            "media_url": "http://66.29.149.18/storage/question/question_1-1-0-2_9aeba521-d873-49a3-b48d-9a5c1616dc8e_6.png"

        },
        "blue": {


            "product_id": 2,
            "code": "P001",
            "name": "Aura &&",
            "description": "Auror",
            "price": "1040.20",
            "category": "TOPS",
            "stock": 12,
            "size": ["small", "xl"],
            "media_url": "http://66.29.149.18/storage/question/question_1-1-0-2_9aeba521-d873-49a3-b48d-9a5c1616dc8e_6.png"



        }
    }
}
