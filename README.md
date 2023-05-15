<p align="center">
<!-- <img src="docs/.vuepress/public/images/logo.png" alt="hexo-hidden"> -->
</p>
<h1 align="center">hexo-hidden</h1>

> :cake: Hexo plugin: Hide part of the post | 隐藏文章中的部分内容

[![repo size](https://img.shields.io/github/repo-size/yiyungent/hexo-hidden.svg?style=flat)]()
[![LICENSE](https://img.shields.io/github/license/yiyungent/hexo-hidden.svg?style=flat)](https://github.com/yiyungent/hexo-hidden/blob/master/LICENSE)
[![NPM version](https://img.shields.io/npm/v/hexo-hidden.svg)](https://www.npmjs.com/package/hexo-hidden)
[![NPM downloads](https://img.shields.io/npm/dt/hexo-hidden)](https://www.npmjs.com/package/hexo-hidden)
[![QQ Group](https://img.shields.io/badge/QQ%20Group-894031109-deepgreen)](https://jq.qq.com/?_wv=1027&k=q5R82fYN)

## Intro

使用本插件隐藏文章 (post) 中的部分内容, 使其不可见, 仅能在你的本地可见

## Usage

```bash
npm install hexo-hidden --save
```

> source/_posts/demo.md

```md
# 引言

测试文章

# 标题1

> 内容1

<!-- hidden:start -->
我是隐藏内容, 注意上面和下面的开始结束标签严格匹配, <!-- hidden:start --> 而不是 <!--hidden:start-->
<!-- hidden:end -->

# 参考

下方是参考资料
```


## Related Projects

- [yiyungent/clear-image-action: 🔧 Image detection. | 图片检测 | 清理未引用图片 | 删除未引用图片 | 检查引用的图片是否有效 | GitHub Actions](https://github.com/yiyungent/clear-image-action)

## Donate

hexo-hidden is an MIT licensed open source project and completely free to use. However, the amount of effort needed to maintain and develop new features for the project is not sustainable without proper financial backing.

We accept donations through these channels:

- <a href="https://afdian.net/@yiyun" target="_blank">爱发电</a>

## Author

**hexo-hidden** © [yiyun](https://github.com/yiyungent), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by yiyun with help from contributors ([list](https://github.com/yiyungent/hexo-hidden/contributors)).

> GitHub [@yiyungent](https://github.com/yiyungent) Gitee [@yiyungent](https://gitee.com/yiyungent)


