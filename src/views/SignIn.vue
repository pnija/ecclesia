<template>
    <div class="log-main m-auto fullwidth d-table h-100">
        <div class="d-table-cell align-middle">
            <div class="col-sm-6 pull-left">
                <div class="logo-sign"><img class="img-fluid" alt="logo" src="../assets/image/logo-main2.jpg" /></div>
            </div>
            <div class="col-sm-6 pull-left">
                <h5 class="b5">Sign In</h5>
                <p class="sign-para pb-3">Welcome back! Please sign in to continue.</p>
                <form>
                    <h6 class="b4 fnt-14">Email address</h6>
                    <input type="email" class="fullwidth p-2 rounded sign-border mb-3" placeholder="yourname@gmail.com" />
                    <h6 class="b4 fnt-14">Password</h6>
                    <input type="password" class="fullwidth p-2 rounded sign-border mb-3" placeholder="password" />
                    <span class="pull-left fnt-14"><input type="checkbox" class="mr-2" />Keep me logged in</span>
                    <a class="pull-right fnt-14 color" href="">Forgot password ?</a>
                    <button @click="signIn()" class="text-center pt-2 pb-2 fullwidth bg text-white border-0 rounded mt-3 mb-2 btn">Sign In</button>
                    <div class="text-center fullwidth fnt-14">Not registered? <a class="color">Create an account</a></div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SignIn',
    methods: {
        signIn(){
            this.$router.push('/dash')
        }
    }
}
</script>

<style>

.log-main{
	max-width: 850px;
}
.sign-para{
	color: #a6a4a4;
}
.sign-border{
	border: 1px solid #a6a4a4;
}

</style>


