<template>
    <div class="dash-mian fullwidth position-relative pull-left height-100">
        <SideBar/>
        <Header/>
        <div class="add-visitor fullwidth pull-left bg-white p-5 mt-4">
            <div class="col-lg-12 pull-left mb-4">
                <div class="row">
                    <div class="col-lg-3 pull-left">
                        <div class="row">
                            <p>Select the Connection</p>
                        </div>
                    </div>
                    <div class="col-lg-6 pull-left">
                        <div class="fullwidth p-2 pl-3 rounded add-input">
                            <p>Sunday Connecting Group 10:00 to 12:00</p>
                            <select class="fullwidth p-2 pl-3 add-input select-bg">
                                <option value="Select">Prisons Ministry</option>
                                <option value="Select1">Workship Ministry</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-12 pull-left mb-4">
                <div class="row">
                    <div class="col-lg-3 pull-left">
                        <div class="row">
                            <p>Venue</p>
                        </div>
                    </div>
                    <div class="col-lg-6 pull-left">
                        <input type="text" class="fullwidth p-2 pl-3 rounded add-input" />
                    </div>
                </div>
            </div>
            <div class="col-lg-12 pull-left mb-4">
                <div class="row">
                    <div class="col-lg-3 pull-left">
                        <div class="row">
                            <p>Start Time</p>
                        </div>
                    </div>
                    <div class="col-lg-6 pull-left">
                        <input type="time" class="fullwidth p-2 pl-3 rounded add-input" />
                    </div>
                </div>
            </div>
            <div class="col-lg-12 pull-left mb-4">
                <div class="row">
                    <div class="col-lg-3 pull-left">
                        <div class="row">
                            <p>End Time</p>
                        </div>
                    </div>
                    <div class="col-lg-6 pull-left">
                        <input type="time" class="fullwidth p-2 pl-3 rounded add-input" />
                    </div>
                </div>
            </div>
            <div class="col-lg-9 pull-left">
                <button type="submit" class="fullwidth pull-right pt-2 pb-2 bg text-white text-center b5 border-0 rounded">Save</button>
                <button type="button" class="fullwidth pull-right pt-2 pb-2 can-btn text-white text-center b5 border-0 rounded mr-3">Cancel</button>
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
    .can-btn{
        background: #d3ac6b;
    }
    .select-bg{
        background: #dfe1e2 !important;
    }
    @media only screen and (max-width: 991px) {
        .height-100{
            height: inherit !important;
        }
    }
</style>
