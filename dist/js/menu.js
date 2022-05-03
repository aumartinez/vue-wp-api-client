//menu.js
import axios from "axios";

export const links = {
   async getLinks() {
      axios
      .get('http://localhost:8090/php-headless-wp/wordpress/wp-json/myroutes/menu')
      .then(response => (this.menu = response))
      .catch(error => console.log(error))
    }
  }
};