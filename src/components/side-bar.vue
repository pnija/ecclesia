<template>
    <div class="dash-mian fullwidth position-relative pull-left h-100">
        <div class="side-bar pt-5 pl-4 pr-4 position-absolute fullwidth h-100 pull-left bg-white">
            <div class="profile d-table m-auto"><div class="pro-pic d-table"><img alt="image" class="img-fluid" src="image/pro-pic.jpg" /></div></div>
            <h5 class="text-center mt-2 mb-5">Harry Poter</h5>
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
    </div>
</template>

<style>
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
        max-width: 300px;
        box-shadow: 5px 0px 5px rgba(0,0,0,0.1);
        top: 0;
        left: 0;
        bottom: 0;
    }
    .body-bg{
        background: #ebf0f2 !important;
    }
    .dash-mian{
        padding: 0 30px 0 330px;
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
</style>

