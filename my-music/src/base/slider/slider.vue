<!--<template>-->
  <!--<div class="slider" ref="slider">-->
    <!--<div class="slider-group" ref="sliderGroup">-->
      <!--<slot></slot>-->
    <!--</div>-->
    <!--<div class="dots">-->
    <!--<span class="dot" :class="{active: currentPageIndex === index}" v-for="(item, index) in dots"></span>-->
    <!--</div>-->
  <!--</div>-->
<!--</template>-->

<!--<script type="text/ecmascript-6">-->
  <!--import BScroll from 'better-scroll'-->
  <!--export default {-->
    <!--props: {-->
      <!--loop: {-->
        <!--type: Boolean,-->
        <!--default: true-->
      <!--},-->
      <!--autoPlay: {-->
        <!--type: Boolean,-->
        <!--default: true-->
      <!--},-->
      <!--interval: {-->
        <!--type: Number,-->
        <!--default: 4000-->
      <!--}-->
    <!--},-->
    <!--create () {-->
    <!--},-->
    <!--mouted () {-->
      <!--setTimeout(() => {-->
        <!--this._setSliderWidth()-->
        <!--this._initslider()-->
      <!--}, 20)-->
    <!--},-->
    <!--methods: {-->
      <!--_setSliderWidth () {-->
        <!--let width = 0-->
        <!--let sliderWidth = this.$refs.slider.clientWidth-->

        <!--for (let i = 0; i < this.children.length; i++) {-->
          <!--let child = this.children[i]-->
          <!--addClass(child, 'slider-item')-->

          <!--child.style.width = sliderWidth + 'px'-->
          <!--width += sliderWidth-->
        <!--}-->

        <!--if (this.loop && !isResize) {-->
          <!--width += 2 * sliderWidth-->
        <!--}-->
        <!--this.$refs.sliderGroup.stylus.width = width + 'px'-->
      <!--},-->
      <!--_initslider () {-->

      <!--}-->
    <!--}-->
  <!--}-->
<!--</script>-->

<!--<style scoped>-->
  <!--.slider {-->
    <!--min-height: 1px-->
  <!--}-->

  <!--.slider-group {-->
    <!--position: relative;-->
    <!--overflow: hidden;-->
    <!--white-space: nowrap;-->
  <!--}-->

  <!--.slider-item {-->
    <!--float: left;-->
    <!--box-sizing: border-box;-->
    <!--overflow: hidden;-->
    <!--text-align: center;-->
  <!--}-->

  <!--a {-->
    <!--display: block;-->
    <!--width: 100%;-->
    <!--overflow: hidden;-->
    <!--text-decoration: none;-->
  <!--}-->

  <!--img {-->
    <!--display: block;-->
    <!--width: 100%;-->
  <!--}-->

  <!--.dots {-->
    <!--position: absolute;-->
    <!--right: 0;-->
    <!--left: 0;-->
    <!--bottom: 12px;-->
    <!--text-align: center;-->
    <!--font-size: 0;-->
  <!--}-->

  <!--.dot {-->
    <!--display: inline-block;-->
    <!--margin: 0 4px;-->
    <!--width: 8px;-->
    <!--height: 8px;-->
    <!--border-radius: 50%;-->
    <!--background: rgba(255, 255, 255, 0.5);-->
  <!--}-->
<!--</style>-->
