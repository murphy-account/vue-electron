<template>
  <div id="wrapper">
    <el-button size="mini"  icon="el-icon-back" circle @click="aaa"></el-button>
    简单的表格vue生成器
    <el-row>
      <el-col :span="12">
        <el-row>
          <el-col :span="8">
            表格列名：<el-input v-model="labelName" clearable></el-input>
          </el-col>
          <el-col :span="8">
            字段名：<el-input v-model="propName" clearable></el-input>
          </el-col>
          <el-col :span="8">
            值格式化：<el-select v-model="format" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-col>
        </el-row>
        <el-row>
          <el-button v-if="editIndex===null" size="mini" type="primary" @click="addColumn"
            >添加表格列</el-button
          >
          <el-button v-else size="mini" type="primary" @click="confirmEditRow"
            >编辑表格列</el-button
          >
          <el-button size="mini" type="primary" @click="buildTable">生成表格</el-button>
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="labelName" label="表格列名" width="180">
            </el-table-column>
            <el-table-column prop="propName" label="字段名" width="180">
            </el-table-column>
            <el-table-column prop="format" label="值格式化"> </el-table-column>
            <el-table-column prop="asdf" >
              <template slot-scope="scope">
                <el-button
                  @click.native.prevent="deleteRow(scope.$index, tableData)"
                  type="text"
                  size="small"
                >
                  删除
                </el-button>
                <el-button
                  @click.native.prevent="editRow(scope.$index, tableData)"
                  type="text"
                  size="small"
                >
                  编辑
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-row>
      </el-col>
      <el-col :span="12">
        <codemirror
          class="json-editor"
          v-model="jsonStr"
          :options="cmOptions"
        ></codemirror>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { codemirror } from "vue-codemirror";
import "codemirror/lib/codemirror.css";
import "codemirror/keymap/sublime"; //sublime编辑器效果
import "codemirror/theme/dracula.css"; // 配置里面也需要theme设置为monokai
import "codemirror/mode/vue/vue.js"; // 配置里面也需要mode设置为vue
import "codemirror/addon/selection/active-line"; //光标行背景高亮，配置里面也需要styleActiveLine设置为true

export default {
  name: "landing-page",
  components: { codemirror },

  data() {
    return {
      labelName: "",
      propName: "",
      format: "",
      editIndex: null ,
      jsonStr: "<div>564654</div>",
      cmOptions: {
        tabSize: 4, // tab的空格个数
        theme: "dracula", //主题样式
        lineNumbers: true, //是否显示行数
        lineWrapping: true, //是否自动换行
        styleActiveLine: true, //line选择是是否加亮
        matchBrackets: true, //括号匹配
        mode: "vue", //实现javascript代码高亮
        readOnly: false, //只读
      },
      options: [
        {
          value: "选项1",
          label: "日期格式化",
        },
        {
          value: "选项2",
          label: "转百分数取X位小数",
        },
        {
          value: "选项3",
          label: "取到小数位后X位并补0",
        },
        {
          value: "选项4",
          label: "加千位符",
        },
        {
          value: "选项5",
          label: "值转XX万，XX亿",
        },
      ],
      tableData: [
      ],
    };
  },
  methods: {
    open(link) {
      this.$electron.shell.openExternal(link);
    },
    aaa() {
      this.$router.push({ path: "/default" });
    },
    addColumn() {
      this.tableData.push({
        labelName: this.labelName,
        propName: this.propName,
        format: "format",
      });
      this.clear()
    },
    clear(){
      this.labelName = ''
      this.propName = ''
      this.format = ''
    },
    buildTable() {

    },
    defaultJsonStr(){
      return `
      
      `
    },
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    editRow(index, rows) {
      this.labelName = rows[index].labelName
      this.propName = rows[index].propName
      this.format = rows[index].format
      this.editIndex = index
    },
    confirmEditRow() {
      this.tableData[this.editIndex].labelName = this.labelName
      this.tableData[this.editIndex].propName = this.propName
      this.tableData[this.editIndex].format = this.format
      this.clear()
      this.editIndex = null
    },
  },
};
</script>
<style >
.vue-codemirror .CodeMirror {
  height: 100vh;
}
</style>
