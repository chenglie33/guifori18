<template>
  <div>
    <h3>指令代码转换</h3>
    <el-form>
      <el-form-item label="选择文件">
        <el-upload class="upload-demo" action :before-upload="bup" :on-change="onchange">
          <el-button size="small" type="primary">选择excel文件</el-button>
          <div slot="tip" class="el-upload__tip"></div>
        </el-upload>
      </el-form-item>
      <el-form-item label="输出目录">
        <el-upload class="upload-demo" action :before-upload="bup" :on-change="onchange">
         <input
                id="outPath"
                type="file"
                style="display:none"
                @change="changepath"
                webkitdirectory
              />
        </el-upload>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: "order",
  methods: {
    onchange () {

    },
    bup() {
      return false;
    },
    changepath () {
      
    }
  }
};
</script>
<style lang="scss" scoped></style>
