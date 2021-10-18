<template>
    <div id="header">
        <div class="web-header">
            <div class="left-logo">
                <router-link to="/">
                    <img src="../assets/infinite.png">
                </router-link>
            </div>
            <div class="right-content">
                <div class="header-item" v-for="item in headerList" :key="item.id">
                    <router-link :to="item.link">
                        {{item.title}}
                    </router-link>
                </div>
            </div>
        </div>
        <div class="mobile-header">
            <div class="logo">
                <img @click="showHeader" src="../assets/infinite.png">
            </div>
            <div v-if="isHeaderShow" class="show-header">
                <div class="close" @click="showHeader">
                    X
                </div>
                <div class="header-item" v-for="item in headerList" :key="item.id" @click="isHeaderShow = false">
                    <router-link :to="item.link">
                        {{item.title}}
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Header',
        data() {
            return {
                isHeaderShow: false,
                headerList:[
                    {title: 'PROFILE', link: '/profile'},
                    {title: 'DISCOGRAPHY', link: '/discography'},
                    {title: 'FILMOGRAPHY', link: '/filmography'},
                    {title: 'TOUR', link: '/tour'},
                    {title: 'SOCIAL MEDIA', link: '/social'},
                ]
            }
        },
        created () {
            window.addEventListener('scroll', this.handleScroll);
        },
        methods: {
            handleScroll() {
                if(document.documentElement.scrollTop <= 60){
                    document.getElementById('header').classList.remove('active');
                } else if(document.documentElement.scrollTop > 60){
                    document.getElementById('header').classList.add('active');
                }
            },

            showHeader() {
                this.isHeaderShow = !this.isHeaderShow;
            }
        },
    }
</script>

<style lang="scss" scoped>
    @media screen and (max-width: 768px) {
        @import '@/styles/mobile/header.scss';
    }
    @media screen and (min-width: 768px) {
        @import '@/styles/pc/header.scss';
    }
</style>
