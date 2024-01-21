import axios from "axios";
const baseUrl = "https://kawadermedical.com/dissmiss/"

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


export async function getEntityByID({ productID, setLoading, setSProduct}) {
    // console.log(pageNumber)
    setLoading(true)
    console.log("productID", productID)
    let { data } = await axios.get(`${baseUrl}detailsproduct.php?product_id=${productID}`);
    
    if (data) {
        console.log("Sdasadas")
        setLoading(false)    
        setSProduct(data);
    
    }
}



// getEntity()