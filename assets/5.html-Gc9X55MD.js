import{_ as n,c as e,b as i,o as l}from"./app-CUDFWA7u.js";const a="/blog/assets/5.1-GrcLc_t8.png",t="/blog/assets/5.2-Nt4HdJDP.png",c="/blog/assets/5.3-137gkXh1.png",r={};function d(p,s){return l(),e("div",null,s[0]||(s[0]=[i('<h1 id="路由器的基本配置" tabindex="-1"><a class="header-anchor" href="#路由器的基本配置"><span>路由器的基本配置</span></a></h1><h2 id="例" tabindex="-1"><a class="header-anchor" href="#例"><span>例</span></a></h2><ul><li>背景 <ul><li>你是某公司新进的网管，公司要求你熟悉网络产品，首先要求你登录路由器，了解、掌握路由器的命令行操作；</li><li>作为网络管理员，你第一次在设备机房对路由器进行了初次配置后，希望以后在办公室或出差时也可以对设各进行远程管理，现要在路由器上做适当配置。</li></ul></li><li>原理 <ul><li>路由器的管理方式基本分为两种：带内管理和带外管理。通过路山器的Console口管理路山器属于带外管理，不占用路由器的网络接口，其特点是需要使用配置线缆，近距离配置。第一次配置时必须利用Console端口进行配置。</li></ul></li></ul><h2 id="拓扑与主机ip配置" tabindex="-1"><a class="header-anchor" href="#拓扑与主机ip配置"><span>拓扑与主机IP配置</span></a></h2><ul><li>注：用 直连线(实线) / 交叉线(虚线) 均可</li></ul><p><img src="'+a+'" alt="5.1"></p><h2 id="路由器配置" tabindex="-1"><a class="header-anchor" href="#路由器配置"><span>路由器配置</span></a></h2><ul><li>注： <ul><li>交换机端口默认启用</li><li>路由器端口默认禁用 <ul><li>此处再图形界面下直接启用 0/0 接口（与PC0相连）</li></ul></li></ul></li></ul><p><img src="'+t+`" alt="5.2"></p><ul><li>路由器拥有动态路由配置功能，如RIP、OSPF</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Router#conf t</span>
<span class="line">Enter configuration commands, one per line.  End with CNTL/Z.</span>
<span class="line"></span>
<span class="line">Router(config)#router rip ?</span>
<span class="line">  &lt;cr&gt;</span>
<span class="line">Router(config)#router rip </span>
<span class="line">Router(config-router)#exit</span>
<span class="line"></span>
<span class="line">Router(config)#router ospf ?</span>
<span class="line">  &lt;1-65535&gt;  Process ID</span>
<span class="line">Router(config)#router ospf 1</span>
<span class="line">OSPF process 1 cannot start. There must be at least one &quot;up&quot; IP interface</span>
<span class="line">Router(config-router)#exit</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>配置特权模式密码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Router(config)#hostname R0</span>
<span class="line">R0(config)#enable secret 112233		!设置特权模式登录密码</span>
<span class="line">R0(config)#exit</span>
<span class="line"></span>
<span class="line">R0&gt;en								!重新进入</span>
<span class="line">Password: </span>
<span class="line">R0#</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>配置telnet登录密码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">R0(config)#line vty 0 4</span>
<span class="line">R0(config-line)#pass</span>
<span class="line">R0(config-line)#password 123456</span>
<span class="line">R0(config-line)#login</span>
<span class="line">R0(config-line)#exit</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>配置接口IP地址</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">R0(config)#interface gigabitEthernet 0/0/0</span>
<span class="line">R0(config-if)#ip address 192.168.1.1 255.255.255.0</span>
<span class="line">R0(config-if)#no shut</span>
<span class="line">R0(config-if)#end</span>
<span class="line">R0#</span>
<span class="line">%SYS-5-CONFIG_I: Configured from console by console</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>此时，主机与路由器的连接状态指示已变为绿色</li></ul><p><img src="`+c+`" alt="5.3"></p><h2 id="测试" tabindex="-1"><a class="header-anchor" href="#测试"><span>测试</span></a></h2><ul><li>在 PC0 中ping网关</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">C:\\&gt;ping 192.168.1.1</span>
<span class="line"></span>
<span class="line">Pinging 192.168.1.1 with 32 bytes of data:</span>
<span class="line"></span>
<span class="line">Reply from 192.168.1.1: bytes=32 time&lt;1ms TTL=255</span>
<span class="line">Reply from 192.168.1.1: bytes=32 time&lt;1ms TTL=255</span>
<span class="line"></span>
<span class="line">Ping statistics for 192.168.1.1:</span>
<span class="line">    Packets: Sent = 2, Received = 2, Lost = 0 (0% loss),</span>
<span class="line">Approximate round trip times in milli-seconds:</span>
<span class="line">    Minimum = 0ms, Maximum = 0ms, Average = 0ms</span>
<span class="line"></span>
<span class="line">Control-C</span>
<span class="line">^C</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>尝试telnet登录，并进入特权模式</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">C:\\&gt;telnet 192.168.1.1</span>
<span class="line">Trying 192.168.1.1 ...Open</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">User Access Verification</span>
<span class="line"></span>
<span class="line">Password: </span>
<span class="line">R0&gt;en</span>
<span class="line">Password: </span>
<span class="line">R0#</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24)]))}const o=n(r,[["render",d]]),v=JSON.parse('{"path":"/blogs/tech/networking/Cisco/Packet Tracer/Lab/5.html","title":"路由器的基本配置","lang":"en-US","frontmatter":{"title":"路由器的基本配置","date":"2022-02-05T00:00:00.000Z","tags":["Cisco","Networking"],"categories":["tech"]},"headers":[{"level":2,"title":"例","slug":"例","link":"#例","children":[]},{"level":2,"title":"拓扑与主机IP配置","slug":"拓扑与主机ip配置","link":"#拓扑与主机ip配置","children":[]},{"level":2,"title":"路由器配置","slug":"路由器配置","link":"#路由器配置","children":[]},{"level":2,"title":"测试","slug":"测试","link":"#测试","children":[]}],"git":{"createdTime":1748156404000,"updatedTime":1766826955000,"contributors":[{"name":"PPPerryPan","email":"perrypan0123@outlook.com","commits":1}]},"filePathRelative":"blogs/tech/networking/Cisco/Packet Tracer/Lab/5.md"}');export{o as comp,v as data};
