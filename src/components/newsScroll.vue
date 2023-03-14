<template>
  <div class="news">
    <div class="left">
      <i class="icon icon-news"></i>
      <span>网站滚动新闻：</span>
    </div>
    <div class="right" ref="right">
      <div ref="box" class="box">
        {{ texts[textIndex] }}
      </div>
      <div class="text" v-for="(item, index) in texts" :key="index" ref="text">
        {{ item }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'NewsScroll',
  props: {
    /** 滚动字符串数组 */
    texts: Array,
  },
  data() {
    return {
      /** 滚动字符串 */
      text: "",
      /** 滚动第几个字符串 */
      textIndex: 0,
      /** 定时器 */
      Interval: null,
    };
  },
  watch: {
    texts: {
      handler() {
        clearInterval(this.Interval);
        if (!this.texts.length) return;
        this.textIndex = 0;
        this.$nextTick(() => {
          this.move();
        });
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    move() {
      // 获取右侧的宽度
      const rightWidth = this.$refs.right.getBoundingClientRect().width;
      // 获取所有字符串的宽度
      const textWidths = this.$refs.text.map((item) => {
        return item.getBoundingClientRect().width;
      });
      const box = this.$refs.box;
      // 位移距离
      let distance = 0;
      // 定时滚动
      this.Interval = setInterval(() => {
        distance = distance - 1;
        if (-distance >= textWidths[this.textIndex]) {
          // 列表播放完回到第一个
          if (this.textIndex === this.texts.length - 1) {
            this.textIndex = 0;
          } else {
            this.textIndex += 1;
          }
          distance = rightWidth;
        }
        box.style.transform = "translateX(" + distance + "px)";
      }, 10);
    },
  },
  unMounted() {
    clearInterval(this.Interval);
  },
};
</script>
<style lang="scss" scoped>
.news {
  padding-left: 312px;
  line-height: 40px;
  height: 40px;
  font-size: 16px;
  color: #333333;
  background-color: #e7e9e9;
  @include flex;

  .left {
    color: #099088;
    font-size: 16px;
    font-weight: bold;
    flex-shrink: 0;
  }
  .right {
    flex: 1;
    overflow: hidden;
  }
}

.box {
  // 滚动的文本过多时，可能会显示不全。还没滚动到最后就切换下一个条了 可以改成1470px
  width: 9999px;
}

.box div {
  float: left;
}

.text {
  flex: 1;
  position: absolute;
  z-index: -999;
  top: -999999px;
}
</style>
