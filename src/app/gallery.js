//gallery.js
import axios from 'axios';

export const gallery = {
   async getContent() {
      let url = 'https://php-training-accedo.000webhostapp.com/wp-json/wp/v2/pages/?slug=gallery';
      
      let resp =  await axios
                        .get(url)
                        .then(res => res.data)
                        .catch(error => error);
      
      return resp;
    }
};