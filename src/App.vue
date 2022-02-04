<template>
    <div class="App">
  <transition v-if="hoge" appear
    v-on:enter="enter"
    v-on:after-enter="afterEnter"
>
  <div id="lay">
  ooooooooo
  </div>
  </transition>
    <nav class="App__nav">
      <router-link to="/">Home</router-link> |
      <!--router-link to="/about">About</router-link-->
      <a @click="move()">About</a>
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
  data: function() {
      return {
          hoge: false,
      };
  },
  methods: {
    move: function() {
      console.log("a")
      this.hoge = true
    },
    enter: function() {
      console.log("b")
    },
    afterEnter: function() {
      console.log("c")
      // this.router.push(hoge)
    },
  }
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

.v-enter-active, .v-leave-active {
    animation: slide-in .5s;

}

.v-enter, .v-leave-to {
  opacity: 0;
  left: 100%;
    transform: translatex(100%);
}

#lay {
  position: fixed;
  left: 0;
  width: 100%;
  height: 100%;
  background: #40b983
}

@keyframes slide-in {
  0% {
    transform: translatex(100%);
  }
  100% {
    transform: translatex(0);
  }
}


</style>

