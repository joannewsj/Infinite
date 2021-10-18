<template>
    <div class="profile">
        <div class="web-profile">
            <div class="member">
                <div class="member-item" @click="showMember(1)">
                    <img :class="{circle : id == 1}" src="../assets/Sunggyu.jpg">
                    <div class="member-name" :class="{yellow : id == 1}">
                        김성규
                    </div>
                </div>
                <div class="member-item" @click="showMember(2)">
                    <img :class="{circle : id == 2}" src="../assets/Dongwoo.jpg">
                    <div class="member-name" :class="{yellow : id == 2}">
                        장동우
                    </div>
                </div>
                <div class="member-item" @click="showMember(3)">
                    <img :class="{circle : id == 3}" src="../assets/Woohyun.jpg">
                    <div class="member-name" :class="{yellow : id == 3}">
                        남우현
                    </div>
                </div>
                <div class="member-item" @click="showMember(4)">
                    <img :class="{circle : id == 4}" src="../assets/Sungyeol.jpg">
                    <div class="member-name" :class="{yellow : id == 4}">
                        이성열
                    </div>
                </div>
                <div class="member-item" @click="showMember(5)">
                    <img :class="{circle : id == 5}" src="../assets/Myungsoo.jpg">
                    <div class="member-name" :class="{yellow : id == 5}">
                        김명수
                    </div>
                </div>
                <div class="member-item" @click="showMember(6)">
                    <img :class="{circle : id == 6}" src="../assets/Sungjong.jpg">
                    <div class="member-name" :class="{yellow : id == 6}">
                        이성종
                    </div>
                </div>
            </div>
            <div class="member-detail">
                <div class="detail">
                    <img :src="member.img">
                </div>
                <div class="detail">
                    <p>{{member.name}} {{member.korean_name}}</p>
                    <p>{{setDate(member.dob)}}</p>
                    <p>{{member.height}}</p>
                    <p>{{member.hometown}}</p>
                    <p>{{member.position}}</p>
                    <div class="social">
                        <img @click="handleRoute(member.twitter)" src="../assets/twitter_logo.png">
                        <img @click="handleRoute(member.instagram)" src="../assets/ig_logo.png">
                        <img v-if="member.youtube" @click="handleRoute(member.youtube)" src="../assets/youtube_logo.png">
                    </div>
                    <div class="choose-list">
                        <div class="choose-item" v-if="member.discography" :class="{clicked : isShow == 'discography'}" @click="choose('discography')">
                            Discography
                        </div>
                        <div class="choose-item" v-if="member.filmography" :class="{clicked : isShow == 'filmography'}" @click="choose('filmography')">
                            Filmography
                        </div>
                        <div class="choose-item" v-if="member.tour" :class="{clicked : isShow == 'tour'}" @click="choose('tour')">
                            Tour
                        </div>
                        <div class="choose-item" v-if="member.awards" :class="{clicked : isShow == 'awards'}" @click="choose('awards')">
                            Awards
                        </div>
                    </div>
                </div>
            </div>
            <div class="content">
                <div class="content-detail discography" v-if="member.discography && isShow=='discography'">
                    <div class="title">
                        DISCOGRAPHY
                    </div>
                    <div class="album">
                        <div class="album-detail" v-for="item in member.discography" :key="item.id">
                            <img :src="item.img">
                            <div class="overlay">
                                <div class="overlay-text">
                                    <div class="album-name">{{item.album_name}}</div>
                                    <div class="album-date">{{item.release_date}}</div>
                                    <div class="album-track">
                                        <div v-for="(item, index) in item.track" :key="item.id">{{index + 1}}. {{item}}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="content-detail filmography" v-if="member.filmography && isShow=='filmography'">
                    <div class="title">
                        FILMOGRAPHY
                    </div>
                    <div class="subcontent" v-if="member.filmography.drama.length > 0">
                        <div class="subtitle">
                            DRAMA
                        </div>
                        <table>
                            <tr v-for="item in member.filmography.drama" :key="item.id">
                                <td style="width:100px;">{{item.year}}</td>
                                <td style="width:100px;">{{item.network}}</td>
                                <td>{{item.title}} ({{item.korean_title}})</td>
                            </tr>
                        </table>
                    </div>
                    <div class="subcontent" v-if="member.filmography.variety_show.length > 0">
                        <div class="subtitle">
                            VARIETY SHOW
                        </div>
                        <table>
                            <tr v-for="item in member.filmography.variety_show" :key="item.id">
                                <td style="width:100px;">{{item.year}}</td>
                                <td style="width:100px;">{{item.network}}</td>
                                <td>{{item.title}} ({{item.korean_title}})</td>
                            </tr>
                        </table>
                    </div>
                    <div class="subcontent" v-if="member.filmography.musical.length > 0">
                        <div class="subtitle">
                            MUSICAL
                        </div>
                        <table>
                            <tr v-for="item in member.filmography.musical" :key="item.id">
                                <td v-if="item.year.length > 1">{{item.year[0]}} - {{item.year[item.year.length - 1]}}</td>
                                <td v-else>{{item.year[0]}}</td>
                                <td>{{item.title}} ({{item.korean_title}})</td>
                            </tr>
                        </table>
                    </div>
                    <div class="subcontent" v-if="member.filmography.radio_show">
                        <div class="subtitle">
                            RADIO SHOW
                        </div>
                        <table>
                            <tr v-for="item in member.filmography.radio_show" :key="item.id">
                                <td>{{item.year[0]}} - {{item.year[item.year.length - 1]}}</td>
                                <td>{{item.title}}</td>
                                <td>{{item.network}}</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div class="content-detail tour" v-if="member.tour && isShow=='tour'">
                    <div class="title">
                        TOUR
                    </div>
                    <div class="subcontent" v-if="member.tour.concert.length > 0">
                        <div class="subtitle">
                            CONCERT
                        </div>
                        <table v-for="item in member.tour.concert" :key="item.id">
                            <tr>
                                <td class="table-title" colspan="3">{{item.title}}</td>
                            </tr>
                            <tr v-for="item in item.detail" :key="item.id">
                                <td style="width:250px;">{{item.date}}</td>
                                <td style="width:250px;">{{item.city}}</td>
                                <td>{{item.venue}}</td>
                            </tr>
                        </table>
                    </div>
                    <div class="subcontent" v-if="member.tour.fan_meeting.length > 0">
                        <div class="subtitle">
                            FAN MEETING
                        </div>
                        <table v-for="item in member.tour.fan_meeting" :key="item.id">
                            <tr>
                                <td class="table-title" colspan="3">{{item.title}}</td>
                            </tr>
                            <tr v-for="item in item.detail" :key="item.id">
                                <td style="width:250px;">{{item.date}}</td>
                                <td style="width:250px;">{{item.city}}</td>
                                <td>{{item.venue}}</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div class="content-detail awards" v-if="member.awards && isShow=='awards'">
                    <div class="title">
                        AWARDS
                    </div>
                    <div class="subcontent">
                        <table v-for="item in member.awards" :key="item.id">
                            <tr>
                                <td class="table-title" colspan="3">{{item.year}}</td>
                            </tr>
                            <tr v-for="item in item.awards" :key="item.id">
                                <td style="width:280px;">{{item.award}}</td>
                                <td style="width:360px;">{{item.category}}</td>
                                <td>{{item.work}}</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div class="mobile-profile">
            <div class="member">
                <div class="member-item" @click="showMember(1)">
                    <img :class="{circle : id == 1}" src="../assets/Sunggyu.jpg">
                </div>
                <div class="member-item" @click="showMember(2)">
                    <img :class="{circle : id == 2}" src="../assets/Dongwoo.jpg">
                </div>
                <div class="member-item" @click="showMember(3)">
                    <img :class="{circle : id == 3}" src="../assets/Woohyun.jpg">
                </div>
                <div class="member-item" @click="showMember(4)">
                    <img :class="{circle : id == 4}" src="../assets/Sungyeol.jpg">
                </div>
                <div class="member-item" @click="showMember(5)">
                    <img :class="{circle : id == 5}" src="../assets/Myungsoo.jpg">
                </div>
                <div class="member-item" @click="showMember(6)">
                    <img :class="{circle : id == 6}" src="../assets/Sungjong.jpg">
                </div>
            </div>
            <div class="swipe">
                SWIPE RIGHT FOR MORE DETAILS >>
            </div>
            <swiper ref="mySwiper">
                <swiperSlide>
                    <div class="swiper-item">
                        <div class="detail">
                            <img :src="member.img">
                            <p>{{member.name}} {{member.korean_name}}</p>
                            <p>{{setDate(member.dob)}}</p>
                            <p>{{member.height}}</p>
                            <p>{{member.hometown}}</p>
                            <p>{{member.position}}</p>
                            <div class="social">
                                <img @click="handleRoute(member.twitter)" src="../assets/twitter_logo.png">
                                <img @click="handleRoute(member.instagram)" src="../assets/ig_logo.png">
                                <img v-if="member.youtube" @click="handleRoute(member.youtube)" src="../assets/youtube_logo.png">
                            </div>
                        </div>
                    </div>
                </swiperSlide>
                <swiperSlide v-if="member.discography">
                    <div class="swiper-item">
                        <div class="discography">
                            <div class="title">
                                DISCOGRAPHY
                            </div>
                            <div class="album">
                                <div class="album-detail" v-for="item in member.discography" :key="item.id">
                                    <img :src="item.img">
                                    <div class="album-name">{{item.album_name}}</div>
                                    <div class="album-date">{{item.release_date}}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiperSlide>
                <swiperSlide v-if="member.filmography">
                    <div class="swiper-item">
                        <div class="filmography">
                            <div class="title">
                                FILMOGRAPHY
                            </div>
                            <div class="subcontent" v-if="member.filmography.drama.length > 0">
                                <div class="subtitle">
                                    DRAMA
                                </div>
                                <ul>
                                    <li v-for="item in member.filmography.drama" :key="item.id">{{item.year}} {{item.network}} {{item.title}} ({{item.korean_title}})</li>
                                </ul>
                            </div>
                            <div class="subcontent" v-if="member.filmography.variety_show.length > 0">
                                <div class="subtitle">
                                    VARIETY SHOW
                                </div>
                                <ul>
                                    <li v-for="item in member.filmography.variety_show" :key="item.id">{{item.year}} {{item.network}} {{item.title}} ({{item.korean_title}})</li>
                                </ul>
                            </div>
                            <div class="subcontent" v-if="member.filmography.musical.length > 0">
                                <div class="subtitle">
                                    MUSICAL
                                </div>
                                <ul>
                                    <li v-for="item in member.filmography.musical" :key="item.id">
                                        <span v-if="item.year.length > 1">{{item.year[0]}} - {{item.year[item.year.length - 1]}} </span>
                                        <span v-else>{{item.year[0]}} </span>
                                        {{item.title}} ({{item.korean_title}})
                                    </li>
                                </ul>
                            </div>
                            <div class="subcontent" v-if="member.filmography.radio_show">
                                <div class="subtitle">
                                    RADIO SHOW
                                </div>
                                <ul>
                                    <li v-for="item in member.filmography.radio_show" :key="item.id">{{item.year[0]}} - {{item.year[item.year.length - 1]}} {{item.title}} {{item.network}} </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </swiperSlide>
                <swiperSlide v-if="member.tour">
                    <div class="swiper-item">
                        <div class="tour">
                            <div class="title">
                                TOUR
                            </div>
                            <div class="subcontent" v-if="member.tour.concert.length > 0">
                                <div class="subtitle">
                                    CONCERT
                                </div>
                                <div class="subtitle-item" v-for="item in member.tour.concert" :key="item.id">
                                    <div class="subtitle-title">{{item.title}}</div>
                                    <div class="subtitle-detail" v-for="item in item.detail" :key="item.id">
                                        <div class="subtitle-subtitle">{{item.date}}</div>
                                        <div v-if="item.city">{{item.venue}} - {{item.city}}</div>
                                    </div>
                                </div>
                            </div>
                            <div class="subcontent" v-if="member.tour.fan_meeting.length > 0">
                                <div class="subtitle">
                                    FAN MEETING
                                </div>
                                <div class="subtitle-item" v-for="item in member.tour.fan_meeting" :key="item.id">
                                    <div class="subtitle-title">{{item.title}}</div>
                                    <div class="subtitle-detail" v-for="item in item.detail" :key="item.id">
                                        <div class="subtitle-subtitle">{{item.date}}</div>
                                        <div v-if="item.city">{{item.venue}} - {{item.city}}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiperSlide>
                <swiperSlide v-if="member.awards">
                    <div class="swiper-item">
                        <div class="awards">
                            <div class="title">
                                AWARDS
                            </div>
                            <div class="subtitle-item" v-for="item in member.awards" :key="item.id">
                                <div class="subtitle-title">{{item.year}}</div>
                                <div class="subtitle-detail" v-for="item in item.awards" :key="item.id">
                                    <div class="subtitle-subtitle">{{item.category}}</div>
                                    <div>{{item.work}}</div>
                                    <div>{{item.award}}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiperSlide>
            </swiper>
        </div>
    </div>
</template>

<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper';
    export default {
        name: 'Profile',
        data() {
            return {
                id: 1,
                member: [],
                isShow: 'discography',
                discographyDetail: [],
            }
        },
        components: {
            swiper, swiperSlide
        },
        computed: {
            swiper() {
                return this.$refs.mySwiper.swiper;
            },
        },
        mounted () {
            this.init();
        },
        methods: {
            init(){
                this.axios.get("json/member.json").then((response) =>{
                    if (response.status) {
                        var array_id = this.id - 1;
                        this.member = response.data.member_list[array_id];
                        if(response.data.member_list[array_id].discography){
                            response.data.member_list[array_id].discography.sort(function (a, b){
                                a = Date.parse(a.release_date);
                                b = Date.parse(b.release_date);
                                return a-b;
                            })
                        }
                    }
                    this.$refs.mySwiper.swiper.slideTo(0,0);
                });
            },

            showMember(id) {
                this.id = id;
                this.init();
                if(this.id == 4){
                    this.isShow = 'filmography';
                } else{
                    this.isShow = 'discography';
                }
                window.scrollTo(0, 0);
            },

            handleRoute(link){
                window.open(link, '_blank');
            },

            setDate(date){
                var newDate = new Date(date).toDateString();
                var split = newDate.split(' ');
                return split[2] + ' ' + split[1] + ' ' + split[3];
            },

            choose(item){
                this.isShow = item;
            }
        },
    }
</script>

<style lang="scss" scoped>
    @media screen and (max-width: 768px) {
        @import '@/styles/mobile/profile.scss';
    }
    @media screen and (min-width: 768px) {
        @import '@/styles/pc/profile.scss';
    }
</style>
