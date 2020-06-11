---
title: 环境配置
---

# 前端Web环境

前端的开发环境简单概况就是：浏览器、编辑器、NodeJs，浏览器不用多说，即便不是开发者该软件也必不可少，
这里我们会重点介绍 Node 环境的安装配置，以及推荐的代码编辑器 VsCode

## Ide

前端比较流行的Ide很多，有Sublime、Atom、WebStorm，但是现在最流行的当属后起之秀VsCode。

Vscode

- [官网下载]<https://code.visualstudio.com/>

推荐安装插件

- Color Info
- vscode-icons
- EditorConfig for VS Code
- Git History
- GitLens
- Node modules resolve
- Path Autocomplete
- Vetur
- ESLint

## 浏览器

不多说，首推 Chrome，其次 Firefox 。

## NodeJs

为了可以在一台机器上使用不同`版本`的NodeJs，我们先安装一个工具`nvm`。

当然这不是必要的，你完全可以单独安装某个版本的Node，但是一旦Node升级或遇到特殊版本要求的Node程序，就会很麻烦。

## nvm 安装与配置

**nvm**是NodeJs的版本管理工具，使用它可以在本地安装管理多个不同版本的NodeJs，并根据需要动态切换。
如果已经安装过NodeJs，要安装nvm，要先卸载掉NodeJs。

### Windows 安装

- [windows下载地址]<https://github.com/coreybutler/nvm-windows/releases>
- 下载最新的一键安装版本`nvm-setup.zip`, 解压后傻瓜式安装即可。

配置淘宝镜像源

为了提高nvm在国内的下载速度，最好修改nvm的镜像下载地址。

找到 nvm 的安装目录，编辑 settings.txt 文件，添加如下配置，含义是使用淘宝镜像下载64位的node或npm。

```txt
arch: 64
node_mirror: http://npm.taobao.org/mirrors/node/
npm_mirror: https://npm.taobao.org/mirrors/npm/
iojs_mirror: https://npm.taobao.org/mirrors/iojs/
```

### Mac 安装

- [mac下载地址]<https://github.com/nvm-sh/nvm>
- 根据说明可通过命令安装`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash`

### nvm 源配置

为了提高 nvm 在国内的下载速度，最好修改 nvm 的镜像下载地址。

```shell
# 打开当前shell环境变量配置文件
~/.zshrc

# 加入如下环境变量
export NVM_NodeJs_ORG_MIRROR=http://npm.taobao.org/mirrors/node
export NVM_NPM_ORG_MIRROR=http://npm.taobao.org/mirrors/npm
export NVM_IOJS_ORG_MIRROR=http://npm.taobao.org/mirrors/iojs

# 重载环境变量
source ~/.zshrc
```

### nvm 常用命令

- nvm install      # 安装指定版本
- nvm uninstall    # 卸载指定版本
- nvm list         # 列出已安装的版本
- nvm use          # 版本切换
- nvm on           # 启用nvm
- nvm off          # 关闭nvm
- nvm root         # nvm安装路径

### NodeJs 安装与配置

nvm 安装

```shell
# 下来最新发行稳定版
nvm install stable

# 查看已下载的所有版本
nvm list

# 使用已下载的某个版本
nvm use x.x.x

# 测试是否生效
node -v

# 测试是否拥有了npm包管理工具
npm -v
```

手动安装

1.去官网手动下载并手动安装

- [官网]<https://NodeJs.org/en/>
- [中文网]<http://NodeJs.cn/>

2.测试

```shell
# 测试是否安装成功
node -v

# 测试是否拥有了npm包管理工具
npm -v
```

### Npm 简介与配置

npm 全程 `node package manage`，最初是一款 Node 软件包管理器，后来衍生到了前端，成了前后通吃的 JavaScript 软件包管理器。

默认情况下安装 NodeJs 的时候会自动安装 npm，所以我们不用额外安装它，直接使用就可以了。

#### 源配置

为了提高国内下载速度，下载源地址可以改为淘宝镜像源。

```shell
# 修改命令
npm config set registry http://npm.guahao-inc.com
npm config set disturl http://npm.guahao-inc.com

# 查阅修改是否正确
npm config get registry
npm config get disturl
```

#### 源管理工具

有时候我们可能会切换到npm官方源，或者公司内网源，切来切来很不方便，要是有个工具能够很方便的切换npm源就好了。

实际上还真有这样的工具，而且也是用node开发的，它叫`nrm`，意为`npm rource manage`，我们全局安装这个包就可以使用了。

```shell
# 全局安装nrm
npm install nrm -g

# 查看所有可用源
nrm ls

# 切换源
nrm use
```

#### nrm 常用命令

- `nvm add <name> <url>`  # 添加源
- `nvm ls`                # 列出所有源
- `nvm use <name>`        # 切换源
- `nvm del <name>`        # 删除源

## 环境配置简诉

1. 安装 VsCode 编辑器，安装几个推荐的插件
2. 安装 Chrome 浏览器
3. 安装 nvm(Node多版本管理器) 工具，配置淘宝源
4. 用 nvm 安装最新版本 node.js ，配置 npm(Node包管理器) 淘宝源
5. 用 npm 全局安装 nrm(Npm源管理器)
