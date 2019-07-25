<template>
    <div class="fullwidth position-relative pull-left " v-bind:class="{'dash-mian': visibility,'dash-mian-el':!visibility}">
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
        },
        handleResize() {
            let w = window.outerWidth
            let v = this.visibility
            this.visibility = w < 991 ? false : w >= 991 ? true : v
        }   
    },
    created() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },
    destroyed() {
        window.removeEventListener('resize', this.handleResize);
    },
}

</script>
<style>
    .dash-mian{
        padding: 0 30px 0 280px !important;
        background: #ebf0f2;
        transition-duration: .3s;
        height: 100%;
    }
    .dash-mian-el{
        padding: 0 30px;
        background: #ebf0f2;
        transition-duration: .3s;
        height: 100%;
    }
    @media only screen and (max-width:991px){
        .dash-mian-el{
            padding: 0 15px 15px 15px;
        }
        .dash-mian{
            padding: 0 30px 30px 30px !important;
            transform: translateX(250px);
            height: inherit !important;
        }
    }
</style>
