import Swal from "sweetalert2"
import router from "@/router"
import { AllRoutesMap } from "@/router/routesConfig"
import { handleActiveLinkState } from "@/utils/menu/common"

const initAuthModule = {
  state: () => ({
    token: "",
    name: "",
    surname: "",
    id: "",
    isAdmin: false,
    ga: false,
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
    },
    setName(state, name) {
      state.name = name
    },
    setSurname(state, surname) {
      state.surname = surname
    },
    setId(state, id) {
      state.id = id
    },
    setIsAdmin(state, _isAdmin) {
      state.isAdmin = _isAdmin
    },
    setGa(state, ga) {
      state.ga = ga
    },
    clearToken(state) {
      state.token = ""
    },
    clearGa(state) {
      state.ga = false
    },
  },
  actions: {
    initAuth({ commit, dispatch }, payload) {
      try {
        const ga = localStorage.ga
        const token = localStorage.token

        commit("setToken", token)

        if (ga && token) {
          commit("setGa", ga)
          commit("setName", localStorage.name)
          commit("setSurname", localStorage.surname)
          commit("setId", localStorage.id)
        } else {
          if (router.path === AllRoutesMap.login) {
            router.push(AllRoutesMap.login)
          }

          return false
        }
      } catch (error) {
        router.push(AllRoutesMap.login)
        console.log(error)
        Swal.fire({
          title: "Error!",
          text: "Error occurred while authenticating user",
          icon: "error",
          confirmButtonText: "Close",
        })
      }
    },
  },
}

export default initAuthModule
