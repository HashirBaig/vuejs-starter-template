<script setup>

import { onMounted } from 'vue';
import { useStore } from 'vuex';


const store = useStore()

onMounted(() => {
  // Logout users from all tabs if they logout from one tab.
  window.addEventListener("storage", () => {
    if (!localStorage.token && !localStorage.ga && !localStorage.id) {
      store.dispatch("logout")
    }
  })
})

</script>

<template>
  <router-view></router-view>
</template>
