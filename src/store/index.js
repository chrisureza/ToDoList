import Vue from "vue";
import Vuex from "vuex";
import RegisteredTasks from "./modules/RegisteredTasks";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    RegisteredTasks
  }
});
