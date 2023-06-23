<script setup>
import { reactive } from 'vue'
import { AllRoutesMap } from '@/router/routesConfig'

import MenuItem from './MenuItem.vue';

const menuTree = reactive([
    {
        label: "Dashboard",
        icon: "fas fa-th",
        href: AllRoutesMap.home
    },
    {
        label: "Blacklist",
        icon: "fas fa-times",
        href: AllRoutesMap.blacklist
    }
])

</script>

<template>
    <div class="menu">
        <div class="text-center mt-3 mb-5">
            <img src="../../assets/vue.svg" alt="Logo" class="main-logo">
        </div>

        <MenuItem v-for="(item, idx) in menuTree" :key="'menu-item-' + item.label + '-' + idx" :label="item.label"
            :icon="item.icon" :depth="0" :data="item.children" :href="item.href" />
    </div>
</template>