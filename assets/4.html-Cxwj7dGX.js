import{_ as n,c as e,b as i,o as a}from"./app-CUDFWA7u.js";const l="/blog/assets/4.1-CiLxV8X8.png",t="/blog/assets/4.2-DnoY1zaw.png",r={};function d(c,s){return a(),e("div",null,s[0]||(s[0]=[i('<h1 id="快速生成树配置" tabindex="-1"><a class="header-anchor" href="#快速生成树配置"><span>快速生成树配置</span></a></h1><h2 id="例" tabindex="-1"><a class="header-anchor" href="#例"><span>例</span></a></h2><ul><li>背景 <ul><li>学校为了开展计算机教学和网络小公，建立了一个计算机教室和一个校办公区，这两处的计算机网络通过两台交换机互连组成内部校园网，为了提高网络的可靠性，作为网络管理员，你要用2条链路将交换机互连，地要求在交换机上做适当凹置，使网络避免环路。</li></ul></li><li>原理 <ul><li>生成树协议 (spanning-tree)，作用是再交换网络中提供冗余备份链路，并接解决交换网络中的环路问题</li><li>成树协议是利用SPA算法，在存在交换环路的网络中生成一个没有环路的树形网络，运用该算法将交换网络的冗余备份链路从逻辑上断开，当生链路出现故障时，能够自动的切换到备份链路，保证数据的正常转发；生成树协议版本：STP，RSTP（快速生成树）、MSTP（多生成树协议）</li><li>生成树协议的特点收敛时间长。从主要链路出现故障到切换至快速生成树在生成树协议的基础上增加了两种端口角色；替接端口和备份端口，分别做为根端口和指定端口的冗余端口，当根端口出现故障时，冗条端口不需要经过50秒的收敛时间，可以直接切换到替换端口或备份端口，从而实现RSTP协议小于1的快速收敛</li></ul></li><li>步骤 <ul><li>新建packet tracer拓扑图（如图）</li><li>默认情况下STP协议启用的。通过两台交换机之间传送BPDU协议数据单元，选出根交换机、根端口等，以便确定端口的转发状态。上图中标记为黄色的端口处于block堵塞状态设置sto；</li><li>查看交换机show spanning-tree状态，了解根交换机和根端口情况；</li><li>通过更改交换机生成树的优先级spanning-tree vlan * priority 4096可以变化根交换机的角色。</li><li>测试：当主链路处于down状态时候，能够自动的切换到备份链路，保证数据的正常转发。</li></ul></li></ul><h2 id="拓扑及主机ip配置" tabindex="-1"><a class="header-anchor" href="#拓扑及主机ip配置"><span>拓扑及主机IP配置</span></a></h2><p><img src="'+l+`" alt="4.1"></p><h2 id="设置交换机" tabindex="-1"><a class="header-anchor" href="#设置交换机"><span>设置交换机</span></a></h2><ol><li>查看交换机工作状态（此时Switch0的Fa/02处于堵塞状态）</li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Switch&gt;en</span>
<span class="line">Switch#show spanning-tree 				!查看生成树协议</span>
<span class="line">VLAN0001</span>
<span class="line">  Spanning tree enabled protocol ieee</span>
<span class="line">  Root ID    Priority    32769</span>
<span class="line">             Address     00D0.581B.334D</span>
<span class="line">             Cost        19</span>
<span class="line">             Port        1(FastEthernet0/1)</span>
<span class="line">             Hello Time  2 sec  Max Age 20 sec  Forward Delay 15 sec</span>
<span class="line"></span>
<span class="line">  Bridge ID  Priority    32769  (priority 32768 sys-id-ext 1)</span>
<span class="line">             Address     00E0.B009.CCA9</span>
<span class="line">             Hello Time  2 sec  Max Age 20 sec  Forward Delay 15 sec</span>
<span class="line">             Aging Time  20</span>
<span class="line"></span>
<span class="line">Interface        Role Sts Cost      Prio.Nbr Type</span>
<span class="line">---------------- ---- --- --------- -------- --------------------------------</span>
<span class="line">Fa0/10           Desg FWD 19        128.10   P2p</span>
<span class="line">Fa0/1            Root FWD 19        128.1    P2p</span>
<span class="line">Fa0/2            Altn BLK 19        128.2    P2p</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>根交换机：Switch1 <ul><li>根端口：Fa 0/1</li><li>备端口：Fa 0/2</li></ul></li></ul><ol start="2"><li>更改设备名</li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Switch#conf t</span>
<span class="line">Enter configuration commands, one per line.  End with CNTL/Z.</span>
<span class="line">Switch(config)#hostname S0</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>将 Fa0/10 (与PC0相连) 划分到VLAN 10</li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">S0(config)#int fa0/10</span>
<span class="line">S0(config-if)#switchport access vlan 10</span>
<span class="line">% Access VLAN does not exist. Creating vlan 10</span>
<span class="line">S0(config-if)#exit</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>将Fa 0/1、Fa 0/2 工作模式都改为 trunk</li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">S0(config)#int range fa 0/1 - 2</span>
<span class="line">S0(config-if-range)#switchport mode trunk</span>
<span class="line">S0(config-if-range)#exit</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>将生成树模式改为快速生成树协议</li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">S0(config)#spanning-tree mode rapid-pvst </span>
<span class="line">S0(config)#end</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6"><li><strong>S1 同理</strong></li><li>查看spanning-tree</li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">S1#show spanning-tree </span>
<span class="line">VLAN0001</span>
<span class="line">  Spanning tree enabled protocol rstp</span>
<span class="line">  Root ID    Priority    32769</span>
<span class="line">             Address     00D0.581B.334D</span>
<span class="line">             This bridge is the root</span>
<span class="line">             Hello Time  2 sec  Max Age 20 sec  Forward Delay 15 sec</span>
<span class="line"></span>
<span class="line">  Bridge ID  Priority    32769  (priority 32768 sys-id-ext 1)</span>
<span class="line">             Address     00D0.581B.334D</span>
<span class="line">             Hello Time  2 sec  Max Age 20 sec  Forward Delay 15 sec</span>
<span class="line">             Aging Time  20</span>
<span class="line"></span>
<span class="line">Interface        Role Sts Cost      Prio.Nbr Type</span>
<span class="line">---------------- ---- --- --------- -------- --------------------------------</span>
<span class="line">Fa0/1            Desg FWD 19        128.1    P2p</span>
<span class="line">Fa0/2            Desg FWD 19        128.2    P2p</span>
<span class="line"></span>
<span class="line">VLAN0010</span>
<span class="line">  Spanning tree enabled protocol rstp</span>
<span class="line">  Root ID    Priority    32778</span>
<span class="line">             Address     00D0.581B.334D</span>
<span class="line">             This bridge is the root</span>
<span class="line">             Hello Time  2 sec  Max Age 20 sec  Forward Delay 15 sec</span>
<span class="line"></span>
<span class="line">  Bridge ID  Priority    32778  (priority 32768 sys-id-ext 10)</span>
<span class="line">             Address     00D0.581B.334D</span>
<span class="line">             Hello Time  2 sec  Max Age 20 sec  Forward Delay 15 sec</span>
<span class="line"> --More-- </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="测试" tabindex="-1"><a class="header-anchor" href="#测试"><span>测试</span></a></h2><ol><li>PC1 ping PC0</li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">C:\\&gt;ping -t 192.168.1.2</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="2"><li>确认可通后，进入S1，将Fa 0/1关闭</li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">S1#conf t</span>
<span class="line">Enter configuration commands, one per line.  End with CNTL/Z.</span>
<span class="line">S1(config)#int fa 0/1</span>
<span class="line">S1(config-if)#shut</span>
<span class="line"></span>
<span class="line">S1(config-if)#</span>
<span class="line">%LINK-5-CHANGED: Interface FastEthernet0/1, changed state to administratively down</span>
<span class="line"></span>
<span class="line">%LINEPROTO-5-UPDOWN: Line protocol on Interface FastEthernet0/1, changed state to down</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>查看关闭 Fa 0/1 后 PC1 与 PC0 是否依然能正常通信</li></ol><p><img src="`+t+'" alt="4.2"></p>',26)]))}const o=n(r,[["render",d]]),v=JSON.parse('{"path":"/blogs/tech/networking/Cisco/Packet Tracer/Lab/4.html","title":"快速生成树配置","lang":"en-US","frontmatter":{"title":"快速生成树配置","date":"2022-02-03T00:00:00.000Z","tags":["Cisco","Networking"],"categories":["tech"]},"headers":[{"level":2,"title":"例","slug":"例","link":"#例","children":[]},{"level":2,"title":"拓扑及主机IP配置","slug":"拓扑及主机ip配置","link":"#拓扑及主机ip配置","children":[]},{"level":2,"title":"设置交换机","slug":"设置交换机","link":"#设置交换机","children":[]},{"level":2,"title":"测试","slug":"测试","link":"#测试","children":[]}],"git":{"createdTime":1748156404000,"updatedTime":1766826955000,"contributors":[{"name":"PPPerryPan","email":"perrypan0123@outlook.com","commits":1}]},"filePathRelative":"blogs/tech/networking/Cisco/Packet Tracer/Lab/4.md"}');export{o as comp,v as data};
