<template>
  <div id="app">
    <div class="nav-section">
      <div class="header">
        <div class="col col-8">
          <h4>To-Do List</h4>
        </div>
        <div class="col col-4">
          <MoreOptionsMenu :options="moreOptions" />
        </div>
      </div>
      <b-nav pills class="tasks-navbar">
        <b-nav-item to="/all" exact exact-active-class="active">
          All
        </b-nav-item>
        <b-nav-item to="/pending" exact exact-active-class="active">
          Pending
        </b-nav-item>
        <b-nav-item to="/missed" exact exact-active-class="active">
          Missed
        </b-nav-item>
        <b-nav-item to="/completed" exact exact-active-class="active">
          Completed
        </b-nav-item>
      </b-nav>
    </div>
    <div class="main-content">
      <router-view />
    </div>
  </div>
</template>

<script>
import MoreOptionsMenu from "@/components/generic/MoreOptionsMenu";

export default {
  components: {
    MoreOptionsMenu
  },
  methods: {
    handleScroll(event) {
      if (event.currentTarget.scrollY === 0) {
        document.querySelector(".nav-section").classList.remove("has-shadow");
      } else {
        document.querySelector(".nav-section").classList.add("has-shadow");
      }
    },
    setActiveLink(e) {
      if (e.target.classList.contains("nav-link")) {
        e.currentTarget
          .querySelectorAll(".nav-link")
          .forEach(item => item.classList.remove("active"));
        e.target.classList.add("active");
      }
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style lang="scss">
@import "@/styles/colors.scss";

body {
  background-color: $light-backgroud;
  position: absolute;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  height: 100%;
  width: 100%;
}

#app {
  overflow: none;
  display: flex;
  flex-direction: column;
  color: $Mosque;

  h4 {
    color: $monarch;
  }

  .nav-section {
    position: fixed;
    background-color: $light-backgroud;
    padding: 10px 16px;
    height: 92px;
    width: 100%;
    z-index: 1;

    &.has-shadow {
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.18), 0 3px 6px rgba(0, 0, 0, 0.19);
    }

    .header {
      display: flex;

      .more-options-menu .dropdown-toggle svg {
        color: $arrowtown;
      }
    }

    .tasks-navbar {
      font-size: 16px;

      .nav-link {
        padding: 6px 8px;
        color: $arrowtown;

        &.active {
          background-color: $arrowtown;
          color: $spring-wood;
        }
      }
    }
  }

  .main-content {
    margin-top: 92px;
    padding: 4px 16px;
    height: calc(100% - 72px);
  }
}

.col {
  padding: 0;
}
</style>
