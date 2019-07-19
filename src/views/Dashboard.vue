<template>
    <div class="dash-mian fullwidth position-relative pull-left h-100">
        <SideBar/>
        <Header/>
    </div>
</template>

<script>

import SideBar from '../components/sidebar.vue'
import Header from '../components/header.vue'

export default {
    name: 'Dashboard',
    components: {
        SideBar,
        Header
    }
}

</script>

<style>

</style>
