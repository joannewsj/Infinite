<template>
    <div class="social">
        <div class="web-social">
            <div class="left">
                <div class="site">
                    <div class="site-title">OFFICIAL WEBSITE</div>
                    <div class="sites">
                        <div class="site-item" @click="handleLink('http://www.woolliment.com')">
                            <img src="../assets/woollim.png">
                            <p>울림엔터테인먼트</p>
                        </div>
                        <div class="site-item" @click="handleLink('http://www.2sang.kr')">
                            <img src="../assets/2sang.png">
                            <p>매니지먼트 이상</p>
                        </div>
                        <div class="site-item" @click="handleLink('https://www.dhtne.com/')">
                            <img src="../assets/doublehtne.png">
                            <p>더블에이치티엔이</p>
                        </div>
                        <div class="site-item" @click="handleLink('http://woolliment.phps.kr/artists/main_infinite.php')">
                            <img src="../assets/infinite-home.png">
                            <p>INFINITE</p>
                        </div>
                    </div>
                </div>
                <div class="site">
                    <div class="site-title">VLIVE</div>
                    <div class="sites">
                        <div class="site-item" @click="handleLink('https://channels.vlive.tv/FE815')">
                            <img class="icon" src="../assets/vlive.png">
                            <p>INFINITE</p>
                        </div>
                        <div class="site-item" @click="handleLink('https://channels.vlive.tv/84AF51')">
                            <img class="icon" src="../assets/vlive.png">
                            <p>KIM SUNG KYU</p>
                        </div>
                        <div class="site-item" @click="handleLink('https://channels.vlive.tv/AA3A9F')">
                            <img class="icon" src="../assets/vlive.png">
                            <p>KIM MYUNG SOO (L)</p>
                        </div>
                    </div>
                </div>
                <div class="site">
                    <div class="site-title">YOUTUBE</div>
                    <div class="sites">
                        <div class="site-item" @click="handleLink('https://www.youtube.com/infinitehome')">
                            <img class="icon" src="../assets/youtube_logo.png">
                            <p>INFINITE</p>
                        </div>
                        <div class="site-item" @click="handleLink('https://www.youtube.com/channel/UCp0m_0YNCXEVNnvSCO8SJnw')">
                            <img class="icon" src="../assets/youtube_logo.png">
                            <p>묭묭튜브</p>
                        </div>
                        <div class="site-item" @click="handleLink('https://www.youtube.com/channel/UC-QcUO88xTGJ7XEeiS6SI7Q')">
                            <img class="icon" src="../assets/youtube_logo.png">
                            <p>이성종🍋</p>
                        </div>
                        <div class="site-item" @click="handleLink('https://www.youtube.com/channel/UC8ezR7kE4zVbRi-DxN6nzjw')">
                            <img class="icon" src="../assets/youtube_logo.png">
                            <p>성규특별시 [KimSungKyu Official]</p>
                        </div>
                    </div>
                </div>
                <div class="site">
                    <div class="site-title">WEIBO</div>
                    <div class="sites">
                        <div class="site-item" @click="handleLink('http://www.weibo.com/officialifnt')">
                            <img class="icon" src="../assets/weibo.png">
                            <p>Official_INFINITE</p>
                        </div>
                        <div class="site-item" @click="handleLink('https://weibo.com/u/5844006436')">
                            <img class="icon" src="../assets/weibo.png">
                            <p>KMS92</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="right">
                <div class="site">
                    <div class="site-title">FACEBOOK</div>
                    <div class="sites">
                        <div class="site-item" @click="handleLink('https://www.facebook.com/ifnt7')">
                            <img class="icon" src="../assets/fb.png">
                            <p>INFINITE</p>
                        </div>
                    </div>
                </div>
                <div class="site">
                    <div class="site-title">TWITTER</div>
                    <div class="sites">
                        <div class="site-item" @click="handleLink('https://twitter.com/Official_IFNT')">
                            <img class="icon" src="../assets/twitter_logo.png">
                            <p>Official_IFNT</p>
                        </div>
                        <!-- <div class="site-item" @click="handleLink('https://twitter.com/KIMMYUNGSOO_1')">
                            <img class="icon" src="../assets/twitter_logo.png">
                            <p>KIMMYUNGSOO_1</p>
                        </div> -->
                        <!-- <div class="site-item" @click="handleLink('https://twitter.com/LSY_official_')">
                            <img class="icon" src="../assets/twitter_logo.png">
                            <p>LSY_official_</p>
                        </div> -->
                        <div class="site-item" @click="handleLink('https://twitter.com/kyuzizi')">
                            <img class="icon" src="../assets/twitter_logo.png">
                            <p>kyuzizi</p>
                        </div>
                        <div class="site-item" @click="handleLink('https://twitter.com/ddww1122')">
                            <img class="icon" src="../assets/twitter_logo.png">
                            <p>ddww1122</p>
                        </div>
                        <div class="site-item" @click="handleLink('https://twitter.com/wowwh')">
                            <img class="icon" src="../assets/twitter_logo.png">
                            <p>wowwh</p>
                        </div>
                        <div class="site-item" @click="handleLink('https://twitter.com/seongyeol1991')">
                            <img class="icon" src="../assets/twitter_logo.png">
                            <p>seongyeol1991</p>
                        </div>
                        <div class="site-item" @click="handleLink('https://twitter.com/INFINITELKIM')">
                            <img class="icon" src="../assets/twitter_logo.png">
                            <p>INFINITELKIM</p>
                        </div>
                        <div class="site-item" @click="handleLink('https://twitter.com/infiniteyounges')">
                            <img class="icon" src="../assets/twitter_logo.png">
                            <p>infiniteyounges</p>
                        </div>
                    </div>
                </div>
                <div class="site">
                    <div class="site-title">INSTAGRAM</div>
                    <div class="sites">
                        <div class="site-item" @click="handleLink('https://www.instagram.com/official_ifnt_')">
                            <img class="icon" src="../assets/ig_logo.png">
                            <p>official_ifnt_</p>
                        </div>
                        <div class="site-item" @click="handleLink('https://www.instagram.com/gyu357')">
                            <img class="icon" src="../assets/ig_logo.png">
                            <p>gyu357</p>
                        </div>
                        <div class="site-item" @click="handleLink('https://www.instagram.com/ddong_gg0')">
                            <img class="icon" src="../assets/ig_logo.png">
                            <p>ddong_gg0</p>
                        </div>
                        <div class="site-item" @click="handleLink('https://www.instagram.com/nwh91')">
                            <img class="icon" src="../assets/ig_logo.png">
                            <p>nwh91</p>
                        </div>
                        <div class="site-item" @click="handleLink('https://www.instagram.com/sungyeol_827')">
                            <img class="icon" src="../assets/ig_logo.png">
                            <p>sungyeol_827</p>
                        </div>
                        <div class="site-item" @click="handleLink('https://www.instagram.com/kim_msl')">
                            <img class="icon" src="../assets/ig_logo.png">
                            <p>kim_msl</p>
                        </div>
                        <div class="site-item" @click="handleLink('https://www.instagram.com/ssongjjong.ifnt')">
                            <img class="icon" src="../assets/ig_logo.png">
                            <p>ssongjjong.ifnt</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mobile-social">
            <div class="title">
                SOCIAL MEDIA
            </div>
            <el-collapse v-model="activeNames">
                <el-collapse-item title="OFFICIAL WEBSITE" name="1">
                    <div class="site-item" @click="handleLink('http://www.woolliment.com')">
                        <img src="../assets/woollim.png">
                        <p>울림엔터테인먼트</p>
                    </div>
                    <div class="site-item" @click="handleLink('http://www.2sang.kr')">
                        <img src="../assets/2sang.png">
                        <p>매니지먼트 이상</p>
                    </div>
                    <div class="site-item" @click="handleLink('https://www.dhtne.com/')">
                        <img src="../assets/doublehtne.png">
                        <p>더블에이치티엔이</p>
                    </div>
                    <div class="site-item" @click="handleLink('http://woolliment.phps.kr/artists/main_infinite.php')">
                        <img src="../assets/infinite-home.png">
                        <p>INFINITE</p>
                    </div>
                </el-collapse-item>
                <el-collapse-item title="VLIVE" name="2">
                    <div class="sites">
                        <div class="site-item" @click="handleLink('https://channels.vlive.tv/FE815')">
                            <img class="icon" src="../assets/vlive.png">
                            <p>INFINITE</p>
                        </div>
                        <div class="site-item" @click="handleLink('https://channels.vlive.tv/84AF51')">
                            <img class="icon" src="../assets/vlive.png">
                            <p>KIM SUNG KYU</p>
                        </div>
                        <div class="site-item" @click="handleLink('https://channels.vlive.tv/AA3A9F')">
                            <img class="icon" src="../assets/vlive.png">
                            <p>KIM MYUNG SOO (L)</p>
                        </div>
                    </div>
                </el-collapse-item>
                <el-collapse-item title="YOUTUBE" name="3">
                    <div class="site-item" @click="handleLink('https://www.youtube.com/infinitehome')">
                        <img class="icon" src="../assets/youtube_logo.png">
                        <p>INFINITE</p>
                    </div>
                    <div class="site-item" @click="handleLink('https://www.youtube.com/channel/UCp0m_0YNCXEVNnvSCO8SJnw')">
                        <img class="icon" src="../assets/youtube_logo.png">
                        <p>묭묭튜브</p>
                    </div>
                    <div class="site-item" @click="handleLink('https://www.youtube.com/channel/UC-QcUO88xTGJ7XEeiS6SI7Q')">
                        <img class="icon" src="../assets/youtube_logo.png">
                        <p>이성종🍋</p>
                    </div>
                    <div class="site-item" @click="handleLink('https://www.youtube.com/channel/UC8ezR7kE4zVbRi-DxN6nzjw')">
                        <img class="icon" src="../assets/youtube_logo.png">
                        <p>성규특별시 [KimSungKyu Official]</p>
                    </div>
                </el-collapse-item>
                <el-collapse-item title="WEIBO" name="4">
                    <div class="site-item" @click="handleLink('http://www.weibo.com/officialifnt')">
                        <img class="icon" src="../assets/weibo.png">
                        <p>Official_INFINITE</p>
                    </div>
                    <div class="site-item" @click="handleLink('https://weibo.com/u/5844006436')">
                        <img class="icon" src="../assets/weibo.png">
                        <p>KMS92</p>
                    </div>
                </el-collapse-item>
                <el-collapse-item title="FACEBOOK" name="5">
                    <div class="site-item" @click="handleLink('https://www.facebook.com/ifnt7')">
                        <img class="icon" src="../assets/fb.png">
                        <p>INFINITE</p>
                    </div>
                </el-collapse-item>
                <el-collapse-item title="TWITTER" name="6">
                    <div class="site-item" @click="handleLink('https://twitter.com/Official_IFNT')">
                        <img class="icon" src="../assets/twitter_logo.png">
                        <p>Official_IFNT</p>
                    </div>
                    <div class="site-item" @click="handleLink('https://twitter.com/kyuzizi')">
                        <img class="icon" src="../assets/twitter_logo.png">
                        <p>kyuzizi</p>
                    </div>
                    <div class="site-item" @click="handleLink('https://twitter.com/ddww1122')">
                        <img class="icon" src="../assets/twitter_logo.png">
                        <p>ddww1122</p>
                    </div>
                    <div class="site-item" @click="handleLink('https://twitter.com/wowwh')">
                        <img class="icon" src="../assets/twitter_logo.png">
                        <p>wowwh</p>
                    </div>
                    <div class="site-item" @click="handleLink('https://twitter.com/seongyeol1991')">
                        <img class="icon" src="../assets/twitter_logo.png">
                        <p>seongyeol1991</p>
                    </div>
                    <div class="site-item" @click="handleLink('https://twitter.com/INFINITELKIM')">
                        <img class="icon" src="../assets/twitter_logo.png">
                        <p>INFINITELKIM</p>
                    </div>
                    <div class="site-item" @click="handleLink('https://twitter.com/infiniteyounges')">
                        <img class="icon" src="../assets/twitter_logo.png">
                        <p>infiniteyounges</p>
                    </div>
                </el-collapse-item>
                <el-collapse-item title="INSTAGRAM" name="7">
                    <div class="site-item" @click="handleLink('https://www.instagram.com/official_ifnt_')">
                        <img class="icon" src="../assets/ig_logo.png">
                        <p>official_ifnt_</p>
                    </div>
                    <div class="site-item" @click="handleLink('https://www.instagram.com/gyu357')">
                        <img class="icon" src="../assets/ig_logo.png">
                        <p>gyu357</p>
                    </div>
                    <div class="site-item" @click="handleLink('https://www.instagram.com/ddong_gg0')">
                        <img class="icon" src="../assets/ig_logo.png">
                        <p>ddong_gg0</p>
                    </div>
                    <div class="site-item" @click="handleLink('https://www.instagram.com/nwh91')">
                        <img class="icon" src="../assets/ig_logo.png">
                        <p>nwh91</p>
                    </div>
                    <div class="site-item" @click="handleLink('https://www.instagram.com/sungyeol_827')">
                        <img class="icon" src="../assets/ig_logo.png">
                        <p>sungyeol_827</p>
                    </div>
                    <div class="site-item" @click="handleLink('https://www.instagram.com/kim_msl')">
                        <img class="icon" src="../assets/ig_logo.png">
                        <p>kim_msl</p>
                    </div>
                    <div class="site-item" @click="handleLink('https://www.instagram.com/ssongjjong.ifnt')">
                        <img class="icon" src="../assets/ig_logo.png">
                        <p>ssongjjong.ifnt</p>
                    </div>
                </el-collapse-item>
            </el-collapse>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SocialMedia',
        data() {
            return {
                activeNames: ['1'],
            }
        },
        methods: {
            handleLink(link) {
                window.open(link, '_blank');
            }
        },
    }
</script>

<style lang="scss">
    .el-collapse-item .el-collapse-item__header{
        padding: 0 5vw;
        background-color: #001A34 !important;
        color: #E3CA53 !important;
    }
    .el-collapse-item .el-collapse-item__wrap{
        background-color: #001A34 !important;
    }
    .el-collapse-item .el-collapse-item__content{
        padding: 0 5vw 5vw;
        color: white !important;
    }
</style>
<style lang="scss" scoped>
    @media screen and (max-width: 768px) {
        @import '@/styles/mobile/social.scss';
    }
    @media screen and (min-width: 768px) {
        @import '@/styles/pc/social.scss';
    }
</style>
