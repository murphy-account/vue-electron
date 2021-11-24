<template>
  <div>
      <el-button size="mini" type="primary" @click="aaa">登录swagger并获取TOKEN</el-button>
      <el-button size="mini" type="primary" @click="aaa">登录jenkins并发包</el-button>
      <el-button size="mini" type="primary" @click="$router.push({path: '/quickClipBoard'})">快速剪切板</el-button>
      <el-button size="mini" type="primary" @click="aaa">表格生成器</el-button>
      <el-button size="mini" type="primary" @click="$router.push({path: '/buildNew'})">配置导航菜单+生成项目初始文件</el-button>
      <h2>123123123</h2>
      <el-table :data="[{labelName:'labelName'}]">
        <el-table-column prop="labelName" label="表格列名" width="180">
        </el-table-column>
      </el-table>
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