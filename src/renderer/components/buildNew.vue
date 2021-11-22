<template>
  <div>
    <el-button size="mini" icon="el-icon-back" circle @click="aaa"></el-button>
    <h2>buildNew</h2>
    <div>
        目标路径：
    </div>
    <ul>
        <li>创建文件夹</li>
        <li>生成内容+创建文件</li>
        <li></li>
        <li>各路由路径目录</li>
    </ul>
    <el-button size="mini"  @click="open">查看目标目录</el-button>
    <el-button size="mini"  @click="add">在该目录添加文件夹+文件</el-button>
    <!-- <el-button size="mini" icon="el-icon-back" circle @click="aaa"></el-button> -->
  </div>
</template>

<script>
export default {
  name: "buildNew",
  methods: {
    aaa() { 
      this.$router.push({ path: "/default" }); 
    },
    open() {},
    add() {},
  },
};
</script>

<style>
</style>