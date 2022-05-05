<template>
  <section class="bg-fade">
    <h2 class="d-none">Gallery</h2>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2 class="text-center gallery-title">
          Our Gallery
          </h2>
            <div class="grid">
              <div class="grid-width-2"
              v-if="hasTen"
              v-for="(i,n) in 2"
              :key="i"
              >
                <div class="grid-col-even">
                  <div class="grid-picture"
                  v-if="even"
                  v-for="(index, item) in 3"
                  :key="index"
                  >
                    <img alt="Gallery picture" :src="imgs[item + (n*5)]"  />
                  </div>
                </div>
                <div class="grid-col-odd">
                  <div class="grid-picture"
                  v-if="odd"
                  v-for="(index, item) in 2"
                  :key="index"
                  >
                    <img alt="Gallery picture" :src="imgs[item+3+(n*5)]" />
                  </div>
                </div>
              </div>
            </div><!-- /grid -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {api} from '../api.js';

export default {
  name: 'Gallery',
  data () {
    return {
      even: false,
      odd: false,
      hasTen: false,
      imgs: [],
      outCols: 0,
    }
  },
  mounted () {
    this.getGalleryImages();
  },
  methods: {
    getGalleryImages: function(){
      let url = 'https://php-training-accedo.000webhostapp.com/wp-json/wp/v2/pages/?slug=gallery';
      
      let res = api.getData(url);    
      let getImages = () => {
        res.then(result => {        
          let str = result[0].content.rendered;
          let doc = new DOMParser().parseFromString(str, 'text/html');
          let arr = doc.querySelectorAll('img');
          
          if (arr.length >= 10) {
            this.hasTen = true;
            this.even = true;
            this.odd = true;
          }
          
          this.outCols = Math.floor(arr.length/5);
          
          let src = [];
          
          for (let i = 0; i < arr.length; i++) {
            src.push(arr[i].src);
          }
          
          this.imgs = src;
        });
      }
      getImages();  
    }
  }
}
</script>