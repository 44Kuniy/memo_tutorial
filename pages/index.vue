<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">{{ title }}</h1>
      <p>{{message}}</p>
      <hr />
      <pre>{{now}}</pre>
      <hr />
      <p>{{$store.state.message}}</p>
      <p>{{$store.state.memo}}</p>
      <p>================</p>

      <p>{{ $store.state.memo.memo[2] }}</p>

      <p>{{$store.state.page}}</p>

      <p>================</p>

      <div
        class="link"
        @click.exact="$store.commit('count')"
        @click.right.prevent="$store.commit('reset')"
      >clicked : {{$store.state.counter}}</div>
      <router-link to="/other" class="button--red">Go to Other</router-link>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">Documentation</a>
        <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">GitHub</a>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";

// export default {
//   components: {
//     Logo
//   }
// };
export default {
  components: {
    Logo
  },
  data: function() {
    return {
      title: "nuxt-title",
      message: "test message",
      now: "calculating..."
    };
  },
  computed: {
    now: function() {
      var now = new Date();
      var hour = now.getHours();
      var minute = now.getMinutes();
      var second = now.getSeconds();
      return hour + ":" + minute + ":" + second;
    }
  },
  methods: {
    incrementCounter: function() {
      this.$store.state.counter++;
    }
  },
  created: function() {
    setInterval(() => {
      var now = new Date();
      var hour = now.getHours();
      var minute = now.getMinutes();
      var second = now.getSeconds();
      // var ms = now.getMilliseconds();
      this.now = hour + ":" + minute + ":" + second;
    }, 1000);
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
