<template>
    <div class="dash-mian fullwidth position-relative pull-left h-100">
        <SideBar/>
        <Header/>
        <div class="dash-top fullwidth pull-left pt-4">
            <div class="col-lg-6 col-md-12 col-sm-6 pull-left">
                <div class="dash-top-left pull-left fullwidth text-center position-relative bg-white">
                    <div class="dash-top-icon position-absolute bg text-center text-white"><i class="fas fa-users"></i></div>
                    <p class="m-0">Current Membership</p>
                    <h3>22</h3>
                </div>
            </div>
            <div class="col-lg-6 col-md-12 col-sm-6 pull-left">
                <div class="dash-top-left pull-left fullwidth text-center position-relative bg-white">
                    <div class="dash-top-icon dash-top-icon2 position-absolute text-center text-white"><i class="fas fa-user-check"></i></div>
                    <p class="m-0">Attendence % YTD</p>
                    <h3>91.26%</h3>
                </div>
            </div>
        </div>
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
    .dash-mian{
        padding: 0 30px 0 330px;
        background: #ebf0f2;
    }
    .dash-top-icon{
        top: 0;
        left: 0;
        bottom: 0;
        width: 86px;
        line-height: 2.5;
        font-size: 30px;
    }
    .dash-top-icon2{
        background: #d3ac6b;
    }
    .dash-top-left{
        padding: 10px 10px 10px 86px;
    }
</style>
