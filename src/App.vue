<script setup>
  import Footer from './components/Footer/Footer.vue';
  import Header from './components/Header/Header.vue';
  import Main from './components/Main/Main.vue';
  import { RouterView } from 'vue-router';

</script>

<template>
  <Header />
    
  <RouterView/>

  <Footer />
  

</template>

