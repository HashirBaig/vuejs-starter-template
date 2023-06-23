<script setup>

const { color, size } = defineProps({
    color: String,
    size: String,
})

const colorMap = {
    light: "text-light",
    primary: "text-primary",
}

const sizeMap = {
    sm: "height: 1.3rem; width: 1.3rem",
    md: "height: 2.6rem; width: 2.6rem",
    lg: "height: 3.9rem; width: 3.9rem",
}

</script>

<template>
    <div class="spinner-border" :class="colorMap[color]" :style="sizeMap[size]" role="status">
    </div>
</template>