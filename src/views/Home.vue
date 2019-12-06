<template>
  <div class="home" v-loading="loading">
    <div>
      <el-row :gutter="20" class="mb">
        <el-col :span="5">
          <div class="grid-content bg-purple">关键key：</div>
        </el-col>
        <el-col :span="15">
          <div class="grid-content bg-purple">
            <el-input
              v-model="keyv"
              placeholder="输入excel中Row的key(默认为A)"
            ></el-input>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20" class="mb">
        <el-col :span="5">
          <div class="grid-content bg-purple">是否使用正则：</div>
        </el-col>
        <el-col :span="15">
          <div class="grid-content bg-purple">
            <el-switch
              v-model="isusereg"
              active-color="#13ce66"
              inactive-color="#ff4949"
            >
            </el-switch>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20" class="mb" v-if="isusereg">
        <el-col :span="5">
          <div class="grid-content bg-purple">匹配规则：</div>
        </el-col>
        <el-col :span="15">
          <div class="grid-content bg-purple">
            <el-input
              v-model="keyreg"
              placeholder="正则表达式 默认&符 导出名称以&之前的为准"
            ></el-input>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20" class="mb" v-if="isusereg">
        <el-col :span="5">
          <div class="grid-content bg-purple">文件后缀：</div>
        </el-col>
        <el-col :span="15">
          <div class="grid-content bg-purple">
            <el-input v-model="filetype" placeholder="默认js"></el-input>
          </div>
        </el-col>
      </el-row>
      <el-row class="mb">
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <el-upload
              class="upload-demo"
              action=""
              :before-upload="bup"
              :on-change="onchange"
            >
              <el-button size="small" type="primary">选择excel文件</el-button>
              <div slot="tip" class="el-upload__tip"></div>
            </el-upload>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple-light">
            <span style="font-size:12px"
              ><u
                ><i>{{ filepath }}</i></u
              ></span
            >
          </div>
        </el-col>
      </el-row>
      <el-row class="mb">
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <label
              for="outPath"
              class="el-button el-button--primary el-button--small"
            >
              选择输出文件夹
              <input
                id="outPath"
                type="file"
                style="display:none"
                @change="changepath"
                webkitdirectory
              />
            </label>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple-light">
            <span style="font-size:12px"
              ><u
                ><i>{{ filepathout }}</i></u
              ></span
            >
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20" class="mb" v-if="sheets.length !== 0">
        <el-col :span="5">
          <div class="grid-content bg-purple">选择sheet：</div>
        </el-col>
        <el-col :span="15">
          <div class="grid-content bg-purple">
            <el-checkbox
              :indeterminate="isIndeterminate"
              v-model="checkAll"
              @change="handleCheckAllChange"
              >全选</el-checkbox
            >
            <el-checkbox-group
              v-model="checkedsheet"
              @change="handleCheckedSheetChange"
            >
              <el-checkbox
                class="fonts"
                v-for="item in sheets"
                :label="item"
                :key="item"
                >{{ item }}</el-checkbox
              >
            </el-checkbox-group>
          </div>
        </el-col>
      </el-row>

      <el-row class="mb" v-if="sheets.length !== 0">
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <el-button
              @click="outMe"
              type="primary"
              :disabled="this.checkedsheet.length == 0 || !this.filepathout"
              :loading="isoutloading"
              >导出</el-button
            >
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple"></div>
        </el-col>
      </el-row>
    </div>
    <div>
      ---重复的key---
      <ul class="infinite-list" style="overflow:auto">
        <li v-for="i in message" class="infinite-list-item tal" :key="i">
          {{ i }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
// import { FileClassJson } from "@/util/FileClass";
const { ipcRenderer } = require("electron");
export default {
  name: "home",
  components: {
    // HelloWorld
  },
  data() {
    return {
      fileObjreply: null,
      checkSheetsreply: null,
      isusereg: true,
      message: [],
      filetype: "",
      filepath: "",
      filepathout: "",
      loading: false,
      keyv: "",
      keyreg: "",
      checkedsheet: [],
      sheets: [],
      isIndeterminate: true,
      checkAll: true,
      isoutloading: false,
      fobj: ""
    };
  },
  methods: {
    onchange(e) {
      this.loading = true;
      setTimeout(() => {
        this.filepath = e.raw.path;
        localStorage.setItem("filepath", this.filepath);
        ipcRenderer.send("fileObj", {
          filepath: this.filepath,
          filepathout: this.filepathout,
          keyv: this.keyv ? this.keyv.toUpperCase() : "A"
        });
        // this.fobj = new FileClassJson(
        //   e.raw.path,
        //   this.filepathout,
        //   this.keyv ? this.keyv.toUpperCase() : "A"
        // );
        // this.sheets = this.fobj.workbook.SheetNames;
        // this.checkedsheet = this.fobj.workbook.SheetNames;
        // this.loading = false;
      }, 500);
    },
    handleCheckedSheetChange() {},
    handleCheckAllChange(val) {
      this.checkedsheet = val ? this.sheets : [];
      this.isIndeterminate = false;
    },
    changepath(e) {
      this.filepathout = e.target.files[0].path;
      localStorage.setItem("filepathout", this.filepathout);
      // this.fobj.setoutPath(this.filepathout);
      ipcRenderer.send("setpath", this.filepathout);
    },
    bup() {
      return false;
    },
    outMe() {
      this.isoutloading = true;
      setTimeout(() => {
        ipcRenderer.send("checkSheets", {
          checkedsheet: this.checkedsheet,
          isusereg: this.isusereg,
          keyv: this.keyv,
          keyreg: this.isusereg ? (!this.keyreg ? "&" : this.keyreg) : "",
          filetype: this.filetype
        });
        // this.fobj.checkSheet(
        //   this.checkedsheet,
        //   this.isusereg,
        //   this.keyv,
        //   this.isusereg ? (!this.keyreg ? "&" : this.keyreg) : "",
        //   this.filetype
        // );
        // this.isoutloading = false;
        // this.message = this.fobj.repeatkey;
      }, 200);
    }
  },
  mounted() {
    let that = this;
    this.fileObjreply = (event, arg) => {
      that.sheets = arg;
      that.checkedsheet = arg;
      that.loading = false;
    };
    this.checkSheetsreply = (event, arg) => {
      that.isoutloading = false;
      that.message = arg;
    };
    ipcRenderer.on("fileObj-reply", this.fileObjreply);
    ipcRenderer.on("checkSheets-reply", this.checkSheetsreply);
    // message.sub('getRepeat',{})
    let filepathout = localStorage.getItem("filepathout");
    let filepath = localStorage.getItem("filepath");
    this.filepath = filepath ? filepath : "";
    this.filepathout = filepathout ? filepathout : "";
    if (!filepath) return;
    this.loading = true;
    setTimeout(() => {
      ipcRenderer.send("fileObj", {
        filepath: this.filepath,
        filepathout: this.filepathout,
        keyv: this.keyv ? this.keyv.toUpperCase() : "A"
      });
      // this.fobj = new FileClassJson(
      //   this.filepath,
      //   this.filepathout,
      //   this.keyv ? this.keyv.toUpperCase() : "A"
      // );
      // this.sheets = this.fobj.workbook.SheetNames;
      // this.checkedsheet = this.fobj.workbook.SheetNames;
      // this.fobj.setoutPath(this.filepathout);
      // this.loading = false;
    }, 500);
  },
  destroyed() {
    ipcRenderer.removeListener("fileObj-reply", this.fileObjreply);
    ipcRenderer.removeListener("checkSheets-reply", this.checkSheetsreply);
    // message.removeSub()
  }
};
</script>
<style lang="scss" scoped>
.mb {
  margin-bottom: 18px;
  display: flex;
  justify-content: left;
  align-items: center;
}
.bg-purple {
  text-align: left;
}
.fonts {
  font-size: 12px !important;
}
.home {
  flex: 1;
  display: flex;
  flex-direction: column;
  // overflow: hidden;
  & > div {
    flex: 1;
  }
}
.infinite-list {
  background-color: #f9f9f9;
}
.bg-purple-light {
  text-align: right;
}
</style>
