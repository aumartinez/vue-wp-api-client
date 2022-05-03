<template>
  <div id="app">
    <Header />
    <Gallery />
    <Prefooter />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Gallery from './components/Gallery.vue';
import Prefooter from './components/Prefooter.vue';
import Footer from './components/Footer.vue';

export default {  
  name: 'App',
  components: {
    Header,
    Gallery,
    Prefooter,
    Footer
  }
}
</script>