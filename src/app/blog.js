//menu.js
import axios from 'axios';

export const blogs = {
   async getBlogs() {
      let url = 'http://localhost:8090/php-headless-wp/wordpress/wp-json/wp/v2/posts?category=blog&_embed';
      
      let resp =  await axios
                        .get(url)
                        .then(res => res.data)
                        .catch(error => error);
      
      return resp;
    }
};