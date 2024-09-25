import{_ as e,c as i,a2 as s,o as n}from"./chunks/framework.CykocqSn.js";const g=JSON.parse('{"title":"v0.9.0 版本新增特性","description":"","frontmatter":{},"headers":[],"relativePath":"old/ruyi/updates/0.9.0.md","filePath":"old/ruyi/updates/0.9.0.md","lastUpdated":1702452514000}'),a={name:"old/ruyi/updates/0.9.0.md"};function l(d,t,r,c,h,p){return n(),i("div",null,t[0]||(t[0]=[s(`<h1 id="v0-9-0-版本新增特性" tabindex="-1">v0.9.0 版本新增特性 <a class="header-anchor" href="#v0-9-0-版本新增特性" aria-label="Permalink to &quot;v0.9.0 版本新增特性&quot;">​</a></h1><ul><li>支持了 LZ4 格式压缩文件的解包</li><li>RuyiSDK 自 0.9 版本开始支持矽速（Sipeed）全线 RISC-V 产品，板卡镜像刷写支持增加到 20 款</li></ul><h2 id="安装-v0-9-0" tabindex="-1">安装 v0.9.0 <a class="header-anchor" href="#安装-v0-9-0" aria-label="Permalink to &quot;安装 v0.9.0&quot;">​</a></h2><p>在 amd64 架构环境安装：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> wget</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://mirror.iscas.ac.cn/ruyisdk/ruyi/releases/0.9.0/ruyi.amd64</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> chmod</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> +x</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./ruyi.amd64</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./ruyi.amd64</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/bin/ruyi</span></span></code></pre></div><p>在 riscv64 架构环境安装：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> wget</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://mirror.iscas.ac.cn/ruyisdk/ruyi/releases/0.9.0/ruyi.riscv64</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> chmod</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> +x</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./ruyi.riscv64</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./ruyi.riscv64</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/bin/ruyi</span></span></code></pre></div><p>在 arm64 架构环境安装：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> wget</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://mirror.iscas.ac.cn/ruyisdk/ruyi/releases/0.9.0/ruyi.arm64</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> chmod</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> +x</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./ruyi.arm64</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./ruyi.arm64</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/bin/ruyi</span></span></code></pre></div><p>检查安装版本：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> version</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Ruyi</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.9.0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Running</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> on</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> linux/x86_64.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Copyright</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (C) 2023 Institute of Software, Chinese Academy of Sciences (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ISCAS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">All</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rights</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reserved.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">License:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Apache-2.0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">https://www.apache.org/licenses/LICENSE-2.</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">0&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">This</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> version</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> of</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> makes</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> use</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> of</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> code</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> licensed</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> under</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Mozilla</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Public</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">License</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (https://mozilla.org/MPL/2.0/). You can get the respective</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">project</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&#39;s sources from the project&#39;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> official</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> website:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> certifi: https://github.com/certifi/python-certifi</span></span></code></pre></div><h2 id="板卡镜像刷写" tabindex="-1">板卡镜像刷写 <a class="header-anchor" href="#板卡镜像刷写" aria-label="Permalink to &quot;板卡镜像刷写&quot;">​</a></h2><p>从 0.9.0 版本开始，板卡镜像刷写功能所支持的板卡增加到 20 款。</p><p>板卡支持列表：</p><table tabindex="0"><thead><tr><th style="text-align:center;">开发板</th><th style="text-align:center;">版本</th><th style="text-align:center;">镜像</th><th style="text-align:center;">刷写方式</th></tr></thead><tbody><tr><td style="text-align:center;">Allwinner Nezha D1</td><td style="text-align:center;">Allwinner Nezha D1 (generic variant)</td><td style="text-align:center;">openEuler RISC-V (base system) for Allwinner D1</td><td style="text-align:center;">dd</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">openEuler RISC-V (XFCE) for Allwinner D1</td><td style="text-align:center;">dd</td></tr><tr><td style="text-align:center;">Canaan Kendryte K230</td><td style="text-align:center;">Canaan Kendryte K230 (generic variant)</td><td style="text-align:center;">Canaan Kendryte K230 Official CanMV Debian SDK</td><td style="text-align:center;">dd</td></tr><tr><td style="text-align:center;">Canaan Kendryte K510</td><td style="text-align:center;">Canaan Kendryte K510 (generic variant)</td><td style="text-align:center;">Canaan Kendryte K510 Official Buildroot SDK (documentation-only)</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">Canaan Kendryte K230 Official CanMV Ubuntu SDK</td><td style="text-align:center;">dd</td></tr><tr><td style="text-align:center;">Milk-V Duo</td><td style="text-align:center;">Milk-V Duo (64M RAM)</td><td style="text-align:center;">Milk-V Duo Official buildroot SDK (64M RAM)</td><td style="text-align:center;">dd</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">Milk-V Duo Official buildroot SDK (64M RAM, with Python)</td><td style="text-align:center;">dd</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">Milk-V Duo (256M RAM)</td><td style="text-align:center;">Milk-V Duo Official buildroot SDK (256M RAM)</td><td style="text-align:center;">dd</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">Milk-V Duo Official buildroot SDK (256M RAM, with Python)</td><td style="text-align:center;">dd</td></tr><tr><td style="text-align:center;">Milk-V Duo S</td><td style="text-align:center;">Milk-V Duo S (generic variant)</td><td style="text-align:center;">Milk-V Duo S Official buildroot SDK (FreeRTOS, on SD card)</td><td style="text-align:center;">dd</td></tr><tr><td style="text-align:center;">Milk-V Mars</td><td style="text-align:center;">Milk-V Mars (generic variant)</td><td style="text-align:center;">Milk-V Mars Official Debian Desktop SDK (on SD card)</td><td style="text-align:center;">dd</td></tr><tr><td style="text-align:center;">Milk-V Mars CM</td><td style="text-align:center;">Milk-V Mars CM (generic variant)</td><td style="text-align:center;">Milk-V Mars CM Official Debian Desktop SDK (on SD card)</td><td style="text-align:center;">dd</td></tr><tr><td style="text-align:center;">Milk-V Meles</td><td style="text-align:center;">Milk-V Meles (4G RAM)</td><td style="text-align:center;">RevyOS for Milk-V Meles (4G RAM)</td><td style="text-align:center;">fastboot</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">Milk-V Meles (8G RAM)</td><td style="text-align:center;">RevyOS for Milk-V Meles (8G RAM)</td><td style="text-align:center;">fastboot</td></tr><tr><td style="text-align:center;">Milk-V Vega</td><td style="text-align:center;">Milk-V Vega (generic variant)</td><td style="text-align:center;">Milk-V Vega Official Buildroot SDK (documentation-only)</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">Milk-V Pioneer Box</td><td style="text-align:center;">Milk-V Pioneer Box (v1.3)</td><td style="text-align:center;">openEuler RISC-V (base system) for Milk-V Pioneer (rootfs on NVMe)</td><td style="text-align:center;">dd</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">openEuler RISC-V (XFCE) for Milk-V Pioneer (rootfs on NVMe)</td><td style="text-align:center;">dd</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">RevyOS for Milk-V Pioneer</td><td style="text-align:center;">dd</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">Milk-V Pioneer Box (v1.2)</td><td style="text-align:center;">openEuler RISC-V (base system) for Milk-V Pioneer (rootfs on NVMe)</td><td style="text-align:center;">dd</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">openEuler RISC-V (XFCE) for Milk-V Pioneer (rootfs on NVMe)</td><td style="text-align:center;">dd</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">Milk-V Pioneer Box (v1.1)</td><td style="text-align:center;">openEuler RISC-V (base system) for Milk-V Pioneer (rootfs on NVMe)</td><td style="text-align:center;">dd</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">openEuler RISC-V (XFCE) for Milk-V Pioneer (rootfs on NVMe)</td><td style="text-align:center;">dd</td></tr><tr><td style="text-align:center;">SiFive HiFive Unmatched</td><td style="text-align:center;">SiFive HiFive Unmatched (generic variant)</td><td style="text-align:center;">openEuler RISC-V (base system) for SiFive HiFive Unmatched</td><td style="text-align:center;">dd</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">openKylin for SiFive HiFive Unmatched</td><td style="text-align:center;">dd</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">openEuler RISC-V (XFCE) for SiFive HiFive Unmatched</td><td style="text-align:center;">dd</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">OpenWrt for SiFive HiFive Unmatched</td><td style="text-align:center;">dd</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">Ubuntu Server for SiFive HiFive Unmatched</td><td style="text-align:center;">dd</td></tr><tr><td style="text-align:center;">Sipeed Lichee Cluster 4A</td><td style="text-align:center;">Sipeed Lichee Cluster 4A (8G RAM)</td><td style="text-align:center;">RevyOS for Sipeed Lichee Cluster 4A (8G RAM)</td><td style="text-align:center;">fastboot</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">Sipeed Lichee Cluster 4A (16G RAM)</td><td style="text-align:center;">RevyOS for Sipeed Lichee Cluster 4A (16G RAM)</td><td style="text-align:center;">fastboot</td></tr><tr><td style="text-align:center;">Sipeed Lichee Console 4A</td><td style="text-align:center;">Sipeed Lichee Console 4A (8G RAM)</td><td style="text-align:center;">RevyOS for Sipeed Lichee Console 4A (8G RAM)</td><td style="text-align:center;">fastboot</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">Sipeed Lichee Console 4A (16G RAM)</td><td style="text-align:center;">RevyOS for Sipeed Lichee Console 4A (16G RAM)</td><td style="text-align:center;">fastboot</td></tr><tr><td style="text-align:center;">Sipeed Lichee RV</td><td style="text-align:center;">Sipeed Lichee RV (generic variant)</td><td style="text-align:center;">openEuler RISC-V (base system) for Allwinner D1</td><td style="text-align:center;">dd</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">openEuler RISC-V (XFCE) for Allwinner D1</td><td style="text-align:center;">dd</td></tr><tr><td style="text-align:center;">Sipeed LicheeRV Nano</td><td style="text-align:center;">Sipeed LicheeRV Nano (generic variant)</td><td style="text-align:center;">Sipeed LicheeRV Nano Official buildroot SDK (Linux &amp; FreeRTOS)</td><td style="text-align:center;">dd</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">Debian for Sipeed LicheeRV Nano (from <a href="https://github.com/Fishwaldo" target="_blank" rel="noreferrer">https://github.com/Fishwaldo</a>)</td><td style="text-align:center;">dd</td></tr><tr><td style="text-align:center;">Sipeed Maix-I</td><td style="text-align:center;">Sipeed Maix-I (generic variant)</td><td style="text-align:center;">Sipeed Maix-I Official FreeRTOS SDK (documentation-only)</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">Sipeed Tang Mega 138K Pro</td><td style="text-align:center;">Sipeed Tang Mega 138K Pro (generic variant)</td><td style="text-align:center;">Sipeed Tang Mega 138K Pro FPGA &amp; FreeRTOS SDK (documentation-only)</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">Sipeed Tang Mega 138K Pro FPGA &amp; RT-Thread SDK (documentation-only)</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">Sipeed LicheePi 4A</td><td style="text-align:center;">Sipeed LicheePi 4A (8G RAM)</td><td style="text-align:center;">openEuler RISC-V (headless) for Sipeed LicheePi 4A (8G RAM)</td><td style="text-align:center;">fastboot</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">openEuler RISC-V (XFCE) for Sipeed LicheePi 4A (8G RAM)</td><td style="text-align:center;">fastboot</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">RevyOS for Sipeed LicheePi 4A (8G RAM)</td><td style="text-align:center;">fastboot</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">Sipeed LicheePi 4A (16G RAM)</td><td style="text-align:center;">openEuler RISC-V (headless) for Sipeed LicheePi 4A (16G RAM)</td><td style="text-align:center;">fastboot</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">openEuler RISC-V (XFCE) for Sipeed LicheePi 4A (16G RAM)</td><td style="text-align:center;">fastboot</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">RevyOS for Sipeed LicheePi 4A (16G RAM)</td><td style="text-align:center;">fastboot</td></tr><tr><td style="text-align:center;">StarFive VisionFive</td><td style="text-align:center;">StarFive VisionFive (generic variant)</td><td style="text-align:center;">openEuler RISC-V (base system) for StarFive VisionFive</td><td style="text-align:center;">dd</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">openEuler RISC-V (XFCE) for StarFive VisionFive</td><td style="text-align:center;">dd</td></tr><tr><td style="text-align:center;">StarFive VisionFive2</td><td style="text-align:center;">StarFive VisionFive2 (generic variant)</td><td style="text-align:center;">openEuler RISC-V (base system) for StarFive VisionFive2</td><td style="text-align:center;">dd</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">openEuler RISC-V (XFCE) for StarFive VisionFive2</td><td style="text-align:center;">dd</td></tr></tbody></table><p>刷写工具根据板卡的不同依赖 <code>dd</code> 和 <code>fastboot</code> 命令。</p><p>在使用普通用户调用 <code>dd</code> 命令刷写镜像失败时，RUYI 将尝试调用 <code>sudo</code> 提权。</p><p>在使用 <code>fastboot</code> 工具刷写镜像时， RUYI 则只会使用当前普通用户，故需要用户自行配置 udev 规则。</p><p>需要注意的是一些镜像的解包需要占用大量的磁盘空间，使用 RUYI 工具刷写镜像前请务必留足磁盘空间； 一些厂家提供的镜像在刷写后并不会自动扩展分区来充分利用整块磁盘，而需要用户自行扩展磁盘分区大小。</p>`,19)]))}const o=e(a,[["render",l]]);export{g as __pageData,o as default};
