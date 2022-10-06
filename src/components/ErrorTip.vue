<template>
  <div>
    <el-button plain @click="open4"> 错误 </el-button>
  </div>
</template>

<script>
export default {
  name: "ErrorTip",
  methods: {
    open4() {
      this.$notify.error({
        title: "错误",
        message: "这是一条错误的提示消息",
      });
    },
  },
};
</script>

<style lang="less" scoped>
</style>