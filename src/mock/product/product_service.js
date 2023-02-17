class ProductService {
    constructor(productClient) {
        this.ProductClient = productClient;
    }

    fetctAvailableItems(){
        return this.ProductClient.fetchItems().then((items) => items.filter((item) => item.available));
    }
}

module.exports = ProductService;