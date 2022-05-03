<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <img alt="footer logo" class="img-responsive" src="img/logo.png" />          
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          </p>
          
          <ul class="list-inline social-icons">
            <li class="list-inline-item">
              <a href="#" title="Facebook" class="icon bg-secondary color-white">
                <i class="fa-brands fa-facebook-f"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="#" title="LinkedIn" class="icon bg-secondary color-white">
                <i class="fa-brands fa-linkedin-in"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="#" title="Instagram" class="icon bg-secondary color-white">
                <i class="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="#" title="Skype" class="icon bg-secondary color-white">
                <i class="fa-brands fa-skype"></i>
              </a>
            </li>
          </ul>
        </div>
        <div class="col-md-4">
          <div class="row">
            <div class="col-md-6">
              <h4>
                Pages
              </h4>
              
              <nav>
                <ul class="nav flex-column">
                  <li class="nav-item"
                  v-for="item in menu"
                  :key="item.ID"
                  >
                    <a class="nav-link" :href="item.url">
                    {{item.title}}
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            
            <div class="col-md-6">
              <h4>
                Recent Episodes
              </h4>
              
              <nav>
                <ul class="nav flex-column">
                  <li class="nav-item"
                  v-for="item in recent"
                  >
                    <a class="nav-link" 
                    :href="item.link">
                     {{item.title.rendered}}
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div><!--/row-->
        </div>
        <div class="col-md-4">
          <h4>
            Listen my podcasts also in
          </h4>
          
          <ul class="footer-cards-wrapper flex-column list-group">
            <li class="podcast-card list-group-item">
              <a href="#">
                <img class="img-responsive" alt="Google icon" src="img/listen-google.png" />
              </a>
            </li>              
            <li class="podcast-card list-group-item">
              <a href="#">
                <img class="img-responsive" alt="Apple icon" src="img/listen-apple.png" />
              </a>
            </li>
            <li class="podcast-card list-group-item">
              <a href="#">
                <img class="img-responsive" alt="Spotify icon" src="img/listen-spotify.png" />
              </a>
            </li>              
          </ul>
        </div>
        <div class="col-12">
          <div class="footer-line">
          </div>
          <p class="copyright text-center">
            &copy; 2022 NicaSource All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  </footer> 
</template>

<script>
import {links} from '../footer.js';

export default {
  name: 'Footer',
  data () {
    return {
      menu: [],
      recent: []
    }
  },
  mounted () {
    this.getFooterLinks();    
    this.getLatestEpisodes();
  },
  methods: {
    getFooterLinks: function () {
      let res = links.getLinks();
      let getMenu = () => {
        res.then(result => {
          this.menu = result;
        });
      };
      
      getMenu();
    },
    getLatestEpisodes: function() {
      let res = links.getLatest();    
      let getEpisodes = () => {
        res.then(result => {
          this.recent = result.splice(3, result.length);
        });
      };
      
      getEpisodes();
    }
  }
}
</script>