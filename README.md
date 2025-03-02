# vue3-ts-cms
* 基于Vue3+TypeScrip的后台管理平台
* git 初始化项目 和 提交代码
```js
git init

git branch -M main

git remote add origin https://github.com/Jrea888/vue3-ts-cms.git

git push origin main

git pull origin main --rebase

git rebase --continue

git push origin main
```

## 项目设置
* 在执行安装之前，检查node版本是 16.20.2，否则需要升级node版本
```
npm install

```
### 用于开发的编译和热重载
* 确保node版本正确后再运行，就不会报错了

```
npm run serve
```

### 编译和缩小以用于生产环境

```
npm run build
```

### 代码检测

```
npm run lint
```

## 项目结构
* public 静态资源
* src
  * assets 静态资源
  * base-ui 不同项目之间的基础公共组件库
  * components 此项目中公共组件
  * router 路由
  * service 服务API请求
  * store vuex
  * utils 工具函数
  * views 页面
  * App.vue 根组件
  * main.ts 入口文件
  * shims-vue.d.ts vue文件声明
  * shims.d.ts 全局声明
* .browserslistrc 浏览器兼容配置
* .editorconfig 编辑器配置文件
* .env.development 开发环境配置文件
* .env.production 生产环境配置文件
* .eslintrc.js eslint配置文件
* .gitignore git忽略文件
* .prettierignore prettier配置忽略的文件
* .prettierrc prettier配置文件
* babel.config.js babel配置文件
* commitlint.config 提交代码规范配置文件
* package-lock.json npm安装包依赖文件
* package.json 项目依赖
* tsconfig.json ts配置文件
* vue.config.js vue配置
