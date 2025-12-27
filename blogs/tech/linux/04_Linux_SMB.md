---
title: Linux 挂载 SMB
date: 2024-02-16
tags:
 - Linux
categories:
  - tech
---



## 挂载 SMB 目录

要在Ubntu 20.04中挂载一个SMB（Server Message Block）共享目录，你需要使用`mount`命令，并且通常需要安装`smbclient`和`cifs-utils`包来支持SMB协议。以下是操作步骤：

1. **安装必要的包**：
   打开终端并输入以下命令来安装`smbclient`和`cifs-utils`：

   ```sh
   sudo apt update
   sudo apt install smbclient cifs-utils
   ```

2. **创建本地挂载点**：
   创建一个目录，用作远程SMB共享的挂载点。例如：

   ```sh
   sudo mkdir /mnt/smbshare
   ```

   你可以将`/mnt/smbshare`替换为你想要的任何目录路径。

3. **挂载SMB共享**：
   使用以下命令挂载SMB共享：

   ```sh
   sudo mount -t cifs //192.168.1.3/shared_folder /mnt/smbshare -o username=your_username,password=your_password
   ```

   将`//192.168.10.3/shared_folder`替换为SMB服务器的IP地址和共享名称，`/mnt/smbshare`替换为你创建的本地挂载点，`your_username`和`your_password`替换为访问SMB共享所需的用户名和密码。

   如果你不希望在命令中包含密码，你可以省略`password=your_password`部分，系统会提示你输入密码。

4. **自动挂载SMB共享**（可选）：
   如果你希望在每次启动时自动挂载SMB共享，可以编辑`/etc/fstab`文件来实现。

   首先，为了安全起见，最好创建一个凭据文件来存储用户名和密码：

   ```sh
   sudo nano /etc/smbcredentials
   ```

   在文件中添加以下内容：

   ```
   username=your_username
   password=your_password
   ```

   保存并关闭文件，然后更改文件权限：

   ```sh
   sudo chmod 600 /etc/smbcredentials
   ```

   接着，用文本编辑器打开`/etc/fstab`文件：

   ```sh
   sudo nano /etc/fstab
   ```

   在文件的末尾添加以下行：

   ```
   //192.168.1.3/shared_folder /mnt/smbshare cifs credentials=/etc/smbcredentials,iocharset=utf8 0 0
   ```

   再次保存并关闭文件，然后你可以通过运行以下命令来测试挂载：

   ```sh
   sudo mount -a
   ```

   如果没有错误，这意味着挂载成功，并且在下次启动时SMB共享将自动挂载。

请记住，如果SMB共享需要不同的权限或其他挂载选项，你可能需要根据你的具体情况调整上述命令中的`-o`选项。





## 开放 SMB 共享

在Ubuntu 20.04上设置SMB共享通常涉及安装和配置Samba服务。以下是设置SMB共享的基本步骤：

1. **安装Samba**：
   打开终端，并使用以下命令安装Samba：

   ```sh
   sudo apt update
   sudo apt install samba
   ```

2. **配置共享**：
   编辑Samba配置文件 `/etc/samba/smb.conf`，在文件的末尾添加你的共享配置。你可以使用 `nano` 或你喜欢的任何文本编辑器：

   ```sh
   sudo nano /etc/samba/smb.conf
   ```

   注意修改权限配置，否则连接时可能不会出现凭据输入窗口：

   > 约 100 行处
   
   ```ini
   # This option controls how unsuccessful authentication attempts are mapped
   # to anonymous connections
      security = user
      map to guest = never
   ```

   在文件的末尾添加类似于以下内容的配置：
   
   ```ini
   [ShareName]		# SMB 共享上显示的文件夹名
   path = /SMB_Share
   read only = no
   browsable = yes
   guest ok = no
   create mask = 0755
   ```
   
   - `ShareName` 是你想要在网络上显示的共享名称。
   - `path` 是你想要共享的目录的路径。
   - `read only = no` 允许用户写入共享。
   - `browsable = yes` 允许用户在网络上浏览此共享。
   - `guest ok = yes` 允许没有账户的用户访问共享。
   - `create mask` 设置新创建文件的权限。
   
   保存并关闭文件。
   
3. **创建共享目录**：
   如果还没有创建你想要共享的目录，使用以下命令创建它，并设置适当的权限：

   ```sh
   sudo mkdir -p /SMB_Share
   sudo chmod -R 0755 /SMB_Share
   sudo chown -R nobody:nogroup /SMB_Share
   ```

4. **添加Samba用户**（如果需要）：
   
4. 如果你不想允许匿名访问，你需要为每个用户创建一个Samba账户：
   
   > 创建前，请确认用户存在，若不存在，请创建：`sudo adduser viewuser`
   
   ```sh
   sudo smbpasswd -a username
   ```
   
   替换 `username` 为实际的系统用户名，并在提示时输入密码。然后，你需要在 `/etc/samba/smb.conf` 中的共享配置中将 `guest ok = yes` 改为 `no`。
   
5. **重启Samba服务**：
   重启Samba服务以应用更改：

   ```sh
   sudo systemctl restart smbd
   ```

6. **测试配置**：
   测试Samba配置是否没有错误：

   ```sh
   sudo testparm
   ```

7. **访问共享**：
   在本地网络中的其他设备上，你应该现在能够看到共享并访问它。在Windows上，你可以在文件资源管理器的地址栏输入 `\\your-ubuntu-ip\ShareName` 来访问共享。在Mac或Linux上，你可以在相应的网络位置查找共享。

请确保防火墙设置允许通过SMB协议的端口（通常是139和445）。如果你在Ubuntu上使用UFW防火墙，你可以允许Samba流量：

```sh
sudo ufw allow samba
```

现在你的Ubuntu 20.04系统应该能够通过SMB协议提供文件共享服务。













