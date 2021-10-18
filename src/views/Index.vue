<template>
    <div class="index">
        <div class="background"></div>
        <router-link to="/profile">
            <div class="logo">
                <InfiniteLogo />
                <div class="title">
                    INFINITE
                </div>
            </div>
        </router-link>
    </div>
</template>

<script>
    import InfiniteLogo from '../components/InfiniteLogo.vue'
    export default {
        name: 'Index',
        components: {
            InfiniteLogo
        },
        data() {
            return {

            }
        },
    }
</script>

<style lang="scss" scoped>
    @media screen and (max-width: 768px) {
        @import '@/styles/mobile/index.scss';
    }
    @media screen and (min-width: 768px) {
        @import '@/styles/pc/index.scss';
    }
</style>
