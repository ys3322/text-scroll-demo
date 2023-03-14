<template>
  <div class="news-scroll">
    <header class="header">
      <div class="content-wrapper">
        <h2>这是网站标题~</h2>
      </div>
    </header>

    <main>
      <div class="news">
        <div class="content-wrapper">
          <TextScroll :texts="texts"></TextScroll>
        </div>
      </div>
    </main>

    <footer>
      <div class="content-wrapper">
        <p>footer,footer,footer,footer</p>
      </div>
    </footer>
  </div>
</template>

<script>
import TextScroll from "../../components/TextScroll.vue";

export default {
  components: {
    TextScroll,
  },
  name: "newsScroll",
  data() {
    return {
      texts: [
        "2023年3月14日 13:48:27,--这是消息11111111111111111111!2023年3月14日 13:48:27",
        "2023年3月14日 13:48:52,==这是消息",
      ],
    };
  },
  computed: {},
  created() {},
  methods: {},
};
</script>
<style scoped lang="scss">
.news-scroll {
  header {
    background-color: #f1f1f1;

    h2 {
      height: 120px;
      line-height: 120px;
    }
  }

  main {
    height: calc(100vh - 120px - 60px);
  }

  footer {
    background-color: #f1f1f1;
    height: 60px;
    line-height: 60px;
    text-align: center;
  }
}
</style>
