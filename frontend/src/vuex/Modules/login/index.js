import Swal from "sweetalert2"
import router from "@/router"
import { AllRoutesMap } from "@/router/routesConfig"
import { loginUser, gaUser } from "@/services/api"

const loginModule = {
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
    async login({ commit, dispatch, state }, payload) {
      try {
        const res = await loginUser(payload)
        const { id } = res?.data
        commit("setId", id)
        localStorage.setItem("id", id)
        router.push(AllRoutesMap.ga)
      } catch (error) {
        console.log(error)
        Swal.fire({
          title: "Error!",
          text: "Username or password error",
          icon: "error",
          confirmButtonText: "Close",
        })
      }
    },
    async ga({ commit, dispatch, state }, payload) {
      try {
        const res = await gaUser(payload)
        const { token, name, surname, is_admin } = res?.data

        commit("setGa", true)
        commit("setToken", true)
        commit("setName", true)
        commit("setSurname", true)
        commit("setIsAdmin", true)

        localStorage.setItem("ga", true)
        localStorage.setItem("token", token)
        localStorage.setItem("name", name)
        localStorage.setItem("surname", surname)
        localStorage.setItem("isAdmin", is_admin)

        router.push(AllRoutesMap.home)
      } catch (error) {
        console.log(error)
        Swal.fire({
          title: "Error!",
          text: "Error while authenticating code",
          icon: "error",
          confirmButtonText: "Close",
        })
      }
    },

    logout({ commit }) {
      commit("clearToken")
      commit("clearGa")

      localStorage.removeItem("token")
      localStorage.removeItem("ga")
      localStorage.removeItem("id")

      router.push(AllRoutesMap.login)
    },
  },
}

export default loginModule
