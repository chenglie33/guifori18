# 国际化导出工具

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run electron:serve
```

### Compiles and minifies for production
```
npm run electron:build
```

### Customize configuration
执行build打包 生成可直接运行工具 文件夹将直接放在dist_electron中 自行寻找可执行文件
>>build时报错./cptable in ./node_modules/xlsx-style@0.8.13@xlsx-style/dist/cpexcel.js  找到\node_modules\xlsx-style\dist\cpexcel.js 807行 var cpt = require(’./cpt’ + ‘able’)换成var cpt = cptable;
