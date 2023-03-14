<template>
  <div class="text-scroll">
    <div class="left-text">网站滚动新闻：</div>

    <div class="right-news" ref="rightScrollRef">
      <!-- 滚动DOM -->
      <div class="scroll" :style="scrollDOMStyle">
        {{ currentItem.text }}
      </div>

      <!-- 计算文本渲染到界面上的宽度 -->
      <div class="temp-texts">
        <div class="text" v-for="item in texts" :key="item.index" ref="textRef">
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TextScroll",
  props: {
    texts: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      intervalTimer: null,

      // 开始滚动的位置
      startDistance: 200,
      // 滚动元素 left属性值
      left: 0,

      //当前滚动项 下标
      activeIndex: 0,
      // 文本详情
      textDetails: [],
    };
  },
  computed: {
    scrollDOMStyle() {
      return {
        left: `${this.left}px`,
        // width: `${this.textDetails[this.activeIndex]?.width ?? 0}px`,
      };
    },

    currentItem() {
      // console.log('yangs=> ',this.textDetails);
      return this.textDetails[this.activeIndex] ?? {};
    },

    textList() {
      return this.texts.map((item, index) => ({
        id: index,
        text: item,
      }));
    },
  },

  watch: {
    texts: {
      handler() {
        this.initTextData();
      },
      immediate: true,
    },
  },
  mounted() {
    //简单兼容
    if (!window.requestAnimationFrame) {
      window.requestAnimationFrame = function (fn) {
        setTimeout(fn, 17);
      };
    }

    this.startScroll();
  },
  destroyed() {
    // 清空间隔器
    if (this.intervalTimer) {
      clearInterval(this.intervalTimer);
    }
  },
  methods: {
    initTextData() {
      this.$nextTick(() => {
        // 计算文本的显示宽度
        const textRefs = this.$refs?.textRef ?? [];
        textRefs.forEach((item,index) => {
          const width = item.getBoundingClientRect().width;
          this.textDetails.push({
            text: this.texts[index],
            width,
          });
        });

        // console.log("yangs=> initTextData...", textRefs, this.textDetails);

        const rightScrollRef = this.$refs.rightScrollRef;
        // 右侧开始滚动的位置
        this.startDistance =
          rightScrollRef.getBoundingClientRect()?.width ?? 1056;
        // console.log('yangs=> ',rightScrollRef,this.startDistance);
      });
    },

    startScroll() {
      // 1. 处理参数
      let index = this.activeIndex;
      this.left = this.startDistance;

      // 2. 改变left 使文字移动
      this.intervalTimer = setInterval(() => {
        this.left -= 1;
        // 文字左滚动的距离 大于 元素的大小
        if (-this.left >= this.currentItem.width) {
          this.left = this.startDistance; // 调整开始位置
          index = index + 1;
          if (index >= this.textDetails.length) {
            // 循环文字列表
            index = 0;
          }
          this.activeIndex = index;
        }
      }, 10);
    },
  },
};
</script>
<style scoped lang="scss">
.text-scroll {
  display: flex;
  height: 32px;
  line-height: 32px;

  .left-text {
    padding: 0 16px;
    background-color: bisque;
  }
}
.right-news {
  flex: 1;
  background-color: azure;
  position: relative;
  overflow: hidden;
  .scroll {
    // width: 9999px;
    width: max-content;
    position: absolute;
    left: 0;
    top: 0;
  }
}

.temp-texts {
  position: fixed;
  left: -9999px;
  z-index: 999;
  visibility: hidden;
  .text {
    width: max-content;
  }
}
</style>
