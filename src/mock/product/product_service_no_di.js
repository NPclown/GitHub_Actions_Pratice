/* No dependency injection (Bad version)*/

const ProductClient = require('./product_client');

class ProductService {
    constructor() {
        this.ProductClient = new ProductClient();
    }

    fetctAvailableItems(){
        return this.ProductClient.fetchItems().then((items) => items.filter((item) => item.available));
    }
}

module.exports = ProductService;