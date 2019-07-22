<template>
    <div class="dash-mian fullwidth position-relative pull-left height-100">
        <SideBar/>
        <Header/>
        <div class="add-visitor fullwidth pull-left bg-white p-5 mt-4">
            <div class="col-lg-12 pull-left mb-4">
                <div class="row">
                    <div class="col-lg-3 pull-left">
                        <div class="row">
                            <p>Name*</p>
                        </div>
                    </div>
                    <div class="col-lg-6 pull-left">
                        <input type="text" placeholder="Name*" class="fullwidth p-2 pl-3 rounded add-input" />
                    </div>
                </div>
            </div>
            <div class="col-lg-12 pull-left mb-4">
                <div class="row">
                    <div class="col-lg-3 pull-left">
                        <div class="row">
                            <p>Email*</p>
                        </div>
                    </div>
                    <div class="col-lg-6 pull-left">
                        <input type="text" placeholder="Email*" class="fullwidth p-2 pl-3 rounded add-input" />
                    </div>
                </div>
            </div>
            <div class="col-lg-12 pull-left mb-4">
                <div class="row">
                    <div class="col-lg-3 pull-left">
                        <div class="row">
                            <p>Cell Number*</p>
                        </div>
                    </div>
                    <div class="col-lg-6 pull-left">
                        <input type="text" placeholder="Cell Number*" class="fullwidth p-2 pl-3 rounded add-input" />
                    </div>
                </div>
            </div>
            <div class="col-lg-12 pull-left mb-4">
                <div class="row">
                    <div class="col-lg-3 pull-left">
                        <div class="row">
                            <p>Visitor Type</p>
                        </div>
                    </div>
                    <div class="col-lg-6 pull-left">
                        <select class="fullwidth p-2 pl-3 rounded add-input">
                            <option value="Select">Select</option>
                            <option value="Select1">Select 1</option>
                            <option value="Select2">Select 2</option>
                        </select>
                    </div>
                </div>
            </div> 
            <div class="col-lg-12 pull-left mb-4">
                <div class="row">
                    <div class="col-lg-3 pull-left">
                        <div class="row">
                            <p>Gender</p>
                        </div>
                    </div>
                    <div class="col-lg-6 pull-left">
                        <p class="pull-left mr-4"><input type="radio" name="gender" value="male" class="pull-left mr-2 mt-1">Male</p>
                        <p class="pull-left"><input type="radio" name="gender" value="female" class="pull-left mr-2 mt-1">Female</p>
                    </div>
                </div>
            </div> 
            <div class="col-lg-12 pull-left mb-4">
                <div class="row">
                    <div class="col-lg-3 pull-left">
                        <div class="row">
                            <p>Special Request</p>
                        </div>
                    </div>
                    <div class="col-lg-6 pull-left">
                        <textarea class="fullwidth p-2 rounded add-input pl-3" placeholder="Special Request"></textarea>
                    </div>
                </div>
            </div>   
            <div class="col-lg-9 pull-left">
                <button type="submit" class="fullwidth pull-right pt-2 pb-2 bg text-white text-center b5 border-0 rounded">Submit</button>
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
    .add-visitor button{
        max-width: 150px;
    }
    .add-input{
        border: 1px solid #eeeeee !important;
    }
    .height-100{
        height: 100%;
    }
    @media only screen and (max-width: 991px) {
        .height-100{
            height: inherit !important;
        }
    }
</style>
