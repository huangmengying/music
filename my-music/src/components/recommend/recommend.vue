<template>
  <div class="recommend">
    <div class="recommend-content">
      <div class="slider-wrapper">
        <slider>
          <div v-for="item in recommends">
            <a :href="item.linkUrl">
              <img :src="item.picUrl" alt=""/>
            </a>
          </div>
        </slider>
      </div>
    </div>
    <div class="recommend-list">
      <h1>热门歌单推荐</h1>
      <ul></ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
//  import Slider from 'base/slider/slider'
  import {getRecommend} from 'api/recommend'
  import {ERR_OK} from 'api/config'
  export default {
    data () {
      return {
        recommends: []
      }
    },
    created () {
      this._getRecommend()
    },
    methods: {
      _getRecommend () {
        getRecommend().then((res) => {
          if (res.code === ERR_OK) {
            this.recommends = res.data.slider
            console.log(res.data.slider)
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>
