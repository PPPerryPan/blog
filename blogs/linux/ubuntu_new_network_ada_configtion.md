---
title: Ubuntu 22.04+ 新增网卡配置
date: 2025-02-10
tags:
 - DNS
categories:
 - 网络
---

# Ubuntu 22.04+ 新增网卡配置

Ubuntu  2204 LTS 开始，新增了 `cloud-init` 的配置，

如果不手动配置 `network: {config: disabled}`，每次重启电脑，网卡配置都会被重置，新添加的网卡不会自动 up 起来。

> 也是奇了怪， 都 2025 年了， Ubuntu 2204 的网卡配置在中文互联网上还是一条正确的网卡配置教程都没有。。。
>
> 各界 AI 也是一派胡言，没有一个能答对的。



1. 查看网卡名称

```
sudo ip a
```



2. 配置文件目录

```
cd /etc/netplan/
```

```bash
# 操作示例
root@u2204:/home/perry# cd /etc/netplan/
root@u2204:/etc/netplan# ls
50-cloud-init.yaml
root@u2204:/etc/netplan# cat 50-cloud-init.yaml 
```



3. 查看 yaml

> 看英语，写着会自动重置

```bash
# This file is generated from information provided by the datasource.  Changes
# to it will not persist across an instance reboot.  To disable cloud-init's
# network configuration capabilities, write a file
# /etc/cloud/cloud.cfg.d/99-disable-network-config.cfg with the following:
# network: {config: disabled}
network:
    ethernets:
        ens33:
            addresses:
            - 192.168.123.253/24
            nameservers:
                addresses:
                - 192.168.123.254
                search:
                - 223.5.5.5
            routes:
            -   to: default
                via: 192.168.123.254
    version: 2

```



4. 按照指引，禁用 cloud-init 网络配置：

```
sudo vim /etc/cloud/cloud.cfg.d/99-disable-network-config.cfg
```

添加内容：

```bash
network: {config: disabled}
```



5. 重新配置网络

```
sudo vim /etc/netplan/50-cloud-init.yaml
```

```sh
network:
    ethernets:
        ens33:
            addresses:
            - 192.168.123.253/24
            nameservers:
                addresses:
                - 192.168.123.254
                search:
                - 223.5.5.5
            routes:
            -   to: default
                via: 192.168.123.254
                table: 100
        ens38:
            addresses:
            - 192.168.234.253/24
            nameservers:
              addresses:
              - 192.168.234.254
              search:
              - 223.5.5.5
            routes:
            -   to: default
                via: 192.168.234.254
                table: 200
    version: 2
```



6. 应用

```sh
sudo netplan apply
```



7. 如果不确定网卡有没有启动，可直接启动一次

```sh
sudo ip link set <网卡名称> up
```



8. 【可选】为确保网卡在开机时自动启用和配置，可以检查 `netplan` 配置文件和启用 `systemd-networkd` 服务：

```sh
sudo systemctl enable systemd-networkd
sudo systemctl start systemd-networkd
```



9. 查看 IP 和 重启系统 再次查看 IP，

> 重启电脑的时候网络配置不会被自动重制了。

