---
title: Linux 计划任务 Crontab
date: 2024-01-11
tags:
 - Linux
categories:
  - tech

---







在Ubuntu 20.04中，可以使用`cron`来配置计划任务。以下是一个简单的例子，演示如何配置一个每天定时执行的任务。

1. **终端（Terminal）**。

2. **输入以下命令，编辑 cron 表**：

   ```bash
   bashCopy code
   crontab -e
   ```

   如果是第一次编辑，系统会询问您选择一个文本编辑器。您可以选择您喜欢的编辑器，比如 nano、vim等。

3. **在编辑器中，添加如下一行来表示每天执行的任务**：

   ```bash
   0 0 * * * /path/to/your/command
   ```
   
   这里的`0 0 * * *`表示每天的午夜（0点0分），`/path/to/your/command`是您要执行的命令或脚本的路径。
   
   请确保将`/path/to/your/command`替换为您实际要运行的命令或脚本的路径。
   
4. **保存并关闭编辑器**

这个例子表示，每天的午夜，系统会执行您指定的命令或脚本。您可以根据需要调整时间表和执行命令。



5. **验证计划任务是否添加成功**。使用以下命令查看当前用户的crontab：

   ```bash
   crontab -l
   ```

6. **确保cron服务正在运行**。运行以下命令来检查cron服务的状态：

   ```bash
   sudo systemctl status cron
   ```

   如果服务没有运行，你可以使用以下命令启动它：

   ```bash
   sudo systemctl start cron
   ```

   并且，如果你希望cron在系统启动时自动启动，可以使用：

   ```bash
   sudo systemctl enable cron
   ```

记住，cron作业将以crontab文件所属用户的身份运行，确保该用户具有执行指定脚本或命令的权限。此外，如果你的脚本依赖于特定的环境变量，你可能需要在crontab文件中或脚本本身中显式设置这些环境变量，因为cron作业通常不会加载用户的完整环境。



Ubuntu 计划任务不生效：[Ubuntu计划任务无法执行解决方法_ubuntu计划任务不生效-CSDN博客](https://blog.csdn.net/weixin_47608789/article/details/122762609)