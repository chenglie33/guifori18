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
import { FileClassJson } from "@/util/FileClass";

export default {
  name: "home",
  components: {
    // HelloWorld
  },
  data() {
    return {
      isusereg: true,
      message: [],
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
        this.fobj = new FileClassJson(
          e.raw.path,
          "/Users/chenlei/Desktop/tt",
          this.keyv ? this.keyv.toUpperCase() : "A"
        );
        this.sheets = this.fobj.workbook.SheetNames;
        this.checkedsheet = this.fobj.workbook.SheetNames;
        this.loading = false;
      }, 500);
    },
    handleCheckedSheetChange() {},
    handleCheckAllChange(val) {
      this.checkedsheet = val ? this.sheets : [];
      this.isIndeterminate = false;
    },
    changepath(e) {
      this.filepathout = e.target.files[0].path;
      this.fobj.setoutPath = this.filepathout;
    },
    bup() {
      return false;
    },
    outMe() {
      this.isoutloading = true;
      this.fobj.checkSheet(
        this.checkedsheet,
        this.isusereg,
        this.keyv,
        this.isusereg ? (!this.keyreg ? "&" : this.keyreg) : ""
      );
      this.isoutloading = false;
      this.message = this.fobj.repeatkey;
    }
  },
  mounted() {
    // message.sub('getRepeat',{})
  },
  destroyed() {
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
</style>
