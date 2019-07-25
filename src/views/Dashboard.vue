<template>
  <theme>
    <div class="dash-top fullwidth pull-left pt-4">
        <div class="col-lg-6 col-md-6 col-sm-12 pull-left res-pd">
            <div class="dash-top-left pull-left fullwidth text-center position-relative bg-white">
                <div class="dash-top-icon position-absolute bg text-center text-white"><i class="fas fa-users"></i></div>
                <p class="m-0">Current Membership</p>
                <h3>22</h3>
            </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12 pull-left res-pd">
            <div class="dash-top-left pull-left fullwidth text-center position-relative bg-white">
                <div class="dash-top-icon dash-top-icon2 position-absolute text-center text-white"><i class="fas fa-user-check"></i></div>
                <p class="m-0">Attendence % YTD</p>
                <h3>91.26%</h3>
            </div>
        </div>
    </div>
    <!-- <chart/> -->
  </theme>
</template>

<script>

import Theme from '../components/Theme.vue'
// import chart from '../components/charts/chart.vue'

export default {
    name: 'Dashboard',
    components: {
        Theme,
        // chart,
    },
}

</script>
<style>
    .dash-top-icon{
        top: 0;
        left: 0;
        bottom: 0;
        width: 86px;
        line-height: 2.8;
        font-size: 30px;
    }
    .dash-top-icon2{
        background: #d3ac6b;
    }
    .dash-top-left{
        padding: 10px 10px 10px 86px;
    }

    @media only screen and (max-width:767px){
        .res-pd{
            margin-bottom: 30px;
        }
    }
</style>
