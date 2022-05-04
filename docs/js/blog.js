//menu.js
import axios from 'axios';

export const blogs = {
   async getBlogs() {
      let url = 'https://php-training-accedo.000webhostapp.com/wp-json/wp/v2/posts?category=blog&_embed';
      
      let resp =  await axios
                        .get(url)
                        .then(res => res.data)
                        .catch(error => error);
      
      return resp;
    }
};