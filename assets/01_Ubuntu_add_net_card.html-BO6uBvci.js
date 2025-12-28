import{_ as n,c as e,b as a,o as l}from"./app-CUDFWA7u.js";const i={};function t(d,s){return l(),e("div",null,s[0]||(s[0]=[a(`<h2 id="ubuntu-22-04-新增网卡配置" tabindex="-1"><a class="header-anchor" href="#ubuntu-22-04-新增网卡配置"><span>Ubuntu 22.04+ 新增网卡配置</span></a></h2><p>Ubuntu 2204 LTS 开始，新增了 <code>cloud-init</code> 的配置，</p><p>如果不手动配置 <code>network: {config: disabled}</code>，每次重启电脑，网卡配置都会被重置，新添加的网卡不会自动 up 起来。</p><blockquote><p>也是奇了怪， 都 2025 年了， Ubuntu 2204 的网卡配置在中文互联网上还是一条正确的网卡配置教程都没有。。。</p><p>各界 AI 也是一派胡言，没有一个能答对的。</p></blockquote><ol><li>查看网卡名称</li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">sudo ip a</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="2"><li>配置文件目录</li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">cd /etc/netplan/</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 操作示例</span></span>
<span class="line">root@u2204:/home/perry<span class="token comment"># cd /etc/netplan/</span></span>
<span class="line">root@u2204:/etc/netplan<span class="token comment"># ls</span></span>
<span class="line"><span class="token number">50</span>-cloud-init.yaml</span>
<span class="line">root@u2204:/etc/netplan<span class="token comment"># cat 50-cloud-init.yaml </span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>查看 yaml</li></ol><blockquote><p>看英语，写着会自动重置</p></blockquote><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># This file is generated from information provided by the datasource.  Changes</span></span>
<span class="line"><span class="token comment"># to it will not persist across an instance reboot.  To disable cloud-init&#39;s</span></span>
<span class="line"><span class="token comment"># network configuration capabilities, write a file</span></span>
<span class="line"><span class="token comment"># /etc/cloud/cloud.cfg.d/99-disable-network-config.cfg with the following:</span></span>
<span class="line"><span class="token comment"># network: {config: disabled}</span></span>
<span class="line">network:</span>
<span class="line">    ethernets:</span>
<span class="line">        ens33:</span>
<span class="line">            addresses:</span>
<span class="line">            - <span class="token number">192.168</span>.123.253/24</span>
<span class="line">            nameservers:</span>
<span class="line">                addresses:</span>
<span class="line">                - <span class="token number">192.168</span>.123.254</span>
<span class="line">                search:</span>
<span class="line">                - <span class="token number">223.5</span>.5.5</span>
<span class="line">            routes:</span>
<span class="line">            -   to: default</span>
<span class="line">                via: <span class="token number">192.168</span>.123.254</span>
<span class="line">    version: <span class="token number">2</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>按照指引，禁用 cloud-init 网络配置：</li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">sudo vim /etc/cloud/cloud.cfg.d/99-disable-network-config.cfg</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>添加内容：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">network: <span class="token punctuation">{</span>config: disabled<span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="5"><li>重新配置网络</li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">sudo vim /etc/netplan/50-cloud-init.yaml</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">network:</span>
<span class="line">    ethernets:</span>
<span class="line">        ens33:</span>
<span class="line">            addresses:</span>
<span class="line">            - <span class="token number">192.168</span>.123.253/24</span>
<span class="line">            nameservers:</span>
<span class="line">                addresses:</span>
<span class="line">                - <span class="token number">192.168</span>.123.254</span>
<span class="line">                search:</span>
<span class="line">                - <span class="token number">223.5</span>.5.5</span>
<span class="line">            routes:</span>
<span class="line">            -   to: default</span>
<span class="line">                via: <span class="token number">192.168</span>.123.254</span>
<span class="line">                table: <span class="token number">100</span></span>
<span class="line">        ens38:</span>
<span class="line">            addresses:</span>
<span class="line">            - <span class="token number">192.168</span>.234.253/24</span>
<span class="line">            nameservers:</span>
<span class="line">              addresses:</span>
<span class="line">              - <span class="token number">192.168</span>.234.254</span>
<span class="line">              search:</span>
<span class="line">              - <span class="token number">223.5</span>.5.5</span>
<span class="line">            routes:</span>
<span class="line">            -   to: default</span>
<span class="line">                via: <span class="token number">192.168</span>.234.254</span>
<span class="line">                table: <span class="token number">200</span></span>
<span class="line">    version: <span class="token number">2</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6"><li>应用</li></ol><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">sudo</span> netplan apply</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="7"><li>如果不确定网卡有没有启动，可直接启动一次</li></ol><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">sudo</span> <span class="token function">ip</span> <span class="token function">link</span> <span class="token builtin class-name">set</span> <span class="token operator">&lt;</span>网卡名称<span class="token operator">&gt;</span> up</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="8"><li>【可选】为确保网卡在开机时自动启用和配置，可以检查 <code>netplan</code> 配置文件和启用 <code>systemd-networkd</code> 服务：</li></ol><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> systemd-networkd</span>
<span class="line"><span class="token function">sudo</span> systemctl start systemd-networkd</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="9"><li>查看 IP 和 重启系统 再次查看 IP，</li></ol><blockquote><p>重启电脑的时候网络配置不会被自动重制了。</p></blockquote>`,27)]))}const p=n(i,[["render",t]]),r=JSON.parse('{"path":"/blogs/tech/linux/ubuntu/01_Ubuntu_add_net_card.html","title":"Ubuntu 22.04+ 新增网卡配置","lang":"en-US","frontmatter":{"title":"Ubuntu 22.04+ 新增网卡配置","date":"2025-02-10T00:00:00.000Z","tags":["Networking"],"categories":["tech"]},"headers":[{"level":2,"title":"Ubuntu 22.04+ 新增网卡配置","slug":"ubuntu-22-04-新增网卡配置","link":"#ubuntu-22-04-新增网卡配置","children":[]}],"git":{"createdTime":1748267264000,"updatedTime":1766826955000,"contributors":[{"name":"PPPerryPan","email":"perrypan0123@outlook.com","commits":1}]},"filePathRelative":"blogs/tech/linux/ubuntu/01_Ubuntu_add_net_card.md"}');export{p as comp,r as data};
