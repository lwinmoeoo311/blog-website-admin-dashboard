<template>
  <div class="side-bar">
    <div class="user">
      <img src="../assets/user-profile.svg">
      <h2 class="user-name">Lwin Moe Oo</h2>
    </div>
  </div>

  <div class="login">
    <router-link :to="{ name: 'user-form' }"><button>Login</button></router-link>
  </div>

  <div class="add-content">
    <!-- <img src="" alt=""> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeView',
  components: {

  },
});
</script>

<style>
.side-bar {
  /* background-color: aquamarine; */
  background-color: rgb(123, 166, 197);
  float: left;
  height: 100vh;
  width: 300px;
}

.user {
  width: 100%;
  margin: 20px 5px;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.user-name {
  display: inline-block;
  /* margin-left: auto 3px; */
}

img {
  width: 60px;
  height: 60px;
}

.login {
  float: right;
  margin: 20px;
}
</style>
