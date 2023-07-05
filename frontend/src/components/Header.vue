<script setup>
import { ref, onMounted } from "vue"
import { useStore } from "vuex"
import Menu from "./Menu/Menu.vue"

const store = useStore()
const dClass = ref(JSON.parse(localStorage.getItem("dark-mode")))

onMounted(() => {
  const isDarkMode = localStorage.getItem("dark-mode") // returns boolean
  darkMode(isDarkMode)
})

const onChangeTheme = (theme, mode) => {
  const baseURL = `src/assets/themes/`
  const url = `${baseURL}${theme}`
  const elementId = "theme-css"
  const linkElement = document.getElementById(elementId)
  const cloneLinkElement = linkElement.cloneNode(true)
  const oldThemeUrl = linkElement.getAttribute("href")
  const newThemeUrl = linkElement.getAttribute("href").replace(oldThemeUrl, url)
  cloneLinkElement.setAttribute("id", elementId + "-clone")
  cloneLinkElement.setAttribute("href", newThemeUrl)
  cloneLinkElement.addEventListener("load", () => {
    linkElement.remove()
    cloneLinkElement.setAttribute("id", elementId)
  })
  linkElement.parentNode.insertBefore(cloneLinkElement, linkElement.nextSibling)
}
const darkMode = theme => {
  localStorage.setItem("dark-mode", theme)
  if (theme === "true" || theme === true) {
    dClass.value = theme
    onChangeTheme("bootstrapdark.min.css", "dark")
  } else if (theme === "false" || theme === false) {
    dClass.value = theme
    onChangeTheme("bootstrap.min.css", "light")
  }
}
const toggleTheme = e => {
  const theme = e.target.checked
  darkMode(theme)
}

const handleLogout = () => {
  try {
    store.dispatch("logout")
  } catch (error) {
    console.log(error)
  }
}
</script>

<template>
  <header
    class="fixed-top border-bottom d-flex align-items-center justify-content-between shadow-sm py-2 px-3 overflow-hidden"
  >
    <div class="switch-container">
      <label class="switch">
        <input type="checkbox" @change="toggleTheme" :checked="dClass === 'true' ? true : false" />
        <span class="slider"></span>
      </label>
    </div>

    <div class="btn-logout" title="Logout" @click="handleLogout">
      <i class="fas fa-power-off cursor-pointer header-icon"></i>
    </div>
  </header>
  <Menu />
</template>

<style scoped>
.switch {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 25px;
  margin: 0;
}

.switch input[type="checkbox"] {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #2b2b2b;
  transition: 0.4s;
  border-radius: 20px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  left: 3px;
  bottom: 4px;
  background-color: #f0f0f0;
  transition: 0.4s;
  border-radius: 50%;
}

input[type="checkbox"]:checked + .slider {
  background-color: #f0f0f0;
}

input[type="checkbox"]:checked + .slider:before {
  transform: translateX(29px);
  background-color: #2b2b2b;
  height: 16px;
  width: 16px;
}

.switch-container {
  display: flex;
  align-items: center;
  gap: 4px;
}
</style>
