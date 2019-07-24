<template>
  <transition name="slide-in-out">
        <div class="side-bar pt-5 pl-4 pr-4 position-absolute fullwidth pull-left bg-white" v-show="visibility">
            <div class="profile d-table m-auto"><div class="pro-pic d-table"><img alt="image" class="img-fluid" src="../assets/image/pro-pic.jpg" /></div></div>
            <h5 class="text-center mt-2 mb-5">Harry Potter</h5>
            <ul class="fullwidth">
                <li class="mb-4 li-list fullwidth pull-left">
                    <a href="" class="fullwidth pull-left"><i class="fas fa-users mr-3"></i> Group Selector</a>
                </li>
                <li class="mb-4 li-list fullwidth pull-left">
                    <a href="" class="fullwidth pull-left"><i class="fas fa-user-edit mr-3"></i> Register Attendance</a>
                </li>
                <li class="mb-4 li-list fullwidth pull-left">
                    <a href="" class="fullwidth pull-left"><i class="fas fa-user-plus mr-3"></i> Record/Add Visitors</a>
                </li>
                <li class="mb-4 li-list fullwidth pull-left">
                    <a href="" class="active fullwidth pull-left"><i class="fas fa-database mr-22"></i> Dashboard</a>
                </li>
            </ul>
        </div>
  </transition>
</template>

<script>

export default {
    name: 'sideBar',
    props: ['visibility'],
    data () {
        return {
            show: true
        }
    }
}

</script>

<style>

    /* transition */
    .slide-in-out-enter {
        left: -280px !important; 
        transition: all .3s ease 0s;
    }

    .slide-in-out-enter-to {
        left: 0 !important;
        transition: all .3s ease 0s;
    }

    .slide-in-out-leave {
        left: 0;
        transition: all .3s ease 0s;
    }
    .slide-in-out-leave-to {
        left: -280px !important;
        transition: all .3s ease 0s;
    }
    /* transition-end */

    .pro-pic{
        width: 120px;
        height: 120px;
        border-radius: 50%;
        overflow: hidden;
        border: 1px solid #ebf0f2;
        margin-top: 4px !important;
        margin: 0 auto;
    }
    .profile{
        width: 130px;
        height: 130px;
        border-radius: 50%;
        border: 1px solid #ebf0f2;
    }
    .side-bar{
        /* -webkit-transition: all 0.9s ease-out;
        -moz-transition: all 0.9s ease-out;
        -o-transition: all 0.9s ease-out;
        transition: all 0.9s ease-out;  */

        max-width: 250px;
        box-shadow: 5px 0px 5px rgba(0,0,0,0.1);
        top: 0;
        left: 0;
        bottom: 0;
        height: 100% !important;
    }
    .body-bg{
        background: #ebf0f2 !important;
    }
    .li-list a{
        color: #000;
    }
    .li-list a:hover,.li-list .active{
        color: #b51f32 !important;
    }
    .mr-22{
        margin-right: 22px;
    }
    @media only screen and (max-width: 991px){
        .side-bar{
            left: -250px !important;
            transition: all .3s ease 0s;
            height: inherit !important;
        }
    }
</style>

