import{_ as s,c as e,b as i,o as a}from"./app-CUDFWA7u.js";const l="/blog/assets/12.1-BPEceS_u.png",c="/blog/assets/12.2-BrDjwFOO.png",d={};function t(r,n){return a(),e("div",null,n[0]||(n[0]=[i('<h1 id="路由器综合路由配置" tabindex="-1"><a class="header-anchor" href="#路由器综合路由配置"><span>路由器综合路由配置</span></a></h1><h2 id="例" tabindex="-1"><a class="header-anchor" href="#例"><span>例</span></a></h2><ul><li><p>目标</p><ul><li>掌握综合路由的配置方法；</li><li>掌握查看通过路由重分布学习产生的路由；</li><li>熟悉广域网线缆的连接方式；</li></ul></li><li><p>背景</p><ul><li>假设某公司通过一台三层交换机连到公司出口路由器R1上，路由器R1再和公司外的另一台路由器R2连接。三层与R1间运行RIPV2路由协议，R1与R2间运行OSPF路由协议。现要做适当配置，实现公司内部主机与公司外部主机之间的相互通信。</li></ul></li><li><p>原理</p><ul><li>为了支持本设备能够运行多个路由协议进程，系统软件提供了路由信息从一个路由进程重分布到另外一个路由进程的功能。比如你可以将OSPF路由域的路由重新分布后通告RIP路由域中，也可以将RIP路由域的路由重新分布后通告到OSPF路由域中。路由的相互重分布可以在所有的IP路由协议之间进行。</li><li>要把路由从一个路由域分布到另一个路由域，并且进行控制路由重分布，在路由进程配置模式中执行以下命令（路由重分布）：redistribute protocol [metric metric] [metric-type metric-type] [match internal | external type | nssa-external type] [tag tag] [route-map route-map-name] [subnets]</li></ul></li><li><p>步骤</p><p>​ <img src="'+l+'" alt="12.1"></p><ul><li>新建packet tracer拓扑图（如图）</li><li>PC与交换机间用直连线连接；PC与路由、路由与路由之间用交叉线连接</li><li>在三层上划分2个Vlan，运行RIPV2协议；R2运行OSPF协议。</li><li>在路由器R1上左侧配置RIPV2路由协议：右侧配置OSPF协议。</li><li>在R1路由进程中引入外部路由，进行路由重分布。</li><li>将PC1、PC2主机默认网关分别设置为与直连网络设备接口IP地址。</li><li>验证PC1、PC2主机之间可以互相通信；</li></ul></li></ul><h2 id="拓扑与设备ip配置" tabindex="-1"><a class="header-anchor" href="#拓扑与设备ip配置"><span>拓扑与设备IP配置</span></a></h2><p><img src="'+c+`" alt="12.2"></p><h2 id="s0-配置" tabindex="-1"><a class="header-anchor" href="#s0-配置"><span>S0 配置</span></a></h2><ul><li><p>划分VLAN 、 switchport</p><ul><li>因 VLAN1 已默认存在，故此处只创建 VLAN2</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Switch&gt;en</span>
<span class="line">Switch#conf t</span>
<span class="line">Enter configuration commands, one per line.  End with CNTL/Z.</span>
<span class="line">Switch(config)#vlan 2</span>
<span class="line">Switch(config-vlan)#exit</span>
<span class="line">Switch(config)#int fa 0/10</span>
<span class="line">Switch(config-if)#switchport access vlan 2</span>
<span class="line">Switch(config-if)#exit</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>配置IP</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Switch(config)#int vlan 1</span>
<span class="line">Switch(config-if)#ip add 192.168.1.1 255.255.255.0</span>
<span class="line">Switch(config-if)#no shut</span>
<span class="line"></span>
<span class="line">Switch(config-if)#</span>
<span class="line">%LINK-5-CHANGED: Interface Vlan1, changed state to up</span>
<span class="line"></span>
<span class="line">%LINEPROTO-5-UPDOWN: Line protocol on Interface Vlan1, changed state to up</span>
<span class="line"></span>
<span class="line">Switch(config-if)#int vlan 2</span>
<span class="line">Switch(config-if)#</span>
<span class="line">%LINK-5-CHANGED: Interface Vlan2, changed state to up</span>
<span class="line"></span>
<span class="line">Switch(config-if)#ip add 192.168.2.1 255.255.255.0</span>
<span class="line">Switch(config-if)#no shut</span>
<span class="line">Switch(config-if)#end</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>查看</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Switch#show int vlan 1</span>
<span class="line">Vlan1 is up, line protocol is up</span>
<span class="line">  Hardware is CPU Interface, address is 0090.21e1.321e (bia 0090.21e1.321e)</span>
<span class="line">  Internet address is 192.168.1.1/24</span>
<span class="line">  MTU 1500 bytes, BW 100000 Kbit, DLY 1000000 usec,</span>
<span class="line">     reliability 255/255, txload 1/255, rxload 1/255</span>
<span class="line">  Encapsulation ARPA, loopback not set</span>
<span class="line">  ARP type: ARPA, ARP Timeout 04:00:00</span>
<span class="line">  Last input 21:40:21, output never, output hang never</span>
<span class="line">  Last clearing of &quot;show interface&quot; counters never</span>
<span class="line">  Input queue: 0/75/0/0 (size/max/drops/flushes); Total output drops: 0</span>
<span class="line">  Queueing strategy: fifo</span>
<span class="line">  Output queue: 0/40 (size/max)</span>
<span class="line">  5 minute input rate 0 bits/sec, 0 packets/sec</span>
<span class="line">  5 minute output rate 0 bits/sec, 0 packets/sec</span>
<span class="line">     1682 packets input, 530955 bytes, 0 no buffer</span>
<span class="line">     Received 0 broadcasts (0 IP multicast)</span>
<span class="line">     0 runts, 0 giants, 0 throttles</span>
<span class="line">     0 input errors, 0 CRC, 0 frame, 0 overrun, 0 ignored</span>
<span class="line">     563859 packets output, 0 bytes, 0 underruns</span>
<span class="line">     0 output errors, 23 interface resets</span>
<span class="line">     0 output buffer failures, 0 output buffers swapped out</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>RIP发布网段</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Switch#conf t</span>
<span class="line">Enter configuration commands, one per line.  End with CNTL/Z.</span>
<span class="line">Switch(config)#ip routing</span>
<span class="line">Switch(config-router)#network 192.168.1.0</span>
<span class="line">Switch(config-router)#network 192.168.2.0</span>
<span class="line">Switch(config-router)#version 2			!更改版本</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="r0-配置" tabindex="-1"><a class="header-anchor" href="#r0-配置"><span>R0 配置</span></a></h2><ul><li><p>IP 配置</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Router&gt;en</span>
<span class="line">Router#conf t</span>
<span class="line">Enter configuration commands, one per line.  End with CNTL/Z.</span>
<span class="line">Router(config)#hostname R0</span>
<span class="line">R0(config)#int fa 0/0</span>
<span class="line">R0(config-if)#ip add 192.168.2.2 255.255.255.0</span>
<span class="line">R0(config-if)#no shut</span>
<span class="line"></span>
<span class="line">R0(config-if)#</span>
<span class="line">%LINK-5-CHANGED: Interface FastEthernet0/0, changed state to up</span>
<span class="line"></span>
<span class="line">%LINEPROTO-5-UPDOWN: Line protocol on Interface FastEthernet0/0, changed state to up</span>
<span class="line"></span>
<span class="line">R0(config-if)#int fa 0/1</span>
<span class="line">R0(config-if)#ip add 192.168.3.1 255.255.255.0</span>
<span class="line">R0(config-if)#no shut</span>
<span class="line"></span>
<span class="line">R0(config-if)#</span>
<span class="line">%LINK-5-CHANGED: Interface FastEthernet0/1, changed state to up</span>
<span class="line"></span>
<span class="line">R0(config-if)#exit</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>RIP 发布网段（与 S0 使用 RIP协议）</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">R0(config)#router rip</span>
<span class="line">R0(config-router)#network 192.168.2.0</span>
<span class="line">R0(config-router)#version 2</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>OSPF 发布网段 （与 R1 使用 OSPF协议）</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">R0(config-router)#network 192.168.3.0 0.0.0.255 area 0</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li></ul><h2 id="r1-配置" tabindex="-1"><a class="header-anchor" href="#r1-配置"><span>R1 配置</span></a></h2><ul><li><p>IP 配置</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Router&gt;en</span>
<span class="line">Router#conf t</span>
<span class="line">Enter configuration commands, one per line.  End with CNTL/Z.</span>
<span class="line">Router(config)#hostname R1</span>
<span class="line">R1(config)#int fa 0/1</span>
<span class="line">R1(config-if)#ip add 192.168.3.2 255.255.255.0</span>
<span class="line">R1(config-if)#no shut</span>
<span class="line"></span>
<span class="line">R1(config-if)#</span>
<span class="line">%LINK-5-CHANGED: Interface FastEthernet0/1, changed state to up</span>
<span class="line"></span>
<span class="line">%LINEPROTO-5-UPDOWN: Line protocol on Interface FastEthernet0/1, changed state to up</span>
<span class="line"></span>
<span class="line">R1(config-if)#int fa 0/0</span>
<span class="line">R1(config-if)#ip add 192.168.4.1 255.255.255.0</span>
<span class="line">R1(config-if)#no shut</span>
<span class="line"></span>
<span class="line">R1(config-if)#</span>
<span class="line">%LINK-5-CHANGED: Interface FastEthernet0/0, changed state to up</span>
<span class="line"></span>
<span class="line">%LINEPROTO-5-UPDOWN: Line protocol on Interface FastEthernet0/0, changed state to up</span>
<span class="line"></span>
<span class="line">R1(config-if)#exit</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>OSPF 发布</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">R1(config)#router ospf 1</span>
<span class="line">R1(config-router)#network 192.168.3.0 0.0.0.255 area 0</span>
<span class="line">R1(config-router)#network 192.168.4.0 0.0.0.255 area 0</span>
<span class="line">R1(config-router)#end</span>
<span class="line">R1#</span>
<span class="line">%SYS-5-CONFIG_I: Configured from console by console</span>
<span class="line"></span>
<span class="line">00:18:32: %OSPF-5-ADJCHG: Process 1, Nbr 192.168.3.1 on FastEthernet0/1 from LOADING to FULL, Loading Done</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>查看路由表，有两个直连网段</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">R1#show ip rou</span>
<span class="line"></span>
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
<span class="line">C    192.168.3.0/24 is directly connected, FastEthernet0/1</span>
<span class="line">C    192.168.4.0/24 is directly connected, FastEthernet0/0</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="返回-r0-检测" tabindex="-1"><a class="header-anchor" href="#返回-r0-检测"><span>返回 R0 检测</span></a></h3><ul><li><p>查看路由表，可见有两个直连网段，以及与S0 RIP、R1 OSPF连接的网段</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">R0#show ip rou</span>
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
<span class="line">R    192.168.1.0/24 [120/1] via 192.168.2.1, 00:00:16, FastEthernet0/0</span>
<span class="line">C    192.168.2.0/24 is directly connected, FastEthernet0/0</span>
<span class="line">C    192.168.3.0/24 is directly connected, FastEthernet0/1</span>
<span class="line">O    192.168.4.0/24 [110/2] via 192.168.3.2, 00:06:27, FastEthernet0/1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>查看运行信息</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">R0#show run</span>
<span class="line">Building configuration...</span>
<span class="line"></span>
<span class="line">Current configuration : 710 bytes</span>
<span class="line">!</span>
<span class="line">version 12.4</span>
<span class="line">no service timestamps log datetime msec</span>
<span class="line">no service timestamps debug datetime msec</span>
<span class="line">no service password-encryption</span>
<span class="line">!</span>
<span class="line">hostname R0</span>
<span class="line">!</span>
<span class="line"> --More-- </span>
<span class="line">!</span>
<span class="line">interface FastEthernet0/0</span>
<span class="line"> ip address 192.168.2.2 255.255.255.0</span>
<span class="line"> duplex auto</span>
<span class="line"> speed auto</span>
<span class="line">!</span>
<span class="line">interface FastEthernet0/1</span>
<span class="line"> ip address 192.168.3.1 255.255.255.0</span>
<span class="line"> duplex auto</span>
<span class="line"> speed auto</span>
<span class="line">!</span>
<span class="line">interface Vlan1</span>
<span class="line"> no ip address</span>
<span class="line"> shutdown</span>
<span class="line">!</span>
<span class="line">router ospf 1</span>
<span class="line"> log-adjacency-changes</span>
<span class="line"> network 192.168.3.0 0.0.0.255 area 0</span>
<span class="line">!</span>
<span class="line">router rip</span>
<span class="line"> version 2</span>
<span class="line"> network 192.168.2.0</span>
<span class="line">!</span>
<span class="line"> --More-- </span>
<span class="line">!</span>
<span class="line">end</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="测试" tabindex="-1"><a class="header-anchor" href="#测试"><span>测试</span></a></h2><ul><li><p>在 R0 中 ping 1.0 与 4.0 网段</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">R0#ping 192.168.1.2</span>
<span class="line"></span>
<span class="line">Type escape sequence to abort.</span>
<span class="line">Sending 5, 100-byte ICMP Echos to 192.168.1.2, timeout is 2 seconds:</span>
<span class="line">.!!!!</span>
<span class="line">Success rate is 80 percent (4/5), round-trip min/avg/max = 0/0/0 ms</span>
<span class="line"></span>
<span class="line">R0#ping 192.168.4.2</span>
<span class="line"></span>
<span class="line">Type escape sequence to abort.</span>
<span class="line">Sending 5, 100-byte ICMP Echos to 192.168.4.2, timeout is 2 seconds:</span>
<span class="line">.!!!!</span>
<span class="line">Success rate is 80 percent (4/5), round-trip min/avg/max = 0/0/1 ms</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>PC0 ping PC 1</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">C:\\&gt;ipconfig</span>
<span class="line"></span>
<span class="line">FastEthernet0 Connection:(default port)</span>
<span class="line"></span>
<span class="line">   Connection-specific DNS Suffix..: </span>
<span class="line">   Link-local IPv6 Address.........: FE80::2D0:58FF:FE24:3D1E</span>
<span class="line">   IPv6 Address....................: ::</span>
<span class="line">   IPv4 Address....................: 192.168.1.2</span>
<span class="line">   Subnet Mask.....................: 255.255.255.0</span>
<span class="line">   Default Gateway.................: ::</span>
<span class="line">                                     192.168.1.1</span>
<span class="line"></span>
<span class="line">C:\\&gt;ping 192.168.4.2</span>
<span class="line"></span>
<span class="line">Pinging 192.168.4.2 with 32 bytes of data:</span>
<span class="line"></span>
<span class="line">Reply from 192.168.1.1: Destination host unreachable.</span>
<span class="line">Reply from 192.168.1.1: Destination host unreachable.</span>
<span class="line">Reply from 192.168.1.1: Destination host unreachable.</span>
<span class="line">Reply from 192.168.1.1: Destination host unreachable.</span>
<span class="line"></span>
<span class="line">Ping statistics for 192.168.4.2:</span>
<span class="line">    Packets: Sent = 4, Received = 0, Lost = 4 (100% loss),		!不可达</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>检查 S0 路由表</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Switch#show ip rou</span>
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
<span class="line">C    192.168.1.0/24 is directly connected, Vlan1</span>
<span class="line">C    192.168.2.0/24 is directly connected, Vlan2</span>
<span class="line">																!只有两条</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>在 R0 上进行 重分布</p><ul><li><p>将 OSPF 重分布 引入到 RIP 协议中</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">R0(config)#router rip</span>
<span class="line">R0(config-router)#red</span>
<span class="line">R0(config-router)#redistribute ?</span>
<span class="line">  connected  Connected</span>
<span class="line">  eigrp      Enhanced Interior Gateway Routing Protocol (EIGRP)</span>
<span class="line">  metric     Metric for redistributed routes</span>
<span class="line">  ospf       Open Shortest Path First (OSPF)</span>
<span class="line">  rip        Routing Information Protocol (RIP)</span>
<span class="line">  static     Static routes</span>
<span class="line">R0(config-router)#redistribute ospf ?</span>
<span class="line">  &lt;1-65535&gt;  Process ID</span>
<span class="line">R0(config-router)#redistribute ospf 1</span>
<span class="line">R0(config-router)#exit</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>将 RIP 重分布 引入到 OSPF 协议中</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">R0(config)#router ospf 1</span>
<span class="line">R0(config-router)#redistribute rip ?</span>
<span class="line">  metric       Metric for redistributed routes</span>
<span class="line">  metric-type  OSPF/IS-IS exterior metric type for redistributed routes</span>
<span class="line">  subnets      Consider subnets for redistribution into OSPF</span>
<span class="line">  tag          Set tag for routes redistributed into OSPF</span>
<span class="line">  &lt;cr&gt;</span>
<span class="line">R0(config-router)#redistribute rip subnets </span>
<span class="line">R0(config-router)#end</span>
<span class="line">R0#</span>
<span class="line">%SYS-5-CONFIG_I: Configured from console by console</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>查看 S0 路由表，依然只有两条</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Switch#show ip rou</span>
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
<span class="line">C    192.168.1.0/24 is directly connected, Vlan1</span>
<span class="line">C    192.168.2.0/24 is directly connected, Vlan2</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>查询后得知：本例在Packet Tracer 5.2上能正常运行，</p><ul><li>在Packet Tracer 5.3或以上版本，Switch0不能学习到192.168.3.0、192.168.4.0的路由信息，</li><li>需要给Switch0指定静态路由：ip route 0.0.0.0 0.0.0.0 192.168.2.2</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Switch(config)#ip route 0.0.0.0 0.0.0.0 192.168.2.2</span>
<span class="line">Switch(config)#end</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>查看 S0 路由表</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Switch#show ip rou</span>
<span class="line">Codes: C - connected, S - static, I - IGRP, R - RIP, M - mobile, B - BGP</span>
<span class="line">       D - EIGRP, EX - EIGRP external, O - OSPF, IA - OSPF inter area</span>
<span class="line">       N1 - OSPF NSSA external type 1, N2 - OSPF NSSA external type 2</span>
<span class="line">       E1 - OSPF external type 1, E2 - OSPF external type 2, E - EGP</span>
<span class="line">       i - IS-IS, L1 - IS-IS level-1, L2 - IS-IS level-2, ia - IS-IS inter area</span>
<span class="line">       * - candidate default, U - per-user static route, o - ODR</span>
<span class="line">       P - periodic downloaded static route</span>
<span class="line"></span>
<span class="line">Gateway of last resort is 192.168.2.2 to network 0.0.0.0</span>
<span class="line"></span>
<span class="line">C    192.168.1.0/24 is directly connected, Vlan1</span>
<span class="line">C    192.168.2.0/24 is directly connected, Vlan2</span>
<span class="line">S*   0.0.0.0/0 [1/0] via 192.168.2.2</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>PC0 ping PC 1</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"></span>
<span class="line">C:\\&gt;ipconfig</span>
<span class="line"></span>
<span class="line">FastEthernet0 Connection:(default port)</span>
<span class="line"></span>
<span class="line">   Connection-specific DNS Suffix..: </span>
<span class="line">   Link-local IPv6 Address.........: FE80::2D0:58FF:FE24:3D1E</span>
<span class="line">   IPv6 Address....................: ::</span>
<span class="line">   IPv4 Address....................: 192.168.1.2</span>
<span class="line">   Subnet Mask.....................: 255.255.255.0</span>
<span class="line">   Default Gateway.................: ::</span>
<span class="line">                                     192.168.1.1</span>
<span class="line"></span>
<span class="line">C:\\&gt;ping 192.168.4.2</span>
<span class="line"></span>
<span class="line">Pinging 192.168.4.2 with 32 bytes of data:</span>
<span class="line"></span>
<span class="line">Reply from 192.168.4.2: bytes=32 time&lt;1ms TTL=125</span>
<span class="line">Reply from 192.168.4.2: bytes=32 time&lt;1ms TTL=125</span>
<span class="line">Reply from 192.168.4.2: bytes=32 time&lt;1ms TTL=125</span>
<span class="line">Reply from 192.168.4.2: bytes=32 time&lt;1ms TTL=125</span>
<span class="line"></span>
<span class="line">Ping statistics for 192.168.4.2:</span>
<span class="line">    Packets: Sent = 4, Received = 4, Lost = 0 (0% loss),</span>
<span class="line">Approximate round trip times in milli-seconds:</span>
<span class="line">    Minimum = 0ms, Maximum = 0ms, Average = 0ms</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,15)]))}const v=s(d,[["render",t]]),u=JSON.parse('{"path":"/blogs/tech/networking/Cisco/Packet Tracer/Lab/12.html","title":"路由器综合路由配置","lang":"en-US","frontmatter":{"title":"路由器综合路由配置","date":"2022-02-24T00:00:00.000Z","tags":["Cisco","Networking"],"categories":["tech"]},"headers":[{"level":2,"title":"例","slug":"例","link":"#例","children":[]},{"level":2,"title":"拓扑与设备IP配置","slug":"拓扑与设备ip配置","link":"#拓扑与设备ip配置","children":[]},{"level":2,"title":"S0 配置","slug":"s0-配置","link":"#s0-配置","children":[]},{"level":2,"title":"R0 配置","slug":"r0-配置","link":"#r0-配置","children":[]},{"level":2,"title":"R1 配置","slug":"r1-配置","link":"#r1-配置","children":[{"level":3,"title":"返回 R0 检测","slug":"返回-r0-检测","link":"#返回-r0-检测","children":[]}]},{"level":2,"title":"测试","slug":"测试","link":"#测试","children":[]}],"git":{"createdTime":1748156404000,"updatedTime":1766826955000,"contributors":[{"name":"PPPerryPan","email":"perrypan0123@outlook.com","commits":1}]},"filePathRelative":"blogs/tech/networking/Cisco/Packet Tracer/Lab/12.md"}');export{v as comp,u as data};
