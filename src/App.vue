<template>
  <main>
    <div class="green">
      <div v-if="showSideBar" class="green-text">
        <div  class="name-route">
          <p><span>Pages</span> / Dashboard</p>
          <h5>{{ pageTitle }}</h5>
        </div>
        <div class="icon" @click="toggleIcon">
          <i v-if="!this.$store.state.Icon" class="ri-align-justify"></i>
          <i v-if="this.$store.state.Icon" class="ri-align-right"></i>
        </div>
      </div>
      <div>
        <router-view />
      </div>
      <div class="hight"></div>
    </div>
    <div v-if="showSideBar">
      <sideBar />
    </div>
  </main>
</template>
<script>
import sideBar from "./components/sideBar.vue";
export default {
  data() {
    return {
      pageTitle: "",
    };
  },
  methods: {
    toggleIcon() {
      this.$store.commit("toggleIconState");
    },
  },
  components: { sideBar },
  computed: {
    showSideBar() {
      return this.$route.name != 'login';
    }
  },
  mounted() {
    const token = localStorage.getItem("token");
    if (!token) {
      this.$router.push({ name: "login" });
    }
  },
  watch: {
    $route(to) {
      this.pageTitle = to.name || "Dashboard";
    },
  },
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family: "Open Sans", sans-serif;
  width: 100%;
}

:root {
  --text-color: #a1aebb;
  --text-active: #344767;
  --color-body: #2dce89;
}





main {
  width: 100%;
  height: 100% !important;
 
  position: relative;
  background-color: #eff3f4 !important;
}

.green {
  max-width: 100%;
  height: 41vh;
  background-color: var(--color-body);
}

.green .green-text {
  margin-left: 20rem;
  margin-right: 40px;
  color: #fff;
  height: 100px;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.4s ease;
}

.green-text .icon {
  font-size: 25px;
  cursor: pointer;
  display: none;
}

.green .green-text span {
  color: #d3e3f4;
}

.name-route {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
}



.hight{
  width: 200px;
  height: 100px;
}


@media (max-width: 1190px) {
  .green .green-text {
    margin-left: 40px;
  }

  .green-text .icon {
    display: block;
  }
}
</style>
