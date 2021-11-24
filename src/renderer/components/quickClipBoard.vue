<template>
  <div>
    <div>
      <el-button
        size="mini"
        icon="el-icon-back"
        circle
        @click="$router.push({ path: '/default' })"
      ></el-button>
      quickClipBoard
      <el-button size="mini" @click="disabled = !disabled"
        >{{ disabled ? "打开" : "关闭" }}悬浮显示</el-button
      >

    </div>
    <el-row>
      <el-col :span="10">
        <el-tooltip
          v-for="(value, item, index) in templateStr"
          :key="index"
          :disabled="disabled"
          :content="value"
          placement="bottom"
          effect="light"
        >
          <el-button @click="copyValue(value)" size="mini">{{
            item
          }}</el-button>
        </el-tooltip>
      </el-col>
      <el-col :span="14">
        <codemirror v-model="jsonStr" :options="cmOptions"></codemirror>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { codemirror } from "vue-codemirror";
import templateStr from "@/templateStr";
import { clipboard } from "electron";
import { savedPath,readFile,writeFile,renameFile,deleteFile} from "@/utils/index.js"
export default {
  name: "quickClipBoard",
  components: { codemirror },
  data() {
    let keys = Object.keys(templateStr);
    console.log("keys", keys);
    return {
      copyValueStr: "",
      disabled: false,
      keys,
      templateStr,
      jsonStr: "<div>点击后显示复制代码</div>",
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
    };
  },
  methods: {
    copyValue(v) {
      clipboard.write({ text: v });
      this.jsonStr = v
      console.log(clipboard.readText());
      writeFile(path.join(savedPath,'1804.txt'),'这是值').then(()=>{alert('success')})
      this.$message.success({
        message: "复制成功",
        duration: "500",
      });
    },
  },
};
</script>

<style>
</style>