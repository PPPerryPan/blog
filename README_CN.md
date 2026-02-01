# 项目维护指南

本文档面向项目维护者，介绍如何配置开发环境以及日常维护流程。

---

## 技术栈

- **Node.js 版本管理**: fnm (Fast Node Manager)
- **包管理器**: pnpm
- **框架**: VuePress 2.x + vuepress-theme-reco

---

## 环境要求

- Node.js: `22.22.0` (由 `.node-version` 文件指定)
- pnpm: 最新版

---

## 快速开始

### 1. 安装 fnm

#### macOS / Linux

```bash
# 使用 Homebrew 安装
brew install fnm

# 配置 shell 环境（根据你的 shell 选择）
# Bash
echo 'eval "$(fnm env --use-on-cd)"' >> ~/.bashrc

# Zsh
echo 'eval "$(fnm env --use-on-cd)"' >> ~/.zshrc

# Fish
fnm env --use-on-cd | source
```

#### Windows (PowerShell)

```powershell
# 使用 Winget 安装
winget install Schniz.fnm

# 或者使用 Scoop
scoop install fnm

# 配置 PowerShell 环境
if (!(Test-Path $PROFILE)) { New-Item -Path $PROFILE -Type File -Force }
notepad $PROFILE
```

在打开的 `$PROFILE` 文件中添加：

```powershell
# fnm - Node.js 版本管理器
fnm env --use-on-cd | Out-String | Invoke-Expression
```

**重启终端**使配置生效。

---

### 2. 安装 pnpm

```bash
# 使用 npm 安装（如果系统已有 Node.js）
npm install -g pnpm

# 或者使用 Homebrew (macOS)
brew install pnpm

# 或者使用 Scoop (Windows)
scoop install pnpm

# 或者使用独立安装脚本
curl -fsSL https://get.pnpm.io/install.sh | sh -
```

---

### 3. 克隆项目并启动

```bash
# 克隆项目
git clone <repository-url>
cd blog

# 安装 Node.js 版本（首次进入目录时会自动提示）
fnm install

# 或者手动安装指定版本
fnm install 22.22.0
fnm use 22.22.0

# 安装依赖
pnpm install

# 启动开发服务器
pnpm run dev
```

项目将运行在 http://localhost:8080/blog/

---

## 环境配置详解

### 自动检测 Node.js 版本

项目根目录下的 `.node-version` 文件指定了项目所需的 Node.js 版本：

```
22.22.0
```

当你 `cd` 进入项目目录时，fnm 会自动检测该文件并：
- 如果已安装该版本 → 自动切换
- 如果未安装 → 提示你运行 `fnm install`

### 配置原理

`fnm env --use-on-cd` 做了两件事：

1. **设置环境变量**: 让系统能够找到 fnm 管理的 Node.js
2. **启用自动切换**: 进入包含 `.node-version` 的目录时自动切换版本

---

## 常用命令

### fnm 命令

```bash
# 查看已安装的 Node.js 版本
fnm list

# 安装指定版本
fnm install 22.22.0

# 切换到指定版本
fnm use 22.22.0

# 设置默认版本
fnm default 22.22.0

# 卸载指定版本
fnm uninstall 20.10.0
```

### pnpm 命令

```bash
# 安装所有依赖
pnpm install

# 添加依赖
pnpm add <package-name>

# 添加开发依赖
pnpm add -D <package-name>

# 更新依赖
pnpm update

# 移除依赖
pnpm remove <package-name>

# 清理缓存
pnpm store prune
```

### 项目脚本

```bash
# 启动开发服务器
pnpm run dev

# 构建生产版本
pnpm run build

# 清理构建目录
pnpm run clean
```

---

## 跨平台开发注意事项

### 换行符处理

项目已配置 `.gitattributes` 自动处理换行符：

```
* text=auto
```

### 路径分隔符

- 在脚本中尽量使用 `/` 作为路径分隔符（跨平台兼容）
- Windows 下 PowerShell 也支持 `/` 分隔符

### 权限问题

- macOS/Linux: 如果遇到权限问题，使用 `chmod +x` 添加执行权限
- Windows: 以普通用户身份运行即可，无需管理员权限

---

## 故障排除

### 问题 1: 'node' 不是内部或外部命令

**原因**: fnm 环境未激活

**解决**:

```powershell
# Windows
fnm env --use-on-cd | Out-String | Invoke-Expression

# macOS/Linux
eval "$(fnm env --use-on-cd)"
```

**长期解决**: 将上述命令添加到 shell 配置文件中（见快速开始部分）

---

### 问题 2: pnpm 无法识别

**原因**: pnpm 未安装或不在 PATH 中

**解决**:

```bash
# 重新安装 pnpm
npm install -g pnpm

# 或者使用独立安装脚本
curl -fsSL https://get.pnpm.io/install.sh | sh -
```

---

### 问题 3: 依赖安装失败

**解决步骤**:

```bash
# 1. 清理缓存
pnpm store prune

# 2. 删除 node_modules
rm -rf node_modules

# 3. 重新安装
pnpm install
```

---

### 问题 4: 端口被占用

**解决**:

```bash
# 查找占用 8080 端口的进程
# macOS/Linux
lsof -i :8080

# Windows
netstat -ano | findstr :8080

# 使用其他端口启动
pnpm run dev -- --port 3000
```

---

## 项目结构

```
blog/
├── .vuepress/           # VuePress 配置
│   ├── config.ts        # 主配置文件
│   └── public/          # 静态资源
├── blogs/               # 博客内容
│   ├── life/            # 生活类文章
│   └── tech/            # 技术类文章
├── .node-version        # Node.js 版本指定
├── package.json         # 项目依赖
└── README_CN.md         # 本文件
```

---

## 更新 Node.js 版本

当需要升级 Node.js 版本时：

1. **更新 `.node-version` 文件**

   ```
   22.22.0
   ```

2. **安装新版本**

   ```bash
   fnm install
   fnm use
   ```

3. **验证版本**

   ```bash
   node -v
   ```

4. **重新安装依赖**

   ```bash
   rm -rf node_modules
   pnpm install
   ```

5. **测试项目**

   ```bash
   pnpm run dev
   pnpm run build
   ```

6. **提交更改**

   ```bash
   git add .node-version
   git commit -m "chore: upgrade Node.js to 22.22.0"
   ```

---

## 参考链接

- [fnm 官方文档](https://github.com/Schniz/fnm)
- [pnpm 官方文档](https://pnpm.io/)
- [VuePress 官方文档](https://v2.vuepress.vuejs.org/)
- [vuepress-theme-reco](https://vuepress-theme-reco.recoluan.com/)

---

## 贡献指南

1. Fork 本项目
2. 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开一个 Pull Request

---

**维护者**: [你的名字]

**最后更新**: 2026-02-01
