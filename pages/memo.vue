<template name="memo">
  <div class="container">
    <h1>Memo</h1>
    <p>
      <logo />
    </p>
    <div class="information">
      <div class="title row">
        <div class="prefix">Title</div>
        <input id="title-text" v-model="title" />
        <div class="button" id="find-button">find</div>
      </div>

      <div class="content row">
        <div class="prefix">Memo</div>
        <input id="content-text" v-model="content" />
      </div>

      <div class="buttons row">
        <div class="prefix"></div>

        <div class="button" @click="saveMemo">save</div>
        <div class="button" @click="deleteAllMemo">delete</div>
      </div>
    </div>
    <hr />
    <div id="todo-list">
      <ul>
        <li v-for="item in memo" v-bind:key="item.title">
          {{item.title}}
          <p>{{item.content}} {{ item.created }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  components: { Logo },
  props: {
    title: String,
    content: String
  },
  computed: {
    memo: function() {
      return this.$store.state.memo.memo;
    }
  },
  methods: {
    saveMemo: function() {
      let memoObj = {
        title: this.title,
        content: this.content
      };
      this.$store.commit("memo/insert", memoObj);
    },
    deleteAllMemo: function() {
      let memoObj = {
        title: this.title,
        content: this.content
      };
      alert("this memo will be deleted");
      this.$store.commit("memo/remove", memoObj);
    }
  }
};
</script>

<style>
.information {
  text-align: center;
  line-height: 1em;
  width: 720px;
  display: flex;
  flex-direction: column;
}
.title {
  height: 60px;
  line-height: 60px;
}
.content {
  height: 300px;
  line-height: 300px;
}
.buttons {
  height: 80px;
  line-height: 80px;
}

.prefix {
  width: 60px;
  background-color: black;
  color: white;
}

.row {
  display: flex;
  background-color: bisque;
  margin-top: 2px;
}
#title-text {
  flex-grow: 100;
}
#find-button {
  width: 72px;
}
#content-text {
  flex-grow: 100;
}
.button {
  background-color: gray;
  background-origin: 1px solid black;
  border-radius: 25%;
  margin: 0 2px;
}
.button:hover {
  color: white;
  background-color: tomato;
}
#button-container {
  padding: 15px;
}
input {
  margin: 15px;
}
.title .prefix {
  line-height: 60px;
}
.buttons > .button {
  width: 84px;
}
</style>