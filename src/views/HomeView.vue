<template>
  <div class="homeview-container">
    <div class="side-bar">
      <div class="user">
        <img class="user-profile" src="../assets/user-profile.svg">
        <h2 class="user-name">Lwin Moe Oo</h2>
      </div>
      <div class="nav-items-container">
        <ul class="nav-items">
          <li class="nav-item" @click="activeComponent = 'Dashboard'"><img src="../assets/dashboard.svg"
              class="nav-icon">Dashboard</li>
          <li class="nav-item" @click="activeComponent = 'Feed'"><img src="../assets/feed.svg" class="nav-icon"> Feed
          </li>
          <li class="nav-item" @click="activeComponent = 'Inbox'"><img src="../assets/message.svg"
              class="nav-icon">Inbox
          </li>
          <li class="nav-item" @click="activeComponent = 'CreatePost'"><img src="../assets/create-post.svg"
              class="nav-icon">Create Post</li>
          <li class="nav-item" @click="activeComponent = 'ManagePosts'"><img src="../assets/manage-posts.svg"
              class="nav-icon">Manage Posts</li>
          <li class="nav-item" @click="activeComponent = 'SavePosts'"><img src="../assets/save-posts.svg"
              class="nav-icon">Save Post(s)</li>
          <li class="nav-item" @click="activeComponent = 'Note'"><img src="../assets/note.svg" class="nav-icon">Note
          </li>
          <li class="nav-item" @click="activeComponent = 'Setting'"><img src="../assets/settings.svg"
              class="nav-icon">Setting</li>
          <!-- <li class="nav-item" @click="activeComponent = 'Testing'"><img src="../assets/settings.svg"
              class="nav-icon">Test
          </li> -->
        </ul>
      </div>
    </div>

    <main>
      <component :is="activeComponent"></component>
    </main>

    <div v-if="accountInUse" class="signout">
      <button @click="signOut">Sign Out</button>
    </div>

    <div v-else class="login">
      <router-link :to="{ name: 'user-form' }"><button>Login</button></router-link>
    </div>


    <!-- <div class="add-content">
      <img class="add-content-btn" src="../assets/add-button.svg">
    </div> -->
  </div>
</template>

<script lang="ts">
import CreatePost from '@/components/CreatePost.vue';
import Dashboard from '@/components/Dashboard.vue';
import Feed from '@/components/Feed.vue';
import Inbox from '@/components/Inbox.vue';
import ManagePosts from '@/components/ManagePosts.vue';
import Note from '@/components/Note.vue';
import SavePosts from '@/components/SavePosts.vue';
import Setting from '@/components/Setting.vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    Dashboard, Feed, Inbox, CreatePost, ManagePosts, SavePosts, Note, Setting,
  },
  setup() {
    let accountInUse = ref(false)
    let activeComponent = ref("Dashboard")

    let signOut = () => {
      console.log("Sign Process")
    }

    return { accountInUse, activeComponent, signOut, }
  }
});
</script>

<style>
.homeview-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100vh;
}

.side-bar {
  background-color: rgb(123, 166, 197);
  width: 300px;
  /* position: fixed; */
}

/* .side-bar {
  background-color: rgb(123, 166, 197);
  position: sticky;
  float: left;
  height: 100vh;
  width: 300px;
} */

.user {
  width: 100%;
  margin: 20px 5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.user-name {
  display: inline-block;
  font-size: 20px;
  margin-left: 10px;
}

.user-profile {
  width: 30px;
  height: 30px;
}

.nav-items-container {
  height: 55%;
}

.nav-items {
  width: 80%;
  height: 100%;
  margin: 20px auto;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-content: center;
}

.nav-icon {
  width: 20px;
  height: 20px;
  margin-right: 7px;
}

.nav-item {
  margin-left: 20px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
}

main {
  margin: 100px 20px;
  flex-grow: 2;
}

.login,
.signout {
  /* float: right; */
  margin: 20px;
}

.add-content {
  display: none;
}

.nav-item:hover {
  font-weight: bold;
}

@media (max-width: 1440px) {
  .add-content {
    /* display: block;
    height: 100vh;
    display: flex;
    flex-direction: column-reverse;
    align-items: flex-end;
    margin: 20px; */
    position: fixed;
    bottom: 20px;
    right: 20px;
  }

  .add-content-btn {
    width: 30px;
    height: 30px;
    background-color: rgb(123, 166, 197);
    padding: 10px;
    border-radius: 50px;
    color: aliceblue;
  }
}

/* @media (max-width: 1440px) {
  .side-bar {
    display: none;
  }
}

@media (max-width: 1440px) {
  .login {
    display: none;
  }
} */
</style>
