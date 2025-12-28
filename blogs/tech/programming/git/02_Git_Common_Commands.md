---
title: Git 基础
date: 2019-09-29
tags:
  - Git
categories:
  - tech

---



### Git基本操作

| 命令          | 例子                        | 描述                                                         |
| ------------- | --------------------------- | ------------------------------------------------------------ |
| git init      | `git init <directory>`      | 在指定的文件夹`<directory>`里创建一个空的Git仓库。           |
| git clone     | `git clone <repo>`          | 将`<repo>`中的仓库复制到自己的电脑上。                       |
| git config    | `git config user.name`      | 定义在当前仓库中所有提交的作者名，`system`、`global`、`local`来进行设定。 |
| git add       | `git add <directory>`       | 将中所有变更暂存到下一次提交中。也可以使用`add <files>`和`<.>`来进行操作。 |
| git commit -m | `git commit -m "<message>"` | 提交暂存的快照，使用来说明提交了什么。                       |
| git status    | `git status`                | 列出已暂存、未暂存和未追踪的文件。                           |
| git log       | `git log`                   | 使用默认格式显示所有的提交记录。                             |
| git diff      | `git diff`                  | 显示索引和工作目录中未暂存的更改。                           |

### Git的撤销更改

| 命令       | 例子                  | 描述                                                         |
| ---------- | --------------------- | ------------------------------------------------------------ |
| git revert | `git revert <commit>` | 新建一个提交，撤销中所有的变更，并应用在当前分支上。         |
| git reset  | `git reset <file>`    | 将从暂存中移除，但当前文件不会改变。这是将文件改为未暂存并不改变内容的方式。 |
| git clean  | `git clean -n`        | 显示哪些文件没有被暂存并将被删除。用`-f`可以强制执行删除清理。 |

### Git重写历史记录

| 命令       | 例子                 | 描述                                                         |
| ---------- | -------------------- | ------------------------------------------------------------ |
| git commit | `git commit --amend` | 用暂存的变更替换掉上次的提交，合并上次的提交。当没有暂存时，编辑上次提交的信息。 |
| git rebase | `git rebase <base>`  | 从当前分支嫁接到。可以是对应提交ID、分支名称、标签tag 或是对HEAD的相关引用。 |
| git reflog | `git reflog`         | 显示本地仓库HEAD的变更记录。添加 --relative-date 来显示日期时间信息，或 --all 来显示所有信息。 |

### Git的分支

| 命令         | 例子                       | 描述                                                       |
| ------------ | -------------------------- | ---------------------------------------------------------- |
| git branch   | `git branch`               | 显示仓库中所有的分支。添加参数来新建一个叫的分支。         |
| git checkout | `git checkout -b <branch>` | 新建并检查一个叫的新分支。去掉 -b 来检查一个已存在的分支。 |
| git merge    | `git merge <branch>`       | 将合并到当前分支中。                                       |

### Git的远程仓库

| 命令           | 例子                          | 描述                                                     |
| -------------- | ----------------------------- | -------------------------------------------------------- |
| git remote add | `git remote add <name> <url>` | 新建连接一个远程仓库。添加后，你可以使用作为的简写。     |
| git fetch      | `git fetch <remote> <branch>` | 从仓库中抓取特定的。没有特定时，抓取所有远程的索引。     |
| git pull       | `git pull <remote>`           | 抓取当前分支的特定的更新，并马上将它合并到本地文件夹中。 |
| git push       | `git push <remote> <branch>`  | 将当前分支中的提交推送到。若远程仓库中不存在，则新建。   |

### Git的差异比较

| 命令              | 例子                | 描述                                 |
| ----------------- | ------------------- | ------------------------------------ |
| git diff HEAD     | `git diff HEAD`     | 显示当前目录与上次提交不同的部分。   |
| git diff --cached | `git diff --cached` | 显示暂存的变更与上次提交不同的部分。 |

### Git的配置

| 命令                            | 例子                                                   | 描述                                                   |
| ------------------------------- | ------------------------------------------------------ | ------------------------------------------------------ |
| git config --global user.name   | `git config --global user.name <name>`                 | 设置当前用户每次提交时使用的作者名称。                 |
| git config --global user.email  | `git config --global user.email <email>`               | 设置当前用户每次提交时使用的作者邮箱。                 |
| git config --global alias       | `git config --global alias <alias-name> <git-command>` | 新建git命令的缩写。                                    |
| git config --system core.editor | `git config --system core.editor <editor>`             | 设置每个用户预设的文本编辑器。是打开对应编辑器的命令。 |
| git config --global --edit      | `git config --global --edit`                           | 用文本编辑器打开全局配置文件，并进行编辑。             |

### Git的嫁接(rebase)

| 命令          | 例子                   | 描述                                                         |
| ------------- | ---------------------- | ------------------------------------------------------------ |
| git rebase -i | `git rebase -i <base>` | 将当前分支嫁接到。打开编辑器来输入命令，每个提交将如何转移到新的分支上。 |

### Git Pull

| 命令              | 例子                         | 描述                                                         |
| ----------------- | ---------------------------- | ------------------------------------------------------------ |
| git pull --rebase | `git pull --rebase <remote>` | 将远程仓库的内容抓取到文件夹中。使用`--rebase`来避免合并分支。 |

### Git的重置

| 命令             | 例子                        | 描述                                                         |
| ---------------- | --------------------------- | ------------------------------------------------------------ |
| git reset        | `git reset`                 | 重置暂存的内容，但不改变当前文件夹。                         |
| git reset --hard | `git reset --hard`          | 重置暂存的内容和文件夹，匹配最近的提交，并改写所有变更。     |
| git reset        | `git reset <commit>`        | 重置当前分支到，重置暂存的内容，但不改变当前文件夹。         |
| git reset --hard | `git reset --hard <commit>` | 与上一条类似，但重置暂存内容和文件夹。删除未提交的变更和所有在之后的内容。 |

### Git Push

| 命令             | 例子                        | 描述                                                         |
| ---------------- | --------------------------- | ------------------------------------------------------------ |
| git push --force | `git push <remote> --force` | 强制进行推送。不要使用`--force`，除非你明确清楚自己在做什么。 |
| git push --all   | `git push <remote> --all`   | 推送当前分支的所有内容到特定远程仓库。                       |
| git push --tags  | `git push <remote> --tags`  | 当你推送一个分支或使用`--flag`时，Tags不会被自动推送。添加`--tags`后才推送所有tags到远程仓库。 |



参考：

[Git cheat sheet | Atlassian Git Tutorial](https://www.atlassian.com/git/tutorials/atlassian-git-cheatsheet)