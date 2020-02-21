<template>
  <div class="container">
    <div>
      <logo />
      <h1>{{title}}</h1>
      <p>{{message}}</p>
      <hr />
      <router-link to="/" class="button--red">To index</router-link>
      <router-link to="/p" class="button--red">To Login</router-link>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo";
export default {
  components: {
    Logo
  },
  data: function() {
    return {
      title: "other title",
      message: "other message"
    };
  }
};
</script>