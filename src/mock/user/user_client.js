class UserClient {
    login(id, password) {
      return fetch('http://example.com/login/id+password%27') 
        .then((response) => response.json());
    }
  }
  
  module.exports = UserClient;