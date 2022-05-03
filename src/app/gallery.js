//gallery.js
import axios from 'axios';

export const gallery = {
   async getContent() {
      let url = 'http://localhost:8090/php-headless-wp/wordpress/wp-json/wp/v2/pages/?slug=gallery';
      
      let resp =  await axios
                        .get(url)
                        .then(res => res.data)
                        .catch(error => error);
      
      return resp;
    }
};