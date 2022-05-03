<template>
  <section>
    <h2 class="d-none">Blog</h2>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2 class="text-center">
            Blog Posts
          </h2>
          <div id="blog-carousel" class="carousel slide" data-interval="false">
            <!-- Slideshow -->
            <div class="carousel-inner">
              <div class="carousel-item"
              v-if="hasPosts"
              v-for="index in slides"              
              :key="index"
              :class="{
                'active': index === 1,
              }"             
              >
                <div class="row">
                  <div class="col-md-4"
                  v-for="item in posts"
                  >
                    <article class="blog-card">
                      <div class="blog-heading">
                        <p>
                          <span class="blog-author">By {{item._embedded.author}}</span>
                          &nbsp;&nbsp;
                          <span class="blog-date">Sep 11, 2020</span>
                        </p>
                        <p class="blog-name">
                          NicaSource Radio
                        </p>
                      </div>
                      <div class="blog-title">
                        <h3>
                          Lorem ipsum dolor sit amet, consectetur 
                        </h3>
                      </div>
                      <div class="blog-content">
                        <p>
                          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                      </div>
                      <div class="blog-more">
                        <a href="#" class="btn btn-light">
                          Read More
                        </a>
                      </div>
                    </article>
                  </div>
                </div><!-- /row -->
              </div>              
            </div>
            <!-- /Slideshow -->
            
            <!-- controls -->
            <div class="text-center">
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
import {blogs} from '../blog.js';

export default {
  name: 'Blog',
  data () {
    return {
      hasPosts: false,
      posts: {},
      slides: null,      
    }
  },
  mounted () {
    this.getBlogs();
  },
  methods: {
    getBlogs: function() {
      let res = blogs.getBlogs();    
      let getPosts = () => {
        res.then(result => {          
          this.posts = result;
          this.slides = Math.floor(this.posts.length/3);
                    
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