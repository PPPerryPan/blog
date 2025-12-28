import{_ as s,c as a,b as e,o as i}from"./app-CUDFWA7u.js";const l="/blog/assets/image-20220509161738565-PGjmSZl-.png",p="/blog/assets/image-20220509161807071-CQaWvL9v.png",t="/blog/assets/image-20220509145445122-BNaUcMKh.png",c="/blog/assets/image-20220509150556765-Cl0kfgGg.png",o="/blog/assets/image-20220509172527117-D8UcTFeE.png",u="/blog/assets/image-20220509172544360-D0gWDO7l.png",d="/blog/assets/image-20220509172735784-CRXekCBD.png",r={};function m(v,n){return i(),a("div",null,n[0]||(n[0]=[e(`<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">title: 静态路由&amp;动态路由</span>
<span class="line">date: 2022-05-19</span>
<span class="line">tags:</span>
<span class="line">  - Networking</span>
<span class="line">  - Cisco</span>
<span class="line">categories:</span>
<span class="line">  - tech</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="静态路由-动态路由" tabindex="-1"><a class="header-anchor" href="#静态路由-动态路由"><span>静态路由+动态路由</span></a></h1><h2 id="拓扑" tabindex="-1"><a class="header-anchor" href="#拓扑"><span>拓扑</span></a></h2><p>例图：</p><p><img src="`+l+'" alt="image-20220509161738565"></p><p>实际图（除出入端口外，其他与例图一致）：</p><p><img src="'+p+`" alt="image-20220509161807071"></p><h3 id="switch0-配置" tabindex="-1"><a class="header-anchor" href="#switch0-配置"><span>Switch0 配置</span></a></h3><ul><li>设置与路由连线的接口为trunk</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">Switch<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#int g0/1</span></span>
<span class="line">Switch<span class="token punctuation">(</span>config-if<span class="token punctuation">)</span><span class="token comment">#switchport mode trunk </span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>划分VLAN</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">Switch<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#VLAN 10</span></span>
<span class="line">Switch<span class="token punctuation">(</span>config-vlan<span class="token punctuation">)</span><span class="token comment">#name Finance</span></span>
<span class="line">Switch<span class="token punctuation">(</span>config-vlan<span class="token punctuation">)</span><span class="token comment">#VLAN 20</span></span>
<span class="line">Switch<span class="token punctuation">(</span>config-vlan<span class="token punctuation">)</span><span class="token comment">#name Student</span></span>
<span class="line"></span>
<span class="line">Switch<span class="token punctuation">(</span>config-if<span class="token punctuation">)</span><span class="token comment">#int fa 0/1</span></span>
<span class="line">Switch<span class="token punctuation">(</span>config-if<span class="token punctuation">)</span><span class="token comment">#switchport access vlan 10</span></span>
<span class="line">% Access VLAN does not exist. Creating vlan <span class="token number">10</span></span>
<span class="line">Switch<span class="token punctuation">(</span>config-if<span class="token punctuation">)</span><span class="token comment">#switchport mode access </span></span>
<span class="line"></span>
<span class="line">Switch<span class="token punctuation">(</span>config-if<span class="token punctuation">)</span><span class="token comment">#int fa0/24</span></span>
<span class="line">Switch<span class="token punctuation">(</span>config-if<span class="token punctuation">)</span><span class="token comment">#switchport access vlan 20</span></span>
<span class="line">% Access VLAN does not exist. Creating vlan <span class="token number">20</span></span>
<span class="line">Switch<span class="token punctuation">(</span>config-if<span class="token punctuation">)</span><span class="token comment">#switchport mode access </span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>查看VLAN信息</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">Switch<span class="token comment">#show vlan</span></span>
<span class="line"></span>
<span class="line">VLAN Name                             Status    Ports</span>
<span class="line">---- -------------------------------- --------- -------------------------------</span>
<span class="line"><span class="token number">1</span>    default                          active    Fa0/2, Fa0/3, Fa0/4, Fa0/5</span>
<span class="line">                                                Fa0/6, Fa0/7, Fa0/8, Fa0/9</span>
<span class="line">                                                Fa0/10, Fa0/11, Fa0/12, Fa0/13</span>
<span class="line">                                                Fa0/14, Fa0/15, Fa0/16, Fa0/17</span>
<span class="line">                                                Fa0/18, Fa0/19, Fa0/20, Fa0/21</span>
<span class="line">                                                Fa0/22, Fa0/23, Gig0/1, Gig0/2</span>
<span class="line"><span class="token number">10</span>   Finance                          active    Fa0/1</span>
<span class="line"><span class="token number">20</span>   Student                          active    Fa0/24</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="router7-配置" tabindex="-1"><a class="header-anchor" href="#router7-配置"><span>Router7 配置</span></a></h3><ul><li>启用到 S0 的端口</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">Router<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#host R7</span></span>
<span class="line">R7<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#int fa0/0</span></span>
<span class="line">R7<span class="token punctuation">(</span>config-if<span class="token punctuation">)</span><span class="token comment">#no shut</span></span>
<span class="line"></span>
<span class="line">R7<span class="token punctuation">(</span>config-if<span class="token punctuation">)</span><span class="token comment">#</span></span>
<span class="line">%LINK-5-CHANGED: Interface FastEthernet0/0, changed state to up</span>
<span class="line"></span>
<span class="line">%LINEPROTO-5-UPDOWN: Line protocol on Interface FastEthernet0/0, changed state to up</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>回到 S0 检查 Trunk 状态</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">Switch<span class="token comment">#show interfaces trunk </span></span>
<span class="line">Port        Mode         Encapsulation  Status        Native vlan</span>
<span class="line">Gig0/1      on           <span class="token number">802</span>.1q         trunking      <span class="token number">1</span></span>
<span class="line"></span>
<span class="line">Port        Vlans allowed on trunk</span>
<span class="line">Gig0/1      <span class="token number">1</span>-1005</span>
<span class="line"></span>
<span class="line">Port        Vlans allowed and active <span class="token keyword">in</span> management domain</span>
<span class="line">Gig0/1      <span class="token number">1,10</span>,20</span>
<span class="line"></span>
<span class="line">Port        Vlans <span class="token keyword">in</span> spanning tree forwarding state and not pruned</span>
<span class="line">Gig0/1      none</span>
<span class="line"></span>
<span class="line">Switch<span class="token comment">#show interfaces trunk </span></span>
<span class="line">Port        Mode         Encapsulation  Status        Native vlan</span>
<span class="line">Gig0/1      on           <span class="token number">802</span>.1q         trunking      <span class="token number">1</span></span>
<span class="line"></span>
<span class="line">Port        Vlans allowed on trunk</span>
<span class="line">Gig0/1      <span class="token number">1</span>-1005</span>
<span class="line"></span>
<span class="line">Port        Vlans allowed and active <span class="token keyword">in</span> management domain</span>
<span class="line">Gig0/1      <span class="token number">1,10</span>,20</span>
<span class="line"></span>
<span class="line">Port        Vlans <span class="token keyword">in</span> spanning tree forwarding state and not pruned</span>
<span class="line">Gig0/1      <span class="token number">1,10</span>,20</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>为 R7 子接口封装dot1q</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">R7<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#int fa 0/0.10</span></span>
<span class="line">R7<span class="token punctuation">(</span>config-subif<span class="token punctuation">)</span><span class="token comment">#</span></span>
<span class="line">%LINK-5-CHANGED: Interface FastEthernet0/0.10, changed state to up</span>
<span class="line"></span>
<span class="line">%LINEPROTO-5-UPDOWN: Line protocol on Interface FastEthernet0/0.10, changed state to up</span>
<span class="line"></span>
<span class="line">R7<span class="token punctuation">(</span>config-subif<span class="token punctuation">)</span><span class="token comment">#encapsulation dot1Q 10</span></span>
<span class="line">R7<span class="token punctuation">(</span>config-subif<span class="token punctuation">)</span><span class="token comment">#ip add 172.16.0.10 255.255.255.248</span></span>
<span class="line">R7<span class="token punctuation">(</span>config-subif<span class="token punctuation">)</span><span class="token comment">#exit</span></span>
<span class="line"></span>
<span class="line">R7<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#int fa0/0.20</span></span>
<span class="line">R7<span class="token punctuation">(</span>config-subif<span class="token punctuation">)</span><span class="token comment">#</span></span>
<span class="line">%LINK-5-CHANGED: Interface FastEthernet0/0.20, changed state to up</span>
<span class="line"></span>
<span class="line">%LINEPROTO-5-UPDOWN: Line protocol on Interface FastEthernet0/0.20, changed state to up</span>
<span class="line"></span>
<span class="line">R7<span class="token punctuation">(</span>config-subif<span class="token punctuation">)</span><span class="token comment">#ip add 172.16.0.20 255.255.255.248</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>检测状态</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">R7<span class="token comment">#show ip interface brief</span></span>
<span class="line">Interface              IP-Address      OK? Method Status                Protocol </span>
<span class="line">FastEthernet0/0        unassigned      YES <span class="token builtin class-name">unset</span>  up                    up </span>
<span class="line">FastEthernet0/0.10     <span class="token number">172.16</span>.0.10     YES manual up                    up </span>
<span class="line">FastEthernet0/0.20     <span class="token number">172.16</span>.0.20     YES manual up                    up </span>
<span class="line">FastEthernet1/0        unassigned      YES <span class="token builtin class-name">unset</span>  administratively down down </span>
<span class="line">Serial2/0              unassigned      YES <span class="token builtin class-name">unset</span>  administratively down down </span>
<span class="line">Serial3/0              unassigned      YES <span class="token builtin class-name">unset</span>  administratively down down </span>
<span class="line">FastEthernet4/0        unassigned      YES <span class="token builtin class-name">unset</span>  administratively down down </span>
<span class="line">FastEthernet5/0        unassigned      YES <span class="token builtin class-name">unset</span>  administratively down down</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>测试单臂路由</li></ul><p>填好对应IP后，PC间互ping：</p><p><img src="`+t+`" alt="image-20220509145445122"></p><h3 id="router4-配置" tabindex="-1"><a class="header-anchor" href="#router4-配置"><span>Router4 配置</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">Router<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#host R4</span></span>
<span class="line">R4<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#</span></span>
<span class="line">R4<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#int fa0/0</span></span>
<span class="line">R4<span class="token punctuation">(</span>config-if<span class="token punctuation">)</span><span class="token comment">#ip add 202.96.128.85</span></span>
<span class="line">% Incomplete command.</span>
<span class="line">R4<span class="token punctuation">(</span>config-if<span class="token punctuation">)</span><span class="token comment">#ip add 202.96.128.85 255.255.255.252</span></span>
<span class="line">R4<span class="token punctuation">(</span>config-if<span class="token punctuation">)</span><span class="token comment">#no shut</span></span>
<span class="line"></span>
<span class="line">R4<span class="token punctuation">(</span>config-if<span class="token punctuation">)</span><span class="token comment">#</span></span>
<span class="line">%LINK-5-CHANGED: Interface FastEthernet0/0, changed state to up</span>
<span class="line"></span>
<span class="line">%LINEPROTO-5-UPDOWN: Line protocol on Interface FastEthernet0/0, changed state to up</span>
<span class="line"></span>
<span class="line">R4<span class="token punctuation">(</span>config-if<span class="token punctuation">)</span><span class="token comment">#int s2/0</span></span>
<span class="line">R4<span class="token punctuation">(</span>config-if<span class="token punctuation">)</span><span class="token comment">#ip add 202.96.128.82 255.255.255.252</span></span>
<span class="line">R4<span class="token punctuation">(</span>config-if<span class="token punctuation">)</span><span class="token comment">#no shut</span></span>
<span class="line"></span>
<span class="line">R4<span class="token punctuation">(</span>config-if<span class="token punctuation">)</span><span class="token comment">#</span></span>
<span class="line">%LINK-5-CHANGED: Interface Serial2/0, changed state to up</span>
<span class="line"></span>
<span class="line">R4<span class="token punctuation">(</span>config-if<span class="token punctuation">)</span><span class="token comment">#</span></span>
<span class="line">%LINEPROTO-5-UPDOWN: Line protocol on Interface Serial2/0, changed state to up</span>
<span class="line"></span>
<span class="line">R4<span class="token punctuation">(</span>config-if<span class="token punctuation">)</span><span class="token comment">#exit</span></span>
<span class="line">R4<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#</span></span>
<span class="line">R4<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#ip route 0.0.0.0 0.0.0.0 Seria0/0^Z</span></span>
<span class="line">R4<span class="token comment">#</span></span>
<span class="line">%SYS-5-CONFIG_I: Configured from console by console</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>此时 到 Router5 中启用对应端口</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">Router<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#host R5</span></span>
<span class="line">R5<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#int s2/0</span></span>
<span class="line">R5<span class="token punctuation">(</span>config-if<span class="token punctuation">)</span><span class="token comment">#no shut</span></span>
<span class="line"></span>
<span class="line">R5<span class="token punctuation">(</span>config-if<span class="token punctuation">)</span><span class="token comment">#</span></span>
<span class="line">%LINK-5-CHANGED: Interface Serial2/0, changed state to up</span>
<span class="line"></span>
<span class="line">%LINEPROTO-5-UPDOWN: Line protocol on Interface Serial2/0, changed state to up</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Router4 中提示线路状态改变为 Up</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">%LINK-5-CHANGED: Interface Serial2/0, changed state to up</span>
<span class="line"></span>
<span class="line">%LINEPROTO-5-UPDOWN: Line protocol on Interface Serial2/0, changed state to up</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Router4 配置缺省路由</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">R4<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#ip route 0.0.0.0 0.0.0.0 S2/0</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="router5-配置" tabindex="-1"><a class="header-anchor" href="#router5-配置"><span>Router5 配置</span></a></h3><ul><li>配置IP</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">R5<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#int S2/0</span></span>
<span class="line">R5<span class="token punctuation">(</span>config-if<span class="token punctuation">)</span><span class="token comment">#ip add 202.96.128.81 255.255.255.252</span></span>
<span class="line">R5<span class="token punctuation">(</span>config-if<span class="token punctuation">)</span><span class="token comment">#int s3/0</span></span>
<span class="line">R5<span class="token punctuation">(</span>config-if<span class="token punctuation">)</span><span class="token comment">#ip add 10.10.10.2 255.255.255.252</span></span>
<span class="line">R5<span class="token punctuation">(</span>config-if<span class="token punctuation">)</span><span class="token comment">#no shut </span></span>
<span class="line"></span>
<span class="line">%LINK-5-CHANGED: Interface Serial3/0, changed state to down</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>配置缺省路由与OSPF</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">R5<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#ip route 0.0.0.0 0.0.0.0 S2/0</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>Server0 IP 配置</li></ul><p><img src="`+c+`" alt="image-20220509150556765"></p><h3 id="router6-配置" tabindex="-1"><a class="header-anchor" href="#router6-配置"><span>Router6 配置</span></a></h3><ul><li>IP 配置</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">Router<span class="token punctuation">(</span>config-if<span class="token punctuation">)</span><span class="token comment">#int s2/0</span></span>
<span class="line">Router<span class="token punctuation">(</span>config-if<span class="token punctuation">)</span><span class="token comment">#ip add 10.10.10.2 255.255.255.252</span></span>
<span class="line">Router<span class="token punctuation">(</span>config-if<span class="token punctuation">)</span><span class="token comment">#no shut</span></span>
<span class="line"></span>
<span class="line">Router<span class="token punctuation">(</span>config-if<span class="token punctuation">)</span><span class="token comment">#</span></span>
<span class="line">%LINK-5-CHANGED: Interface Serial2/0, changed state to up</span>
<span class="line"></span>
<span class="line">%LINEPROTO-5-UPDOWN: Line protocol on Interface Serial2/0, changed state to up</span>
<span class="line"></span>
<span class="line">Router<span class="token punctuation">(</span>config-if<span class="token punctuation">)</span><span class="token comment">#int s3/0</span></span>
<span class="line">Router<span class="token punctuation">(</span>config-if<span class="token punctuation">)</span><span class="token comment">#ip add 10.10.20.2 255.255.255.252</span></span>
<span class="line">Router<span class="token punctuation">(</span>config-if<span class="token punctuation">)</span><span class="token comment">#no shut</span></span>
<span class="line">Router<span class="token punctuation">(</span>config-if<span class="token punctuation">)</span><span class="token comment">#</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>OSPF配置</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">Router<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#router ospf 1</span></span>
<span class="line">Router<span class="token punctuation">(</span>config-router<span class="token punctuation">)</span><span class="token comment">#network 10.10.10.0 0.0.0.3 area 0</span></span>
<span class="line">Router<span class="token punctuation">(</span>config-router<span class="token punctuation">)</span><span class="token comment">#</span></span>
<span class="line">00:59:18: %OSPF-5-ADJCHG: Process <span class="token number">1</span>, Nbr <span class="token number">202.96</span>.128.81 on Serial2/0 from LOADING to FULL, Loading Done</span>
<span class="line"></span>
<span class="line">Router<span class="token punctuation">(</span>config-router<span class="token punctuation">)</span><span class="token comment">#network 10.10.20.0 0.0.0.3 area 0</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="继续配置-router7" tabindex="-1"><a class="header-anchor" href="#继续配置-router7"><span>继续配置 Router7</span></a></h3><ul><li>IP配置</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">R7<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#int s2/0</span></span>
<span class="line">R7<span class="token punctuation">(</span>config-if<span class="token punctuation">)</span><span class="token comment">#ip add 10.10.20.1 255.255.255.252</span></span>
<span class="line">R7<span class="token punctuation">(</span>config-if<span class="token punctuation">)</span><span class="token comment">#no shut</span></span>
<span class="line"></span>
<span class="line">R7<span class="token punctuation">(</span>config-if<span class="token punctuation">)</span><span class="token comment">#</span></span>
<span class="line">%LINK-5-CHANGED: Interface Serial2/0, changed state to up</span>
<span class="line"></span>
<span class="line">%LINEPROTO-5-UPDOWN: Line protocol on Interface Serial2/0, changed state to up</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>OSPF配置</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">R7<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#router ospf 1</span></span>
<span class="line">R7<span class="token punctuation">(</span>config-router<span class="token punctuation">)</span><span class="token comment">#network 10.10.20.0 0.0.0.3 area 0</span></span>
<span class="line">R7<span class="token punctuation">(</span>config-router<span class="token punctuation">)</span><span class="token comment">#network 172.16.0.8 0.0.0.7 area 0</span></span>
<span class="line">R7<span class="token punctuation">(</span>config-router<span class="token punctuation">)</span><span class="token comment">#network 172.16.0.16 0.0.0.7 area 0</span></span>
<span class="line">R7<span class="token punctuation">(</span>config-router<span class="token punctuation">)</span><span class="token comment">#</span></span>
<span class="line">01:01:59: %OSPF-5-ADJCHG: Process <span class="token number">1</span>, Nbr <span class="token number">10.10</span>.20.2 on Serial2/0 from LOADING to FULL, Loading Done</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="测试" tabindex="-1"><a class="header-anchor" href="#测试"><span>测试</span></a></h2><p>三台设备IP &amp; 互ping</p><p><img src="`+o+'" alt="image-20220509172527117"></p><p>Server0 配置DNS</p><p><img src="'+u+'" alt="image-20220509172544360"></p><p>Server0 配置HTTP服务，并在PC0、Laptop0上分别以 IP 及 URL方式访问</p><p><img src="'+d+'" alt="image-20220509172735784"></p>',58)]))}const k=s(r,[["render",m]]),g=JSON.parse('{"path":"/blogs/tech/networking/Cisco/Lab4.html","title":"静态路由+动态路由","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"拓扑","slug":"拓扑","link":"#拓扑","children":[{"level":3,"title":"Switch0 配置","slug":"switch0-配置","link":"#switch0-配置","children":[]},{"level":3,"title":"Router7 配置","slug":"router7-配置","link":"#router7-配置","children":[]},{"level":3,"title":"Router4 配置","slug":"router4-配置","link":"#router4-配置","children":[]},{"level":3,"title":"Router5 配置","slug":"router5-配置","link":"#router5-配置","children":[]},{"level":3,"title":"Router6 配置","slug":"router6-配置","link":"#router6-配置","children":[]},{"level":3,"title":"继续配置 Router7","slug":"继续配置-router7","link":"#继续配置-router7","children":[]}]},{"level":2,"title":"测试","slug":"测试","link":"#测试","children":[]}],"git":{"createdTime":1766826955000,"updatedTime":1766890838000,"contributors":[{"name":"PPPerryPan","email":"perrypan0123@outlook.com","commits":2}]},"filePathRelative":"blogs/tech/networking/Cisco/Lab4.md"}');export{k as comp,g as data};
