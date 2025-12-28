import{_ as s,c as a,b as e,o as i}from"./app-CUDFWA7u.js";const l="/blog/assets/13.1-D5waF-9h.png",p="/blog/assets/13.2-BPqfv5a2.png",c={};function t(d,n){return i(),a("div",null,n[0]||(n[0]=[e('<h1 id="标准ip控制列表配置" tabindex="-1"><a class="header-anchor" href="#标准ip控制列表配置"><span>标准IP控制列表配置</span></a></h1><h2 id="例" tabindex="-1"><a class="header-anchor" href="#例"><span>例</span></a></h2><ul><li><p>目标</p><ul><li>理解标准IP访问控制列表的原理及功能；</li><li>掌握编号的标准IP访问控制列表的配置方法；</li></ul></li><li><p>背景</p><ul><li>你是公司的网络管理员，公司的经理部、财务部门和销售部分别属于不同的3个网段，三部门之间用路由器进行信息传递，为了安全起见，公司领导要求销售部门不能对财务部进行访问，但经理部可以对财务部进行访问。</li><li>PC1代表经理部的主机、PC2代表销售部的主机、PC3代表财务部的主机。</li></ul></li><li><p>原理</p><ul><li>ACLS的全称为接入控制列表（Access Control Lists），也称为访问列表（Access Lists），俗称为防火墙，在有的文档中还称之为包过滤。</li><li>ACLs通过定义一些规则对网络设备接口上的数据报文进行控制：允许通过或丢弃，从而提高网络可管理性和安全性；IP ACL分为两种：标准IP访问列表和扩展IP访问列表，编号范围分别为1~99、1300~1999，100~199、2000~2699；</li><li><strong>标准</strong> IP访问列表可以根据数据包的源IP地址定义规则，进行数据包的过滤；</li><li><strong>扩展/高级</strong> IP访问列表可以根据数据包的源IP、目的IP、源端口、目的端口、协议来定义规则，进行数据包的过滤；</li><li>IP ACL基于接口进行规则的应用，分为：入栈应用和出栈应用；</li></ul></li><li><p>步骤</p><p>​ <img src="'+l+'" alt="13.1"></p><ul><li>新建packet tracer拓扑图（如图）</li><li>路由器之间通过V.35电缆通过串口连接，DCE端连接在R1上，配置其时钟频率64000；主机与路由器通过交叉线连接。</li><li>配置路由器接口IP地址。</li><li>在路由器上配置静态路由协议，让三台pc能相互ping通，因为只有在互通的前提下才能涉及到访问控制列表。</li><li>在R1上配置编号的IP标准访问控制</li><li>将标准IP访问列表应用到接口</li><li>验证主机之间的互通性</li></ul></li></ul><h2 id="拓扑与主机ip配置" tabindex="-1"><a class="header-anchor" href="#拓扑与主机ip配置"><span>拓扑与主机IP配置</span></a></h2><p><img src="'+p+`" alt="13.2"></p><ul><li>PC0 ~ R0 1.0 网段</li><li>PC1 ~ R0 2.0 网段</li><li>R0 ~ R1 3.0网段</li><li>PC2 ~ R1 4.0网段</li></ul><h2 id="r-s-ip-clock-配置" tabindex="-1"><a class="header-anchor" href="#r-s-ip-clock-配置"><span>R/S IP(/Clock) 配置</span></a></h2><ul><li><p>R0</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">Router<span class="token operator">&gt;</span>en</span>
<span class="line">Router<span class="token comment">#conf t</span></span>
<span class="line">Enter configuration commands, one per line.  End with CNTL/Z.</span>
<span class="line">Router<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#host R0</span></span>
<span class="line">R0<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#int fa 0/0</span></span>
<span class="line">R0<span class="token punctuation">(</span>config-if<span class="token punctuation">)</span><span class="token comment">#ip add 172.16.1.1 255.255.255.0</span></span>
<span class="line">R0<span class="token punctuation">(</span>config-if<span class="token punctuation">)</span><span class="token comment">#no shut</span></span>
<span class="line"></span>
<span class="line">R0<span class="token punctuation">(</span>config-if<span class="token punctuation">)</span><span class="token comment">#</span></span>
<span class="line">%LINK-5-CHANGED: Interface FastEthernet0/0, changed state to up</span>
<span class="line"></span>
<span class="line">%LINEPROTO-5-UPDOWN: Line protocol on Interface FastEthernet0/0, changed state to up</span>
<span class="line"></span>
<span class="line">R0<span class="token punctuation">(</span>config-if<span class="token punctuation">)</span><span class="token comment">#int fa 1/0</span></span>
<span class="line">R0<span class="token punctuation">(</span>config-if<span class="token punctuation">)</span><span class="token comment">#ip add 172.16.2.1 255.255.255.0</span></span>
<span class="line">R0<span class="token punctuation">(</span>config-if<span class="token punctuation">)</span><span class="token comment">#no shut</span></span>
<span class="line"></span>
<span class="line">R0<span class="token punctuation">(</span>config-if<span class="token punctuation">)</span><span class="token comment">#</span></span>
<span class="line">%LINK-5-CHANGED: Interface FastEthernet1/0, changed state to up</span>
<span class="line"></span>
<span class="line">%LINEPROTO-5-UPDOWN: Line protocol on Interface FastEthernet1/0, changed state to up</span>
<span class="line"></span>
<span class="line">R0<span class="token punctuation">(</span>config-if<span class="token punctuation">)</span><span class="token comment">#int s 2/0</span></span>
<span class="line">R0<span class="token punctuation">(</span>config-if<span class="token punctuation">)</span><span class="token comment">#ip add 172.16.3.1 255.255.255.0</span></span>
<span class="line">R0<span class="token punctuation">(</span>config-if<span class="token punctuation">)</span><span class="token comment">#no shut</span></span>
<span class="line"></span>
<span class="line">%LINK-5-CHANGED: Interface Serial2/0, changed state to down</span>
<span class="line">R0<span class="token punctuation">(</span>config-if<span class="token punctuation">)</span><span class="token comment">#clock rate 64000</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>R1</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">Router<span class="token operator">&gt;</span>en</span>
<span class="line">Router<span class="token comment">#conf t</span></span>
<span class="line">Enter configuration commands, one per line.  End with CNTL/Z.</span>
<span class="line">Router<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#host R1</span></span>
<span class="line">R1<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#int s 2/0	</span></span>
<span class="line">R1<span class="token punctuation">(</span>config-if<span class="token punctuation">)</span><span class="token comment">#ip add 172.16.3.2 255.255.255.0</span></span>
<span class="line">R1<span class="token punctuation">(</span>config-if<span class="token punctuation">)</span><span class="token comment">#no shut</span></span>
<span class="line"></span>
<span class="line">R1<span class="token punctuation">(</span>config-if<span class="token punctuation">)</span><span class="token comment">#</span></span>
<span class="line">%LINK-5-CHANGED: Interface Serial2/0, changed state to up</span>
<span class="line"></span>
<span class="line">%LINEPROTO-5-UPDOWN: Line protocol on Interface Serial2/0, changed state to up</span>
<span class="line"></span>
<span class="line">R1<span class="token punctuation">(</span>config-if<span class="token punctuation">)</span><span class="token comment">#int fa 0/0</span></span>
<span class="line">R1<span class="token punctuation">(</span>config-if<span class="token punctuation">)</span><span class="token comment">#ip add 172.16.4.1 255.255.255.0</span></span>
<span class="line">R1<span class="token punctuation">(</span>config-if<span class="token punctuation">)</span><span class="token comment">#no shut</span></span>
<span class="line"></span>
<span class="line">R1<span class="token punctuation">(</span>config-if<span class="token punctuation">)</span><span class="token comment">#</span></span>
<span class="line">%LINK-5-CHANGED: Interface FastEthernet0/0, changed state to up</span>
<span class="line"></span>
<span class="line">%LINEPROTO-5-UPDOWN: Line protocol on Interface FastEthernet0/0, changed state to up</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="配置静态路由" tabindex="-1"><a class="header-anchor" href="#配置静态路由"><span>配置静态路由</span></a></h2><ul><li><p>R0</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">R0<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#ip route 172.16.4.0 255.255.255.0 172.16.3.2</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>R1 可做缺省路由</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">R1<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#ip route 0.0.0.0 0.0.0.0 172.16.3.1</span></span>
<span class="line">R1<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#end</span></span>
<span class="line">R1<span class="token comment">#</span></span>
<span class="line">%SYS-5-CONFIG_I: Configured from console by console</span>
<span class="line"></span>
<span class="line">R1<span class="token comment">#show ip rou</span></span>
<span class="line">Codes: C - connected, S - static, I - IGRP, R - RIP, M - mobile, B - BGP</span>
<span class="line">       D - EIGRP, EX - EIGRP external, O - OSPF, IA - OSPF inter area</span>
<span class="line">       N1 - OSPF NSSA external <span class="token builtin class-name">type</span> <span class="token number">1</span>, N2 - OSPF NSSA external <span class="token builtin class-name">type</span> <span class="token number">2</span></span>
<span class="line">       E1 - OSPF external <span class="token builtin class-name">type</span> <span class="token number">1</span>, E2 - OSPF external <span class="token builtin class-name">type</span> <span class="token number">2</span>, E - EGP</span>
<span class="line">       i - IS-IS, L1 - IS-IS level-1, L2 - IS-IS level-2, ia - IS-IS inter area</span>
<span class="line">       * - candidate default, U - per-user static route, o - ODR</span>
<span class="line">       P - periodic downloaded static route</span>
<span class="line"></span>
<span class="line">Gateway of last resort is <span class="token number">172.16</span>.3.1 to network <span class="token number">0.0</span>.0.0</span>
<span class="line"></span>
<span class="line">     <span class="token number">172.16</span>.0.0/24 is subnetted, <span class="token number">2</span> subnets</span>
<span class="line">C       <span class="token number">172.16</span>.3.0 is directly connected, Serial2/0</span>
<span class="line">C       <span class="token number">172.16</span>.4.0 is directly connected, FastEthernet0/0</span>
<span class="line">S*   <span class="token number">0.0</span>.0.0/0 <span class="token punctuation">[</span><span class="token number">1</span>/0<span class="token punctuation">]</span> via <span class="token number">172.16</span>.3.1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="测试连通性" tabindex="-1"><a class="header-anchor" href="#测试连通性"><span>测试连通性</span></a></h2><ul><li><p>PC0 ~ PC4</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">C:\\&gt;ipconfig</span>
<span class="line"></span>
<span class="line">FastEthernet0 Connection:(default port)</span>
<span class="line"></span>
<span class="line">   Connection-specific DNS Suffix..: </span>
<span class="line">   Link-local IPv6 Address.........: FE80::206:2AFF:FEEB:9BE6</span>
<span class="line">   IPv6 Address....................: ::</span>
<span class="line">   IPv4 Address....................: 172.16.1.2</span>
<span class="line">   Subnet Mask.....................: 255.255.255.0</span>
<span class="line">   Default Gateway.................: ::</span>
<span class="line">                                     172.16.1.1</span>
<span class="line"></span>
<span class="line">C:\\&gt;ping 172.16.4.2</span>
<span class="line"></span>
<span class="line">Pinging 172.16.4.2 with 32 bytes of data:</span>
<span class="line"></span>
<span class="line">Request timed out.</span>
<span class="line">Reply from 172.16.4.2: bytes=32 time=1ms TTL=126</span>
<span class="line">Reply from 172.16.4.2: bytes=32 time=1ms TTL=126</span>
<span class="line">Reply from 172.16.4.2: bytes=32 time=9ms TTL=126</span>
<span class="line"></span>
<span class="line">Ping statistics for 172.16.4.2:</span>
<span class="line">    Packets: Sent = 4, Received = 3, Lost = 1 (25% loss),</span>
<span class="line">Approximate round trip times in milli-seconds:</span>
<span class="line">    Minimum = 1ms, Maximum = 9ms, Average = 3ms</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>PC1 ~ PC4</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">C:\\&gt;ipconfig</span>
<span class="line"></span>
<span class="line">FastEthernet0 Connection:(default port)</span>
<span class="line"></span>
<span class="line">   Connection-specific DNS Suffix..: </span>
<span class="line">   Link-local IPv6 Address.........: FE80::201:42FF:FE8E:CACE</span>
<span class="line">   IPv6 Address....................: ::</span>
<span class="line">   IPv4 Address....................: 172.16.2.2</span>
<span class="line">   Subnet Mask.....................: 255.255.0.0</span>
<span class="line">   Default Gateway.................: ::</span>
<span class="line">                                     172.16.2.1</span>
<span class="line"></span>
<span class="line">C:\\&gt;ping 172.16.4.2</span>
<span class="line"></span>
<span class="line">Pinging 172.16.4.2 with 32 bytes of data:</span>
<span class="line"></span>
<span class="line">Reply from 172.16.4.2: bytes=32 time=1ms TTL=126</span>
<span class="line">Reply from 172.16.4.2: bytes=32 time=7ms TTL=126</span>
<span class="line">Reply from 172.16.4.2: bytes=32 time=6ms TTL=126</span>
<span class="line">Reply from 172.16.4.2: bytes=32 time=1ms TTL=126</span>
<span class="line"></span>
<span class="line">Ping statistics for 172.16.4.2:</span>
<span class="line">    Packets: Sent = 4, Received = 4, Lost = 0 (0% loss),</span>
<span class="line">Approximate round trip times in milli-seconds:</span>
<span class="line">    Minimum = 1ms, Maximum = 7ms, Average = 3ms</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="配置基本访问控制列表" tabindex="-1"><a class="header-anchor" href="#配置基本访问控制列表"><span>配置基本访问控制列表</span></a></h2><ul><li><p>目标：PC0 可访问 PC2，PC1 不可访问 PC2</p></li><li><p>控制方式：命名或编号，此处使用命名方式</p></li><li><p>R0</p><ul><li><p>配置访问控制列表</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">R0<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#ip acc</span></span>
<span class="line">R0<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#ip access-list ?</span></span>
<span class="line">  extended  Extended Access List</span>
<span class="line">  standard  Standard Access List</span>
<span class="line">R0<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#ip access-list st</span></span>
<span class="line">R0<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#ip access-list standard ?</span></span>
<span class="line">  <span class="token operator">&lt;</span><span class="token number">1</span>-9<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span>  Standard IP access-list number</span>
<span class="line">  WORD    Access-list name</span>
<span class="line">R0<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#ip access-list standard name1</span></span>
<span class="line">R0<span class="token punctuation">(</span>config-std-nacl<span class="token punctuation">)</span><span class="token comment">#permit ?</span></span>
<span class="line">  A.B.C.D  Address to match</span>
<span class="line">  any      Any <span class="token builtin class-name">source</span> <span class="token function">host</span></span>
<span class="line">  <span class="token function">host</span>     A single <span class="token function">host</span> address</span>
<span class="line">R0<span class="token punctuation">(</span>config-std-nacl<span class="token punctuation">)</span><span class="token comment">#permit 172.16.1.0 ?</span></span>
<span class="line">  A.B.C.D  Wildcard bits</span>
<span class="line">  <span class="token operator">&lt;</span>cr<span class="token operator">&gt;</span></span>
<span class="line">R0<span class="token punctuation">(</span>config-std-nacl<span class="token punctuation">)</span><span class="token comment">#permit 172.16.1.0 0.0.0.255</span></span>
<span class="line">R0<span class="token punctuation">(</span>config-std-nacl<span class="token punctuation">)</span><span class="token comment">#deny 172.16.2.0 0.0.0.255		! 写了上面那条之后，默认其他全部拒绝</span></span>
<span class="line">R0<span class="token punctuation">(</span>config-std-nacl<span class="token punctuation">)</span><span class="token comment">#end</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>应用访问控制列表</p><ul><li>编号模式 1 - 99 为基本访问控制列表，100 - 199 是高级访问控制列表，还可通过命名方式。</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">R0(config)#int s 2/0</span>
<span class="line">R0(config-if)#ip ?</span>
<span class="line">  access-group        Specify access control for packets</span>
<span class="line">  address             Set the IP address of an interface</span>
<span class="line">  authentication      authentication subcommands</span>
<span class="line">  flow                NetFlow Related commands</span>
<span class="line">  hello-interval      Configures IP-EIGRP hello interval</span>
<span class="line">  helper-address      Specify a destination address for UDP broadcasts</span>
<span class="line">  inspect             Apply inspect name</span>
<span class="line">  ips                 Create IPS rule</span>
<span class="line">  mtu                 Set IP Maximum Transmission Unit</span>
<span class="line">  nat                 NAT interface commands</span>
<span class="line">  ospf                OSPF interface commands</span>
<span class="line">  split-horizon       Perform split horizon</span>
<span class="line">  summary-address     Perform address summarization</span>
<span class="line">  virtual-reassembly  Virtual Reassembly</span>
<span class="line">R0(config-if)#ip access-group name1 ?					!入站还是出站</span>
<span class="line">  in   inbound packets</span>
<span class="line">  out  outbound packets</span>
<span class="line">R0(config-if)#ip access-group name1 out</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul><h2 id="测试" tabindex="-1"><a class="header-anchor" href="#测试"><span>测试</span></a></h2><ul><li><p>PC0 ping PC2</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">C:\\&gt;ping 172.16.4.2</span>
<span class="line"></span>
<span class="line">Pinging 172.16.4.2 with 32 bytes of data:</span>
<span class="line"></span>
<span class="line">Reply from 172.16.4.2: bytes=32 time=16ms TTL=126</span>
<span class="line">Reply from 172.16.4.2: bytes=32 time=1ms TTL=126</span>
<span class="line">Reply from 172.16.4.2: bytes=32 time=2ms TTL=126</span>
<span class="line">Reply from 172.16.4.2: bytes=32 time=3ms TTL=126</span>
<span class="line"></span>
<span class="line">Ping statistics for 172.16.4.2:</span>
<span class="line">    Packets: Sent = 4, Received = 4, Lost = 0 (0% loss),</span>
<span class="line">Approximate round trip times in milli-seconds:</span>
<span class="line">    Minimum = 1ms, Maximum = 16ms, Average = 5ms</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>PC1 ping PC2</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">C:\\&gt;ping 172.16.4.2</span>
<span class="line"></span>
<span class="line">Pinging 172.16.4.2 with 32 bytes of data:</span>
<span class="line"></span>
<span class="line">Reply from 172.16.2.1: Destination host unreachable.</span>
<span class="line">Reply from 172.16.2.1: Destination host unreachable.</span>
<span class="line">Reply from 172.16.2.1: Destination host unreachable.</span>
<span class="line">Reply from 172.16.2.1: Destination host unreachable.</span>
<span class="line"></span>
<span class="line">Ping statistics for 172.16.4.2:</span>
<span class="line">    Packets: Sent = 4, Received = 0, Lost = 4 (100% loss),</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,16)]))}const r=s(c,[["render",t]]),u=JSON.parse('{"path":"/blogs/tech/networking/Cisco/Packet Tracer/Lab/13.html","title":"标准IP控制列表配置","lang":"en-US","frontmatter":{"title":"标准IP控制列表配置","date":"2022-02-26T00:00:00.000Z","tags":["Networking","Cisco"],"categories":["tech"]},"headers":[{"level":2,"title":"例","slug":"例","link":"#例","children":[]},{"level":2,"title":"拓扑与主机IP配置","slug":"拓扑与主机ip配置","link":"#拓扑与主机ip配置","children":[]},{"level":2,"title":"R/S IP(/Clock) 配置","slug":"r-s-ip-clock-配置","link":"#r-s-ip-clock-配置","children":[]},{"level":2,"title":"配置静态路由","slug":"配置静态路由","link":"#配置静态路由","children":[]},{"level":2,"title":"测试连通性","slug":"测试连通性","link":"#测试连通性","children":[]},{"level":2,"title":"配置基本访问控制列表","slug":"配置基本访问控制列表","link":"#配置基本访问控制列表","children":[]},{"level":2,"title":"测试","slug":"测试","link":"#测试","children":[]}],"git":{"createdTime":1748156404000,"updatedTime":1766826955000,"contributors":[{"name":"PPPerryPan","email":"perrypan0123@outlook.com","commits":1}]},"filePathRelative":"blogs/tech/networking/Cisco/Packet Tracer/Lab/13.md"}');export{r as comp,u as data};
