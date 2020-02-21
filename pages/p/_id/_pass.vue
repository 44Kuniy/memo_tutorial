<template>
  <div class="container">
    <logo />
    <div>
      <h1>Login</h1>
      <hr />
      <input type="text" v-model="id" placeholder="input id" />
      <br />
      <input type="text" v-model="pass" placeholder="input pass" />
      <br />
      <p>params: {{message}}</p>
      <hr />
      <a href="/" @click="doAction">Login</a>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
export default {
  components: {
    Logo
  },
  // props: {
  //   id: String,
  //   pass: String
  // },
  computed: {
    message: function() {
      let id = this.$route.params.id;
      let pass = this.$route.params.pass;
      return id + "<br>" + pass;
    },
    id: function() {
      return this.$route.params.id;
    },
    pass: function() {
      return this.$route.params.pass;
    }
  },
  methods: {
    doAction: () => {
      alert("do Action called");
    }
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  text-align: center;
  width: 360px;
  height: 600px;
  border: 1px solid black;
}
</style>
