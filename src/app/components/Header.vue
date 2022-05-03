<template>
  <header>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <nav class="navbar navbar-expand-lg navbar-light">
            <a class="navbar-brand" href="#">
              <img class="img-responsive" src="img/logo.png" alt="logo" />
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item"
                v-for="item in menu"
                :key="item.ID"
                >
                  <a class="nav-link" :href="item.url">
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
import {links} from '../menu.js';

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
      let res = links.getLinks();
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