//menu.js
import axios from 'axios';

export const episodes = {
   async getEpisodes() {
      let url = 'http://localhost:8090/php-headless-wp/wordpress/wp-json/wp/v2/podcasts';
      
      let resp =  await axios
                        .get(url)
                        .then(res => res.data)
                        .catch(error => error);
      
      return resp;
    },
   async getCategories() {
     let url = 'http://localhost:8090/php-headless-wp/wordpress/wp-json/wp/v2/categories';
      
      let resp =  await axios
                        .get(url)
                        .then(res => res.data)
                        .catch(error => error);
      
      return resp;
   },
   async getTags() {
     let url = 'http://localhost:8090/php-headless-wp/wordpress/wp-json/wp/v2/tags';
      
      let resp =  await axios
                        .get(url)
                        .then(res => res.data)
                        .catch(error => error);
      
      return resp;
   }
};