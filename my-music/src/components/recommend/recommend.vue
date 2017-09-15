<template>
  <div class="recommend">
    <Scroll ref="scroll" :data="discList" class="recommend-content">
      <div>
        <div class="recommend-wrapper">
          <mt-swipe :auto="3000" :showIndicators="true" class="slider-wrapper" v-if="recommends.length">
            <mt-swipe-item v-for="item in recommends" :key="item.index" class="swiper">
              <a :href="item.linkUrl">
                <img :src="item.picUrl" alt="">
              </a>
            </mt-swipe-item>
          </mt-swipe>
        </div>
        <div class="recommend-list">
        <h1>热门歌单推荐</h1>
        <ul>
          <li v-for="list in discList" :key="list.index" class="recommend-item">
            <div class="recommend-left">
              <img :src="list.imgurl" >
            </div>
            <div class="recommend-right">
              <h4 class="title" v-html="list.creator.name"></h4>
              <p class="desc" v-html="list.dissname"></p>
            </div>
          </li>
        </ul>
      </div>
      </div>
    </Scroll>
  </div>
</template>

<script type="text/ecmascript-6">
  import {getRecommend, getDiscList} from 'api/recommend'
  import {ERR_OK} from 'api/config'
  import Scroll from 'base/scroll/scroll'
  export default {
    data () {
      return {
        recommends: [],
        discList: []
      }
    },
    created () {
      this._getRecommend()
      this._getDiscList()
    },
    methods: {
      _getRecommend () {
        getRecommend().then((res) => {
          if (res.code === ERR_OK) {
            this.recommends = res.data.slider
            console.log(res.data.slider)
          }
        })
      },
      _getDiscList () {
        getDiscList().then((res) => {
          if (res.code === ERR_OK) {
            this.discList = res.data.list
            console.log(res.data.list)
          }
        })
      }
    },
    components: {
//      Slider
      Scroll
    }
  }
</script>

<style scoped>
  .recommend {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 88px;
    bottom: 0;
  }
  .recommend-wrapper {
  height: 160px;
  overflow: hidden;
}
  .recommend-wrapper img {
  width: 100%;
}
  .slider-wrapper {
    position: relative;
    width: 100%;
    overflow: hidden;
  }
  .swiper {
    width: 400px;
  }
  .recommend-list {
    margin: 15px 15px 0;
  }
  .recommend-list h1 {
    text-align: center;
    color: yellow;
    font-size: 16px;
    line-height: 30px;

  }
  .recommend-item,.recommend-right {
    height: 80px;
    margin-top: 10px;
  }
  .recommend-left {
    float: left;
  }

  .recommend-right {
    overflow: hidden;
    padding-left: 15px;
  }
  .recommend-left img {
    width: 60px;
    height: 60px;
    display: block;
  }
  .recommend-right .title, .recommend-right .desc {
    margin-top: 10px;
  }
 .recommend-right .title {
   font-size: 15px;
 }
  .recommend-right .desc {
    line-height: 20px;
    font-size: 14px;
    color: #666;
  }
</style>
