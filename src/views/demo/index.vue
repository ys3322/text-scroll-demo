<template>
  <div class="demo">
    <h2>demo</h2>
    <newsScroll :texts="texts"></newsScroll>
  </div>
</template>
<script>
import newsScroll from "../../components/newsScroll.vue";

export default {
  components: {
    newsScroll,
  },
  data() {
    return {
      texts: [
        "2023年3月14日 12:57:50:11111111111111111111111",
        "2023年3月14日 12:57:50:22222222222222222222222",
      ],
    };
  },
  watch: {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.demo {
  h2 {
    color: $primary-color;
    margin-bottom: 30px;
  }
}
</style>
