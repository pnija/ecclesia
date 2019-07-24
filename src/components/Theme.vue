<template>
    <div class="fullwidth position-relative pull-left h-100" v-bind:class="{'dash-mian': visibility,'dash-mian-el':!visibility}">
        <SideBar :visibility="visibility"></SideBar>
        <Header v-on:toggle-sidebar="toggleSidebar(visibility)"></Header>
        <slot></slot>
    </div>
</template>

<script>

import SideBar from './sidebar.vue'
import Header from './header.vue'

export default {
    name: 'Dashboard',
    components: {
        SideBar,
        Header
    },
    data () {
        return {
            visibility: true,
        }
    },
    methods: {
        toggleSidebar: function (visibility) {
            this.visibility = visibility ? false : true;
        }
    }
}

</script>
<style>
    .dash-mian{
        padding: 0 30px 0 330px;
        background: #ebf0f2;
        transition-duration: .3s;
    }
    .dash-mian-el{
        padding: 0 30px;
        background: #ebf0f2;
        transition-duration: .3s;
    }
</style>
