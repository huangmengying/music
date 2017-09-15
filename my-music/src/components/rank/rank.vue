<template>
  <div class="rank">热门歌曲</div>
</template>

<script type="text/ecmascript-6">
  import {getTopList} from 'api/rank'
  import {ERR_OK} from 'api/config'
export default {
    data() {
      return {
        topList: []
      }
    },
    created() {
      this._getTopList()
    },
    methods: {
      _getTopList() {
        getTopList().then((res) => {
          if (res.code === ERR_OK) {
            this.topList = res.data.topList
            console.log(res.data.topList)
          }
        })
      }
    }
}
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">

</style>
