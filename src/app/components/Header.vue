<template>
  <header class="bg-light">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <nav class="navbar navbar-expand-lg navbar-light">
            <a class="navbar-brand" href="#">
              <img class="img-responsive" src="img/logo.png" alt="logo" />
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-mobile" aria-controls="navbar-mobile" aria-expanded="false" aria-label="Toggle navigation">
              <span><i class="fa-solid fa-bars"></i></span>
            </button>
            <div class="collapse navbar-collapse" id="navbar-mobile">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item"
                v-for="(item, index) in menu"
                :key="item.ID"                
                >
                  <a class="nav-link" :href="item.url"
                  :class="{active: index === 0}"
                  >
                  {{item.title}}
                  </a>
                </li>
              </ul>
              <ul class="navbar-nav nav-btns">
                <li class="nav-item">
                  <a class="btn btn-primary" href="#">
                    Subscribe
                  </a>
                </li>
                <li class="nav-item">
                  <a class="btn btn-light" href="#">
                    Sign-in
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      <!-- /row -->
    </div>
  </header> 
</template>

<script>
import {api} from '../api.js';

export default {
  name: 'Header',
  data () {
    return {
      menu: [],
    }
  },
  mounted () {
    this.getHeaderLinks();
  },
  methods: {
    getHeaderLinks: function () {
      let url = 'https://php-training-accedo.000webhostapp.com/wp-json/myroutes/menu';
    
      let res = api.getData(url);
      let getMenu = () => {
        res.then(result => {
          this.menu = result;
        });
      };
      
      getMenu();
    }
  }
}
</script>