//menu.js
import axios from 'axios';

export const episodes = {
   async getEpisodes() {
      let url = 'https://php-training-accedo.000webhostapp.com/wp-json/wp/v2/podcasts';
      
      let resp =  await axios
                        .get(url)
                        .then(res => res.data)
                        .catch(error => error);
      
      return resp;
    },
   async getCategories() {
     let url = 'https://php-training-accedo.000webhostapp.com/wp-json/wp/v2/categories';
      
     let resp =  await axios
                        .get(url)
                        .then(res => res.data)
                        .catch(error => error);
      
      return resp;
   },
   async getTags() {
     let url = 'https://php-training-accedo.000webhostapp.com/wp-json/wp/v2/tags';
      
     let resp =  await axios
                        .get(url)
                        .then(res => res.data)
                        .catch(error => error);
      
      return resp;
   }
};