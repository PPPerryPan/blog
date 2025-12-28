import{_ as s,c as a,b as e,o as i}from"./app-CUDFWA7u.js";const l="/blog/assets/image-20220415143408331-u7--Zw8_.png",p="/blog/assets/image-20220415150017015-BwCN8G9S.png",c="/blog/assets/image-20220415150310091-C6XFmOgC.png",t={};function o(d,n){return i(),a("div",null,n[0]||(n[0]=[e(`<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">title: VLAN 间路由</span>
<span class="line">date: 2022-04-15</span>
<span class="line">tags:</span>
<span class="line">  - Networking</span>
<span class="line">  - Cisco</span>
<span class="line">categories:</span>
<span class="line">  - tech</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="vlan-间路由" tabindex="-1"><a class="header-anchor" href="#vlan-间路由"><span>VLAN 间路由</span></a></h1><h2 id="拓扑" tabindex="-1"><a class="header-anchor" href="#拓扑"><span>拓扑</span></a></h2><p><img src="`+l+`" alt="image-20220415143408331"></p><h2 id="配置交换机" tabindex="-1"><a class="header-anchor" href="#配置交换机"><span>配置交换机</span></a></h2><ul><li><p>创建VLAN</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">Switch<span class="token operator">&gt;</span>en</span>
<span class="line">Switch<span class="token comment">#conf t</span></span>
<span class="line">Enter configuration commands, one per line.  End with CNTL/Z.</span>
<span class="line">Switch<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#host S0</span></span>
<span class="line">S0<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#VLAN 10</span></span>
<span class="line">S0<span class="token punctuation">(</span>config-vlan<span class="token punctuation">)</span><span class="token comment">#name Finance</span></span>
<span class="line">S0<span class="token punctuation">(</span>config-vlan<span class="token punctuation">)</span><span class="token comment">#VLAN 20</span></span>
<span class="line">S0<span class="token punctuation">(</span>config-vlan<span class="token punctuation">)</span><span class="token comment">#name Development</span></span>
<span class="line">S0<span class="token punctuation">(</span>config-vlan<span class="token punctuation">)</span><span class="token comment">#VLAN 30</span></span>
<span class="line">S0<span class="token punctuation">(</span>config-vlan<span class="token punctuation">)</span><span class="token comment">#name Management</span></span>
<span class="line">S0<span class="token punctuation">(</span>config-vlan<span class="token punctuation">)</span><span class="token comment">#exit</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>划分VLAN</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">S0<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#int range f0/1-10</span></span>
<span class="line">S0<span class="token punctuation">(</span>config-if-range<span class="token punctuation">)</span><span class="token comment">#switchport mode access</span></span>
<span class="line">S0<span class="token punctuation">(</span>config-if-range<span class="token punctuation">)</span><span class="token comment">#switchport access VLAN 10</span></span>
<span class="line">S0<span class="token punctuation">(</span>config-if-range<span class="token punctuation">)</span><span class="token comment">#int range f0/11-20</span></span>
<span class="line">S0<span class="token punctuation">(</span>config-if-range<span class="token punctuation">)</span><span class="token comment">#switchport mode access</span></span>
<span class="line">S0<span class="token punctuation">(</span>config-if-range<span class="token punctuation">)</span><span class="token comment">#switchport access VLAN 20</span></span>
<span class="line">S0<span class="token punctuation">(</span>config-if-range<span class="token punctuation">)</span><span class="token comment">#int range f0/21-24</span></span>
<span class="line">S0<span class="token punctuation">(</span>config-if-range<span class="token punctuation">)</span><span class="token comment">#switchport mode access</span></span>
<span class="line">S0<span class="token punctuation">(</span>config-if-range<span class="token punctuation">)</span><span class="token comment">#switchport access VLAN 30</span></span>
<span class="line">S0<span class="token punctuation">(</span>config-if-range<span class="token punctuation">)</span><span class="token comment">#end</span></span>
<span class="line">S0<span class="token comment">#</span></span>
<span class="line">%SYS-5-CONFIG_I: Configured from console by console</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>设置与路由连线的接口为trunk</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">S0<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#int g0/1</span></span>
<span class="line">S0<span class="token punctuation">(</span>config-if<span class="token punctuation">)</span><span class="token comment">#switchport mode trunk</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>查看VLAN信息</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">S0<span class="token comment">#show vlan</span></span>
<span class="line"></span>
<span class="line">VLAN Name                             Status    Ports</span>
<span class="line">---- -------------------------------- --------- -------------------------------</span>
<span class="line"><span class="token number">1</span>    default                          active    Gig0/1, Gig0/2</span>
<span class="line"><span class="token number">10</span>   Finance                          active    Fa0/1, Fa0/2, Fa0/3, Fa0/4</span>
<span class="line">                                                Fa0/5, Fa0/6, Fa0/7, Fa0/8</span>
<span class="line">                                                Fa0/9, Fa0/10</span>
<span class="line"><span class="token number">20</span>   Development                      active    Fa0/11, Fa0/12, Fa0/13, Fa0/14</span>
<span class="line">                                                Fa0/15, Fa0/16, Fa0/17, Fa0/18</span>
<span class="line">                                                Fa0/19, Fa0/20</span>
<span class="line"><span class="token number">30</span>   Management                       active    Fa0/21, Fa0/22, Fa0/23, Fa0/24</span>
<span class="line"><span class="token number">1002</span> fddi-default                     active    </span>
<span class="line"><span class="token number">1003</span> token-ring-default               active    </span>
<span class="line"><span class="token number">1004</span> fddinet-default                  active    </span>
<span class="line"><span class="token number">1005</span> trnet-default                    active    </span>
<span class="line"></span>
<span class="line">VLAN Type  SAID       MTU   Parent RingNo BridgeNo Stp  BrdgMode Trans1 Trans2</span>
<span class="line">---- ----- ---------- ----- ------ ------ -------- ---- -------- ------ ------</span>
<span class="line"><span class="token number">1</span>    enet  <span class="token number">100001</span>     <span class="token number">1500</span>  -      -      -        -    -        <span class="token number">0</span>      <span class="token number">0</span></span>
<span class="line"><span class="token number">10</span>   enet  <span class="token number">100010</span>     <span class="token number">1500</span>  -      -      -        -    -        <span class="token number">0</span>      <span class="token number">0</span></span>
<span class="line"><span class="token number">20</span>   enet  <span class="token number">100020</span>     <span class="token number">1500</span>  -      -      -        -    -        <span class="token number">0</span>      <span class="token number">0</span></span>
<span class="line"><span class="token number">30</span>   enet  <span class="token number">100030</span>     <span class="token number">1500</span>  -      -      -        -    -        <span class="token number">0</span>      <span class="token number">0</span></span>
<span class="line"><span class="token number">1002</span> fddi  <span class="token number">101002</span>     <span class="token number">1500</span>  -      -      -        -    -        <span class="token number">0</span>      <span class="token number">0</span>   </span>
<span class="line"><span class="token number">1003</span> <span class="token function">tr</span>    <span class="token number">101003</span>     <span class="token number">1500</span>  -      -      -        -    -        <span class="token number">0</span>      <span class="token number">0</span>   </span>
<span class="line"><span class="token number">1004</span> fdnet <span class="token number">101004</span>     <span class="token number">1500</span>  -      -      -        ieee -        <span class="token number">0</span>      <span class="token number">0</span>   </span>
<span class="line"><span class="token number">1005</span> trnet <span class="token number">101005</span>     <span class="token number">1500</span>  -      -      -        ibm  -        <span class="token number">0</span>      <span class="token number">0</span>   </span>
<span class="line"></span>
<span class="line">VLAN Type  SAID       MTU   Parent RingNo BridgeNo Stp  BrdgMode Trans1 Trans2</span>
<span class="line">---- ----- ---------- ----- ------ ------ -------- ---- -------- ------ ------</span>
<span class="line"></span>
<span class="line">Remote SPAN VLANs</span>
<span class="line">------------------------------------------------------------------------------</span>
<span class="line"></span>
<span class="line">Primary Secondary Type              Ports</span>
<span class="line">------- --------- ----------------- ------------------------------------------</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="配置路由器" tabindex="-1"><a class="header-anchor" href="#配置路由器"><span>配置路由器</span></a></h2><ul><li><p>启用 g0/0 端口</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">Router<span class="token operator">&gt;</span>en</span>
<span class="line">Router<span class="token comment">#conf t</span></span>
<span class="line">Enter configuration commands, one per line.  End with CNTL/Z.</span>
<span class="line">Router<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#host R0</span></span>
<span class="line">R0<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#int f0/0</span></span>
<span class="line">R0<span class="token punctuation">(</span>config-if<span class="token punctuation">)</span><span class="token comment">#no shut</span></span>
<span class="line"></span>
<span class="line">R0<span class="token punctuation">(</span>config-if<span class="token punctuation">)</span><span class="token comment">#</span></span>
<span class="line">%LINK-5-CHANGED: Interface FastEthernet0/0, changed state to up</span>
<span class="line"></span>
<span class="line">%LINEPROTO-5-UPDOWN: Line protocol on Interface FastEthernet0/0, changed state to up</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>回到 S0，检查Trunk状态</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">S0<span class="token comment">#</span></span>
<span class="line">%LINK-5-CHANGED: Interface GigabitEthernet0/1, changed state to up</span>
<span class="line"></span>
<span class="line">%LINEPROTO-5-UPDOWN: Line protocol on Interface GigabitEthernet0/1, changed state to up</span>
<span class="line"></span>
<span class="line">S0<span class="token comment">#show interfaces trunk </span></span>
<span class="line">Port        Mode         Encapsulation  Status        Native vlan</span>
<span class="line">Gig0/1      on           <span class="token number">802</span>.1q         trunking      <span class="token number">1</span></span>
<span class="line"></span>
<span class="line">Port        Vlans allowed on trunk</span>
<span class="line">Gig0/1      <span class="token number">1</span>-1005</span>
<span class="line"></span>
<span class="line">Port        Vlans allowed and active <span class="token keyword">in</span> management domain</span>
<span class="line">Gig0/1      <span class="token number">1,10</span>,20,30</span>
<span class="line"></span>
<span class="line">Port        Vlans <span class="token keyword">in</span> spanning tree forwarding state and not pruned</span>
<span class="line">Gig0/1      none</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>为R0子接口封装dot1q</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">R0<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#interface f0/0.10</span></span>
<span class="line">R0<span class="token punctuation">(</span>config-subif<span class="token punctuation">)</span><span class="token comment">#</span></span>
<span class="line">%LINK-5-CHANGED: Interface FastEthernet0/0.10, changed state to up</span>
<span class="line"></span>
<span class="line">%LINEPROTO-5-UPDOWN: Line protocol on Interface FastEthernet0/0.10, changed state to up</span>
<span class="line"></span>
<span class="line">R0<span class="token punctuation">(</span>config-subif<span class="token punctuation">)</span><span class="token comment">#encapsulation dot1q 10</span></span>
<span class="line">R0<span class="token punctuation">(</span>config-subif<span class="token punctuation">)</span><span class="token comment">#ip add 10.10.10.1 255.255.255.0</span></span>
<span class="line">R0<span class="token punctuation">(</span>config-subif<span class="token punctuation">)</span><span class="token comment">#exit</span></span>
<span class="line">R0<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#interface f0/0.20</span></span>
<span class="line">R0<span class="token punctuation">(</span>config-subif<span class="token punctuation">)</span><span class="token comment">#</span></span>
<span class="line">%LINK-5-CHANGED: Interface FastEthernet0/0.20, changed state to up</span>
<span class="line"></span>
<span class="line">%LINEPROTO-5-UPDOWN: Line protocol on Interface FastEthernet0/0.20, changed state to up</span>
<span class="line"></span>
<span class="line">R0<span class="token punctuation">(</span>config-subif<span class="token punctuation">)</span><span class="token comment">#encapsulation dot1q 20</span></span>
<span class="line">R0<span class="token punctuation">(</span>config-subif<span class="token punctuation">)</span><span class="token comment">#ip add 10.10.20.1 255.255.255.0</span></span>
<span class="line">R0<span class="token punctuation">(</span>config-subif<span class="token punctuation">)</span><span class="token comment">#exit</span></span>
<span class="line">R0<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#interface f0/0.30</span></span>
<span class="line">R0<span class="token punctuation">(</span>config-subif<span class="token punctuation">)</span><span class="token comment">#</span></span>
<span class="line">%LINK-5-CHANGED: Interface FastEthernet0/0.30, changed state to up</span>
<span class="line"></span>
<span class="line">%LINEPROTO-5-UPDOWN: Line protocol on Interface FastEthernet0/0.30, changed state to up</span>
<span class="line"></span>
<span class="line">R0<span class="token punctuation">(</span>config-subif<span class="token punctuation">)</span><span class="token comment">#encapsulation dot1q 30</span></span>
<span class="line">R0<span class="token punctuation">(</span>config-subif<span class="token punctuation">)</span><span class="token comment">#ip add 10.10.30.1 255.255.255.0</span></span>
<span class="line">R0<span class="token punctuation">(</span>config-subif<span class="token punctuation">)</span><span class="token comment">#end</span></span>
<span class="line">R0<span class="token comment">#</span></span>
<span class="line">%SYS-5-CONFIG_I: Configured from console by console</span>
<span class="line"></span>
<span class="line">R0<span class="token comment">#</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>检测</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">R0<span class="token comment">#show ip interface brief </span></span>
<span class="line">Interface              IP-Address      OK? Method Status                Protocol </span>
<span class="line">FastEthernet0/0        unassigned      YES <span class="token builtin class-name">unset</span>  up                    up </span>
<span class="line">FastEthernet0/0.10     <span class="token number">10.10</span>.10.1      YES manual up                    up </span>
<span class="line">FastEthernet0/0.20     <span class="token number">10.10</span>.20.1      YES manual up                    up </span>
<span class="line">FastEthernet0/0.30     <span class="token number">10.10</span>.30.1      YES manual up                    up </span>
<span class="line">FastEthernet1/0        unassigned      YES <span class="token builtin class-name">unset</span>  administratively down down </span>
<span class="line">Serial2/0              unassigned      YES <span class="token builtin class-name">unset</span>  administratively down down </span>
<span class="line">Serial3/0              unassigned      YES <span class="token builtin class-name">unset</span>  administratively down down </span>
<span class="line">FastEthernet4/0        unassigned      YES <span class="token builtin class-name">unset</span>  administratively down down </span>
<span class="line">FastEthernet5/0        unassigned      YES <span class="token builtin class-name">unset</span>  administratively down down</span>
<span class="line">R0<span class="token comment">#show ip route</span></span>
<span class="line">Codes: C - connected, S - static, I - IGRP, R - RIP, M - mobile, B - BGP</span>
<span class="line">       D - EIGRP, EX - EIGRP external, O - OSPF, IA - OSPF inter area</span>
<span class="line">       N1 - OSPF NSSA external <span class="token builtin class-name">type</span> <span class="token number">1</span>, N2 - OSPF NSSA external <span class="token builtin class-name">type</span> <span class="token number">2</span></span>
<span class="line">       E1 - OSPF external <span class="token builtin class-name">type</span> <span class="token number">1</span>, E2 - OSPF external <span class="token builtin class-name">type</span> <span class="token number">2</span>, E - EGP</span>
<span class="line">       i - IS-IS, L1 - IS-IS level-1, L2 - IS-IS level-2, ia - IS-IS inter area</span>
<span class="line">       * - candidate default, U - per-user static route, o - ODR</span>
<span class="line">       P - periodic downloaded static route</span>
<span class="line"></span>
<span class="line">Gateway of last resort is not <span class="token builtin class-name">set</span></span>
<span class="line"></span>
<span class="line">     <span class="token number">10.0</span>.0.0/24 is subnetted, <span class="token number">3</span> subnets</span>
<span class="line">C       <span class="token number">10.10</span>.10.0 is directly connected, FastEthernet0/0.10</span>
<span class="line">C       <span class="token number">10.10</span>.20.0 is directly connected, FastEthernet0/0.20</span>
<span class="line">C       <span class="token number">10.10</span>.30.0 is directly connected, FastEthernet0/0.30</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>配置DHCP</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">R0<span class="token comment">#en</span></span>
<span class="line">R0<span class="token comment">#conf t</span></span>
<span class="line">Enter configuration commands, one per line.  End with CNTL/Z.</span>
<span class="line">R0<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#ip dhcp pool v10</span></span>
<span class="line">R0<span class="token punctuation">(</span>dhcp-config<span class="token punctuation">)</span><span class="token comment">#network 10.10.10.0 255.255.255.0</span></span>
<span class="line">R0<span class="token punctuation">(</span>dhcp-config<span class="token punctuation">)</span><span class="token comment">#default-router 10.10.10.1</span></span>
<span class="line">R0<span class="token punctuation">(</span>dhcp-config<span class="token punctuation">)</span><span class="token comment">#exit</span></span>
<span class="line">R0<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#ip dhcp pool v20</span></span>
<span class="line">R0<span class="token punctuation">(</span>dhcp-config<span class="token punctuation">)</span><span class="token comment">#network 10.10.20.0 255.255.255.0</span></span>
<span class="line">R0<span class="token punctuation">(</span>dhcp-config<span class="token punctuation">)</span><span class="token comment">#default-router 10.10.20.1</span></span>
<span class="line">R0<span class="token punctuation">(</span>dhcp-config<span class="token punctuation">)</span><span class="token comment">#end</span></span>
<span class="line">R0<span class="token comment">#</span></span>
<span class="line">%SYS-5-CONFIG_I: Configured from console by console</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="测试" tabindex="-1"><a class="header-anchor" href="#测试"><span>测试</span></a></h2><ul><li><p>为 PC0（位于VLAN10），PC2（位于VLAN20） 启用DHCP</p><p><img src="`+p+'" alt="image-20220415150017015"></p></li><li><p>PC0, PC2互ping：</p><p><img src="'+c+'" alt="image-20220415150310091"></p></li></ul>',10)]))}const r=s(t,[["render",o]]),m=JSON.parse('{"path":"/blogs/tech/networking/Cisco/Lab3.html","title":"VLAN 间路由","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"拓扑","slug":"拓扑","link":"#拓扑","children":[]},{"level":2,"title":"配置交换机","slug":"配置交换机","link":"#配置交换机","children":[]},{"level":2,"title":"配置路由器","slug":"配置路由器","link":"#配置路由器","children":[]},{"level":2,"title":"测试","slug":"测试","link":"#测试","children":[]}],"git":{"createdTime":1766826955000,"updatedTime":1766890838000,"contributors":[{"name":"PPPerryPan","email":"perrypan0123@outlook.com","commits":2}]},"filePathRelative":"blogs/tech/networking/Cisco/Lab3.md"}');export{r as comp,m as data};
