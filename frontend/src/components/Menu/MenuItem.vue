<script setup>
import { ref, nextTick } from 'vue';
import { useRouter } from 'vue-router'
import { handleActiveLinkState } from '@/utils/menu/common.js'

const { label, icon, depth, data, href } = defineProps({
    label: String,
    icon: String,
    href: String,
    depth: Number,
    data: Array,
})

const router = useRouter()
const showChildren = ref(false)
const expanded = ref(false)
const container = ref(null)
const containerHeight = ref("0")



const onItemClick = () => {
    if (!data) {
        router.push(href)
        sessionStorage.setItem('currentActiveURL', href)
        handleActiveLinkState(label)
    } else {
        toggleMenu()
    }
}

const toggleMenu = () => {
    expanded.value = !expanded.value

    if (!showChildren.value) {
        showChildren.value = true
        nextTick(() => {
            containerHeight.value = container.scrollHeight + "px";
        })

        setTimeout(() => {
            containerHeight.value = "fit-content"
            container.value.style.overflow = "visible";
        }, 100)
    } else {
        containerHeight.value = container.scrollHeight + "px";
        container.value.style.overflow = "hidden";
        setTimeout(() => {
            containerHeight.value = 0 + "px"
        }, 10)
        setTimeout(() => {
            showChildren.value = false;
        }, 100)

    }
}

</script>

<template>
    <div class="menu-item" :class="{
        'expanded': expanded
    }">
        <div class="label" @click="onItemClick" :style="{
            paddingLeft: depth * 20 + 20 + 'px',
        }">
            <div class="left">
                <i v-if="icon" :class="icon"></i>
                <span>{{ label }}</span>
            </div>
            <div v-if="data" class="right">
                <i class="fas fa-chevron-down expand" :class="{
                    'expanded': expanded
                }"></i>
            </div>
        </div>
        <div v-show="showChildren" class="items-container" ref="container" :style="{ height: containerHeight }">

            <MenuItem v-for="(item, idx) in data" :key="'menu-item-' + item.label + '-' + idx" :label="item.label"
                :icon="item.icon" :depth="depth + 1" :data="item.children" />

        </div>
    </div>
</template>