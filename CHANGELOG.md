<a name="0.3.0-beta.5"></a>

# [0.3.0-beta.5](https://github.com/whinc/web-console/compare/v0.3.0-beta.4...v0.3.0-beta.5) (2018-12-06)

### Features

- **application:** 调整底部清除和刷新范围；删除存储数据增加二次确认弹窗 ([1953419](https://github.com/whinc/web-console/commit/1953419))
- **settings:** 增加 CHANGELOG ([7e92468](https://github.com/whinc/web-console/commit/7e92468))

### Performance Improvements

- **console:** 提升批量打印日志时的显示性能 ([776891e](https://github.com/whinc/web-console/commit/776891e))

<a name="0.3.0-beta.4"></a>

# [0.3.0-beta.4](https://github.com/whinc/web-console/compare/v0.3.0-beta.3...v0.3.0-beta.4) (2018-12-03)

### Bug Fixes

- **network:** 修复底部隐藏按钮失效问题 ([a0d2269](https://github.com/whinc/web-console/commit/a0d2269))

### Features

- **application:** 支持折叠工具栏 ([ca20bfd](https://github.com/whinc/web-console/commit/ca20bfd))
- **application:** 新增刷新全部和清除全部快捷按钮 ([fd4e4b4](https://github.com/whinc/web-console/commit/fd4e4b4))

<a name="0.3.0-beta.3"></a>

# [0.3.0-beta.3](https://github.com/whinc/web-console/compare/v0.3.0-beta.2...v0.3.0-beta.3) (2018-12-03)

### Bug Fixes

- **settings:** 移除 About 页标题地下多出的横线 ([14e8cde](https://github.com/whinc/web-console/commit/14e8cde))

### Features

- **application:** 增加底部隐藏按钮 ([5eb10fe](https://github.com/whinc/web-console/commit/5eb10fe))

<a name="0.3.0-beta.2"></a>

# [0.3.0-beta.2](https://github.com/whinc/web-console/compare/0.3.0-beta.1...v0.3.0-beta.2) (2018-11-29)

### Bug Fixes

- **settings:** 移除 input 的 appearance 样式 ([c7a25b1](https://github.com/whinc/web-console/commit/c7a25b1))

<a name="0.3.0-beta.1"></a>

# [0.3.0-beta.1](https://github.com/whinc/web-console/compare/v0.3.0-beta.0...0.3.0-beta.1) (2018-11-24)

### Bug Fixes

- **application:** 分页加载边界条件判断错误 ([0f18ca1](https://github.com/whinc/web-console/commit/0f18ca1))
- **application:** 删除后自动选中下一项 ([3007755](https://github.com/whinc/web-console/commit/3007755))
- **application:** 删除并重新写入 cookie 不更新 ([477c0fa](https://github.com/whinc/web-console/commit/477c0fa))
- **application:** 移除 IOS 输入框边框；弹窗可见时阻止 IOS 上缩放行为 ([31c50ec](https://github.com/whinc/web-console/commit/31c50ec))

### Performance Improvements

- **application:** 优化修改和删除操作的性能 ([c376187](https://github.com/whinc/web-console/commit/c376187))
- **application:** 大幅提升展示大量(1W+)storage 和 cookie 的性能 ([66b8c45](https://github.com/whinc/web-console/commit/66b8c45))

<a name="0.3.0-beta.0"></a>

# [0.3.0-beta.0](https://github.com/whinc/web-console/compare/v0.2.0-rc.15...v0.3.0-beta.0) (2018-11-20)

### Bug Fixes

- **application:** cookie 操作 ([01dc531](https://github.com/whinc/web-console/commit/01dc531))
- **application:** 异常 ([bf80d3b](https://github.com/whinc/web-console/commit/bf80d3b))
- **application:** 样式问题 ([c41b07c](https://github.com/whinc/web-console/commit/c41b07c))
- **network:** 解决 ios 上网络面板无法滚动问题 ([a3d39a6](https://github.com/whinc/web-console/commit/a3d39a6))

### Features

- **application:** localStorage 和 sessionStorage 支持编辑、新增 ([3cef20c](https://github.com/whinc/web-console/commit/3cef20c))
- **application:** 优化编辑状态样式 ([10e7727](https://github.com/whinc/web-console/commit/10e7727))
- **application:** 固定表头滚动表内容 ([9624ea3](https://github.com/whinc/web-console/commit/9624ea3))
- **application:** 增加 value 的过滤 ([84eddef](https://github.com/whinc/web-console/commit/84eddef))
- **application:** 增加对 cookie 的编辑和新增操作 ([273af90](https://github.com/whinc/web-console/commit/273af90))
- **application:** 新增 localStorage 和 sessionStorage ([292f863](https://github.com/whinc/web-console/commit/292f863))
- **application:** 美化 cookie 面板 ([4deefb9](https://github.com/whinc/web-console/commit/4deefb9))
- **application:** 表格增加奇偶行色差 ([e8996e8](https://github.com/whinc/web-console/commit/e8996e8))
- **console:** 增加最大消息数量限制 ([d69e15c](https://github.com/whinc/web-console/commit/d69e15c))

### Performance Improvements

- 用 v-if 替换部分 v-show 提高性能 ([1ec40f2](https://github.com/whinc/web-console/commit/1ec40f2))
- **application:** 优化保存性能 ([802c87f](https://github.com/whinc/web-console/commit/802c87f))
- **application:** 提高巨量(1w+)storage 条目的展示性能 ([258568d](https://github.com/whinc/web-console/commit/258568d))
- **console:** 优化短期内批量打印日志造成的 UI 假死现象 ([53be149](https://github.com/whinc/web-console/commit/53be149))

<a name="0.2.0-rc.15"></a>

# [0.2.0-rc.15](https://github.com/whinc/web-console/compare/v0.2.0-rc.14...v0.2.0-rc.15) (2018-11-08)

<a name="0.2.0-rc.14"></a>

# [0.2.0-rc.14](https://github.com/whinc/web-console/compare/v0.2.0-rc.13...v0.2.0-rc.14) (2018-11-08)

### Bug Fixes

- **console:** ios 上滚动失效 ([c282ad5](https://github.com/whinc/web-console/commit/c282ad5))
- **console:** 美化 safari 上输出的错误堆栈信息 ([4634cfa](https://github.com/whinc/web-console/commit/4634cfa))
- **settings:** ios 上图标展示过大 ([66f7beb](https://github.com/whinc/web-console/commit/66f7beb))

### Features

- **console:** 增加时间戳 ([ec6752c](https://github.com/whinc/web-console/commit/ec6752c))
- **settings:** 增加设置面板 ([89c4492](https://github.com/whinc/web-console/commit/89c4492))
- **settings:** 增加设置项持久化 ([1f542bc](https://github.com/whinc/web-console/commit/1f542bc))

<a name="0.2.0-rc.13"></a>

# [0.2.0-rc.13](https://github.com/whinc/web-console/compare/v0.2.0-rc.12...v0.2.0-rc.13) (2018-11-06)

### Bug Fixes

- **console:** 循环打印错误日志 ([a570170](https://github.com/whinc/web-console/commit/a570170))

### Features

- **console:** 缩略展示长字符串 ([a7af920](https://github.com/whinc/web-console/commit/a7af920))

<a name="0.2.0-rc.12"></a>

# [0.2.0-rc.12](https://github.com/whinc/web-console/compare/v0.2.0-rc.11...v0.2.0-rc.12) (2018-11-05)

### Features

- **application:** 实现 cookie 的展示、删除、过滤、刷新 ([0a26517](https://github.com/whinc/web-console/commit/0a26517))

<a name="0.2.0-rc.11"></a>

# [0.2.0-rc.11](https://github.com/whinc/web-console/compare/v0.2.0-rc.10...v0.2.0-rc.11) (2018-10-31)

### Features

- 增加设置(展示版本信息) ([6ab8caa](https://github.com/whinc/web-console/commit/6ab8caa))

<a name="0.2.0-rc.10"></a>

# [0.2.0-rc.10](https://github.com/whinc/web-console/compare/v0.2.0-rc.9...v0.2.0-rc.10) (2018-10-30)

### Bug Fixes

- **console:** 保留消息换行符 ([2d75a7c](https://github.com/whinc/web-console/commit/2d75a7c))
- **console:** 数组展示 ([8b8faa0](https://github.com/whinc/web-console/commit/8b8faa0))

### Features

- **application:** 增加 cookie 展示 ([4df4f8c](https://github.com/whinc/web-console/commit/4df4f8c))
- **application:** 新增 Application 面板 ([91daa76](https://github.com/whinc/web-console/commit/91daa76))
- **application:** 新增 cookie/localStorage/sessionStorage 的 UI ([aac507d](https://github.com/whinc/web-console/commit/aac507d))
- **console:** 打印 Error 对象堆栈信息 ([599206b](https://github.com/whinc/web-console/commit/599206b))
- **console:** 输出日志时可自动定位到最新位置 ([2509392](https://github.com/whinc/web-console/commit/2509392))

<a name="0.2.0-rc.9"></a>

# [0.2.0-rc.9](https://github.com/whinc/web-console/compare/v0.2.0-rc.7...v0.2.0-rc.9) (2018-10-26)

### Performance Improvements

- **console:** 提升面板切换性能 ([a068d6c](https://github.com/whinc/web-console/commit/a068d6c))

<a name="0.2.0-rc.7"></a>

# [0.2.0-rc.7](https://github.com/whinc/web-console/compare/v0.2.0-rc.6...v0.2.0-rc.7) (2018-10-09)

<a name="0.2.0-rc.6"></a>

# [0.2.0-rc.6](https://github.com/whinc/web-console/compare/v0.2.0-rc.5...v0.2.0-rc.6) (2018-10-09)

### Features

- **network:** 响应数据增加语法高亮 ([dcc3df7](https://github.com/whinc/web-console/commit/dcc3df7))
- **network:** 增加 JSON 数据预览 ([a099205](https://github.com/whinc/web-console/commit/a099205))
- **network:** 增加响应数据预览 ([0bb4e95](https://github.com/whinc/web-console/commit/0bb4e95))
- **network:** 支持预览 gif/jpg/svg/txt ([72fcd52](https://github.com/whinc/web-console/commit/72fcd52))

<a name="0.2.0-rc.5"></a>

# [0.2.0-rc.5](https://github.com/whinc/web-console/compare/v0.2.0-rc.4...v0.2.0-rc.5) (2018-09-14)

### Bug Fixes

- 修复触摸滚动穿透问题 ([f017338](https://github.com/whinc/web-console/commit/f017338))

<a name="0.2.0-rc.4"></a>

# [0.2.0-rc.4](https://github.com/whinc/web-console/compare/v0.2.0-rc.3...v0.2.0-rc.4) (2018-09-11)

### Bug Fixes

- **network:** response 数据超出边界时无法滚动查看 ([4111487](https://github.com/whinc/web-console/commit/4111487))

<a name="0.2.0-rc.3"></a>

# [0.2.0-rc.3](https://github.com/whinc/web-console/compare/v0.2.0-rc.2...v0.2.0-rc.3) (2018-09-10)

### Bug Fixes

- **console:** 未正确识别占位符 %c 导致的显示问题 ([c740d16](https://github.com/whinc/web-console/commit/c740d16))
- 面板可见时悬浮按钮未隐藏 ([41f8af5](https://github.com/whinc/web-console/commit/41f8af5))

<a name="0.2.0-rc.2"></a>

# [0.2.0-rc.2](https://github.com/whinc/web-console/compare/v0.2.0-rc.1...v0.2.0-rc.2) (2018-09-08)

<a name="0.2.0-rc.1"></a>

# [0.2.0-rc.1](https://github.com/whinc/web-console/compare/v0.1.2...v0.2.0-rc.1) (2018-09-08)

### Bug Fixes

- 对象展示问题 ([0eb0a14](https://github.com/whinc/web-console/commit/0eb0a14))
- 测试用例报错 ([f2ad431](https://github.com/whinc/web-console/commit/f2ad431))
- **console:** 修复字符串显式时没有引号包裹；修复字符串很长时没有自动换行的问题 ([42b27c2](https://github.com/whinc/web-console/commit/42b27c2))
- 移除同名文件 ([3c86612](https://github.com/whinc/web-console/commit/3c86612))
- **console:** get 访问器的计算结果没有展开 ([64fc61e](https://github.com/whinc/web-console/commit/64fc61e))
- **console:** vue 向原始日志数据中添加额外属性的问题 ([ef0424b](https://github.com/whinc/web-console/commit/ef0424b))
- **console:** 使日志每行内容垂直居中 ([5d95035](https://github.com/whinc/web-console/commit/5d95035))
- **console:** 多参数打印空格问题 ([9b90a00](https://github.com/whinc/web-console/commit/9b90a00))
- **console:** 对象的折叠展开态 ([0c59572](https://github.com/whinc/web-console/commit/0c59572))
- **console:** 属性名和值过长时导致属性名未对齐;Symb 和转符串拼接时报错 ([0e6c192](https://github.com/whinc/web-console/commit/0e6c192))
- **console:** 打印对象时丢失不可枚举和 symbol 属性 ([f3901ef](https://github.com/whinc/web-console/commit/f3901ef))
- **console:** 打印的对象属性键换行导致不易阅读的问题 ([53f018a](https://github.com/whinc/web-console/commit/53f018a))
- **console:** 样式错误显式为斜体 ([83f24ca](https://github.com/whinc/web-console/commit/83f24ca))
- **console:** 计算属性结果没有高亮 ([a769a41](https://github.com/whinc/web-console/commit/a769a41))
- **network:** 状态码 ([d39e2c2](https://github.com/whinc/web-console/commit/d39e2c2))

### Features

- **cosole:** 增加多参数高亮展示；增加 console 面板内部错误处理； ([0b13707](https://github.com/whinc/web-console/commit/0b13707))
- **network:** 优化网络请求 Headers 的展示 ([fe26231](https://github.com/whinc/web-console/commit/fe26231))
- **network:** 增加对 POST 中 JSON 数据格式的展示 ([2b25641](https://github.com/whinc/web-console/commit/2b25641))
- **network:** 增加接口测试代码；解决 onreadystatechange 事件注册时机问题 ([2822d35](https://github.com/whinc/web-console/commit/2822d35))
- **network:** 增加清除；优化行高；补充测试用例 ([ceff5e7](https://github.com/whinc/web-console/commit/ceff5e7))
- **network:** 增加请求头、查询参数和 POST 数据展示 ([4075a9f](https://github.com/whinc/web-console/commit/4075a9f))
- **network:** 请求头信息分类展示 ([6fdb205](https://github.com/whinc/web-console/commit/6fdb205))
- **network:** 错误状态码高亮展示 ([78e78ac](https://github.com/whinc/web-console/commit/78e78ac))
- 入口浮标支持滑动、图标样式 ([01bee17](https://github.com/whinc/web-console/commit/01bee17))

<a name="0.1.2"></a>

## [0.1.2](https://github.com/whinc/web-console/compare/v0.1.1...v0.1.2) (2018-06-12)

<a name="0.1.1"></a>

## [0.1.1](https://github.com/whinc/web-console/compare/1dfc2f0...v0.1.1) (2018-06-12)

### Bug Fixes

- **build:** 修复 npm run serve 问题 ([93162f9](https://github.com/whinc/web-console/commit/93162f9))
- **build:** 修复构建问题 ([a3eb6a2](https://github.com/whinc/web-console/commit/a3eb6a2))
- **demo:** 修正日志打印接口调用 ([83882a9](https://github.com/whinc/web-console/commit/83882a9))
- **network:** 修复手机上无法滚动 ([919c618](https://github.com/whinc/web-console/commit/919c618))

### Features

- **console:** 增加 clear 和 hide 两个操作 ([f0238a4](https://github.com/whinc/web-console/commit/f0238a4))
- **console:** 增加日志消息分类展示 ([f17a653](https://github.com/whinc/web-console/commit/f17a653))
- **ConsolePanel:** 美化日志输出样式 ([1dfc2f0](https://github.com/whinc/web-console/commit/1dfc2f0))
- **network:** 内容超出时变为 scroll ([d4efd7f](https://github.com/whinc/web-console/commit/d4efd7f))
- **network:** 初步实现对 XMLHttpRequest 的请求的拦截显示 ([bfc8f72](https://github.com/whinc/web-console/commit/bfc8f72))
- WebConsole 支持初始化参数；增加测试用例 ([9974f00](https://github.com/whinc/web-console/commit/9974f00))
- **network:** 增加样式 ([dbf58f8](https://github.com/whinc/web-console/commit/dbf58f8))
- **network:** 展示请求响应头和数据 ([3469c9f](https://github.com/whinc/web-console/commit/3469c9f))
- **network:** 显示请求的 response 内容 ([d3c759e](https://github.com/whinc/web-console/commit/d3c759e))
- 导出全局的 WebConsole 变量 ([a0282a4](https://github.com/whinc/web-console/commit/a0282a4))
- 面板的 Tab 栏替换成自定义组件 ([37f6923](https://github.com/whinc/web-console/commit/37f6923))