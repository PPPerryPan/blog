---
title: Linux 计划任务 Crontab 使用 Python 虚拟环境
date: 2024-01-11
tags:
 - Linux
categories:
  - tech

---





在Linux上，如果你想通过计划任务（如 `cron`）来执行一个脚本，并且希望在虚拟环境中执行，你需要在 `cron` 任务中指定虚拟环境的激活过程。

以下是一个步骤示例，展示如何设置一个 `cron` 任务来在虚拟环境中运行你的脚本：

1. **编辑Cron任务**

   打开终端并输入 `crontab -e` 命令来编辑你的 `cron` 任务。

2. **添加Cron任务**

   在 `cron` 文件中添加一行，指定任务的执行时间以及要运行的命令。假设你的虚拟环境位于 `/home/perry/Python_Script/venv`，你的脚本位于 `/home/perry/Python_Script/Request_Performance_Data.py`，你可以添加如下行：

   ```bash
   * * * * * /home/perry/Python_Script/venv/bin/python /home/perry/Python_Script/Request_Performance_Data.py >> /home/perry/Python_Script/Request_Performance_Data.log 2>&1
   ```

   这个例子中，`* * * * *` 代表这个任务会每分钟执行一次。`>> /home/perry/Python_Script/cron.log 2>&1` 部分会将标准输出和标准错误重定向到 `cron.log` 文件中。

   注意：确保使用了虚拟环境中的 `python` 解释器来执行脚本。虚拟环境的 `python` 解释器一般位于 `venv/bin/python`。

3. **保存并退出Cron编辑器**

   保存你的更改并退出编辑器。在 `vi` 或 `vim` 中，你可以按下 `Esc` 键，输入 `:wq`，然后按下 `Enter` 键。如果使用的是 `nano`，则可以按下 `Ctrl + X`，然后按 `Y` 并按下 `Enter` 键。

4. **检查Cron任务**

   你可以通过 `crontab -l` 命令来列出所有的 `cron` 任务，以确保你的任务已经被正确添加。

请注意，确保你的虚拟环境和脚本的路径正确无误，且你的脚本有执行权限（使用 `chmod +x Request_Performance_Data.py` 命令来添加执行权限）。此外，如果 `cron` 环境中缺少某些环境变量，可能会导致脚本执行不正确。必要时，你可以在 `cron` 任务中设置所需的环境变量。