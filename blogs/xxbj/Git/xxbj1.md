---
title: GitBash 连接 GitHub
date: 2019-09-15
tags:
 - Git
categories:
 - 学习笔记
---

## **本地配置**

1. 设置Email、userName

```
git config --global user.email "you@example.com" 
git config --global user.name "Your userName"
```

2. 生成公钥

```
ssh-keygen -C ‘your@email.address’ -t rsa
```

3. 复制公钥

```
clip < ~/.ssh/id_rsa.pub	    # Windows
cat ~/.ssh/id_rsa.pub | pbcopy	# macOS
```

## **远程配置**

前往GitHub粘贴

```
Settings -- SSH ang GPG keys -- New SSH key
```

## **验证连接**

```
ssh -T git@github.com
```

## 设置代理



```
git config --global http.proxy http://127.0.0.1:7890
git config --global https.proxy https://127.0.0.1:7890
```
