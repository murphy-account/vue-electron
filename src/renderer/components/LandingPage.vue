<template>
  <div id="wrapper">
    <el-button size="mini" type="primary" @click="aaa">回主菜单</el-button> 简单的表格vue生成器
    <el-row>
      <el-col :span="12">
        <el-row>
          <el-col :span="12">
            表格列名：<el-input v-model="labelName"></el-input>
          </el-col>
          <el-col :span="12">
            字段名：<el-input v-model="propName"></el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-button size="mini" type="primary" @click="aaa">添加表格列</el-button>
          <!-- <el-row>
            <el-col :span="12">
              
            </el-col>
            <el-col :span="12">23452345</el-col>
          </el-row> -->
        </el-row>
      </el-col>
      <el-col :span="12">
        <codemirror class="json-editor" v-model="jsonStr" :options="cmOptions"></codemirror>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {codemirror} from 'vue-codemirror'

export default {
  name: "landing-page",
  components: { codemirror },
  
  data(){
    return {
      labelName: '',
      propName: '',
      jsonStr:'123136541',
      cmOptions: {
          tabSize: 4,// tab的空格个数
          theme: 'dracula',//主题样式
          lineNumbers: true,//是否显示行数
          lineWrapping: true, //是否自动换行
          styleActiveLine: true,//line选择是是否加亮
          matchBrackets: true,//括号匹配
          mode: "vue", //实现javascript代码高亮
          readOnly: false//只读
      }
    }
  },
  methods: {
    open(link) {
      this.$electron.shell.openExternal(link);
    },
    aaa(){
      this.$router.push({path: '/default'});
    }
  },
};
</script>
<style >
.vue-codemirror .CodeMirror{
  height:100vh;
}
</style>
