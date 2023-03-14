<template>
  <div class="demo">
    <h2>demo</h2>
    <TextScroll :texts="texts"></TextScroll>
  </div>
</template>
<script>
import TextScroll from "../../components/TextScroll.vue";

export default {
  components: {
    TextScroll,
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
