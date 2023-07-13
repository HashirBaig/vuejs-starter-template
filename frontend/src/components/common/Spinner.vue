<script setup>
import { getSpinnerSize, getSpinnerColor } from "@/utils/spinners/common"

const { color, size } = defineProps({
  color: String,
  size: String,
})
</script>

<template>
  <div class="d-flex align-items-center justify-content-center">
    <div class="spinner-border" :class="getSpinnerColor(color)" :style="getSpinnerSize(size)" role="status"></div>
  </div>
</template>
