<template>
    <header class="pull-left fullwidth pt-4 pb-4">
        <div class="logo pull-left">
            <div class="hamburgger pull-left mr-3" v-on:click="$emit('toggle-sidebar')">
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
            </div>
            <span class="logo-img logo-img2 pull-left mr-2"><img class="img-fluid" src="../assets/image/logo-main2.jpg" /></span>
            <span class="b5 logo-name">Ecclesia <span class="cn-grp b4">Connecting Group</span></span>
        </div>
        <div class="user-profile pull-right "><span class="logo-img pull-left mr-2"><img class="img-fluid" src="../assets/image/pro-pic.jpg" /></span><p class="pull-left">Harry</p><i class="fas fa-chevron-down ml-2"></i></div>
    </header>
</template>

<script>
export default {
    name: 'header',
}
</script>

<style>
    .logo-img{
        width: 33px;
        height: 33px;
        border-radius: 50%;
        overflow: hidden;
    }
    .logo{
        font-size: 18px;
    }
    .user-profile{
        font-size: 14px;
    }
    .hamburgger {
        display: inline-block;
        cursor: pointer;
    }

    .bar1, .bar2, .bar3 {
        width: 30px;
        height: 3px;
        background-color: #333;
        margin: 6px 0;
        transition: 0.4s;
    }

    .change .bar1 {
        -webkit-transform: rotate(-30deg) translate(-6px, -1px);
        transform: rotate(-30deg) translate(-6px, -1px);
    }

    .change .bar2 {opacity: 0;}

    .change .bar3 {
        -webkit-transform: rotate(30deg) translate(-6px, 1px);
        transform: rotate(30deg) translate(-6px, 1px);
    }
    .logo-name{
        font-size: 21px;
    }
    .user-profile p{
        line-height: 2.4;
        margin: 0;
    }
    .user-profile i{
        line-height: 2.4;
    }
    @media only screen and (max-width:460px){
        .user-profile p{
            display: none;
        }
        .cn-grp{
            display: none;
        }
    }
</style>
