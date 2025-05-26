import{_ as s,c as i,a,o as e}from"./app-Dh5bFHR3.js";const l="/blog/assets/2.1-CCfTARf_.png",t={};function c(p,n){return e(),i("div",null,n[0]||(n[0]=[a('<ul><li>背景：</li></ul><p>​ 某一公司内财务部、销售部的PC通这2台交换机实现通信；要求财务部和销售部内的PC可以互通，但为了数据安全起见，销售部和财务部需要进行互相隔离，现要在交换机上做适当配置来实现这一目的。</p><ul><li>原理</li></ul><p>​ VLAN是指在 个物理网段内，进行逻辑的划分，划分成若干个虚拟局域网。VLAN最大的特性是不受物理位置的限制，可以进行灵活的划分。VLAN具备了一个物理网段所具备的特性。相同VLAN内的主机可以相瓦直接信，不同VLAN间的三机之间互相访问必须经由路由设备进行转发。广播数据包只可以在本VLAN内进行广播，不能传输到其他VLAN中。 Port VLAN是实现VLAN的方式之一，它利月交换机的端口进行VLAN的划分，一个端口只能属于一个VLAN.</p><p>​ Tag VLAN是基无交换机端口的另处一种类型，主要用工使交换机的相同Vlan内的主机之间可以直接迹间：…同时对无不同lan的主机进行隔离。Tag VLAN遵循IEEE802.1Q协议的标准。在使用配置了Tag VLAN的端口进行数据传输时，需要在数据帧内添加4个字节的802.1Q标签信息，用于标示该数据帧属于那个VLAN，便于对端交换机接收到数据帧后进行准确的过滤。</p><h2 id="拓扑图及主机ip配置" tabindex="-1"><a class="header-anchor" href="#拓扑图及主机ip配置"><span>拓扑图及主机IP配置</span></a></h2><p><img src="'+l+`" alt="2.1"></p><h2 id="划分vlan、设置tag-vlan-trunk" tabindex="-1"><a class="header-anchor" href="#划分vlan、设置tag-vlan-trunk"><span>划分VLAN、设置Tag VLAN Trunk</span></a></h2><ul><li>配置Switch1（Switch2同理，省略）</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Switch&gt;en									!进入特权模式</span>
<span class="line">Switch#conf t								!进入全局配置模式</span>
<span class="line">Enter configuration commands, one per line.  End with CNTL/Z.</span>
<span class="line">Switch(config)#vlan 2						!划分VLAN2</span>
<span class="line">Switch(config-vlan)#exit</span>
<span class="line">Switch(config)#vlan 3						!划分VLAN3</span>
<span class="line">Switch(config-vlan)#exit</span>
<span class="line">Switch(config)#interface fa 0/1				!进入0/1端口(与PC1相连)</span>
<span class="line">Switch(config-if)#switchport access vlan 2	!划分到VLAN2</span>
<span class="line">Switch(config-if)#exit</span>
<span class="line">Switch(config)#int fa 0/2					!进入0/2端口(与PC2相连)</span>
<span class="line">Switch(config-if)#switchport access vlan 3	!划分到VLAN3</span>
<span class="line">Switch(config-if)#exit</span>
<span class="line">Switch(config)#interface fa 0/24			!进入0/24端口(与Switch2相连)</span>
<span class="line">Switch(config-if)#switchport mode trunk 	!工作模式设置Trunk</span>
<span class="line"></span>
<span class="line">Switch(config-if)#</span>
<span class="line">%LINEPROTO-5-UPDOWN: Line protocol on Interface FastEthernet0/24, changed state to down</span>
<span class="line"> </span>
<span class="line">%LINEPROTO-5-UPDOWN: Line protocol on Interface FastEthernet0/24, changed state to up</span>
<span class="line"></span>
<span class="line">Switch(config-if)#end</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Switch(config-if)#switchport mode ?</span>
<span class="line">  access   Set trunking mode to ACCESS unconditionally</span>
<span class="line">  	!只能属于1个VLAN，且该端口不打tag，一般用于连接计算机端口；</span>
<span class="line">  dynamic  Set trunking mode to dynamically negotiate access or trunk mode</span>
<span class="line">  	! auto选项下：只有邻居交换机主动与自己协商时才会变成Trunk接口，所以它是一种被动模式，当邻居接口为Trunk/desirable之一时，才会成为Trunk。如果不能形成trunk模式，则工作在access模式。</span>
<span class="line">  	! desirable选项下：主动与对协商成为Trunk接口的可能性，如果邻居接口模式为Trunk/desirable/auto之一，则接口将变成trunk接口工作。如果不能形成trunk模式，则工作在access模式。</span>
<span class="line">  trunk    Set trunking mode to TRUNK unconditionally</span>
<span class="line">  	!可以允许多个VLAN通过，且该端口都是打tag的，一般用于交换机之间的连接；</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Switch#show vlan							!显示VLAN</span>
<span class="line">VLAN Name                             Status    Ports</span>
<span class="line">---- -------------------------------- --------- -------------------------------</span>
<span class="line">1    default                          active    Fa0/3, Fa0/4, Fa0/5, Fa0/6</span>
<span class="line">                                                Fa0/7, Fa0/8, Fa0/9, Fa0/10</span>
<span class="line">                                                Fa0/11, Fa0/12, Fa0/13, Fa0/14</span>
<span class="line">                                                Fa0/15, Fa0/16, Fa0/17, Fa0/18</span>
<span class="line">                                                Fa0/19, Fa0/20, Fa0/21, Fa0/22</span>
<span class="line">                                                Fa0/23, Gig0/1, Gig0/2</span>
<span class="line">2    VLAN0002                         active    Fa0/1</span>
<span class="line">3    VLAN0003                         active    Fa0/2</span>
<span class="line">1002 fddi-default                     active    </span>
<span class="line">1003 token-ring-default               active    </span>
<span class="line">1004 fddinet-default                  active    </span>
<span class="line">1005 trnet-default                    active    </span>
<span class="line"></span>
<span class="line">VLAN Type  SAID       MTU   Parent RingNo BridgeNo Stp  BrdgMode Trans1 Trans2</span>
<span class="line">---- ----- ---------- ----- ------ ------ -------- ---- -------- ------ ------</span>
<span class="line">1    enet  100001     1500  -      -      -        -    -        0      0</span>
<span class="line">2    enet  100002     1500  -      -      -        -    -        0      0</span>
<span class="line">3    enet  100003     1500  -      -      -        -    -        0      0</span>
<span class="line">1002 fddi  101002     1500  -      -      -        -    -        0      0   </span>
<span class="line">1003 tr    101003     1500  -      -      -        -    -        0      0   </span>
<span class="line">1004 fdnet 101004     1500  -      -      -        ieee -        0      0   </span>
<span class="line">1005 trnet 101005     1500  -      -      -        ibm  -        0      0   </span>
<span class="line"> --More-- </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>配置后： <ul><li>VLAN2：PC1、PC3</li><li>VLAN3：PC2、PC4</li></ul></li></ul><h2 id="测试" tabindex="-1"><a class="header-anchor" href="#测试"><span>测试</span></a></h2><ul><li>从PC1 (192.168.1.2) 测试与PC2、PC3、PC4的连通性</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Packet Tracer PC Command Line 1.0</span>
<span class="line">C:\\&gt;ping 192.168.1.3		!与PC2测试</span>
<span class="line"></span>
<span class="line">Pinging 192.168.1.3 with 32 bytes of data:</span>
<span class="line"></span>
<span class="line">Request timed out.</span>
<span class="line"></span>
<span class="line">Ping statistics for 192.168.1.3:</span>
<span class="line">    Packets: Sent = 1, Received = 0, Lost = 1 (100% loss),</span>
<span class="line"></span>
<span class="line">C:\\&gt;ping 192.168.1.4		!与PC3测试</span>
<span class="line"></span>
<span class="line">Pinging 192.168.1.4 with 32 bytes of data:</span>
<span class="line"></span>
<span class="line">Reply from 192.168.1.4: bytes=32 time&lt;1ms TTL=128</span>
<span class="line"></span>
<span class="line">Ping statistics for 192.168.1.4:</span>
<span class="line">    Packets: Sent = 1, Received = 1, Lost = 0 (0% loss),</span>
<span class="line">Approximate round trip times in milli-seconds:</span>
<span class="line">    Minimum = 0ms, Maximum = 0ms, Average = 0ms</span>
<span class="line"></span>
<span class="line">C:\\&gt;ping 192.168.1.5		!与PC4测试</span>
<span class="line"></span>
<span class="line">Pinging 192.168.1.5 with 32 bytes of data:</span>
<span class="line"></span>
<span class="line">Request timed out.</span>
<span class="line"></span>
<span class="line">Ping statistics for 192.168.1.5:</span>
<span class="line">    Packets: Sent = 1, Received = 0, Lost = 1 (100% loss),</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>从PC4 (192.168.1.5) 测试与PC1、PC2、PC3的连通性</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">C:\\&gt;ping 192.168.1.2		!与PC1测试</span>
<span class="line"></span>
<span class="line">Pinging 192.168.1.2 with 32 bytes of data:</span>
<span class="line"></span>
<span class="line">Request timed out.</span>
<span class="line"></span>
<span class="line">Ping statistics for 192.168.1.2:</span>
<span class="line">    Packets: Sent = 1, Received = 0, Lost = 1 (100% loss),</span>
<span class="line"></span>
<span class="line">C:\\&gt;ping 192.168.1.3		!与PC2测试</span>
<span class="line"></span>
<span class="line">Pinging 192.168.1.3 with 32 bytes of data:</span>
<span class="line"></span>
<span class="line">Reply from 192.168.1.3: bytes=32 time&lt;1ms TTL=128</span>
<span class="line"></span>
<span class="line">Ping statistics for 192.168.1.3:</span>
<span class="line">    Packets: Sent = 1, Received = 1, Lost = 0 (0% loss),</span>
<span class="line">Approximate round trip times in milli-seconds:</span>
<span class="line">    Minimum = 0ms, Maximum = 0ms, Average = 0ms</span>
<span class="line"></span>
<span class="line">C:\\&gt;ping 192.168.1.4		!与PC3测试</span>
<span class="line"></span>
<span class="line">Pinging 192.168.1.4 with 32 bytes of data:</span>
<span class="line"></span>
<span class="line">Request timed out.</span>
<span class="line"></span>
<span class="line">Ping statistics for 192.168.1.4:</span>
<span class="line">    Packets: Sent = 1, Received = 0, Lost = 1 (100% loss),</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18)]))}const r=s(t,[["render",c]]),d=JSON.parse('{"path":"/blogs/xxbj/ciscoPT/test02.html","title":"交换机划分Vlan配置","lang":"en-US","frontmatter":{"title":"交换机划分Vlan配置","date":"2022-01-27T00:00:00.000Z","tags":["路由交换"],"categories":["学习笔记"]},"headers":[{"level":2,"title":"拓扑图及主机IP配置","slug":"拓扑图及主机ip配置","link":"#拓扑图及主机ip配置","children":[]},{"level":2,"title":"划分VLAN、设置Tag VLAN Trunk","slug":"划分vlan、设置tag-vlan-trunk","link":"#划分vlan、设置tag-vlan-trunk","children":[]},{"level":2,"title":"测试","slug":"测试","link":"#测试","children":[]}],"git":{"createdTime":1748156404000,"updatedTime":1748156404000,"contributors":[{"name":"PPPerryPan","email":"perrypan0123@outlook.com","commits":1}]},"filePathRelative":"blogs/xxbj/ciscoPT/test02.md"}');import.meta.webpackHot&&(import.meta.webpackHot.accept(),__VUE_HMR_RUNTIME__.updatePageData&&__VUE_HMR_RUNTIME__.updatePageData(d));export{r as comp,d as data};
