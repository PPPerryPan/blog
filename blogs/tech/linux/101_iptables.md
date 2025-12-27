---
title: iptables 快查
date: 2024-01-11
tags:
 - Linux
categories:
  - tech
---





## iptables 参数快查表

```bash
root@Perry-alis:~# iptables -h
iptables v1.8.4

Usage: iptables -[ACD] chain rule-specification [options]
       iptables -I chain [rulenum] rule-specification [options]
       iptables -R chain rulenum rule-specification [options]
       iptables -D chain rulenum [options]
       iptables -[LS] [chain [rulenum]] [options]
       iptables -[FZ] [chain] [options]
       iptables -[NX] chain
       iptables -E old-chain-name new-chain-name
       iptables -P chain target [options]
       iptables -h (print this help information)

Commands:
Either long or short options are allowed.
  --append  -A chain		Append to chain
  --check   -C chain		Check for the existence of a rule
  --delete  -D chain		Delete matching rule from chain
  --delete  -D chain rulenum
				Delete rule rulenum (1 = first) from chain
  --insert  -I chain [rulenum]
				Insert in chain as rulenum (default 1=first)
  --replace -R chain rulenum
				Replace rule rulenum (1 = first) in chain
  --list    -L [chain [rulenum]]
				List the rules in a chain or all chains
  --list-rules -S [chain [rulenum]]
				Print the rules in a chain or all chains
  --flush   -F [chain]		Delete all rules in  chain or all chains
  --zero    -Z [chain [rulenum]]
				Zero counters in chain or all chains
  --new     -N chain		Create a new user-defined chain
  --delete-chain
            -X [chain]		Delete a user-defined chain
  --policy  -P chain target
				Change policy on chain to target
  --rename-chain
            -E old-chain new-chain
				Change chain name, (moving any references)
Options:
    --ipv4	-4		Nothing (line is ignored by ip6tables-restore)
    --ipv6	-6		Error (line is ignored by iptables-restore)
[!] --protocol	-p proto	protocol: by number or name, eg. `tcp'
[!] --source	-s address[/mask][...]
				source specification
[!] --destination -d address[/mask][...]
				destination specification
[!] --in-interface -i input name[+]
				network interface name ([+] for wildcard)
 --jump	-j target
				target for rule (may load target extension)
  --goto      -g chain
                              jump to chain with no return
  --match	-m match
				extended match (may load extension)
  --numeric	-n		numeric output of addresses and ports
[!] --out-interface -o output name[+]
				network interface name ([+] for wildcard)
  --table	-t table	table to manipulate (default: `filter')
  --verbose	-v		verbose mode
  --wait	-w [seconds]	maximum wait to acquire xtables lock before give up
  --wait-interval -W [usecs]	wait time to try to acquire xtables lock
				default is 1 second
  --line-numbers		print line numbers when listing
  --exact	-x		expand numbers (display exact values)
[!] --fragment	-f		match second or further fragments only
  --modprobe=<command>		try to insert modules using this command
  --set-counters PKTS BYTES	set the counter during insert/append
[!] --version	-V		print package version.

```

| 命令选项/参数          | 完整参数                           | 描述                          |
| :--------------------- | :--------------------------------- | :---------------------------- |
| -A chain               | --append chain                     | 向指定链中添加一条规则        |
| -C chain               | --check chain                      | 检查是否存在匹配的规则        |
| -D chain               | --delete chain                     | 从指定链中删除所有匹配的规则  |
| -D chain rulenum       | --delete chain rulenum             | 从指定链中删除指定编号的规则  |
| -I chain [rulenum]     | --insert chain [rulenum]           | 在指定链中插入一条规则        |
| -R chain rulenum       | --replace chain rulenum            | 替换指定链中指定编号的规则    |
| -L [chain [rulenum]]   | --list [chain [rulenum]]           | 列出指定链中的所有规则        |
| -S [chain [rulenum]]   | --list-rules [chain [rulenum]]     | 打印指定链中的所有规则        |
| -F [chain]             | --flush [chain]                    | 删除指定链中的所有规则        |
| -Z [chain [rulenum]]   | --zero [chain [rulenum]]           | 将指定链中的所有计数器清零    |
| -N chain               | --new chain                        | 创建一个新的自定义链          |
| -X [chain]             | --delete-chain [chain]             | 删除一个自定义链              |
| -P chain target        | --policy chain target              | 修改指定链的默认策略          |
| -E old-chain new-chain | --rename-chain old-chain new-chain | 修改自定义链的名称            |
| -p proto               | --protocol proto                   | 指定匹配的协议                |
| -s address[/mask][...] | --source address[/mask][...]       | 指定匹配的源地址              |
| -d address[/mask][...] | --destination address[/mask][...]  | 指定匹配的目标地址            |
| -i input name[+]       | --in-interface input name[+]       | 指定匹配的输入接口            |
| -j target              | --jump target                      | 指定规则的动作目标            |
| -g chain               | --goto chain                       | 跳转到指定链中的某个规则      |
| -m match               | --match match                      | 指定要使用的扩展模块          |
| -n                     | --numeric                          | 以数值形式输出地址和端口      |
| -o output name[+]      | --out-interface output name[+]     | 指定匹配的输出接口            |
| -t table               | --table table                      | 指定要操作的表                |
| -v                     | --verbose                          | 输出详细信息                  |
| -w [seconds]           | --wait [seconds]                   | 等待获取 xtables 锁的最长时间 |
| -W [usecs]             | --wait-interval [usecs]            | 尝试获取 xtables 锁的时间间隔 |
| -x                     | --exact                            | 扩展数字（显示确切值）        |
| -f                     | --fragment                         | 仅匹配第二个或更多个分片      |
| -V                     | --version                          | 打印软件版本号                |
| -h                     |                                    | 打印帮助信息                  |



## Filter 表

查看表

> -n: 以数值形式展示信息，否则 0.0.0.0/0 将被展示成 anywhere

```bash
root@Perry-alis:~# iptables -t filter -L -n
Chain INPUT (policy ACCEPT)
target     prot opt source               destination         

Chain FORWARD (policy DROP)
target     prot opt source               destination         
DOCKER-USER  all  --  0.0.0.0/0            0.0.0.0/0           
DOCKER-ISOLATION-STAGE-1  all  --  0.0.0.0/0            0.0.0.0/0           
ACCEPT     all  --  0.0.0.0/0            0.0.0.0/0            ctstate RELATED,ESTABLISHED
DOCKER     all  --  0.0.0.0/0            0.0.0.0/0           
ACCEPT     all  --  0.0.0.0/0            0.0.0.0/0           
ACCEPT     all  --  0.0.0.0/0            0.0.0.0/0           
ACCEPT     all  --  0.0.0.0/0            0.0.0.0/0            ctstate RELATED,ESTABLISHED
DOCKER     all  --  0.0.0.0/0            0.0.0.0/0           
ACCEPT     all  --  0.0.0.0/0            0.0.0.0/0           
ACCEPT     all  --  0.0.0.0/0            0.0.0.0/0           

Chain OUTPUT (policy ACCEPT)
target     prot opt source               destination         

Chain DOCKER (2 references)
target     prot opt source               destination         

Chain DOCKER-ISOLATION-STAGE-1 (1 references)
target     prot opt source               destination         
DOCKER-ISOLATION-STAGE-2  all  --  0.0.0.0/0            0.0.0.0/0           
DOCKER-ISOLATION-STAGE-2  all  --  0.0.0.0/0            0.0.0.0/0           
RETURN     all  --  0.0.0.0/0            0.0.0.0/0           

Chain DOCKER-ISOLATION-STAGE-2 (2 references)
target     prot opt source               destination         
DROP       all  --  0.0.0.0/0            0.0.0.0/0           
DROP       all  --  0.0.0.0/0            0.0.0.0/0           
RETURN     all  --  0.0.0.0/0            0.0.0.0/0           

Chain DOCKER-USER (1 references)
target     prot opt source               destination         
RETURN     all  --  0.0.0.0/0            0.0.0.0/0      
```



```bash
iptables -t filter -A INPUT -j DROP -p tcp -dport 80
iptables -t filter -D INPUT 1	# 删除 filter 中的第一条数据
iptables -t filter -A OUTPUT -j DROP -p tcp -d 192.168.x.x
#iptabnles -t filter
#	-t 链(INPUT/OUTPUT/FORWARD)	
#	-A 添加
#	-I 添加到第一条
#	-D 删除
#	-j 处理方式
#	-s 源IP地址
#	-d 目标IP地址
#	-dport 端口
```







