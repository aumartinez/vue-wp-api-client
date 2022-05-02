//menu.js
import axios from 'axios';

export const links = {
   async getLinks() {
      let url = 'http://localhost:8090/php-headless-wp/wordpress/wp-json/myroutes/menu';
      
      let resp =  await axios
                            .get(url)
                            .then(res => res.data)
                            .catch(error => error);
      
      return resp;
    }
};