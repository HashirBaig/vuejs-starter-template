<script setup>
import { onMounted } from 'vue'
import { useStore } from 'vuex'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue';

const store = useStore()

onMounted(() => {
  try {
    store.dispatch("initAuth")
  } catch (error) {
    console.log(error)
  }
})

</script>

<template>
  <Header />
  <div class="layout-main">
    <router-view v-slot="{ Component }"></router-view>
  </div>
  <Footer />
</template>