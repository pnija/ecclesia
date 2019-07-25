<template>
    <theme>
        <div class="attendence-topbar fullwidth pull-left">
            <div class="col-lg-3 pull-left">
                <div class="row">
                    <div class="clm fullwidth pull-left text-center pt-2 pb-2">
                        <h4 class="color">0</h4>
                        <p class="m-0">Not Attended</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 pull-left no-pad">
                <div class="pl-1 pr-1">
                    <div class="clm fullwidth pull-left text-center pt-2 pb-2">
                        <h4 class="color">2</h4>
                        <p class="m-0">Attended</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 pull-left no-pad">
                <div class="pr-1">
                    <div class="clm fullwidth pull-left text-center p-2 color">
                        <h4 class="pull-left">Select All</h4>
                        <span class="pull-right"><i class="far fa-check-circle"></i></span>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 pull-left">
                <div class="row">
                    <div class="clm fullwidth pull-left text-center p-2 position-relative">
                        <input type="text" placeholder="Search..." class="fullwidth" />
                        <span class="position-absolute srch"><i class="fas fa-search"></i></span>
                    </div>
                </div>
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
    
    .clm{
        background: #e5e1e1;
    }
    .no-pad{
        padding: inherit !important;
    }
    .clm input{
        background: inherit;
        border: inherit;
    }
    .srch{
        top: 0;
        right: 0;
    }

</style>
