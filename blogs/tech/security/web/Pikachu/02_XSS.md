---
title: PiKachu - XSS
date: 2022-09-27
tags:
  - Web
  - security
categories:
  - tech
---



# XSS

## 反射型xss(get)

### 分析

先随便输入试试 `<script>alert("123")</script>`

发现输不完，前端限制了输入长度

![image-20220927170016317](02_XSS.assets/image-20220927170016317.png)



### 利用

maxlength 改大点即可

![image-20220927170333892](02_XSS.assets/image-20220927170333892.png)



当然，也可以直接改URL，Messenger字段改成 `<script>alert("123")</script>` 即可（如上图）

![image-20220927170420328](02_XSS.assets/image-20220927170420328.png)



## 反射性xss(post)

### 分析

开始还以为漏洞就在登录框里，看了下提示，好吧原来是要先登录进去

![image-20220927171017800](02_XSS.assets/image-20220927171017800.png)



### 利用

根据提示，要求 XSS 获取 Cookie，那就： `<script>alert( "Cookie:\n" + document.cookie)</script>`

![image-20220927171258367](02_XSS.assets/image-20220927171258367.png)



## 存储型xss

### 分析

一样的道理，不过存储型 XSS 的危害相对更大，每次页面加载或刷新都会被执行，且其他用户访问也会。



### 利用

 `<script>alert( "Cookie:\n" + document.cookie)</script>`

![image-20220927171700417](02_XSS.assets/image-20220927171700417.png)



## DOM型xss

### 分析

先弹个123试试 `<script>alert("123")</script>`，不行：

![image-20220927171920200](02_XSS.assets/image-20220927171920200.png)



查看源代码，发现a标签拼接。

![image-20220927172029169](02_XSS.assets/image-20220927172029169.png)



### 利用

把a标签闭合掉即可，同时可以利用 img 标签进行XSS 

```html
' onclick="alert('123')">
```

```
// a href='"+str+"'
// a href='' onclick="alert('123')">'
```

提交后点击 what do you see，成功alert

![image-20220927184241081](02_XSS.assets/image-20220927184241081.png)



## DOM型xss-x

### 利用

与上面同理

```html
' onclick="alert('123')">
```

![image-20220927184725453](02_XSS.assets/image-20220927184725453.png)



## xss盲打

### 分析



先随便提交点东西，发现没什么变化

![image-20220927185439103](02_XSS.assets/image-20220927185439103.png)



看一下源代码，发现提交方式是post

![image-20220927185155986](02_XSS.assets/image-20220927185155986.png)



按照提示登陆后台

![image-20220927185300666](02_XSS.assets/image-20220927185300666.png)



发现刚才提交的数据

![image-20220927185417986](02_XSS.assets/image-20220927185417986.png)



### 利用

回去试一下 `<script>alert("123")</script>`

![image-20220927185538470](02_XSS.assets/image-20220927185538470.png)



然后登陆后台

![image-20220927185605206](02_XSS.assets/image-20220927185605206.png)



两个 XSS 都正常执行

![image-20220927185629341](02_XSS.assets/image-20220927185629341.png)



## xss之过滤

### 分析

先随便提交点数据看看

![image-20220927185735383](02_XSS.assets/image-20220927185735383.png)



猜测一下会被过滤的内容：" < > ' on / ` () script img src href 



直接整段提交：

![image-20220927190636632](02_XSS.assets/image-20220927190636632.png)



感觉可以用 img οnerrοr



### 利用

构造Payload：

```html
<img src="#" onerror=alert(123)>
```

![image-20220927191915582](02_XSS.assets/image-20220927191915582.png)



## xss之htmlspecialchars

### 分析

htmlspecialchars() 函数把一些预定义的字符转换为HTML 实体。

```
被转换的预定义的字符有：
&：转换为&amp;
"：转换为&quot;
'：转换为成为 '
<：转换为&lt;
>：转换为&gt;
```

单引号没有被转换



### 利用

```
#' onclick='alert(123)
```

![image-20220927192603451](02_XSS.assets/image-20220927192603451.png)

![image-20220927192508213](02_XSS.assets/image-20220927192508213.png)



## xss之href输出

### 分析

随便输个alert，点也不生效

![image-20220927192839669](02_XSS.assets/image-20220927192839669.png)



看一下源码，都被HTML编码了

![image-20220927192916024](02_XSS.assets/image-20220927192916024.png)



看一下提示，查一下a标签的href属性：

> ## [定义和用法](https://www.w3school.com.cn/tags/att_a_href.asp)
>
> \<a\> 标签的 href 属性用于指定超链接目标的 URL。
>
> href 属性的值可以是任何有效文档的相对或绝对 URL，包括片段标识符和 JavaScript 代码段。如果用户选择了 \<a\> 标签中的内容，那么浏览器会尝试检索并显示 href 属性指定的 URL 所表示的文档，或者执行 JavaScript 表达式、方法和函数的列表



注意最后一句 “或者执行JS表达式......”



### 利用

```js
javascript:alert("123")
```

![image-20220927193331347](02_XSS.assets/image-20220927193331347.png)



## xss之js输出

### 分析

先试试上面的 `javascript:alert("123")`，无效，看源代码，被包进变量里了

![image-20220927194116269](02_XSS.assets/image-20220927194116269.png)

可以直接闭合掉来利用



### 利用

```js
闭合你'; alert(123); // 注释你
```

组合后就只剩下中间的 alert 了：

```js
$ms='闭合你'; alert(123); // 注释你';
```

![image-20220927193808755](02_XSS.assets/image-20220927193808755.png)





