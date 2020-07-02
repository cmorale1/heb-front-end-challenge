import axios from 'axios';

const localhostUrl = 'http://localhost:5000';

class ProductService {

    // Service to retrieve all products in HEB database
    static async getProducts(parameters) {
        try {
            return await axios.get(`${localhostUrl}/v1/products`, { params: parameters});
        } catch (e) {
            return e;
        }
    }
}

export default ProductService;