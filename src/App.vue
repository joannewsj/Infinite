<template>
    <div id="app">
        <Header v-if="isShow"/>
        <div :class="{container: isShow}">
            <router-view/>
        </div>
    </div>
</template>

<script>
import Header from '../src/components/Header.vue';
    export default {
        components: {
            Header
        },
        data() {
            return {
                isShow: true,
            }
        },
        mounted () {
            this.init();
        },
        methods: {
            init() {
                if(this.$route.path == '/'){
                    this.isShow = false;
                }
            }
        },
        watch: {
            $route(to) {
                if(to.path == '/index' || to.path == '/'){
                    this.isShow = false;
                } else{
                    this.isShow = true;
                }
            }
        },
    }
</script>

<style lang="scss">
    @import '@/styles/base.scss';
</style>
