import{_ as s,c as a,b as e,o as i}from"./app-CUDFWA7u.js";const l="/blog/assets/image-20250602211537608-17488703087971-Bwc7_0cR.png",c={};function p(d,n){return i(),a("div",null,n[0]||(n[0]=[e('<h2 id="拓扑" tabindex="-1"><a class="header-anchor" href="#拓扑"><span>拓扑</span></a></h2><p><img src="'+l+`" alt="image-20250602211537608"></p><blockquote><p>此处所有 AR 均为 AR2200</p></blockquote><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2><h3 id="ip-规划-配置" tabindex="-1"><a class="header-anchor" href="#ip-规划-配置"><span>IP 规划 &amp; 配置</span></a></h3><p>AR1 ~ AR2 = 12.0.0.0/24</p><p>AR3 ~ AR3 = 13.0.0.0/24</p><blockquote><p>省略配置过程</p></blockquote><h3 id="配置路由" tabindex="-1"><a class="header-anchor" href="#配置路由"><span>配置路由</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token punctuation">[</span>AR1<span class="token punctuation">]</span>ip route-static <span class="token number">6.6</span>.6.6 <span class="token number">255.255</span>.255.255 <span class="token number">12.0</span>.0.2</span>
<span class="line"><span class="token punctuation">[</span>AR1<span class="token punctuation">]</span>ip route-static <span class="token number">6.6</span>.6.6 <span class="token number">255.255</span>.255.255 <span class="token number">12.0</span>.0.3 preference <span class="token number">100</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>这时候把 AR2 G0/0/1 DOWN 掉，preference 100 的路由不会生效，</p><p>因为 AR 1 G0/0/1 还是 Up 状态，这时候无法与 6.6.6.6 连通。</p><p>这种情况下 需要利用 bfd 或 nqa 探测，确保浮动路由正常工作</p><h3 id="配置-bfd" tabindex="-1"><a class="header-anchor" href="#配置-bfd"><span>配置 BFD</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token punctuation">[</span>AR1<span class="token punctuation">]</span>bfd		<span class="token comment"># 启用 bfd</span></span>
<span class="line"><span class="token punctuation">[</span>AR1-bfd<span class="token punctuation">]</span>quit</span>
<span class="line"></span>
<span class="line"><span class="token punctuation">[</span>AR1<span class="token punctuation">]</span>bfd <span class="token builtin class-name">test</span> <span class="token builtin class-name">bind</span> peer-ip <span class="token number">12.0</span>.0.2 interface GigabitEthernet <span class="token number">0</span>/0/1 one-arm-echo	<span class="token comment"># 创建会话 test，从G 0/0/1 单向检测 12.0.0.2</span></span>
<span class="line"><span class="token punctuation">[</span>AR1-bfd-session-test<span class="token punctuation">]</span>discriminator <span class="token builtin class-name">local</span> <span class="token number">1</span>		<span class="token comment"># 本地标识符，单向检测中无意义</span></span>
<span class="line"><span class="token punctuation">[</span>AR1-bfd-session-test<span class="token punctuation">]</span>min-echo-rx-interval <span class="token number">100</span>	<span class="token comment"># 每 100ms 检测一次</span></span>
<span class="line"><span class="token punctuation">[</span>AR1-bfd-session-test<span class="token punctuation">]</span>commit	<span class="token comment"># 提交会话配置</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">[</span>AR1<span class="token punctuation">]</span>dis bfd session all </span>
<span class="line">--------------------------------------------------------------------------------</span>
<span class="line">Local Remote     PeerIpAddr      State     Type        InterfaceName            </span>
<span class="line">--------------------------------------------------------------------------------</span>
<span class="line"></span>
<span class="line"><span class="token number">1</span>     -          <span class="token number">12.0</span>.0.2        Up        S_IP_IF     GigabitEthernet0/0/1     </span>
<span class="line">--------------------------------------------------------------------------------</span>
<span class="line">     Total UP/DOWN Session Number <span class="token builtin class-name">:</span> <span class="token number">1</span>/0</span>
<span class="line">     </span>
<span class="line"><span class="token punctuation">[</span>AR1<span class="token punctuation">]</span>ip route-static <span class="token number">6.6</span>.6.6 <span class="token number">32</span> <span class="token number">12.0</span>.0.2 track bfd-session <span class="token builtin class-name">test</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这时候再把 AR2 G0/0/1 DOWN 掉，preference 100 的路由自动生效</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token punctuation">[</span>AR1<span class="token punctuation">]</span>dis bfd session all </span>
<span class="line">--------------------------------------------------------------------------------</span>
<span class="line">Local Remote     PeerIpAddr      State     Type        InterfaceName            </span>
<span class="line">--------------------------------------------------------------------------------</span>
<span class="line"></span>
<span class="line"><span class="token number">1</span>     -          <span class="token number">12.0</span>.0.2        Down      S_IP_IF     GigabitEthernet0/0/1     </span>
<span class="line">--------------------------------------------------------------------------------</span>
<span class="line">     Total UP/DOWN Session Number <span class="token builtin class-name">:</span> <span class="token number">0</span>/1</span>
<span class="line"></span>
<span class="line"><span class="token punctuation">[</span>AR1<span class="token punctuation">]</span>dis <span class="token function">ip</span> routing-table <span class="token number">6.6</span>.6.6</span>
<span class="line">Route Flags: R - relay, D - download to fib</span>
<span class="line">------------------------------------------------------------------------------</span>
<span class="line">Routing Table <span class="token builtin class-name">:</span> Public</span>
<span class="line">Summary Count <span class="token builtin class-name">:</span> <span class="token number">1</span></span>
<span class="line">Destination/Mask    Proto   Pre  Cost      Flags NextHop         Interface</span>
<span class="line"></span>
<span class="line">        <span class="token number">6.6</span>.6.6/32  Static  <span class="token number">100</span>  <span class="token number">0</span>          RD   <span class="token number">12.0</span>.0.3        GigabitEthernet0/0/1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置汇总" tabindex="-1"><a class="header-anchor" href="#配置汇总"><span>配置汇总</span></a></h2><h3 id="ar1" tabindex="-1"><a class="header-anchor" href="#ar1"><span>AR1</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&lt;AR1&gt;dis current-configuration </span>
<span class="line">[V200R003C00]</span>
<span class="line">#</span>
<span class="line"> sysname AR1</span>
<span class="line">#</span>
<span class="line"> snmp-agent local-engineid 800007DB03000000000000</span>
<span class="line"> snmp-agent </span>
<span class="line">#</span>
<span class="line"> clock timezone China-Standard-Time minus 08:00:00</span>
<span class="line">#</span>
<span class="line">portal local-server load portalpage.zip</span>
<span class="line">#</span>
<span class="line"> drop illegal-mac alarm</span>
<span class="line">#</span>
<span class="line"> set cpu-usage threshold 80 restore 75</span>
<span class="line">#</span>
<span class="line">bfd</span>
<span class="line">#</span>
<span class="line">aaa </span>
<span class="line"> authentication-scheme default</span>
<span class="line"> authorization-scheme default</span>
<span class="line"> accounting-scheme default</span>
<span class="line"> domain default </span>
<span class="line"> domain default_admin </span>
<span class="line"> local-user admin password cipher %$%$K8m.Nt84DZ}e#&lt;0\`8bmE3Uw}%$%$</span>
<span class="line"> local-user admin service-type http</span>
<span class="line">#</span>
<span class="line">firewall zone Local</span>
<span class="line"> priority 15</span>
<span class="line">#</span>
<span class="line">interface GigabitEthernet0/0/0</span>
<span class="line">#</span>
<span class="line">interface GigabitEthernet0/0/1</span>
<span class="line"> ip address 12.0.0.1 255.255.255.0 </span>
<span class="line">#</span>
<span class="line">interface GigabitEthernet0/0/2</span>
<span class="line"> ip address 13.0.0.1 255.255.255.0 </span>
<span class="line">#</span>
<span class="line">interface NULL0</span>
<span class="line">#</span>
<span class="line">bfd test bind peer-ip 12.0.0.2 interface GigabitEthernet0/0/1 one-arm-echo</span>
<span class="line"> discriminator local 1</span>
<span class="line"> min-echo-rx-interval 100</span>
<span class="line"> commit</span>
<span class="line">#</span>
<span class="line">ip route-static 6.6.6.6 255.255.255.255 12.0.0.2 track bfd-session test</span>
<span class="line">ip route-static 6.6.6.6 255.255.255.255 12.0.0.3 preference 100</span>
<span class="line">#</span>
<span class="line">user-interface con 0</span>
<span class="line"> authentication-mode password</span>
<span class="line">user-interface vty 0 4</span>
<span class="line">user-interface vty 16 20</span>
<span class="line">#</span>
<span class="line">wlan ac</span>
<span class="line">#</span>
<span class="line">return</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ar2" tabindex="-1"><a class="header-anchor" href="#ar2"><span>AR2</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&lt;AR2&gt;dis cur</span>
<span class="line">[V200R003C00]</span>
<span class="line">#</span>
<span class="line"> sysname AR2</span>
<span class="line">#</span>
<span class="line"> snmp-agent local-engineid 800007DB03000000000000</span>
<span class="line"> snmp-agent </span>
<span class="line">#</span>
<span class="line"> clock timezone China-Standard-Time minus 08:00:00</span>
<span class="line">#</span>
<span class="line">portal local-server load portalpage.zip</span>
<span class="line">#</span>
<span class="line"> drop illegal-mac alarm</span>
<span class="line">#</span>
<span class="line"> set cpu-usage threshold 80 restore 75</span>
<span class="line">#</span>
<span class="line">aaa </span>
<span class="line"> authentication-scheme default</span>
<span class="line"> authorization-scheme default</span>
<span class="line"> accounting-scheme default</span>
<span class="line"> domain default </span>
<span class="line"> domain default_admin </span>
<span class="line"> local-user admin password cipher %$%$K8m.Nt84DZ}e#&lt;0\`8bmE3Uw}%$%$</span>
<span class="line"> local-user admin service-type http</span>
<span class="line">#</span>
<span class="line">firewall zone Local</span>
<span class="line"> priority 15</span>
<span class="line">#</span>
<span class="line">interface GigabitEthernet0/0/0</span>
<span class="line">#</span>
<span class="line">interface GigabitEthernet0/0/1</span>
<span class="line"> shutdown</span>
<span class="line"> ip address 12.0.0.2 255.255.255.0 </span>
<span class="line">#</span>
<span class="line">interface GigabitEthernet0/0/2</span>
<span class="line">#</span>
<span class="line">interface NULL0</span>
<span class="line">#</span>
<span class="line">interface LoopBack0</span>
<span class="line"> ip address 6.6.6.6 255.255.255.255 </span>
<span class="line">#</span>
<span class="line">user-interface con 0</span>
<span class="line"> authentication-mode password</span>
<span class="line">user-interface vty 0 4</span>
<span class="line">user-interface vty 16 20</span>
<span class="line">#</span>
<span class="line">wlan ac</span>
<span class="line">#</span>
<span class="line">return</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ar3" tabindex="-1"><a class="header-anchor" href="#ar3"><span>AR3</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&lt;AR3&gt;dis cur</span>
<span class="line">[V200R003C00]</span>
<span class="line">#</span>
<span class="line"> sysname AR3</span>
<span class="line">#</span>
<span class="line"> snmp-agent local-engineid 800007DB03000000000000</span>
<span class="line"> snmp-agent </span>
<span class="line">#</span>
<span class="line"> clock timezone China-Standard-Time minus 08:00:00</span>
<span class="line">#</span>
<span class="line">portal local-server load portalpage.zip</span>
<span class="line">#</span>
<span class="line"> drop illegal-mac alarm</span>
<span class="line">#</span>
<span class="line"> set cpu-usage threshold 80 restore 75</span>
<span class="line">#</span>
<span class="line">aaa </span>
<span class="line"> authentication-scheme default</span>
<span class="line"> authorization-scheme default</span>
<span class="line"> accounting-scheme default</span>
<span class="line"> domain default </span>
<span class="line"> domain default_admin </span>
<span class="line"> local-user admin password cipher %$%$K8m.Nt84DZ}e#&lt;0\`8bmE3Uw}%$%$</span>
<span class="line"> local-user admin service-type http</span>
<span class="line">#</span>
<span class="line">firewall zone Local</span>
<span class="line"> priority 15</span>
<span class="line">#</span>
<span class="line">interface GigabitEthernet0/0/0</span>
<span class="line">#</span>
<span class="line">interface GigabitEthernet0/0/1</span>
<span class="line"> ip address 13.0.0.3 255.255.255.0 </span>
<span class="line">#</span>
<span class="line">interface GigabitEthernet0/0/2</span>
<span class="line">#</span>
<span class="line">interface NULL0</span>
<span class="line">#</span>
<span class="line">interface LoopBack0</span>
<span class="line"> ip address 6.6.6.6 255.255.255.255 </span>
<span class="line">#</span>
<span class="line">user-interface con 0</span>
<span class="line"> authentication-mode password</span>
<span class="line">user-interface vty 0 4</span>
<span class="line">user-interface vty 16 20</span>
<span class="line">#</span>
<span class="line">wlan ac</span>
<span class="line">#</span>
<span class="line">return</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="附录" tabindex="-1"><a class="header-anchor" href="#附录"><span>附录</span></a></h2><h3 id="bfd-vs-nqa" tabindex="-1"><a class="header-anchor" href="#bfd-vs-nqa"><span>BFD vs NQA</span></a></h3><table><thead><tr><th><strong>特性</strong></th><th><strong>BFD</strong></th><th><strong>NQA</strong></th></tr></thead><tbody><tr><td><strong>核心目标</strong></td><td>快速检测链路 / 邻居故障</td><td>全面分析网络性能与质量</td></tr><tr><td><strong>检测周期</strong></td><td>10ms-1s（可配置）</td><td>秒级或自定义（如 500ms）</td></tr><tr><td><strong>支持协议</strong></td><td>独立协议，与路由协议松耦合</td><td>支持 ICMP、TCP、UDP、DNS、HTTP 等多种协议</td></tr><tr><td><strong>多跳支持</strong></td><td>有限（需设备支持）</td><td>原生支持</td></tr><tr><td><strong>资源消耗</strong></td><td>低（仅发送小尺寸 Hello 报文）</td><td>中高（需生成测试流量，占用带宽和 CPU）</td></tr><tr><td><strong>典型配置</strong></td><td><code>interface Ethernet0/0</code> <code>bfd interval 50 min_rx 50 multiplier 3</code></td><td><code>ip sla 1</code> <code>icmp-echo 1.1.1.1</code> <code>schedule start-time now</code></td></tr><tr><td><strong>联动对象</strong></td><td>OSPF、BGP、VRRP 等协议</td><td>ACL、QoS、SNMP、SD-WAN 等</td></tr></tbody></table><p>此案例情况下，通常使用 bfd 更适合</p>`,28)]))}const r=s(c,[["render",p]]),v=JSON.parse('{"path":"/blogs/tech/networking/Huawei/Lab/bfd.html","title":"华为 BFD 验证实验","lang":"en-US","frontmatter":{"title":"华为 BFD 验证实验","date":"2025-06-22T00:00:00.000Z","tags":["Networking","Huawei"],"categories":["tech"]},"headers":[{"level":2,"title":"拓扑","slug":"拓扑","link":"#拓扑","children":[]},{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[{"level":3,"title":"IP 规划 & 配置","slug":"ip-规划-配置","link":"#ip-规划-配置","children":[]},{"level":3,"title":"配置路由","slug":"配置路由","link":"#配置路由","children":[]},{"level":3,"title":"配置 BFD","slug":"配置-bfd","link":"#配置-bfd","children":[]}]},{"level":2,"title":"配置汇总","slug":"配置汇总","link":"#配置汇总","children":[{"level":3,"title":"AR1","slug":"ar1","link":"#ar1","children":[]},{"level":3,"title":"AR2","slug":"ar2","link":"#ar2","children":[]},{"level":3,"title":"AR3","slug":"ar3","link":"#ar3","children":[]}]},{"level":2,"title":"附录","slug":"附录","link":"#附录","children":[{"level":3,"title":"BFD vs NQA","slug":"bfd-vs-nqa","link":"#bfd-vs-nqa","children":[]}]}],"git":{"createdTime":1766826955000,"updatedTime":1766890838000,"contributors":[{"name":"PPPerryPan","email":"perrypan0123@outlook.com","commits":2}]},"filePathRelative":"blogs/tech/networking/Huawei/Lab/bfd.md"}');export{r as comp,v as data};
