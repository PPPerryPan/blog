import{_ as s,c as e,b as i,o as a}from"./app-CUDFWA7u.js";const l="/blog/assets/6.1-ChjGA5dt.png",t={};function c(d,n){return a(),e("div",null,n[0]||(n[0]=[i('<h1 id="路由器单臂路由配置" tabindex="-1"><a class="header-anchor" href="#路由器单臂路由配置"><span>路由器单臂路由配置</span></a></h1><h2 id="例" tabindex="-1"><a class="header-anchor" href="#例"><span>例</span></a></h2><ul><li><p>目标</p><ul><li>掌握单臂路由配置方法；通过单臂路由实现不同VLAN间互相通信；</li></ul></li><li><p>背景</p><ul><li>某企业有两个主要部门，技术部和销售部，分处于不同的办公室，为了安全和便于管理对两个部门的主机进行了VLAN的划分，技术部和销售部分处于不同的VLAN，现由于业务的需求需要销售部和技术部的主机能够相互访问，获得相应的资源，两个部门的交换机通过一台路由器进行了连接。</li></ul></li><li><p>原理</p><ul><li>单臂路由：是为实现VLAN间通信的三层网络设备路由器，它只需要一个以太接口，通过创建子接口可以承担所有VLAN的网关，而在不同的VLAN间转发数据。</li></ul></li><li><p>步骤</p><ul><li>新建packet tracer拓扑图（如图）</li><li>当交换机设置成两个vlan时，逻辑上已经成为两个网络，广播被隔离了。两个vlan的网络要通信，必须通过路由器，如果接入路由器的，个物理端口，则必须有两个子按口分别与两个vlan对应，同时还要求与路由器相联的交换机的端口f/1要设置为trunk，因为这个口要通过两个vlan的数据包。</li><li>检查设置情况，应该能正确的看到van和trunk信息。</li><li>计算机的网关分别指向路由器的子接口。</li><li>配置子接口，开启路由器物理接口。</li><li>默认封装为dot1q协议。</li><li>配置路由器子接口ip地址。</li></ul></li></ul><h2 id="拓扑与主机ip配置" tabindex="-1"><a class="header-anchor" href="#拓扑与主机ip配置"><span>拓扑与主机IP配置</span></a></h2><p><img src="'+l+`" alt="6.1"></p><h2 id="两层交换机配置" tabindex="-1"><a class="header-anchor" href="#两层交换机配置"><span>两层交换机配置</span></a></h2><ul><li>划分vlan与更改工作模式</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Switch&gt;en</span>
<span class="line">Switch#conf t									!进入全局配置</span>
<span class="line">Enter configuration commands, one per line.  End with CNTL/Z.</span>
<span class="line">Switch(config)#vlan 2</span>
<span class="line">Switch(config-vlan)#exit</span>
<span class="line">Switch(config)#vlan 3</span>
<span class="line">Switch(config-vlan)#exit</span>
<span class="line">Switch(config)#in fa 0/2</span>
<span class="line">Switch(config-if)#switchport access vlan 2		!将fa0/2划分到vlan2</span>
<span class="line">Switch(config-if)#exit</span>
<span class="line">Switch(config)#int fa 0/3</span>
<span class="line">Switch(config-if)#switchport access vlan 3		!将fa0/3划分到vlan3</span>
<span class="line">Switch(config-if)#int fa 0/1</span>
<span class="line">Switch(config-if)#switchport mode trunk 		!将fa0/1工作模式改为trunk</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="路由器配置" tabindex="-1"><a class="header-anchor" href="#路由器配置"><span>路由器配置</span></a></h2><ul><li>启用端口</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Would you like to enter the initial configuration dialog? [yes/no]: n</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">Press RETURN to get started!</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">Router&gt;en</span>
<span class="line">Router#conf t</span>
<span class="line">Enter configuration commands, one per line.  End with CNTL/Z.</span>
<span class="line">Router(config)#int fa 0/0</span>
<span class="line">Router(config-if)#no shut		!启用 fa0/0端口</span>
<span class="line"></span>
<span class="line">Router(config-if)#</span>
<span class="line">%LINK-5-CHANGED: Interface FastEthernet0/0, changed state to up</span>
<span class="line"></span>
<span class="line">%LINEPROTO-5-UPDOWN: Line protocol on Interface FastEthernet0/0, changed state to up</span>
<span class="line"></span>
<span class="line">Router(config-if)#exit</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>子接口配置 <ul><li>注：此处接口地址即主机网关</li></ul></li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Router(config)#interface fastEthernet 0/0.1					!进入0/0.1子接口</span>
<span class="line">Router(config-subif)#</span>
<span class="line">%LINK-5-CHANGED: Interface FastEthernet0/0.1, changed state to up</span>
<span class="line"></span>
<span class="line">%LINEPROTO-5-UPDOWN: Line protocol on Interface FastEthernet0/0.1, changed state to up</span>
<span class="line"></span>
<span class="line">Router(config-subif)#encapsulation dot1Q 2					!更改封装模式为dot1Q 末尾参数为vlan号？</span>
<span class="line">Router(config-subif)#ip address 192.168.1.1 255.255.255.0	!设置IP地址</span>
<span class="line">Router(config-subif)#exit</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">Router(config)#int fa 0/0.2									!进入0/0.2子接口</span>
<span class="line">Router(config-subif)#</span>
<span class="line">%LINK-5-CHANGED: Interface FastEthernet0/0.2, changed state to up</span>
<span class="line"></span>
<span class="line">%LINEPROTO-5-UPDOWN: Line protocol on Interface FastEthernet0/0.2, changed state to up</span>
<span class="line"></span>
<span class="line">Router(config-subif)#encapsulation dot1Q 3					!更改封装模式为dot1Q 末尾参数为vlan号？</span>
<span class="line">Router(config-subif)#ip add</span>
<span class="line">Router(config-subif)#ip address 192.168.2.1 255.255.255.0	!设置IP地址</span>
<span class="line">Router(config-subif)#end</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>查看路由表 <ul><li>可以看到直连路由</li></ul></li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Router#show ip route </span>
<span class="line">Codes: L - local, C - connected, S - static, R - RIP, M - mobile, B - BGP</span>
<span class="line">       D - EIGRP, EX - EIGRP external, O - OSPF, IA - OSPF inter area</span>
<span class="line">       N1 - OSPF NSSA external type 1, N2 - OSPF NSSA external type 2</span>
<span class="line">       E1 - OSPF external type 1, E2 - OSPF external type 2, E - EGP</span>
<span class="line">       i - IS-IS, L1 - IS-IS level-1, L2 - IS-IS level-2, ia - IS-IS inter area</span>
<span class="line">       * - candidate default, U - per-user static route, o - ODR</span>
<span class="line">       P - periodic downloaded static route</span>
<span class="line"></span>
<span class="line">Gateway of last resort is not set</span>
<span class="line"></span>
<span class="line">     192.168.1.0/24 is variably subnetted, 2 subnets, 2 masks</span>
<span class="line">C       192.168.1.0/24 is directly connected, FastEthernet0/0.1</span>
<span class="line">L       192.168.1.1/32 is directly connected, FastEthernet0/0.1</span>
<span class="line">     192.168.2.0/24 is variably subnetted, 2 subnets, 2 masks</span>
<span class="line">C       192.168.2.0/24 is directly connected, FastEthernet0/0.2</span>
<span class="line">L       192.168.2.1/32 is directly connected, FastEthernet0/0.2</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="测试能否通信" tabindex="-1"><a class="header-anchor" href="#测试能否通信"><span>测试能否通信</span></a></h2><ul><li>从 PC0 ping 网关</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">C:\\&gt;ping 192.168.1.1</span>
<span class="line"></span>
<span class="line">Pinging 192.168.1.1 with 32 bytes of data:</span>
<span class="line"></span>
<span class="line">Reply from 192.168.1.1: bytes=32 time&lt;1ms TTL=255</span>
<span class="line">Reply from 192.168.1.1: bytes=32 time&lt;1ms TTL=255</span>
<span class="line">Reply from 192.168.1.1: bytes=32 time&lt;1ms TTL=255</span>
<span class="line">Reply from 192.168.1.1: bytes=32 time&lt;1ms TTL=255</span>
<span class="line"></span>
<span class="line">Ping statistics for 192.168.1.1:</span>
<span class="line">    Packets: Sent = 4, Received = 4, Lost = 0 (0% loss),</span>
<span class="line">Approximate round trip times in milli-seconds:</span>
<span class="line">    Minimum = 0ms, Maximum = 0ms, Average = 0ms</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>从 PC0 ping PC1</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Pinging 192.168.2.2 with 32 bytes of data:</span>
<span class="line"></span>
<span class="line">Request timed out.</span>
<span class="line">Reply from 192.168.2.2: bytes=32 time&lt;1ms TTL=127</span>
<span class="line">Reply from 192.168.2.2: bytes=32 time&lt;1ms TTL=127</span>
<span class="line">Reply from 192.168.2.2: bytes=32 time&lt;1ms TTL=127</span>
<span class="line"></span>
<span class="line">Ping statistics for 192.168.2.2:</span>
<span class="line">    Packets: Sent = 4, Received = 3, Lost = 1 (25% loss),</span>
<span class="line">Approximate round trip times in milli-seconds:</span>
<span class="line">    Minimum = 0ms, Maximum = 0ms, Average = 0ms</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20)]))}const p=s(t,[["render",c]]),v=JSON.parse('{"path":"/blogs/tech/networking/Cisco/Packet Tracer/Lab/6.html","title":"路由器单臂路由配置","lang":"en-US","frontmatter":{"title":"路由器单臂路由配置","date":"2022-02-08T00:00:00.000Z","tags":["Cisco","Networking"],"categories":["tech"]},"headers":[{"level":2,"title":"例","slug":"例","link":"#例","children":[]},{"level":2,"title":"拓扑与主机IP配置","slug":"拓扑与主机ip配置","link":"#拓扑与主机ip配置","children":[]},{"level":2,"title":"两层交换机配置","slug":"两层交换机配置","link":"#两层交换机配置","children":[]},{"level":2,"title":"路由器配置","slug":"路由器配置","link":"#路由器配置","children":[]},{"level":2,"title":"测试能否通信","slug":"测试能否通信","link":"#测试能否通信","children":[]}],"git":{"createdTime":1748156404000,"updatedTime":1766826955000,"contributors":[{"name":"PPPerryPan","email":"perrypan0123@outlook.com","commits":1}]},"filePathRelative":"blogs/tech/networking/Cisco/Packet Tracer/Lab/6.md"}');export{p as comp,v as data};
