import axios from 'axios';


export const getPhones = async() => {
    const response = await axios.get('https://dummyjson.com/products?limit=9');
    if(response.status === 200){
        return response.data.products ;
    }

}
export const getMyPhone = async(id) => {
    const response = await axios.get('https://dummyjson.com/products/'+id);
    if(response.status === 200){
        return response.data
    }
}


