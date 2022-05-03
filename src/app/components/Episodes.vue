<template>
  <section class="bg-fade">
    <h2 class="d-none">Episodes</h2>
    <div class="container section-episodes bg-white">
      <div class="row">
        <div class="col-10">
          <h2 class="episodes-title">
            Latest Podcast Episodes
          </h2>
        </div>
        
        <div class="col-md-2">
          <p class="float-right-md text-center">
            <a href="#" title="View all" class="btn btn-primary">View All</a>
          </p>
        </div>
      </div>
          
      <!-- posts -->
      <div class="row episodes-row"
      v-if="hasPosts"
      v-for="item in posts"
      :key="item.id"
      >
        <div class="col-md-3">
          <img :src="item.src" class="img-responsive" alt="article picture" />
        </div>
        <div class="col-md-6">
          <h3 class="post-title">
          {{item.title.rendered}}
          </h3>
          
          <div class="post-content" v-html="item.excerpt.rendered">
          </div>
          
          <p class="post-link">
            <a class="btn btn-light" :href="item.link">Know more</a>
          </p>
        </div>
        <div class="col-md-3 post-caption">
          <ul class="list-inline">
            <li class="list-inline-item">
              <span># {{item.category_name}}</span>
            </li>
            <li class="list-inline-item">
              <span># {{item.date}}</span>
            </li>
            <li class="list-inline-item">
              <span># {{item.tags_names}}</span>
            </li>
          </ul>
        </div>
      </div>
      <!-- /posts -->
      
      <!-- Show more -->
      <div class="row">
        <div class="col-12">
          <p class="text-center">
            <button type="button" class="btn btn-light"
            v-on:click="getEpisodes(0, 5)"
            >
            Show More Episodes
            </button>
          </p>
        </div>
      </div>
      <!-- /Show more -->
    </div>
  </section>
</template>

<script>
import {episodes} from '../episodes.js';

const strftime = require('strftime');

export default {
  name: 'Episodes',
  data () {
    return {
      hasPosts: false,
      posts: {},
      categories: [],
      tags: []
    }
  },
  mounted () {
    this.getCategories();
    this.getTags();
    this.getEpisodes(0, 3);
  },
  methods: {
    getEpisodes: function(prev, limit) {
      let res = episodes.getEpisodes();    
      let getPodcasts = () => {
        res.then(result => {
          
          let posts = result;
          posts.length = limit;
          
          this.hasPosts = true;
          let temp = [];
          
          for (let i = prev; i < posts.length; i++) {
            let str = result[i].content.rendered;
            let doc = new DOMParser().parseFromString(str, 'text/html');
            let img = doc.querySelector('img');
            posts[i].src = img.src;
            
            let d = result[i].date;
            let newDate = strftime('%B %d, %Y', new Date(d));
            posts[i].date = 'Posted on ' + newDate;
            
            //Categories
            temp = posts[i].categories;
            posts[i].category = temp.pop();
            
            let catId = posts[i].category;
            let found = this.categories.find(x => x.id === catId).name;            
            
            if (found) {
              posts[i].category_name = found;
            }
            else {
              posts[i].category_name = 'undefined';
            }
            
            //Tags
            temp = posts[i].tags;
            let arr = [];
            for (let t = 0; t < temp.length; t++) {
              found = this.tags.find(x => x.id === temp[t]).name;
              
              if (found) {
                arr.push(found);
              }
              else {
                arr.push('undefined');
              }
            }
                        
            let tagStr = '';
            for (let n = 0; n < arr.length; n++){
              if (n < (arr.length - 1)){
                tagStr += arr[n] + " / ";
              }
              else {
                tagStr += arr[n];
              }
            }
            posts[i].tags_names = tagStr;
          }          
          this.posts = posts;
        });
      }
      getPodcasts();
    },
    getCategories: function () {
      let res = episodes.getCategories();
      let cat = {};
      let categories = () => {
        res.then (result => {
          let arr = result;
          let temp = [];
          
          for (let i = 0; i < arr.length; i++) {
            cat.id = arr[i].id;
            cat.name = arr[i].name;
            temp.push(cat);
            cat = {};
          }
          
          this.categories = temp;          
        });      
      }
      
      categories();
    },
    getTags: function () {
      let res = episodes.getTags();
      let tag = {};
      let tags = () => {
        res.then (result => {
          let arr = result;
          let temp = [];
                    
          for (let i = 0; i < arr.length; i++) {
            tag.id = arr[i].id;
            tag.name = arr[i].name;
            temp.push(tag);
            tag = {};
          }
          
          this.tags = temp;          
        });      
      }
      
      tags();
    }
  }
}
</script>