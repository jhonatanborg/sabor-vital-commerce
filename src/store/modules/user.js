import actionsGlobal from "../actions";
import mutationsGlobal from "../mutations";

const user = {
  namespaced: true,
  state: () => ({
    login: {
      open: false,
      step: 1,
    },
    menuMobile: false,
    user: null,
  }),

  getters: {},
  mutations: { ...mutationsGlobal },
  actions: { ...actionsGlobal },
};

export default user;
