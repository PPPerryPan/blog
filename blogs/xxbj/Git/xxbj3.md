---
title: Git Push 常见问题
date: 2019-09-25
tags:
 - Git
categories:
 - 学习笔记
---

**纯记录一下遇到过的问题**

## Connection reset by [IP Address] port 22

1. 用手机热点

2. Proxy 模式挂梯

3. TUN 模式挂梯

4. 验证过期

   修改或新建`~/.ssh/config`

   ```
   Host github.com
   Hostname ssh.github.com
   Port 443
   User git
   ```

5. 删掉 SSH Key，[重新生成](https://ppperrypan.github.io/blogs/xxbj/Git/xxbj1.html#%E6%9C%AC%E5%9C%B0%E9%85%8D%E7%BD%AE)。

## client_loop: send disconnect: Connection reset by peerB/s

1. 用手机热点
1. Proxy 模式挂梯
3. TUN 模式挂梯