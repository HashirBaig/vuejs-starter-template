<script setup>
import { reactive } from 'vue'
import { AllRoutesMap } from '@/router/routesConfig'

const menu = reactive([
    {
        header: "Main Navigation",
        hiddenOnCollapse: true,
    },
    {
        href: AllRoutesMap.home,
        title: "Dashboard",
        icon: "fa fa-home",
        class: ""
    },
    {
        href: AllRoutesMap.blacklist,
        title: "Blacklist",
        icon: "fa fa-times",
        class: ""
    },
])

const onItemClick = (event, item) => {
    sessionStorage.setItem('currentActiveURL', item.href)
}

</script>

<template>
    <aside>
        <!-- <sidebar-menu :menu="menu" width="300px" :hideToggle="true" @item-click="onItemClick" /> -->
    </aside>
</template>