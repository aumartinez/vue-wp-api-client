//menu.js
import axios from 'axios';

export const api = {
   async getData(url) {            
      let resp =  await axios
                        .get(url)
                        .then(this.sleeper(500))
                        .then(res => res.data)
                        .catch(error => error);
      
      return resp;
    },
    sleeper(ms) {
       return function(x) {
        return new Promise(resolve => setTimeout(() => resolve(x), ms));
      };
    }
};