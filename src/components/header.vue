<template>
    <header class="pull-left fullwidth pt-4 pb-4">
        <div class="logo pull-left"><i class="fas fa-chevron-left pull-left mr-2"></i><span class="logo-img pull-left mr-2"><img class="img-fluid" src="../assets/image/logo-main2.jpg" /></span><span class="b5">Ecclesia </span>Connecting Group</div>
        <div class="user-profile pull-right "><span class="logo-img pull-left mr-2"><img class="img-fluid" src="../assets/image/pro-pic.jpg" /></span>Harry<i class="fas fa-chevron-down ml-2"></i></div>
    </header>
</template>

<script>
export default {
    name: 'Header',
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
</style>
