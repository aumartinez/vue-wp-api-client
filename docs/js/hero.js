//menu.js
import axios from 'axios';

export const hero = {
   async getHeroPost() {
      let url = 'http://localhost:8090/php-headless-wp/wordpress/wp-json/wp/v2/podcasts?orderby=id&order=asc&per_page=1';
      
      let resp =  await axios
                        .get(url)
                        .then(res => res.data)
                        .catch(error => error);
      
      return resp;
    }
};