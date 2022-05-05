<template>
  <section class="bg-fade">
    <h2 class="d-none">Blog</h2>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2 class="text-center blog-heading">
            Blog Posts
          </h2>
          <div id="blog-carousel" class="carousel slide" data-interval="false">
            <!-- Slideshow -->
            <div class="carousel-inner">
              <!-- slides -->
              <div class="carousel-item active"
              v-if="hasPosts"
              >
                <div class="row">
                  <div class="col-md-4"                  
                  v-for="item in posts.slice(start, limit)"
                  :key="item.id"
                  >
                    <article class="blog-card bg-white">
                      <div class="blog-card-head">
                        <p>
                          <span class="blog-author">By {{item._embedded.author[0].name}}</span>
                          &nbsp;&nbsp;
                          <span class="blog-date">{{item.date}}</span>
                        </p>
                        <p class="blog-name">
                          NicaSource Radio
                        </p>
                      </div>
                      <div class="blog-title">
                        <h3 v-html="item.title.rendered">
                        </h3>
                      </div>
                      <div class="blog-card-content" v-html="item.excerpt.rendered">
                      </div>
                      <div class="blog-more">
                        <a :href="item.link" class="btn btn-light">
                          Read More
                        </a>
                      </div>
                    </article>
                  </div>
                </div><!-- /row -->
              </div> 
              <!-- /slides -->
              <!-- slides -->
              <div class="carousel-item"
              v-if="hasPosts"
              >
                <div class="row">
                  <div class="col-md-4"                  
                  v-for="item in posts.slice(limit, limit + limit)"
                  :key="item.id"
                  >
                    <article class="blog-card bg-white">
                      <div class="blog-card-head">
                        <p>
                          <span class="blog-author">By {{item._embedded.author[0].name}}</span>
                          &nbsp;&nbsp;
                          <span class="blog-date">{{item.date}}</span>
                        </p>
                        <p class="blog-name">
                          NicaSource Radio
                        </p>
                      </div>
                      <div class="blog-title">
                        <h3 v-html="item.title.rendered">
                        </h3>
                      </div>
                      <div class="blog-card-content" v-html="item.excerpt.rendered">
                      </div>
                      <div class="blog-more">
                        <a :href="item.link" class="btn btn-light">
                          Read More
                        </a>
                      </div>
                    </article>
                  </div>
                </div><!-- /row -->
              </div> 
              <!-- /slides -->
            </div>
            <!-- /Slideshow -->
            
            <!-- controls -->
            <div class="text-center blog-controls">
              <a href="#blog-carousel" data-slide="prev">
                <span><i class="fa-solid fa-arrow-left-long"></i></span>
              </a>
              &nbsp;&nbsp;&nbsp;
              <a href="#blog-carousel" data-slide="next">
                <span><i class="fa-solid fa-arrow-right-long"></i></span>
              </a>
            </div>
            <!-- /controls -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {api} from '../api.js';

const strftime = require('strftime');

export default {
  name: 'Blog',
  data () {
    return {
      hasPosts: false,
      posts: {},
      slides: null,      
      start: 0,
      limit: 3,
    }
  },
  mounted () {
    this.getBlogs();
  },
  methods: {
    getBlogs: function() {
      let url = 'https://php-training-accedo.000webhostapp.com/wp-json/wp/v2/posts?category=blog&_embed';
      let res = api.getData(url);    
      let getPosts = () => {
        res.then(result => {          
          this.posts = result;
          this.slides = Math.floor(this.posts.length/3);
          
          for (let i=0; i < this.posts.length; i++){
            let d = result[i].date;
            let newDate = strftime('%B %d, %Y', new Date(d));
            this.posts[i].date = newDate;  
          }
                    
          if (this.posts.length > 0) {
            this.hasPosts = true;
          }
        });
      }
      getPosts();
    }
  }
}
</script>