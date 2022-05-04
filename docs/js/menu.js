//menu.js
import axios from 'axios';

export const links = {
   async getLinks() {
      let url = 'https://php-training-accedo.000webhostapp.com/wp-json/myroutes/menu';
      
      let resp =  await axios
                        .get(url)
                        .then(res => res.data)
                        .catch(error => error);
      
      return resp;
    }
};