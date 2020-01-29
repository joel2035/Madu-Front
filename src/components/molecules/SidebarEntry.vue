<template>
  <div class="entry" @click="redirect">
    <i :class="icon"></i>
    <div class="name">{{ name }}</div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    linkName: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    }
  },
  methods: {
    redirect() {
      this.$router.push({
        name: this.linkName
      });
    }
  }
};
</script>

<style lang="scss">
.entry {
  display: flex;
  align-items: center;
  padding: 10px;
  i {
    margin-right: 10px;
  }
  &:hover {
    cursor: pointer;
    background-color: #bbb;
  }
}
</style>
