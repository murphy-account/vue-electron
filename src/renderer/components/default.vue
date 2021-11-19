<template>
  <div>
      <el-button size="mini" type="primary" @click="aaa">回表格生成器</el-button>
      <h2>123123123</h2>
  </div>
</template>

<script>
export default {
    name:'default',
    methods: {
    aaa(){
      this.$router.push({path: '/'});
    }
  },

}
</script>

<style>

</style>