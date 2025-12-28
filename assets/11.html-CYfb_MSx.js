import{_ as s,c as i,b as e,o as a}from"./app-CUDFWA7u.js";const l="/blog/assets/11.1-Cdh2KT-X.png",d="/blog/assets/11.2-C_D7n9HJ.png",c={};function t(p,n){return a(),i("div",null,n[0]||(n[0]=[e('<h1 id="网络端口地址转换napt配置" tabindex="-1"><a class="header-anchor" href="#网络端口地址转换napt配置"><span>网络端口地址转换NAPT配置</span></a></h1><h2 id="例" tabindex="-1"><a class="header-anchor" href="#例"><span>例</span></a></h2><ul><li><p>目标</p><ul><li>理解NAT网络地址转换的原理及功能；</li><li>掌握NAPT的配置，实现局域网访问互联网；</li></ul></li><li><p>背景</p><ul><li>你是某公司的网络管理员，公司办公网需要接入互联网，公司只向ISP申请了一条专线，该专线分配了一个公网IP地址，配置实现全公司的主机都能访问外网。</li></ul></li><li><p>原理</p><ul><li>NAT将网络划分为内部网络和外部网络两部分，局域网主机利用NAT访问网络时，是将局域网内部的本地地址转换为全局地址（互联网合法的IP地址）后转发数据包；</li><li>NAT分为两种类型：NAT（网络地址转换）和 NAPT（网络端口地址转换IP地址对应一个全局地址） <ul><li>NAPT：使用不同的端口来映射多个内网IP地址到一个指定的外网IP地址，多对一。</li></ul></li><li>NAPT采用端口多路复用方式。内部网络的所有主机均可共享一个合法外部IP地址实现对Internet的访问，从而可以最大限度地节约IP地址资源。同时，又可隐藏网络内部的所有主机，有效避免来自Internet的攻击。因此，目前网络中应用最多的就是端口多路复用方式。</li></ul></li><li><p>步骤</p><p><img src="'+l+'" alt="11.1"></p><ul><li>新建packet tracer拓扑图（如图）</li><li>R1为公司出口路由器，其与ISP路由器之间通过V.35电缆串口连接，DCE端连接在R1上，配置其时钟频率64000；</li><li>配置PC机、服务器及路由器接口IP地址；</li><li>在各路由器上配置静态路由协议，让pc间能相互ping通；</li><li>在R1上配置NAPT</li><li>在R1上定义内外部网络接口</li><li>验证主机之间的互通性</li></ul></li></ul><h2 id="拓扑与设备ip配置" tabindex="-1"><a class="header-anchor" href="#拓扑与设备ip配置"><span>拓扑与设备IP配置</span></a></h2><p><img src="'+d+`" alt="11.2"></p><h2 id="r0-ip配置" tabindex="-1"><a class="header-anchor" href="#r0-ip配置"><span>R0 IP配置</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Router&gt;en</span>
<span class="line">Router#conf t</span>
<span class="line">Enter configuration commands, one per line.  End with CNTL/Z.</span>
<span class="line">Router(config)#host R0</span>
<span class="line">R0(config)#int fa 0/0</span>
<span class="line">R0(config-if)#ip add 192.168.1.1 255.255.255.0		!配置局域网内部默认网关</span>
<span class="line">R0(config-if)#no shut</span>
<span class="line"></span>
<span class="line">R0(config-if)#</span>
<span class="line">%LINK-5-CHANGED: Interface FastEthernet0/0, changed state to up</span>
<span class="line"></span>
<span class="line">%LINEPROTO-5-UPDOWN: Line protocol on Interface FastEthernet0/0, changed state to up</span>
<span class="line"></span>
<span class="line">R0(config-if)#int s 2/0</span>
<span class="line">R0(config-if)#ip add 200.1.1.1 255.255.255.0		!配置IP</span>
<span class="line">R0(config-if)#no shut</span>
<span class="line"></span>
<span class="line">%LINK-5-CHANGED: Interface Serial2/0, changed state to down</span>
<span class="line">R0(config-if)#clock rate 64000						!配置时钟</span>
<span class="line">R0(config-if)#</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="r1-ip配置" tabindex="-1"><a class="header-anchor" href="#r1-ip配置"><span>R1 IP配置</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Router&gt;en</span>
<span class="line">Router#conf t</span>
<span class="line">Enter configuration commands, one per line.  End with CNTL/Z.</span>
<span class="line">Router(config)#host R1</span>
<span class="line">R1(config)#int s 2/0</span>
<span class="line">R1(config-if)#ip add 200.1.1.2 255.255.255.0		!配置局域网内部默认网关</span>
<span class="line">R1(config-if)#no shut</span>
<span class="line"></span>
<span class="line">R1(config-if)#</span>
<span class="line">%LINK-5-CHANGED: Interface Serial2/0, changed state to up</span>
<span class="line"></span>
<span class="line">%LINEPROTO-5-UPDOWN: Line protocol on Interface Serial2/0, changed state to up</span>
<span class="line"></span>
<span class="line">R1(config-if)#int fa 0/0</span>
<span class="line">R1(config-if)#ip add 200.1.2.1 255.255.255.0	!配置IP</span>
<span class="line">R1(config-if)#no shut</span>
<span class="line"></span>
<span class="line">R1(config-if)#</span>
<span class="line">%LINK-5-CHANGED: Interface FastEthernet0/0, changed state to up</span>
<span class="line"></span>
<span class="line">%LINEPROTO-5-UPDOWN: Line protocol on Interface FastEthernet0/0, changed state to up</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="静态路由配置" tabindex="-1"><a class="header-anchor" href="#静态路由配置"><span>静态路由配置</span></a></h2><ul><li><p>R0</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">R0(config)#ip route 200.1.2.0 255.255.255.0 200.1.1.2</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>R1</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">R1(config)#ip route 192.168.1.0 255.255.255.0 200.1.1.1</span>
<span class="line">R1(config)#end</span>
<span class="line">R1#</span>
<span class="line">%SYS-5-CONFIG_I: Configured from console by console</span>
<span class="line"></span>
<span class="line">R1#show ip rou</span>
<span class="line">Codes: C - connected, S - static, I - IGRP, R - RIP, M - mobile, B - BGP</span>
<span class="line">       D - EIGRP, EX - EIGRP external, O - OSPF, IA - OSPF inter area</span>
<span class="line">       N1 - OSPF NSSA external type 1, N2 - OSPF NSSA external type 2</span>
<span class="line">       E1 - OSPF external type 1, E2 - OSPF external type 2, E - EGP</span>
<span class="line">       i - IS-IS, L1 - IS-IS level-1, L2 - IS-IS level-2, ia - IS-IS inter area</span>
<span class="line">       * - candidate default, U - per-user static route, o - ODR</span>
<span class="line">       P - periodic downloaded static route</span>
<span class="line"></span>
<span class="line">Gateway of last resort is not set</span>
<span class="line"></span>
<span class="line">S    192.168.1.0/24 [1/0] via 200.1.1.1</span>
<span class="line">C    200.1.1.0/24 is directly connected, Serial2/0</span>
<span class="line">C    200.1.2.0/24 is directly connected, FastEthernet0/0</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>尝试在 PC0 ping Server 0：可ping通（Web浏览器也可通过IP直接访问Server0）</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">C:\\&gt;ipconfig</span>
<span class="line"></span>
<span class="line">FastEthernet0 Connection:(default port)</span>
<span class="line"></span>
<span class="line">   Connection-specific DNS Suffix..: </span>
<span class="line">   Link-local IPv6 Address.........: FE80::20A:F3FF:FE90:D747</span>
<span class="line">   IPv6 Address....................: ::</span>
<span class="line">   IPv4 Address....................: 192.168.1.2</span>
<span class="line">   Subnet Mask.....................: 255.255.255.0</span>
<span class="line">   Default Gateway.................: ::</span>
<span class="line">                                     192.168.1.1</span>
<span class="line"></span>
<span class="line">Bluetooth Connection:</span>
<span class="line"></span>
<span class="line">   Connection-specific DNS Suffix..: </span>
<span class="line">   Link-local IPv6 Address.........: ::</span>
<span class="line">   IPv6 Address....................: ::</span>
<span class="line">   IPv4 Address....................: 0.0.0.0</span>
<span class="line">   Subnet Mask.....................: 0.0.0.0</span>
<span class="line">   Default Gateway.................: ::</span>
<span class="line">                                     0.0.0.0</span>
<span class="line"></span>
<span class="line">C:\\&gt;ping 200.1.2.2</span>
<span class="line"></span>
<span class="line">Pinging 200.1.2.2 with 32 bytes of data:</span>
<span class="line"></span>
<span class="line">Request timed out.</span>
<span class="line">Reply from 200.1.2.2: bytes=32 time=1ms TTL=126</span>
<span class="line">Reply from 200.1.2.2: bytes=32 time=1ms TTL=126</span>
<span class="line">Reply from 200.1.2.2: bytes=32 time=1ms TTL=126</span>
<span class="line"></span>
<span class="line">Ping statistics for 200.1.2.2:</span>
<span class="line">    Packets: Sent = 4, Received = 3, Lost = 1 (25% loss),</span>
<span class="line">Approximate round trip times in milli-seconds:</span>
<span class="line">    Minimum = 1ms, Maximum = 1ms, Average = 1ms</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="r0-napt配置" tabindex="-1"><a class="header-anchor" href="#r0-napt配置"><span>R0 NAPT配置</span></a></h2><ul><li><p>配置路由IP地址及路由策略（已完成）</p></li><li><p>访问控制列表</p><ul><li>允许哪些网段出去（可做基本，可做高级）</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">R0(config)#access-list ?</span>
<span class="line">  &lt;1-99&gt;     IP standard access list</span>
<span class="line">  &lt;100-199&gt;  IP extended access list</span>
<span class="line">R0(config)#access-list 1 ?</span>
<span class="line">  deny    Specify packets to reject</span>
<span class="line">  permit  Specify packets to forward</span>
<span class="line">  remark  Access list entry comment</span>
<span class="line">R0(config)#access-list 1 p</span>
<span class="line">R0(config)#access-list 1 permit ?</span>
<span class="line">  A.B.C.D  Address to match</span>
<span class="line">  any      Any source host</span>
<span class="line">  host     A single host address</span>
<span class="line">R0(config)#access-list 1 permit 192.168.1.0 0.0.0.255</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>做地址池</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">R0(config)# ip nat ?</span>
<span class="line">  inside   Inside address translation</span>
<span class="line">  outside  Outside address translation</span>
<span class="line">  pool     Define pool of addresses</span>
<span class="line">R0(config)# ip nat pool ?</span>
<span class="line">  WORD  Pool name</span>
<span class="line">R0(config)# ip nat pool name1 ?		</span>
<span class="line">  A.B.C.D  Start IP address			!公有地址始</span>
<span class="line">R0(config)# ip nat pool name1 200.1.1.3 ?</span>
<span class="line">  A.B.C.D  End IP address			!公有地址末</span>
<span class="line">R0(config)# ip nat pool name1 200.1.1.3 200.1.1.3 netmask 255.255.255.0</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>发布出口路由的内部和外部网络(ip nat inside/outside)</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">R0(config)#int fa 0/0</span>
<span class="line">R0(config-if)#ip nat inside</span>
<span class="line">R0(config-if)#int s 2/0</span>
<span class="line">R0(config-if)#ip nat outside</span>
<span class="line">R0(config-if)#exit</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>将访问控制列表映射到地址池</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">R0(config)#ip nat ?</span>
<span class="line">  inside   Inside address translation</span>
<span class="line">  outside  Outside address translation</span>
<span class="line">  pool     Define pool of addresses</span>
<span class="line">R0(config)#ip nat inside ?</span>
<span class="line">  source  Source address translation</span>
<span class="line">R0(config)#ip nat inside source ?</span>
<span class="line">  list    Specify access list describing local addresses</span>
<span class="line">  static  Specify static local-&gt;global mapping</span>
<span class="line">R0(config)#ip nat inside source list ?</span>
<span class="line">  &lt;1-199&gt;  Access list number for local addresses</span>
<span class="line">  WORD     Access list name for local addresses</span>
<span class="line">R0(config)#ip nat inside source list 1 ?</span>
<span class="line">  interface  Specify interface for global address</span>
<span class="line">  pool       Name pool of global addresses</span>
<span class="line">R0(config)#ip nat inside source list 1 pool name1 ?</span>
<span class="line">  overload  Overload an address translation		!NAPT选项，多(内IP)对一(公网IP)</span>
<span class="line">  &lt;cr&gt;											!NAT选项，一对一/多对多选项(排队获取)？</span>
<span class="line">R0(config)#ip nat inside source list 1 pool name1 </span>
<span class="line">R0(config)#ip nat inside source list 1 pool name1 overload </span>
<span class="line">R0(config)#end</span>
<span class="line">R0#</span>
<span class="line">%SYS-5-CONFIG_I: Configured from console by console</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">R0#show ip nat translations 					!注：此时查不到任何记录</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="测试" tabindex="-1"><a class="header-anchor" href="#测试"><span>测试</span></a></h2><ul><li><p>在 PC0 ，PC1 上用浏览器访问 Server0 (200.1.2.2)，然后到R0上查看</p><ul><li>可查到地址映射信息</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">R0#show ip nat translations </span>
<span class="line">Pro  Inside global     Inside local       Outside local      Outside global</span>
<span class="line">tcp 200.1.1.3:1024     192.168.1.2:1025   200.1.2.2:80       200.1.2.2:80</span>
<span class="line">tcp 200.1.1.3:1025     192.168.1.3:1025   200.1.2.2:80       200.1.2.2:80</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,15)]))}const v=s(c,[["render",t]]),o=JSON.parse('{"path":"/blogs/tech/networking/Cisco/Packet Tracer/Lab/11.html","title":"网络端口地址转换NAPT配置","lang":"en-US","frontmatter":{"title":"网络端口地址转换NAPT配置","date":"2022-02-20T00:00:00.000Z","tags":["Cisco","Networking"],"categories":["tech"]},"headers":[{"level":2,"title":"例","slug":"例","link":"#例","children":[]},{"level":2,"title":"拓扑与设备IP配置","slug":"拓扑与设备ip配置","link":"#拓扑与设备ip配置","children":[]},{"level":2,"title":"R0 IP配置","slug":"r0-ip配置","link":"#r0-ip配置","children":[]},{"level":2,"title":"R1 IP配置","slug":"r1-ip配置","link":"#r1-ip配置","children":[]},{"level":2,"title":"静态路由配置","slug":"静态路由配置","link":"#静态路由配置","children":[]},{"level":2,"title":"R0 NAPT配置","slug":"r0-napt配置","link":"#r0-napt配置","children":[]},{"level":2,"title":"测试","slug":"测试","link":"#测试","children":[]}],"git":{"createdTime":1748156404000,"updatedTime":1766826955000,"contributors":[{"name":"PPPerryPan","email":"perrypan0123@outlook.com","commits":1}]},"filePathRelative":"blogs/tech/networking/Cisco/Packet Tracer/Lab/11.md"}');export{v as comp,o as data};
