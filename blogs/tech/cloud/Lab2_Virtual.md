---
title: Lab-虚拟化
date: 2022-04-30
tags:
  - Cloud
categories:
  - tech
---





# 虚拟化实验

## **QEMU-KVM虚拟机镜像制作**

- 关闭防火墙和selinux

```shell
[root@cMaster perry]# systemctl stop firewalld
[root@cMaster perry]# setenforce 0
```

- 安装kvm并重启系统

```shell
## 1.安装kvm
yum install -y qemu-kvm libvirt virt-install bridge-utils
## 2.重启系统
init 6
```

- 验证kvm安装情况

```
[root@cMaster perry]# virsh -c qemu:///system list
 Id    Name                           State
----------------------------------------------------

```

- 加载并检测kvm模块是否工作正常

```shell
## 加载kvm模块
modprobe kvm

## 检查模块是否加载成功，执行如下命令
lsmod |grep kvm
```

- 启动kvm服务

```shell
## 1.启动libvirtd守护进程
systemctl start libvirtd
## 2.查看是否启动成功 下方显示“Active: active (running)”，则表示启动成功。
systemctl status libvirtd
● libvirtd.service - Virtualization daemon
   Loaded: loaded (/usr/lib/systemd/system/libvirtd.service; enabled; vendor preset: enabled)
   Active: active (running) since Sun 2022-04-17 18:22:21 PDT; 2min 28s ago
     Docs: man:libvirtd(8)
           https://libvirt.org
 Main PID: 1014 (libvirtd)
    Tasks: 19 (limit: 32768)
   CGroup: /system.slice/libvirtd.service
           ├─1014 /usr/sbin/libvirtd
           ├─1343 /usr/sbin/dnsmasq --conf-file=/var/lib/libvirt/dnsmasq/defa...
           └─1346 /usr/sbin/dnsmasq --conf-file=/var/lib/libvirt/dnsmasq/defa...

Apr 17 18:22:23 cMaster dnsmasq[1330]: listening on virbr0(#3): 192.168.122.1
Apr 17 18:22:23 cMaster dnsmasq[1343]: started, version 2.76 cachesize 150
Apr 17 18:22:23 cMaster dnsmasq[1343]: compile time options: IPv6 GNU-getop...fy
Apr 17 18:22:23 cMaster dnsmasq-dhcp[1343]: DHCP, IP range 192.168.122.2 -- ...h
Apr 17 18:22:23 cMaster dnsmasq-dhcp[1343]: DHCP, sockets bound exclusively ...0
Apr 17 18:22:23 cMaster dnsmasq[1343]: reading /etc/resolv.conf
Apr 17 18:22:23 cMaster dnsmasq[1343]: using nameserver 192.168.208.2#53
Apr 17 18:22:23 cMaster dnsmasq[1343]: read /etc/hosts - 5 addresses
Apr 17 18:22:23 cMaster dnsmasq[1343]: read /var/lib/libvirt/dnsmasq/defaul...es
Apr 17 18:22:23 cMaster dnsmasq-dhcp[1343]: read /var/lib/libvirt/dnsmasq/de...e
Hint: Some lines were ellipsized, use -l to show in full.

```

- 系统安装过程：略



- 检查KVM状态

```shell
virsh list
```

![CentOS 7 64 位-2022-04-18-15-55-49](./Lab2_Virtual.assets/CentOS 7 64 位-2022-04-18-15-55-49.png)



- 配置SSH

```shell
# 检查是否安装了ssh服务
apt-cache policy openssh-client openssh-server

# 安装openssh
apt-get install openssh-server

# 检查运行状态
ps -e|grep ssh

# 启用ssh服务
sudo /etc/init.d/ssh start
```

检查状态

![image-20220418161539793](./Lab2_Virtual.assets/image-20220418161539793.png)







- ~~配置KVM中的Linux（此处为Ubuntu 18.04）~~

```shell
[root@cMaster perry]# sudo apt update
[root@cMaster perry]# sudo apt upgrade

# 安装Xfce桌面环境
sudo apt install xfce4 xfce4-goodies

# 安装TightVNC服务器
sudo apt install tightvncserver

# 设置安全密码并创建初始配置文件
vncserver
```



## 以上 · 可能会遇到的问题

![CentOS 7 64 位-2022-04-18-09-06-58](./Lab2_Virtual.assets/CentOS 7 64 位-2022-04-18-09-06-58.png)

- 解决方案：检查网络连接状态，代理服务器状态。



- 磁盘空间不足

添加新磁盘并分区

![image-20220418093124655](./Lab2_Virtual.assets/image-20220418093124655.png)

![image-20220418093455651](./Lab2_Virtual.assets/image-20220418093455651.png)

分区后 添加到KVM存储池中

![image-20220418102726145](./Lab2_Virtual.assets/image-20220418102726145.png)

创建虚拟机时选择刚才创建的虚拟磁盘

![image-20220418102902925](./Lab2_Virtual.assets/image-20220418102902925.png)



- 权限不足问题：

![image-20220418103058304](./Lab2_Virtual.assets/image-20220418103058304.png)

```shell
[root@cMaster perry]# vim /etc/libvirt/qemu.conf
```

去除以下两行含"root"字样的注释

![image-20220418103233851](./Lab2_Virtual.assets/image-20220418103233851.png)



- 可能会使用到的SSH命令：

```shell
## 检查安装状态
rpm -qa |grep ssh 

## 启动SSH服务
service sshd start 
```

```shell
# 安装ssh-client命令：
sudo apt-get install openssh-client
# 安装ssh-server命令：
sudo apt-get install openssh-server
```





- virsh list -all 为空问题

![CentOS 7 64 位-2022-04-18-15-44-25](./Lab2_Virtual.assets/CentOS 7 64 位-2022-04-18-15-44-25.png)

解决方案：su ！！！

![image-20220418155552669](./Lab2_Virtual.assets/image-20220418155552669.png)



## VMware vSphere ESXi安装及网络设置

- 配置虚拟存储池

![image-20220420110607129](./Lab2_Virtual.assets/image-20220420110607129.png)

- 虚拟机安装

过程过于简单，直接从WorkStation中导出OVF，ESXi中导入即可。



- 配置网络虚拟化

在虚拟交换机中添加，并做端口聚合

![image-20220420111403887](./Lab2_Virtual.assets/image-20220420111403887.png)



创建并配置VLAN

![image-20220420111455637](./Lab2_Virtual.assets/image-20220420111455637.png)



![image-20220420111253797](./Lab2_Virtual.assets/image-20220420111253797.png)



- 配置服务器虚拟化

编辑ESXi内虚拟机选项，配置网卡

![image-20220420111723582](./Lab2_Virtual.assets/image-20220420111723582.png)



虚拟机运行截图

![image-20220420112132984](./Lab2_Virtual.assets/image-20220420112132984.png)











