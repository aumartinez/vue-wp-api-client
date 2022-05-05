<template>
  <section class="bg-light">
    <h2 class="d-none">Hero</h2>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <article>
            <div class="hero-label">
              <p>
                Trending Episode
              </p>
            </div>
            
            <h1 class="hero-title"
            v-if="hasPost"
            >
            {{post.title.rendered}}
            </h1>
            
            <div class="hero-content" 
            v-if="hasPost"
            v-html="post.excerpt.rendered"
            >
            </div>
          </article>
          <article>
            <div class="subhero-label">
              <p>
                Listen On Also
              </p>
            </div>
            <ul class="cards-wrapper list-inline">
              <li class="podcast-card list-inline-item">
                <a href="#">
                  <img class="img-responsive" alt="Spotify icon" src="img/listen-spotify.png" />
                </a>
              </li>
              <li class="podcast-card list-inline-item">
                <a href="#">
                  <img class="img-responsive" alt="Google icon" src="img/listen-google.png" />
                </a>
              </li>
              <li class="podcast-card list-inline-item">
                <a href="#">
                  <img class="img-responsive" alt="Apple icon" src="img/listen-apple.png" />
                </a>
              </li>
            </ul>              
          </article>
        </div>
        <div class="col-md-6 hero-image">
          <img :src="img" class="img-responsive" />
          <div v-html="audio" class="audtio-container">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {api} from '../api.js';

export default {
  name: 'Hero',
  data () {
    return {
      post: {},
      img: null,
      audio: null,
      hasPost: false
    }
  },
  mounted () {
    this.getFeaturedPost();
  },
  methods: {
    getFeaturedPost: function () {
      let url = 'https://php-training-accedo.000webhostapp.com/wp-json/wp/v2/podcasts?orderby=id&order=asc&per_page=1';
      
      let res = api.getData(url);
      let getHero = () => {
        res.then(result => {
          this.hasPost = true;
          this.post = result[0];
          let str = result[0].content.rendered;
          let doc = new DOMParser().parseFromString(str, 'text/html');
          let img = doc.querySelector('img')
          this.img = img.src;
          
          let audio = doc.querySelector('audio');
          this.audio = audio.outerHTML;
        });
      }      
      getHero();
    }
  }
}
</script>