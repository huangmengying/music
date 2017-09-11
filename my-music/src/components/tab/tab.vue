<template>
  <div class="tab">
    <router-link tag="div" class="tab-item" to="/recommend">
      <span class="tab-link">排行</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/singer">
      <span class="tab-link">歌手</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/rank">
      <span class="tab-link">热门</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/search">
      <span class="tab-link">搜索</span>
    </router-link>
  </div>

</template>

<script type="text/ecmascript-6">

  export default {}

</script>

<style scoped>
  .tab {
    margin: 10px 0;
    display: flex;
  }

  .tab-item {
    text-align: center;
    flex: 1;
  }
  .router-link-active  .tab-link {
    color: yellow;
    padding-bottom: 2px;
    border-bottom: 1px solid yellow;
  }
</style>
