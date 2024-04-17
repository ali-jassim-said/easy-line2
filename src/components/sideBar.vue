<template>
  <section class="main" :class="{ show: showState }">
    <div class="dashboard">
      <div class="navbar">
        <div class="logo">
          <h2>Easy Line</h2>
        </div>
        <ul>
          <li>
            <router-link class="router" :to="{ name: 'admin' }"
              ><i class="ri-admin-fill"></i><span>Admins</span></router-link
            >
          </li>
          <li>
            <router-link class="router" :to="{ name: 'ali' }"
              ><i class="ri-drive-line"></i><span>Captains</span></router-link
            >
          </li>
          <li>
            <router-link class="router" :to="{ name: 'admin' }"
              ><i class="ri-user-line"></i><span>Users</span></router-link
            >
          </li>
          <li>
            <router-link class="router" :to="{ name: 'admin' }"
              ><i class="ri-home-3-fill"></i
              ><span>Subscriptions</span></router-link
            >
          </li>
          <li>
            <router-link class="router" :to="{ name: 'admin' }"
              ><i class="ri-find-replace-fill"></i><span>Zones</span></router-link
            >
          </li>
        </ul>
        <ul class="Notification">
          <li>
           <i class="ri-mail-unread-line"></i><a href="#">Send Notification</a>
          </li>
          <li><i class="ri-logout-box-line"></i><a href="#">Sign Out</a></li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    showState() {
      return this.$store.state.Icon;
    }
  }
};
</script>

<style>
@import url("../assets/css/sideBar.css");
</style>
