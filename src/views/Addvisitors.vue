<template>
    <theme>
        <div class="add-visitor fullwidth pull-left bg-white mt-4">
            <div class="col-lg-12 pull-left mb-4">
                <div class="row">
                    <div class="col-lg-3 col-md-3 col-sm-3 pull-left">
                        <div class="row">
                            <p>Name*</p>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-9 col-sm-9 pull-left no-pad">
                        <input type="text" placeholder="Name*" class="fullwidth p-2 pl-3 rounded add-input" />
                    </div>
                </div>
            </div>
            <div class="col-lg-12 pull-left mb-4">
                <div class="row">
                    <div class="col-lg-3 col-md-3 col-sm-3 pull-left">
                        <div class="row">
                            <p>Email*</p>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-9 col-sm-9 pull-left no-pad">
                        <input type="email" placeholder="Email*" class="fullwidth p-2 pl-3 rounded add-input" />
                    </div>
                </div>
            </div>
            <div class="col-lg-12 pull-left mb-4">
                <div class="row">
                    <div class="col-lg-3 col-md-3 col-sm-3 pull-left">
                        <div class="row">
                            <p>Cell Number*</p>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-9 col-sm-9 pull-left no-pad">
                        <input type="tel" placeholder="Cell Number*" class="fullwidth p-2 pl-3 rounded add-input" />
                    </div>
                </div>
            </div>
            <div class="col-lg-12 pull-left mb-4">
                <div class="row">
                    <div class="col-lg-3 col-md-3 col-sm-3 pull-left">
                        <div class="row">
                            <p>Visitor Type</p>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-9 col-sm-9 pull-left no-pad">
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
                    <div class="col-lg-3 col-md-3 col-sm-3 pull-left">
                        <div class="row">
                            <p>Gender</p>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-9 col-sm-9 pull-left no-pad">
                        <p class="pull-left mr-4"><input type="radio" name="gender" value="male" class="pull-left mr-2 mt-1">Male</p>
                        <p class="pull-left"><input type="radio" name="gender" value="female" class="pull-left mr-2 mt-1">Female</p>
                    </div>
                </div>
            </div> 
            <div class="col-lg-12 pull-left mb-4">
                <div class="row">
                    <div class="col-lg-3 col-md-3 col-sm-3 pull-left">
                        <div class="row">
                            <p>Special Request</p>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-9 col-sm-9 pull-left no-pad">
                        <textarea class="fullwidth p-2 rounded add-input pl-3" placeholder="Special Request"></textarea>
                    </div>
                </div>
            </div>   
            <div class="col-lg-9 pull-left">
                <button type="submit" class="fullwidth pull-right pt-2 pb-2 bg text-white text-center b5 border-0 rounded">Submit</button>
            </div>
        </div>
    </theme>
</template>

<script>

import Theme from '../components/Theme.vue'

export default {
    name: 'Dashboard',
    components: {
        Theme,
    },
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
    .add-visitor{
        padding: 48px;
    }
    @media only screen and (max-width: 991px) {
        .height-100{
            height: inherit !important;
        }
    }
    @media only screen and (max-width: 575px) {
        .add-visitor{
            padding: 26px;
        }
        .no-pad{
            padding: 0 !important;
        }
    }
</style>
