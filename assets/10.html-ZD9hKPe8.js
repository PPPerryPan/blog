import{_ as s,c as i,b as e,o as a}from"./app-CUDFWA7u.js";const l="/blog/assets/10.1-uwHbr7gB.png",c="/blog/assets/10.2-MR5qzwsS.png",t="/blog/assets/10.3-D0CrAgDx.png",d="/blog/assets/10.4-BLdHuizJ.png",p={};function r(v,n){return a(),i("div",null,n[0]||(n[0]=[e('<h1 id="网络地址转换nat配置" tabindex="-1"><a class="header-anchor" href="#网络地址转换nat配置"><span>网络地址转换NAT配置</span></a></h1><h2 id="例" tabindex="-1"><a class="header-anchor" href="#例"><span>例</span></a></h2><ul><li><p>目标</p><ul><li>理解NAT网络地址转换的原理及功能；</li><li>掌握静态NAT的配置，实现局域网访问互联网；</li></ul></li><li><p>背景</p><ul><li>你是某公司的网络管理员，欲发布公司的WWW服务。</li><li>要求将内网Web服务器IP地址映射为全局IP地址，实现外部网络可访问公司内部Web服务器。</li></ul></li><li><p>原理</p><ul><li>网络地址转换NAT（Network Address Translation），被广泛应用于各种类型Internet接入方式和各种类型的网络中。原因很简单，NAT不仅完美地解决了IP地址不足的问题，而且还能够有效地避免来自网络外部的攻击，隐藏并保护网络内部的计算机。</li><li>默认情况下，内部IP地址是无法被路由到外网的，内部主机10.1.1.1要与外部internet通信，IP包到达NAT路由器时，IP包头的源地址10.1.1.1被替换成一个合法的外网IP，并在NAT转换表中保存这条记录。当外部主机发送一个应答到内网时，NAT路由器收到后，查看当前NAT转换表，用10.1.1.1替换掉这个外网地址。</li></ul></li><li><p>步骤</p><p>​ <img src="'+l+'" alt="10.1"></p><ul><li>新建packet tracer拓扑图（如图）</li><li>R1为公司出口路由器，其与外部路由器之间通过V.35电缆串日连接，DCE端连接在R1上，配置其时钟频率64000；</li><li>配置PC机、服务器及路由器接口IP地址；</li><li>在各路由器上配置静态路由协议，让pc间能相互ping通；</li><li>在R1上配置静态NAT</li><li>在R1上定义内外部网络接口。</li><li>验证主机之间的互通性。</li></ul></li></ul><h2 id="拓扑与主机ip配置" tabindex="-1"><a class="header-anchor" href="#拓扑与主机ip配置"><span>拓扑与主机IP配置</span></a></h2><p><img src="'+c+`" alt="10.2"></p><h2 id="r0-配置" tabindex="-1"><a class="header-anchor" href="#r0-配置"><span>R0 配置</span></a></h2><ul><li>配置 IP 与时钟频率</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Router&gt;en</span>
<span class="line">Router#conf t</span>
<span class="line">Enter configuration commands, one per line.  End with CNTL/Z.</span>
<span class="line">Router(config)#host R0</span>
<span class="line">R0(config)#int fa 0/0</span>
<span class="line">R0(config-if)#ip add 192.168.1.1 255.255.255.0</span>
<span class="line">R0(config-if)#no shut</span>
<span class="line"></span>
<span class="line">R0(config-if)#</span>
<span class="line">%LINK-5-CHANGED: Interface FastEthernet0/0, changed state to up</span>
<span class="line"></span>
<span class="line">%LINEPROTO-5-UPDOWN: Line protocol on Interface FastEthernet0/0, changed state to up</span>
<span class="line"></span>
<span class="line">R0(config-if)#int s 2/0</span>
<span class="line">R0(config-if)#ip add 222.0.1.1 255.255.255.0</span>
<span class="line">R0(config-if)#no shut</span>
<span class="line"></span>
<span class="line">%LINK-5-CHANGED: Interface Serial2/0, changed state to down</span>
<span class="line">R0(config-if)#clock rate 64000</span>
<span class="line">R0(config-if)#</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="r1-配置" tabindex="-1"><a class="header-anchor" href="#r1-配置"><span>R1 配置</span></a></h2><ul><li>配置 IP</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Router&gt;en</span>
<span class="line">Router#conf t</span>
<span class="line">Enter configuration commands, one per line.  End with CNTL/Z.</span>
<span class="line">Router(config)#host R1</span>
<span class="line">R1(config)#int s 2/0</span>
<span class="line">R1(config-if)#ip add 222.0.1.2 255.255.255.0</span>
<span class="line">R1(config-if)#no shut</span>
<span class="line"></span>
<span class="line">R1(config-if)#</span>
<span class="line">%LINK-5-CHANGED: Interface Serial2/0, changed state to up</span>
<span class="line"></span>
<span class="line">R1(config-if)#int fa 0/0</span>
<span class="line">R1(config-if)#</span>
<span class="line">%LINEPROTO-5-UPDOWN: Line protocol on Interface Serial2/0, changed state to up</span>
<span class="line"></span>
<span class="line">R1(config-if)#ip add 222.0.2.1 255.255.255.0</span>
<span class="line">R1(config-if)#no shut</span>
<span class="line"></span>
<span class="line">R1(config-if)#</span>
<span class="line">%LINK-5-CHANGED: Interface FastEthernet0/0, changed state to up</span>
<span class="line"></span>
<span class="line">%LINEPROTO-5-UPDOWN: Line protocol on Interface FastEthernet0/0, changed state to up</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="做静态路由-rip-ospf也可" tabindex="-1"><a class="header-anchor" href="#做静态路由-rip-ospf也可"><span>做静态路由 (RIP/OSPF也可)</span></a></h2><ul><li><p>R0</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">R0(config)#ip route 222.0.2.0 255.255.255.0 222.0.1.2</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>R1</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">R1(config)#ip route 192.168.1.0 255.255.255.0 222.0.1.1</span>
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
<span class="line">S    192.168.1.0/24 [1/0] via 222.0.1.1</span>
<span class="line">C    222.0.1.0/24 is directly connected, Serial2/0</span>
<span class="line">C    222.0.2.0/24 is directly connected, FastEthernet0/0</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="pc0-与-server0-的连通性测试" tabindex="-1"><a class="header-anchor" href="#pc0-与-server0-的连通性测试"><span>PC0 与 Server0 的连通性测试</span></a></h2><ul><li><p>ping</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">C:\\&gt;ping 192.168.1.2</span>
<span class="line"></span>
<span class="line">Pinging 192.168.1.2 with 32 bytes of data:</span>
<span class="line"></span>
<span class="line">Request timed out.</span>
<span class="line">Reply from 192.168.1.2: bytes=32 time=1ms TTL=126</span>
<span class="line">Reply from 192.168.1.2: bytes=32 time=10ms TTL=126</span>
<span class="line">Reply from 192.168.1.2: bytes=32 time=6ms TTL=126</span>
<span class="line"></span>
<span class="line">Ping statistics for 192.168.1.2:</span>
<span class="line">    Packets: Sent = 4, Received = 3, Lost = 1 (25% loss),</span>
<span class="line">Approximate round trip times in milli-seconds:</span>
<span class="line">    Minimum = 1ms, Maximum = 10ms, Average = 5ms</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>浏览器</p><p><img src="`+t+`" alt="10.3"></p></li><li><p>在实验中可行，但在实际公网环境中，直接输入对方的内网地址是无法访问的。</p></li><li><p>所以需要将Server0的内网地址转换为公网地址</p></li><li><p>静态NAT步骤</p><ul><li><p>配置路由器IP地址及路由策略（已完成）</p></li><li><p>指定端口（哪些输入内部，哪些属于外部）</p><ul><li>此处 R0 中 Fa0/0 属于内部，Se2/0 属于外部</li></ul></li><li><p>将内部地址映射到公网地址**（在R0上配置）**</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">R0(config)#int fa 0/0</span>
<span class="line">R0(config-if)#ip nat inside										!标记为内部端口</span>
<span class="line">R0(config-if)#int s 2/0</span>
<span class="line">R0(config-if)#ip nat outside									!标记为外部端口</span>
<span class="line">R0(config-if)#exit</span>
<span class="line">R0(config)#ip nat inside ?</span>
<span class="line">  source  Source address translation</span>
<span class="line">R0(config)#ip nat inside source ?</span>
<span class="line">  list    Specify access list describing local addresses</span>
<span class="line">  static  Specify static local-&gt;global mapping</span>
<span class="line">R0(config)#ip nat inside source static ?</span>
<span class="line">  A.B.C.D  Inside local IP address</span>
<span class="line">  tcp      Transmission Control Protocol</span>
<span class="line">  udp      User Datagram Protocol</span>
<span class="line">R0(config)#ip nat inside source static 192.168.1.2 222.0.1.3	!映射</span>
<span class="line">R0(config)#end</span>
<span class="line">R0#</span>
<span class="line">%SYS-5-CONFIG_I: Configured from console by console</span>
<span class="line"></span>
<span class="line">R0#show ip nat rt</span>
<span class="line">R0#show ip nat tr</span>
<span class="line">R0#show ip nat translations </span>
<span class="line">Pro  Inside global     Inside local       Outside local      Outside global</span>
<span class="line">---  222.0.1.3         192.168.1.2        ---                ---</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>PC0 测试 通过公网IP访问 Server0</p><p><img src="`+d+`" alt="10.4"></p></li><li><p>在 R0上再次查看NAT，可以看到多了一条tcp访问记录</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">R0#show ip nat translations </span>
<span class="line">Pro  Inside global     Inside local       Outside local      Outside global</span>
<span class="line">---  222.0.1.3         192.168.1.2        ---                ---</span>
<span class="line">tcp 222.0.1.3:80       192.168.1.2:80     222.0.2.2:1026     222.0.2.2:1026</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,15)]))}const u=s(p,[["render",r]]),m=JSON.parse('{"path":"/blogs/tech/networking/Cisco/Packet Tracer/Lab/10.html","title":"网络地址转换NAT配置","lang":"en-US","frontmatter":{"title":"网络地址转换NAT配置","date":"2022-02-19T00:00:00.000Z","tags":["Cisco","Networking"],"categories":["tech"]},"headers":[{"level":2,"title":"例","slug":"例","link":"#例","children":[]},{"level":2,"title":"拓扑与主机IP配置","slug":"拓扑与主机ip配置","link":"#拓扑与主机ip配置","children":[]},{"level":2,"title":"R0 配置","slug":"r0-配置","link":"#r0-配置","children":[]},{"level":2,"title":"R1 配置","slug":"r1-配置","link":"#r1-配置","children":[]},{"level":2,"title":"做静态路由 (RIP/OSPF也可)","slug":"做静态路由-rip-ospf也可","link":"#做静态路由-rip-ospf也可","children":[]},{"level":2,"title":"PC0 与 Server0 的连通性测试","slug":"pc0-与-server0-的连通性测试","link":"#pc0-与-server0-的连通性测试","children":[]}],"git":{"createdTime":1748156404000,"updatedTime":1766826955000,"contributors":[{"name":"PPPerryPan","email":"perrypan0123@outlook.com","commits":1}]},"filePathRelative":"blogs/tech/networking/Cisco/Packet Tracer/Lab/10.md"}');export{u as comp,m as data};
