<script setup>
import { getSpinnerSize, getSpinnerColor } from '@/utils/spinners/common'

const { color, size } = defineProps({
    color: String,
    size: String,
})

</script>

<template>
    <div class="spinner-border" :class="getSpinnerColor(color)" :style="getSpinnerSize(size)" role="status">
    </div>
</template>