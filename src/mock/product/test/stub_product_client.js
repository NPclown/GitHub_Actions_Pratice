class StubProductClient {
    async fetchItems() {
        return [{item : "Milk", available : true}, {item : "Banna", available : false}]
    }
}

module.exports = StubProductClient;