<template>
  <div id="app">
    <Header />
    <Hero />
    <Episodes />
    <Blog />
    <Gallery />
    <Prefooter />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Hero from './components/Hero.vue';
import Episodes from './components/Episodes.vue';
import Blog from './components/Blog.vue';
import Gallery from './components/Gallery.vue';
import Prefooter from './components/Prefooter.vue';
import Footer from './components/Footer.vue';

export default {  
  name: 'App',
  components: {
    Header,
    Hero,
    Episodes,
    Blog,
    Gallery,
    Prefooter,
    Footer
  }
}
</script>