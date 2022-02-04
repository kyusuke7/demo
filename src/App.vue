<template>
    <div class="App">
    <nav class="App__nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <main class="App__main">
      <transition name="fade">
        <router-view/>
      </transition>
    </main>
    <footer class="App__footer">
      &copy; Fancy Company
    </footer>
  </div>
</template>

<script>
// import TransitionPage from './transitions/TransitionPage.vue';
export default {
  name: `App`,
  components: {
    //TransitionPage,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html {
  line-height: 1.6;
  color: #333;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
}
p {
  &:not(:first-child) {
    margin-top: 1.25em;
  }
}
.App {
  max-width: 42em;
  margin-right: auto;
  margin-left: auto;
  padding-right: 1em;
  padding-left: 1em;
  &__nav {
    padding-top: 1em;
    padding-bottom: 1em;
    border-bottom: 1px solid #c0c0c0;
  }
  &__main {
    padding-top: 1.5em;
    padding-bottom: 2em;
  }
  &__footer {
    padding-top: 1em;
    padding-bottom: 1em;
    border-top: 1px solid #c0c0c0;
  }
}
/*
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}*/

.fade-enter-active,
.fade-leave-active {
  animation-duration: 5.5s;
  animation-fill-mode: both;
  animation-name: fade;
}
.fade-leave-active {
  /*animation-direction: reverse;*/
}
@keyframes fade {
  from {
    opacity: 1;
    background: #40b983;
    /* transform: scale3d(0.3, 0.3, 0.3);*/
    position: absolute;
    left: 100%;
  }
  100% {
    opacity: 1;
    position: absolute;
    left: 0;
  }
}


</style>

