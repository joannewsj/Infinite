<template>
    <div class="discography">
        <div class="web-discography">
            <div class="title">
                DISCOGRAPHY
            </div>
            <div class="selection">
                <div class="item" :class="{clicked : type == 'All'}" @click="clicked('All')">
                    All
                </div>
                <div class="item" :class="{clicked : type == 'Infinite'}" @click="clicked('Infinite')">
                    Infinite
                </div>
                <div class="item" :class="{clicked : type == 'Infinite H'}" @click="clicked('Infinite H')">
                    Infinite H
                </div>
                <div class="item" :class="{clicked : type == 'Infinite F'}" @click="clicked('Infinite F')">
                    Infinite F
                </div>
                <div class="item" :class="{clicked : type == 'Toheart'}" @click="clicked('Toheart')">
                    Toheart
                </div>
                <div class="item" :class="{clicked: type == item.name}" v-for="item in options" :key="item.id" @click="clicked(item.name)">
                    {{item.name}}
                </div>
            </div>
            <div class="album">
                <div class="album-detail" v-for="item in album" :key="item.id" @click="showDetail(item.id)">
                    <img :src="item.img">
                    <!-- <div class="overlay">
                        <div class="overlay-text">
                            <div class="album-name">{{item.album_name}}</div>
                            <div class="album-date">{{item.release_date}}</div>
                        </div>
                    </div> -->
                </div>
            </div>
            <el-pagination
                layout="prev, pager, next"
                @current-change="handleCurrentChange"
                :page-size="totalPerPage"
                :total="total"
                :current-page="currentPage"
                :hide-on-single-page="true"
                :background="true">
            </el-pagination>
            <div class="album-track">
                <div class="track-left">
                    <div class="album-img">
                        <img :src="albumTrack.img">
                    </div>
                </div>
                <div class="track-right">
                    <div class="name">{{albumTrack.album_name}}</div>
                    <div class="date">{{albumTrack.release_date}}</div>
                    <div class="track">
                        <div v-for="(item, index) in albumTrack.track" :key="item.id">{{index + 1}}. {{item}}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mobile-discography">
            <div class="title">
                DISCOGRAPHY
            </div>
            <div class="album">
                <div class="album-detail" v-for="item in album" :key="item.id">
                    <img :src="item.img">
                    <div class="album-track">
                        <div class="name">{{item.album_name}}</div>
                        <div class="date">{{item.release_date}}</div>
                    </div>
                </div>
            </div>
            <el-pagination small
                layout="prev, pager, next"
                @current-change="handleCurrentChange"
                :page-size="totalPerPage"
                :total="total"
                :current-page="currentPage"
                :hide-on-single-page="true"
                :background="true">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Discography',
        data() {
            return {
                album: [],
                options: [],
                type: 'All',
                albumTrack: [],
                total: 1,
                totalPerPage: 4,
                currentPage: 1,
            }
        },
        mounted () {
            this.init();
        },
        methods: {
            init() {
                this.axios.get("json/Discography.json").then((response) => {
                    if(response.status){
                        response.data.discography.sort(function (a, b){
                            a = Date.parse(a.release_date);
                            b = Date.parse(b.release_date);
                            return a-b;
                        });
                        this.album = response.data.discography;
                        this.total = this.album.length;
                        this.options = response.data.album_type;
                        if(this.type == 'Infinite' || this.type == 'Infinite H' || this.type == 'Infinite F' || this.type == 'Toheart'){
                            this.album = response.data.discography.filter(element => element.group_name == this.type);
                            this.total = this.album.length;
                        } else if(this.type != 'All'){
                            this.album = response.data.discography.filter(element => element.type == this.type);
                            this.total = this.album.length;
                        }
                        var startFrom = (this.totalPerPage * this.currentPage) - this.totalPerPage;
                        var goTo = this.totalPerPage * this.currentPage;
                        this.album = this.album.slice(startFrom, goTo);
                        this.albumTrack = this.album[0];
                    }
                })
            },

            clicked(type){
                this.type = type;
                this.currentPage = 1;
                this.init();
            },

            handleCurrentChange(page){
                this.currentPage = page;
                this.init();
            },

            showDetail(id){
                this.albumTrack = this.album.filter(element => element.id == id)[0];
            },
        },
    }
</script>

<style lang="scss">
    .el-pagination.is-background .btn-next,
    .el-pagination.is-background .btn-prev,
    .el-pagination.is-background .el-pager li{
        background-color: transparent !important;
        color: white !important;
    }

    .el-pagination.is-background .el-pager li:not(.disabled).active{
        background-color: rgba(255,255,255, 0.3) !important;
        color: #E3CA53 !important;
    }
</style>
<style lang="scss" scoped>
    @media screen and (max-width: 768px) {
        @import '@/styles/mobile/discography.scss';
    }
    @media screen and (min-width: 768px) {
        @import '@/styles/pc/discography.scss';
    }
</style>
