// 张旭泉开发
const templates = [
    {
        id: 'mold-process',
        name: '模具产业流程图',
        description: '展示模具产业从设计到生产的完整流程',
        svgCode: `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="900" viewBox="0 0 1200 900"><style>
    text { font-family: "Microsoft YaHei", "PingFang SC", "Microsoft YaHei", "SimHei", sans-serif; }</style>
  <!-- 定义样式和标记 -->
  <defs>
    <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
      <polygon points="0 0, 10 3, 0 6" fill="#333"></polygon>
    </marker>
    <marker id="arrow-gray" markerWidth="8" markerHeight="8" refX="7" refY="2.5" orient="auto">
      <polygon points="0 0, 8 2.5, 0 5" fill="#666"></polygon>
    </marker>
  </defs>
  
  <!-- 顶部标题区 -->
  <rect x="288" y="20" width="646" height="60" fill="#01579b" stroke="#01579b" stroke-width="2" rx="8" class=""></rect>
  <text x="599" y="60" text-anchor="middle" font-family="SimHei, sans-serif" font-size="30.240000000000002" font-weight="bold" data-original-font-size="24" style="font-size: 30.24px; opacity: 1; fill: white;" class="">模具产业生产过程工艺流程图</text>
  
  <!-- 左侧模具设计区 -->
  <g id="mold-design">
    <rect x="50" y="120" width="280" height="500" fill="white" stroke="#666" stroke-width="2" stroke-dasharray="8,4" rx="5" class=""></rect>
    
    <!-- 标签 -->
    <rect x="22" y="320" width="40" height="120" fill="#0288d1" stroke="#0288d1" stroke-width="2" class=""></rect>
    <text x="41" y="389" text-anchor="middle" font-family="SimHei, sans-serif" font-size="22.68" font-weight="bold" transform="rotate(-90 40 380)" class="" data-original-font-size="18" style="font-size: 22.68px; fill: white;">模具设计</text>
    
    <!-- 内容框 -->
    <rect x="80" y="146" width="220" height="45" fill="#cff1fa" stroke="#cff1fa" stroke-width="1.5" rx="3" class=""></rect>
    <text x="190" y="174" text-anchor="middle" font-family="SimHei, sans-serif" font-size="17.64" data-original-font-size="14" style="font-size: 17.64px;" class="">产品需求分析</text>
    
    <rect x="80" y="210" width="220" height="45" fill="#cff1fa" stroke="#cff1fa" stroke-width="1.5" rx="3" class=""></rect>
    <text x="190" y="238" text-anchor="middle" font-family="SimHei, sans-serif" font-size="17.64" data-original-font-size="14" style="font-size: 17.64px;">模具结构设计</text>
    
    <rect x="80" y="270" width="220" height="45" fill="#cff1fa" stroke="#cff1fa" stroke-width="1.5" rx="3" class=""></rect>
    <text x="190" y="298" text-anchor="middle" font-family="SimHei, sans-serif" font-size="17.64" data-original-font-size="14" style="font-size: 17.64px;">CAD建模</text>
    
    <rect x="80" y="370" width="220" height="60" fill="#00bcd4" stroke="#00bcd4" stroke-width="2" rx="5" class=""></rect>
    <text x="190" y="396" text-anchor="middle" font-family="SimHei, sans-serif" font-size="20.16" font-weight="bold" data-original-font-size="16" style="font-size: 20.16px; fill: white;" class="">模具设计</text>
    <text x="190" y="417" text-anchor="middle" font-family="SimHei, sans-serif" font-size="17.64" data-original-font-size="14" style="font-size: 17.64px; fill: white;" class="">与工程分析</text>
    
    <rect x="80" y="480" width="220" height="45" fill="#cff1fa" stroke="#cff1fa" stroke-width="1.5" rx="3" class=""></rect>
    <text x="190" y="509" text-anchor="middle" font-family="SimHei, sans-serif" font-size="17.64" data-original-font-size="14" style="font-size: 17.64px;" class="">CAE模拟分析</text>
    
    <rect x="80" y="540" width="220" height="45" fill="#cff1fa" stroke="#cff1fa" stroke-width="1.5" rx="3" class=""></rect>
    <text x="190" y="569" text-anchor="middle" font-family="SimHei, sans-serif" font-size="17.64" data-original-font-size="14" style="font-size: 17.64px;" class="">设计优化</text>
    
    <!-- 连接线 -->
    <line x1="190" y1="195" x2="190" y2="210" stroke="#666" stroke-width="1.5"></line>
    <line x1="190" y1="255" x2="190" y2="270" stroke="#666" stroke-width="1.5"></line>
    <line x1="190" y1="315" x2="190" y2="370" stroke="#666" stroke-width="1.5" marker-end="url(#arrow-gray)"></line>
    <line x1="190" y1="430" x2="190" y2="480" stroke="#666" stroke-width="1.5" marker-end="url(#arrow-gray)"></line>
    <line x1="190" y1="525" x2="190" y2="540" stroke="#666" stroke-width="1.5"></line>
  </g>
  
  <!-- 中间模具制造区 -->
  <g id="mold-manufacturing">
    <rect x="370" y="120" width="460" height="500" fill="white" stroke="#666" stroke-width="2" stroke-dasharray="8,4" rx="5" class=""></rect>
    
    <!-- 上部分：加工路径 -->
    <rect x="400" y="140" width="400" height="40" fill="#009688" stroke="#009688" stroke-width="2" rx="5" class=""></rect>
    <text x="600" y="168" text-anchor="middle" font-family="SimHei, sans-serif" font-size="20.16" font-weight="bold" data-original-font-size="16" style="font-size: 20.16px; fill: white;" class="">加工路径选择</text>
    
    <!-- 三个并列框 -->
    <rect x="400" y="200" width="120" height="80" fill="#c8e9e4" stroke="#c8e9e4" stroke-width="1.5" rx="3" class=""></rect>
    <text x="460" y="228" text-anchor="middle" font-family="SimHei, sans-serif" font-size="17.64" data-original-font-size="14" style="font-size: 17.64px;" class="">CNC加工</text>
    <text x="460" y="248" text-anchor="middle" font-family="SimHei, sans-serif" font-size="15.120000000000001" data-original-font-size="12" style="font-size: 15.12px;" class="">数控铣削</text>
    <text x="460" y="267" text-anchor="middle" font-family="SimHei, sans-serif" font-size="15.120000000000001" data-original-font-size="12" style="font-size: 15.12px;" class="">电火花加工</text>
    
    <rect x="540" y="200" width="120" height="80" fill="#c8e9e4" stroke="#c8e9e4" stroke-width="1.5" rx="3" class=""></rect>
    <text x="600" y="228" text-anchor="middle" font-family="SimHei, sans-serif" font-size="17.64" data-original-font-size="14" style="font-size: 17.64px;" class="">热处理</text>
    <text x="600" y="248" text-anchor="middle" font-family="SimHei, sans-serif" font-size="15.120000000000001" data-original-font-size="12" style="font-size: 15.12px;" class="">淬火回火</text>
    <text x="600" y="267" text-anchor="middle" font-family="SimHei, sans-serif" font-size="15.120000000000001" data-original-font-size="12" style="font-size: 15.12px;" class="">表面处理</text>
    
    <rect x="680" y="200" width="120" height="80" fill="#cae7e4" stroke="#cae7e4" stroke-width="1.5" rx="3" class=""></rect>
    <text x="740" y="228" text-anchor="middle" font-family="SimHei, sans-serif" font-size="17.64" data-original-font-size="14" style="font-size: 17.64px;" class="">精加工</text>
    <text x="740" y="248" text-anchor="middle" font-family="SimHei, sans-serif" font-size="15.120000000000001" data-original-font-size="12" style="font-size: 15.12px;" class="">磨削抛光</text>
    <text x="740" y="267" text-anchor="middle" font-family="SimHei, sans-serif" font-size="15.120000000000001" data-original-font-size="12" style="font-size: 15.12px;" class="">装配调试</text>
    
    <!-- 汇聚线 -->
    <line x1="460" y1="280" x2="460" y2="320" stroke="#333" stroke-width="1.5"></line>
    <line x1="600" y1="280" x2="600" y2="320" stroke="#333" stroke-width="1.5" class=""></line>
    <line x1="740" y1="280" x2="740" y2="320" stroke="#333" stroke-width="1.5"></line>
    <line x1="460" y1="320" x2="740" y2="320" stroke="#333" stroke-width="1.5"></line>
    <line x1="600" y1="321" x2="600" y2="356" stroke="#333" stroke-width="2" marker-end="url(#arrow)" class=""></line>
    
    <!-- 中部分：制造策略 -->
    <rect x="400" y="360" width="400" height="40" fill="#009688" stroke="#009688" stroke-width="2" rx="5" class=""></rect>
    <text x="600" y="388" text-anchor="middle" font-family="SimHei, sans-serif" font-size="20.16" font-weight="bold" data-original-font-size="16" style="font-size: 20.16px; fill: white;" class="selected">制造质量控制</text>
    
    <!-- 制造方法框组 -->
    <g id="manufacturing-methods">
      <rect x="400" y="420" width="180" height="40" fill="#c8e9e4" stroke="#c8e9e4" stroke-width="1.5" rx="3" class=""></rect>
      <text x="490" y="446" text-anchor="middle" font-family="SimHei, sans-serif" font-size="16.38" data-original-font-size="13" style="font-size: 16.38px;" class="">三坐标测量</text>
      
      <rect x="620" y="420" width="180" height="40" fill="#c8e9e4" stroke="#c8e9e4" stroke-width="1.5" rx="3" class=""></rect>
      <text x="710" y="446" text-anchor="middle" font-family="SimHei, sans-serif" font-size="16.38" data-original-font-size="13" style="font-size: 16.38px;" class="">表面粗糙度检测</text>
      
      <rect x="400" y="483" width="180" height="40" fill="#c8e9e4" stroke="#c8e9e4" stroke-width="1.5" rx="3" class=""></rect>
      <text x="490" y="509" text-anchor="middle" font-family="SimHei, sans-serif" font-size="16.38" data-original-font-size="13" style="font-size: 16.38px;" class="">硬度检测</text>
      
      <rect x="620" y="483" width="180" height="40" fill="#c8e9e4" stroke="#c8e9e4" stroke-width="1.5" rx="3" class=""></rect>
      <text x="710" y="509" text-anchor="middle" font-family="SimHei, sans-serif" font-size="16.38" data-original-font-size="13" style="font-size: 16.38px;" class="">尺寸精度检测</text>
      
      <rect x="510" y="545" width="180" height="40" fill="#c8e9e4" stroke="#c8e9e4" stroke-width="1.5" rx="3" class=""></rect>
      <text x="600" y="571" text-anchor="middle" font-family="SimHei, sans-serif" font-size="16.38" data-original-font-size="13" style="font-size: 16.38px;" class="">试模与调试</text>
    </g>
  </g>
  
  <!-- 右侧产品生产区 -->
  <g id="product-production">
    <rect x="870" y="121" width="280" height="500" fill="white" stroke="#666" stroke-width="2" stroke-dasharray="8,4" rx="5" class=""></rect>
    
    <!-- 标签 -->
    <rect x="1138" y="321" width="40" height="120" fill="#0287d0" stroke="#0287d0" stroke-width="2" class=""></rect>
    <text x="1161" y="389" text-anchor="middle" font-family="SimHei, sans-serif" font-size="22.68" font-weight="bold" transform="rotate(90 1160 380)" class="" data-original-font-size="18" style="font-size: 22.68px; fill: white;">模具设计</text>
    
    <!-- 内容框 -->
    <rect x="900" y="144" width="220" height="45" fill="#cfe2ec" stroke="#cfe2ec" stroke-width="1.5" rx="3" class=""></rect>
    <text x="1010" y="172" text-anchor="middle" font-family="SimHei, sans-serif" font-size="17.64" data-original-font-size="14" style="font-size: 17.64px;" class="">注塑成型</text>
    
    <rect x="900" y="218" width="220" height="45" fill="#cfe2ec" stroke="#cfe2ec" stroke-width="1.5" rx="3" class=""></rect>
    <text x="1010" y="246" text-anchor="middle" font-family="SimHei, sans-serif" font-size="17.64" data-original-font-size="14" style="font-size: 17.64px;" class="">压铸成型</text>
    
    <rect x="900" y="291" width="220" height="60" fill="#4997c1" stroke="#4997c1" stroke-width="2" rx="5" class=""></rect>
    <text x="1010" y="317" text-anchor="middle" font-family="SimHei, sans-serif" font-size="20.16" font-weight="bold" data-original-font-size="16" style="font-size: 20.16px; fill: white;" class="">成型工艺</text>
    <text x="1010" y="342" text-anchor="middle" font-family="SimHei, sans-serif" font-size="17.64" data-original-font-size="14" style="font-size: 17.64px; fill: white;" class="">与参数优化</text>
    
    <rect x="900" y="379" width="220" height="45" fill="#cfe2ec" stroke="#cfe2ec" stroke-width="1.5" rx="3" class=""></rect>
    <text x="1010" y="407" text-anchor="middle" font-family="SimHei, sans-serif" font-size="17.64" data-original-font-size="14" style="font-size: 17.64px;" class="">冲压成型</text>
    
    <rect x="900" y="451" width="220" height="45" fill="#cfe2ec" stroke="#cfe2ec" stroke-width="1.5" rx="3" class=""></rect>
    <text x="1010" y="479" text-anchor="middle" font-family="SimHei, sans-serif" font-size="17.64" data-original-font-size="14" style="font-size: 17.64px;" class="">吹塑成型</text>
    
    <rect x="900" y="527" width="220" height="60" fill="#4997c1" stroke="#4997c1" stroke-width="2" rx="5" class=""></rect>
    <text x="1010" y="553" text-anchor="middle" font-family="SimHei, sans-serif" font-size="20.16" font-weight="bold" data-original-font-size="16" style="font-size: 20.16px; fill: white;" class="">成品检测</text>
    <text x="1010" y="578" text-anchor="middle" font-family="SimHei, sans-serif" font-size="17.64" data-original-font-size="14" style="font-size: 17.64px; fill: white;" class="">与包装入库</text>
    
    <!-- 连接线 -->
    <line x1="1010" y1="191" x2="1010" y2="217" stroke="#666" stroke-width="1.5" class=""></line>
    <line x1="1010" y1="265" x2="1010" y2="289" stroke="#666" stroke-width="1.5" marker-end="url(#arrow-gray)" class=""></line>
    <line x1="1010" y1="353" x2="1010" y2="377" stroke="#666" stroke-width="1.5" class=""></line>
    <line x1="1010" y1="425" x2="1010" y2="450" stroke="#666" stroke-width="1.5" class=""></line>
    <line x1="1010" y1="496" x2="1010" y2="524" stroke="#333" stroke-width="2" marker-end="url(#arrow)" class=""></line>
  </g>
  
  <!-- 底部产业整合区 -->
  <g id="industry-integration">
    <rect x="200" y="660" width="800" height="180" fill="white" stroke="#666" stroke-width="2" stroke-dasharray="8,4" rx="5"></rect>
    
    <rect x="230" y="680" width="740" height="40" fill="#00b050" stroke="#00b050" stroke-width="2" rx="5" class=""></rect>
    <text x="600" y="709" text-anchor="middle" font-family="SimHei, sans-serif" font-size="22.68" font-weight="bold" data-original-font-size="18" style="font-size: 22.68px; fill: white;" class="">模具产业创新与整合</text>
    
    <!-- 三个要素框 -->
    <rect x="250" y="740" width="200" height="78" fill="#e3f2d9" stroke="#e3f2d9" stroke-width="1.5" rx="3" class="selected"></rect>
    <text x="350" y="763" text-anchor="middle" font-family="SimHei, sans-serif" font-size="17.64" data-original-font-size="14" style="font-size: 17.64px;" class="">智能制造</text>
    <text x="350" y="784" text-anchor="middle" font-family="SimHei, sans-serif" font-size="15.120000000000001" data-original-font-size="12" style="font-size: 15.12px;" class="">自动化生产线</text>
    <text x="350" y="804" text-anchor="middle" font-family="SimHei, sans-serif" font-size="15.120000000000001" data-original-font-size="12" style="font-size: 15.12px;" class="">工业互联网</text>
    
    <rect x="500" y="740" width="200" height="78" fill="#e3f2d9" stroke="#e3f2d9" stroke-width="1.5" rx="3" class=""></rect>
    <text x="600" y="763" text-anchor="middle" font-family="SimHei, sans-serif" font-size="17.64" data-original-font-size="14" style="font-size: 17.64px;" class="">技术创新</text>
    <text x="600" y="784" text-anchor="middle" font-family="SimHei, sans-serif" font-size="15.120000000000001" data-original-font-size="12" style="font-size: 15.12px;" class="">3D打印技术</text>
    <text x="600" y="804" text-anchor="middle" font-family="SimHei, sans-serif" font-size="15.120000000000001" data-original-font-size="12" style="font-size: 15.12px;" class="">新材料应用</text>
    
    <rect x="750" y="740" width="200" height="78" fill="#e3f2d9" stroke="#e3f2d9" stroke-width="1.5" rx="3" class=""></rect>
    <text x="850" y="763" text-anchor="middle" font-family="SimHei, sans-serif" font-size="17.64" data-original-font-size="14" style="font-size: 17.64px;" class="">产业升级</text>
    <text x="850" y="784" text-anchor="middle" font-family="SimHei, sans-serif" font-size="15.120000000000001" data-original-font-size="12" style="font-size: 15.12px;" class="">绿色制造</text>
    <text x="850" y="804" text-anchor="middle" font-family="SimHei, sans-serif" font-size="15.120000000000001" data-original-font-size="12" style="font-size: 15.12px;" class="">可持续发展</text>
  </g>
  
  <!-- 主要连接箭头 -->
  <line x1="331" y1="400" x2="370" y2="400" stroke="#333" stroke-width="2" marker-end="url(#arrow)" class=""></line>
  <line x1="830" y1="400" x2="870" y2="400" stroke="#333" stroke-width="2" marker-end="url(#arrow)"></line>
  
  <line x1="600" y1="621" x2="600" y2="658" stroke="#333" stroke-width="2" marker-end="url(#arrow)" class=""></line>
</svg>`
    },
    {
        id: 'tech-architecture',
        name: '技术架构图',
        description: '适用于展示系统架构和技术组件',
        svgCode: `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
  <style>
    text { font-family: "Microsoft YaHei", sans-serif; }
    .title { font-size: 24px; font-weight: bold; fill: #01579b; }
    .layer-title { font-size: 18px; font-weight: bold; fill: #0288d1; }
    .component { font-size: 14px; fill: #333; }
  </style>
  
  <!-- 标题 -->
  <text x="400" y="40" text-anchor="middle" class="title">系统技术架构图</text>
  
  <!-- 表示层 -->
  <rect x="50" y="80" width="700" height="80" fill="#e3f2fd" stroke="#0288d1" stroke-width="2" rx="5"/>
  <text x="400" y="105" text-anchor="middle" class="layer-title">表示层</text>
  
  <rect x="100" y="120" width="120" height="30" fill="#bbdefb" stroke="#0288d1" stroke-width="1" rx="3"/>
  <text x="160" y="140" text-anchor="middle" class="component">Web界面</text>
  
  <rect x="280" y="120" width="120" height="30" fill="#bbdefb" stroke="#0288d1" stroke-width="1" rx="3"/>
  <text x="340" y="140" text-anchor="middle" class="component">移动应用</text>
  
  <rect x="460" y="120" width="120" height="30" fill="#bbdefb" stroke="#0288d1" stroke-width="1" rx="3"/>
  <text x="520" y="140" text-anchor="middle" class="component">API接口</text>
  
  <!-- 业务逻辑层 -->
  <rect x="50" y="200" width="700" height="80" fill="#e8f5e9" stroke="#4caf50" stroke-width="2" rx="5"/>
  <text x="400" y="225" text-anchor="middle" class="layer-title">业务逻辑层</text>
  
  <rect x="100" y="240" width="120" height="30" fill="#c8e6c9" stroke="#4caf50" stroke-width="1" rx="3"/>
  <text x="160" y="260" text-anchor="middle" class="component">用户管理</text>
  
  <rect x="280" y="240" width="120" height="30" fill="#c8e6c9" stroke="#4caf50" stroke-width="1" rx="3"/>
  <text x="340" y="260" text-anchor="middle" class="component">订单处理</text>
  
  <rect x="460" y="240" width="120" height="30" fill="#c8e6c9" stroke="#4caf50" stroke-width="1" rx="3"/>
  <text x="520" y="260" text-anchor="middle" class="component">支付服务</text>
  
  <!-- 数据访问层 -->
  <rect x="50" y="320" width="700" height="80" fill="#fff3e0" stroke="#ff9800" stroke-width="2" rx="5"/>
  <text x="400" y="345" text-anchor="middle" class="layer-title">数据访问层</text>
  
  <rect x="100" y="360" width="120" height="30" fill="#ffe0b2" stroke="#ff9800" stroke-width="1" rx="3"/>
  <text x="160" y="380" text-anchor="middle" class="component">数据库</text>
  
  <rect x="280" y="360" width="120" height="30" fill="#ffe0b2" stroke="#ff9800" stroke-width="1" rx="3"/>
  <text x="340" y="380" text-anchor="middle" class="component">缓存</text>
  
  <rect x="460" y="360" width="120" height="30" fill="#ffe0b2" stroke="#ff9800" stroke-width="1" rx="3"/>
  <text x="520" y="380" text-anchor="middle" class="component">文件存储</text>
  
  <!-- 基础设施层 -->
  <rect x="50" y="440" width="700" height="80" fill="#fce4ec" stroke="#e91e63" stroke-width="2" rx="5"/>
  <text x="400" y="465" text-anchor="middle" class="layer-title">基础设施层</text>
  
  <rect x="100" y="480" width="120" height="30" fill="#f8bbd9" stroke="#e91e63" stroke-width="1" rx="3"/>
  <text x="160" y="500" text-anchor="middle" class="component">服务器</text>
  
  <rect x="280" y="480" width="120" height="30" fill="#f8bbd9" stroke="#e91e63" stroke-width="1" rx="3"/>
  <text x="340" y="500" text-anchor="middle" class="component">网络</text>
  
  <rect x="460" y="480" width="120" height="30" fill="#f8bbd9" stroke="#e91e63" stroke-width="1" rx="3"/>
  <text x="520" y="500" text-anchor="middle" class="component">安全</text>
  
  <!-- 连接箭头 -->
  <line x1="160" y1="150" x2="160" y2="200" stroke="#666" stroke-width="1" marker-end="url(#arrow)"/>
  <line x1="340" y1="150" x2="340" y2="200" stroke="#666" stroke-width="1" marker-end="url(#arrow)"/>
  <line x1="520" y1="150" x2="520" y2="200" stroke="#666" stroke-width="1" marker-end="url(#arrow)"/>
  
  <line x1="160" y1="270" x2="160" y2="320" stroke="#666" stroke-width="1" marker-end="url(#arrow)"/>
  <line x1="340" y1="270" x2="340" y2="320" stroke="#666" stroke-width="1" marker-end="url(#arrow)"/>
  <line x1="520" y1="270" x2="520" y2="320" stroke="#666" stroke-width="1" marker-end="url(#arrow)"/>
  
  <line x1="160" y1="390" x2="160" y2="440" stroke="#666" stroke-width="1" marker-end="url(#arrow)"/>
  <line x1="340" y1="390" x2="340" y2="440" stroke="#666" stroke-width="1" marker-end="url(#arrow)"/>
  <line x1="520" y1="390" x2="520" y2="440" stroke="#666" stroke-width="1" marker-end="url(#arrow)"/>
  
  <defs>
    <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
      <polygon points="0 0, 10 3, 0 6" fill="#666"></polygon>
    </marker>
  </defs>
</svg>`
    },
    {
        id: 'tech1',
        name: '技术架构图',
        description: '适用于展示系统架构和技术组件',
        svgCode: `<svg width="1006" height="1077" viewBox="0 0 1006 1077" xmlns="http://www.w3.org/2000/svg">
  <!-- 
    主题：全人教育与未来素养模型 (Holistic Education & Future Competency Model)
    包含：
    1. 核心架构：本我 (Self)
    2. 中间层级：认知 vs 实践
    3. 黑色侧边节点：六大核心素养
    4. 外层虚线环与12个卫星节点：跨学科学习领域
    5. 顶部与底部标注：智慧 (Wisdom) / 基石 (Foundation)
  -->

  <!-- 背景色 -->
  <rect x="1" y="1" width="1000" height="1200" fill="#f7f7f7" class=""></rect>

  <!-- 定义样式 -->
  <defs>
    <style>
      .txt-serif { font-family: Alibaba PuHuiTi 3.0; font-weight: bold; }
      .txt-sans { font-family: Alibaba PuHuiTi 3.0; }
      .red-stroke { stroke: #802a2a; stroke-width: 2; fill: none; }
      .thin-red-stroke { stroke: #802a2a; stroke-width: 1.5; fill: none; }
      .black-stroke { stroke: #202020; stroke-width: 2; fill: none; }
      .dashed-stroke { stroke: #444; stroke-width: 1.5; fill: none; stroke-dasharray: 6, 6; }
      .node-black { fill: #1a1a1a; }
      .fill-bg { fill: #dadddf; }
    </style>
  </defs>

  <!-- ======================= Layer 0: 最外层虚线圆环 ======================= -->
  <circle cx="500" cy="500" r="410" class="dashed-stroke"></circle>

  <!-- ======================= Layer 1: 核心骨架 ======================= -->
  
  <!-- 上弧线 -->
  <path d="M 500 240 Q 900 300 900 500 Q 900 700 500 760" class="red-stroke" fill="none" opacity="0.2"></path>
  <!-- 下弧线 -->
  <path d="M 500 240 Q 100 300 100 500 Q 100 700 500 760" class="red-stroke" fill="none" transform="translate(1,0)" opacity="0.2"></path>
  

  <!-- 天端文字 -> 认知层 -->
  <g transform="translate(500, 315)">
    <text x="0" y="-30" text-anchor="middle" class="txt-sans" font-size="12" fill="#444">Cognitive Sphere</text>
    <text x="0" y="0" text-anchor="middle" class="txt-serif" font-size="32" fill="#202020" font-weight="900">认知</text>
    <text x="0" y="25" text-anchor="middle" class="txt-sans" font-size="18" fill="#202020" font-weight="bold">思维体系</text>
    <text x="0" y="42" text-anchor="middle" class="txt-sans" font-size="12" fill="#444">Mental Framework</text>
  </g>

  <!-- 地端文字 -> 实践层 -->
  <g transform="translate(500, 685)">
    <text x="0" y="-30" text-anchor="middle" class="txt-sans" font-size="12" fill="#444">Practical Sphere</text>
    <text x="0" y="0" text-anchor="middle" class="txt-serif" font-size="32" fill="#202020" font-weight="900">实践</text>
    <text x="0" y="25" text-anchor="middle" class="txt-sans" font-size="18" fill="#202020" font-weight="bold">社会行动 (生活应用)</text>
    <text x="0" y="42" text-anchor="middle" class="txt-sans" font-size="12" fill="#444">Social Action</text>
  </g>

  <!-- 核心中心 (一体 -> 本我) -->
  <g transform="translate(500, 500)">
    <text x="0" y="-45" text-anchor="middle" class="txt-sans" font-size="12" fill="#333">Inner Core</text>
    <text x="0" y="10" text-anchor="middle" class="txt-serif" font-size="55" fill="#202020" letter-spacing="5">本我</text>
    <text x="0" y="45" text-anchor="middle" class="txt-sans" font-size="16" fill="#202020" font-weight="bold">成长源点 (人格)</text>
    <text x="0" y="62" text-anchor="middle" class="txt-sans" font-size="11" fill="#444">Growth Origin (Personality)</text>
  </g>

  <!-- 四个红色椭圆 -->
  <!-- 左上: 构成 -> 科学 -->
  <g transform="translate(350, 430)">
    <ellipse cx="0" cy="0" rx="75" ry="28" class="red-stroke" fill="#dadddf"></ellipse>
    <text x="0" y="5" text-anchor="middle" class="txt-sans" font-size="20" fill="#333" font-weight="bold">科学</text>
    <text x="0" y="20" text-anchor="middle" class="txt-sans" font-size="10" fill="#555">Science</text>
    <circle cx="-97" cy="-22" r="14" class="black-stroke" fill="#dadddf" stroke-width="1"></circle>
    <text x="-97" y="-18" text-anchor="middle" class="txt-serif" font-size="12" fill="#333">真</text>
    <text x="-97" y="2" text-anchor="middle" class="txt-sans" font-size="8" fill="#555">Truth</text>
  </g>

  <!-- 右上: 运动 -> 艺术 -->
  <g transform="translate(650, 430)">
    <ellipse cx="0" cy="0" rx="75" ry="28" class="red-stroke" fill="#dadddf"></ellipse>
    <text x="0" y="5" text-anchor="middle" class="txt-sans" font-size="20" fill="#333" font-weight="bold">艺术</text>
    <text x="0" y="20" text-anchor="middle" class="txt-sans" font-size="10" fill="#555">Arts</text>
    <circle cx="93" cy="-21" r="14" class="black-stroke" fill="#dadddf" stroke-width="1"></circle>
    <text x="93" y="-17" text-anchor="middle" class="txt-serif" font-size="12" fill="#333">美</text>
    <text x="93" y="3" text-anchor="middle" class="txt-sans" font-size="8" fill="#555">Beauty</text>
  </g>

  <!-- 左下: 格物 -> 技术 -->
  <g transform="translate(350, 570)">
    <ellipse cx="0" cy="0" rx="75" ry="28" class="red-stroke" fill="#dadddf"></ellipse>
    <text x="0" y="5" text-anchor="middle" class="txt-sans" font-size="20" fill="#333" font-weight="bold">技术</text>
    <text x="0" y="20" text-anchor="middle" class="txt-sans" font-size="10" fill="#555">Tech</text>
    <circle cx="-96" cy="18" r="14" class="black-stroke" fill="#dadddf" stroke-width="1"></circle>
    <text x="-96" y="22" text-anchor="middle" class="txt-serif" font-size="12" fill="#333">术</text>
    <text x="-96" y="42" text-anchor="middle" class="txt-sans" font-size="8" fill="#555">Skill</text>
  </g>

  <!-- 右下: 语境 -> 社会 -->
  <g transform="translate(650, 570)">
    <ellipse cx="0" cy="0" rx="75" ry="28" class="red-stroke" fill="#dadddf"></ellipse>
    <text x="0" y="5" text-anchor="middle" class="txt-sans" font-size="20" fill="#333" font-weight="bold">社会</text>
    <text x="0" y="20" text-anchor="middle" class="txt-sans" font-size="10" fill="#555">Society</text>
    <circle cx="95" cy="10" r="14" class="black-stroke multi-selected" fill="#dadddf" stroke-width="1"></circle>
    <text x="95" y="14" text-anchor="middle" class="txt-serif multi-selected" font-size="12" fill="#333">善</text>
    <text x="95" y="34" text-anchor="middle" class="txt-sans multi-selected" font-size="8" fill="#555">Good</text>
  </g>

  <!-- 垂直内圈小圆 (图/文 -> 视/听) -->
  <g transform="translate(500, 410)">
    <circle cx="0" cy="0" r="16" class="black-stroke" fill="#dadddf" stroke-width="1"></circle>
    <text x="0" y="4" text-anchor="middle" class="txt-serif" font-size="14" fill="#333">观</text>
    <text x="0" y="-20" text-anchor="middle" class="txt-sans" font-size="10" fill="#555">Observe</text>
  </g>
  <g transform="translate(500, 590)">
    <circle cx="0" cy="0" r="16" class="black-stroke" fill="#dadddf" stroke-width="1.5"></circle>
    <text x="0" y="4" text-anchor="middle" class="txt-serif" font-size="14" fill="#333">听</text>
    <text x="0" y="28" text-anchor="middle" class="txt-sans" font-size="10" fill="#555">Listen</text>
  </g>

  <!-- 格物致知/开物成务 -> 探索未知/解决问题 -->
  <g transform="translate(380, 500)">
     <text x="0" y="-10" text-anchor="middle" class="txt-sans" font-size="12" fill="#666">探索未知</text>
     <text x="0" y="5" text-anchor="middle" class="txt-sans" font-size="8" fill="#777">Explore the Unknown</text>
     <text x="0" y="15" text-anchor="middle" class="txt-sans" font-size="8" fill="#777">to Build Knowledge</text>
  </g>
  <g transform="translate(620, 500)">
     <text x="0" y="-10" text-anchor="middle" class="txt-sans" font-size="12" fill="#666">解决问题</text>
     <text x="0" y="5" text-anchor="middle" class="txt-sans" font-size="8" fill="#777">Solve Problems to</text>
     <text x="0" y="15" text-anchor="middle" class="txt-sans" font-size="8" fill="#777">Create Value</text>
  </g>

  <!-- ======================= Layer 2: 顶部/底部大椭圆 ======================= -->
  <g transform="translate(500, 180)">
    <ellipse cx="0" cy="0" rx="116" ry="32" class="red-stroke" fill="#dadddf"></ellipse>
    <text x="0" y="5" text-anchor="middle" class="txt-sans" font-size="22" fill="#333" font-weight="bold">抽象思维</text>
    <text x="0" y="24" text-anchor="middle" class="txt-sans" font-size="12" fill="#555">Abstract Thinking</text>
  </g>

  <g transform="translate(500, 820)">
    <ellipse cx="0" cy="25" rx="116" ry="32" class="red-stroke" fill="#dadddf"></ellipse>
    <text x="1" y="30" text-anchor="middle" class="txt-sans" font-size="22" fill="#333" font-weight="bold">现实世界</text>
    <text x="0" y="49" text-anchor="middle" class="txt-sans" font-size="12" fill="#555">Real World</text>
  </g>

  <!-- 垂直轴新增小节点 (数/业 -> 智/行) -->
  <g transform="translate(500, 240)">
    <circle cx="0" cy="0" r="16" class="black-stroke" fill="#dadddf" stroke-width="1"></circle>
    <text x="0" y="4" text-anchor="middle" class="txt-serif" font-size="14" fill="#333">智</text>
    <text x="0" y="28" text-anchor="middle" class="txt-sans" font-size="10" fill="#555">Wisdom</text>
  </g>
  <g transform="translate(500, 760)">
    <circle cx="0" cy="0" r="16" class="black-stroke" fill="#dadddf" stroke-width="1.5"></circle>
    <text x="0" y="4" text-anchor="middle" class="txt-serif" font-size="14" fill="#333">行</text>
    <text x="0" y="-20" text-anchor="middle" class="txt-sans" font-size="10" fill="#555">Action</text>
  </g>

  <!-- ======================= Layer 3: 六个黑色实心节点及伴生圆 (素养) ======================= -->
  
  <!-- 1. 左上: 思考力 -->
  <g transform="translate(330, 260)">
    <circle cx="0" cy="0" r="28" class="node-black"></circle>
    <text x="0" y="4" text-anchor="middle" class="txt-serif" font-size="14" fill="#fff" font-weight="bold">思考力</text>
    <text x="40" y="4" text-anchor="start" class="txt-sans" font-size="12" fill="#333">Critical Thinking</text>
  </g>

  <!-- 2. 右上: 表达力 -->
  <g transform="translate(670, 260)">
    <circle cx="0" cy="0" r="28" class="node-black"></circle>
    <text x="0" y="4" text-anchor="middle" class="txt-serif" font-size="14" fill="#fff" font-weight="bold">表达力</text>
    <text x="-40" y="4" text-anchor="end" class="txt-sans" font-size="12" fill="#333">Expressive Ability</text>
  </g>

  <!-- 3. 左中: 想象力 -->
  <g transform="translate(190, 500)">
    <!-- 伴生小圆: 梦 -->
    <g transform="translate(-50, 0)">
       <circle cx="0" cy="0" r="16" class="black-stroke" fill="#dadddf" stroke-width="1.5"></circle>
       <text x="0" y="4" text-anchor="middle" class="txt-serif" font-size="14" fill="#333">梦</text>
       <text x="0" y="28" text-anchor="middle" class="txt-sans" font-size="10" fill="#555">Dream</text>
    </g>
    <!-- 主节点 -->
    <circle cx="0" cy="0" r="28" class="node-black"></circle>
    <text x="0" y="4" text-anchor="middle" class="txt-serif" font-size="14" fill="#fff" font-weight="bold">想象力</text>
    <text x="0" y="45" text-anchor="middle" class="txt-sans" font-size="12" fill="#333">Imagination</text>
  </g>

  <!-- 4. 右中: 共情力 -->
  <g transform="translate(810, 500)">
    <!-- 伴生小圆: 场 -> 境 -->
    <g transform="translate(50, 0)">
       <circle cx="0" cy="0" r="16" class="black-stroke" fill="#dadddf" stroke-width="1.5"></circle>
       <text x="0" y="4" text-anchor="middle" class="txt-serif" font-size="14" fill="#333">境</text>
       <text x="0" y="28" text-anchor="middle" class="txt-sans" font-size="10" fill="#555">Context</text>
    </g>
    <!-- 主节点 -->
    <circle cx="0" cy="0" r="28" class="node-black"></circle>
    <text x="0" y="4" text-anchor="middle" class="txt-serif" font-size="14" fill="#fff" font-weight="bold">共情力</text>
    <text x="0" y="45" text-anchor="middle" class="txt-sans" font-size="12" fill="#333">Empathy</text>
  </g>

  <!-- 5. 左下: 协作力 -->
  <g transform="translate(330, 740)">
    <circle cx="0" cy="0" r="28" class="node-black"></circle>
    <text x="0" y="4" text-anchor="middle" class="txt-serif" font-size="14" fill="#fff" font-weight="bold">协作力</text>
    <text x="-39" y="45" text-anchor="start" class="txt-sans" font-size="12" fill="#333">Collaboration</text>
  </g>

  <!-- 6. 右下: 创新力 -->
  <g transform="translate(670, 740)">
    <circle cx="0" cy="0" r="28" class="node-black"></circle>
    <text x="0" y="4" text-anchor="middle" class="txt-serif" font-size="14" fill="#fff" font-weight="bold">创新力</text>
    <text x="49" y="44" text-anchor="end" class="txt-sans" font-size="12" fill="#333">Innovation</text>
  </g>

  <!-- 四维 大字 -> 素 / 养 -->
  <text x="250" y="510" text-anchor="middle" class="txt-serif" font-size="40" fill="#111" font-weight="bold">素</text>
  <text x="750" y="510" text-anchor="middle" class="txt-serif" font-size="40" fill="#111" font-weight="bold">养</text>

  <!-- 象限内浮动文字 -->
  <g transform="translate(360, 320)">
    <text x="0" y="0" text-anchor="end" class="txt-sans" font-size="16" fill="#333">逻辑推演</text>
    <text x="0" y="15" text-anchor="end" class="txt-sans" font-size="10" fill="#555">Logical Deduction</text>
  </g>
  <g transform="translate(640, 320)">
    <text x="0" y="0" text-anchor="start" class="txt-sans" font-size="16" fill="#333">美学感知</text>
    <text x="0" y="15" text-anchor="start" class="txt-sans" font-size="10" fill="#555">Aesthetic Perception</text>
  </g>
  <g transform="translate(360, 680)">
    <text x="0" y="0" text-anchor="end" class="txt-sans" font-size="16" fill="#333">工程实践</text>
    <text x="0" y="15" text-anchor="end" class="txt-sans" font-size="10" fill="#555">Engineering Practice</text>
  </g>
  <g transform="translate(640, 680)">
    <text x="0" y="0" text-anchor="start" class="txt-sans" font-size="16" fill="#333">社区参与</text>
    <text x="0" y="15" text-anchor="start" class="txt-sans" font-size="10" fill="#555">Community Engage</text>
  </g>

  <!-- ======================= Layer 4: 外圈12个卫星节点 (跨学科) ======================= -->
  <!-- 左上象限 -->
  <g transform="translate(290, 160)">
     <circle cx="0" cy="0" r="16" class="black-stroke" fill="#dadddf" stroke-width="1.5"></circle>
     <circle cx="0" cy="0" r="10" fill="#ccc"></circle>
     <text x="-25" y="0" text-anchor="end" class="txt-sans" font-size="14" fill="#333" font-weight="bold">学习与AI</text>
     <text x="-25" y="15" text-anchor="end" class="txt-sans" font-size="10" fill="#555">Learning and AI</text>
  </g>
  <g transform="translate(180, 240)">
     <circle cx="0" cy="0" r="16" class="black-stroke" fill="#dadddf" stroke-width="1.5"></circle>
     <circle cx="0" cy="0" r="10" fill="#ccc"></circle>
     <text x="-25" y="0" text-anchor="end" class="txt-sans" font-size="14" fill="#333" font-weight="bold">学习与历史</text>
     <text x="-25" y="15" text-anchor="end" class="txt-sans" font-size="10" fill="#555">Learning and History</text>
  </g>
  <g transform="translate(120, 350)">
     <circle cx="0" cy="0" r="16" class="black-stroke" fill="#dadddf" stroke-width="1.5"></circle>
     <circle cx="0" cy="0" r="10" fill="#ccc"></circle>
     <text x="-25" y="0" text-anchor="end" class="txt-sans" font-size="14" fill="#333" font-weight="bold">学习与自然</text>
     <text x="-10" y="27" text-anchor="end" class="txt-sans selected" font-size="10" fill="#555">Learning and Nature</text>
  </g>

  <!-- 右上象限 -->
  <g transform="translate(710, 160)">
     <circle cx="0" cy="0" r="16" class="black-stroke" fill="#dadddf" stroke-width="1.5"></circle>
     <circle cx="0" cy="0" r="10" fill="#ccc"></circle>
     <text x="25" y="0" text-anchor="start" class="txt-sans" font-size="14" fill="#333" font-weight="bold">学习与未来</text>
     <text x="25" y="15" text-anchor="start" class="txt-sans" font-size="10" fill="#555">Learning and Future</text>
  </g>
  <g transform="translate(820, 240)">
     <circle cx="0" cy="0" r="16" class="black-stroke" fill="#dadddf" stroke-width="1.5"></circle>
     <circle cx="0" cy="0" r="10" fill="#ccc"></circle>
     <text x="25" y="0" text-anchor="start" class="txt-sans" font-size="14" fill="#333" font-weight="bold">学习与天文</text>
     <text x="25" y="15" text-anchor="start" class="txt-sans" font-size="10" fill="#555">Learning and Space</text>
  </g>
  <g transform="translate(880, 350)">
     <circle cx="0" cy="0" r="16" class="black-stroke" fill="#dadddf" stroke-width="1.5"></circle>
     <circle cx="0" cy="0" r="10" fill="#ccc"></circle>
     <text x="25" y="0" text-anchor="start" class="txt-sans" font-size="14" fill="#333" font-weight="bold">学习与文明</text>
     <text x="0" y="31" text-anchor="start" class="txt-sans" font-size="10" fill="#555">Learning and Civilization</text>
  </g>

  <!-- 左下象限 -->
  <g transform="translate(120, 650)">
     <circle cx="0" cy="0" r="16" class="black-stroke" fill="#dadddf" stroke-width="1.5"></circle>
     <circle cx="0" cy="0" r="10" fill="#ccc"></circle>
     <text x="-25" y="0" text-anchor="end" class="txt-sans" font-size="14" fill="#333" font-weight="bold">学习与生活</text>
     <text x="-25" y="15" text-anchor="end" class="txt-sans" font-size="10" fill="#555">Learning and Life</text>
  </g>
  <g transform="translate(180, 760)">
     <circle cx="0" cy="0" r="16" class="black-stroke" fill="#dadddf" stroke-width="1.5"></circle>
     <circle cx="0" cy="0" r="10" fill="#ccc"></circle>
     <text x="-25" y="0" text-anchor="end" class="txt-sans" font-size="14" fill="#333" font-weight="bold">学习与劳动</text>
     <text x="-25" y="15" text-anchor="end" class="txt-sans" font-size="10" fill="#555">Learning and Labor</text>
  </g>
  <g transform="translate(290, 840)">
     <circle cx="0" cy="0" r="16" class="black-stroke" fill="#dadddf" stroke-width="1.5"></circle>
     <circle cx="0" cy="0" r="10" fill="#ccc"></circle>
     <text x="-25" y="0" text-anchor="end" class="txt-sans" font-size="14" fill="#333" font-weight="bold">学习与生态</text>
     <text x="-25" y="15" text-anchor="end" class="txt-sans" font-size="10" fill="#555">Learning and Ecology</text>
  </g>

  <!-- 右下象限 -->
  <g transform="translate(880, 650)">
     <circle cx="0" cy="0" r="16" class="black-stroke" fill="#dadddf" stroke-width="1.5"></circle>
     <circle cx="0" cy="0" r="10" fill="#ccc"></circle>
     <text x="25" y="0" text-anchor="start" class="txt-sans" font-size="14" fill="#333" font-weight="bold">学习与地理</text>
     <text x="25" y="15" text-anchor="start" class="txt-sans" font-size="10" fill="#555">Learning and Geography</text>
  </g>
  <g transform="translate(820, 760)">
     <circle cx="0" cy="0" r="16" class="black-stroke" fill="#dadddf" stroke-width="1.5"></circle>
     <circle cx="0" cy="0" r="10" fill="#ccc"></circle>
     <text x="25" y="0" text-anchor="start" class="txt-sans" font-size="14" fill="#333" font-weight="bold">学习与价值</text>
     <text x="25" y="15" text-anchor="start" class="txt-sans" font-size="10" fill="#555">Learning and Value</text>
  </g>
  <g transform="translate(710, 840)">
     <circle cx="0" cy="0" r="16" class="black-stroke" fill="#dadddf" stroke-width="1.5"></circle>
     <circle cx="0" cy="0" r="10" fill="#ccc"></circle>
     <text x="25" y="0" text-anchor="start" class="txt-sans" font-size="14" fill="#333" font-weight="bold">学习与公益</text>
     <text x="25" y="15" text-anchor="start" class="txt-sans" font-size="10" fill="#555">Learning and Welfare</text>
  </g>

  <!-- ======================= Layer 5: 顶部/底部标注 ======================= -->
  <!-- 顶部 N -> 智慧 -->
  <g transform="translate(500, 80)">
    <text x="0" y="0" text-anchor="middle" class="txt-serif" font-size="40" fill="#202020">W</text>
    <text x="0" y="-53" text-anchor="middle" class="txt-sans" font-size="12" fill="#555">通识智慧</text>
    <text x="0" y="-39" text-anchor="middle" class="txt-sans" font-size="10" fill="#666">Universal Wisdom</text>
  </g>

  <!-- 底部 Point -> 基石 -->
  <g transform="translate(500, 920)">
    <circle cx="0" cy="0" r="10" fill="none" stroke="#202020" stroke-width="1.5"></circle>
    <text x="0" y="53" text-anchor="middle" class="txt-serif selected" font-size="40" fill="#202020">基</text>
    <text x="139" y="-10" text-anchor="middle" class="txt-sans" font-size="12" fill="#555">成长基石</text>
    <text x="139" y="6" text-anchor="middle" class="txt-sans" font-size="10" fill="#666">Growth Foundation</text>
  </g>

  <!-- 底部 Footer -->
  <text x="502" y="1001" text-anchor="middle" class="txt-sans" font-size="14" fill="#000" font-weight="bold">1+2+4+N 全人教育体系</text>
  <text x="503" y="1019" text-anchor="middle" class="txt-sans" font-size="10" fill="#555">"1+2+4+N" Holistic Education System</text>

</svg>`
    },
    {
        id: 'jiegouhua1',
        name: '技术架构图',
        description: '适用于展示系统架构和技术组件',
        svgCode: `<svg width="1200" height="1179" viewBox="0 0 1200 1179">
  <!-- 字体定义 -->
  <style>
    .zh-title { font-family: "Microsoft YaHei", "SimHei", sans-serif; font-weight: bold; }
    .zh-text { font-family: "Microsoft YaHei", "SimHei", sans-serif; }
    .en-text { font-family: Arial, Helvetica, sans-serif; }
    
    /* 样式类 */
    .main-title-zh { font-size: 36px; text-anchor: middle; fill: #000; }
    .main-title-en { font-size: 24px; text-anchor: middle; fill: #333; }
    
    .col-header-zh { font-size: 20px; text-anchor: middle; font-weight: bold; }
    .col-header-en { font-size: 12px; text-anchor: middle; fill: #333; }
    
    .stage-label-zh { font-size: 18px; text-anchor: end; font-weight: bold; }
    .stage-label-en { font-size: 12px; text-anchor: end; fill: #333; }
    
    .method-label-zh { font-size: 18px; text-anchor: middle; font-weight: bold; }
    .method-label-en { font-size: 12px; text-anchor: middle; fill: #333; }
    
    .cell-title-zh { font-size: 18px; text-anchor: middle; font-weight: bold; }
    .cell-title-en { font-size: 12px; text-anchor: middle; fill: #333; margin-bottom: 10px; }
    
    .cell-item-zh { font-size: 14px; text-anchor: middle; }
    .cell-item-en { font-size: 10px; text-anchor: middle; fill: #444; }
    .cell-item-en-small { font-size: 8.5px; text-anchor: middle; fill: #444; } /* 特殊处理长文本 */
    
    /* 线条样式 */
    .dotted-box { fill: none; stroke: #000; stroke-width: 2; stroke-dasharray: 5,5; rx: 20; }
    .solid-box { fill: none; stroke: #000; stroke-width: 2; rx: 40; }
  </style>

  <!-- 背景 -->
  

  <!-- 底部主标题 -->
  <g transform="translate(600, 1180)">
    <text y="-147" class="zh-title main-title-zh" x="0">“全人素养”成长体系</text>
    <text y="-108" class="en-text main-title-en" x="0">Holistic Competency Growth System</text>
  </g>

  <!-- ==================== 结构网格 (骨架) ==================== -->
  
  <!-- 纵向实线框 (Columns) -->
  <rect x="290" y="110" width="220" height="820" class="solid-box"></rect>
  <rect x="550" y="110" width="220" height="820" class="solid-box"></rect>
  <rect x="810" y="110" width="220" height="820" class="solid-box"></rect>

  <!-- 横向虚线框 (Rows) -->
  <!-- Row 1: Early Stage -->
  <rect x="140" y="150" width="880" height="230" class="dotted-box"></rect>
  <!-- Row 2: Mid Stage -->
  <rect x="140" y="400" width="880" height="230" class="dotted-box"></rect>
  <!-- Row 3: Late Stage -->
  <rect x="140" y="650" width="880" height="260" class="dotted-box"></rect>

  <!-- ==================== 顶部表头 (Column Headers) ==================== -->
  
  <g transform="translate(400, 80)">
    <text y="0" class="zh-title col-header-zh">科学思维</text>
    <text y="15" class="en-text col-header-en">Scientific Thinking</text>
  </g>
  
  <g transform="translate(660, 80)">
    <text y="0" class="zh-title col-header-zh">人文修养</text>
    <text y="15" class="en-text col-header-en">Humanistic Literacy</text> 
  </g>
  
  <g transform="translate(920, 80)">
    <text y="0" class="zh-title col-header-zh">社会责任</text>
    <text y="15" class="en-text col-header-en">Social Responsibility</text>
  </g>

  <!-- ==================== 第一阶段：启蒙期 (Early Stage) ==================== -->
  
  <g transform="translate(130, 250)">
    <text y="0" class="zh-title stage-label-zh">启蒙期</text>
    <text y="15" class="en-text stage-label-en">Initiation Stage</text>
  </g>

  <g transform="translate(215, 250)">
    <text y="0" class="zh-title method-label-zh">兴趣与感知</text>
    <text y="20" class="en-text method-label-en">Interest and Perception</text>
  </g>

  <!-- R1 C1 -->
  <g transform="translate(400, 190)">
    <text y="0" class="zh-title cell-title-zh">自然探索</text>
    <text y="15" class="en-text cell-title-en">Nature Exploration</text>
    <g transform="translate(0, 50)">
      <text y="0" class="zh-text cell-item-zh">基础观察日记</text>
      <text y="12" class="en-text cell-item-en">Basic Observation Diary</text>
      <text y="22" class="en-text cell-item-en">of Nature</text>
      <text y="45" class="zh-text cell-item-zh">生活中的数学</text>
      <text y="57" class="en-text cell-item-en">Mathematics in Daily</text>
      <text y="67" class="en-text cell-item-en">Life Context</text>
    </g>
  </g>

  <!-- R1 C2 -->
  <g transform="translate(660, 190)">
    <text y="0" class="zh-title cell-title-zh">情感认知</text>
    <text y="15" class="en-text cell-title-en">Emotional Cognition</text>
    <g transform="translate(0, 55)">
      <text y="0" class="zh-text cell-item-zh">自我情绪识别</text>
      <text y="15" class="en-text cell-item-en">Self-Emotion Recognition</text>
      <text y="40" class="zh-text cell-item-zh">阅读与表达</text>
      <text y="55" class="en-text cell-item-en">Reading and Expression</text>
    </g>
  </g>

  <!-- R1 C3 -->
  <g transform="translate(920, 180)">
    <text y="0" class="zh-title cell-title-zh">规则意识</text>
    <text y="15" class="en-text cell-title-en">Rule Awareness</text>
    <g transform="translate(0, 45)">
      <text y="0" class="zh-text cell-item-zh">礼仪与规范</text>
      <text y="12" class="en-text cell-item-en">Etiquette and Norms</text>
      <text y="30" class="zh-text cell-item-zh">什么是分享与合作</text>
      <text y="42" class="en-text cell-item-en">What is Sharing and Cooperation</text>
      <text y="60" class="zh-text cell-item-zh">我是社区小帮手</text>
      <text y="72" class="en-text cell-item-en">Community Little Helper</text>
      <text y="90" class="zh-text cell-item-zh">安全常识认知</text>
      <text y="102" class="en-text cell-item-en">Safety Awareness Basics</text>
    </g>
  </g>

  <!-- ==================== 第二阶段：成长期 (Mid Stage) ==================== -->

  <!-- 左侧标签 -->
  <g transform="translate(130, 500)">
    <text y="0" class="zh-title stage-label-zh">成长期</text>
    <text y="15" class="en-text stage-label-en">Growth Stage</text>
  </g>

  <!-- 方法标签 -->
  <g transform="translate(215, 500)">
    <text y="0" class="zh-title method-label-zh">能力与构建</text>
    <text y="20" class="en-text method-label-en">Capability Building</text>
  </g>

  <!-- R2 C1: 逻辑构建 -->
  <g transform="translate(400, 440)">
    <text y="0" class="zh-title cell-title-zh">逻辑构建</text>
    <text y="15" class="en-text cell-title-en">Logic Construction</text>
    <g transform="translate(0, 50)">
      <text y="0" class="zh-text cell-item-zh">批判性思维训练</text>
      <text y="12" class="en-text cell-item-en">Critical Thinking Training</text>
      
      <text y="30" class="zh-text cell-item-zh">信息检索与辨别</text>
      <text y="42" class="en-text cell-item-en">Info Retrieval & Screening</text>
      
      <text y="60" class="zh-text cell-item-zh">结构化思考</text>
      <text y="72" class="en-text cell-item-en">Structured Thinking</text>
      
      <text y="90" class="zh-text cell-item-zh">问题解决工作坊</text>
      <text y="102" class="en-text cell-item-en">Problem Solving Workshop</text>
    </g>
  </g>

  <!-- R2 C2: 审美提升 -->
  <g transform="translate(660, 440)">
    <text y="0" class="zh-title cell-title-zh">审美提升</text>
    <text y="15" class="en-text cell-title-en">Aesthetic Elevation</text>
    <g transform="translate(0, 50)">
      <text y="0" class="zh-text cell-item-zh">艺术鉴赏基础</text>
      <text y="12" class="en-text cell-item-en">Art Appreciation Basics</text>
      
      <text y="35" class="zh-text cell-item-zh">创意写作工坊</text>
      <text y="47" class="en-text cell-item-en">Creative Writing Workshop</text>
    </g>
  </g>

  <!-- R2 C3: 团队实践 -->
  <g transform="translate(920, 440)">
    <text y="0" class="zh-title cell-title-zh">团队实践</text>
    <text y="15" class="en-text cell-title-en">Team Practice</text>
    <g transform="translate(0, 50)">
      <text y="0" class="zh-text cell-item-zh">演讲与辩论</text>
      <text y="12" class="en-text cell-item-en">Speech and Debate</text>
      
      <text y="35" class="zh-text cell-item-zh">校园志愿服务</text>
      <text y="47" class="en-text cell-item-en">Campus Volunteer Service</text>
      
      <text y="70" class="zh-text cell-item-zh">环保项目调研</text>
      <text y="82" class="en-text cell-item-en">Eco-Project Research</text>
    </g>
  </g>

  <!-- ==================== 第三阶段：成熟期 (Late Stage) ==================== -->

  <!-- 左侧标签 -->
  <g transform="translate(130, 770)">
    <text y="0" class="zh-title stage-label-zh">成熟期</text>
    <text y="15" class="en-text stage-label-en">Maturity Stage</text>
  </g>

  <!-- 方法标签 -->
  <g transform="translate(215, 770)">
    <text y="0" class="zh-title method-label-zh">视野与实现</text>
    <text y="20" class="en-text method-label-en">Vision and Realization</text>
  </g>

  <!-- R3 C1: 全球视野 -->
  <g transform="translate(400, 700)">
    <text y="0" class="zh-title cell-title-zh">全球视野</text>
    <text y="15" class="en-text cell-title-en">Global Perspective</text>
    <g transform="translate(0, 50)">
      <text y="0" class="zh-text cell-item-zh">跨文化交流</text>
      <text y="12" class="en-text cell-item-en">Cross-Cultural Comm</text>
      
      <text y="30" class="zh-text cell-item-zh">科技前沿趋势</text>
      <text y="42" class="en-text cell-item-en">Frontier Tech Trends</text>
      
      <text y="60" class="zh-text cell-item-zh">经典文献研读</text>
      <text y="72" class="en-text cell-item-en">Classic Literature Study</text>
      
      <text y="90" class="zh-text cell-item-zh">宏观历史脉络</text>
      <text y="102" class="en-text cell-item-en">Macro Historical Context</text>
    </g>
  </g>

  <!-- R3 C2: 心理韧性 -->
  <g transform="translate(660, 705)">
    <text y="0" class="zh-title cell-title-zh">心理韧性</text>
    <text y="15" class="en-text cell-title-en">Mental Resilience</text>
    <g transform="translate(0, 50)">
      <text y="0" class="zh-text cell-item-zh">目标与时间管理</text>
      <text y="12" class="en-text cell-item-en">Goal & Time Management</text>
      
      <text y="30" class="zh-text cell-item-zh">抗挫折教育</text>
      <text y="42" class="en-text cell-item-en">Adversity Quotient Edu</text>
      
      <text y="60" class="zh-text cell-item-zh">决策心理学</text>
      <text y="72" class="en-text cell-item-en">Decision Psychology</text>
      
      <text y="90" class="zh-text cell-item-zh">同理心进阶</text>
      <text y="102" class="en-text cell-item-en">Advanced Empathy</text>
    </g>
  </g>

  <!-- R3 C3: 综合创变 -->
  <g transform="translate(920, 710)">
    <text y="0" class="zh-title cell-title-zh">综合创变</text>
    <text y="15" class="en-text cell-title-en">Integrative Innovation</text>
    <g transform="translate(0, 50)">
      <text y="0" class="zh-text cell-item-zh">社会创新方案</text>
      <text y="12" class="en-text cell-item-en">Social Innovation Plan</text>
      
      <text y="30" class="zh-text cell-item-zh">PBL项目式学习</text>
      <text y="42" class="en-text cell-item-en-small">Project-Based Learning (PBL)</text>
      
      <text y="60" class="zh-text cell-item-zh">未来领袖素养</text>
      <text y="72" class="en-text cell-item-en">Future Leader Literacy</text>
      
      <text y="90" class="zh-text cell-item-zh">职业生涯规划</text>
      <text y="102" class="en-text cell-item-en">Career Planning</text>
    </g>
  </g>

</svg>`
    },
    {
        id: 'tech-yuanxing',
        name: '技术架构图',
        description: '适用于展示系统架构和技术组件',
        svgCode: `<svg width="800" height="850" viewBox="-400 -400 800 850" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <!-- 字体样式定义 -->
    <style>
      .title-main { font-family: "SimHei", "Microsoft YaHei", sans-serif; fill: white; text-anchor: middle; font-weight: bold; font-size: 16px; }
      .text-ring-inner { font-family: "SimHei", "Microsoft YaHei", sans-serif; fill: #333; text-anchor: middle; font-size: 13px; font-weight: bold; }
      .text-ring-mid { font-family: "SimHei", "Microsoft YaHei", sans-serif; fill: #000; text-anchor: middle; font-size: 14px; font-weight: bold; letter-spacing: 1px;}
      .text-ring-outer { font-family: "SimHei", "Microsoft YaHei", sans-serif; fill: #333; text-anchor: middle; font-size: 11px; font-weight: bold; }
      .text-ring-final { font-family: "SimHei", "Microsoft YaHei", sans-serif; fill: #555; text-anchor: middle; font-size: 11px; font-weight: bold; }
      
      /* 针对左侧长文字的样式调整：字号加大到11px与这层其他文字一致，稍微收紧字间距以容纳长文 */
      .text-long-left { font-family: "SimHei", "Microsoft YaHei", sans-serif; fill: #555; text-anchor: middle; font-size: 11px; font-weight: bold; letter-spacing: -0.5px; }
      
      .circle-text-main { font-family: "SimHei", "Microsoft YaHei", sans-serif; fill: #000; text-anchor: middle; font-size: 13px; font-weight: bold; }
      .circle-text-sub { font-family: "Arial", sans-serif; fill: #333; text-anchor: middle; font-size: 10px; }
      .pill-text { font-family: "Arial", sans-serif; fill: white; text-anchor: middle; font-weight: bold; font-size: 12px; }
      .caption { font-family: "SimHei", "Microsoft YaHei", sans-serif; fill: #000; text-anchor: middle; font-size: 16px; font-weight: bold; }
    </style>
    
    <!-- === 路径修正区域 === -->
    
    <!-- 内环路径 -->
    <path id="arc-inner-left" d="M -80 20 A 85 85 0 0 1 -20 -80" transform="rotate(-15)"></path>
    <path id="arc-inner-right" d="M 20 -80 A 85 85 0 0 1 80 20" transform="rotate(-15)"></path>
    <path id="arc-inner-bottom" d="M -70 70 A 90 90 0 0 0 70 70"></path>

    <!-- 中环路径 -->
    <path id="arc-mid-tl1" d="M -115 -75 A 140 140 0 0 1 -35 -135"></path> 
    <path id="arc-mid-tl2" d="M -121.2 -70 A 140 140 0 0 0 -121.2 70"></path>
    <path id="arc-mid-tr1" d="M 40 -135 A 140 140 0 0 1 120 -60"></path>
    <path id="arc-mid-tr2" d="M 125 -55 A 140 140 0 0 1 125 55" transform="rotate(-5)"></path>

    <!-- 最外层文字路径 -->
    <path id="path-outer-tl" d="M -216 -125 A 250 250 0 0 1 0 -250"></path>
    <path id="path-outer-tr" d="M 0 -250 A 250 250 0 0 1 216 -125"></path>
    <path id="path-outer-r" d="M 216 -125 A 250 250 0 0 1 216 125"></path>
    
    <!-- 修正3：左侧长文字路径 -->
    <!-- 半径调整为250（与其他外圈文字一致），方向改为顺时针（脚朝内），位置覆盖左下到左上区域 -->
    <path id="path-outer-l-adjusted" d="M -100 229 A 250 250 0 0 1 -235 -85" fill="none"></path> 

  </defs>

  <!-- === 画布背景 === -->
  <rect x="-401" y="-402" width="800" height="850" fill="#fff" class=""></rect>

  <!-- ==================== 第一阶段：核心与内环 ==================== -->
  <g stroke="white" stroke-width="4">
    <path d="M 0 0 L 0 -105 A 105 105 0 0 1 90.9 52.5 Z" fill="#d9d9d9"></path>
    <path d="M 0 0 L 90.9 52.5 A 105 105 0 0 1 -90.9 52.5 Z" fill="#f0f0f0"></path>
    <path d="M 0 0 L -90.9 52.5 A 105 105 0 0 1 0 -105 Z" fill="#d9d9d9"></path>
  </g>
  <circle cx="0" cy="0" r="65" fill="black" stroke="white" stroke-width="3"></circle>
  <!-- 替换核心文字 -->
  <text x="0" y="-15" class="title-main">未来教育</text>
  <text x="0" y="5" class="title-main">生态构建</text>
  <text x="0" y="25" class="title-main">顶层设计</text>
  <!-- 替换内环文字 -->
  <text class="text-ring-inner"><textPath xlink:href="#arc-inner-left" startOffset="50%">人才培养目标</textPath></text>
  <text class="text-ring-inner"><textPath xlink:href="#arc-inner-right" startOffset="50%">社会赋能价值</textPath></text>
  <text class="text-ring-inner" font-size="12"><textPath xlink:href="#arc-inner-bottom" startOffset="50%" class="selected" x="0" y="-18" style="opacity: 1;">3C4L教育模式模型</textPath></text>

  <!-- ==================== 第二阶段：中环 ==================== -->
  <g stroke="white" stroke-width="3" fill="#cccccc">
      <!-- 左上 -->
      <path d="M 0 -108 A 108 108 0 0 0 -93.5 -54 L -138.5 -80 A 160 160 0 0 1 0 -160 Z" fill="#bfbfbf"></path>
      <path d="M -93.5 -54 A 108 108 0 0 0 -93.5 54 L -138.5 80 A 160 160 0 0 1 -138.5 -80 Z" fill="#bfbfbf"></path>
      <!-- 右上 -->
      <path d="M 0 -108 A 108 108 0 0 1 93.5 -54 L 138.5 -80 A 160 160 0 0 0 0 -160 Z" fill="#bfbfbf"></path>
      <path d="M 93.5 -54 A 108 108 0 0 1 93.5 54 L 138.5 80 A 160 160 0 0 0 138.5 -80 Z" fill="#bfbfbf"></path>
      <!-- 下方背景 -->
      <path d="M 93.5 54 A 108 108 0 0 1 -93.5 54 L -138.5 80 A 160 160 0 0 0 138.5 80 Z" fill="#e6e6e6"></path>
  </g>
  
  <!-- 替换中环文字 -->
  <text class="text-ring-mid">
      <textPath xlink:href="#arc-mid-tl1" startOffset="50%">教学场景分层</textPath>
  </text>
  <text class="text-ring-mid">
      <textPath xlink:href="#arc-mid-tl2" startOffset="50%">核心素养融合</textPath>
  </text>
  <text class="text-ring-mid">
      <textPath xlink:href="#arc-mid-tr1" startOffset="50%">家校共育机制</textPath>
  </text>
  <text class="text-ring-mid">
      <textPath xlink:href="#arc-mid-tr2" startOffset="50%">成长评价维度</textPath>
  </text>

  <!-- ==================== 第三阶段：外环功能层 ==================== -->
  <g stroke="white" stroke-width="2" fill="#e6e6e6">
      <!-- 各种扇形块 -->
      <path d="M 0 -160 L 0 -230 A 230 230 0 0 0 -59.5 -222.1 L -41.4 -154.5 A 160 160 0 0 1 0 -160 Z"></path>
      <path d="M -41.4 -154.5 L -59.5 -222.1 A 230 230 0 0 0 -115 -199.1 L -80 -138.5 A 160 160 0 0 1 -41.4 -154.5 Z"></path>
      <path d="M -80 -138.5 L -115 -199.1 A 230 230 0 0 0 -162.6 -162.6 L -113.1 -113.1 A 160 160 0 0 1 -80 -138.5 Z"></path>
      <path d="M -113.1 -113.1 L -162.6 -162.6 A 230 230 0 0 0 -199.1 -115 L -138.5 -80 A 160 160 0 0 1 -113.1 -113.1 Z"></path>
      
      <path d="M -138.5 -80 L -199.1 -115 A 230 230 0 0 0 -218.7 -71 L -152.1 -49.4 A 160 160 0 0 1 -138.5 -80 Z"></path>
      <path d="M -152.1 -49.4 L -218.7 -71 A 230 230 0 0 0 -228.7 -24 L -159.1 -16.7 A 160 160 0 0 1 -152.1 -49.4 Z"></path>
      <path d="M -159.1 -16.7 L -228.7 -24 A 230 230 0 0 0 -228.7 24 L -159.1 16.7 A 160 160 0 0 1 -159.1 -16.7 Z"></path>
      <path d="M -159.1 16.7 L -228.7 24 A 230 230 0 0 0 -218.7 71 L -152.1 49.4 A 160 160 0 0 1 -159.1 16.7 Z"></path>
      <path d="M -152.1 49.4 L -218.7 71 A 230 230 0 0 0 -199.1 115 L -138.5 80 A 160 160 0 0 1 -152.1 49.4 Z"></path>
      
      <path d="M 0 -160 L 0 -230 A 230 230 0 0 1 115 -199.1 L 80 -138.5 A 160 160 0 0 0 0 -160 Z"></path>
      <path d="M 80 -138.5 L 115 -199.1 A 230 230 0 0 1 199.1 -115 L 138.5 -80 A 160 160 0 0 0 80 -138.5 Z"></path>
      
      <path d="M 138.5 -80 L 199.1 -115 A 230 230 0 0 1 226.5 -39.9 L 157.5 -27.7 A 160 160 0 0 0 138.5 -80 Z"></path>
      <path d="M 157.5 -27.7 L 226.5 -39.9 A 230 230 0 0 1 226.5 39.9 L 157.5 27.7 A 160 160 0 0 0 157.5 -27.7 Z"></path>
      <path d="M 157.5 27.7 L 226.5 39.9 A 230 230 0 0 1 199.1 115 L 138.5 80 A 160 160 0 0 0 157.5 27.7 Z"></path>
  </g>

  <!-- 第三环文字：左上（技术/资源层） -->
  <g class="text-ring-outer">
      <text transform="rotate(-97.5) translate(195, 0) rotate(90)">云端<tspan x="0" dy="14">资源层</tspan></text>
      <text transform="rotate(-112.5) translate(195, 0) rotate(90)">数字<tspan x="0" dy="14">教学层</tspan></text>
      <text transform="rotate(-127.5) translate(195, 0) rotate(90)">实体<tspan x="0" dy="14">课堂层</tspan></text>
      <text transform="rotate(-142.5) translate(195, 0) rotate(90)">师生<tspan x="0" dy="14">互动层</tspan></text>
  </g>
  
  <!-- 第三环文字：左下（要素/协同） -->
  <g class="text-ring-outer">
      <text transform="rotate(-156) translate(195, 0) rotate(90)">课程<tspan x="0" dy="14" class="" style="opacity: 1;">基石</tspan></text>
      <text transform="rotate(-168) translate(195, 0) rotate(90)">知识<tspan x="0" dy="14" class="" style="opacity: 1;">共享</tspan></text>
      <text transform="rotate(-180) translate(195, 0) rotate(90)">文化<tspan x="0" dy="14" class="" style="opacity: 1;">共融</tspan></text>
      <text transform="rotate(-192) translate(195, 0) rotate(90)">实践<tspan x="0" dy="14" class="" style="opacity: 1;">内容</tspan></text>
      <text transform="rotate(-204) translate(195, 0) rotate(90)">参与<tspan x="0" dy="14" class="" style="opacity: 1;">主体</tspan></text>
  </g>
  
  <!-- 第三环文字：右上（机制） -->
  <g class="text-ring-outer">
      <text transform="rotate(-75) translate(195, 0) rotate(90)">课内教学闭环</text>
      <text transform="rotate(-45) translate(195, 0) rotate(90)">课外拓展延伸</text>
  </g>
  
  <!-- 第三环文字：右下（目标/效用） -->
  <g class="text-ring-outer">
      <text transform="rotate(-20) translate(195, 0) rotate(-90)">个性<tspan x="0" dy="14">成长</tspan></text>
      <text transform="rotate(0) translate(195, 0) rotate(-90)">终身<tspan x="0" dy="14">学习</tspan></text>
      <text transform="rotate(20) translate(195, 0) rotate(-90)">知行<tspan x="0" dy="14">合一</tspan></text>
  </g>

  <!-- ==================== 第四阶段：最外层文字与边框 ==================== -->
  
  <g fill="none" stroke="#ddd" stroke-width="2">
      <path d="M 0 -235 A 235 235 0 0 0 -203.5 -117.5"></path>
      <path d="M 0 -235 A 235 235 0 0 1 203.5 -117.5"></path>
      <path d="M 203.5 -117.5 A 235 235 0 0 1 203.5 117.5"></path>
      
  </g>

  <g stroke="white" stroke-width="4" fill="none">
     <line x1="-115" y1="-199.1" x2="-138" y2="-239"></line> 
     <line x1="0" y1="-230" x2="0" y2="-270"></line> 
     <line x1="115" y1="-199.1" x2="138" y2="-239"></line> 
     <line x1="226.5" y1="39.9" x2="260" y2="45"></line> 
     <line x1="-218.7" y1="71" x2="-255" y2="82"></line> 
  </g>

  <!-- 外围长文字：左上 -->
  <text class="text-ring-final">
      <textPath xlink:href="#path-outer-tl" startOffset="50%">构建全域多维教育融合逻辑、搭建智慧学习空间</textPath>
  </text>
  
  <!-- 外围长文字：右上 -->
  <text class="text-ring-final">
      <textPath xlink:href="#path-outer-tr" startOffset="50%">明确共育机制内容，确立核心素养培养路径</textPath>
  </text>
  
  <!-- 外围长文字：右侧 -->
  <path id="path-outer-r-adjusted" d="M 210 -100 A 240 240 0 0 1 220 80" fill="none"></path>
  <text class="text-ring-final">
      <textPath xlink:href="#path-outer-r-adjusted" startOffset="50%">明确教学评测机制与人才发展实现逻辑</textPath>
  </text>
  
  <!-- 外围长文字：左侧（长） -->
  <text class="text-long-left">
      <textPath xlink:href="#path-outer-l-adjusted" startOffset="80%" class="" style="opacity: 1;" x="35" y="-154">打造校园多元文化共生创新活力圈</textPath>
  </text>

  <!-- ==================== 下方组件 ==================== -->
  
  <!-- 3C组件 (原3H) -->
  <rect x="-20" y="113" width="40" height="20" rx="10" ry="10" fill="#333" class=""></rect>
  <text x="0" y="129" class="pill-text">3C</text>
  <g transform="translate(-80, 140)">
      <circle r="38" fill="#e0e0e0" stroke="white" stroke-width="2"></circle>
      <text y="-5" class="circle-text-main">认知能力</text>
      <text y="10" class="circle-text-sub">Cognitive</text>
      <text y="22" class="circle-text-sub">Ability</text>
  </g>
  <g transform="translate(80, 140)">
      <circle r="38" fill="#e0e0e0" stroke="white" stroke-width="2"></circle>
      <text y="-5" class="circle-text-main">合作精神</text>
      <text y="10" class="circle-text-sub">Social</text>
      <text y="22" class="circle-text-sub">Co-op</text>
  </g>
  <g transform="translate(0, 180)">
      <circle r="38" fill="#e0e0e0" stroke="white" stroke-width="2"></circle>
      <text y="-5" class="circle-text-main">创新思维</text>
      <text y="10" class="circle-text-sub">Creative</text>
      <text y="22" class="circle-text-sub">Mind</text>
  </g>

  <!-- 4L组件 (原4S) -->
  <rect x="-25" y="302" width="50" height="20" rx="10" ry="10" fill="#333" class=""></rect>
  <text x="0" y="316" class="pill-text">4L</text>

  <g transform="translate(-140, 220)">
      <circle r="35" fill="white" stroke="#999" stroke-width="2"></circle>
      <text y="-5" class="circle-text-main">主动学习</text>
      <text y="10" class="circle-text-sub">Active</text>
      <text y="22" class="circle-text-sub">Learning</text>
  </g>
  <g transform="translate(-50, 255)">
      <circle r="35" fill="white" stroke="#999" stroke-width="2"></circle>
      <text y="-5" class="circle-text-main">深度学习</text>
      <text y="10" class="circle-text-sub">Deep</text>
      <text y="22" class="circle-text-sub">Learning</text>
  </g>
  <g transform="translate(50, 255)">
      <circle r="35" fill="white" stroke="#999" stroke-width="2"></circle>
      <text y="-5" class="circle-text-main">泛在学习</text>
      <text y="10" class="circle-text-sub">Ubiq</text>
      <text y="22" class="circle-text-sub">Learning</text>
  </g>
  <g transform="translate(140, 220)">
      <circle r="35" fill="white" stroke="#999" stroke-width="2"></circle>
      <text y="-5" class="circle-text-main">探究学习</text>
      <text y="10" class="circle-text-sub">Inquiry</text>
      <text y="22" class="circle-text-sub">Learning</text>
  </g>

  <text x="0" y="400" class="caption">图 3.2 未来智慧教育生态体系结构 图片来源：笔者自制</text>

</svg>`
    },
    {
        id: 'zuzhijiagou1',
        name: '技术架构图',
        description: '适用于展示系统架构和技术组件',
        svgCode: `<svg width="1000" height="600" viewBox="0 0 1000 600" xmlns="http://www.w3.org/2000/svg">
  <!-- 
    ==========================================
    主题：生活化创意习作教学体系
    备注：原样式、配色、路径完全未动，仅替换文案
    ==========================================
  -->
  
  <defs>
    <!-- 箭头定义 (保持原样) -->
    <marker id="arrow-blue" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="#6BA4D0"></path>
    </marker>
    <marker id="arrow-purple" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="#7C6BC2"></path>
    </marker>
    <marker id="arrow-teal" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="#00A99D"></path>
    </marker>
    <marker id="arrow-grey-small" markerWidth="8" markerHeight="8" refX="7" refY="2.5" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,5 L7,2.5 z" fill="#999"></path>
    </marker>
    <marker id="arrow-teal-down" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="#00A99D"></path>
    </marker>
  </defs>

  <rect width="100%" height="100%" fill="white" class="" x="14" y="0"></rect>

  <!-- 1. 左侧主轴 -->
  <line x1="80" y1="148" x2="80" y2="218" stroke="#7C6BC2" stroke-width="3" marker-end="url(#arrow-purple)" class="selected"></line>
  <line x1="80" y1="287" x2="80" y2="427" stroke="#00A99D" stroke-width="3" marker-end="url(#arrow-teal)" class=""></line>

  <g transform="translate(80, 100)">
    <circle r="55" fill="#6BA4D0"></circle>
    <text x="0" y="-10" text-anchor="middle" fill="white" font-size="20" font-family="SimHei, 'Microsoft YaHei', sans-serif" font-weight="bold">课程</text>
    <text x="0" y="15" text-anchor="middle" fill="white" font-size="20" font-family="SimHei, 'Microsoft YaHei', sans-serif" font-weight="bold">架构</text>
  </g>

  <g transform="translate(80, 270)">
    <circle r="55" fill="#7C6BC2"></circle>
    <text x="0" y="-10" text-anchor="middle" fill="white" font-size="20" font-family="SimHei, 'Microsoft YaHei', sans-serif" font-weight="bold">推进</text>
    <text x="0" y="15" text-anchor="middle" fill="white" font-size="20" font-family="SimHei, 'Microsoft YaHei', sans-serif" font-weight="bold">策略</text>
  </g>

  <g transform="translate(80, 480)">
    <circle r="55" fill="#00A99D"></circle>
    <text x="0" y="-10" text-anchor="middle" fill="white" font-size="20" font-family="SimHei, 'Microsoft YaHei', sans-serif" font-weight="bold">育人</text>
    <text x="0" y="15" text-anchor="middle" fill="white" font-size="20" font-family="SimHei, 'Microsoft YaHei', sans-serif" font-weight="bold">愿景</text>
  </g>

  <!-- 2. 右侧容器 -->
  <rect x="150" y="40" width="830" height="400" rx="10" ry="10" fill="none" stroke="#B0C4DE" stroke-width="2" stroke-dasharray="8,5"></rect>
  <rect x="150" y="450" width="830" height="100" rx="10" ry="10" fill="none" stroke="#B0C4DE" stroke-width="2" stroke-dasharray="8,5"></rect>

  <line x1="149" y1="100" x2="174" y2="100" stroke="#6BA4D0" stroke-width="4" marker-end="url(#arrow-blue)" class=""></line>
  <line x1="149" y1="270" x2="174" y2="270" stroke="#7C6BC2" stroke-width="4" marker-end="url(#arrow-purple)" class=""></line>
  <line x1="149" y1="480" x2="174" y2="480" stroke="#00A99D" stroke-width="4" marker-end="url(#arrow-teal)" class=""></line>

  <!-- 3. 顶部行 -->
  <g transform="translate(170, 60)">
    <rect width="210" height="80" fill="#E9F4FC"></rect>
    <text x="105" y="30" text-anchor="middle" fill="#5A7090" font-size="18" font-family="SimHei, 'Microsoft YaHei', sans-serif" font-weight="bold">基于感官体验</text>
    <text x="105" y="60" text-anchor="middle" fill="#5A7090" font-size="18" font-family="SimHei, 'Microsoft YaHei', sans-serif" font-weight="bold">拓宽“观察”视野</text>
  </g>
  <g transform="translate(390, 90)">
     <polygon points="0,10 15,0 15,6 35,6 35,0 50,10 35,20 35,14 15,14 15,20" fill="#A3D1EF"></polygon>
  </g>
  <g transform="translate(450, 60)">
    <rect width="210" height="80" fill="#E9F4FC"></rect>
    <text x="105" y="30" text-anchor="middle" fill="#5A7090" font-size="18" font-family="SimHei, 'Microsoft YaHei', sans-serif" font-weight="bold">基于思维进阶</text>
    <text x="105" y="60" text-anchor="middle" fill="#5A7090" font-size="18" font-family="SimHei, 'Microsoft YaHei', sans-serif" font-weight="bold">理清“表达”脉络</text>
  </g>
  <g transform="translate(670, 90)">
     <polygon points="0,10 15,0 15,6 35,6 35,0 50,10 35,20 35,14 15,14 15,20" fill="#A3D1EF"></polygon>
  </g>
  <g transform="translate(730, 60)">
    <rect width="210" height="80" fill="#E9F4FC"></rect>
    <text x="105" y="30" text-anchor="middle" fill="#5A7090" font-size="18" font-family="SimHei, 'Microsoft YaHei', sans-serif" font-weight="bold">基于素养落地</text>
    <text x="105" y="60" text-anchor="middle" fill="#5A7090" font-size="18" font-family="SimHei, 'Microsoft YaHei', sans-serif" font-weight="bold">构建“评价”体系</text>
  </g>

  <g transform="translate(265, 140)">
     <polygon points="0,0 20,0 20,20 30,20 10,40 -10,20 0,20" fill="#C0C0E0" opacity="0.8"></polygon>
  </g>
  <g transform="translate(545, 140)">
     <polygon points="0,0 20,0 20,20 30,20 10,40 -10,20 0,20" fill="#C0C0E0" opacity="0.8"></polygon>
  </g>
  <g transform="translate(825, 140)">
     <polygon points="0,0 20,0 20,20 30,20 10,40 -10,20 0,20" fill="#C0C0E0" opacity="0.8"></polygon>
  </g>

  <!-- 4. 中间实施路径 -->
  <g transform="translate(170, 180)">
    <rect width="210" height="50" fill="#F3F2F9"></rect>
    <text x="105" y="20" text-anchor="middle" fill="#444" font-size="14" font-family="SimHei, 'Microsoft YaHei', sans-serif" font-weight="bold">立足生活，挖掘“素材库”</text>
    <text x="105" y="40" text-anchor="middle" fill="#666" font-size="12" font-family="SimHei, 'Microsoft YaHei', sans-serif">· 捕捉生活瞬间 · 积累写作语料</text>
  </g>
  <g transform="translate(170, 260)">
    <rect width="210" height="50" fill="#F3F2F9"></rect>
    <text x="105" y="20" text-anchor="middle" fill="#444" font-size="14" font-family="SimHei, 'Microsoft YaHei', sans-serif" font-weight="bold">立足支架，搭建“练笔台”</text>
    <text x="105" y="40" text-anchor="middle" fill="#666" font-size="12" font-family="SimHei, 'Microsoft YaHei', sans-serif">· 设计仿写任务 · 降低写作门槛</text>
  </g>
  <g transform="translate(170, 340)">
    <rect width="210" height="50" fill="#F3F2F9"></rect>
    <text x="105" y="20" text-anchor="middle" fill="#444" font-size="14" font-family="SimHei, 'Microsoft YaHei', sans-serif" font-weight="bold">立足常态，养成“日记本”</text>
    <text x="105" y="40" text-anchor="middle" fill="#666" font-size="12" font-family="SimHei, 'Microsoft YaHei', sans-serif">· 记录真实感悟 · 形成书写习惯</text>
  </g>

  <g transform="translate(450, 180)">
    <rect width="210" height="70" fill="#F9F9FC" rx="5"></rect>
    <text x="105" y="20" text-anchor="middle" fill="#C0504D" font-size="14" font-family="SimHei, 'Microsoft YaHei', sans-serif" font-weight="bold">开启全景感知之窗</text>
    <text x="59" y="40" fill="#333" font-size="12" font-family="SimHei, 'Microsoft YaHei', sans-serif" class="">· 调动五感体验</text>
    <text x="59" y="55" fill="#333" font-size="12" font-family="SimHei, 'Microsoft YaHei', sans-serif" class="">· 丰富表象储备</text>
    <text x="59" y="70" fill="#333" font-size="12" font-family="SimHei, 'Microsoft YaHei', sans-serif" class="">· 还原真实场景</text>
  </g>
  <g transform="translate(450, 265)">
    <rect width="210" height="70" fill="#F9F9FC" rx="5"></rect>
    <text x="105" y="20" text-anchor="middle" fill="#C0504D" font-size="14" font-family="SimHei, 'Microsoft YaHei', sans-serif" font-weight="bold">搭建思维可视化之桥</text>
    <text x="59" y="40" fill="#333" font-size="12" font-family="SimHei, 'Microsoft YaHei', sans-serif" class="">· 运用思维导图</text>
    <text x="59" y="55" fill="#333" font-size="12" font-family="SimHei, 'Microsoft YaHei', sans-serif" class="">· 梳理文章脉络</text>
    <text x="59" y="70" fill="#333" font-size="12" font-family="SimHei, 'Microsoft YaHei', sans-serif" class="">· 优化语言组织</text>
  </g>
  <g transform="translate(450, 350)">
    <rect width="210" height="70" fill="#F9F9FC" rx="5"></rect>
    <text x="105" y="20" text-anchor="middle" fill="#C0504D" font-size="14" font-family="SimHei, 'Microsoft YaHei', sans-serif" font-weight="bold">点燃创意表达之火</text>
    <text x="59" y="40" fill="#333" font-size="12" font-family="SimHei, 'Microsoft YaHei', sans-serif" class="">· 抒发真情实感</text>
    <text x="59" y="55" fill="#333" font-size="12" font-family="SimHei, 'Microsoft YaHei', sans-serif" class="">· 展现个性风格</text>
    <text x="59" y="70" fill="#333" font-size="12" font-family="SimHei, 'Microsoft YaHei', sans-serif" class="">· 体验创作乐趣</text>
  </g>

  <line x1="380" y1="205" x2="440" y2="205" stroke="#999" stroke-width="1.5" stroke-dasharray="3,2" marker-end="url(#arrow-grey-small)"></line>
  <line x1="380" y1="285" x2="440" y2="285" stroke="#999" stroke-width="1.5" stroke-dasharray="3,2" marker-end="url(#arrow-grey-small)"></line>
  <line x1="380" y1="365" x2="440" y2="365" stroke="#999" stroke-width="1.5" stroke-dasharray="3,2" marker-end="url(#arrow-grey-small)"></line>

  <!-- 
    ===================================================
    5. 右侧环形图
    ===================================================
  -->
  <g transform="translate(835, 290)">
    <!-- 灰色细环背景 -->
    <circle r="95" fill="none" stroke="#E0E0EF" stroke-width="1"></circle>

    <defs>
      <!-- 放大后的路径 -->
      <path id="path-top-right" d="M -15,-75 A 75,75 0 0,1 75,15"></path> 
      <path id="path-bottom-fixed" d="M -70,35 A 75,75 0 0,0 70,35"></path>
      <path id="path-top-left" d="M -75,15 A 75,75 0 0,1 -20,-75"></path>
    </defs>

    <!-- 1. Top Right -->
    <path d="M -15,-75 A 75,75 0 0,1 75,15" stroke="#7C6BC2" stroke-width="36" fill="none" stroke-linecap="round"></path>
    <text fill="white" font-size="16" font-weight="bold" font-family="SimHei, 'Microsoft YaHei', sans-serif" dy="6">
      <textPath href="#path-top-right" startOffset="50%" text-anchor="middle">绘制“观察图”</textPath>
    </text>

    <!-- 2. Bottom -->
    <path d="M -70,35 A 75,75 0 0,0 70,35" stroke="#7C6BC2" stroke-width="36" fill="none" stroke-linecap="round"></path>
    <text fill="white" font-size="16" font-weight="bold" font-family="SimHei, 'Microsoft YaHei', sans-serif" dy="6">
      <textPath href="#path-bottom-fixed" startOffset="50%" text-anchor="middle">构筑“思维网”</textPath>
    </text>

    <!-- 3. Left -->
    <path d="M -75,15 A 75,75 0 0,1 -20,-75" stroke="#7C6BC2" stroke-width="36" fill="none" stroke-linecap="round"></path>
    <text fill="white" font-size="16" font-weight="bold" font-family="SimHei, 'Microsoft YaHei', sans-serif" dy="6">
      <textPath href="#path-top-left" startOffset="50%" text-anchor="middle">生成“作品集”</textPath>
    </text>

    <!-- 环形连接箭头 -->
    <path d="M 80,20 L 85,27 L 75,27 Z" fill="#7C6BC2" transform="rotate(10)"></path>
    <path d="M -75,40 L -80,47 L -70,47 Z" fill="#7C6BC2" transform="rotate(110)"></path>
    
  </g>

  <!-- 6. 底部目标 -->
  <line x1="275" y1="390" x2="275" y2="455" stroke="#00A99D" stroke-width="2" stroke-dasharray="5,3" marker-end="url(#arrow-teal-down)"></line>
  <line x1="555" y1="420" x2="555" y2="455" stroke="#00A99D" stroke-width="2" stroke-dasharray="5,3" marker-end="url(#arrow-teal-down)"></line>
  <line x1="835" y1="395" x2="835" y2="455" stroke="#00A99D" stroke-width="2" stroke-dasharray="5,3" marker-end="url(#arrow-teal-down)"></line>

  <g transform="translate(170, 460)">
    <rect width="210" height="80" fill="#E0F2F1" rx="5"></rect>
    <text x="105" y="30" text-anchor="middle" fill="#000" font-size="18" font-family="SimHei, 'Microsoft YaHei', sans-serif" font-weight="bold">乐写：</text>
    <text x="105" y="60" text-anchor="middle" fill="#000" font-size="16" font-family="SimHei, 'Microsoft YaHei', sans-serif" font-weight="bold">重塑习作教学新样态</text>
  </g>

  <g transform="translate(450, 460)">
    <rect width="210" height="80" fill="#E0F2F1" rx="5"></rect>
    <text x="105" y="30" text-anchor="middle" fill="#000" font-size="18" font-family="SimHei, 'Microsoft YaHei', sans-serif" font-weight="bold">善思：</text>
    <text x="105" y="60" text-anchor="middle" fill="#000" font-size="16" font-family="SimHei, 'Microsoft YaHei', sans-serif" font-weight="bold">探索读写结合新路径</text>
  </g>

  <g transform="translate(730, 460)">
    <rect width="210" height="80" fill="#E0F2F1" rx="5"></rect>
    <text x="105" y="30" text-anchor="middle" fill="#000" font-size="18" font-family="SimHei, 'Microsoft YaHei', sans-serif" font-weight="bold">会评：</text>
    <text x="105" y="60" text-anchor="middle" fill="#000" font-size="16" font-family="SimHei, 'Microsoft YaHei', sans-serif" font-weight="bold">提升语言运用新高度</text>
  </g>

</svg>`
    },
    {
    id: 'tech-architecture1',
    name: '项目/技术/模式路径架构图',
    description: '适用于展示系统架构和技术组件',
    svgCode: `<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="1100" viewBox="0 0 1000 1100">
  <!-- 定义箭头标记 -->
  <defs>
    <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
      <polygon points="0 0, 10 3, 0 6" fill="#333"/>
    </marker>
    <style>
      text {
        font-family: "Microsoft YaHei", "PingFang SC", "Microsoft YaHei", "SimHei", sans-serif;
      }
    </style>
  </defs>
  
  <!-- 顶部分叉起点 -->
  <rect x="400" y="40" width="200" height="70" fill="white" stroke="#333" stroke-width="2" rx="0"/>
  <text x="500" y="70" text-anchor="middle" font-size="21.92" font-weight="bold" data-original-font-size="16" style="font-size: 21.92px;">研究起点</text>
  <text x="500" y="92" text-anchor="middle" font-size="17.810000000000002" data-original-font-size="13" style="font-size: 17.81px;">问题提出与目标确立</text>
  
  <line x1="500" y1="110" x2="250" y2="180" stroke="#333" stroke-width="1.5" marker-end="url(#arrowhead)"/>
  <line x1="500" y1="110" x2="750" y2="180" stroke="#333" stroke-width="1.5" marker-end="url(#arrowhead)"/>
  
  <!-- 左轨道：理论路径 -->
  <g id="left-track">
    <text x="250" y="160" text-anchor="middle" font-size="17.810000000000002" fill="#666" font-weight="bold" data-original-font-size="13" style="font-size: 17.81px;">← 理论构建路径 →</text>
    
    <!-- 第一层 -->
    <rect x="150" y="180" width="200" height="70" fill="white" stroke="#333" stroke-width="2" rx="0"/>
    <text x="250" y="210" text-anchor="middle" font-size="19.18" font-weight="bold" data-original-font-size="14" style="font-size: 19.18px;">理论溯源</text>
    <text x="250" y="232" text-anchor="middle" font-size="16.44" data-original-font-size="12" style="font-size: 16.44px;">文献梳理与理论演进</text>
    
    <rect x="50" y="180" width="80" height="70" fill="none" stroke="#666" stroke-width="1.5" stroke-dasharray="6,3" rx="0"/>
    <rect x="60" y="195" width="60" height="18" fill="white" stroke="#333" stroke-width="1" rx="0"/>
    <text x="90" y="208" text-anchor="middle" font-size="13.700000000000001" data-original-font-size="10" style="font-size: 13.7px;">经典</text>
    <rect x="60" y="218" width="60" height="18" fill="white" stroke="#333" stroke-width="1" rx="0"/>
    <text x="90" y="231" text-anchor="middle" font-size="13.700000000000001" data-original-font-size="10" style="font-size: 13.7px;">前沿</text>
    
    <line x1="250" y1="250" x2="250" y2="300" stroke="#333" stroke-width="1.5" marker-end="url(#arrowhead)"/>
    
    <!-- 第二层 -->
    <rect x="150" y="300" width="200" height="80" fill="white" stroke="#333" stroke-width="2" rx="0"/>
    <text x="250" y="330" text-anchor="middle" font-size="19.18" font-weight="bold" data-original-font-size="14" style="font-size: 19.18px;">概念界定</text>
    <text x="250" y="355" text-anchor="middle" font-size="16.44" data-original-font-size="12" style="font-size: 16.44px;">核心概念操作化</text>
    
    <rect x="370" y="300" width="100" height="80" fill="none" stroke="#666" stroke-width="1.5" stroke-dasharray="6,3" rx="0"/>
    <rect x="380" y="306" width="80" height="20" fill="white" stroke="#333" stroke-width="1" rx="0" class=""/>
    <text x="420" y="320" text-anchor="middle" font-size="13.700000000000001" data-original-font-size="10" style="font-size: 13.7px;" class="">内涵</text>
    <rect x="380" y="330" width="80" height="20" fill="white" stroke="#333" stroke-width="1" rx="0" class="multi-selected"/>
    <text x="420" y="344" text-anchor="middle" font-size="13.700000000000001" data-original-font-size="10" style="font-size: 13.7px;" class="multi-selected">外延</text>
    <rect x="380" y="355" width="80" height="20" fill="white" stroke="#333" stroke-width="1" rx="0" class="multi-selected"/>
    <text x="420" y="369" text-anchor="middle" font-size="13.700000000000001" data-original-font-size="10" style="font-size: 13.7px;" class="multi-selected">维度</text>
    
    <line x1="250" y1="380" x2="250" y2="430" stroke="#333" stroke-width="1.5" marker-end="url(#arrowhead)"/>
    
    <!-- 第三层 -->
    <rect x="150" y="430" width="200" height="80" fill="white" stroke="#333" stroke-width="2" rx="0"/>
    <text x="250" y="460" text-anchor="middle" font-size="19.18" font-weight="bold" data-original-font-size="14" style="font-size: 19.18px;">理论框架</text>
    <text x="250" y="485" text-anchor="middle" font-size="16.44" data-original-font-size="12" style="font-size: 16.44px;">模型构建与假设提出</text>
    
    <rect x="50" y="430" width="80" height="80" fill="none" stroke="#666" stroke-width="1.5" stroke-dasharray="6,3" rx="0"/>
    <rect x="60" y="445" width="60" height="22" fill="white" stroke="#333" stroke-width="1" rx="0"/>
    <text x="90" y="460" text-anchor="middle" font-size="13.700000000000001" data-original-font-size="10" style="font-size: 13.7px;">变量</text>
    <rect x="60" y="472" width="60" height="22" fill="white" stroke="#333" stroke-width="1" rx="0"/>
    <text x="90" y="487" text-anchor="middle" font-size="13.700000000000001" data-original-font-size="10" style="font-size: 13.7px;">关系</text>
    
    <line x1="250" y1="510" x2="250" y2="560" stroke="#333" stroke-width="1.5" marker-end="url(#arrowhead)"/>
    
    <!-- 第四层 -->
    <rect x="150" y="560" width="200" height="240" fill="white" stroke="#333" stroke-width="2" rx="0"/>
    <text x="250" y="615" text-anchor="middle" font-size="19.18" font-weight="bold" data-original-font-size="14" style="font-size: 19.18px;">理论检验</text>
    <text x="250" y="640" text-anchor="middle" font-size="19.18" font-weight="bold" data-original-font-size="14" style="font-size: 19.18px;">与</text>
    <text x="250" y="665" text-anchor="middle" font-size="19.18" font-weight="bold" data-original-font-size="14" style="font-size: 19.18px;">验证分析</text>
    
    <rect x="165" y="690" width="170" height="30" fill="white" stroke="#333" stroke-width="1" rx="0"/>
    <text x="250" y="710" text-anchor="middle" font-size="15.07" data-original-font-size="11" style="font-size: 15.07px;">假设检验与路径分析</text>
    
    <rect x="165" y="725" width="170" height="30" fill="white" stroke="#333" stroke-width="1" rx="0"/>
    <text x="250" y="745" text-anchor="middle" font-size="15.07" data-original-font-size="11" style="font-size: 15.07px;">中介与调节效应</text>
    
    <rect x="165" y="760" width="170" height="30" fill="white" stroke="#333" stroke-width="1" rx="0"/>
    <text x="250" y="780" text-anchor="middle" font-size="15.07" data-original-font-size="11" style="font-size: 15.07px;">模型适配度评估</text>
    
    <line x1="250" y1="800" x2="250" y2="870" stroke="#333" stroke-width="1.5" marker-end="url(#arrowhead)"/>
    
    <!-- 第五层 -->
    <rect x="150" y="870" width="200" height="100" fill="white" stroke="#333" stroke-width="2" rx="0"/>
    <text x="250" y="905" text-anchor="middle" font-size="19.18" font-weight="bold" data-original-font-size="14" style="font-size: 19.18px;">理论贡献</text>
    <text x="250" y="930" text-anchor="middle" font-size="16.44" data-original-font-size="12" style="font-size: 16.44px;">理论拓展与创新</text>
    <text x="250" y="952" text-anchor="middle" font-size="16.44" data-original-font-size="12" style="font-size: 16.44px;">学术价值阐释</text>
  </g>
  
  <!-- 右轨道：实践路径 -->
  <g id="right-track">
    <text x="750" y="160" text-anchor="middle" font-size="17.810000000000002" fill="#666" font-weight="bold" data-original-font-size="13" style="font-size: 17.81px;">← 实践探索路径 →</text>
    
    <!-- 第一层 -->
    <rect x="650" y="180" width="200" height="70" fill="white" stroke="#333" stroke-width="2" rx="0"/>
    <text x="750" y="210" text-anchor="middle" font-size="19.18" font-weight="bold" data-original-font-size="14" style="font-size: 19.18px;">现状调研</text>
    <text x="750" y="232" text-anchor="middle" font-size="16.44" data-original-font-size="12" style="font-size: 16.44px;">实践背景与问题识别</text>
    
    <rect x="870" y="180" width="80" height="70" fill="none" stroke="#666" stroke-width="1.5" stroke-dasharray="6,3" rx="0"/>
    <rect x="880" y="195" width="60" height="18" fill="white" stroke="#333" stroke-width="1" rx="0"/>
    <text x="910" y="208" text-anchor="middle" font-size="13.700000000000001" data-original-font-size="10" style="font-size: 13.7px;">需求</text>
    <rect x="880" y="218" width="60" height="18" fill="white" stroke="#333" stroke-width="1" rx="0"/>
    <text x="910" y="231" text-anchor="middle" font-size="13.700000000000001" data-original-font-size="10" style="font-size: 13.7px;">痛点</text>
    
    <line x1="750" y1="250" x2="750" y2="300" stroke="#333" stroke-width="1.5" marker-end="url(#arrowhead)"/>
    
    <!-- 第二层 -->
    <rect x="650" y="300" width="200" height="80" fill="white" stroke="#333" stroke-width="2" rx="0"/>
    <text x="750" y="330" text-anchor="middle" font-size="19.18" font-weight="bold" data-original-font-size="14" style="font-size: 19.18px;">方案设计</text>
    <text x="750" y="355" text-anchor="middle" font-size="16.44" data-original-font-size="12" style="font-size: 16.44px;">研究设计与方法选择</text>
    
    <rect x="530" y="300" width="100" height="80" fill="none" stroke="#666" stroke-width="1.5" stroke-dasharray="6,3" rx="0"/>
    <rect x="540" y="306" width="80" height="20" fill="white" stroke="#333" stroke-width="1" rx="0" class=""/>
    <text x="580" y="320" text-anchor="middle" font-size="13.700000000000001" data-original-font-size="10" style="font-size: 13.7px;" class="">定性</text>
    <rect x="540" y="331" width="80" height="20" fill="white" stroke="#333" stroke-width="1" rx="0" class=""/>
    <text x="580" y="345" text-anchor="middle" font-size="13.700000000000001" data-original-font-size="10" style="font-size: 13.7px;" class="">定量</text>
    <rect x="540" y="356" width="80" height="20" fill="white" stroke="#333" stroke-width="1" rx="0" class=""/>
    <text x="580" y="370" text-anchor="middle" font-size="13.700000000000001" data-original-font-size="10" style="font-size: 13.7px;" class="">混合</text>
    
    <line x1="750" y1="380" x2="750" y2="430" stroke="#333" stroke-width="1.5" marker-end="url(#arrowhead)"/>
    
    <!-- 第三层 -->
    <rect x="650" y="430" width="200" height="80" fill="white" stroke="#333" stroke-width="2" rx="0"/>
    <text x="750" y="460" text-anchor="middle" font-size="19.18" font-weight="bold" data-original-font-size="14" style="font-size: 19.18px;">数据采集</text>
    <text x="750" y="485" text-anchor="middle" font-size="16.44" data-original-font-size="12" style="font-size: 16.44px;">样本获取与信息收集</text>
    
    <rect x="870" y="430" width="80" height="80" fill="none" stroke="#666" stroke-width="1.5" stroke-dasharray="6,3" rx="0"/>
    <rect x="880" y="445" width="60" height="22" fill="white" stroke="#333" stroke-width="1" rx="0"/>
    <text x="910" y="460" text-anchor="middle" font-size="13.700000000000001" data-original-font-size="10" style="font-size: 13.7px;">问卷</text>
    <rect x="880" y="472" width="60" height="22" fill="white" stroke="#333" stroke-width="1" rx="0"/>
    <text x="910" y="487" text-anchor="middle" font-size="13.700000000000001" data-original-font-size="10" style="font-size: 13.7px;">访谈</text>
    
    <line x1="750" y1="510" x2="750" y2="560" stroke="#333" stroke-width="1.5" marker-end="url(#arrowhead)"/>
    
    <!-- 第四层 -->
    <rect x="650" y="560" width="200" height="240" fill="white" stroke="#333" stroke-width="2" rx="0"/>
    <text x="750" y="615" text-anchor="middle" font-size="19.18" font-weight="bold" data-original-font-size="14" style="font-size: 19.18px;">实证研究</text>
    <text x="750" y="640" text-anchor="middle" font-size="19.18" font-weight="bold" data-original-font-size="14" style="font-size: 19.18px;">与</text>
    <text x="750" y="665" text-anchor="middle" font-size="19.18" font-weight="bold" data-original-font-size="14" style="font-size: 19.18px;">案例分析</text>
    
    <rect x="665" y="690" width="170" height="30" fill="white" stroke="#333" stroke-width="1" rx="0"/>
    <text x="750" y="710" text-anchor="middle" font-size="15.07" data-original-font-size="11" style="font-size: 15.07px;">数据处理与分析</text>
    
    <rect x="665" y="725" width="170" height="30" fill="white" stroke="#333" stroke-width="1" rx="0"/>
    <text x="750" y="745" text-anchor="middle" font-size="15.07" data-original-font-size="11" style="font-size: 15.07px;">案例比较与归纳</text>
    
    <rect x="665" y="760" width="170" height="30" fill="white" stroke="#333" stroke-width="1" rx="0"/>
    <text x="750" y="780" text-anchor="middle" font-size="15.07" data-original-font-size="11" style="font-size: 15.07px;">规律总结与提炼</text>
    
    <line x1="750" y1="800" x2="750" y2="870" stroke="#333" stroke-width="1.5" marker-end="url(#arrowhead)"/>
    
    <!-- 第五层 -->
    <rect x="650" y="870" width="200" height="100" fill="white" stroke="#333" stroke-width="2" rx="0"/>
    <text x="750" y="905" text-anchor="middle" font-size="19.18" font-weight="bold" data-original-font-size="14" style="font-size: 19.18px;">实践价值</text>
    <text x="750" y="930" text-anchor="middle" font-size="16.44" data-original-font-size="12" style="font-size: 16.44px;">应用启示与建议</text>
    <text x="750" y="952" text-anchor="middle" font-size="16.44" data-original-font-size="12" style="font-size: 16.44px;">推广路径设计</text>
  </g>
  
  <!-- 中间连接与互动区域 -->
  <g id="middle-connections">
    <!-- 第一层连接 -->
    <line x1="350" y1="215" x2="650" y2="215" stroke="#999" stroke-width="1" stroke-dasharray="4,4"/>
    <rect x="425" y="200" width="150" height="30" fill="white" stroke="#666" stroke-width="1" rx="0"/>
    <text x="500" y="220" text-anchor="middle" font-size="15.07" data-original-font-size="11" style="font-size: 15.07px;">问题聚焦</text>
    
    <!-- 第二层连接 -->
    
    
    
    
    <!-- 第三层连接 -->
    <line x1="350" y1="470" x2="650" y2="470" stroke="#999" stroke-width="1" stroke-dasharray="4,4"/>
    <rect x="425" y="455" width="150" height="30" fill="white" stroke="#666" stroke-width="1" rx="0"/>
    <text x="500" y="475" text-anchor="middle" font-size="15.07" data-original-font-size="11" style="font-size: 15.07px;">假设-方案对接</text>
    
    <!-- 第四层大型交互区 -->
    <rect x="370" y="600" width="260" height="160" fill="none" stroke="#666" stroke-width="2" stroke-dasharray="6,3" rx="0"/>
    <text x="500" y="625" text-anchor="middle" font-size="17.810000000000002" font-weight="bold" data-original-font-size="13" style="font-size: 17.81px;">交互验证区</text>
    
    <rect x="385" y="645" width="230" height="35" fill="white" stroke="#333" stroke-width="1" rx="0"/>
    <text x="500" y="667" text-anchor="middle" font-size="15.07" data-original-font-size="11" style="font-size: 15.07px;">理论指导实践 → 实践检验理论</text>
    
    <rect x="385" y="690" width="230" height="30" fill="white" stroke="#333" stroke-width="1" rx="0"/>
    <text x="500" y="710" text-anchor="middle" font-size="15.07" data-original-font-size="11" style="font-size: 15.07px;">数据支撑 ← → 模型修正</text>
    
    <rect x="385" y="725" width="230" height="30" fill="white" stroke="#333" stroke-width="1" rx="0"/>
    <text x="500" y="745" text-anchor="middle" font-size="15.07" data-original-font-size="11" style="font-size: 15.07px;">发现提炼 ← → 机制解析</text>
    
    <line x1="350" y1="680" x2="370" y2="680" stroke="#333" stroke-width="1.5" marker-end="url(#arrowhead)"/>
    <line x1="630" y1="680" x2="650" y2="680" stroke="#333" stroke-width="1.5" marker-end="url(#arrowhead)"/>
    
    <!-- 第五层连接 -->
    <line x1="350" y1="920" x2="650" y2="920" stroke="#999" stroke-width="1" stroke-dasharray="4,4"/>
    <rect x="425" y="905" width="150" height="30" fill="white" stroke="#666" stroke-width="1" rx="0"/>
    <text x="500" y="925" text-anchor="middle" font-size="15.07" data-original-font-size="11" style="font-size: 15.07px;">成果整合</text>
  </g>
  
  <!-- 底部汇聚 -->
  <line x1="250" y1="970" x2="500" y2="1020" stroke="#333" stroke-width="1.5" marker-end="url(#arrowhead)"/>
  <line x1="750" y1="970" x2="500" y2="1020" stroke="#333" stroke-width="1.5" marker-end="url(#arrowhead)"/>
  
  <rect x="350" y="1020" width="300" height="70" fill="white" stroke="#333" stroke-width="3" rx="0"/>
  <text x="500" y="1050" text-anchor="middle" font-size="21.92" font-weight="bold" data-original-font-size="16" style="font-size: 21.92px;">研究总结</text>
  <text x="500" y="1072" text-anchor="middle" font-size="17.810000000000002" data-original-font-size="13" style="font-size: 17.81px;">理论-实践双重贡献与未来展望</text>
  
</svg>`
},
    {
        id: 'business-process',
        name: '万能图',
        description: '还没排好版，谁抽空弄好',
        svgCode: `<svg xmlns="http://www.w3.org/2000/svg" width="1185" height="2000" viewBox="0 0 1185 2000"><style>
    text { font-family: "Microsoft YaHei", "PingFang SC", "Microsoft YaHei", "SimHei", sans-serif; }</style>
  <!-- 定义箭头标记 -->
  <defs>
    <marker id="arrowhead1" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
      <polygon points="0,0 10,3 0,6" fill="#2C5282"></polygon>
    </marker>
    <marker id="arrowhead2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
      <polygon points="0,0 10,3 0,6" fill="#4A5568"></polygon>
    </marker>
    <marker id="arrowhead3" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
      <polygon points="0,0 10,3 0,6" fill="#1A365D"></polygon>
    </marker>
  </defs>

  <!-- 整体标题 -->
  <rect x="300" y="20" width="600" height="50" fill="#2C5282" stroke="#1A365D" stroke-width="2" class=""></rect>
  <text x="606" y="57" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="33.88" font-weight="bold" fill="white" data-original-font-size="22" style="font-size: 33.88px;" class="">节能与新能源汽车技术路线图2.0</text>

  <!-- 最外层虚线框 -->
  <rect x="30" y="90" width="1140" height="1480" fill="none" stroke="#4A5568" stroke-width="3" stroke-dasharray="12,6"></rect>

  <!-- ================ 第一层：技术发展趋势与愿景 ================ -->
  <g id="layer1">
    <!-- 左侧理论支撑列 -->
    <rect x="60" y="130" width="100" height="280" fill="#E6F2FF" stroke="#2C5282" stroke-width="2"></rect>
    <text x="110" y="160" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="21.560000000000002" fill="#1A365D" data-original-font-size="14" style="font-size: 21.56px;">三</text>
    <text x="110" y="185" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="21.560000000000002" fill="#1A365D" data-original-font-size="14" style="font-size: 21.56px;">大</text>
    <text x="110" y="210" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="21.560000000000002" fill="#1A365D" data-original-font-size="14" style="font-size: 21.56px;">革</text>
    <text x="110" y="235" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="21.560000000000002" fill="#1A365D" data-original-font-size="14" style="font-size: 21.56px;">命</text>
    <text x="110" y="260" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="21.560000000000002" fill="#1A365D" data-original-font-size="14" style="font-size: 21.56px;">驱</text>
    <text x="110" y="285" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="21.560000000000002" fill="#1A365D" data-original-font-size="14" style="font-size: 21.56px;">动</text>
    <text x="110" y="310" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="21.560000000000002" fill="#1A365D" data-original-font-size="14" style="font-size: 21.56px;">能</text>
    <text x="110" y="335" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="21.560000000000002" fill="#1A365D" data-original-font-size="14" style="font-size: 21.56px;">源</text>
    
    <!-- 左侧箭头指向中间 -->
    <line x1="160" y1="270" x2="220" y2="270" stroke="#2C5282" stroke-width="2" marker-end="url(#arrowhead1)"></line>

    <!-- 中间主流程区域虚线框 -->
    <rect x="240" y="130" width="720" height="280" fill="none" stroke="#4A5568" stroke-width="2" stroke-dasharray="8,4"></rect>
    
    <!-- 层次标题 -->
    <rect x="260" y="145" width="680" height="40" fill="#4A90E2" stroke="#2C5282" stroke-width="2"></rect>
    <text x="602" y="175" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="27.72" font-weight="bold" fill="white" data-original-font-size="18" style="font-size: 27.72px;" class="">技术发展趋势与愿景目标</text>

    <!-- 线性流程：5个模块 -->
    <rect x="270" y="210" width="120" height="60" fill="#B8D4E8" stroke="#2C5282" stroke-width="2"></rect>
    <text x="330" y="235" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="20.02" fill="#1A365D" data-original-font-size="13" style="font-size: 20.02px;">能源革命</text>
    <text x="330" y="253" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="20.02" fill="#1A365D" data-original-font-size="13" style="font-size: 20.02px;">电动化转型</text>

    <line x1="390" y1="240" x2="430" y2="240" stroke="#2C5282" stroke-width="2" marker-end="url(#arrowhead1)"></line>

    <rect x="450" y="210" width="120" height="60" fill="#B8D4E8" stroke="#2C5282" stroke-width="2"></rect>
    <text x="510" y="235" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="20.02" fill="#1A365D" data-original-font-size="13" style="font-size: 20.02px;">互联革命</text>
    <text x="510" y="253" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="20.02" fill="#1A365D" data-original-font-size="13" style="font-size: 20.02px;">网联化发展</text>

    <line x1="570" y1="240" x2="610" y2="240" stroke="#2C5282" stroke-width="2" marker-end="url(#arrowhead1)"></line>

    <rect x="787" y="209" width="120" height="60" fill="#B8D4E8" stroke="#2C5282" stroke-width="2" class=""></rect>
    <text x="847" y="234" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="20.02" fill="#1A365D" data-original-font-size="13" style="font-size: 20.02px;" class="">智能革命</text>
    <text x="847" y="252" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="20.02" fill="#1A365D" data-original-font-size="13" style="font-size: 20.02px;" class="">智能化升级</text>

    <line x1="852" y1="274" x2="852" y2="304" stroke="#2C5282" stroke-width="2" marker-end="url(#arrowhead1)" class="selected"></line>

    <rect x="630" y="320" width="120" height="60" fill="#B8D4E8" stroke="#2C5282" stroke-width="2"></rect>
    <text x="690" y="345" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="20.02" fill="#1A365D" data-original-font-size="13" style="font-size: 20.02px;">碳排放</text>
    <text x="690" y="363" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="20.02" fill="#1A365D" data-original-font-size="13" style="font-size: 20.02px;">2028年达峰</text>

    <line x1="630" y1="350" x2="570" y2="350" stroke="#2C5282" stroke-width="2" marker-end="url(#arrowhead1)"></line>

    <rect x="450" y="320" width="120" height="60" fill="#B8D4E8" stroke="#2C5282" stroke-width="2"></rect>
    <text x="510" y="345" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="20.02" fill="#1A365D" data-original-font-size="13" style="font-size: 20.02px;">新能源汽车</text>
    <text x="510" y="363" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="20.02" fill="#1A365D" data-original-font-size="13" style="font-size: 20.02px;">2035年50%</text>

    <!-- 右侧应用领域列 -->
    <rect x="1000" y="130" width="140" height="280" fill="#E6F2FF" stroke="#2C5282" stroke-width="2"></rect>
    <text x="1070" y="160" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="18.48" font-weight="bold" fill="#1A365D" data-original-font-size="12" style="font-size: 18.48px;">技术融合方向</text>
    <line x1="1020" y1="175" x2="1120" y2="175" stroke="#4A5568" stroke-width="1"></line>
    <text x="1070" y="200" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="16.94" fill="#1A365D" data-original-font-size="11" style="font-size: 16.94px;">低碳化</text>
    <line x1="1020" y1="215" x2="1120" y2="215" stroke="#4A5568" stroke-width="1"></line>
    <text x="1070" y="240" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="16.94" fill="#1A365D" data-original-font-size="11" style="font-size: 16.94px;">信息化</text>
    <line x1="1020" y1="255" x2="1120" y2="255" stroke="#4A5568" stroke-width="1"></line>
    <text x="1070" y="280" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="16.94" fill="#1A365D" data-original-font-size="11" style="font-size: 16.94px;">智能化</text>
    <line x1="1020" y1="295" x2="1120" y2="295" stroke="#4A5568" stroke-width="1"></line>
    <text x="1070" y="320" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="16.94" fill="#1A365D" data-original-font-size="11" style="font-size: 16.94px;">汽车+跨界</text>
    <line x1="1020" y1="335" x2="1120" y2="335" stroke="#4A5568" stroke-width="1"></line>
    <text x="1070" y="360" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="16.94" fill="#1A365D" data-original-font-size="11" style="font-size: 16.94px;">融合发展</text>

    <!-- 右侧箭头从中间指向 -->
    <line x1="960" y1="270" x2="1000" y2="270" stroke="#2C5282" stroke-width="2" marker-end="url(#arrowhead1)"></line>
  </g>

  <!-- 层间大箭头1 -->
  <polygon points="590,420 610,420 610,450 625,450 600,475 575,450 590,450" fill="#2C5282" stroke="#1A365D" stroke-width="2"></polygon>

  <!-- ================ 第二层：重点技术领域发展 ================ -->
  <g id="layer2">
    <!-- 左侧支撑 -->
    <rect x="66" y="505" width="88" height="368" fill="#E6F2FF" stroke="#2C5282" stroke-width="2"></rect>
    <text x="110" y="530" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="21.560000000000002" fill="#1A365D" data-original-font-size="14" style="font-size: 21.56px;">九</text>
    <text x="110" y="555" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="21.560000000000002" fill="#1A365D" data-original-font-size="14" style="font-size: 21.56px;">大</text>
    <text x="110" y="580" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="21.560000000000002" fill="#1A365D" data-original-font-size="14" style="font-size: 21.56px;">重</text>
    <text x="110" y="605" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="21.560000000000002" fill="#1A365D" data-original-font-size="14" style="font-size: 21.56px;">点</text>
    <text x="110" y="630" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="21.560000000000002" fill="#1A365D" data-original-font-size="14" style="font-size: 21.56px;">领</text>
    <text x="110" y="655" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="21.560000000000002" fill="#1A365D" data-original-font-size="14" style="font-size: 21.56px;">域</text>
    <line x1="80" y1="675" x2="140" y2="675" stroke="#4A5568" stroke-width="1"></line>
    <text x="110" y="700" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="21.560000000000002" fill="#1A365D" data-original-font-size="14" style="font-size: 21.56px;">技</text>
    <text x="110" y="725" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="21.560000000000002" fill="#1A365D" data-original-font-size="14" style="font-size: 21.56px;">术</text>
    <text x="110" y="750" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="21.560000000000002" fill="#1A365D" data-original-font-size="14" style="font-size: 21.56px;">路</text>
    <text x="110" y="775" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="21.560000000000002" fill="#1A365D" data-original-font-size="14" style="font-size: 21.56px;">线</text>
    <line x1="80" y1="795" x2="140" y2="795" stroke="#4A5568" stroke-width="1"></line>
    <text x="110" y="820" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="21.560000000000002" fill="#1A365D" data-original-font-size="14" style="font-size: 21.56px;">产</text>
    <text x="110" y="845" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="21.560000000000002" fill="#1A365D" data-original-font-size="14" style="font-size: 21.56px;">业</text>
    <text x="110" y="870" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="21.560000000000002" fill="#1A365D" data-original-font-size="14" style="font-size: 21.56px;">生</text>
    
    
    
    

    <!-- 中间主流程区域 - 大虚线框包含左列 -->
    <rect x="180" y="484" width="780" height="380" fill="none" stroke="#4A5568" stroke-width="2" stroke-dasharray="8,4" class=""></rect>
    
    <!-- 层次标题 -->
    <rect x="180" y="515" width="760" height="40" fill="#3B7CBF" stroke="#2C5282" stroke-width="2" class=""></rect>
    <text x="560" y="542" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="27.72" font-weight="bold" fill="white" data-original-font-size="18" style="font-size: 27.72px;">重点技术领域发展路线</text>

    <!-- 并行分支1：节能汽车技术 -->
    <rect x="240" y="580" width="140" height="50" fill="#8AB4D5" stroke="#2C5282" stroke-width="2"></rect>
    <text x="310" y="605" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="18.48" fill="#1A365D" data-original-font-size="12" style="font-size: 18.48px;">节能汽车</text>
    <text x="310" y="622" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="18.48" fill="#1A365D" data-original-font-size="12" style="font-size: 18.48px;">混合动力</text>

    <line x1="380" y1="605" x2="420" y2="605" stroke="#2C5282" stroke-width="2" marker-end="url(#arrowhead1)"></line>

    <rect x="440" y="580" width="130" height="50" fill="#8AB4D5" stroke="#2C5282" stroke-width="2"></rect>
    <text x="505" y="605" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="18.48" fill="#1A365D" data-original-font-size="12" style="font-size: 18.48px;">纯电动</text>
    <text x="505" y="622" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="18.48" fill="#1A365D" data-original-font-size="12" style="font-size: 18.48px;">PHEV</text>

    <line x1="570" y1="605" x2="610" y2="605" stroke="#2C5282" stroke-width="2" marker-end="url(#arrowhead1)"></line>

    <rect x="630" y="580" width="130" height="50" fill="#8AB4D5" stroke="#2C5282" stroke-width="2"></rect>
    <text x="695" y="605" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="18.48" fill="#1A365D" data-original-font-size="12" style="font-size: 18.48px;">燃料电池</text>
    <text x="695" y="622" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="18.48" fill="#1A365D" data-original-font-size="12" style="font-size: 18.48px;">汽车</text>

    <line x1="760" y1="605" x2="800" y2="605" stroke="#2C5282" stroke-width="2" marker-end="url(#arrowhead1)"></line>

    <rect x="820" y="580" width="110" height="50" fill="#6A9BC3" stroke="#2C5282" stroke-width="2"></rect>
    <text x="875" y="605" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="18.48" fill="white" font-weight="bold" data-original-font-size="12" style="font-size: 18.48px;">新能源</text>
    <text x="875" y="622" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="18.48" fill="white" font-weight="bold" data-original-font-size="12" style="font-size: 18.48px;">整车</text>

    <!-- 并行分支2：核心零部件技术 -->
    <rect x="240" y="660" width="140" height="50" fill="#8AB4D5" stroke="#2C5282" stroke-width="2"></rect>
    <text x="310" y="685" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="18.48" fill="#1A365D" data-original-font-size="12" style="font-size: 18.48px;">动力电池</text>
    <text x="310" y="702" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="18.48" fill="#1A365D" data-original-font-size="12" style="font-size: 18.48px;">275Wh/kg</text>

    <line x1="380" y1="685" x2="420" y2="685" stroke="#2C5282" stroke-width="2" marker-end="url(#arrowhead1)"></line>

    <rect x="440" y="660" width="130" height="50" fill="#8AB4D5" stroke="#2C5282" stroke-width="2"></rect>
    <text x="505" y="685" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="18.48" fill="#1A365D" data-original-font-size="12" style="font-size: 18.48px;">电驱动</text>
    <text x="505" y="702" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="18.48" fill="#1A365D" data-original-font-size="12" style="font-size: 18.48px;">总成</text>

    <!-- 循环箭头 -->
    <line x1="505" y1="660" x2="505" y2="640" stroke="#4A5568" stroke-width="2" stroke-dasharray="4,2"></line>
    <line x1="505" y1="640" x2="310" y2="640" stroke="#4A5568" stroke-width="2" stroke-dasharray="4,2"></line>
    <line x1="310" y1="640" x2="310" y2="660" stroke="#4A5568" stroke-width="2" stroke-dasharray="4,2" marker-end="url(#arrowhead2)"></line>
    <text x="410" y="635" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="15.4" fill="#4A5568" data-original-font-size="10" style="font-size: 15.4px;">技术迭代</text>

    <line x1="570" y1="685" x2="610" y2="685" stroke="#2C5282" stroke-width="2" marker-end="url(#arrowhead1)"></line>

    <rect x="630" y="660" width="130" height="50" fill="#8AB4D5" stroke="#2C5282" stroke-width="2"></rect>
    <text x="695" y="685" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="18.48" fill="#1A365D" data-original-font-size="12" style="font-size: 18.48px;">智能网联</text>
    <text x="695" y="702" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="18.48" fill="#1A365D" data-original-font-size="12" style="font-size: 18.48px;">汽车</text>

    <line x1="760" y1="685" x2="800" y2="685" stroke="#2C5282" stroke-width="2" marker-end="url(#arrowhead1)"></line>

    <rect x="820" y="660" width="110" height="50" fill="#6A9BC3" stroke="#2C5282" stroke-width="2"></rect>
    <text x="875" y="685" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="18.48" fill="white" font-weight="bold" data-original-font-size="12" style="font-size: 18.48px;">智能化</text>
    <text x="875" y="702" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="18.48" fill="white" font-weight="bold" data-original-font-size="12" style="font-size: 18.48px;">技术</text>

    <!-- 并行分支3：支撑技术 -->
    <rect x="240" y="740" width="140" height="50" fill="#8AB4D5" stroke="#2C5282" stroke-width="2"></rect>
    <text x="310" y="760" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="18.48" fill="#1A365D" data-original-font-size="12" style="font-size: 18.48px;">轻量化</text>
    <text x="310" y="777" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="18.48" fill="#1A365D" data-original-font-size="12" style="font-size: 18.48px;">技术</text>

    <line x1="380" y1="765" x2="420" y2="765" stroke="#2C5282" stroke-width="2" marker-end="url(#arrowhead1)"></line>

    <rect x="440" y="740" width="130" height="50" fill="#8AB4D5" stroke="#2C5282" stroke-width="2"></rect>
    <text x="505" y="765" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="18.48" fill="#1A365D" data-original-font-size="12" style="font-size: 18.48px;">智能制造</text>
    <text x="505" y="782" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="18.48" fill="#1A365D" data-original-font-size="12" style="font-size: 18.48px;">装备</text>

    <line x1="570" y1="765" x2="610" y2="765" stroke="#2C5282" stroke-width="2" marker-end="url(#arrowhead1)"></line>

    <rect x="630" y="740" width="130" height="50" fill="#8AB4D5" stroke="#2C5282" stroke-width="2"></rect>
    <text x="695" y="760" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="18.48" fill="#1A365D" data-original-font-size="12" style="font-size: 18.48px;">充电</text>
    <text x="695" y="777" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="18.48" fill="#1A365D" data-original-font-size="12" style="font-size: 18.48px;">基础设施</text>

    <line x1="760" y1="765" x2="800" y2="765" stroke="#2C5282" stroke-width="2" marker-end="url(#arrowhead1)"></line>

    <rect x="820" y="740" width="110" height="50" fill="#6A9BC3" stroke="#2C5282" stroke-width="2"></rect>
    <text x="875" y="765" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="18.48" fill="white" font-weight="bold" data-original-font-size="12" style="font-size: 18.48px;">支撑</text>
    <text x="875" y="782" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="18.48" fill="white" font-weight="bold" data-original-font-size="12" style="font-size: 18.48px;">体系</text>

    <!-- 三层汇聚 -->
    <line x1="875" y1="791" x2="875" y2="820" stroke="#2C5282" stroke-width="3"></line>
    <line x1="875" y1="820" x2="695" y2="820" stroke="#2C5282" stroke-width="3" marker-end="url(#arrowhead1)"></line>

    <rect x="460" y="800" width="235" height="55" fill="#4A7BA7" stroke="#2C5282" stroke-width="2"></rect>
    <text x="577" y="825" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="21.560000000000002" fill="white" font-weight="bold" data-original-font-size="14" style="font-size: 21.56px;">产业协同与集成创新</text>

    <!-- 右侧指标 -->
    <rect x="1000" y="500" width="140" height="380" fill="#E6F2FF" stroke="#2C5282" stroke-width="2" class=""></rect>
    <text x="1070" y="530" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="18.48" font-weight="bold" fill="#1A365D" data-original-font-size="12" style="font-size: 18.48px;" class="">关键技术指标</text>
    <line x1="1020" y1="545" x2="1120" y2="545" stroke="#4A5568" stroke-width="1"></line>
    
    <text x="1070" y="575" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="16.94" fill="#1A365D" data-original-font-size="11" style="font-size: 16.94px;" class="">乘用车油耗:4L/100km(2035)</text>
    <text x="1070" y="610" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="16.94" fill="#1A365D" data-original-font-size="11" style="font-size: 16.94px;" class="">新能源车占比:50%(2035)</text>
    <text x="1070" y="645" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="16.94" fill="#1A365D" data-original-font-size="11" style="font-size: 16.94px;" class="">动力电池:300Wh/kg(2035)</text>
    <text x="1070" y="680" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="16.94" fill="#1A365D" data-original-font-size="11" style="font-size: 16.94px;" class="">燃料电池车:100万辆(2035)</text>
    <text x="1070" y="715" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="16.94" fill="#1A365D" data-original-font-size="11" style="font-size: 16.94px;" class="">智能网联:HA级应用(2035)</text>
    <text x="1070" y="750" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="16.94" fill="#1A365D" data-original-font-size="11" style="font-size: 16.94px;">充电桩:122万个(2019)</text>
    <text x="1070" y="785" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="16.94" fill="#1A365D" data-original-font-size="11" style="font-size: 16.94px;">加氢站:5000座(2035)</text>
    <text x="1070" y="820" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="16.94" fill="#1A365D" data-original-font-size="11" style="font-size: 16.94px;">研发投入:3.5%营收</text>
    <text x="1070" y="855" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="16.94" fill="#1A365D" data-original-font-size="11" style="font-size: 16.94px;">发明专利:13.4万件(2019)</text>

    <line x1="960" y1="690" x2="1000" y2="690" stroke="#2C5282" stroke-width="2" marker-end="url(#arrowhead1)"></line>
  </g>

  <!-- 层间大箭头2 -->
  <polygon points="590,890 610,890 610,920 625,920 600,945 575,920 590,920" fill="#2C5282" stroke="#1A365D" stroke-width="2"></polygon>

  <!-- ================ 第三层：战略支撑与实施保障 ================ -->
  <g id="layer3">
    <!-- 中间主流程区域 -->
    <rect x="60" y="970" width="900" height="320" fill="none" stroke="#4A5568" stroke-width="2" stroke-dasharray="8,4"></rect>
    
    <!-- 层次标题 -->
    <rect x="80" y="985" width="860" height="40" fill="#2D5F8D" stroke="#2C5282" stroke-width="2"></rect>
    <text x="510" y="1012" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="27.72" font-weight="bold" fill="white" data-original-font-size="18" style="font-size: 27.72px;">战略支撑与实施保障体系</text>

    <!-- 循环流程：7个模块形成闭环 -->
    <rect x="100" y="1050" width="150" height="55" fill="#A3C7E0" stroke="#2C5282" stroke-width="2"></rect>
    <text x="175" y="1073" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="20.02" fill="#1A365D" data-original-font-size="13" style="font-size: 20.02px;">政策协同</text>
    <text x="175" y="1090" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="20.02" fill="#1A365D" data-original-font-size="13" style="font-size: 20.02px;">与法规标准</text>

    <line x1="250" y1="1077" x2="290" y2="1077" stroke="#2C5282" stroke-width="2" marker-end="url(#arrowhead1)"></line>

    <rect x="310" y="1050" width="150" height="55" fill="#A3C7E0" stroke="#2C5282" stroke-width="2"></rect>
    <text x="385" y="1073" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="20.02" fill="#1A365D" data-original-font-size="13" style="font-size: 20.02px;">创新体系</text>
    <text x="385" y="1090" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="20.02" fill="#1A365D" data-original-font-size="13" style="font-size: 20.02px;">建设</text>

    <line x1="460" y1="1077" x2="500" y2="1077" stroke="#2C5282" stroke-width="2" marker-end="url(#arrowhead1)"></line>

    <rect x="520" y="1050" width="150" height="55" fill="#A3C7E0" stroke="#2C5282" stroke-width="2"></rect>
    <text x="595" y="1073" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="20.02" fill="#1A365D" data-original-font-size="13" style="font-size: 20.02px;">零部件体系</text>
    <text x="595" y="1090" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="20.02" fill="#1A365D" data-original-font-size="13" style="font-size: 20.02px;">安全可控</text>

    <line x1="670" y1="1077" x2="710" y2="1077" stroke="#2C5282" stroke-width="2" marker-end="url(#arrowhead1)"></line>

    <rect x="730" y="1050" width="150" height="55" fill="#A3C7E0" stroke="#2C5282" stroke-width="2"></rect>
    <text x="805" y="1073" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="20.02" fill="#1A365D" data-original-font-size="13" style="font-size: 20.02px;">基础设施</text>
    <text x="805" y="1090" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="20.02" fill="#1A365D" data-original-font-size="13" style="font-size: 20.02px;">建设</text>

    <!-- 向下转折 -->
    <line x1="805" y1="1105" x2="805" y2="1140" stroke="#2C5282" stroke-width="2" marker-end="url(#arrowhead1)"></line>

    <rect x="730" y="1160" width="150" height="55" fill="#A3C7E0" stroke="#2C5282" stroke-width="2"></rect>
    <text x="805" y="1183" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="20.02" fill="#1A365D" data-original-font-size="13" style="font-size: 20.02px;">示范应用</text>
    <text x="805" y="1200" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="20.02" fill="#1A365D" data-original-font-size="13" style="font-size: 20.02px;">与推广</text>

    <!-- 向左 -->
    <line x1="730" y1="1187" x2="670" y2="1187" stroke="#2C5282" stroke-width="2" marker-end="url(#arrowhead1)"></line>

    <rect x="520" y="1160" width="150" height="55" fill="#A3C7E0" stroke="#2C5282" stroke-width="2"></rect>
    <text x="595" y="1183" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="20.02" fill="#1A365D" data-original-font-size="13" style="font-size: 20.02px;">质量品牌</text>
    <text x="595" y="1200" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="20.02" fill="#1A365D" data-original-font-size="13" style="font-size: 20.02px;">提升</text>

    <line x1="520" y1="1187" x2="460" y2="1187" stroke="#2C5282" stroke-width="2" marker-end="url(#arrowhead1)"></line>

    <rect x="310" y="1160" width="150" height="55" fill="#A3C7E0" stroke="#2C5282" stroke-width="2"></rect>
    <text x="385" y="1183" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="20.02" fill="#1A365D" data-original-font-size="13" style="font-size: 20.02px;">人才培养</text>
    <text x="385" y="1200" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="20.02" fill="#1A365D" data-original-font-size="13" style="font-size: 20.02px;">与数字化</text>

    <!-- 闭环回到起点 -->
    <line x1="310" y1="1187" x2="175" y2="1187" stroke="#2C5282" stroke-width="2"></line>
    <line x1="175" y1="1187" x2="175" y2="1105" stroke="#2C5282" stroke-width="2" marker-end="url(#arrowhead1)"></line>

    <!-- 循环标注 -->
    <text x="510" y="1250" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="18.48" fill="#4A5568" font-style="italic" data-original-font-size="12" style="font-size: 18.48px;">← 持续改进与优化循环 →</text>

    <!-- 右侧成果输出 -->
    <rect x="1000" y="970" width="140" height="320" fill="#E6F2FF" stroke="#2C5282" stroke-width="2"></rect>
    <text x="1070" y="1000" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="18.48" font-weight="bold" fill="#1A365D" data-original-font-size="12" style="font-size: 18.48px;">预期成果</text>
    <line x1="1020" y1="1015" x2="1120" y2="1015" stroke="#4A5568" stroke-width="1"></line>
    
    <text x="1070" y="1045" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="16.94" fill="#1A365D" data-original-font-size="11" style="font-size: 16.94px;">汽车强国</text>
    <text x="1070" y="1062" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="16.94" fill="#1A365D" data-original-font-size="11" style="font-size: 16.94px;">战略实现</text>
    <line x1="1020" y1="1075" x2="1120" y2="1075" stroke="#4A5568" stroke-width="1"></line>
    
    <text x="1070" y="1100" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="16.94" fill="#1A365D" data-original-font-size="11" style="font-size: 16.94px;">核心技术</text>
    <text x="1070" y="1117" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="16.94" fill="#1A365D" data-original-font-size="11" style="font-size: 16.94px;">自主可控</text>
    <line x1="1020" y1="1130" x2="1120" y2="1130" stroke="#4A5568" stroke-width="1"></line>
    
    <text x="1070" y="1155" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="16.94" fill="#1A365D" data-original-font-size="11" style="font-size: 16.94px;">产业生态</text>
    <text x="1070" y="1172" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="16.94" fill="#1A365D" data-original-font-size="11" style="font-size: 16.94px;">构建完成</text>
    <line x1="1020" y1="1185" x2="1120" y2="1185" stroke="#4A5568" stroke-width="1"></line>
    
    <text x="1070" y="1210" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="16.94" fill="#1A365D" data-original-font-size="11" style="font-size: 16.94px;">低碳转型</text>
    <text x="1070" y="1227" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="16.94" fill="#1A365D" data-original-font-size="11" style="font-size: 16.94px;">目标达成</text>
    <line x1="1020" y1="1240" x2="1120" y2="1240" stroke="#4A5568" stroke-width="1"></line>
    
    <text x="1070" y="1265" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="16.94" fill="#1A365D" data-original-font-size="11" style="font-size: 16.94px;">国际竞争</text>
    <text x="1070" y="1282" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="16.94" fill="#1A365D" data-original-font-size="11" style="font-size: 16.94px;">力领先</text>

    <line x1="960" y1="1130" x2="1000" y2="1130" stroke="#2C5282" stroke-width="2" marker-end="url(#arrowhead1)"></line>
  </g>

  <!-- 底部研究总结框 -->
  <rect x="200" y="1350" width="800" height="93" fill="#2C5282" stroke="#1A365D" stroke-width="2"></rect>
  <text x="600" y="1375" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="23.1" font-weight="bold" fill="white" data-original-font-size="15" style="font-size: 23.1px;">技术路线图核心要点</text>
  <text x="600" y="1400" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="20.02" fill="white" data-original-font-size="13" style="font-size: 20.02px;">三大革命驱动 • 九大重点领域协同发展 • 2035年新能源汽车占比50%</text>
  <text x="600" y="1420" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="20.02" fill="white" data-original-font-size="13" style="font-size: 20.02px;">碳排放2028年达峰 • 智能网联HA级应用 • 构建安全可控产业体系</text>

  <!-- 底部标注 -->
  <text x="600" y="1500" text-anchor="middle" font-family="SimHei, Arial, sans-serif" font-size="16.94" fill="#4A5568" font-style="italic" data-original-font-size="11" style="font-size: 16.94px;">基于500+专家研究 • 涵盖汽车产业全技术链条 • 面向2035年发展愿景</text>

</svg>`
    },
    {
        id: 'data-flow',
        name: '项目架构图',
        description: '图大，可以结构化很多内容',
        svgCode: `<svg width="1200" height="1600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1600">
  <!-- 定义渐变和样式 -->
  <defs>
    <!-- 箭头标记 -->
    <marker id="arrowEnd" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
      <polygon points="0 0, 10 3, 0 6" fill="#555"></polygon>
    </marker>
    <marker id="arrowBoth" markerWidth="10" markerHeight="10" refX="1" refY="3" orient="auto">
      <polygon points="10 0, 0 3, 10 6" fill="#555"></polygon>
    </marker>
    <!-- 渐变定义 -->
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#e8f4f8;stop-opacity:1"></stop>
      <stop offset="100%" style="stop-color:#d0e8f0;stop-opacity:1"></stop>
    </linearGradient>
    <linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#f5f5f5;stop-opacity:1"></stop>
      <stop offset="100%" style="stop-color:#e0e0e0;stop-opacity:1"></stop>
    </linearGradient>
  </defs>

  <!-- 整体标题 -->
  <rect x="50" y="30" width="1100" height="70" fill="#224ea5" stroke="#224ea5" stroke-width="2" rx="8" class="selected"></rect>
  <text x="595" y="77" text-anchor="middle" font-family="Arial, sans-serif" font-size="32" font-weight="bold" fill="white" class="">深圳市索威尔科技开发有限公司初步研究分析要点图</text>

  <!-- ========== 第一层级：企业分析 ========== -->
  <g id="layer1">
    <!-- 左侧大框 -->
    <rect x="60" y="140" width="380" height="320" fill="none" stroke="#666" stroke-width="3" stroke-dasharray="15,8"></rect>
    <rect x="80" y="160" width="340" height="60" fill="#4a90a4" stroke="#2c5f7a" stroke-width="2" rx="6"></rect>
    <text x="250" y="198" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="white">企业核心能力</text>
    
    <!-- 左侧嵌套子模块 -->
    <rect x="90" y="240" width="150" height="80" fill="#d0e8f0" stroke="#4a90a4" stroke-width="1.5" rx="4"></rect>
    <text x="165" y="265" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" fill="#333">技术团队</text>
    <text x="165" y="285" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#555">机器视觉/AI算法</text>
    <text x="165" y="302" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#555">经验丰富稳定</text>
    
    <rect x="260" y="240" width="150" height="80" fill="#b8dce8" stroke="#4a90a4" stroke-width="1.5" rx="4"></rect>
    <text x="335" y="265" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" fill="#333">技术演进</text>
    <text x="335" y="285" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#555">图像识别到</text>
    <text x="335" y="302" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#555">工业机器人集成</text>
    
    <rect x="90" y="340" width="320" height="100" fill="#a0d4e4" stroke="#4a90a4" stroke-width="2" rx="4"></rect>
    <text x="250" y="370" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#333">核心技术能力</text>
    <rect x="100" y="385" width="95" height="45" fill="white" stroke="#4a90a4" stroke-width="1" rx="3"></rect>
    <text x="147" y="412" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#333">九轴机器人</text>
    <rect x="205" y="385" width="95" height="45" fill="white" stroke="#4a90a4" stroke-width="1" rx="3"></rect>
    <text x="252" y="412" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#333">图像处理</text>
    <rect x="310" y="385" width="95" height="45" fill="white" stroke="#4a90a4" stroke-width="1" rx="3"></rect>
    <text x="357" y="412" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#333">声学成像</text>

    <!-- 右侧密集矩阵区域 -->
    <rect x="480" y="140" width="660" height="320" fill="none" stroke="#666" stroke-width="3" stroke-dasharray="15,8"></rect>
    
    <!-- 右上标题 -->
    <rect x="500" y="160" width="620" height="45" fill="url(#grad1)" stroke="#4a90a4" stroke-width="2" rx="6"></rect>
    <text x="810" y="190" text-anchor="middle" font-family="Arial, sans-serif" font-size="20" font-weight="bold" fill="#2c5f7a">业务布局与商业模式</text>
    
    <!-- 右侧6x3矩阵 -->
    <rect x="510" y="220" width="190" height="55" fill="#f5f5f5" stroke="#999" stroke-width="1" rx="3"></rect>
    <text x="605" y="242" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#333">工业机器视觉</text>
    <text x="605" y="260" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#666">自动检测系统</text>
    
    <rect x="710" y="220" width="190" height="55" fill="#f5f5f5" stroke="#999" stroke-width="1" rx="3"></rect>
    <text x="805" y="242" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#333">AI产品</text>
    <text x="805" y="260" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#666">人脸识别/行为分析</text>
    
    <rect x="910" y="220" width="190" height="55" fill="#f5f5f5" stroke="#999" stroke-width="1" rx="3"></rect>
    <text x="1005" y="242" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#333">智能弱电系统</text>
    <text x="1005" y="260" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#666">建筑/交通管理</text>
    
    <rect x="510" y="285" width="190" height="55" fill="#e8e8e8" stroke="#999" stroke-width="1" rx="3"></rect>
    <text x="605" y="307" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#333">电子通关设备</text>
    <text x="605" y="325" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#666">海关物流应用</text>
    
    <rect x="710" y="285" width="190" height="55" fill="#e8e8e8" stroke="#999" stroke-width="1" rx="3"></rect>
    <text x="805" y="307" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#333">市场分布</text>
    <text x="805" y="325" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#666" class="" style="opacity: 1;">内销为主，外销为辅</text>
    
    <rect x="910" y="285" width="190" height="55" fill="#e8e8e8" stroke="#999" stroke-width="1" rx="3"></rect>
    <text x="1005" y="307" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#333">客户集中度</text>
    <text x="1005" y="325" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#666">前五大客户66.8%</text>
    
    <rect x="510" y="350" width="285" height="95" fill="#d0d0d0" stroke="#666" stroke-width="2" rx="4"></rect>
    <text x="652" y="375" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#333">商业模式</text>
    <rect x="520" y="390" width="125" height="45" fill="white" stroke="#666" stroke-width="1" rx="2"></rect>
    <text x="582" y="417" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#333">硬件销售</text>
    <rect x="660" y="390" width="125" height="45" fill="white" stroke="#666" stroke-width="1" rx="2"></rect>
    <text x="722" y="417" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#333">软件授权</text>
    
    <rect x="815" y="350" width="285" height="95" fill="#d0d0d0" stroke="#666" stroke-width="2" rx="4"></rect>
    <text x="957" y="375" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#333">客户合作</text>
    <rect x="825" y="390" width="125" height="45" fill="white" stroke="#666" stroke-width="1" rx="2"></rect>
    <text x="887" y="417" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#333">富士康</text>
    <rect x="965" y="390" width="125" height="45" fill="white" stroke="#666" stroke-width="1" rx="2"></rect>
    <text x="1027" y="417" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#333" class="" style="opacity: 1;">比亚迪······</text>
    
    <!-- 虚线分组框 -->
    <rect x="505" y="215" width="600" height="130" fill="none" stroke="#4a90a4" stroke-width="1.5" stroke-dasharray="6,3" rx="4"></rect>
    <rect x="505" y="345" width="600" height="105" fill="none" stroke="#666" stroke-width="1.5" stroke-dasharray="6,3" rx="4"></rect>
  </g>

  <!-- 垂直主轴箭头1 -->
  <line x1="600" y1="470" x2="600" y2="520" stroke="#333" stroke-width="4" marker-end="url(#arrowEnd)"></line>

  <!-- ========== 第二层级：财务与行业分析 ========== -->
  <g id="layer2">
    <rect x="60" y="540" width="450" height="380" fill="none" stroke="#666" stroke-width="3" stroke-dasharray="12,6"></rect>
    
    <!-- 左侧标题 -->
    <rect x="80" y="560" width="410" height="50" fill="#2e4399" stroke="#2e4399" stroke-width="2" rx="6" class=""></rect>
    <text x="285" y="593" text-anchor="middle" font-family="Arial, sans-serif" font-size="22" font-weight="bold" fill="white">财务表现分析</text>
    
    <!-- 三个并列大框 -->
    <g id="left-three-columns">
      <!-- 第一列 -->
      <rect x="75" y="625" width="125" height="280" fill="url(#grad2)" stroke="#4a6b7a" stroke-width="2" rx="4"></rect>
      <rect x="85" y="635" width="105" height="35" fill="#8ab4c4" stroke="#4a6b7a" stroke-width="1" rx="3"></rect>
      <text x="137" y="658" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#333">营收增长</text>
      
      <rect x="85" y="680" width="105" height="45" fill="#f5f5f5" stroke="#999" stroke-width="1" rx="2"></rect>
      <text x="137" y="698" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#555">三年复合</text>
      <text x="137" y="712" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#555">增长率525%</text>
      
      <rect x="85" y="735" width="105" height="45" fill="#f5f5f5" stroke="#999" stroke-width="1" rx="2"></rect>
      <text x="137" y="753" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#555">2024营收</text>
      <text x="137" y="767" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#555">2.69亿元</text>
      
      <rect x="85" y="790" width="105" height="45" fill="#f5f5f5" stroke="#999" stroke-width="1" rx="2"></rect>
      <text x="137" y="808" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#555">2024盈利</text>
      <text x="137" y="822" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#555">281.78万美元</text>
      
      <rect x="85" y="845" width="105" height="50" fill="#e0e0e0" stroke="#999" stroke-width="1" rx="2"></rect>
      <text x="137" y="868" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#555">38倍增长</text>
      <text x="137" y="882" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#555">(相对2022)</text>
      
      <!-- 第二列 -->
      <rect x="215" y="625" width="125" height="280" fill="url(#grad2)" stroke="#4a6b7a" stroke-width="2" rx="4"></rect>
      <rect x="225" y="635" width="105" height="35" fill="#8ab4c4" stroke="#4a6b7a" stroke-width="1" rx="3"></rect>
      <text x="277" y="658" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#333">盈利能力</text>
      
      <rect x="225" y="680" width="105" height="45" fill="#f5f5f5" stroke="#999" stroke-width="1" rx="2"></rect>
      <text x="277" y="698" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#555">毛利率下降</text>
      <text x="277" y="712" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#555">50%→24%</text>
      
      <rect x="225" y="735" width="105" height="45" fill="#f5f5f5" stroke="#999" stroke-width="1" rx="2"></rect>
      <text x="277" y="753" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#555">产品价格</text>
      <text x="277" y="767" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#555">竞争压力</text>
      
      <rect x="225" y="790" width="105" height="45" fill="#f5f5f5" stroke="#999" stroke-width="1" rx="2"></rect>
      <text x="277" y="808" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#555">现金流</text>
      <text x="277" y="822" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#555">持续净流出</text>
      
      <rect x="225" y="845" width="105" height="50" fill="#e0e0e0" stroke="#999" stroke-width="1" rx="2"></rect>
      <text x="277" y="868" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#555">资产负债率</text>
      <text x="277" y="882" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#555">54.21%</text>
      
      <!-- 第三列 -->
      <rect x="355" y="625" width="125" height="280" fill="url(#grad2)" stroke="#4a6b7a" stroke-width="2" rx="4"></rect>
      <rect x="365" y="635" width="105" height="35" fill="#8ab4c4" stroke="#4a6b7a" stroke-width="1" rx="3"></rect>
      <text x="417" y="658" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#333">融资需求</text>
      
      <rect x="365" y="680" width="105" height="45" fill="#f5f5f5" stroke="#999" stroke-width="1" rx="2"></rect>
      <text x="417" y="698" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#555">依赖外部</text>
      <text x="417" y="712" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#555">融资运营</text>
      
      <rect x="365" y="735" width="105" height="45" fill="#f5f5f5" stroke="#999" stroke-width="1" rx="2"></rect>
      <text x="417" y="753" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#555">纳斯达克</text>
      <text x="417" y="767" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#555">已上市</text>
      
      <rect x="365" y="790" width="105" height="45" fill="#f5f5f5" stroke="#999" stroke-width="1" rx="2"></rect>
      <text x="417" y="808" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#555">45%募资</text>
      <text x="417" y="822" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#555">用于喷涂机器人</text>
      
      <rect x="365" y="845" width="105" height="50" fill="#e0e0e0" stroke="#999" stroke-width="1" rx="2"></rect>
      <text x="417" y="868" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#555">扩张战略</text>
      <text x="417" y="882" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#555">紧迫性</text>
    </g>

    <!-- 右侧单个大框 -->
    <rect x="550" y="540" width="590" height="380" fill="none" stroke="#666" stroke-width="3" stroke-dasharray="12,6"></rect>
    
    <rect x="570" y="560" width="550" height="50" fill="#1496d7" stroke="#1496d7" stroke-width="2" rx="6" class=""></rect>
    <text x="845" y="593" text-anchor="middle" font-family="Arial, sans-serif" font-size="22" font-weight="bold" fill="white">行业市场分析</text>
    
    <!-- 大框内嵌套结构 -->
    <rect x="585" y="630" width="530" height="120" fill="#e8f0f5" stroke="#5a7a8a" stroke-width="2" rx="5"></rect>
    <text x="850" y="660" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#333">市场规模与趋势</text>
    
    <rect x="600" y="675" width="155" height="60" fill="white" stroke="#7a9aaa" stroke-width="1.5" rx="3"></rect>
    <text x="677" y="695" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#555">整体规模</text>
    <text x="677" y="710" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#555">超300亿元</text>
    <text x="677" y="725" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#777">年均增速20%</text>
    
    <rect x="770" y="675" width="155" height="60" fill="white" stroke="#7a9aaa" stroke-width="1.5" rx="3"></rect>
    <text x="847" y="695" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#555">2025年预计</text>
    <text x="847" y="710" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#555">349亿元</text>
    <text x="847" y="725" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#777">机器视觉市场</text>
    
    <rect x="940" y="675" width="155" height="60" fill="white" stroke="#7a9aaa" stroke-width="1.5" rx="3"></rect>
    <text x="1017" y="695" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#555">增长驱动</text>
    <text x="1017" y="710" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#555">自动化升级</text>
    <text x="1017" y="725" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#777">新基建场景</text>
    
    <rect x="585" y="770" width="530" height="135" fill="#d8e5ed" stroke="#5a7a8a" stroke-width="2" rx="5"></rect>
    <text x="850" y="800" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#333">竞争格局与定位</text>
    
    <rect x="600" y="820" width="240" height="70" fill="white" stroke="#7a9aaa" stroke-width="1.5" rx="3"></rect>
    <text x="720" y="842" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#555">竞争层级结构</text>
    <rect x="610" y="855" width="95" height="25" fill="#f5f5f5" stroke="#999" stroke-width="1" rx="2"></rect>
    <text x="657" y="872" text-anchor="middle" font-family="Arial, sans-serif" font-size="9" fill="#666">通用领域</text>
    <rect x="715" y="855" width="115" height="25" fill="#f5f5f5" stroke="#999" stroke-width="1" rx="2"></rect>
    <text x="772" y="872" text-anchor="middle" font-family="Arial, sans-serif" font-size="9" fill="#666">垂直领域</text>
    
    <rect x="860" y="820" width="240" height="70" fill="white" stroke="#7a9aaa" stroke-width="1.5" rx="3"></rect>
    <text x="980" y="842" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#555">索威尔定位</text>
    <rect x="870" y="855" width="100" height="25" fill="#f5f5f5" stroke="#999" stroke-width="1" rx="2"></rect>
    <text x="920" y="872" text-anchor="middle" font-family="Arial, sans-serif" font-size="9" fill="#666">垂直解决方案</text>
    <rect x="980" y="855" width="110" height="25" fill="#f5f5f5" stroke="#999" stroke-width="1" rx="2"></rect>
    <text x="1035" y="872" text-anchor="middle" font-family="Arial, sans-serif" font-size="9" fill="#666">汽车后市场</text>
    
    <!-- 横向连接线 -->
    <line x1="755" y1="705" x2="770" y2="705" stroke="#555" stroke-width="2" marker-end="url(#arrowEnd)"></line>
    <line x1="925" y1="705" x2="940" y2="705" stroke="#555" stroke-width="2" marker-end="url(#arrowEnd)"></line>
    <line x1="720" y1="750" x2="720" y2="770" stroke="#555" stroke-width="2" marker-end="url(#arrowEnd)"></line>
    <line x1="980" y1="750" x2="980" y2="770" stroke="#555" stroke-width="2" marker-end="url(#arrowEnd)"></line>
  </g>

  <!-- 横向关联线 -->
  

  <!-- 垂直主轴箭头2 -->
  <line x1="600" y1="930" x2="600" y2="980" stroke="#333" stroke-width="4" marker-end="url(#arrowEnd)"></line>

  <!-- ========== 第三层级：厚街镇合作分析 ========== -->
  <g id="layer3">
    <rect x="60" y="1000" width="1080" height="280" fill="none" stroke="#666" stroke-width="3" stroke-dasharray="12,6"></rect>
    
    <!-- 中心核心框 -->
    <rect x="465" y="1020" width="270" height="80" fill="#b64d07" stroke="#b64d07" stroke-width="3" rx="8" class=""></rect>
    <text x="600" y="1050" text-anchor="middle" font-family="Arial, sans-serif" font-size="20" font-weight="bold" fill="white">厚街镇合作契合度</text>
    <text x="600" y="1075" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" fill="white">多维协同分析</text>
    
    <!-- 左上节点群 -->
    <rect x="80" y="1030" width="130" height="50" fill="#c8d8e0" stroke="#5a8a9f" stroke-width="1.5" rx="4"></rect>
    <text x="145" y="1060" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#333">产业协同</text>
    
    <rect x="80" y="1095" width="130" height="50" fill="#c8d8e0" stroke="#5a8a9f" stroke-width="1.5" rx="4"></rect>
    <text x="145" y="1125" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#333">政策支持</text>
    
    <rect x="80" y="1160" width="130" height="50" fill="#c8d8e0" stroke="#5a8a9f" stroke-width="1.5" rx="4"></rect>
    <text x="145" y="1190" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#333">空间与成本</text>
    
    <!-- 左下密集小框 -->
    <rect x="235" y="1140" width="80" height="35" fill="#e8e8e8" stroke="#999" stroke-width="1" rx="3"></rect>
    <text x="275" y="1162" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#555">电子信息基础</text>
    
    <rect x="235" y="1185" width="80" height="35" fill="#e8e8e8" stroke="#999" stroke-width="1" rx="3"></rect>
    <text x="275" y="1207" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#555">装备制造业</text>
    
    <rect x="235" y="1230" width="80" height="35" fill="#e8e8e8" stroke="#999" stroke-width="1" rx="3"></rect>
    <text x="275" y="1252" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#555">2000家零部件</text>
    
    <rect x="330" y="1140" width="80" height="35" fill="#e8e8e8" stroke="#999" stroke-width="1" rx="3" class=""></rect>
    <text x="371" y="1156" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#555" class="" style="opacity: 1;">厚街周边</text>
    
    <rect x="330" y="1185" width="80" height="35" fill="#e8e8e8" stroke="#999" stroke-width="1" rx="3"></rect>
    <text x="370" y="1207" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#555">智能工厂奖励</text>
    
    <rect x="330" y="1230" width="80" height="35" fill="#e8e8e8" stroke="#999" stroke-width="1" rx="3"></rect>
    <text x="370" y="1252" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#555">首台套奖励</text>
    
    <!-- 右上节点群 -->
    <rect x="990" y="1030" width="130" height="50" fill="#c8d8e0" stroke="#5a8a9f" stroke-width="1.5" rx="4"></rect>
    <text x="1055" y="1060" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#333">资本联动</text>
    
    <rect x="990" y="1095" width="130" height="50" fill="#c8d8e0" stroke="#5a8a9f" stroke-width="1.5" rx="4"></rect>
    <text x="1055" y="1125" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#333">创新生态</text>
    
    <rect x="990" y="1160" width="130" height="50" fill="#c8d8e0" stroke="#5a8a9f" stroke-width="1.5" rx="4"></rect>
    <text x="1055" y="1190" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#333">区位优势</text>
    
    <!-- 右下密集小框 -->
    <rect x="805" y="1140" width="80" height="35" fill="#e8e8e8" stroke="#999" stroke-width="1" rx="3"></rect>
    <text x="845" y="1162" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#555">3亿元基金</text>
    
    <rect x="805" y="1185" width="80" height="35" fill="#e8e8e8" stroke="#999" stroke-width="1" rx="3"></rect>
    <text x="845" y="1207" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#555">投资智囊团</text>
    
    <rect x="805" y="1230" width="80" height="35" fill="#e8e8e8" stroke="#999" stroke-width="1" rx="3"></rect>
    <text x="845" y="1252" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#555">科创平台</text>
    
    <rect x="900" y="1140" width="80" height="35" fill="#e8e8e8" stroke="#999" stroke-width="1" rx="3"></rect>
    <text x="940" y="1162" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#555">厚才卡制度</text>
    
    <rect x="900" y="1185" width="80" height="35" fill="#e8e8e8" stroke="#999" stroke-width="1" rx="3"></rect>
    <text x="940" y="1207" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#555">人才安居</text>
    
    <rect x="900" y="1230" width="80" height="35" fill="#e8e8e8" stroke="#999" stroke-width="1" rx="3"></rect>
    <text x="940" y="1252" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#555">深圳订单承接</text>
    
    <!-- 复杂连接线网络 -->
    <!-- 左侧到中心 -->
    <line x1="210" y1="1055" x2="465" y2="1055" stroke="#666" stroke-width="2" marker-end="url(#arrowEnd)"></line>
    <line x1="210" y1="1120" x2="465" y2="1070" stroke="#666" stroke-width="1.5" stroke-dasharray="4,2" marker-end="url(#arrowEnd)"></line>
    <line x1="210" y1="1185" x2="465" y2="1085" stroke="#666" stroke-width="1.5" stroke-dasharray="4,2" marker-end="url(#arrowEnd)"></line>
    
    <!-- 中心到右侧 -->
    <line x1="735" y1="1055" x2="990" y2="1055" stroke="#666" stroke-width="2" marker-end="url(#arrowEnd)"></line>
    <line x1="735" y1="1070" x2="990" y2="1120" stroke="#666" stroke-width="1.5" stroke-dasharray="4,2" marker-end="url(#arrowEnd)"></line>
    <line x1="735" y1="1085" x2="990" y2="1185" stroke="#666" stroke-width="1.5" stroke-dasharray="4,2" marker-end="url(#arrowEnd)"></line>
    
    <!-- 左下小框到中心 -->
    <line x1="315" y1="1157" x2="465" y2="1100" stroke="#888" stroke-width="1" stroke-dasharray="3,2"></line>
    <line x1="410" y1="1157" x2="465" y2="1100" stroke="#888" stroke-width="1" stroke-dasharray="3,2"></line>
    
    <!-- 中心到右下小框 -->
    <line x1="735" y1="1100" x2="805" y2="1157" stroke="#888" stroke-width="1" stroke-dasharray="3,2"></line>
    <line x1="735" y1="1100" x2="900" y2="1157" stroke="#888" stroke-width="1" stroke-dasharray="3,2"></line>
    
    <!-- 斜向反馈线 -->
    
    
    <!-- 虚线分组 -->
    <rect x="75" y="1025" width="340" height="245" fill="none" stroke="#5a8a9f" stroke-width="1.5" stroke-dasharray="8,4" rx="6"></rect>
    <rect x="785" y="1025" width="340" height="245" fill="none" stroke="#5a8a9f" stroke-width="1.5" stroke-dasharray="8,4" rx="6"></rect>
  </g>

  <!-- 垂直主轴箭头3 -->
  <line x1="600" y1="1290" x2="600" y2="1330" stroke="#333" stroke-width="4" marker-end="url(#arrowEnd)"></line>

  <!-- ========== 第四层级：发展路径与展望 ========== -->
  <g id="layer4">
    <rect x="60" y="1350" width="1080" height="239" fill="none" stroke="#666" stroke-width="3" stroke-dasharray="15,8" class="selected"></rect>
    
    <!-- 顶部标题条 -->
    <rect x="80" y="1370" width="1040" height="45" fill="#039140" stroke="#039140" stroke-width="2" rx="6" class=""></rect>
    <text x="600" y="1400" text-anchor="middle" font-family="Arial, sans-serif" font-size="22" font-weight="bold" fill="white" class="" style="opacity: 1;">企业发展路径预测及项目落地可行性建议</text>
    
    <!-- 左侧阶梯式结构 -->
    <rect x="90" y="1435" width="200" height="45" fill="#7fa8b8" stroke="#5a8a9f" stroke-width="2" rx="4"></rect>
    <text x="190" y="1463" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="white">技术深化（1年）</text>
    
    <rect x="100" y="1490" width="180" height="40" fill="#d0e8f0" stroke="#7fa8b8" stroke-width="1.5" rx="3"></rect>
    <text x="190" y="1513" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#333">喷涂机器人量产</text>
    
    <rect x="110" y="1540" width="160" height="30" fill="#e8f4f8" stroke="#7fa8b8" stroke-width="1" rx="3"></rect>
    <text x="190" y="1559" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#555">技术闭环完善</text>
    
    <!-- 中部流程链 -->
    <rect x="330" y="1435" width="140" height="60" fill="#8fb8c8" stroke="#5a8a9f" stroke-width="2" rx="4"></rect>
    <text x="400" y="1460" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="white">市场拓展</text>
    <text x="400" y="1480" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="white">（2-3年）</text>
    
    <line x1="290" y1="1465" x2="330" y2="1465" stroke="#ff6b35" stroke-width="3" marker-end="url(#arrowEnd)"></line>
    
    <rect x="340" y="1505" width="120" height="30" fill="#d0e8f0" stroke="#7fa8b8" stroke-width="1" rx="3"></rect>
    <text x="400" y="1524" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#555">汽车后市场深耕</text>
    
    <rect x="340" y="1545" width="120" height="30" fill="#e8f4f8" stroke="#7fa8b8" stroke-width="1" rx="3"></rect>
    <text x="400" y="1564" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#555">医疗领域突破</text>
    
    <!-- 右侧大块成效展示 -->
    <rect x="510" y="1435" width="610" height="135" fill="url(#grad2)" stroke="#5a8a9f" stroke-width="2" rx="5"></rect>
    
    <rect x="530" y="1450" width="280" height="50" fill="#9fc8d8" stroke="#6a9aaa" stroke-width="1.5" rx="4"></rect>
    <text x="670" y="1480" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#333">全球竞争（5年）</text>
    
    <rect x="530" y="1510" width="130" height="50" fill="white" stroke="#7fa8b8" stroke-width="1" rx="3"></rect>
    <text x="595" y="1528" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#555">垂直解决方案</text>
    <text x="595" y="1545" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#777">领导者地位</text>
    
    <rect x="680" y="1510" width="130" height="50" fill="white" stroke="#7fa8b8" stroke-width="1" rx="3"></rect>
    <text x="745" y="1528" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#555">全球化布局</text>
    <text x="745" y="1545" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#777">国际竞争力</text>
    
    <rect x="830" y="1450" width="270" height="110" fill="#b8d8e8" stroke="#6a9aaa" stroke-width="2" rx="4"></rect>
    <text x="965" y="1475" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#333">生态构建</text>
    <rect x="845" y="1490" width="115" height="30" fill="white" stroke="#7fa8b8" stroke-width="1" rx="2"></rect>
    <text x="902" y="1510" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#555" class="">产业链协同</text>
    <rect x="970" y="1490" width="115" height="30" fill="white" stroke="#7fa8b8" stroke-width="1" rx="2"></rect>
    <text x="1027" y="1510" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#555">标准输出</text>
    <rect x="845" y="1528" width="115" height="30" fill="white" stroke="#7fa8b8" stroke-width="1" rx="2"></rect>
    <text x="902" y="1548" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#555">技术创新</text>
    <rect x="970" y="1528" width="115" height="30" fill="white" stroke="#7fa8b8" stroke-width="1" rx="2"></rect>
    <text x="1027" y="1548" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#555">资本助力</text>
    
    <!-- 连接箭头 -->
    <line x1="470" y1="1465" x2="510" y2="1465" stroke="#ff6b35" stroke-width="3" marker-end="url(#arrowEnd)"></line>
    <line x1="670" y1="1500" x2="670" y2="1510" stroke="#666" stroke-width="2" marker-end="url(#arrowEnd)"></line>
    <line x1="810" y1="1505" x2="830" y2="1505" stroke="#666" stroke-width="2" marker-end="url(#arrowEnd)"></line>
    
    <!-- 虚线分组框 -->
    <rect x="85" y="1430" width="210" height="150" fill="none" stroke="#5a8a9f" stroke-width="1.5" stroke-dasharray="6,3" rx="4"></rect>
    <rect x="325" y="1430" width="150" height="150" fill="none" stroke="#5a8a9f" stroke-width="1.5" stroke-dasharray="6,3" rx="4"></rect>
  </g>
<text x="370" y="1170" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#555" class="" style="opacity: 1;">500家4S店</text></svg>`
    },
    {
        id: 'xiangmuyunzuo',
        name: '项目运作结构化',
        description: '画饼常用',
        svgCode: `<!--?xml version="1.0" encoding="utf-8"?-->
<!-- Generator: Modified Design -->
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1190.6 841.9" style="enable-background:new 0 0 1190.6 841.9;" xml:space="preserve" width="1190.6" height="841.9">
<style type="text/css">
	.st0{fill:#01579B;}
	.st1{fill:#00B050;}
	.st2{fill:#00B0F0;}
	.st3{fill:#226E4B;}
	.st4{fill:#F5F0E8;}
	.st5{fill:#95C4BC;}
	.st6{fill:#FFFFFF;}
	.st7{font-family:'SourceHanSansSC-Medium-GBpc-EUC-H';}
	.st8{font-size:26px;}
	.st9{font-family:'SourceHanSansSC-Bold-GBpc-EUC-H';}
	.st10{font-size:19px;}
	.st11{font-size:26px;}
	.st12{font-size:23px;}
	.st13{font-size:17px;}
	.st14{font-size:19px;}
	.st15{font-size:21px;}
	.st16{font-size:22px;}
	.st17{font-size:19px;glyph-orientation-vertical:0;writing-mode:tb;}
	.st18{font-size:21px;}
	.st19{fill:none;stroke:#4A7BA7;stroke-width:3;stroke-miterlimit:10;}
	.st20{fill:none;stroke:#6B4C8A;stroke-width:1.5;stroke-miterlimit:10;}
</style>
<g>
	<g id="main_frame">
		<path class="st0" d="M1110.8,702.9H77.5c-0.5,0-0.9-0.4-0.9-0.9v-538c0-0.5,0.4-0.9,0.9-0.9h1033.3
			c0.5,0,0.9,0.4,0.9,0.9v538C1111.7,702.5,1111.3,702.9,1110.8,702.9z M78.4,701H1110V164.9H78.4V701z"></path>
		<rect x="82" y="140" class="st0" width="218" height="48" rx="10"></rect>
		<rect x="895" y="140" class="st0" width="218" height="48" rx="10"></rect>
		<rect x="308" y="140" class="st0" width="579" height="48" rx="10"></rect>
		<rect x="82" y="679" class="st1" width="218" height="48" rx="10"></rect>
		<rect x="895" y="679" class="st1" width="218" height="48" rx="10"></rect>
		<rect x="385" y="679" class="st1" width="422" height="48" rx="10"></rect>
		<path class="st2" d="M157.7,449c0,78,63.3,141,141,141l0.5-282C221.3,308,157.7,371,157.7,449z"></path>
		<path class="st0" d="M186.5,545c-23.5-27-36.2-61-36.2-97c0-37.4,13.9-71.5,36.9-97.5l-47-37
			c-30.9,36.3-49.6,83.2-49.6,134.5c0,28.1,5.5,55.3,16.4,81c8.1,19.3,19.1,37.1,32.6,53.1L186.5,545z"></path>
		<path class="st0" d="M299.3,237c-60.8,0-115.6,26.1-153.8,67.6l47.1,37c27.1-27.6,64.8-44.9,106.7-44.9h0
			L299.3,237L299.3,237z"></path>
		<path class="st0" d="M193.8,552.8c-0.7-0.7-1.3-1.3-1.9-2l-47.1,37c2.3,2.5,4.5,4.8,6.8,7.2
			c19.1,19.1,41.3,34,66.1,44.5c25.7,10.9,53,16.4,81,16.4h0.6v-59.8h-0.6C258.3,596.1,221.4,580.9,193.8,552.8z"></path>
		<path class="st2" d="M1030.2,449c0,78-63.3,141-141,141l-0.5-282C966.8,308,1030.2,371,1030.2,449z"></path>
		<path class="st0" d="M1001.3,545c23.5-27,36.2-61,36.2-97c0-37.4-13.9-71.5-36.9-97.5l47-37
			c30.9,36.3,49.6,83.2,49.6,134.5c0,28.1-5.5,55.3-16.4,81c-8.1,19.3-19.1,37.1-32.6,53.1L1001.3,545z"></path>
		<path class="st0" d="M888.6,237c60.8,0,115.6,26.1,153.8,67.6l-47.1,37c-27.1-27.6-64.8-44.9-106.7-44.9h0
			L888.6,237L888.6,237z"></path>
		<path class="st0" d="M994,552.8c0.7-0.7,1.3-1.3,1.9-2l47.1,37c-2.3,2.5-4.5,4.8-6.8,7.2
			c-19.1,19.1-41.3,34-66.1,44.5c-25.7,10.9-53,16.4-81,16.4h-0.6v-59.8h0.6C929.5,596.1,966.5,580.9,994,552.8z"></path>
		<path d="M494.2,658.5H308.8l0-403.1c0.1-0.5,2.5-11.5,15.1-22.7c11.6-10.3,34.2-22.5,76.8-22.5
			c0.2,0,20.9,0.2,42.6,5.7c28.8,7.3,46.2,20.6,50.3,38.6l0,0.2V658.5z M310.2,657h182.6V254.6c-9.6-42.1-90.7-43.1-91.5-43.1
			c-42.1,0-64.5,12.1-75.8,22.2c-11.8,10.4-14.4,21-14.6,21.9V657z"></path>
		<path d="M687.3,658.5H501.9l0-403.1c0.1-0.5,2.5-11.5,15.1-22.7c11.6-10.3,34.2-22.5,76.8-22.5
			c0.2,0,20.9,0.2,42.6,5.7c28.8,7.3,46.2,20.6,50.3,38.6l0,0.2V658.5z M503.3,657h182.6V254.6c-9.6-42.1-90.7-43.1-91.5-43.1
			c-42.1,0-64.5,12.1-75.8,22.2c-11.8,10.4-14.4,21-14.6,21.9V657z"></path>
		<path d="M880,658.5H694.6l0-403.1c0.1-0.5,2.5-11.5,15.1-22.7c11.6-10.3,34.2-22.5,76.8-22.5
			c0.2,0,20.9,0.2,42.6,5.7c28.8,7.3,46.2,20.6,50.3,38.6l0,0.2V658.5z M696,657h182.6V254.6c-9.6-42.1-90.7-43.1-91.5-43.1
			c-42.1,0-64.5,12.1-75.8,22.2c-11.8,10.4-14.4,21-14.6,21.9V657z"></path>
		<g>
			<rect x="338" y="265" class="st3" width="127" height="36" rx="8"></rect>
			<rect x="533" y="265" class="st3" width="127" height="36" rx="8"></rect>
			<rect x="725" y="265" class="st3" width="127" height="36" rx="8"></rect>
		</g>
		<g>
			<g>
				
				<path class="st5" d="M486,312v91H318v-91H486 M486,310.5H318c-0.8,0-1.5,0.7-1.5,1.5v91
					c0,0.8,0.7,1.5,1.5,1.5h168c0.8,0,1.5-0.7,1.5-1.5v-91C487.5,311.2,486.8,310.5,486,310.5L486,310.5z"></path>
			</g>
			<g>
				
				<path class="st5" d="M486,428v91H318v-91H486 M486,426.5H318c-0.8,0-1.5,0.7-1.5,1.5v91
					c0,0.8,0.7,1.5,1.5,1.5h168c0.8,0,1.5-0.7,1.5-1.5v-91C487.5,427.2,486.8,426.5,486,426.5L486,426.5z"></path>
			</g>
			<g>
				
				<path class="st5" d="M486,545v91H318v-91H486 M486,543.5H318c-0.8,0-1.5,0.7-1.5,1.5v91
					c0,0.8,0.7,1.5,1.5,1.5h168c0.8,0,1.5-0.7,1.5-1.5v-91C487.5,544.2,486.8,543.5,486,543.5L486,543.5z"></path>
			</g>
			<g>
				<g>
					
					<path class="st5" d="M681,310v67H513v-67H681 M681,308.8H513c-0.8,0-1.2,0.5-1.2,1.2v67
						c0,0.7,0.5,1.2,1.2,1.2h168c0.8,0,1.2-0.5,1.2-1.2v-67C682.2,309.3,681.8,308.8,681,308.8L681,308.8z"></path>
				</g>
				<g>
					
					<path class="st5" d="M681,395v67H513v-67H681 M681,393.8H513c-0.8,0-1.2,0.5-1.2,1.2v67
						c0,0.7,0.5,1.2,1.2,1.2h168c0.8,0,1.2-0.5,1.2-1.2v-67C682.2,394.3,681.8,393.8,681,393.8L681,393.8z"></path>
				</g>
				<g>
					
					<path class="st5" d="M681,480v67H513v-67H681 M681,478.8H513c-0.8,0-1.2,0.5-1.2,1.2v67
						c0,0.7,0.5,1.2,1.2,1.2h168c0.8,0,1.2-0.5,1.2-1.2v-67C682.2,479.3,681.8,478.8,681,478.8L681,478.8z"></path>
				</g>
				<g>
					
					<path class="st5" d="M681,565v67H513v-67H681 M681,563.8H513c-0.8,0-1.2,0.5-1.2,1.2v67
						c0,0.7,0.5,1.2,1.2,1.2h168c0.8,0,1.2-0.5,1.2-1.2v-67C682.2,564.3,681.8,563.8,681,563.8L681,563.8z"></path>
				</g>
			</g>
			<g>
				
				<path class="st5" d="M876,312v91H708v-91H876 M876,310.5H708c-0.8,0-1.5,0.7-1.5,1.5v91
					c0,0.8,0.7,1.5,1.5,1.5h168c0.8,0,1.5-0.7,1.5-1.5v-91C877.5,311.2,876.8,310.5,876,310.5L876,310.5z" transform="translate(-4,2)"></path>
			</g>
			<g>
				
				<path class="st5" d="M876,428v91H708v-91H876 M876,426.5H708c-0.8,0-1.5,0.7-1.5,1.5v91
					c0,0.8,0.7,1.5,1.5,1.5h168c0.8,0,1.5-0.7,1.5-1.5v-91C877.5,427.2,876.8,426.5,876,426.5L876,426.5z" transform="translate(-4,0)"></path>
			</g>
			<g>
				
				<path class="st5" d="M876,545v91H708v-91H876 M876,543.5H708c-0.8,0-1.5,0.7-1.5,1.5v91
					c0,0.8,0.7,1.5,1.5,1.5h168c0.8,0,1.5-0.7,1.5-1.5v-91C877.5,544.2,876.8,543.5,876,543.5L876,543.5z" transform="translate(-5,0)"></path>
			</g>
		</g>
	</g>
	<g id="text_labels">
		<text transform="matrix(1 0 0 1 141 176)" class="st6 st7 st8" x="-24" y="-1">投资运作模式</text>
		<text transform="matrix(1 0 0 1 141 709)" class="st6 st7 st8" x="-6" y="4">核心机制</text>
		<text transform="matrix(1 0 0 1 956 709)" class="st6 st7 st8 selected" x="-3" y="5">保障机制</text>
		<text transform="matrix(1 0 0 1 420 709)" class="st6 st7 st8" x="36" y="4">政府投资基金运作体系</text>
		<text transform="matrix(1 0 0 1 448 176)" class="st6 st7 st8" x="0" y="-1" style="opacity: 1;">三大投资运作模式关键要点</text>
		<text transform="matrix(1 0 0 1 951 176)" class="st6 st7 st8" x="-37" y="-2">全生命周期管理</text>
		
		
		<text transform="matrix(1 0 0 1 401.5 289)" text-anchor="middle" class="st9 st11" x="0" y="-34">运作架构</text>
		<text transform="matrix(1 0 0 1 218 402)"><tspan x="0" y="0" class="st6 st9 st11">母子</tspan><tspan x="-1" y="36" class="st6 st9 st11">基金</tspan><tspan x="-1" y="72" class="st6 st9 st11">模式</tspan><tspan x="-1.6" y="104" class="st6 st9 st11">特点</tspan></text>
		<text transform="matrix(1 0 0 1 928 400)"><tspan x="0" y="0" class="st6 st9 st11" style="opacity: 1;"></tspan><tspan x="-1" y="15" class="st6 st9 st11">基金</tspan><tspan x="-1" y="49" class="st6 st9 st11" style="opacity: 1;">管理</tspan><tspan x="-1" y="85" class="st6 st9 st11" style="opacity: 1;">流程</tspan></text>
		<text transform="matrix(1 0 0 1 401.5 295)" text-anchor="middle" class="st6 st9 st12" x="0" y="-5">三层架构</text>
		<text transform="matrix(1 0 0 1 402 347)" text-anchor="middle"><tspan x="0" y="0" class="st9 st13">引导基金/母基金</tspan><tspan x="0" y="21" class="st9 st13">各类子基金</tspan><tspan x="0" y="42" class="st9 st13">项目公司</tspan></text>
		<text transform="matrix(1 0 0 1 597 333)" text-anchor="middle"><tspan x="-2" y="-3" class="st9 st13">出资比例限制</tspan><tspan x="-2" y="16" class="st9 st13">返投要求</tspan><tspan x="-1" y="39" class="st9 st13">机构遴选</tspan></text>
		<text transform="matrix(1 0 0 1 792 347)" text-anchor="middle"><tspan x="1" y="-6" class="st9 st13">杠杆效应显著</tspan><tspan x="-1" y="18" class="st9 st13 selected">专业能力借力</tspan><tspan x="-1" y="42" class="st9 st13">风险分散</tspan></text>
		<text transform="matrix(1 0 0 1 402 463)" text-anchor="middle"><tspan x="0" y="0" class="st9 st13">重大战略性项目</tspan><tspan x="0" y="21" class="st9 st13">市场失灵领域</tspan><tspan x="0" y="42" class="st9 st13">专项支持</tspan></text>
		<text transform="matrix(1 0 0 1 597 418)" text-anchor="middle"><tspan x="0" y="-4" class="st9 st13">分级决策制度</tspan><tspan x="0" y="16" class="st9 st13">专家评审机制</tspan><tspan x="-2" y="38" class="st9 st13">投资限制</tspan></text>
		<text transform="matrix(1 0 0 1 792 463)" text-anchor="middle"><tspan x="-5" y="-7" class="st9 st13">精准滴灌</tspan><tspan x="-6" y="17" class="st9 st13">快速干预</tspan><tspan x="-4" y="42" class="st9 st13">政策传导</tspan></text>
		<text transform="matrix(1 0 0 1 402 580)" text-anchor="middle"><tspan x="0" y="0" class="st9 st13">目标单一明确</tspan><tspan x="0" y="21" class="st9 st13">结构灵活多变</tspan><tspan x="0" y="42" class="st9 st13">决策相对高效</tspan></text>
		<text transform="matrix(1 0 0 1 597 503)" text-anchor="middle"><tspan x="0" y="0" class="st9 st13">单一重大项目</tspan><tspan x="0" y="18" class="st9 st13">特定目的设立</tspan><tspan x="0" y="37" class="st9 st13">并购纾困用途</tspan></text>
		<text transform="matrix(1 0 0 1 597 588)" text-anchor="middle"><tspan x="0" y="0" class="st9 st13">精准狙击</tspan><tspan x="0" y="17" class="st9 st13">目标明确</tspan><tspan x="0" y="39" class="st9 st13">结构灵活</tspan></text>
		<text transform="matrix(1 0 0 1 792 580)" text-anchor="middle"><tspan x="-5" y="-6" class="st9 st13">专项支持</tspan><tspan x="-5" y="17" class="st9 st13" style="opacity: 1;">精准施策</tspan><tspan x="-4" y="42" class="st9 st13">高效执行</tspan></text>
		<text transform="matrix(1 0 0 1 596.5 295)" text-anchor="middle" class="st6 st9 st12" x="0" y="-4">关键机制</text>
		<text transform="matrix(1 0 0 1 791.5 295)" text-anchor="middle" class="st6 st9 st12" x="-2" y="-4">优势特点</text>
		<text transform="matrix(1 0 0 1 596.5 289)" text-anchor="middle" class="st9 st11" x="0" y="-32">直接投资项目</text>
		<text transform="matrix(1 0 0 1 791.5 289)" text-anchor="middle" class="st9 st11 selected" x="-3" y="-30">专项基金</text>
	</g>
	<g id="curved_labels">
		<g>
			<text transform="matrix(0.7961 -0.6052 0.6052 0.7961 191 312)" class="st6 st9 st14">杠</text>
			<text transform="matrix(0.8544 -0.5196 0.5196 0.8544 205 301)" class="st6 st9 st14">杆</text>
			<text transform="matrix(0.9038 -0.4279 0.4279 0.9038 221 291)" class="st6 st9 st14">放</text>
			<text transform="matrix(0.9435 -0.3313 0.3313 0.9435 237 283)" class="st6 st9 st14">大</text>
			<text transform="matrix(0.973 -0.2308 0.2308 0.973 254 277)" class="st6 st9 st14">效应</text>
		</g>
		<g>
			<text transform="matrix(-0.3125 -0.9499 0.9499 -0.3125 140 510)" class="st6 st9 st15">精</text>
			<text transform="matrix(-0.1937 -0.981 0.981 -0.1937 134 490)" class="st6 st9 st15">准</text>
			<text transform="matrix(-7.289000e-002 -0.9973 0.9973 -7.289000e-002 130 469)" class="st6 st9 st15">滴</text>
			<text transform="matrix(4.729000e-002 -0.9989 0.9989 4.729000e-002 128 448)" class="st6 st9 st15">灌</text>
			<text transform="matrix(0.168 -0.9858 0.9858 0.168 129 427)" class="st6 st9 st15">模</text>
			<text transform="matrix(0.2876 -0.9578 0.9578 0.2876 133 406)" class="st6 st9 st15">式</text>
		</g>
		<g>
			<text transform="matrix(0.7925 0.6099 -0.6099 0.7925 178 593)" class="st6 st9 st16" x="-9" y="-2">精</text>
			<text transform="matrix(0.8592 0.5117 -0.5117 0.8592 196 607)" class="st6 st9 st16" x="-9" y="-1">准</text>
			<text transform="matrix(0.914 0.4057 -0.4057 0.914 216 618)" class="st6 st9 st16" x="-8" y="-2">狙</text>
			<text transform="matrix(0.956 0.2935 -0.2935 0.956 237 627)" class="st6 st9 st16" x="-7" y="-3">击</text>
			<text transform="matrix(0.9842 0.177 -0.177 0.9842 259 634)" class="st6 st9 st16" x="-7" y="-2">模式</text>
		</g>
		<g>
			<text transform="matrix(0.9918 0.1278 -0.1278 0.9918 909 271)" class="st6 st9 st14">投</text>
			<text transform="matrix(0.9706 0.2408 -0.2408 0.9706 929 274)" class="st6 st9 st14">前</text>
			<text transform="matrix(0.9365 0.3508 -0.3508 0.9365 948 279)" class="st6 st9 st14">管</text>
			<text transform="matrix(0.8902 0.4555 -0.4555 0.8902 967 286)" class="st6 st9 st14">理</text>
		</g>
		<g>
			<text transform="matrix(0.9036 -0.4284 0.4284 0.9036 1051 364)" class="st6 st9 st17" x="-8" y="24">投</text>
			<text transform="matrix(0.9552 -0.2959 0.2959 0.9552 1061 386)" class="st6 st9 st17" x="-10" y="31">中</text>
			<text transform="matrix(0.9875 -0.1574 0.1574 0.9875 1068 410)" class="st6 st9 st17" x="-10" y="37">管</text>
			<text transform="matrix(0.9999 -1.758000e-002 1.758000e-002 0.9999 1071 435)" class="st6 st9 st17" x="-12" y="43">理</text>
		</g>
		<g>
			<text transform="matrix(0.9766 -0.2152 0.2152 0.9766 927 636)" class="st6 st9 st18" x="-5" y="-9">退</text>
			<text transform="matrix(0.9429 -0.3329 0.3329 0.9429 950 631)" class="st6 st9 st18" x="-4" y="-10">出</text>
			<text transform="matrix(0.895 -0.4461 0.4461 0.895 972 623)" class="st6 st9 st18" x="-2" y="-11">管</text>
			<text transform="matrix(0.8335 -0.5525 0.5525 0.8335 993 613)" class="st6 st9 st18" x="1" y="-12">理</text>
		</g>
	</g>
	<g id="arrows">
		<g>
			
			
		</g>
		<g>
			
			
		</g>
		<g>
			<line class="st20" x1="313" y1="702" x2="370" y2="702"></line>
			<polygon class="st0" points="316,706 301,702 316,698"></polygon>
			<polygon class="st0" points="367,706 382,702 367,698"></polygon>
		</g>
		<g>
			<line class="st20" x1="820" y1="702" x2="877" y2="702"></line>
			<polygon class="st0" points="823,706 808,702 823,698"></polygon>
			<polygon class="st0" points="874,706 889,702 874,698"></polygon>
		</g>
	</g>
</g>
</svg>`
    },
    {
        id: 'jishuguihua',
        name: '技术规划框架',
        description: '展示技术的总体规划',
        svgCode: `<svg width="1200" height="2400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 2400">
  <!-- 定义箭头标记 -->
  <defs>
    <marker id="arrowEnd" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
      <polygon points="0 0, 10 3, 0 6" fill="#666"></polygon>
    </marker>
    <marker id="arrowEndAccent" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
      <polygon points="0 0, 10 3, 0 6" fill="#5C7CFA"></polygon>
    </marker>
    <marker id="arrowEndDark" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
      <polygon points="0 0, 10 3, 0 6" fill="#333"></polygon>
    </marker>
    
    <!-- 阴影滤镜 -->
    <filter id="dropShadow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="2"></feGaussianBlur>
      <feOffset dx="1" dy="2" result="offsetblur"></feOffset>
      <feComponentTransfer>
        <feFuncA type="linear" slope="0.2"></feFuncA>
      </feComponentTransfer>
      <feMerge>
        <feMergeNode></feMergeNode>
        <feMergeNode in="SourceGraphic"></feMergeNode>
      </feMerge>
    </filter>
  </defs>

  <!-- 第一层：数字化转型战略规划 - 非对称布局（左侧大框嵌套，右侧2x2小框） -->
  <g id="level1">
    <!-- 外围虚线框 -->
    <rect x="30" y="40" width="1140" height="420" fill="none" stroke="#999" stroke-width="2.5" stroke-dasharray="12,6"></rect>
    
    <!-- 顶部标题区域 -->
    <rect x="350" y="60" width="500" height="55" fill="#5C7CFA" stroke="#4263EB" stroke-width="2"></rect>
    <text x="600" y="95" text-anchor="middle" font-family="Arial, sans-serif" font-size="26" font-weight="bold" fill="#FFFFFF">
      数字化转型战略规划框架
    </text>
    
    <!-- 左侧大框区域 -->
    <rect x="60" y="145" width="480" height="280" fill="#f5f5f5" stroke="#666" stroke-width="2.5" stroke-dasharray="6,3"></rect>
    
    <!-- 左侧主标题 -->
    <rect x="80" y="165" width="440" height="50" fill="#e0e0e0" stroke="#555" stroke-width="2"></rect>
    <text x="300" y="197" text-anchor="middle" font-family="Arial, sans-serif" font-size="20" font-weight="bold" fill="#333">
      战略评估与定位
    </text>
    
    <!-- 左侧嵌套子框1 -->
    <rect x="80" y="230" width="210" height="85" fill="#d0d0d0" stroke="#666" stroke-width="1.5"></rect>
    <text x="185" y="255" text-anchor="middle" font-family="Arial, sans-serif" font-size="15" font-weight="bold" fill="#333">
      内部能力评估
    </text>
    <rect x="90" y="267" width="180" height="25" fill="#f5f5f5" stroke="#888" stroke-width="1"></rect>
    <text x="180" y="283" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#444">
      技术成熟度分析
    </text>
    <rect x="90" y="295" width="180" height="25" fill="#f5f5f5" stroke="#888" stroke-width="1"></rect>
    <text x="180" y="311" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#444">
      组织数字化水平
    </text>
    
    <!-- 左侧嵌套子框2 -->
    <rect x="305" y="230" width="210" height="85" fill="#d0d0d0" stroke="#666" stroke-width="1.5"></rect>
    <text x="410" y="255" text-anchor="middle" font-family="Arial, sans-serif" font-size="15" font-weight="bold" fill="#333">
      外部环境扫描
    </text>
    <rect x="315" y="267" width="180" height="25" fill="#f5f5f5" stroke="#888" stroke-width="1"></rect>
    <text x="405" y="283" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#444">
      市场趋势研判
    </text>
    <rect x="315" y="295" width="180" height="25" fill="#f5f5f5" stroke="#888" stroke-width="1"></rect>
    <text x="405" y="311" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#444">
      竞争格局分析
    </text>
    
    <!-- 左侧嵌套子框3 -->
    <rect x="80" y="330" width="435" height="80" fill="#e0e0e0" stroke="#666" stroke-width="1.5"></rect>
    <text x="297.5" y="355" text-anchor="middle" font-family="Arial, sans-serif" font-size="15" font-weight="bold" fill="#333">
      战略目标设定
    </text>
    <rect x="90" y="367" width="135" height="28" fill="#f5f5f5" stroke="#888" stroke-width="1"></rect>
    <text x="157.5" y="385" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#444">
      短期目标（1年）
    </text>
    <rect x="232" y="367" width="135" height="28" fill="#f5f5f5" stroke="#888" stroke-width="1"></rect>
    <text x="299.5" y="385" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#444">
      中期目标（3年）
    </text>
    <rect x="374" y="367" width="135" height="28" fill="#f5f5f5" stroke="#888" stroke-width="1"></rect>
    <text x="441.5" y="385" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#444">
      长期愿景（5年+）
    </text>
    
    <!-- 右侧2x2小框网格 -->
    <rect x="580" y="145" width="235" height="130" fill="#d0d0d0" stroke="#666" stroke-width="2"></rect>
    <text x="697.5" y="170" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#333">
      技术架构设计
    </text>
    <rect x="592" y="185" width="100" height="38" fill="#f5f5f5" stroke="#888" stroke-width="1"></rect>
    <text x="642" y="208" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#444">
      云平台选型
    </text>
    <rect x="703" y="185" width="100" height="38" fill="#f5f5f5" stroke="#888" stroke-width="1"></rect>
    <text x="753" y="208" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#444">
      数据中台
    </text>
    <rect x="592" y="230" width="100" height="38" fill="#f5f5f5" stroke="#888" stroke-width="1"></rect>
    <text x="642" y="253" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#444">
      微服务架构
    </text>
    <rect x="703" y="230" width="100" height="38" fill="#f5f5f5" stroke="#888" stroke-width="1"></rect>
    <text x="753" y="253" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#444">
      API网关
    </text>
    
    <rect x="835" y="145" width="235" height="130" fill="#d0d0d0" stroke="#666" stroke-width="2"></rect>
    <text x="952.5" y="170" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#333">
      数据治理体系
    </text>
    <rect x="847" y="185" width="100" height="38" fill="#f5f5f5" stroke="#888" stroke-width="1"></rect>
    <text x="897" y="208" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#444">
      数据标准
    </text>
    <rect x="958" y="185" width="100" height="38" fill="#f5f5f5" stroke="#888" stroke-width="1"></rect>
    <text x="1008" y="208" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#444">
      质量管控
    </text>
    <rect x="847" y="230" width="100" height="38" fill="#f5f5f5" stroke="#888" stroke-width="1"></rect>
    <text x="897" y="253" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#444">
      安全合规
    </text>
    <rect x="958" y="230" width="100" height="38" fill="#f5f5f5" stroke="#888" stroke-width="1"></rect>
    <text x="1008" y="253" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#444">
      隐私保护
    </text>
    
    <rect x="580" y="295" width="235" height="130" fill="#d0d0d0" stroke="#666" stroke-width="2" class=""></rect>
    <text x="697.5" y="320" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#333">
      组织变革管理
    </text>
    <rect x="592" y="335" width="100" height="38" fill="#f5f5f5" stroke="#888" stroke-width="1"></rect>
    <text x="642" y="358" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#444">
      敏捷团队
    </text>
    <rect x="703" y="335" width="100" height="38" fill="#f5f5f5" stroke="#888" stroke-width="1"></rect>
    <text x="753" y="358" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#444">
      角色重构
    </text>
    <rect x="592" y="380" width="100" height="38" fill="#f5f5f5" stroke="#888" stroke-width="1"></rect>
    <text x="642" y="403" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#444">
      文化塑造
    </text>
    <rect x="703" y="380" width="100" height="38" fill="#f5f5f5" stroke="#888" stroke-width="1"></rect>
    <text x="753" y="403" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#444">
      培训体系
    </text>
    
    <rect x="835" y="295" width="235" height="130" fill="#5C7CFA" stroke="#4263EB" stroke-width="2"></rect>
    <text x="952.5" y="320" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#FFFFFF">
      资源配置规划
    </text>
    <rect x="847" y="335" width="100" height="38" fill="rgba(255,255,255,0.9)" stroke="#4263EB" stroke-width="1"></rect>
    <text x="897" y="358" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#333">
      预算编制
    </text>
    <rect x="958" y="335" width="100" height="38" fill="rgba(255,255,255,0.9)" stroke="#4263EB" stroke-width="1"></rect>
    <text x="1008" y="358" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#333">
      人才引进
    </text>
    <rect x="847" y="380" width="100" height="38" fill="rgba(255,255,255,0.9)" stroke="#4263EB" stroke-width="1"></rect>
    <text x="897" y="403" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#333">
      技术投入
    </text>
    <rect x="958" y="380" width="100" height="38" fill="rgba(255,255,255,0.9)" stroke="#4263EB" stroke-width="1"></rect>
    <text x="1008" y="403" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#333">
      风险准备金
    </text>
    
    <!-- 连接线：左侧到右侧的多种连接方式 -->
    
    <line x1="540" y1="270" x2="580" y2="210" stroke="#888" stroke-width="1.5" stroke-dasharray="3,2"></line>
    
    <line x1="540" y1="285" x2="580" y2="360" stroke="#666" stroke-width="1.5" stroke-dasharray="8,4"></line>
  </g>

  <!-- 垂直主流程箭头 -->
  <line x1="600" y1="460" x2="600" y2="510" stroke="#333" stroke-width="4" marker-end="url(#arrowEndDark)"></line>

  <!-- 第二层：技术实施与集成 - 辐射式/中心枢纽结构 -->
  <g id="level2">
    <!-- 外围虚线框 -->
    <rect x="30" y="530" width="1140" height="480" fill="none" stroke="#999" stroke-width="2.5" stroke-dasharray="10,5"></rect>
    
    <!-- 中心枢纽框 -->
    <rect x="460" y="680" width="280" height="140" fill="#5C7CFA" stroke="#4263EB" stroke-width="3" filter="url(#dropShadow)"></rect>
    <text x="600" y="720" text-anchor="middle" font-family="Arial, sans-serif" font-size="22" font-weight="bold" fill="#FFFFFF">
      核心平台建设
    </text>
    <rect x="480" y="740" width="115" height="35" fill="rgba(255,255,255,0.9)" stroke="#4263EB" stroke-width="1.5"></rect>
    <text x="537.5" y="763" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" fill="#333">
      统一身份认证
    </text>
    <rect x="605" y="740" width="115" height="35" fill="rgba(255,255,255,0.9)" stroke="#4263EB" stroke-width="1.5"></rect>
    <text x="662.5" y="763" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" fill="#333">
      流程编排引擎
    </text>
    <rect x="480" y="782" width="115" height="35" fill="rgba(255,255,255,0.9)" stroke="#4263EB" stroke-width="1.5"></rect>
    <text x="537.5" y="805" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" fill="#333">
      监控告警中心
    </text>
    <rect x="605" y="782" width="115" height="35" fill="rgba(255,255,255,0.9)" stroke="#4263EB" stroke-width="1.5"></rect>
    <text x="662.5" y="805" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" fill="#333">
      DevOps平台
    </text>
    
    <!-- 上方模块 -->
    <rect x="485" y="560" width="230" height="90" fill="#e0e0e0" stroke="#666" stroke-width="2"></rect>
    <text x="600" y="587" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#333">
      前端应用层
    </text>
    <rect x="495" y="600" width="100" height="30" fill="#f5f5f5" stroke="#888" stroke-width="1"></rect>
    <text x="545" y="620" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#444">
      移动APP
    </text>
    <rect x="605" y="600" width="100" height="30" fill="#f5f5f5" stroke="#888" stroke-width="1"></rect>
    <text x="655" y="620" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#444">
      Web门户
    </text>
    
    <!-- 左上方模块 -->
    <rect x="80" y="590" width="190" height="105" fill="#d0d0d0" stroke="#666" stroke-width="2"></rect>
    <text x="175" y="615" text-anchor="middle" font-family="Arial, sans-serif" font-size="15" font-weight="bold" fill="#333">
      AI智能引擎
    </text>
    <rect x="90" y="628" width="170" height="28" fill="#f5f5f5" stroke="#888" stroke-width="1"></rect>
    <text x="175" y="646" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#444">
      机器学习模型库
    </text>
    <rect x="90" y="661" width="170" height="28" fill="#f5f5f5" stroke="#888" stroke-width="1"></rect>
    <text x="175" y="679" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#444">
      自然语言处理
    </text>
    
    <!-- 左中方模块 -->
    <rect x="60" y="730" width="165" height="80" fill="#e0e0e0" stroke="#666" stroke-width="2"></rect>
    <text x="142.5" y="755" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#333">
      IoT物联网
    </text>
    <rect x="70" y="767" width="145" height="25" fill="#f5f5f5" stroke="#888" stroke-width="1"></rect>
    <text x="142.5" y="783" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#444">
      设备接入协议
    </text>
    <rect x="70" y="795" width="145" height="25" fill="#f5f5f5" stroke="#888" stroke-width="1"></rect>
    <text x="142.5" y="811" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#444">
      边缘计算节点
    </text>
    
    <!-- 左下方模块 -->
    <rect x="80" y="850" width="190" height="95" fill="#d0d0d0" stroke="#666" stroke-width="2"></rect>
    <text x="175" y="875" text-anchor="middle" font-family="Arial, sans-serif" font-size="15" font-weight="bold" fill="#333">
      区块链服务
    </text>
    <rect x="90" y="887" width="80" height="27" fill="#f5f5f5" stroke="#888" stroke-width="1"></rect>
    <text x="130" y="904" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#444">
      智能合约
    </text>
    <rect x="180" y="887" width="80" height="27" fill="#f5f5f5" stroke="#888" stroke-width="1"></rect>
    <text x="220" y="904" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#444">
      分布式账本
    </text>
    <rect x="90" y="918" width="170" height="23" fill="#f5f5f5" stroke="#888" stroke-width="1"></rect>
    <text x="175" y="933" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#444">
      共识机制管理
    </text>
    
    <!-- 右上方模块 -->
    <rect x="930" y="590" width="190" height="105" fill="#d0d0d0" stroke="#666" stroke-width="2"></rect>
    <text x="1025" y="615" text-anchor="middle" font-family="Arial, sans-serif" font-size="15" font-weight="bold" fill="#333">
      大数据平台
    </text>
    <rect x="940" y="628" width="170" height="28" fill="#f5f5f5" stroke="#888" stroke-width="1"></rect>
    <text x="1025" y="646" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#444">
      实时计算引擎
    </text>
    <rect x="940" y="661" width="170" height="28" fill="#f5f5f5" stroke="#888" stroke-width="1"></rect>
    <text x="1025" y="679" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#444">
      数据湖存储
    </text>
    
    <!-- 右中方模块 -->
    <rect x="975" y="730" width="165" height="80" fill="#e0e0e0" stroke="#666" stroke-width="2"></rect>
    <text x="1057.5" y="755" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#333">
      安全防护
    </text>
    <rect x="985" y="767" width="145" height="25" fill="#f5f5f5" stroke="#888" stroke-width="1"></rect>
    <text x="1057.5" y="783" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#444">
      零信任架构
    </text>
    <rect x="985" y="795" width="145" height="25" fill="#f5f5f5" stroke="#888" stroke-width="1"></rect>
    <text x="1057.5" y="811" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#444">
      威胁情报系统
    </text>
    
    <!-- 右下方模块 -->
    <rect x="930" y="850" width="190" height="95" fill="#d0d0d0" stroke="#666" stroke-width="2"></rect>
    <text x="1025" y="875" text-anchor="middle" font-family="Arial, sans-serif" font-size="15" font-weight="bold" fill="#333">
      集成中间件
    </text>
    <rect x="940" y="887" width="80" height="27" fill="#f5f5f5" stroke="#888" stroke-width="1"></rect>
    <text x="980" y="904" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#444">
      ESB总线
    </text>
    <rect x="1030" y="887" width="80" height="27" fill="#f5f5f5" stroke="#888" stroke-width="1"></rect>
    <text x="1070" y="904" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#444">
      消息队列
    </text>
    <rect x="940" y="918" width="170" height="23" fill="#f5f5f5" stroke="#888" stroke-width="1"></rect>
    <text x="1025" y="933" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#444">
      事件驱动架构
    </text>
    
    <!-- 中心到周围的连接线 - 多种线型 -->
    <!-- 实线连接 -->
    <line x1="600" y1="680" x2="600" y2="650" stroke="#4263EB" stroke-width="2.5" marker-end="url(#arrowEndAccent)"></line>
    <!-- 虚线连接 -->
    <line x1="480" y1="710" x2="270" y2="642" stroke="#666" stroke-width="2" stroke-dasharray="6,3" marker-end="url(#arrowEnd)"></line>
    <!-- 点线连接 -->
    <line x1="460" y1="750" x2="225" y2="770" stroke="#888" stroke-width="2" stroke-dasharray="2,3" marker-end="url(#arrowEnd)"></line>
    <!-- 实线粗连接 -->
    <line x1="480" y1="790" x2="270" y2="897" stroke="#666" stroke-width="2.5" marker-end="url(#arrowEnd)"></line>
    <!-- 虚线细连接 -->
    <line x1="720" y1="710" x2="930" y2="642" stroke="#888" stroke-width="1.5" stroke-dasharray="5,2"></line>
    <!-- 点线连接 -->
    <line x1="740" y1="750" x2="975" y2="770" stroke="#666" stroke-width="2" stroke-dasharray="3,4" marker-end="url(#arrowEnd)"></line>
    <!-- 实线连接 -->
    <line x1="720" y1="790" x2="930" y2="897" stroke="#666" stroke-width="2.5" marker-end="url(#arrowEnd)"></line>
    
    <!-- 横向关联线 -->
    
    
  </g>

  <!-- 垂直主流程箭头 -->
  <line x1="600" y1="1010" x2="600" y2="1060" stroke="#333" stroke-width="4" marker-end="url(#arrowEndDark)"></line>

  <!-- 第三层：业务场景应用 - 嵌套矩阵式不规则网格 -->
  <g id="level3">
    <!-- 外围虚线框 -->
    <rect x="30" y="1080" width="1140" height="500" fill="none" stroke="#999" stroke-width="2.5" stroke-dasharray="8,5"></rect>
    
    <!-- 顶部标题 -->
    <rect x="380" y="1100" width="440" height="50" fill="#e0e0e0" stroke="#666" stroke-width="2"></rect>
    <text x="600" y="1132" text-anchor="middle" font-family="Arial, sans-serif" font-size="22" font-weight="bold" fill="#333">
      业务场景数字化应用矩阵
    </text>
    
    <!-- 大容器区域1 - 左侧密集小框区 -->
    <rect x="60" y="1170" width="340" height="380" fill="#f5f5f5" stroke="#888" stroke-width="2" stroke-dasharray="4,2" class=""></rect>
    
    <rect x="80" y="1190" width="300" height="40" fill="#d0d0d0" stroke="#666" stroke-width="1.5"></rect>
    <text x="230" y="1215" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#333">
      智能制造应用群
    </text>
    
    <!-- 密集小框排列 -->
    <rect x="80" y="1245" width="95" height="45" fill="#f5f5f5" stroke="#888" stroke-width="1"></rect>
    <text x="127.5" y="1262" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#444">
      生产调度
    </text>
    <text x="127.5" y="1276" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#666">
      优化系统
    </text>
    
    <rect x="185" y="1245" width="95" height="45" fill="#f5f5f5" stroke="#888" stroke-width="1"></rect>
    <text x="232.5" y="1262" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#444">
      设备预测
    </text>
    <text x="232.5" y="1276" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#666">
      性维护
    </text>
    
    <rect x="290" y="1245" width="90" height="45" fill="#f5f5f5" stroke="#888" stroke-width="1"></rect>
    <text x="335" y="1262" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#444">
      质量检测
    </text>
    <text x="335" y="1276" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#666">
      AI视觉
    </text>
    
    <rect x="80" y="1300" width="90" height="45" fill="#f5f5f5" stroke="#888" stroke-width="1"></rect>
    <text x="125" y="1317" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#444">
      能耗监控
    </text>
    <text x="125" y="1331" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#666">
      分析
    </text>
    
    <rect x="180" y="1300" width="100" height="45" fill="#5C7CFA" stroke="#4263EB" stroke-width="1.5"></rect>
    <text x="230" y="1317" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" font-weight="bold" fill="#FFFFFF">
      数字孪生
    </text>
    <text x="230" y="1331" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#FFFFFF">
      工厂模型
    </text>
    
    <rect x="290" y="1300" width="90" height="45" fill="#f5f5f5" stroke="#888" stroke-width="1"></rect>
    <text x="335" y="1317" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#444">
      供应链
    </text>
    <text x="335" y="1331" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#666">
      协同
    </text>
    
    <rect x="80" y="1355" width="145" height="45" fill="#e0e0e0" stroke="#888" stroke-width="1.5"></rect>
    <text x="152.5" y="1372" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#444">
      工艺参数优化引擎
    </text>
    <text x="152.5" y="1386" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#666">
      (深度学习)
    </text>
    
    <rect x="235" y="1355" width="145" height="45" fill="#e0e0e0" stroke="#888" stroke-width="1.5"></rect>
    <text x="307.5" y="1372" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#444">
      柔性生产线调配
    </text>
    <text x="307.5" y="1386" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#666">
      (动态重组)
    </text>
    
    <!-- 下方子区域 -->
    <rect x="80" y="1415" width="300" height="125" fill="#e0e0e0" stroke="#666" stroke-width="1.5"></rect>
    <text x="230" y="1435" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#333">
      仓储物流数字化
    </text>
    
    <rect x="90" y="1450" width="90" height="35" fill="#f5f5f5" stroke="#888" stroke-width="1"></rect>
    <text x="135" y="1471" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#444">
      智能拣选机器人
    </text>
    
    <rect x="190" y="1450" width="90" height="35" fill="#f5f5f5" stroke="#888" stroke-width="1"></rect>
    <text x="235" y="1471" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#444">
      路径规划算法
    </text>
    
    <rect x="290" y="1450" width="80" height="35" fill="#f5f5f5" stroke="#888" stroke-width="1"></rect>
    <text x="330" y="1471" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#444">
      库存预测
    </text>
    
    <rect x="90" y="1495" width="135" height="35" fill="#f5f5f5" stroke="#888" stroke-width="1"></rect>
    <text x="157.5" y="1516" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#444">
      无人配送车调度
    </text>
    
    <rect x="235" y="1495" width="135" height="35" fill="#f5f5f5" stroke="#888" stroke-width="1"></rect>
    <text x="302.5" y="1516" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#444">
      跨境物流追踪
    </text>
    
    <!-- 大容器区域2 - 中间大框留白区 -->
    <rect x="420" y="1170" width="360" height="195" fill="#d0d0d0" stroke="#666" stroke-width="2.5"></rect>
    <text x="600" y="1200" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#333">
      客户体验数字化平台
    </text>
    
    <rect x="440" y="1220" width="160" height="55" fill="#f5f5f5" stroke="#888" stroke-width="1.5"></rect>
    <text x="520" y="1242" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" fill="#444">
      全渠道用户画像
    </text>
    <text x="520" y="1260" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#666">
      360度视图构建
    </text>
    
    <rect x="610" y="1220" width="160" height="55" fill="#f5f5f5" stroke="#888" stroke-width="1.5"></rect>
    <text x="690" y="1242" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" fill="#444">
      智能推荐引擎
    </text>
    <text x="690" y="1260" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#666">
      协同过滤+深度学习
    </text>
    
    <rect x="440" y="1285" width="330" height="70" fill="#5C7CFA" stroke="#4263EB" stroke-width="2"></rect>
    <text x="605" y="1310" text-anchor="middle" font-family="Arial, sans-serif" font-size="15" font-weight="bold" fill="#FFFFFF">
      对话式AI客服系统
    </text>
    <text x="605" y="1330" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#FFFFFF">
      多模态交互 | 情感分析 | 知识图谱支持
    </text>
    
    <!-- 大容器区域3 - 中间下方混合区 -->
    <rect x="420" y="1380" width="170" height="170" fill="#e0e0e0" stroke="#888" stroke-width="2" stroke-dasharray="5,3"></rect>
    <text x="505" y="1405" text-anchor="middle" font-family="Arial, sans-serif" font-size="15" font-weight="bold" fill="#333">
      营销自动化
    </text>
    
    <rect x="435" y="1420" width="140" height="35" fill="#f5f5f5" stroke="#888" stroke-width="1"></rect>
    <text x="505" y="1441" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#444">
      精准投放引擎
    </text>
    
    <rect x="435" y="1463" width="140" height="35" fill="#f5f5f5" stroke="#888" stroke-width="1"></rect>
    <text x="505" y="1484" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#444">
      内容生成AI
    </text>
    
    <rect x="435" y="1506" width="140" height="35" fill="#f5f5f5" stroke="#888" stroke-width="1"></rect>
    <text x="505" y="1527" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#444">
      效果归因分析
    </text>
    
    <rect x="610" y="1380" width="170" height="170" fill="#e0e0e0" stroke="#888" stroke-width="2" stroke-dasharray="5,3"></rect>
    <text x="695" y="1405" text-anchor="middle" font-family="Arial, sans-serif" font-size="15" font-weight="bold" fill="#333">
      产品创新工坊
    </text>
    
    <rect x="625" y="1420" width="140" height="35" fill="#f5f5f5" stroke="#888" stroke-width="1"></rect>
    <text x="695" y="1441" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#444">
      敏捷开发平台
    </text>
    
    <rect x="625" y="1463" width="140" height="35" fill="#f5f5f5" stroke="#888" stroke-width="1"></rect>
    <text x="695" y="1484" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#444">
      A/B测试框架
    </text>
    
    <rect x="625" y="1506" width="140" height="35" fill="#f5f5f5" stroke="#888" stroke-width="1"></rect>
    <text x="695" y="1527" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#444">
      用户反馈闭环
    </text>
    
    <!-- 大容器区域4 - 右侧不规则区 -->
    <rect x="800" y="1170" width="340" height="380" fill="#f5f5f5" stroke="#888" stroke-width="2" stroke-dasharray="4,2" class=""></rect>
    
    <rect x="820" y="1190" width="300" height="40" fill="#d0d0d0" stroke="#666" stroke-width="1.5"></rect>
    <text x="970" y="1215" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#333">
      决策智能分析中心
    </text>
    
    <rect x="820" y="1245" width="140" height="90" fill="#e0e0e0" stroke="#888" stroke-width="1.5"></rect>
    <text x="890" y="1270" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#333">
      实时经营看板
    </text>
    <rect x="830" y="1287" width="120" height="23" fill="#f5f5f5" stroke="#888" stroke-width="1"></rect>
    <text x="890" y="1302" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#444">
      多维度指标监控
    </text>
    <rect x="830" y="1313" width="120" height="23" fill="#f5f5f5" stroke="#888" stroke-width="1"></rect>
    <text x="890" y="1328" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#444">
      异常预警机制
    </text>
    
    <rect x="975" y="1245" width="145" height="90" fill="#e0e0e0" stroke="#888" stroke-width="1.5"></rect>
    <text x="1047.5" y="1270" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#333">
      预测分析引擎
    </text>
    <rect x="985" y="1287" width="125" height="23" fill="#f5f5f5" stroke="#888" stroke-width="1"></rect>
    <text x="1047.5" y="1302" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#444">
      时间序列预测
    </text>
    <rect x="985" y="1313" width="125" height="23" fill="#f5f5f5" stroke="#888" stroke-width="1"></rect>
    <text x="1047.5" y="1328" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#444">
      情景模拟沙盘
    </text>
    
    <rect x="820" y="1350" width="300" height="75" fill="#5C7CFA" stroke="#4263EB" stroke-width="2"></rect>
    <text x="970" y="1377" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#FFFFFF">
      智能决策支持系统
    </text>
    <text x="970" y="1397" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#FFFFFF">
      多目标优化 | 约束求解 | 策略推荐
    </text>
    <text x="970" y="1413" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="rgba(255,255,255,0.8)">
      (基于强化学习与专家系统)
    </text>
    
    <rect x="820" y="1440" width="95" height="50" fill="#e0e0e0" stroke="#888" stroke-width="1.5"></rect>
    <text x="867.5" y="1459" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#444">
      风险评估
    </text>
    <text x="867.5" y="1474" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#666">
      模型
    </text>
    
    <rect x="925" y="1440" width="95" height="50" fill="#e0e0e0" stroke="#888" stroke-width="1.5"></rect>
    <text x="972.5" y="1459" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#444">
      成本优化
    </text>
    <text x="972.5" y="1474" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#666">
      算法
    </text>
    
    <rect x="1030" y="1440" width="90" height="50" fill="#e0e0e0" stroke="#888" stroke-width="1.5"></rect>
    <text x="1075" y="1459" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#444">
      战略规划
    </text>
    <text x="1075" y="1474" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#666">
      工具
    </text>
    
    <rect x="820" y="1500" width="300" height="40" fill="#d0d0d0" stroke="#888" stroke-width="1.5"></rect>
    <text x="970" y="1524" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#333">
      知识管理与挖掘平台
    </text>
    
    <!-- 内部连接线 - 创造密集交织感 -->
    
    
    <line x1="590" y1="1480" x2="625" y2="1480" stroke="#aaa" stroke-width="1" stroke-dasharray="2,2"></line>
    
  </g>

  <!-- 垂直主流程箭头 -->
  <line x1="600" y1="1580" x2="600" y2="1630" stroke="#333" stroke-width="4" marker-end="url(#arrowEndDark)"></line>

  <!-- 第四层：持续优化与反馈 - 垂直级联结构带多重反馈回路 -->
  <g id="level4">
    <!-- 外围虚线框 -->
    <rect x="30" y="1650" width="1140" height="720" fill="none" stroke="#999" stroke-width="2.5" stroke-dasharray="10,6"></rect>
    
    <!-- 顶部标题 -->
    <rect x="350" y="1675" width="500" height="50" fill="#e0e0e0" stroke="#666" stroke-width="2.5"></rect>
    <text x="600" y="1707" text-anchor="middle" font-family="Arial, sans-serif" font-size="22" font-weight="bold" fill="#333">
      持续优化与生态演进体系
    </text>
    
    <!-- 第一级：监控与度量层 -->
    <rect x="180" y="1755" width="840" height="110" fill="#f5f5f5" stroke="#888" stroke-width="2" stroke-dasharray="5,2"></rect>
    
    <rect x="200" y="1770" width="185" height="75" fill="#d0d0d0" stroke="#666" stroke-width="1.5"></rect>
    <text x="292.5" y="1795" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#333">
      性能监控体系
    </text>
    <rect x="210" y="1808" width="165" height="25" fill="#f5f5f5" stroke="#888" stroke-width="1"></rect>
    <text x="292.5" y="1824" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#444">
      系统响应时间追踪
    </text>
    
    <rect x="405" y="1770" width="185" height="75" fill="#d0d0d0" stroke="#666" stroke-width="1.5"></rect>
    <text x="497.5" y="1795" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#333">
      业务指标跟踪
    </text>
    <rect x="415" y="1808" width="165" height="25" fill="#f5f5f5" stroke="#888" stroke-width="1"></rect>
    <text x="497.5" y="1824" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#444">
      KPI实时计算引擎
    </text>
    
    <rect x="610" y="1770" width="185" height="75" fill="#5C7CFA" stroke="#4263EB" stroke-width="2"></rect>
    <text x="702.5" y="1795" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#FFFFFF">
      用户体验监测
    </text>
    <rect x="620" y="1808" width="165" height="25" fill="rgba(255,255,255,0.9)" stroke="#4263EB" stroke-width="1"></rect>
    <text x="702.5" y="1824" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#333">
      旅程分析热力图
    </text>
    
    <rect x="815" y="1770" width="185" height="75" fill="#d0d0d0" stroke="#666" stroke-width="1.5"></rect>
    <text x="907.5" y="1795" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#333">
      安全审计日志
    </text>
    <rect x="825" y="1808" width="165" height="25" fill="#f5f5f5" stroke="#888" stroke-width="1"></rect>
    <text x="907.5" y="1824" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#444">
      合规性检查报告
    </text>
    
    <!-- 向下箭头组 -->
    <line x1="292.5" y1="1865" x2="292.5" y2="1905" stroke="#666" stroke-width="2" marker-end="url(#arrowEnd)"></line>
    <line x1="497.5" y1="1865" x2="497.5" y2="1905" stroke="#666" stroke-width="2" marker-end="url(#arrowEnd)"></line>
    <line x1="702.5" y1="1865" x2="702.5" y2="1905" stroke="#5C7CFA" stroke-width="2.5" marker-end="url(#arrowEndAccent)"></line>
    <line x1="907.5" y1="1865" x2="907.5" y2="1905" stroke="#666" stroke-width="2" marker-end="url(#arrowEnd)"></line>
    
    <!-- 第二级：分析与诊断层 -->
    <rect x="120" y="1920" width="960" height="135" fill="#f5f5f5" stroke="#888" stroke-width="2" stroke-dasharray="5,2" class=""></rect>
    
    <rect x="140" y="1940" width="220" height="95" fill="#e0e0e0" stroke="#888" stroke-width="1.5"></rect>
    <text x="250" y="1965" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#333">
      根因分析引擎
    </text>
    <rect x="150" y="1978" width="190" height="23" fill="#f5f5f5" stroke="#888" stroke-width="1"></rect>
    <text x="245" y="1993" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#444">
      异常检测与归因算法
    </text>
    <rect x="150" y="2005" width="190" height="23" fill="#f5f5f5" stroke="#888" stroke-width="1"></rect>
    <text x="245" y="2020" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#444">
      故障树分析自动化
    </text>
    
    <rect x="380" y="1940" width="220" height="95" fill="#e0e0e0" stroke="#888" stroke-width="1.5"></rect>
    <text x="490" y="1965" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#333">
      趋势洞察平台
    </text>
    <rect x="390" y="1978" width="190" height="23" fill="#f5f5f5" stroke="#888" stroke-width="1"></rect>
    <text x="485" y="1993" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#444">
      时序模式识别
    </text>
    <rect x="390" y="2005" width="190" height="23" fill="#f5f5f5" stroke="#888" stroke-width="1"></rect>
    <text x="485" y="2020" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#444">
      季节性周期性分析
    </text>
    
    <rect x="620" y="1940" width="220" height="95" fill="#e0e0e0" stroke="#888" stroke-width="1.5"></rect>
    <text x="730" y="1965" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#333">
      对标评估体系
    </text>
    <rect x="630" y="1978" width="190" height="23" fill="#f5f5f5" stroke="#888" stroke-width="1"></rect>
    <text x="725" y="1993" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#444">
      行业标杆比较
    </text>
    <rect x="630" y="2005" width="190" height="23" fill="#f5f5f5" stroke="#888" stroke-width="1"></rect>
    <text x="725" y="2020" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#444">
      差距识别矩阵
    </text>
    
    <rect x="860" y="1940" width="200" height="95" fill="#e0e0e0" stroke="#888" stroke-width="1.5"></rect>
    <text x="960" y="1965" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#333">
      成本效益分析
    </text>
    <rect x="870" y="1978" width="180" height="23" fill="#f5f5f5" stroke="#888" stroke-width="1"></rect>
    <text x="960" y="1993" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#444">
      ROI计算模型
    </text>
    <rect x="870" y="2005" width="180" height="23" fill="#f5f5f5" stroke="#888" stroke-width="1"></rect>
    <text x="960" y="2020" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#444">
      总体拥有成本TCO
    </text>
    
    <!-- 向下箭头组 -->
    <line x1="250" y1="2055" x2="250" y2="2095" stroke="#666" stroke-width="2" marker-end="url(#arrowEnd)"></line>
    <line x1="490" y1="2055" x2="490" y2="2095" stroke="#666" stroke-width="2" marker-end="url(#arrowEnd)"></line>
    <line x1="730" y1="2055" x2="730" y2="2095" stroke="#666" stroke-width="2" marker-end="url(#arrowEnd)"></line>
    <line x1="960" y1="2055" x2="960" y2="2095" stroke="#666" stroke-width="2" marker-end="url(#arrowEnd)"></line>
    
    <!-- 第三级：优化与执行层 -->
    <rect x="80" y="2110" width="1040" height="125" fill="#f5f5f5" stroke="#888" stroke-width="2" stroke-dasharray="5,2" class=""></rect>
    
    <rect x="100" y="2130" width="240" height="97" fill="#5C7CFA" stroke="#4263EB" stroke-width="2" class=""></rect>
    <text x="220" y="2155" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#FFFFFF">
      自动化优化执行
    </text>
    <rect x="110" y="2168" width="105" height="25" fill="rgba(255,255,255,0.9)" stroke="#4263EB" stroke-width="1"></rect>
    <text x="162.5" y="2184" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#333" class="">
      参数自动调优
    </text>
    <rect x="225" y="2168" width="105" height="25" fill="rgba(255,255,255,0.9)" stroke="#4263EB" stroke-width="1"></rect>
    <text x="277.5" y="2184" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#333">
      资源弹性伸缩
    </text>
    <rect x="110" y="2197" width="210" height="25" fill="rgba(255,255,255,0.9)" stroke="#4263EB" stroke-width="1" class=""></rect>
    <text x="215" y="2213" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#333">
      智能流量调度与负载均衡
    </text>
    
    <rect x="360" y="2130" width="230" height="94" fill="#d0d0d0" stroke="#888" stroke-width="1.5" class=""></rect>
    <text x="475" y="2155" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#333">
      流程重构工作坊
    </text>
    <rect x="370" y="2168" width="200" height="23" fill="#f5f5f5" stroke="#888" stroke-width="1"></rect>
    <text x="470" y="2183" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#444">
      价值流映射重绘
    </text>
    <rect x="370" y="2195" width="200" height="23" fill="#f5f5f5" stroke="#888" stroke-width="1"></rect>
    <text x="470" y="2210" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#444">
      瓶颈消除方案设计
    </text>
    
    <rect x="610" y="2130" width="230" height="94" fill="#d0d0d0" stroke="#888" stroke-width="1.5" class=""></rect>
    <text x="725" y="2155" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#333">
      创新实验室
    </text>
    <rect x="620" y="2168" width="200" height="23" fill="#f5f5f5" stroke="#888" stroke-width="1"></rect>
    <text x="720" y="2183" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#444">
      新技术POC验证
    </text>
    <rect x="620" y="2195" width="200" height="23" fill="#f5f5f5" stroke="#888" stroke-width="1"></rect>
    <text x="720" y="2210" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#444">
      快速原型迭代
    </text>
    
    <rect x="860" y="2130" width="240" height="94" fill="#d0d0d0" stroke="#888" stroke-width="1.5" class="selected"></rect>
    <text x="980" y="2155" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#333">
      知识沉淀与复用
    </text>
    <rect x="870" y="2168" width="105" height="23" fill="#f5f5f5" stroke="#888" stroke-width="1"></rect>
    <text x="922.5" y="2183" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#444">
      最佳实践库
    </text>
    <rect x="985" y="2168" width="105" height="23" fill="#f5f5f5" stroke="#888" stroke-width="1"></rect>
    <text x="1037.5" y="2183" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#444">
      案例知识图谱
    </text>
    <rect x="870" y="2195" width="220" height="23" fill="#f5f5f5" stroke="#888" stroke-width="1"></rect>
    <text x="980" y="2210" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#444">
      智能推荐与匹配系统
    </text>
    
    <!-- 向下箭头组 -->
    <line x1="220" y1="2235" x2="220" y2="2275" stroke="#5C7CFA" stroke-width="2.5" marker-end="url(#arrowEndAccent)"></line>
    <line x1="475" y1="2235" x2="475" y2="2275" stroke="#666" stroke-width="2" marker-end="url(#arrowEnd)"></line>
    <line x1="725" y1="2235" x2="725" y2="2275" stroke="#666" stroke-width="2" marker-end="url(#arrowEnd)"></line>
    <line x1="980" y1="2235" x2="980" y2="2275" stroke="#666" stroke-width="2" marker-end="url(#arrowEnd)"></line>
    
    <!-- 第四级：生态演进层 -->
    <rect x="200" y="2290" width="800" height="65" fill="#e0e0e0" stroke="#666" stroke-width="2.5"></rect>
    <text x="600" y="2317" text-anchor="middle" font-family="Arial, sans-serif" font-size="17" font-weight="bold" fill="#333">
      生态系统协同演进平台
    </text>
    <text x="600" y="2339" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" fill="#555">
      合作伙伴集成 | 开放API治理 | 价值共创机制 | 生态健康度评估
    </text>
    
    <!-- 多重反馈回路 -->
    <!-- 短反馈回路 - 从第四级到第三级 -->
    
    
    
    <!-- 中反馈回路 - 从第四级到第二级 -->
    
    
    
    <!-- 长反馈回路 - 从第四级回到第一级 -->
    
    
    
    <!-- 斜向关联线 - 第三级内部交叉 -->
    <line x1="340" y1="2172" x2="610" y2="2172" stroke="#aaa" stroke-width="1.5" stroke-dasharray="3,2"></line>
    <line x1="590" y1="2172" x2="860" y2="2172" stroke="#aaa" stroke-width="1.5" stroke-dasharray="3,2"></line>
    
    <!-- 横向协同线 - 第二级到第三级斜向 -->
    
    
  </g>
</svg>

`
    },
    {
        id: 'liuchengtuxiaoxiao',
        name: '小小的流程图',
        description: '展示流程',
        svgCode: `<svg width="100%" height="500" viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- 参考文档2的渐变配色 -->
    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#3a7ca5"></stop>
      <stop offset="100%" stop-color="#2c8c99"></stop>
    </linearGradient>
    <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#2c8c99"></stop>
      <stop offset="100%" stop-color="#2a9d8f"></stop>
    </linearGradient>
    <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#2a9d8f"></stop>
      <stop offset="100%" stop-color="#6abf7c"></stop>
    </linearGradient>
    <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#6abf7c"></stop>
      <stop offset="100%" stop-color="#a8d96d"></stop>
    </linearGradient>
    <filter id="shadow" x="-0.2" y="-0.2" width="1.4" height="1.4">
      <feGaussianBlur in="SourceAlpha" stdDeviation="3"></feGaussianBlur>
      <feOffset dx="2" dy="2" result="offsetblur"></feOffset>
      <feFlood flood-color="#000000" flood-opacity="0.2"></feFlood>
      <feComposite in2="offsetblur" operator="in"></feComposite>
      <feMerge>
        <feMergeNode></feMergeNode>
        <feMergeNode in="SourceGraphic"></feMergeNode>
      </feMerge>
    </filter>
    <marker id="arrow" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#4a5568"></polygon>
    </marker>
  </defs>
  
  <!-- 背景 -->
  <rect width="100%" height="328" fill="#f8fafc" class="selected"></rect>
  
  <!-- 标题 -->
  <text x="511" y="40" text-anchor="middle" fill="#1a5f7a" font-size="24" font-weight="bold" class="">跨境物流行业发展趋势路线图（2025）</text>
  
  <!-- 阶段1: 行业现状基础 -->
  <rect x="50" y="80" width="200" height="100" rx="10" fill="url(#gradient1)" filter="url(#shadow)"></rect>
  <text x="150" y="110" text-anchor="middle" fill="white" font-size="16" font-weight="bold">行业现状基础</text>
  <text x="150" y="130" text-anchor="middle" fill="white" font-size="12">市场规模: 2.79万亿元</text>
  <text x="150" y="145" text-anchor="middle" fill="white" font-size="12">企业总量: 17.6万家</text>
  <text x="150" y="160" text-anchor="middle" fill="white" font-size="12">增长放缓: 8.73%</text>
  
  <!-- 阶段2: 客户群体洞察 -->
  <rect x="300" y="80" width="200" height="100" rx="10" fill="url(#gradient2)" filter="url(#shadow)"></rect>
  <text x="400" y="110" text-anchor="middle" fill="white" font-size="16" font-weight="bold">客户群体洞察</text>
  <text x="400" y="130" text-anchor="middle" fill="white" font-size="12">亚马逊卖家: 104万家</text>
  <text x="400" y="145" text-anchor="middle" fill="white" font-size="12">独立站: 高毛利机会</text>
  <text x="400" y="160" text-anchor="middle" fill="white" font-size="12">小微主体主导</text>
  
  <!-- 阶段3: 发展趋势洞察 -->
  <rect x="550" y="80" width="200" height="100" rx="10" fill="url(#gradient3)" filter="url(#shadow)"></rect>
  <text x="650" y="110" text-anchor="middle" fill="white" font-size="16" font-weight="bold">发展趋势洞察</text>
  <text x="650" y="130" text-anchor="middle" fill="white" font-size="12">AI赋能: 降本增效</text>
  <text x="650" y="145" text-anchor="middle" fill="white" font-size="12">海外仓: 3500个</text>
  <text x="650" y="160" text-anchor="middle" fill="white" font-size="12">高客单价战略</text>
  
  <!-- 阶段4: 未来展望与案例 -->
  <rect x="800" y="80" width="150" height="100" rx="10" fill="url(#gradient4)" filter="url(#shadow)"></rect>
  <text x="875" y="110" text-anchor="middle" fill="#ffffff" font-size="16" font-weight="bold" class="">未来展望</text>
  <text x="875" y="130" text-anchor="middle" fill="#ffffff" font-size="12" class="">智慧生态竞争</text>
  <text x="875" y="145" text-anchor="middle" fill="#ffffff" font-size="12" class="">案例: 效率提升</text>
  <text x="875" y="160" text-anchor="middle" fill="#ffffff" font-size="12" class="">技术驱动增长</text>
  
  <!-- 连接箭头 -->
  <path d="M250,130 L300,130" stroke="#4a5568" stroke-width="2" fill="none" marker-end="url(#arrow)"></path>
  <path d="M500,130 L550,130" stroke="#4a5568" stroke-width="2" fill="none" marker-end="url(#arrow)"></path>
  <path d="M750,130 L800,130" stroke="#4a5568" stroke-width="2" fill="none" marker-end="url(#arrow)"></path>
  
  <!-- 底部信息 -->
  <rect x="297" y="223" width="400" height="60" rx="10" fill="#e2e8f0" class=""></rect>
  <text x="499" y="247" text-anchor="middle" fill="#2d3748" font-size="16" font-weight="bold" class="">行业增长潜力：AI与合规驱动高价值转型</text>
  <text x="499" y="272" text-anchor="middle" fill="#4a5568" font-size="14" class="selected">基于2025年探迹大数据研究院报告关键洞察</text>

</svg>`
    },
    {
        id: 'qipao',
        name: '气泡图',
        description: '展示...什么好呢',
        svgCode: `<svg width="100%" height="650" viewBox="0 0 1000 650" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <!-- 渐变定义 -->
                        <linearGradient id="stage1Gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stop-color="#3a7ca5" />
                            <stop offset="100%" stop-color="#2c8c99" />
                        </linearGradient>
                        <linearGradient id="stage2Gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stop-color="#2c8c99" />
                            <stop offset="100%" stop-color="#2a9d8f" />
                        </linearGradient>
                        <linearGradient id="stage3Gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stop-color="#2a9d8f" />
                            <stop offset="100%" stop-color="#6abf7c" />
                        </linearGradient>
                        <linearGradient id="stage4Gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stop-color="#6abf7c" />
                            <stop offset="100%" stop-color="#a8d96d" />
                        </linearGradient>
                        <linearGradient id="stage5Gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stop-color="#a8d96d" />
                            <stop offset="100%" stop-color="#e9c46a" />
                        </linearGradient>
                        
                        <!-- 阴影效果 -->
                        <filter id="dropShadow">
                            <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                            <feOffset dx="2" dy="2" result="offsetblur" />
                            <feFlood flood-color="#000000" flood-opacity="0.2" />
                            <feComposite in2="offsetblur" operator="in" />
                            <feMerge>
                                <feMergeNode />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                        
                        <!-- 箭头标记 -->
                        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                            <polygon points="0 0, 10 3.5, 0 7" fill="#4a5568"/>
                        </marker>
                    </defs>
                    
                    <!-- 背景 -->
                    <rect width="1000" height="650" fill="#f8fafc"/>
                    
                    <!-- 标题 -->
                    <text x="500" y="40" text-anchor="middle" fill="#1a5f7a" font-size="24" font-weight="bold">海洋碳汇增强技术路线图</text>
                    
                    <!-- 螺旋式技术发展路径 -->
                    <g id="spiralPath">
                        <!-- 螺旋路径 -->
                        <path d="M500,150 C700,150 700,350 500,350 C300,350 300,500 500,500 C700,500 700,600 500,600" 
                              fill="none" stroke="#e2e8f0" stroke-width="2" stroke-dasharray="5,5"/>
                        
                        <!-- 阶段1: 基础科学研究 -->
                        <g class="stage" id="stage1">
                            <circle cx="700" cy="150" r="60" fill="url(#stage1Gradient)" filter="url(#dropShadow)"/>
                            <text x="700" y="145" text-anchor="middle" fill="white" font-size="16" font-weight="bold">基础科学研究</text>
                            <text x="700" y="165" text-anchor="middle" fill="white" font-size="12">海洋生物地球化学</text>
                            <text x="700" y="125" text-anchor="middle" fill="#fef9e7" font-size="10">机理认识 +90%</text>
                        </g>
                        
                        <!-- 阶段2: 技术研发验证 -->
                        <g class="stage" id="stage2">
                            <circle cx="700" cy="350" r="70" fill="url(#stage2Gradient)" filter="url(#dropShadow)"/>
                            <text x="700" y="345" text-anchor="middle" fill="white" font-size="16" font-weight="bold">技术研发验证</text>
                            <text x="700" y="365" text-anchor="middle" fill="white" font-size="12">蓝碳增汇技术</text>
                            <text x="700" y="325" text-anchor="middle" fill="#fef9e7" font-size="10">TRL 4-6级</text>
                        </g>
                        
                        <!-- 阶段3: 示范项目建设 -->
                        <g class="stage" id="stage3">
                            <circle cx="500" cy="500" r="80" fill="url(#stage3Gradient)" filter="url(#dropShadow)"/>
                            <text x="500" y="495" text-anchor="middle" fill="white" font-size="16" font-weight="bold">示范项目建设</text>
                            <text x="500" y="515" text-anchor="middle" fill="white" font-size="12">人工上升流</text>
                            <text x="500" y="475" text-anchor="middle" fill="#fef9e7" font-size="10">10个示范区</text>
                        </g>
                        
                        <!-- 阶段4: 规模化部署 -->
                        <g class="stage" id="stage4">
                            <circle cx="300" cy="500" r="90" fill="url(#stage4Gradient)" filter="url(#dropShadow)"/>
                            <text x="300" y="495" text-anchor="middle" fill="white" font-size="16" font-weight="bold">规模化部署</text>
                            <text x="300" y="515" text-anchor="middle" fill="white" font-size="12">大规模养殖场</text>
                            <text x="300" y="475" text-anchor="middle" fill="#fef9e7" font-size="10">100万公顷</text>
                        </g>
                        
                        <!-- 阶段5: 商业化运营 -->
                        <g class="stage" id="stage5">
                            <circle cx="300" cy="350" r="100" fill="url(#stage5Gradient)" filter="url(#dropShadow)"/>
                            <text x="300" y="345" text-anchor="middle" fill="white" font-size="16" font-weight="bold">商业化运营</text>
                            <text x="300" y="365" text-anchor="middle" fill="white" font-size="12">碳信用交易</text>
                            <text x="300" y="325" text-anchor="middle" fill="#fef9e7" font-size="10">$50/tCO₂</text>
                        </g>
                    </g>
                    
                    <!-- 连接箭头 -->
                    <g id="connectionArrows">
                        <path d="M640,150 C670,200 670,300 640,350" fill="none" stroke="#4a5568" stroke-width="2" marker-end="url(#arrowhead)"/>
                        <path d="M640,350 C570,400 430,470 380,500" fill="none" stroke="#4a5568" stroke-width="2" marker-end="url(#arrowhead)"/>
                        <path d="M380,500 C320,500 220,500 220,500" fill="none" stroke="#4a5568" stroke-width="2" marker-end="url(#arrowhead)"/>
                        <path d="M220,500 C220,430 220,380 300,350" fill="none" stroke="#4a5568" stroke-width="2" marker-end="url(#arrowhead)"/>
                    </g>
                    
                    <!-- 中心核心 -->
                    <circle cx="500" cy="350" r="50" fill="#1a5f7a"/>
                    <text x="500" y="345" text-anchor="middle" fill="white" font-size="16" font-weight="bold">海洋碳汇</text>
                    <text x="500" y="365" text-anchor="middle" fill="white" font-size="12">增强技术</text>
                    
                    <!-- 增汇潜力指示 -->
                    <rect x="50" y="550" width="200" height="60" rx="8" fill="#1a5f7a"/>
                    <text x="150" y="570" text-anchor="middle" fill="white" font-size="16" font-weight="bold">增汇潜力</text>
                    <text x="150" y="590" text-anchor="middle" fill="white" font-size="14">2-5 Gt CO₂/年</text>
                    
                    <!-- 时间轴 -->
                    <rect x="750" y="550" width="200" height="60" rx="8" fill="#2c8c99"/>
                    <text x="850" y="570" text-anchor="middle" fill="white" font-size="16" font-weight="bold">发展时间轴</text>
                    <text x="850" y="590" text-anchor="middle" fill="white" font-size="14">2023-2040年</text>
                    
                    <!-- 版权信息 -->
                    <text x="500" y="630" text-anchor="middle" fill="#a0aec0" font-size="12">海洋碳汇增强技术路线图 © 2023</text>
                </svg>`
    },
    {
        id: 'xiangmuyunzuozuzhi',
        name: '项目运作组织架构',
        description: '展示项目运作模式及思路',
        svgCode: `<svg width="900" height="800" viewBox="0 0 900 800" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- 定义细箭头 (用于内部流程) -->
    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#333"></polygon>
    </marker>
    <!-- 定义实心圆点 -->
    <marker id="dot" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
      <circle cx="5" cy="5" r="3" fill="black"></circle>
    </marker>
    <!-- 定义灰色大箭头 (用于层级连接) -->
    <marker id="arrowGray" markerWidth="15" markerHeight="15" refX="7.5" refY="7.5" orient="auto">
        <polygon points="0,0 15,7.5 0,15" fill="#ccc"></polygon>
    </marker>
  </defs>

  <!-- 背景 -->
  <rect width="900" height="800" fill="white" x="-173" y="0" class=""></rect>

  <!-- ############################################################ -->
  <!-- 第一部分：顶部核心架构 - 修改为三级基金架构 -->
  <!-- ############################################################ -->
  
  <!-- 顶部标题栏 -->
  <rect x="50" y="30" width="800" height="45" fill="#005fb8" class=""></rect>
  <text x="450" y="60" font-family="'SimHei', 'Heiti SC', sans-serif" font-size="22" font-weight="bold" fill="white" text-anchor="middle">政府投资基金三级架构体系</text>

  <!-- 主外框 -->
  <rect x="50" y="75" width="800" height="350" fill="none" stroke="black" stroke-width="2"></rect>

  <!-- 顶部连接线与分类标签 -->
  <line x1="145" y1="95" x2="145" y2="115" stroke="#888" stroke-width="1"></line>
  <line x1="145" y1="95" x2="325" y2="95" stroke="#888" stroke-width="1"></line>
  <line x1="325" y1="95" x2="325" y2="115" stroke="#888" stroke-width="1"></line>
  <line x1="540" y1="95" x2="540" y2="115" stroke="#888" stroke-width="1"></line>
  <line x1="740" y1="95" x2="740" y2="115" stroke="#888" stroke-width="1"></line>
  
  <line x1="235" y1="75" x2="235" y2="95" stroke="#888" stroke-width="1"></line>
  <line x1="540" y1="75" x2="540" y2="95" stroke="#888" stroke-width="1"></line>
  <line x1="740" y1="75" x2="740" y2="95" stroke="#888" stroke-width="1"></line>

  <text x="235" y="108" font-family="sans-serif" font-size="12" fill="#666" text-anchor="middle">政策引导层</text>
  <text x="582" y="108" font-family="sans-serif" font-size="12" fill="#666" text-anchor="middle">运营管理层</text>
  <text x="780" y="108" font-family="sans-serif" font-size="12" fill="#666" text-anchor="middle">投资执行层</text>

  <!-- 第一列：引导基金 -->
  <g transform="translate(70, 120)">
    <rect x="0" y="0" width="160" height="290" fill="none" stroke="black" stroke-width="2"></rect>
    <text x="80" y="30" font-family="'SimHei', sans-serif" font-size="20" font-weight="bold" text-anchor="middle">引导基金</text>
    <text x="80" y="48" font-family="Arial, sans-serif" font-size="12" text-anchor="middle">Guidance Fund</text>
    <line x1="0" y1="60" x2="160" y2="60" stroke="black" stroke-width="1"></line>
    <text x="80" y="80" font-family="'SimHei', sans-serif" font-size="12" fill="#666" text-anchor="middle">政策制定与顶层设计</text>
    <rect x="15" y="140" width="130" height="35" rx="5" fill="none" stroke="#333" stroke-width="1"></rect>
    <text x="80" y="163" font-family="'SimHei', sans-serif" font-size="14" text-anchor="middle">战略决策</text>
    <rect x="15" y="215" width="130" height="35" rx="5" fill="none" stroke="#333" stroke-width="1"></rect>
    <text x="80" y="238" font-family="'SimHei', sans-serif" font-size="14" text-anchor="middle">财政出资</text>
  </g>

  <!-- 第二列：产业/功能母基金 -->
  <g transform="translate(260, 120)">
    <rect x="0" y="0" width="150" height="290" fill="none" stroke="black" stroke-width="2"></rect>
    <text x="75" y="30" font-family="'SimHei', sans-serif" font-size="20" font-weight="bold" text-anchor="middle">产业/功能母基金</text>
    <text x="75" y="48" font-family="Arial, sans-serif" font-size="12" text-anchor="middle">Mother Fund</text>
    <line x1="0" y1="60" x2="150" y2="60" stroke="black" stroke-width="1"></line>
    <text x="75" y="80" font-family="'SimHei', sans-serif" font-size="12" fill="#666" text-anchor="middle">运作核心与资金枢纽</text>
    <rect x="15" y="140" width="120" height="35" rx="5" fill="none" stroke="#333" stroke-width="1"></rect>
    <text x="78" y="163" font-family="'SimHei', sans-serif" font-size="14" text-anchor="middle">市场化运作</text>
    
    <rect x="15" y="215" width="120" height="35" rx="5" fill="none" stroke="#333" stroke-width="1"></rect>
    <text x="79" y="238" font-family="'SimHei', sans-serif" font-size="14" text-anchor="middle">子基金管理</text>
    
  </g>

  <!-- 中间连接箭头 -->
  <g transform="translate(410, 120)">
     <text x="21" y="140" font-family="'SimHei', sans-serif" font-size="12" fill="#333" text-anchor="middle" writing-mode="tb" class="">出资</text>
     <text x="21" y="172" font-family="'SimHei', sans-serif" font-size="12" fill="#333" text-anchor="middle" writing-mode="tb" class="">指导</text>
     <line x1="0" y1="157.5" x2="40" y2="157.5" stroke="black" stroke-width="1" marker-end="url(#arrowhead)"></line>
     <text x="21" y="218" font-family="'SimHei', sans-serif" font-size="12" fill="#333" text-anchor="middle" writing-mode="tb" class="">分配</text>
     <text x="21" y="248" font-family="'SimHei', sans-serif" font-size="12" fill="#333" text-anchor="middle" writing-mode="tb" class="">监督</text>
     <line x1="0" y1="232.5" x2="40" y2="232.5" stroke="black" stroke-width="1" marker-end="url(#arrowhead)"></line>
  </g>

  <!-- 第三列：子基金 -->
  <g transform="translate(460, 120)">
    <rect x="0" y="0" width="160" height="290" fill="none" stroke="black" stroke-width="2"></rect>
    <text x="80" y="30" font-family="'SimHei', sans-serif" font-size="20" font-weight="bold" text-anchor="middle">子基金</text>
    <text x="80" y="48" font-family="Arial, sans-serif" font-size="12" text-anchor="middle">Sub-Fund</text>
    <line x1="0" y1="60" x2="160" y2="60" stroke="black" stroke-width="1"></line>
    <text x="80" y="80" font-family="'SimHei', sans-serif" font-size="12" fill="#666" text-anchor="middle">直接投资与产业培育</text>
    <rect x="15" y="105" width="130" height="30" rx="5" fill="none" stroke="#333" stroke-width="1"></rect>
    <text x="80" y="125" font-family="'SimHei', sans-serif" font-size="13" text-anchor="middle">市场化子基金</text>
    <rect x="15" y="145" width="130" height="30" rx="5" fill="none" stroke="#333" stroke-width="1"></rect>
    <text x="80" y="165" font-family="'SimHei', sans-serif" font-size="13" text-anchor="middle">专项子基金</text>
    <rect x="15" y="185" width="130" height="30" rx="5" fill="none" stroke="#333" stroke-width="1"></rect>
    <text x="80" y="205" font-family="'SimHei', sans-serif" font-size="13" text-anchor="middle">科技创新基金</text>
    <rect x="15" y="225" width="130" height="30" rx="5" fill="none" stroke="#333" stroke-width="1"></rect>
    <text x="80" y="245" font-family="'SimHei', sans-serif" font-size="13" text-anchor="middle">人才类基金</text>
  </g>

  <!-- 第四列：核心运作机制 -->
  <g transform="translate(660, 120)">
    <rect x="0" y="0" width="160" height="290" fill="none" stroke="black" stroke-width="2"></rect>
    <text x="80" y="30" font-family="'SimHei', sans-serif" font-size="20" font-weight="bold" text-anchor="middle">运作机制</text>
    <text x="80" y="48" font-family="Arial, sans-serif" font-size="12" text-anchor="middle">Operation Mechanism</text>
    <line x1="0" y1="60" x2="160" y2="60" stroke="black" stroke-width="1"></line>
    <text x="80" y="80" font-family="'SimHei', sans-serif" font-size="12" fill="#666" text-anchor="middle">风险控制与激励</text>
    <rect x="15" y="140" width="130" height="35" rx="5" fill="none" stroke="#333" stroke-width="1"></rect>
    <text x="80" y="163" font-family="'SimHei', sans-serif" font-size="14" text-anchor="middle">返投机制</text>
    <rect x="15" y="215" width="130" height="35" rx="5" fill="none" stroke="#333" stroke-width="1"></rect>
    <text x="80" y="238" font-family="'SimHei', sans-serif" font-size="14" text-anchor="middle">让利机制</text>
  </g>

  <!-- ############################################################ -->
  <!-- 灰色连接箭头 -->
  <!-- ############################################################ -->
  
  <!-- 中间向上的灰色三角箭头 (原则 -> 系统) -->
  <polygon points="450,435 460,455 440,455" fill="#ccc" transform="translate(-148,-2)" class=""></polygon>
  <line x1="302" y1="453" x2="302" y2="478" stroke="#ccc" stroke-width="5" class=""></line>

  <!-- 中间向上的灰色三角箭头 (3H -> 原则) -->
  <polygon points="450,595 460,615 440,615" fill="#ccc" transform="translate(-148,-2)" class=""></polygon>
  <line x1="302" y1="613" x2="302" y2="638" stroke="#ccc" stroke-width="5" class="selected"></line>

  <!-- 左侧大弯曲箭头 -->
  <path d="M 100 450 Q 80 550 140 620" stroke="#ddd" stroke-width="3" fill="none" marker-end="url(#arrowGray)" transform="translate(0,-7) scale(1) rotate(0)"></path>
  
  <!-- 右侧大弯曲箭头 -->
  <path d="M 800 450 Q 820 550 760 620" stroke="#ddd" stroke-width="3" fill="none" marker-end="url(#arrowGray)" transform="translate(5,-9) scale(1) rotate(0)"></path>


  <!-- ############################################################ -->
  <!-- 第二部分：中间过渡层 - 修改为政策导向 -->
  <!-- ############################################################ -->
  
  <rect x="172" y="480" width="260" height="110" fill="white" stroke="black" stroke-width="2"></rect>
  
  <text x="302" y="520" font-family="'SimHei', sans-serif" font-size="22" font-weight="bold" text-anchor="middle">政策导向</text>
  
  <!-- 左侧按钮 -->
  <rect x="227" y="540" width="70" height="35" rx="8" fill="white" stroke="black" stroke-width="1"></rect>
  <text x="262" y="563" font-family="'SimHei', sans-serif" font-size="14" text-anchor="middle">产业政策</text>
  
  <!-- 右侧按钮 -->
  <rect x="307" y="540" width="90" height="35" rx="8" fill="white" stroke="black" stroke-width="1"></rect>
  <text x="351" y="563" font-family="'SimHei', sans-serif" font-size="14" text-anchor="middle">区域发展</text>


  <!-- ############################################################ -->
  <!-- 第三部分：底部基础 - 修改为运作目标 -->
  <!-- ############################################################ -->
  
  <rect x="50" y="640" width="800" height="100" fill="white" stroke="black" stroke-width="2"></rect>
  
  <text x="450" y="675" font-family="'SimHei', sans-serif" font-size="22" font-weight="bold" text-anchor="middle">三级架构核心目标</text>
  
  <!-- 认知能力 -->
  <rect x="63" y="695" width="250" height="35" rx="5" fill="none" stroke="#333" stroke-width="1"></rect>
  <text x="188" y="718" font-family="'SimHei', sans-serif" font-size="16" font-weight="bold" text-anchor="middle">
    政策引导 <tspan font-family="Arial" font-weight="normal" font-size="14" class="">Policy Guidance</tspan>
  </text>
  
  <!-- 合作能力 -->
  <rect x="326" y="695" width="248" height="35" rx="5" fill="none" stroke="#333" stroke-width="1"></rect>
  <text x="450" y="718" font-family="'SimHei', sans-serif" font-size="16" font-weight="bold" text-anchor="middle">
    产业培育 <tspan font-family="Arial" font-weight="normal" font-size="14">Industry Cultivation</tspan>
  </text>
  
  <!-- 创新能力 -->
  <rect x="587" y="695" width="250" height="35" rx="5" fill="none" stroke="#333" stroke-width="1"></rect>
  <text x="712" y="718" font-family="'SimHei', sans-serif" font-size="16" font-weight="bold" text-anchor="middle">
    资本放大 <tspan font-family="Arial" font-weight="normal" font-size="14">Capital Leverage</tspan>
  </text>

  <!-- ############################################################ -->
  <!-- 第四部分：中间过渡层 - 修改为风险控制 -->
  <!-- ############################################################ -->

  <!-- 右侧模块外框 -->
  <rect x="469" y="480" width="260" height="110" fill="white" stroke="black" stroke-width="2"></rect>
  
  <!-- 右侧模块按钮 -->
  <rect x="519" y="540" width="70" height="35" rx="8" fill="white" stroke="black" stroke-width="1"></rect>
  <rect x="601" y="540" width="90" height="35" rx="8" fill="white" stroke="black" stroke-width="1"></rect>
  
  <!-- 右侧模块文字 -->
  <text x="597" y="520" font-family="'SimHei', sans-serif" font-size="22" font-weight="bold" text-anchor="middle">风险控制</text>
  <text x="556" y="563" font-family="'SimHei', sans-serif" font-size="14" text-anchor="middle">容错机制</text>
  <text x="646" y="563" font-family="'SimHei', sans-serif" font-size="14" text-anchor="middle">退出机制</text>
  
  <!-- 右侧连接线 -->
  <polygon points="480,435 490,455 470,455" fill="#ccc" transform="translate(115,-2)" class=""></polygon>
  <line x1="595" y1="453" x2="595" y2="478" stroke="#ccc" stroke-width="5" class=""></line>
  <polygon points="480,595 490,615 470,615" fill="#ccc" transform="translate(115,-2)" class=""></polygon>
  <line x1="595" y1="612" x2="595" y2="637" stroke="#ccc" stroke-width="5" class=""></line>

</svg>`
    },
    {
        id: 'baogaojiegouhualuxian',
        name: '报告研究技术路线',
        description: '展示报告的主要结构内容/研究思路',
        svgCode: `<svg width="1000" height="650" viewBox="0 0 1000 650" xmlns="http://www.w3.org/2000/svg">
  
  <defs>
    <!-- 定义箭头系统 -->
    <marker id="arrow-blue-right" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 z" fill="#003366"></path>
    </marker>
    <marker id="arrow-red-right" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 z" fill="#cc0000"></path>
    </marker>
    <marker id="arrow-green-right" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 z" fill="#336600"></path>
    </marker>

    <!-- 反向定义箭头 -->
    <marker id="arrow-blue-reverse" markerWidth="6" markerHeight="6" refX="1" refY="3" orient="auto">
      <path d="M6,0 L0,3 L6,6 z" fill="#003366"></path>
    </marker>
    <marker id="arrow-red-reverse" markerWidth="6" markerHeight="6" refX="1" refY="3" orient="auto">
      <path d="M6,0 L0,3 L6,6 z" fill="#cc0000"></path>
    </marker>
    <marker id="arrow-green-reverse" markerWidth="6" markerHeight="6" refX="1" refY="3" orient="auto">
      <path d="M6,0 L0,3 L6,6 z" fill="#336600"></path>
    </marker>

    <!-- 样式定义 -->
    <style>
      .title-text { font-size: 22px; font-weight: bold; fill: white; font-family: "Microsoft YaHei", sans-serif; }
      .sub-text { font-size: 13px; fill: #333; font-family: "Microsoft YaHei", sans-serif; font-weight: 500; }
      .box-title { font-size: 16px; font-weight: bold; fill: white; text-anchor: middle; font-family: "Microsoft YaHei", sans-serif; }
      .list-text { font-size: 11px; fill: #333; font-family: "Microsoft YaHei", sans-serif; line-height: 1.5; }
      .side-label-left { font-size: 16px; font-weight: bold; fill: white; writing-mode: vertical-rl; letter-spacing: 4px; text-anchor: middle; font-family: "Microsoft YaHei", sans-serif; }
      .side-label-right { font-size: 16px; font-weight: bold; fill: white; writing-mode: vertical-rl; letter-spacing: 2px; text-anchor: middle; font-family: "Microsoft YaHei", sans-serif; }
    </style>
  </defs>

  <!-- =======================
       左侧括号区域
       ======================= -->
  
  <!-- 1. 上部：战略层 (蓝色) -->
  <path d="M 120 45 L 60 45 Q 30 45 30 75 L 30 115 Q 30 145 60 145 L 120 145" fill="none" stroke="#003366" stroke-width="3" stroke-linecap="butt" marker-start="url(#arrow-blue-reverse)" marker-end="url(#arrow-blue-right)" transform="translate(-15,0)"></path>
  <rect x="10" y="45" width="40" height="96" rx="8" fill="#003366"></rect>
  <text x="30" y="95" class="side-label-left" style="opacity: 1;">发展前景</text>

  <!-- 2. 中部：能力层 (红色) -->
  <path d="M 120 200 L 60 200 Q 30 200 30 230 L 30 290 Q 30 320 60 320 L 120 320" fill="none" stroke="#cc0000" stroke-width="3" stroke-linecap="butt" marker-start="url(#arrow-red-reverse)" marker-end="url(#arrow-red-right)" transform="translate(-15,25)"></path>
  <rect x="10" y="235" width="40" height="100" rx="8" fill="#cc0000"></rect>
  <text x="29" y="285" class="side-label-left" style="opacity: 1;">发展聚焦</text>

  <!-- 3. 下部：执行层 (绿色) -->
  <path d="M 120 385 L 60 385 Q 30 385 30 415 L 30 465 Q 30 495 60 495 L 120 495" fill="none" stroke="#336600" stroke-width="3" stroke-linecap="butt" marker-start="url(#arrow-green-reverse)" marker-end="url(#arrow-green-right)" transform="translate(-17,26)"></path>
  <rect x="10" y="416" width="40" height="96" rx="8" fill="#336600"></rect>
  <text x="30" y="466" class="side-label-left" style="opacity: 1;">落地关键</text>


  <!-- =======================
       右侧结构区域
       ======================= -->
  
  <rect x="940" y="150" width="40" height="300" rx="8" fill="#003366"></rect>
  <text x="960" y="300" class="side-label-right">政策引导与市场驱动</text>

  <!-- 箭头1：上方流出 -->
  <path d="M 960 150 L 960 60 Q 960 30 930 30 L 880 30" fill="none" stroke="#003366" stroke-width="3" stroke-linejoin="round" marker-end="url(#arrow-blue-right)"></path>

  <!-- 箭头2：中间流出 -->
  <path d="M 940 300 L 900 300" fill="none" stroke="#003366" stroke-width="3" stroke-linecap="butt" marker-end="url(#arrow-blue-right)" transform="translate(-8,0)"></path>

  <!-- 箭头3：下方流出 -->
  <path d="M 960 450 L 960 540 Q 960 570 930 570 L 880 570" fill="none" stroke="#003366" stroke-width="3" stroke-linejoin="round" marker-end="url(#arrow-blue-right)"></path>


  <!-- =======================
       中间主要内容
       ======================= -->

  <!-- 顶部标题区 -->
  <g transform="translate(190, 20)">
    <rect x="0" y="0" width="600" height="50" fill="#003366"></rect>
    <text x="300" y="33" class="title-text" text-anchor="middle" style="opacity: 1;">可持续航空燃料——生物质SAF</text>
    
    <rect x="0" y="50" width="600" height="90" fill="#e6f0ff"></rect>
    <text x="180" y="78" class="sub-text">• SAF对于全球航空碳减排具有重要意义</text>
    <text x="180" y="100" class="sub-text">• 2030年前HEFA仍将是市场主流技术路线</text>
    <text x="180" y="122" class="sub-text">• 中国在生物质SAF生产成本及潜在生产规模处于领先地位</text>
  </g>

  <!-- 连接线 -->
  <line x1="490" y1="140" x2="490" y2="165" stroke="#999" stroke-width="1"></line>
  <line x1="200" y1="165" x2="780" y2="165" stroke="#999" stroke-width="1"></line>
  <line x1="200" y1="165" x2="200" y2="190" stroke="#999" stroke-width="1"></line>
  <line x1="393" y1="165" x2="393" y2="190" stroke="#999" stroke-width="1"></line>
  <line x1="586" y1="165" x2="586" y2="190" stroke="#999" stroke-width="1"></line>
  <line x1="780" y1="165" x2="780" y2="190" stroke="#999" stroke-width="1"></line>

  <!-- 中部红色区域 (4个框) -->
  <g transform="translate(110, 190)">
    <!-- 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="180" height="50" fill="#cc0000"></rect>
      <text x="90" y="32" class="box-title">技术路线</text>
      <rect x="0" y="50" width="180" height="140" fill="#fff0f0" stroke="#ddd" stroke-width="0.5"></rect>
      <text x="10" y="75" class="list-text">• HEFA (加氢处理酯类和脂肪酸)</text>
      <text x="10" y="95" class="list-text">• GFT (生物质气化+费托合成)</text>
      <text x="10" y="115" class="list-text">• AtJ (醇制喷气燃料)</text>
      <text x="10" y="135" class="list-text">• MtJ (甲醇制喷气燃料)</text>
      <text x="10" y="155" class="list-text">• 电制SAF (e-SAF)</text>
    </g>
    <!-- 2 -->
    <g transform="translate(193, 0)">
      <rect x="0" y="0" width="180" height="50" fill="#cc0000"></rect>
      <text x="90" y="22" class="box-title">原料</text>
      <text x="90" y="42" class="box-title">资源</text>
      <rect x="0" y="50" width="180" height="140" fill="#fff0f0" stroke="#ddd" stroke-width="0.5"></rect>
      <text x="45" y="75" class="list-text">• 废弃油脂 (UCO)</text>
      <text x="45" y="95" class="list-text">• 农业废弃物</text>
      <text x="45" y="115" class="list-text">• 林业废弃物</text>
      <text x="45" y="135" class="list-text">• 能源作物</text>
      <text x="45" y="155" class="list-text">• 城市固体废弃物</text>
    </g>
    <!-- 3 -->
    <g transform="translate(386, 0)">
      <rect x="0" y="0" width="180" height="50" fill="#cc0000"></rect>
      <text x="90" y="32" class="box-title">可持续性</text>
      <rect x="0" y="50" width="180" height="140" fill="#fff0f0" stroke="#ddd" stroke-width="0.5"></rect>
      <text x="42" y="75" class="list-text">• 生命周期碳减排</text>
      <text x="42" y="95" class="list-text">• 土地利用变化(ILUC)</text>
      <text x="42" y="115" class="list-text">• 粮食安全影响</text>
      <text x="42" y="135" class="list-text">• 生态保护要求</text>
      <text x="42" y="155" class="list-text">• 可持续认证标准</text>
    </g>
    <!-- 4 -->
    <g transform="translate(579, 0)">
      <rect x="0" y="0" width="180" height="50" fill="#cc0000"></rect>
      <text x="90" y="22" class="box-title">成本</text>
      <text x="90" y="42" class="box-title">经济性</text>
      <rect x="0" y="50" width="180" height="140" fill="#fff0f0" stroke="#ddd" stroke-width="0.5"></rect>
      <text x="43" y="75" class="list-text">• 原料成本占比高</text>
      <text x="43" y="95" class="list-text">• 资本支出(CAPEX)</text>
      <text x="43" y="115" class="list-text">• 运营支出(OPEX)</text>
      <text x="43" y="135" class="list-text">• 政策补贴影响</text>
      <text x="43" y="155" class="list-text">• 与传统航油价差</text>
    </g>
  </g>

  <!-- 连接线 -->
  <g transform="translate(110, 380)">
      <line x1="90" y1="0" x2="90" y2="20" stroke="#999" stroke-width="1"></line>
      <line x1="283" y1="0" x2="283" y2="20" stroke="#999" stroke-width="1"></line>
      <line x1="476" y1="0" x2="476" y2="20" stroke="#999" stroke-width="1"></line>
      <line x1="669" y1="0" x2="669" y2="20" stroke="#999" stroke-width="1"></line>
  </g>

  <!-- 下部绿色区域 (4个框) -->
  <g transform="translate(180, 400)">
    <!-- 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="140" height="40" fill="#336600"></rect>
      <text x="70" y="26" class="box-title">政策支持</text>
      <rect x="0" y="40" width="140" height="80" fill="#f0fff0" stroke="#ddd" stroke-width="0.5"></rect>
      <text x="9" y="65" class="list-text">• 欧盟RefuelEU Aviation</text>
      <text x="9" y="85" class="list-text">• 美国SAF大挑战</text>
      <text x="9" y="105" class="list-text">• 中国绿色发展专项规划</text>
    </g>
    <!-- 2 -->
    <g transform="translate(155, 0)">
      <rect x="0" y="0" width="140" height="40" fill="#336600"></rect>
      <text x="70" y="26" class="box-title">产能建设</text>
      <rect x="0" y="40" width="140" height="80" fill="#f0fff0" stroke="#ddd" stroke-width="0.5"></rect>
      <text x="18" y="65" class="list-text">• 中国HEFA产能规划</text>
      <text x="18" y="85" class="list-text">• 全球SAF项目布局</text>
      <text x="18" y="105" class="list-text">• 技术路线多元化</text>
    </g>
    <!-- 3 -->
    <g transform="translate(310, 0)">
      <rect x="0" y="0" width="140" height="40" fill="#336600"></rect>
      <text x="70" y="26" class="box-title">市场应用</text>
      <rect x="0" y="40" width="140" height="80" fill="#f0fff0" stroke="#ddd" stroke-width="0.5"></rect>
      <text x="26" y="65" class="list-text">• 航空公司SAF使用</text>
      <text x="26" y="85" class="list-text">• 掺混比例要求</text>
      <text x="26" y="105" class="list-text">• 商业航班验证</text>
    </g>
    <!-- 4 -->
    <g transform="translate(465, 0)">
      <rect x="0" y="0" width="140" height="40" fill="#336600"></rect>
      <text x="70" y="26" class="box-title">国际合作</text>
      <rect x="0" y="40" width="140" height="80" fill="#f0fff0" stroke="#ddd" stroke-width="0.5"></rect>
      <text x="22" y="65" class="list-text">• ICAO CORSIA机制</text>
      <text x="22" y="85" class="list-text">• 可持续标准对接</text>
      <text x="22" y="105" class="list-text">• 全球供应链合作</text>
    </g>
  </g>

  <!-- 底部汇总 -->
  <g transform="translate(180, 530)">
      <line x1="70" y1="0" x2="70" y2="15" stroke="#999" stroke-width="1"></line>
      <line x1="225" y1="0" x2="225" y2="15" stroke="#999" stroke-width="1"></line>
      <line x1="380" y1="0" x2="380" y2="15" stroke="#999" stroke-width="1"></line>
      <line x1="535" y1="0" x2="535" y2="15" stroke="#999" stroke-width="1"></line>
      <line x1="70" y1="15" x2="535" y2="15" stroke="#999" stroke-width="1"></line>
      <line x1="302" y1="15" x2="302" y2="30" stroke="#999" stroke-width="1"></line>
  </g>

  <rect x="300" y="560" width="400" height="45" rx="5" fill="#003366"></rect>
  <text x="500" y="590" class="title-text" text-anchor="middle" font-size="20">聚焦低碳航空，推动绿色发展</text>

</svg>`
    },
    {
        id: 'baogaojiegouhuachatu',
        name: '逻辑有待加强，纯炫（有待优化）',
        description: '当个插图用吧',
        svgCode: `<svg width="1000" height="500" viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg">
  <!-- 字体定义 -->
  <style>
    text { font-family: "Microsoft YaHei", "SimHei", sans-serif; }
    .label-left { font-size: 16px; font-weight: bold; fill: #333; text-anchor: middle; }
    .label-right-en { font-size: 14px; fill: #333; text-anchor: middle; }
    .label-right-cn { font-size: 18px; font-weight: bold; fill: #000; text-anchor: middle; }
    .theory-text { font-size: 16px; font-weight: bold; fill: #fff; text-anchor: middle; alignment-baseline: middle; }
    .box-text { font-size: 12px; fill: #000; text-anchor: middle; alignment-baseline: middle; }
    .need-box-text { font-size: 13px; font-weight: bold; fill: #333; text-anchor: middle; alignment-baseline: middle; }
    .bottom-axis-text { font-size: 18px; font-weight: bold; fill: #000; text-anchor: middle; }
  </style>

  <!-- 定义箭头标记 -->
  <defs>
    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="black"></polygon>
    </marker>
    <marker id="arrowhead-gray" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#e0e0e0"></polygon>
    </marker>
  </defs>

  <!-- ================= 1. 背景层：水平虚线分割线 ================= -->
  <g id="grid-lines" stroke="#999" stroke-width="1" stroke-dasharray="5,5">
    <!-- 从下往上的分割线 -->
    <line x1="20" y1="390" x2="980" y2="390"></line>
    <line x1="20" y1="300" x2="980" y2="300"></line>
    <line x1="20" y1="160" x2="980" y2="160"></line>
    <!-- 顶部虚线 -->
    <line x1="100" y1="40" x2="530" y2="40" stroke-dasharray="5,5" stroke="#555" stroke-width="2"></line> 
  </g>

  <!-- ================= 2. 几何架构层：中间的三角形 ================= -->
  <!-- 灰色正三角形 (背景) -->
  <polygon points="120,430 510,430 315,50" fill="#e0e0e0" fill-opacity="0.4" stroke="none"></polygon>
  <line x1="120" y1="430" x2="315" y2="50" stroke="#888" stroke-width="1"></line>
  <line x1="510" y1="430" x2="315" y2="50" stroke="#888" stroke-width="1"></line>

  <!-- 倒三角形 (虚线轮廓) -->
  <polygon points="100,40 530,40 315,430" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="6,6"></polygon>

  <!-- ================= 3. 左侧柱：政策导向 ================= -->
  <g id="left-column">
    <!-- 背景大箭头 -->
    <polygon points="40,430 80,430 80,60 60,30 40,60" fill="#f2f2f2"></polygon>
    <!-- 文字 -->
    <text x="60" y="410" class="label-left" data-original-font-size="16" font-size="17.44" style="font-size: 17.44px;">战略强制</text>
    <text x="60" y="345" class="label-left" data-original-font-size="16" font-size="17.44" style="font-size: 17.44px;">AI治理</text>
    <text x="60" y="260" class="label-left" data-original-font-size="16" font-size="17.44" style="font-size: 17.44px;">人才生态</text>
    <text x="60" y="190" class="label-left" data-original-font-size="16" font-size="17.44" style="font-size: 17.44px;">刚性需求</text>
    <text x="60" y="95" class="label-left" data-original-font-size="16" font-size="17.44" style="font-size: 17.44px;">智能向善</text>
  </g>

  <!-- ================= 4. 右侧柱：技术供给 ================= -->
  <g id="right-column">
    <!-- 背景大箭头 -->
    <polygon points="780,430 820,430 820,60 800,30 780,60" fill="#f2f2f2"></polygon>
    
    <!-- 基础架构 -->
    <text x="801" y="381" class="label-right-cn" data-original-font-size="18" font-size="19.62" style="font-size: 19.62px;">基础架构</text>
    <text x="804" y="406" class="label-right-en" data-original-font-size="14" font-size="15.260000000000002" style="font-size: 15.26px;">MoE/SSM</text>
    <circle cx="800" y="405" r="3" fill="black"></circle>

    <!-- 工程化 -->
    <text x="801" y="236" class="label-right-cn" data-original-font-size="18" font-size="19.62" style="font-size: 19.62px;">工程化</text>
    <text x="802" y="259" class="label-right-en" data-original-font-size="14" font-size="15.260000000000002" style="font-size: 15.26px;">RAG/轻量化</text>
    <circle cx="800" y="260" r="3" fill="black"></circle>

    <!-- 智能形态 -->
    <text x="799" y="90" class="label-right-cn" data-original-font-size="18" font-size="19.62" style="font-size: 19.62px;">智能形态</text>
    <text x="801" y="114" class="label-right-en" data-original-font-size="14" font-size="15.260000000000002" style="font-size: 15.26px;">Agent/世界模型</text>
    <circle cx="800" y="110" r="3" fill="black"></circle>
  </g>

  <!-- ================= 5. 底部轴线 ================= -->
  <g id="bottom-axis">
    <line x1="30" y1="450" x2="960" y2="450" stroke="black" stroke-width="3" marker-end="url(#arrowhead)"></line>
    <text x="120" y="480" class="bottom-axis-text" data-original-font-size="18" font-size="19.62" style="font-size: 19.62px;">政策主导</text>
    <text x="600" y="480" class="bottom-axis-text" data-original-font-size="18" font-size="19.62" style="font-size: 19.62px;">市场需求</text>
    <text x="850" y="480" class="bottom-axis-text" data-original-font-size="18" font-size="19.62" style="font-size: 19.62px;">技术供给</text>
  </g>

  <!-- ================= 6. 中心内容层 (核心逻辑) ================= -->
  
  <!-- 6.1 需求方框 (右中侧) -->
  <g id="needs-boxes">
    <!-- 底部：G端需求 -->
    <rect x="520" y="397" width="170" height="30" rx="10" fill="white" stroke="#555" stroke-width="1"></rect>
    <text x="605" y="413" class="need-box-text" data-original-font-size="13" font-size="14.170000000000002" style="font-size: 14.17px;">政府央国企刚性需求</text>

    <!-- B端需求 -->
    <rect x="520" y="330" width="170" height="30" rx="10" fill="white" stroke="#555" stroke-width="1"></rect>
    <text x="605" y="346" class="need-box-text" data-original-font-size="13" font-size="14.170000000000002" style="font-size: 14.17px;">企业效率成本优化</text>

    <!-- C端需求 -->
    <rect x="520" y="250" width="170" height="30" rx="10" fill="white" stroke="#555" stroke-width="1"></rect>
    <text x="605" y="266" class="need-box-text" data-original-font-size="13" font-size="14.170000000000002" style="font-size: 14.17px;">AIGC内容消费</text>

    <!-- 社会需求 -->
    <rect x="520" y="185" width="170" height="30" rx="10" fill="white" stroke="#555" stroke-width="1"></rect>
    <text x="605" y="201" class="need-box-text" data-original-font-size="13" font-size="14.170000000000002" style="font-size: 14.17px;">劳动力结构重塑</text>

    <!-- 治理需求 -->
    <rect x="515" y="105" width="170" height="30" rx="10" fill="white" stroke="#555" stroke-width="1"></rect>
    <text x="600" y="121" class="need-box-text" data-original-font-size="13" font-size="14.170000000000002" style="font-size: 14.17px;">AI伦理与治理</text>
  </g>

  <!-- 6.2 理论与网络节点 (中心) -->
  <g id="theories">
    
    <!-- 底部：价值迁移 -->
    <line x1="315" y1="320" x2="315" y2="360" stroke="black" stroke-width="2"></line>
    <ellipse cx="315" cy="375" rx="60" ry="15" fill="black"></ellipse>
    <text x="315" y="376" class="theory-text" data-original-font-size="16" font-size="17.44" style="font-size: 17.44px;">价值迁移</text>

    <!-- 节点：应用层 -->
    <rect x="265" y="305" width="100" height="25" rx="5" fill="#eee" stroke="black" stroke-width="1"></rect>
    <text x="315" y="318" class="box-text selected" style="opacity: 1; font-size: 10px;" data-original-font-size="12" font-size="10">应用层CAGR 201.5%</text>
    <circle cx="315" cy="305" r="4" fill="black"></circle>

    <!-- 中部：结构重塑 -->
    <line x1="255" y1="170" x2="315" y2="230" stroke="black" stroke-width="2"></line>
    <line x1="375" y1="170" x2="315" y2="230" stroke="black" stroke-width="2"></line>
    <line x1="315" y1="230" x2="315" y2="280" stroke="black" stroke-width="2"></line>

    <ellipse cx="315" cy="210" rx="60" ry="18" fill="black"></ellipse>
    <text x="315" y="211" class="theory-text" data-original-font-size="16" font-size="17.44" style="font-size: 17.44px;">结构重塑</text>

    <!-- 节点：平台型厂商 -->
    <rect x="265" y="235" width="100" height="25" rx="5" fill="#ddd" stroke="black" stroke-width="1"></rect>
    <text x="315" y="248" class="box-text" data-original-font-size="12" font-size="13.080000000000002" style="font-size: 13.08px;">平台型厂商</text>
    <circle cx="315" cy="280" r="4" fill="black"></circle>

    <!-- 顶部：应用为王 -->
    <ellipse cx="315" cy="90" rx="60" ry="18" fill="black"></ellipse>
    <text x="315" y="91" class="theory-text" data-original-font-size="16" font-size="17.44" style="font-size: 17.44px;">应用为王</text>

    <!-- 节点：专业型初创 -->
    <rect x="205" y="140" width="90" height="25" rx="5" fill="white" stroke="black" stroke-width="1"></rect>
    <text x="250" y="153" class="box-text" data-original-font-size="12" font-size="13.080000000000002" style="font-size: 13.08px;">专业型初创</text>
    <circle cx="255" cy="165" r="5" fill="black"></circle>

    <!-- 节点：产业总规模 -->
    <rect x="335" y="140" width="90" height="25" rx="5" fill="white" stroke="black" stroke-width="1"></rect>
    <text x="380" y="153" class="box-text" data-original-font-size="12" font-size="13.080000000000002" style="font-size: 13.08px;">3645.5亿元</text>
    <circle cx="375" cy="165" r="5" fill="black"></circle>
    
    <!-- 顶部连接线 -->
    <line x1="315" y1="108" x2="315" y2="140" stroke="#999" stroke-width="1" stroke-dasharray="2,2"></line>

  </g>

</svg>`
    },
    {
        id: 'baogaojiegouhuabiaoda',
        name: '经典黑灰白报告结构化表达图',
        description: '展示报告的主要结构内容/研究思路',
        svgCode: `<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1846" viewBox="0 0 1080 1846"><style>
    text { font-family: "Microsoft YaHei", "PingFang SC", "Microsoft YaHei", "SimHei", sans-serif; }</style>
  
  <!-- 定义箭头标记 -->
  <defs>
    <!-- 实线箭头 -->
    <marker id="arrowSolid" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
      <polygon points="0 0, 10 3, 0 6" fill="#666"></polygon>
    </marker>
    
    <!-- 虚线箭头 -->
    <marker id="arrowDashed" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
      <polygon points="0 0, 10 3, 0 6" fill="#999"></polygon>
    </marker>
    
    <!-- 双向箭头起点 -->
    <marker id="arrowStart" markerWidth="10" markerHeight="10" refX="1" refY="3" orient="auto">
      <polygon points="10 0, 0 3, 10 6" fill="#666"></polygon>
    </marker>
    
    <!-- Accent箭头 -->
    <marker id="arrowAccent" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
      <polygon points="0 0, 10 3, 0 6" fill="#7fb3d5"></polygon>
    </marker>
  </defs>

  <!-- 全局最外层虚线框 -->
  <rect x="5" y="5" width="1070" height="1780" fill="none" stroke="#666" stroke-width="3" stroke-dasharray="12,6" class=""></rect>
  
  <!-- 整体标题区域 -->
  <rect x="20" y="20" width="1040" height="80" fill="#e6e6e6" stroke="#e6e6e6" stroke-width="3" class="selected"></rect>
  <text x="540" y="70" text-anchor="middle" font-family="Arial, sans-serif" font-size="32" font-weight="bold" fill="#222">
    AIoT产业技术实施框架
  </text>

  <!-- ========== 第一阶段：通信与感知基础设施 ========== -->
  <g id="stage1">
    <!-- 阶段标题 -->
    <rect x="40" y="130" width="200" height="45" fill="#d0d0d0" stroke="#444" stroke-width="2"></rect>
    <text x="140" y="160" text-anchor="middle" font-family="Arial, sans-serif" font-size="20" font-weight="bold" fill="#222">
      阶段一：通感基础
    </text>
    
    <!-- 左侧虚线分组框 -->
    <rect x="60" y="200" width="380" height="260" fill="none" stroke="#888" stroke-width="2" stroke-dasharray="8,4"></rect>
    
    <!-- 左侧大框：通信技术 -->
    <rect x="80" y="220" width="340" height="220" fill="#f5f5f5" stroke="#555" stroke-width="2"></rect>
    <text x="250" y="250" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#333">
      通信技术体系
    </text>
    
    <!-- 通信子模块 - 2x2布局 -->
    <rect x="100" y="275" width="140" height="45" fill="#e8e8e8" stroke="#666" stroke-width="1"></rect>
    <text x="170" y="303" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" fill="#333">
      5G-A与RedCap
    </text>
    
    <rect x="260" y="275" width="140" height="45" fill="#e8e8e8" stroke="#666" stroke-width="1"></rect>
    <text x="330" y="303" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" fill="#333">
      卫星通信
    </text>
    
    <rect x="100" y="335" width="140" height="45" fill="#e8e8e8" stroke="#666" stroke-width="1"></rect>
    <text x="170" y="363" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" fill="#333">
      Wi-Fi7与星闪
    </text>
    
    <rect x="260" y="335" width="140" height="45" fill="#e8e8e8" stroke="#666" stroke-width="1"></rect>
    <text x="330" y="363" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" fill="#333">
      确定性网络
    </text>
    
    <rect x="100" y="395" width="300" height="35" fill="#e0e0e0" stroke="#666" stroke-width="1"></rect>
    <text x="250" y="418" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" fill="#333">
      通信芯片与模组
    </text>
    
    <!-- 右侧虚线分组框 -->
    <rect x="480" y="200" width="560" height="260" fill="none" stroke="#888" stroke-width="2" stroke-dasharray="8,4"></rect>
    
    <!-- 右上框：传感器技术 -->
    <rect x="500" y="220" width="250" height="110" fill="#f5f5f5" stroke="#555" stroke-width="2"></rect>
    <text x="625" y="250" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#333">
      传感器技术
    </text>
    
    <!-- 传感器子项 -->
    <rect x="520" y="270" width="100" height="40" fill="#e0e0e0" stroke="#666" stroke-width="1"></rect>
    <text x="570" y="295" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" fill="#333">
      MEMS传感器
    </text>
    
    <rect x="630" y="270" width="100" height="40" fill="#e0e0e0" stroke="#666" stroke-width="1"></rect>
    <text x="680" y="295" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" fill="#333">
      激光雷达
    </text>
    
    <!-- 右中框：多模态融合 -->
    <rect x="770" y="220" width="250" height="110" fill="#f5f5f5" stroke="#555" stroke-width="2"></rect>
    <text x="895" y="250" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#333">
      多模态融合
    </text>
    
    <!-- 融合子项 -->
    <rect x="790" y="270" width="100" height="40" fill="#e0e0e0" stroke="#666" stroke-width="1"></rect>
    <text x="840" y="295" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" fill="#333">
      视觉+雷达
    </text>
    
    <rect x="900" y="270" width="100" height="40" fill="#e0e0e0" stroke="#666" stroke-width="1"></rect>
    <text x="950" y="295" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" fill="#333">
      声学+环境
    </text>
    
    <!-- 右侧底部大框：数据采集与处理 -->
    <rect x="500" y="350" width="520" height="110" fill="#f5f5f5" stroke="#555" stroke-width="2"></rect>
    <text x="760" y="380" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#333">
      数据采集与处理
    </text>
    
    <!-- 处理子项 -->
    <rect x="520" y="400" width="120" height="40" fill="#e0e0e0" stroke="#666" stroke-width="1"></rect>
    <text x="580" y="425" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" fill="#333">
      实时数据流
    </text>
    
    <rect x="650" y="400" width="120" height="40" fill="#e0e0e0" stroke="#666" stroke-width="1"></rect>
    <text x="710" y="425" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" fill="#333">
      边缘预处理
    </text>
    
    <rect x="780" y="400" width="120" height="40" fill="#e0e0e0" stroke="#666" stroke-width="1" class=""></rect>
    <text x="840" y="425" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" fill="#333" class="">
      数据标准化
    </text>
    
    <!-- Accent色块 -->
    <rect x="910" y="400" width="90" height="40" fill="#e0e0e0" stroke="#666" stroke-width="1" class=""></rect>
    <text x="955" y="425" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#33" class="" style="opacity: 1;"></text>
  </g>

  <!-- 阶段1到阶段2的主连接线 -->
  
  
  <!-- 横向关联线（从通信到感知） -->
  <line x1="440" y1="330" x2="500" y2="285" stroke="#999" stroke-width="2" stroke-dasharray="5,3"></line>
  
  <!-- 横向关联线（从通信到数据处理） -->
  <line x1="440" y1="350" x2="500" y2="405" stroke="#999" stroke-width="2" stroke-dasharray="5,3"></line>

  <!-- ========== 第二阶段：智能分析与边缘计算 ========== -->
  <g id="stage2">
    <!-- 阶段标题 -->
    <rect x="40" y="520" width="200" height="45" fill="#d0d0d0" stroke="#444" stroke-width="2"></rect>
    <text x="140" y="550" text-anchor="middle" font-family="Arial, sans-serif" font-size="20" font-weight="bold" fill="#222">
      阶段二：智能分析
    </text>
    
    <!-- 左侧虚线分组框 -->
    <rect x="60" y="590" width="320" height="320" fill="none" stroke="#888" stroke-width="2" stroke-dasharray="8,4"></rect>
    
    <!-- 左侧三个小框纵向排列 -->
    <rect x="80" y="610" width="280" height="85" fill="#f5f5f5" stroke="#555" stroke-width="2"></rect>
    <text x="220" y="640" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#333">
      边缘计算
    </text>
    
    <!-- 边缘计算子项 -->
    <rect x="100" y="655" width="80" height="30" fill="#e8e8e8" stroke="#666" stroke-width="1"></rect>
    <text x="140" y="675" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#333">
      边缘推理
    </text>
    
    <rect x="190" y="655" width="80" height="30" fill="#e8e8e8" stroke="#666" stroke-width="1"></rect>
    <text x="230" y="675" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#333">
      边缘网关
    </text>
    
    <rect x="280" y="655" width="60" height="30" fill="#e8e8e8" stroke="#666" stroke-width="1"></rect>
    <text x="310" y="675" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#333">
      边缘OS
    </text>
    
    <!-- 第二个框：端侧AI -->
    <rect x="80" y="710" width="280" height="85" fill="#f5f5f5" stroke="#555" stroke-width="2"></rect>
    <text x="220" y="740" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#333">
      端侧AI优先
    </text>
    
    <!-- 端侧AI子项 -->
    <rect x="100" y="755" width="110" height="30" fill="#e8e8e8" stroke="#666" stroke-width="1"></rect>
    <text x="155" y="775" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#333">
      轻量化模型
    </text>
    
    <rect x="220" y="755" width="120" height="30" fill="#e8e8e8" stroke="#666" stroke-width="1"></rect>
    <text x="280" y="775" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#333">
      硬件加速
    </text>
    
    <!-- 第三个框：智能终端 -->
    <rect x="80" y="810" width="280" height="85" fill="#f5f5f5" stroke="#555" stroke-width="2"></rect>
    <text x="220" y="840" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#333">
      智能终端
    </text>
    
    <!-- 终端子项 -->
    <rect x="100" y="855" width="70" height="30" fill="#e8e8e8" stroke="#666" stroke-width="1"></rect>
    <text x="135" y="875" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#333">
      可穿戴
    </text>
    
    <rect x="180" y="855" width="70" height="30" fill="#e8e8e8" stroke="#666" stroke-width="1"></rect>
    <text x="215" y="875" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#333">
      智能汽车
    </text>
    
    <rect x="260" y="855" width="70" height="30" fill="#e8e8e8" stroke="#666" stroke-width="1"></rect>
    <text x="295" y="875" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#333">
      机器人
    </text>
    
    <!-- 右侧大框包含4个子框 -->
    <rect x="420" y="590" width="600" height="320" fill="none" stroke="#888" stroke-width="2" stroke-dasharray="8,4"></rect>
    
    <rect x="440" y="610" width="560" height="280" fill="#f5f5f5" stroke="#555" stroke-width="3"></rect>
    <text x="720" y="645" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#333">
      AI模型体系
    </text>
    
    <!-- AI模型2x2子框布局 -->
    <!-- 左上：基础模型 -->
    <rect x="460" y="670" width="260" height="100" fill="#e8e8e8" stroke="#666" stroke-width="2"></rect>
    <text x="590" y="695" text-anchor="middle" font-family="Arial, sans-serif" font-size="15" font-weight="bold" fill="#333">
      通用基础大模型
    </text>
    
    <rect x="480" y="710" width="100" height="45" fill="#f5f5f5" stroke="#777" stroke-width="1"></rect>
    <text x="530" y="738" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#333">
      语言模型
    </text>
    
    <rect x="590" y="710" width="110" height="45" fill="#f5f5f5" stroke="#777" stroke-width="1"></rect>
    <text x="645" y="738" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#333">
      视觉模型
    </text>
    
    <!-- 右上：垂类模型 -->
    <rect x="740" y="670" width="240" height="100" fill="#e8e8e8" stroke="#666" stroke-width="2"></rect>
    <text x="860" y="695" text-anchor="middle" font-family="Arial, sans-serif" font-size="15" font-weight="bold" fill="#333">
      垂类AI模型
    </text>
    
    <rect x="760" y="710" width="90" height="45" fill="#f5f5f5" stroke="#777" stroke-width="1"></rect>
    <text x="805" y="738" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#333">
      工业AI
    </text>
    
    <rect x="860" y="710" width="100" height="45" fill="#f5f5f5" stroke="#777" stroke-width="1"></rect>
    <text x="910" y="738" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#333">
      医疗AI
    </text>
    
    <!-- 左下：多模态模型 -->
    <rect x="460" y="785" width="260" height="90" fill="#e8e8e8" stroke="#666" stroke-width="2" class=""></rect>
    <text x="590" y="810" text-anchor="middle" font-family="Arial, sans-serif" font-size="15" font-weight="bold" fill="#333">
      多模态模型
    </text>
    
    <rect x="480" y="825" width="95" height="40" fill="#f5f5f5" stroke="#777" stroke-width="1"></rect>
    <text x="527" y="850" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#333">
      图文融合
    </text>
    
    <rect x="585" y="825" width="115" height="40" fill="#f5f5f5" stroke="#777" stroke-width="1" class=""></rect>
    <text x="642" y="850" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#333" class="">
      跨模态生成
    </text>
    
   <!-- 右下：云平台（Accent色） -->
    <rect x="740" y="785" width="240" height="90" fill="#e8e8e8" stroke="#666" stroke-width="2"></rect>
    <text x="860" y="810" text-anchor="middle" font-family="Arial, sans-serif" font-size="15" font-weight="bold" fill="#333">
      云平台服务
    </text>
    
    <rect x="760" y="825" width="90" height="40" fill="#f5f5f5" stroke="#777" stroke-width="1"></rect>
    <text x="805" y="850" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#333">
      AI开发平台
    </text>
    
    <rect x="860" y="825" width="100" height="40" fill="#f5f5f5" stroke="#777" stroke-width="1"></rect>
    <text x="910" y="850" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#333">
      设备管理
    </text>
  </g>
    

  <!-- 阶段2到阶段3的主连接线 -->
  
  
  <!-- 横向关联线（从边缘计算到AI模型） -->
  
  
  

  <!-- ========== 第三阶段：场景应用与价值实现 ========== -->
  <g id="stage3">
    <!-- 阶段标题 -->
    <rect x="40" y="970" width="220" height="45" fill="#d0d0d0" stroke="#444" stroke-width="2"></rect>
    <text x="150" y="1000" text-anchor="middle" font-family="Arial, sans-serif" font-size="20" font-weight="bold" fill="#222">
      阶段三：场景应用
    </text>
    
    <!-- 左侧2x2四宫格布局虚线框 -->
    <rect x="60" y="1040" width="380" height="300" fill="none" stroke="#888" stroke-width="2" stroke-dasharray="8,4"></rect>
    
    <!-- 左上：智能制造 -->
    <rect x="80" y="1060" width="170" height="130" fill="#f5f5f5" stroke="#555" stroke-width="2"></rect>
    <text x="165" y="1085" text-anchor="middle" font-family="Arial, sans-serif" font-size="15" font-weight="bold" fill="#333">
      智能制造
    </text>
    
    <rect x="95" y="1100" width="140" height="35" fill="#e8e8e8" stroke="#666" stroke-width="1"></rect>
    <text x="165" y="1122" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#333">
      工业互联网
    </text>
    
    <rect x="95" y="1145" width="140" height="35" fill="#e8e8e8" stroke="#666" stroke-width="1"></rect>
    <text x="165" y="1167" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#333">
      柔性制造
    </text>
    
    <!-- 右上：智慧交通 -->
    <rect x="260" y="1060" width="170" height="130" fill="#f5f5f5" stroke="#555" stroke-width="2"></rect>
    <text x="345" y="1085" text-anchor="middle" font-family="Arial, sans-serif" font-size="15" font-weight="bold" fill="#333">
      智慧交通
    </text>
    
    <rect x="275" y="1100" width="140" height="35" fill="#e8e8e8" stroke="#666" stroke-width="1"></rect>
    <text x="345" y="1122" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#333">
      车路云一体
    </text>
    
    <rect x="275" y="1145" width="140" height="35" fill="#e8e8e8" stroke="#666" stroke-width="1"></rect>
    <text x="345" y="1167" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#333">
      自动驾驶
    </text>
    
    <!-- 左下：智慧城市 -->
    <rect x="80" y="1200" width="170" height="130" fill="#f5f5f5" stroke="#555" stroke-width="2"></rect>
    <text x="165" y="1225" text-anchor="middle" font-family="Arial, sans-serif" font-size="15" font-weight="bold" fill="#333">
      智慧城市
    </text>
    
    <rect x="95" y="1240" width="140" height="35" fill="#e8e8e8" stroke="#666" stroke-width="1"></rect>
    <text x="165" y="1262" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#333">
      城市治理
    </text>
    
    <rect x="95" y="1285" width="140" height="35" fill="#e8e8e8" stroke="#666" stroke-width="1"></rect>
    <text x="165" y="1307" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#333">
      应急管理
    </text>
    
    <!-- 右下：智慧医疗（Accent色） -->
    <rect x="260" y="1200" width="170" height="130" fill="#f5f5f5" stroke="#555" stroke-width="2"></rect>
    <text x="345" y="1225" text-anchor="middle" font-family="Arial, sans-serif" font-size="15" font-weight="bold" fill="#333">
      智慧医疗
    </text>
    
    <rect x="275" y="1240" width="140" height="35" fill="#e8e8e8" stroke="#666" stroke-width="1"></rect>
    <text x="345" y="1262" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#333">
      可穿戴设备
    </text>
    
    <rect x="275" y="1285" width="140" height="35" fill="#e8e8e8" stroke="#666" stroke-width="1"></rect>
    <text x="345" y="1307" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#333">
      远程医疗
    </text>
    
    <!-- 中间竖长框：应用评估 -->
    <rect x="480" y="1040" width="140" height="300" fill="none" stroke="#888" stroke-width="2" stroke-dasharray="8,4" class=""></rect>
    
    <rect x="495" y="1060" width="110" height="260" fill="#f5f5f5" stroke="#555" stroke-width="3"></rect>
    <text x="550" y="1090" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#333">
      应用评估
    </text>
    
    <rect x="505" y="1110" width="90" height="40" fill="#e8e8e8" stroke="#666" stroke-width="1"></rect>
    <text x="550" y="1135" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#333">
      效率提升
    </text>
    
    <rect x="505" y="1160" width="90" height="40" fill="#e8e8e8" stroke="#666" stroke-width="1"></rect>
    <text x="550" y="1177" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#333">
      成本降低
    </text>
    <text x="550" y="1191" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#333">
      效果评估
    </text>
    
    <rect x="505" y="1210" width="90" height="40" fill="#e8e8e8" stroke="#666" stroke-width="1"></rect>
    <text x="550" y="1235" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#333">
      用户体验
    </text>
    
    <rect x="505" y="1260" width="90" height="45" fill="#e8e8e8" stroke="#666" stroke-width="1"></rect>
    <text x="550" y="1288" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#333">
      可靠性
    </text>
    
    <!-- 右侧三个横向框虚线分组 -->
    <rect x="660" y="1040" width="360" height="300" fill="none" stroke="#888" stroke-width="2" stroke-dasharray="8,4"></rect>
    
    <!-- 右侧第一框：智慧物流 -->
    <rect x="680" y="1060" width="320" height="75" fill="#f5f5f5" stroke="#555" stroke-width="2"></rect>
    <text x="840" y="1090" text-anchor="middle" font-family="Arial, sans-serif" font-size="15" font-weight="bold" fill="#333">
      智慧物流
    </text>
    
    <rect x="700" y="1105" width="90" height="20" fill="#e0e0e0" stroke="#666" stroke-width="1"></rect>
    <text x="745" y="1120" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#333">
      仓储自动化
    </text>
    
    <rect x="800" y="1105" width="90" height="20" fill="#e0e0e0" stroke="#666" stroke-width="1"></rect>
    <text x="845" y="1120" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#333">
      运输优化
    </text>
    
    <rect x="900" y="1105" width="80" height="20" fill="#e0e0e0" stroke="#666" stroke-width="1"></rect>
    <text x="940" y="1120" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#333">
      最后一公里
    </text>
    
    <!-- 右侧第二框：智慧能源 -->
    <rect x="680" y="1150" width="320" height="75" fill="#f5f5f5" stroke="#555" stroke-width="2"></rect>
    <text x="840" y="1180" text-anchor="middle" font-family="Arial, sans-serif" font-size="15" font-weight="bold" fill="#333">
      智慧能源
    </text>
    
    <rect x="700" y="1195" width="85" height="20" fill="#e0e0e0" stroke="#666" stroke-width="1"></rect>
    <text x="742" y="1210" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#333">
      综合能源
    </text>
    
    <rect x="795" y="1195" width="90" height="20" fill="#e0e0e0" stroke="#666" stroke-width="1"></rect>
    <text x="840" y="1210" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#333">
      新能源消纳
    </text>
    
    <rect x="895" y="1195" width="85" height="20" fill="#e0e0e0" stroke="#666" stroke-width="1"></rect>
    <text x="937" y="1210" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#333">
      储能优化
    </text>
    
    <!-- 右侧第三框：智能零售（Accent色） -->
    <rect x="680" y="1240" width="320" height="85" fill="#f5f5f5" stroke="#666" stroke-width="2"></rect>
    <text x="840" y="1270" text-anchor="middle" font-family="Arial, sans-serif" font-size="15" font-weight="bold" fill="#333">
      智能零售
    </text>
    
    <rect x="700" y="1285" width="130" height="30" fill="#e8e8e8" stroke="#666" stroke-width="1"></rect>
    <text x="765" y="1305" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#333">
      新零售融合
    </text>
    
    <rect x="840" y="1285" width="140" height="30" fill="#e8e8e8" stroke="#666" stroke-width="1"></rect>
    <text x="910" y="1305" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#333">
      无人零售
    </text>
  </g>

  <!-- 阶段3内部的横向连接线（从应用到评估） -->
  
  
  
  
  
  <!-- 从评估到优化的连接线 -->
  
  
  
  
  <!-- 斜向反馈线（从优化回到应用） -->
  
  

  <!-- 阶段3到阶段4的主连接线 -->
  

  <!-- ========== 第四阶段：价值实现与商业模式 ========== -->
  <g id="stage4">
    <!-- 阶段标题 -->
    <rect x="40" y="1388" width="220" height="45" fill="#d0d0d0" stroke="#444" stroke-width="2"></rect>
    <text x="150" y="1418" text-anchor="middle" font-family="Arial, sans-serif" font-size="20" font-weight="bold" fill="#222">
      阶段四：价值实现
    </text>
    
    <!-- 左侧大框：价值分配虚线分组 -->
    <rect x="60" y="1455" width="450" height="290" fill="none" stroke="#888" stroke-width="2" stroke-dasharray="8,4"></rect>
    
    <rect x="80" y="1475" width="410" height="250" fill="#f5f5f5" stroke="#555" stroke-width="3" class=""></rect>
    <text x="285" y="1505" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#333">
      价值分配机制
    </text>
    
    <!-- 价值分配嵌套框 - 2x2布局 -->
    <!-- 左上：资产数字化 -->
    <rect x="100" y="1525" width="180" height="85" fill="#e8e8e8" stroke="#666" stroke-width="2"></rect>
    <text x="190" y="1550" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#333">
      资产数字化
    </text>
    
    <rect x="115" y="1565" width="150" height="35" fill="#f5f5f5" stroke="#777" stroke-width="1"></rect>
    <text x="190" y="1588" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#333">
      RWA通证化
    </text>
    
    <!-- 右上：去中心化设施 -->
    <rect x="290" y="1525" width="180" height="85" fill="#e8e8e8" stroke="#666" stroke-width="2"></rect>
    <text x="380" y="1550" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#333">
      去中心化设施
    </text>
    
    <rect x="305" y="1565" width="150" height="35" fill="#f5f5f5" stroke="#777" stroke-width="1"></rect>
    <text x="380" y="1588" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#333">
      DePIN网络
    </text>
    
    <!-- 左下：智能金融 -->
    <rect x="100" y="1625" width="180" height="85" fill="#e8e8e8" stroke="#666" stroke-width="2"></rect>
    <text x="190" y="1650" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#333">
      智能金融
    </text>
    
    <rect x="115" y="1665" width="150" height="35" fill="#f5f5f5" stroke="#777" stroke-width="1"></rect>
    <text x="190" y="1688" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#333">
      DeFi合约
    </text>
    
    <!-- 右下：SLA化商业模式（Accent色） -->
    <rect x="290" y="1625" width="180" height="85" fill="#e8e8e8" stroke="#666" stroke-width="2" class=""></rect>
    <text x="380" y="1650" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#333" class="selected" style="opacity: 1;">      SLA化商业模式    </text>
    
    <rect x="305" y="1665" width="150" height="35" fill="#f5f5f5" stroke="#777" stroke-width="1"></rect>
    <text x="380" y="1688" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#333">
      按效果付费
    </text>
    
    <!-- 右侧交错排列的价值交易虚线分组 -->
    <rect x="550" y="1455" width="470" height="290" fill="none" stroke="#888" stroke-width="2" stroke-dasharray="8,4"></rect>
    
    <!-- 右侧第一列 -->
    <rect x="570" y="1475" width="130" height="60" fill="#e0e0e0" stroke="#666" stroke-width="2"></rect>
    <text x="635" y="1500" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" fill="#333">
      数据要素交易
    </text>
    <text x="635" y="1520" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#555">
      隐私计算
    </text>
    
    <rect x="570" y="1550" width="130" height="60" fill="#e0e0e0" stroke="#666" stroke-width="2"></rect>
    <text x="635" y="1575" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" fill="#333">
      碳交易市场
    </text>
    <text x="635" y="1595" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#555">
      碳资产管理
    </text>
    
    <rect x="570" y="1625" width="130" height="60" fill="#e0e0e0" stroke="#666" stroke-width="2"></rect>
    <text x="635" y="1650" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" fill="#333">
      算力交易
    </text>
    <text x="635" y="1670" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#555">
      AI训练算力
    </text>
    
    <rect x="570" y="1700" width="130" height="35" fill="#e0e0e0" stroke="#666" stroke-width="1"></rect>
    <text x="635" y="1722" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#333">
      带宽交易
    </text>
    
    <!-- 右侧第二列 -->
    <rect x="715" y="1475" width="130" height="60" fill="#e0e0e0" stroke="#666" stroke-width="2" class=""></rect>
    <text x="780" y="1500" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" fill="#333">
      知识产权交易
    </text>
    <text x="780" y="1520" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#555">
      专利交易
    </text>
    
    <rect x="715" y="1550" width="130" height="60" fill="#e0e0e0" stroke="#666" stroke-width="2"></rect>
    <text x="780" y="1575" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" fill="#333">
      要素市场
    </text>
    <text x="780" y="1595" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#555">
      市场化配置
    </text>
    
    <rect x="715" y="1625" width="130" height="60" fill="#e0e0e0" stroke="#666" stroke-width="2"></rect>
    <text x="780" y="1650" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" fill="#333">
      模型交易
    </text>
    <text x="780" y="1670" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#555">
      预测结果交易
    </text>
    
    <rect x="715" y="1700" width="130" height="35" fill="#e0e0e0" stroke="#666" stroke-width="1"></rect>
    <text x="780" y="1722" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#333">
      洞察数据交易
    </text>
    
    <!-- 右侧第三列 -->
    <rect x="860" y="1475" width="140" height="60" fill="#e0e0e0" stroke="#666" stroke-width="2"></rect>
    <text x="930" y="1492" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#333">
      绿色园区
    </text>
    <text x="930" y="1508" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#555">
      设备全生命周期
    </text>
    <text x="930" y="1524" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#555">
      运维
    </text>
    
    <rect x="860" y="1550" width="140" height="60" fill="#e0e0e0" stroke="#666" stroke-width="2"></rect>
    <text x="930" y="1575" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" fill="#333">
      全屋智能
    </text>
    <text x="930" y="1595" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#555">
      空间计算
    </text>
    
    <rect x="860" y="1625" width="140" height="60" fill="#e0e0e0" stroke="#666" stroke-width="2"></rect>
    <text x="930" y="1650" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" fill="#333">
      低空经济
    </text>
    <text x="930" y="1670" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#555">
      空地协同
    </text>
    
    <rect x="860" y="1700" width="140" height="35" fill="#e0e0e0" stroke="#666" stroke-width="1"></rect>
    <text x="930" y="1722" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#333">
      星地融合
    </text>
  </g>

  <!-- 从价值分配到价值交易的连接线 -->
  
  
  
  
  <!-- 价值交易之间的横向关联线 -->
  <line x1="700" y1="1505" x2="715" y2="1505" stroke="#999" stroke-width="1.5" stroke-dasharray="4,2"></line>
  <line x1="845" y1="1505" x2="860" y2="1505" stroke="#999" stroke-width="1.5" stroke-dasharray="4,2"></line>
  <line x1="700" y1="1580" x2="715" y2="1580" stroke="#7fb3d5" stroke-width="2"></line>
  <line x1="845" y1="1580" x2="860" y2="1580" stroke="#999" stroke-width="1.5" stroke-dasharray="4,2"></line>
  <line x1="700" y1="1655" x2="715" y2="1655" stroke="#999" stroke-width="1.5" stroke-dasharray="4,2"></line>
  <line x1="845" y1="1655" x2="860" y2="1655" stroke="#999" stroke-width="1.5" stroke-dasharray="4,2"></line>
  <line x1="700" y1="1717" x2="715" y2="1717" stroke="#999" stroke-width="1.5" stroke-dasharray="4,2"></line>
  <line x1="845" y1="1717" x2="860" y2="1717" stroke="#999" stroke-width="1.5" stroke-dasharray="4,2"></line>
  
  <!-- 底部总结框 -->
  <rect x="180" y="1770" width="720" height="60" fill="#e6e6e6" stroke="#e6e6e6" stroke-width="2.2" class="selected"></rect>
  <text x="540" y="1798" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#222">
    通感智值生态循环 · 跨域编排协同 · 持续价值创造
  </text>
  <text x="540" y="1820" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" fill="#444">
    十大协同场景落地 | 技术商业双轮驱动 | 构建AIoT产业新生态
  </text>
  
<text x="956" y="425" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" fill="#333" class="" style="opacity: 1;">      通感一体化    </text></svg>`
    },
    {
        id: 'baogaojiegouhua1',
        name: '插图专用户',
        description: '颜色版',
        svgCode: `<svg width="1000" height="500" viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg">
  <!-- 字体定义 -->
  <style>
    text { font-family: "Microsoft YaHei", "SimHei", sans-serif; }
    .label-left { font-size: 16px; font-weight: bold; fill: #2C3E50; text-anchor: middle; }
    .label-right-en { font-size: 14px; fill: #2C3E50; text-anchor: middle; }
    .label-right-cn { font-size: 18px; font-weight: bold; fill: #1A5276; text-anchor: middle; }
    .theory-text { font-size: 16px; font-weight: bold; fill: #fff; text-anchor: middle; alignment-baseline: middle; }
    .box-text { font-size: 12px; fill: #2C3E50; text-anchor: middle; alignment-baseline: middle; }
    .need-box-text { font-size: 13px; font-weight: bold; fill: #2C3E50; text-anchor: middle; alignment-baseline: middle; }
    .bottom-axis-text { font-size: 18px; font-weight: bold; fill: #1A5276; text-anchor: middle; }
  </style>

  <!-- 定义箭头标记 -->
  <defs>
    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#1A5276"></polygon>
    </marker>
    <marker id="arrowhead-gray" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#A9CCE3"></polygon>
    </marker>
    
    <!-- 渐变定义 -->
    <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3498DB"></stop>
      <stop offset="100%" stop-color="#1A5276"></stop>
    </linearGradient>
    <linearGradient id="greenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#58D68D"></stop>
      <stop offset="100%" stop-color="#27AE60"></stop>
    </linearGradient>
    <linearGradient id="grayGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#EAECEE"></stop>
      <stop offset="100%" stop-color="#D5D8DC"></stop>
    </linearGradient>
  </defs>

  <!-- ================= 1. 背景层：水平虚线分割线 ================= -->
  <g id="grid-lines" stroke="#A9CCE3" stroke-width="1" stroke-dasharray="5,5">
    <!-- 从下往上的分割线 -->
    <line x1="20" y1="390" x2="980" y2="390"></line>
    <line x1="20" y1="300" x2="980" y2="300"></line>
    <line x1="20" y1="160" x2="980" y2="160"></line>
    <!-- 顶部虚线 -->
    <line x1="100" y1="40" x2="530" y2="40" stroke-dasharray="5,5" stroke="#5DADE2" stroke-width="2"></line> 
  </g>

  <!-- 背景矩形 -->
  <rect width="1000" height="500" fill="#F8F9F9" class="" x="0" y="-6"></rect>

  <!-- ================= 2. 几何架构层：中间的三角形 ================= -->
  <!-- 蓝色正三角形 (背景) -->
  <polygon points="120,430 510,430 315,50" fill="url(#blueGradient)" fill-opacity="0.3" stroke="none"></polygon>
  <line x1="120" y1="430" x2="315" y2="50" stroke="#5DADE2" stroke-width="1"></line>
  <line x1="510" y1="430" x2="315" y2="50" stroke="#5DADE2" stroke-width="1"></line>

  <!-- 绿色倒三角形 (虚线轮廓) -->
  <polygon points="100,40 530,40 315,430" fill="none" stroke="#27AE60" stroke-width="2" stroke-dasharray="6,6"></polygon>

  <!-- ================= 3. 左侧柱：政策导向 ================= -->
  <g id="left-column">
    <!-- 背景大箭头 - 蓝色渐变 -->
    <polygon points="40,430 80,430 80,60 60,30 40,60" fill="#d1f7ff" fill-opacity="0.7" class=""></polygon>
    <!-- 文字 -->
    <text x="60" y="410" class="label-left" data-original-font-size="16" font-size="17.6" style="font-size: 17.6px;">战略强制</text>
    <text x="60" y="345" class="label-left" data-original-font-size="16" font-size="17.6" style="font-size: 17.6px;">AI治理</text>
    <text x="60" y="260" class="label-left" data-original-font-size="16" font-size="17.6" style="font-size: 17.6px;">人才生态</text>
    <text x="60" y="190" class="label-left" data-original-font-size="16" font-size="17.6" style="font-size: 17.6px;">刚性需求</text>
    <text x="60" y="95" class="label-left" opacity="1" style="opacity: 1; font-size: 17.6px;" data-original-font-size="16" font-size="17.6">智能向善</text>
  </g>

  <!-- ================= 4. 右侧柱：技术供给 ================= -->
  <g id="right-column">
    <!-- 背景大箭头 - 绿色渐变 -->
    <polygon points="780,430 820,430 820,60 800,30 780,60" fill="url(#greenGradient)" fill-opacity="0.7" class="" opacity="0.4"></polygon>
    
    <!-- 基础架构 -->
    <text x="802" y="383" class="label-right-cn" data-original-font-size="18" font-size="19.8" style="font-size: 19.8px;">基础架构</text>
    <text x="802" y="403" class="label-right-en" data-original-font-size="14" font-size="15.400000000000002" style="font-size: 15.4px;">MoE/SSM</text>
    <circle cx="800" y="405" r="3" fill="#1A5276"></circle>

    <!-- 工程化 -->
    <text x="802" y="238" class="label-right-cn" data-original-font-size="18" font-size="19.8" style="font-size: 19.8px;">工程化</text>
    <text x="802" y="258" class="label-right-en" data-original-font-size="14" font-size="15.400000000000002" style="font-size: 15.4px;">RAG/轻量化</text>
    <circle cx="800" y="260" r="3" fill="#1A5276"></circle>

    <!-- 智能形态 -->
    <text x="802" y="88" class="label-right-cn" data-original-font-size="18" font-size="19.8" style="font-size: 19.8px;">智能形态</text>
    <text x="802" y="108" class="label-right-en" data-original-font-size="14" font-size="15.400000000000002" style="font-size: 15.4px;">Agent/世界模型</text>
    <circle cx="800" y="110" r="3" fill="#1A5276"></circle>
  </g>

  <!-- ================= 5. 底部轴线 ================= -->
  <g id="bottom-axis">
    <line x1="30" y1="450" x2="960" y2="450" stroke="#1A5276" stroke-width="3" marker-end="url(#arrowhead)"></line>
    <text x="120" y="480" class="bottom-axis-text" data-original-font-size="18" font-size="19.8" style="font-size: 19.8px;">政策主导</text>
    <text x="600" y="480" class="bottom-axis-text" data-original-font-size="18" font-size="19.8" style="font-size: 19.8px;">市场需求</text>
    <text x="850" y="480" class="bottom-axis-text" data-original-font-size="18" font-size="19.8" style="font-size: 19.8px;">技术供给</text>
  </g>

  <!-- ================= 6. 中心内容层 (核心逻辑) ================= -->
  
  <!-- 6.1 需求方框 (右中侧) -->
  <g id="needs-boxes">
    <!-- 底部：G端需求 -->
    <rect x="520" y="397" width="170" height="30" rx="10" fill="#D6EAF8" stroke="#3498DB" stroke-width="1"></rect>
    <text x="605" y="413" class="need-box-text multi-selected" data-original-font-size="13" font-size="14.3" style="font-size: 14.3px;">政府央国企刚性需求</text>

    <!-- B端需求 -->
    <rect x="520" y="330" width="170" height="30" rx="10" fill="#D1F2EB" stroke="#27AE60" stroke-width="1"></rect>
    <text x="605" y="346" class="need-box-text multi-selected" data-original-font-size="13" font-size="14.3" style="font-size: 14.3px;">企业效率成本优化</text>

    <!-- C端需求 -->
    <rect x="520" y="250" width="170" height="30" rx="10" fill="#D6EAF8" stroke="#3498DB" stroke-width="1"></rect>
    <text x="605" y="266" class="need-box-text multi-selected" data-original-font-size="13" font-size="14.3" style="font-size: 14.3px;">AIGC内容消费</text>

    <!-- 社会需求 -->
    <rect x="520" y="185" width="170" height="30" rx="10" fill="#D1F2EB" stroke="#27AE60" stroke-width="1"></rect>
    <text x="605" y="201" class="need-box-text multi-selected" data-original-font-size="13" font-size="14.3" style="font-size: 14.3px;">劳动力结构重塑</text>

    <!-- 治理需求 -->
    <rect x="515" y="105" width="170" height="30" rx="10" fill="#D6EAF8" stroke="#3498DB" stroke-width="1"></rect>
    <text x="600" y="121" class="need-box-text multi-selected" data-original-font-size="13" font-size="14.3" style="font-size: 14.3px;">AI伦理与治理</text>
  </g>

  <!-- 6.2 理论与网络节点 (中心) -->
  <g id="theories">
    
    <!-- 底部：价值迁移 -->
    <line x1="315" y1="320" x2="315" y2="360" stroke="#1A5276" stroke-width="2"></line>
    <ellipse cx="315" cy="375" rx="60" ry="15" fill="url(#blueGradient)"></ellipse>
    <text x="315" y="376" class="theory-text" data-original-font-size="16" font-size="17.6" style="font-size: 17.6px;">价值迁移</text>

    <!-- 节点：应用层 -->
    <rect x="265" y="305" width="100" height="25" rx="5" fill="#EBF5FB" stroke="#3498DB" stroke-width="1"></rect>
    <text x="315" y="318" class="box-text" font-size="9.9" style="font-size: 9.9px;" data-original-font-size="9">应用层CAGR 201.5%</text>
    <circle cx="315" cy="305" r="4" fill="#1A5276"></circle>

    <!-- 中部：结构重塑 -->
    <line x1="255" y1="170" x2="315" y2="230" stroke="#1A5276" stroke-width="2"></line>
    <line x1="375" y1="170" x2="315" y2="230" stroke="#1A5276" stroke-width="2"></line>
    <line x1="315" y1="230" x2="315" y2="280" stroke="#1A5276" stroke-width="2"></line>

    <ellipse cx="315" cy="210" rx="60" ry="18" fill="url(#greenGradient)"></ellipse>
    <text x="315" y="211" class="theory-text" data-original-font-size="16" font-size="17.6" style="font-size: 17.6px;">结构重塑</text>

    <!-- 节点：平台型厂商 -->
    <rect x="265" y="235" width="100" height="25" rx="5" fill="#EAFAF1" stroke="#27AE60" stroke-width="1"></rect>
    <text x="315" y="248" class="box-text" data-original-font-size="12" font-size="13.200000000000001" style="font-size: 13.2px;">平台型厂商</text>
    <circle cx="315" cy="280" r="4" fill="#1A5276"></circle>

    <!-- 顶部：应用为王 -->
    <ellipse cx="315" cy="90" rx="60" ry="18" fill="url(#blueGradient)"></ellipse>
    <text x="315" y="91" class="theory-text" data-original-font-size="16" font-size="17.6" style="font-size: 17.6px;">应用为王</text>

    <!-- 节点：专业型初创 -->
    <rect x="205" y="140" width="90" height="25" rx="5" fill="#EBF5FB" stroke="#3498DB" stroke-width="1"></rect>
    <text x="250" y="153" class="box-text" data-original-font-size="12" font-size="13.200000000000001" style="font-size: 13.2px;">专业型初创</text>
    <circle cx="255" cy="165" r="5" fill="#1A5276"></circle>

    <!-- 节点：产业总规模 -->
    <rect x="335" y="140" width="90" height="25" rx="5" fill="#EAFAF1" stroke="#27AE60" stroke-width="1"></rect>
    <text x="380" y="153" class="box-text" data-original-font-size="12" font-size="13.200000000000001" style="font-size: 13.2px;">3645.5亿元</text>
    <circle cx="375" cy="165" r="5" fill="#1A5276"></circle>
    
    <!-- 顶部连接线 -->
    

  </g>

</svg>`
    },
    {
        id: 'baogaojiegouhuayanse',
        name: '报告结构化表达图',
        description: '展示报告的主要结构内容/研究思路',
        svgCode: `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="1100" viewBox="0 0 1200 1100" class=""><style>
    text { font-family: "Microsoft YaHei", "PingFang SC", "Microsoft YaHei", "SimHei", sans-serif; }</style>
  <!-- 定义箭头标记 -->
  <defs>
    <marker id="arrow1" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto">
      <path d="M2,2 L10,6 L2,10 L4,6 Z" fill="#5a7ba8"></path>
    </marker>
    <marker id="arrow2" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto">
      <path d="M2,2 L10,6 L2,10 L4,6 Z" fill="#8b6f47"></path>
    </marker>
    <marker id="arrow3" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto">
      <path d="M2,2 L10,6 L2,10 L4,6 Z" fill="#6a8d73"></path>
    </marker>
  </defs>

  <!-- 最外层边框 -->
  <rect x="30" y="30" width="1140" height="1040" fill="none" stroke="#666" stroke-width="2.5" stroke-dasharray="15,8"></rect>

  <!-- ========== 第一层：顶部标题层（单一居中大标题） ========== -->
  <g id="layer1-title">
    <rect x="220" y="70" width="760" height="85" fill="#B3D9F2" stroke="#5a7ba8" stroke-width="2"></rect>
    <text x="601" y="112" font-family="SimHei, Microsoft YaHei, Arial, sans-serif" font-size="33.44" font-weight="bold" text-anchor="middle" fill="#2c3e50" data-original-font-size="22" style="font-size: 33.44px; opacity: 1;" class="">      在中国的美国企业研究思路</text>
    <text x="601" y="147" font-family="SimHei, Microsoft YaHei, Arial, sans-serif" font-size="24.32" text-anchor="middle" fill="#34495e" data-original-font-size="16" style="font-size: 24.32px;" class="">
      2025
    </text>
  </g>

  <!-- ========== 第二层：问题识别层（5个横向并列模块 + 侧边标签） ========== -->
  <g id="layer2-problem">
    <!-- 左侧标签 -->
    <rect x="60" y="220" width="80" height="200" fill="#D4EDDA" stroke="#6a8d73" stroke-width="2"></rect>
    <text x="99" y="296" font-family="SimHei, Microsoft YaHei, Arial, sans-serif" font-size="22.8" font-weight="bold" text-anchor="middle" fill="#2c5f2d" data-original-font-size="15" style="font-size: 22.8px;" class="">
      研究
    </text>
    <text x="99" y="321" font-family="SimHei, Microsoft YaHei, Arial, sans-serif" font-size="22.8" font-weight="bold" text-anchor="middle" fill="#2c5f2d" data-original-font-size="15" style="font-size: 22.8px;" class="">
      背景
    </text>
    <text x="99" y="346" font-family="SimHei, Microsoft YaHei, Arial, sans-serif" font-size="22.8" font-weight="bold" text-anchor="middle" fill="#2c5f2d" data-original-font-size="15" style="font-size: 22.8px;" class="">
      与
    </text>
    <text x="99" y="371" font-family="SimHei, Microsoft YaHei, Arial, sans-serif" font-size="22.8" font-weight="bold" text-anchor="middle" fill="#2c5f2d" data-original-font-size="15" style="font-size: 22.8px;" class="">
      意义
    </text>

    <!-- 5个横向并列框 -->
    <rect x="180" y="220" width="170" height="80" fill="#F8D7DA" stroke="#c5536b" stroke-width="1.5"></rect>
    <text x="265" y="250" font-family="SimHei, Microsoft YaHei, Arial, sans-serif" font-size="19.76" text-anchor="middle" fill="#333" data-original-font-size="13" style="font-size: 19.76px;">
      70家美企在华
    </text>
    <text x="265" y="270" font-family="SimHei, Microsoft YaHei, Arial, sans-serif" font-size="14" text-anchor="middle" fill="#333" data-original-font-size="13" style="font-size: 14px;" class="">
      年创3127亿美元
    </text>
    <text x="265" y="290" font-family="SimHei, Microsoft YaHei, Arial, sans-serif" font-size="16.72" text-anchor="middle" fill="#666" data-original-font-size="11" style="font-size: 16.72px;" class="">
      (营收超贸易逆差)
    </text>

    <rect x="380" y="220" width="170" height="80" fill="#F8D7DA" stroke="#c5536b" stroke-width="1.5"></rect>
    <text x="465" y="250" font-family="SimHei, Microsoft YaHei, Arial, sans-serif" font-size="19.76" text-anchor="middle" fill="#333" data-original-font-size="13" style="font-size: 19.76px;">
      中国市场贡献
    </text>
    <text x="465" y="270" font-family="SimHei, Microsoft YaHei, Arial, sans-serif" font-size="14" text-anchor="middle" fill="#333" data-original-font-size="13" style="font-size: 14px;" class="">
      全球营收12%
    </text>
    <text x="465" y="290" font-family="SimHei, Microsoft YaHei, Arial, sans-serif" font-size="16.72" text-anchor="middle" fill="#666" data-original-font-size="11" style="font-size: 16.72px;" class="">
      (50%美企Top2市场)
    </text>

    <rect x="580" y="220" width="170" height="80" fill="#F8D7DA" stroke="#c5536b" stroke-width="1.5"></rect>
    <text x="665" y="250" font-family="SimHei, Microsoft YaHei, Arial, sans-serif" font-size="19.76" text-anchor="middle" fill="#333" data-original-font-size="13" style="font-size: 19.76px;">
      信息技术行业
    </text>
    <text x="665" y="270" font-family="SimHei, Microsoft YaHei, Arial, sans-serif" font-size="14" text-anchor="middle" fill="#333" data-original-font-size="13" style="font-size: 14px;" class="">
      占比最高32.9%
    </text>
    <text x="665" y="290" font-family="SimHei, Microsoft YaHei, Arial, sans-serif" font-size="16.72" text-anchor="middle" fill="#666" data-original-font-size="11" style="font-size: 16.72px;" class="">
      (半导体主导)
    </text>

    <rect x="780" y="220" width="170" height="80" fill="#F8D7DA" stroke="#c5536b" stroke-width="1.5"></rect>
    <text x="865" y="250" font-family="SimHei, Microsoft YaHei, Arial, sans-serif" font-size="19.76" text-anchor="middle" fill="#333" data-original-font-size="13" style="font-size: 19.76px;">
      中美贸易关系
    </text>
    <text x="865" y="270" font-family="SimHei, Microsoft YaHei, Arial, sans-serif" font-size="14" text-anchor="middle" fill="#333" data-original-font-size="13" style="font-size: 14px;" class="">
      剧烈演变
    </text>
    <text x="865" y="291" font-family="SimHei, Microsoft YaHei, Arial, sans-serif" font-size="16.72" text-anchor="middle" fill="#666" data-original-font-size="11" style="font-size: 16.72px;" class="">
      (关税政策冲击)
    </text>

    <rect x="980" y="220" width="170" height="80" fill="#F8D7DA" stroke="#c5536b" stroke-width="1.5"></rect>
    <text x="1065" y="250" font-family="SimHei, Microsoft YaHei, Arial, sans-serif" font-size="19.76" text-anchor="middle" fill="#333" data-original-font-size="13" style="font-size: 19.76px;">
      企业价值
    </text>
    <text x="1065" y="270" font-family="SimHei, Microsoft YaHei, Arial, sans-serif" font-size="14" text-anchor="middle" fill="#333" data-original-font-size="13" style="font-size: 14px;" class="">
      大幅波动
    </text>
    <text x="1065" y="291" font-family="SimHei, Microsoft YaHei, Arial, sans-serif" font-size="16.72" text-anchor="middle" fill="#666" data-original-font-size="11" style="font-size: 16.72px;" class="">
      (累计蒸发1.5万亿)
    </text>

    <!-- 下方问题提出框 -->
    <rect x="180" y="330" width="970" height="90" fill="#E0D4F7" stroke="#8b6fb8" stroke-width="2" stroke-dasharray="6,3"></rect>
    <text x="665" y="360" font-family="SimHei, Microsoft YaHei, Arial, sans-serif" font-size="22.8" font-weight="bold" text-anchor="middle" fill="#4a3472" data-original-font-size="15" style="font-size: 22.8px;">
      核心研究问题
    </text>
    <text x="665" y="385" font-family="SimHei, Microsoft YaHei, Arial, sans-serif" font-size="18" text-anchor="middle" fill="#333" data-original-font-size="13" style="font-size: 18px;" class="selected">
      美国企业在华经营表现如何？中国市场对美企全球战略的重要性有何变化？
    </text>
    <text x="665" y="411" font-family="SimHei, Microsoft YaHei, Arial, sans-serif" font-size="18" text-anchor="middle" fill="#333" data-original-font-size="13" style="font-size: 18px;" class="">
      中美贸易摩擦对企业价值与经营策略产生哪些影响？未来发展趋势如何？
    </text>

    <!-- 连接箭头 -->
    <line x1="265" y1="300" x2="265" y2="330" stroke="#8b6fb8" stroke-width="2" marker-end="url(#arrow2)"></line>
    <line x1="465" y1="300" x2="465" y2="330" stroke="#8b6fb8" stroke-width="2" marker-end="url(#arrow2)"></line>
    <line x1="665" y1="300" x2="665" y2="330" stroke="#8b6fb8" stroke-width="2" marker-end="url(#arrow2)"></line>
    <line x1="865" y1="300" x2="865" y2="330" stroke="#8b6fb8" stroke-width="2" marker-end="url(#arrow2)"></line>
    <line x1="1065" y1="300" x2="1065" y2="330" stroke="#8b6fb8" stroke-width="2" marker-end="url(#arrow2)"></line>
  </g>

  <!-- ========== 第三层：内容展开层（不对称三路径嵌套结构） ========== -->
  <g id="layer3-content">
    <!-- 左侧标签 -->
    <rect x="60" y="480" width="80" height="350" fill="#D4EDDA" stroke="#6a8d73" stroke-width="2"></rect>
    <text x="101" y="629" font-family="SimHei, Microsoft YaHei, Arial, sans-serif" font-size="22.8" font-weight="bold" text-anchor="middle" fill="#2c5f2d" data-original-font-size="15" style="font-size: 22.8px;" class="">
      研究
    </text>
    <text x="101" y="654" font-family="SimHei, Microsoft YaHei, Arial, sans-serif" font-size="22.8" font-weight="bold" text-anchor="middle" fill="#2c5f2d" data-original-font-size="15" style="font-size: 22.8px;" class="">
      框架
    </text>
    <text x="101" y="679" font-family="SimHei, Microsoft YaHei, Arial, sans-serif" font-size="22.8" font-weight="bold" text-anchor="middle" fill="#2c5f2d" data-original-font-size="15" style="font-size: 22.8px;" class="">
      与
    </text>
    <text x="101" y="704" font-family="SimHei, Microsoft YaHei, Arial, sans-serif" font-size="22.8" font-weight="bold" text-anchor="middle" fill="#2c5f2d" data-original-font-size="15" style="font-size: 22.8px;" class="">
      路径
    </text>

    <!-- 路径一：理论构建路径（左侧，大框套小框） -->
    <rect x="180" y="480" width="300" height="350" fill="none" stroke="#5a7ba8" stroke-width="2" stroke-dasharray="8,4"></rect>
    
    <rect x="200" y="500" width="260" height="50" fill="#87CEEB" stroke="#5a7ba8" stroke-width="1.5"></rect>
    <text x="330" y="530" font-family="SimHei, Microsoft YaHei, Arial, sans-serif" font-size="21.28" font-weight="bold" text-anchor="middle" fill="#2c3e50" data-original-font-size="14" style="font-size: 21.28px;">
      路径一：样本概览
    </text>

    <rect x="200" y="570" width="260" height="65" fill="#F5DEB3" stroke="#d4a574" stroke-width="1.5"></rect>
    <text x="330" y="592" font-family="SimHei, Microsoft YaHei, Arial, sans-serif" font-size="18.240000000000002" text-anchor="middle" fill="#333" data-original-font-size="12" style="font-size: 18.24px;">
      70家样本企业
    </text>
    <text x="330" y="611" font-family="SimHei, Microsoft YaHei, Arial, sans-serif" font-size="14" text-anchor="middle" fill="#666" data-original-font-size="11" style="font-size: 14px;" class="">
      标普500成分股
    </text>
    <text x="330" y="628" font-family="SimHei, Microsoft YaHei, Arial, sans-serif" font-size="14" text-anchor="middle" fill="#666" data-original-font-size="11" style="font-size: 14px;" class="">
      平均进入中国35年
    </text>

    <rect x="200" y="655" width="260" height="65" fill="#F5DEB3" stroke="#d4a574" stroke-width="1.5"></rect>
    <text x="330" y="677" font-family="SimHei, Microsoft YaHei, Arial, sans-serif" font-size="18.240000000000002" text-anchor="middle" fill="#333" data-original-font-size="12" style="font-size: 18.24px;">
      五大行业分类
    </text>
    <text x="330" y="695" font-family="SimHei, Microsoft YaHei, Arial, sans-serif" font-size="14" text-anchor="middle" fill="#666" data-original-font-size="11" style="font-size: 14px;" class="">
      信息技术32.9%
    </text>
    <text x="330" y="713" font-family="SimHei, Microsoft YaHei, Arial, sans-serif" font-size="14" text-anchor="middle" fill="#666" data-original-font-size="11" style="font-size: 14px;" class="">
      医疗健康20.0%
    </text>

    <rect x="200" y="740" width="260" height="70" fill="#FFE4B5" stroke="#d4a574" stroke-width="1.5"></rect>
    <text x="330" y="762" font-family="SimHei, Microsoft YaHei, Arial, sans-serif" font-size="18.240000000000002" text-anchor="middle" fill="#333" data-original-font-size="12" style="font-size: 18.24px;">
      总部分布
    </text>
    <text x="330" y="783" font-family="SimHei, Microsoft YaHei, Arial, sans-serif" font-size="14" text-anchor="middle" fill="#666" data-original-font-size="11" style="font-size: 14px;" class="">
      上海63% 北京17%
    </text>
    <text x="330" y="801" font-family="SimHei, Microsoft YaHei, Arial, sans-serif" font-size="14" text-anchor="middle" fill="#666" data-original-font-size="11" style="font-size: 14px;" class="">
      深圳6% 其他14%
    </text>

    <!-- 路径二：实证研究路径（中间，横向展开） -->
    <rect x="510" y="480" width="330" height="350" fill="none" stroke="#8b6f47" stroke-width="2" stroke-dasharray="8,4"></rect>
    
    <rect x="530" y="500" width="290" height="50" fill="#C8A882" stroke="#8b6f47" stroke-width="1.5"></rect>
    <text x="675" y="530" font-family="SimHei, Microsoft YaHei, Arial, sans-serif" font-size="21.28" font-weight="bold" text-anchor="middle" fill="#2c3e50" data-original-font-size="14" style="font-size: 21.28px;">
      路径二：行业分析
    </text>

    <!-- 第一行两个并列框 -->
    <rect x="530" y="570" width="135" height="55" fill="#E0D4F7" stroke="#8b6fb8" stroke-width="1.5"></rect>
    <text x="597" y="589" font-family="SimHei, Microsoft YaHei, Arial, sans-serif" font-size="16.72" text-anchor="middle" fill="#333" data-original-font-size="11" style="font-size: 16.72px;" class="">
      信息技术
    </text>
    <text x="597" y="606" font-family="SimHei, Microsoft YaHei, Arial, sans-serif" font-size="14" text-anchor="middle" fill="#666" data-original-font-size="10" style="font-size: 14px;" class="">
      全球及中国市场
    </text>
    <text x="597" y="620" font-family="SimHei, Microsoft YaHei, Arial, sans-serif" font-size="14" text-anchor="middle" fill="#666" data-original-font-size="10" style="font-size: 14px;" class="">
      两位数增长
    </text>

    <rect x="685" y="570" width="135" height="55" fill="#E0D4F7" stroke="#8b6fb8" stroke-width="1.5"></rect>
    <text x="752" y="589" font-family="SimHei, Microsoft YaHei, Arial, sans-serif" font-size="16.72" text-anchor="middle" fill="#333" data-original-font-size="11" style="font-size: 16.72px;" class="">
      大消费
    </text>
    <text x="752" y="605" font-family="SimHei, Microsoft YaHei, Arial, sans-serif" font-size="14" text-anchor="middle" fill="#666" data-original-font-size="10" style="font-size: 14px;" class="">
      中国市场年均复合
    </text>
    <text x="752" y="620" font-family="SimHei, Microsoft YaHei, Arial, sans-serif" font-size="14" text-anchor="middle" fill="#666" data-original-font-size="10" style="font-size: 14px;" class="">
      增速14%
    </text>

    <!-- 第二行中央汇聚框 -->
    <rect x="555" y="645" width="240" height="60" fill="#F5DEB3" stroke="#d4a574" stroke-width="1.5"></rect>
    <text x="675" y="664" font-family="SimHei, Microsoft YaHei, Arial, sans-serif" font-size="18.240000000000002" text-anchor="middle" fill="#333" data-original-font-size="12" style="font-size: 18.24px;" class="">
      营收贡献分析
    </text>
    <text x="675" y="683" font-family="SimHei, Microsoft YaHei, Arial, sans-serif" font-size="14" text-anchor="middle" fill="#666" data-original-font-size="11" style="font-size: 14px;" class="">
      信息技术25%最高
    </text>
    <text x="675" y="699" font-family="SimHei, Microsoft YaHei, Arial, sans-serif" font-size="14" text-anchor="middle" fill="#666" data-original-font-size="11" style="font-size: 14px;" class="">
      整体样本12%
    </text>

    <!-- 第三行底部框 -->
    <rect x="530" y="725" width="290" height="85" fill="#FFE4B5" stroke="#d4a574" stroke-width="1.5"></rect>
    <text x="675" y="750" font-family="SimHei, Microsoft YaHei, Arial, sans-serif" font-size="18.240000000000002" font-weight="bold" text-anchor="middle" fill="#333" data-original-font-size="12" style="font-size: 18.24px;">
      行业趋势发现
    </text>
    <text x="675" y="768" font-family="SimHei, Microsoft YaHei, Arial, sans-serif" font-size="14" text-anchor="middle" fill="#666" data-original-font-size="11" style="font-size: 14px;" class="">
      • 半导体行业复苏强劲
    </text>
    <text x="675" y="785" font-family="SimHei, Microsoft YaHei, Arial, sans-serif" font-size="14" text-anchor="middle" fill="#666" data-original-font-size="11" style="font-size: 14px;" class="">
      • 医疗健康全球增长
    </text>
    <text x="675" y="804" font-family="SimHei, Microsoft YaHei, Arial, sans-serif" font-size="14" text-anchor="middle" fill="#666" data-original-font-size="11" style="font-size: 14px;" class="">
      • 能源化工同步收缩
    </text>

    <!-- 连接箭头 -->
    <line x1="597" y1="625" x2="597" y2="645" stroke="#8b6f47" stroke-width="2" marker-end="url(#arrow2)"></line>
    <line x1="752" y1="625" x2="752" y2="645" stroke="#8b6f47" stroke-width="2" marker-end="url(#arrow2)"></line>
    <line x1="675" y1="705" x2="675" y2="725" stroke="#8b6f47" stroke-width="2" marker-end="url(#arrow2)"></line>

    <!-- 路径三：应用优化路径（右侧，纵向递进） -->
    <rect x="870" y="480" width="280" height="350" fill="none" stroke="#6a8d73" stroke-width="2" stroke-dasharray="8,4"></rect>
    
    <rect x="890" y="500" width="240" height="50" fill="#A8D8A8" stroke="#6a8d73" stroke-width="1.5"></rect>
    <text x="1010" y="530" font-family="SimHei, Microsoft YaHei, Arial, sans-serif" font-size="21.28" font-weight="bold" text-anchor="middle" fill="#2c3e50" data-original-font-size="14" style="font-size: 21.28px;">
      路径三：企业行动
    </text>

    <rect x="890" y="570" width="240" height="60" fill="#F5C6A0" stroke="#d4a574" stroke-width="1.5"></rect>
    <text x="1010" y="589" font-family="SimHei, Microsoft YaHei, Arial, sans-serif" font-size="18.240000000000002" text-anchor="middle" fill="#333" data-original-font-size="12" style="font-size: 18.24px;" class="">
      创新合作
    </text>
    <text x="1010" y="607" font-family="SimHei, Microsoft YaHei, Arial, sans-serif" font-size="14" text-anchor="middle" fill="#666" data-original-font-size="10" style="font-size: 14px;" class="">
      英伟达、高通与
    </text>
    <text x="1010" y="623" font-family="SimHei, Microsoft YaHei, Arial, sans-serif" font-size="14" text-anchor="middle" fill="#666" data-original-font-size="10" style="font-size: 14px;" class="">
      中国企业合作
    </text>

    <line x1="1010" y1="630" x2="1010" y2="650" stroke="#6a8d73" stroke-width="2" marker-end="url(#arrow3)"></line>

    <rect x="890" y="650" width="240" height="60" fill="#F5C6A0" stroke="#d4a574" stroke-width="1.5"></rect>
    <text x="1010" y="672" font-family="SimHei, Microsoft YaHei, Arial, sans-serif" font-size="18.240000000000002" text-anchor="middle" fill="#333" data-original-font-size="12" style="font-size: 18.24px;" class="">
      本土化战略
    </text>
    <text x="1010" y="690" font-family="SimHei, Microsoft YaHei, Arial, sans-serif" font-size="14" text-anchor="middle" fill="#666" data-original-font-size="10" style="font-size: 14px;" class="">
      安捷伦、Revvity
    </text>
    <text x="1010" y="706" font-family="SimHei, Microsoft YaHei, Arial, sans-serif" font-size="14" text-anchor="middle" fill="#666" data-original-font-size="10" style="font-size: 14px;" class="">
      深化本土发展
    </text>

    <line x1="1010" y1="710" x2="1010" y2="730" stroke="#6a8d73" stroke-width="2" marker-end="url(#arrow3)"></line>

    <rect x="890" y="730" width="240" height="60" fill="#F5C6A0" stroke="#d4a574" stroke-width="1.5"></rect>
    <text x="1010" y="751" font-family="SimHei, Microsoft YaHei, Arial, sans-serif" font-size="18.240000000000002" text-anchor="middle" fill="#333" data-original-font-size="12" style="font-size: 18.24px;" class="">
      社会责任
    </text>
    <text x="1010" y="770" font-family="SimHei, Microsoft YaHei, Arial, sans-serif" font-size="14" text-anchor="middle" fill="#666" data-original-font-size="10" style="font-size: 14px;" class="">
      礼来、梅特勒
    </text>
    <text x="1010" y="787" font-family="SimHei, Microsoft YaHei, Arial, sans-serif" font-size="14" text-anchor="middle" fill="#666" data-original-font-size="10" style="font-size: 14px;" class="">
      践行企业责任
    </text>
  </g>

  <!-- ========== 第四层：结论层（三角形汇聚结构） ========== -->
  <g id="layer4-conclusion">
    <!-- 左侧标签 -->
    <rect x="60" y="890" width="80" height="150" fill="#D4EDDA" stroke="#6a8d73" stroke-width="2"></rect>
    <text x="100" y="930" font-family="SimHei, Microsoft YaHei, Arial, sans-serif" font-size="22.8" font-weight="bold" text-anchor="middle" fill="#2c5f2d" data-original-font-size="15" style="font-size: 22.8px;">
      研究
    </text>
    <text x="100" y="955" font-family="SimHei, Microsoft YaHei, Arial, sans-serif" font-size="22.8" font-weight="bold" text-anchor="middle" fill="#2c5f2d" data-original-font-size="15" style="font-size: 22.8px;">
      结论
    </text>
    <text x="100" y="980" font-family="SimHei, Microsoft YaHei, Arial, sans-serif" font-size="22.8" font-weight="bold" text-anchor="middle" fill="#2c5f2d" data-original-font-size="15" style="font-size: 22.8px;">
      与
    </text>
    <text x="100" y="1005" font-family="SimHei, Microsoft YaHei, Arial, sans-serif" font-size="22.8" font-weight="bold" text-anchor="middle" fill="#2c5f2d" data-original-font-size="15" style="font-size: 22.8px;">
      展望
    </text>

    <!-- 三个并列结论框 -->
    <rect x="180" y="890" width="280" height="75" fill="#C3E6CB" stroke="#6a8d73" stroke-width="2"></rect>
    <text x="320" y="915" font-family="SimHei, Microsoft YaHei, Arial, sans-serif" font-size="19.76" font-weight="bold" text-anchor="middle" fill="#2c3e50" data-original-font-size="13" style="font-size: 19.76px;">
      市场地位
    </text>
    <text x="320" y="935" font-family="SimHei, Microsoft YaHei, Arial, sans-serif" font-size="16" text-anchor="middle" fill="#333" data-original-font-size="11" style="font-size: 16px;" class="">
      中国市场是推动美国企业
    </text>
    <text x="320" y="957" font-family="SimHei, Microsoft YaHei, Arial, sans-serif" font-size="16" text-anchor="middle" fill="#333" data-original-font-size="11" style="font-size: 16px;" class="">
      全球营收增长的关键引擎
    </text>

    <rect x="490" y="890" width="280" height="75" fill="#C3E6CB" stroke="#6a8d73" stroke-width="2"></rect>
    <text x="630" y="915" font-family="SimHei, Microsoft YaHei, Arial, sans-serif" font-size="19.76" font-weight="bold" text-anchor="middle" fill="#2c3e50" data-original-font-size="13" style="font-size: 19.76px;">
      行业差异
    </text>
    <text x="630" y="936" font-family="SimHei, Microsoft YaHei, Arial, sans-serif" font-size="16" text-anchor="middle" fill="#333" data-original-font-size="11" style="font-size: 16px;" class="">
      信息技术与大消费增长强劲
    </text>
    <text x="630" y="957" font-family="SimHei, Microsoft YaHei, Arial, sans-serif" font-size="16.72" text-anchor="middle" fill="#333" data-original-font-size="11" style="font-size: 16.72px;" class="">
      医疗健康面临调整
    </text>

    <rect x="800" y="890" width="280" height="75" fill="#C3E6CB" stroke="#6a8d73" stroke-width="2"></rect>
    <text x="940" y="915" font-family="SimHei, Microsoft YaHei, Arial, sans-serif" font-size="19.76" font-weight="bold" text-anchor="middle" fill="#2c3e50" data-original-font-size="13" style="font-size: 19.76px;">
      政策影响
    </text>
    <text x="940" y="936" font-family="SimHei, Microsoft YaHei, Arial, sans-serif" font-size="16" text-anchor="middle" fill="#333" data-original-font-size="11" style="font-size: 16px;" class="">
      关税政策对企业价值
    </text>
    <text x="940" y="956" font-family="SimHei, Microsoft YaHei, Arial, sans-serif" font-size="16.72" text-anchor="middle" fill="#333" data-original-font-size="11" style="font-size: 16.72px;" class="">
      产生显著冲击
    </text>

    <!-- 汇聚到底部总结框 -->
    <line x1="320" y1="965" x2="545" y2="1000" stroke="#6a8d73" stroke-width="2" marker-end="url(#arrow3)" class="selected"></line>
    <line x1="628" y1="965" x2="628" y2="1000" stroke="#6a8d73" stroke-width="2" marker-end="url(#arrow3)" class=""></line>
    <line x1="940" y1="965" x2="720" y2="1000" stroke="#6a8d73" stroke-width="2" marker-end="url(#arrow3)"></line>

    <rect x="351" y="1000" width="540" height="50" fill="#A8D8A8" stroke="#6a8d73" stroke-width="2" class=""></rect>
    <text x="627" y="1022" font-family="SimHei, Microsoft YaHei, Arial, sans-serif" font-size="21.28" font-weight="bold" text-anchor="middle" fill="#2c3e50" data-original-font-size="14" style="font-size: 21.28px;" class="">
      投资中国，就是投资未来
    </text>
    <text x="626" y="1042" font-family="SimHei, Microsoft YaHei, Arial, sans-serif" font-size="16.72" text-anchor="middle" fill="#666" data-original-font-size="11" style="font-size: 16.72px;" class="">
      Investing in China is investing in the future
    </text>
  </g>

  <!-- 层级间连接箭头 -->
  
</svg>`
    },
    {
        id: 'shengchangongyi',
        name: '生产工艺流程图',
        description: '展示企业生产工艺',
        svgCode: `<svg width="1200" height="2000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 2000">
  <!-- 定义渐变和滤镜 -->
  <defs>
    <!-- 阴影滤镜 -->
    <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="3"></feGaussianBlur>
      <feOffset dx="2" dy="2" result="offsetblur"></feOffset>
      <feComponentTransfer>
        <feFuncA type="linear" slope="0.3"></feFuncA>
      </feComponentTransfer>
      <feMerge>
        <feMergeNode></feMergeNode>
        <feMergeNode in="SourceGraphic"></feMergeNode>
      </feMerge>
    </filter>
    
    <!-- 箭头标记 -->
    <marker id="arrowMain" markerWidth="12" markerHeight="12" refX="11" refY="6" orient="auto">
      <path d="M0,0 L0,12 L12,6 z" fill="#2C3E50"></path>
    </marker>
    
    <marker id="arrowSub" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto">
      <path d="M0,0 L0,10 L10,5 z" fill="#7F8C8D"></path>
    </marker>
    
    <marker id="arrowDashed" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto">
      <path d="M0,0 L0,10 L10,5 z" fill="#95A5A6"></path>
    </marker>
    
    <!-- 背景渐变 -->
    <linearGradient id="bgGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#E3F2FD;stop-opacity:0.6"></stop>
      <stop offset="100%" style="stop-color:#F3E5F5;stop-opacity:0.6"></stop>
    </linearGradient>
    
    <linearGradient id="bgGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#E8F5E9;stop-opacity:0.6"></stop>
      <stop offset="100%" style="stop-color:#FFF3E0;stop-opacity:0.6"></stop>
    </linearGradient>
    
    <linearGradient id="bgGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#FCE4EC;stop-opacity:0.6"></stop>
      <stop offset="100%" style="stop-color:#E8EAF6;stop-opacity:0.6"></stop>
    </linearGradient>
    
    <linearGradient id="bgGradient4" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#FFF8E1;stop-opacity:0.6"></stop>
      <stop offset="100%" style="stop-color:#E0F2F1;stop-opacity:0.6"></stop>
    </linearGradient>
    
    <linearGradient id="bgGradient5" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#F3E5F5;stop-opacity:0.6"></stop>
      <stop offset="100%" style="stop-color:#FFEBEE;stop-opacity:0.6"></stop>
    </linearGradient>
  </defs>
  
  <!-- 最外层虚线框 -->
  <rect x="20" y="20" width="1160" height="1960" fill="none" stroke="#34495E" stroke-width="3" stroke-dasharray="15,8" rx="15"></rect>
  
  <!-- 主标题 -->
  <rect x="250" y="50" width="700" height="80" fill="#0b66c1" rx="10" filter="url(#dropShadow)" class=""></rect>
  <text x="600" y="100" text-anchor="middle" font-family="Arial, sans-serif" font-size="36" font-weight="bold" fill="white">人工智能药物研发全流程系统</text>
  
  <!-- 左侧输入列 -->
  <g id="leftColumn">
    <!-- 左侧标题 -->
    <rect x="50" y="160" width="180" height="40" fill="#3498DB" rx="8"></rect>
    <text x="140" y="185" text-anchor="middle" font-family="Arial, sans-serif" font-size="20" font-weight="bold" fill="white">输入要素</text>
    
    <!-- 第一层左侧输入 -->
    <g id="leftInput1" transform="translate(50, 240)">
      <rect x="0" y="0" width="180" height="140" fill="#E3F2FD" stroke="#3498DB" stroke-width="2" rx="8"></rect>
      <text x="90" y="25" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#2C3E50">基础数据源</text>
      <rect x="10" y="40" width="160" height="30" fill="#BBDEFB" stroke="#64B5F6" stroke-width="1" rx="5"></rect>
      <text x="90" y="60" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" fill="#1565C0">基因组数据库</text>
      <rect x="10" y="75" width="160" height="30" fill="#BBDEFB" stroke="#64B5F6" stroke-width="1" rx="5"></rect>
      <text x="90" y="95" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" fill="#1565C0">蛋白质结构库</text>
      <rect x="10" y="110" width="160" height="30" fill="#BBDEFB" stroke="#64B5F6" stroke-width="1" rx="5"></rect>
      <text x="90" y="130" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" fill="#1565C0">疾病表型数据</text>
    </g>
    
    <!-- 第二层左侧输入 -->
    <g id="leftInput2" transform="translate(50, 420)">
      <rect x="0" y="0" width="180" height="180" fill="#E8F5E9" stroke="#4CAF50" stroke-width="2" rx="8"></rect>
      <text x="90" y="25" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#2C3E50">设计约束条件</text>
      <rect x="10" y="40" width="160" height="25" fill="#C8E6C9" stroke="#66BB6A" stroke-width="1" rx="5"></rect>
      <text x="90" y="58" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" fill="#2E7D32">ADMET特性要求</text>
      <rect x="10" y="70" width="160" height="25" fill="#C8E6C9" stroke="#66BB6A" stroke-width="1" rx="5"></rect>
      <text x="90" y="88" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" fill="#2E7D32">合成可行性</text>
      <rect x="10" y="100" width="160" height="25" fill="#C8E6C9" stroke="#66BB6A" stroke-width="1" rx="5"></rect>
      <text x="90" y="118" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" fill="#2E7D32">专利规避策略</text>
      <rect x="10" y="130" width="160" height="25" fill="#C8E6C9" stroke="#66BB6A" stroke-width="1" rx="5"></rect>
      <text x="90" y="148" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" fill="#2E7D32">成本控制参数</text>
    </g>
    
    <!-- 第三层左侧输入 -->
    <g id="leftInput3" transform="translate(50, 640)">
      <rect x="0" y="0" width="180" height="220" fill="#FCE4EC" stroke="#E91E63" stroke-width="2" rx="8"></rect>
      <text x="90" y="25" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#2C3E50">计算资源</text>
      <rect x="10" y="40" width="160" height="25" fill="#F8BBD0" stroke="#F06292" stroke-width="1" rx="5"></rect>
      <text x="90" y="58" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" fill="#880E4F">GPU集群</text>
      <rect x="10" y="70" width="160" height="25" fill="#F8BBD0" stroke="#F06292" stroke-width="1" rx="5"></rect>
      <text x="90" y="88" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" fill="#880E4F">分子动力学软件</text>
      <rect x="10" y="100" width="160" height="25" fill="#F8BBD0" stroke="#F06292" stroke-width="1" rx="5"></rect>
      <text x="90" y="118" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" fill="#880E4F">量子化学计算</text>
      <rect x="10" y="130" width="160" height="25" fill="#F8BBD0" stroke="#F06292" stroke-width="1" rx="5"></rect>
      <text x="90" y="148" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" fill="#880E4F">云计算平台</text>
      <rect x="10" y="160" width="160" height="25" fill="#F8BBD0" stroke="#F06292" stroke-width="1" rx="5"></rect>
      <text x="90" y="178" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" fill="#880E4F">深度学习框架</text>
      <rect x="10" y="190" width="160" height="25" fill="#F8BBD0" stroke="#F06292" stroke-width="1" rx="5"></rect>
      <text x="90" y="208" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" fill="#880E4F">并行计算优化</text>
    </g>
    
    <!-- 第四层左侧输入 -->
    <g id="leftInput4" transform="translate(50, 900)">
      <rect x="0" y="0" width="180" height="160" fill="#FFF8E1" stroke="#FFC107" stroke-width="2" rx="8"></rect>
      <text x="90" y="25" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#2C3E50">实验条件</text>
      <rect x="10" y="40" width="160" height="25" fill="#FFF3C7" stroke="#FFB300" stroke-width="1" rx="5"></rect>
      <text x="90" y="58" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" fill="#F57C00">高通量筛选平台</text>
      <rect x="10" y="70" width="160" height="25" fill="#FFF3C7" stroke="#FFB300" stroke-width="1" rx="5"></rect>
      <text x="90" y="88" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" fill="#F57C00">细胞系库</text>
      <rect x="10" y="100" width="160" height="25" fill="#FFF3C7" stroke="#FFB300" stroke-width="1" rx="5"></rect>
      <text x="90" y="118" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" fill="#F57C00">动物模型</text>
      <rect x="10" y="130" width="160" height="25" fill="#FFF3C7" stroke="#FFB300" stroke-width="1" rx="5"></rect>
      <text x="90" y="148" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" fill="#F57C00">分析仪器</text>
    </g>
    
    <!-- 第五层左侧输入 -->
    <g id="leftInput5" transform="translate(50, 1100)">
      <rect x="0" y="0" width="180" height="140" fill="#F3E5F5" stroke="#9C27B0" stroke-width="2" rx="8"></rect>
      <text x="90" y="25" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#2C3E50">监管要求</text>
      <rect x="10" y="40" width="160" height="25" fill="#E1BEE7" stroke="#BA68C8" stroke-width="1" rx="5"></rect>
      <text x="90" y="58" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" fill="#6A1B9A">FDA指导原则</text>
      <rect x="10" y="70" width="160" height="25" fill="#E1BEE7" stroke="#BA68C8" stroke-width="1" rx="5"></rect>
      <text x="90" y="88" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" fill="#6A1B9A">GLP标准</text>
      <rect x="10" y="100" width="160" height="25" fill="#E1BEE7" stroke="#BA68C8" stroke-width="1" rx="5"></rect>
      <text x="90" y="118" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" fill="#6A1B9A">伦理审查要求</text>
    </g>
  </g>
  
  <!-- 中间主流程 -->
  <g id="mainProcess">
    <!-- 第一层：数据准备与预处理 -->
    <g id="layer1" transform="translate(280, 240)">
      <rect x="0" y="0" width="640" height="140" fill="url(#bgGradient1)" stroke="#3498DB" stroke-width="2" stroke-dasharray="10,5" rx="10"></rect>
      <rect x="10" y="10" width="620" height="30" fill="#3498DB" rx="5"></rect>
      <text x="320" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="white">第一层：数据准备与预处理</text>
      
      <!-- 内部模块 -->
      <rect x="20" y="50" width="140" height="70" fill="#90CAF9" stroke="#1976D2" stroke-width="2" rx="5"></rect>
      <text x="90" y="75" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" fill="#0D47A1">数据清洗</text>
      <text x="90" y="95" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#0D47A1">去噪/标准化</text>
      
      <line x1="160" y1="85" x2="190" y2="85" stroke="#1976D2" stroke-width="2" marker-end="url(#arrowSub)"></line>
      
      <rect x="190" y="50" width="140" height="70" fill="#90CAF9" stroke="#1976D2" stroke-width="2" rx="5"></rect>
      <text x="260" y="75" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" fill="#0D47A1">特征提取</text>
      <text x="260" y="95" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#0D47A1">分子描述符</text>
      
      <line x1="330" y1="85" x2="360" y2="85" stroke="#1976D2" stroke-width="2" marker-end="url(#arrowSub)"></line>
      
      <rect x="360" y="50" width="140" height="70" fill="#90CAF9" stroke="#1976D2" stroke-width="2" rx="5"></rect>
      <text x="430" y="75" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" fill="#0D47A1">数据融合</text>
      <text x="430" y="95" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#0D47A1">多源整合</text>
    </g>
    
    <!-- 层间箭头1 -->
    <g transform="translate(590, 380)">
      <rect x="-20" y="0" width="40" height="40" fill="#2C3E50" rx="5"></rect>
      <polygon points="0,40 -15,40 0,60 15,40 0,40" fill="#2C3E50"></polygon>
      <line x1="0" y1="10" x2="0" y2="30" stroke="white" stroke-width="3"></line>
      <polygon points="0,30 -5,20 5,20" fill="white"></polygon>
    </g>
    
    <!-- 第二层：分子设计与筛选 -->
    <g id="layer2" transform="translate(280, 420)">
      <rect x="0" y="0" width="640" height="180" fill="url(#bgGradient2)" stroke="#4CAF50" stroke-width="2" stroke-dasharray="10,5" rx="10"></rect>
      <rect x="10" y="10" width="620" height="30" fill="#4CAF50" rx="5"></rect>
      <text x="320" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="white">第二层：分子设计与筛选（循环优化）</text>
      
      <!-- 复杂的循环流程 -->
      <rect x="20" y="50" width="120" height="60" fill="#A5D6A7" stroke="#388E3C" stroke-width="2" rx="5"></rect>
      <text x="80" y="75" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" fill="#1B5E20">生成模型</text>
      <text x="80" y="90" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#1B5E20">VAE/GAN</text>
      
      <line x1="140" y1="80" x2="160" y2="80" stroke="#388E3C" stroke-width="2" marker-end="url(#arrowSub)"></line>
      
      <rect x="160" y="50" width="120" height="60" fill="#A5D6A7" stroke="#388E3C" stroke-width="2" rx="5"></rect>
      <text x="220" y="75" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" fill="#1B5E20">分子优化</text>
      <text x="220" y="90" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#1B5E20">强化学习</text>
      
      <line x1="280" y1="80" x2="300" y2="80" stroke="#388E3C" stroke-width="2" marker-end="url(#arrowSub)"></line>
      
      <rect x="300" y="50" width="120" height="60" fill="#A5D6A7" stroke="#388E3C" stroke-width="2" rx="5"></rect>
      <text x="360" y="75" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" fill="#1B5E20">属性预测</text>
      <text x="360" y="90" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#1B5E20">深度网络</text>
      
      <line x1="420" y1="80" x2="440" y2="80" stroke="#388E3C" stroke-width="2" marker-end="url(#arrowSub)"></line>
      
      <rect x="440" y="50" width="120" height="60" fill="#A5D6A7" stroke="#388E3C" stroke-width="2" rx="5"></rect>
      <text x="500" y="75" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" fill="#1B5E20" class="">打分排序</text>
      <text x="500" y="90" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#1B5E20">多目标优化</text>
      
      <!-- 反馈循环 -->
      <path d="M 500 110 Q 500 150, 290 150 Q 80 150, 80 110" fill="none" stroke="#388E3C" stroke-width="2" stroke-dasharray="5,3" marker-end="url(#arrowDashed)"></path>
      <text x="290" y="145" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#388E3C">迭代优化</text>
    </g>
    
    <!-- 层间箭头2 -->
    <g transform="translate(590, 600)">
      <rect x="-20" y="0" width="40" height="40" fill="#2C3E50" rx="5"></rect>
      <polygon points="0,40 -15,40 0,60 15,40 0,40" fill="#2C3E50"></polygon>
      <line x1="0" y1="10" x2="0" y2="30" stroke="white" stroke-width="3"></line>
      <polygon points="0,30 -5,20 5,20" fill="white"></polygon>
    </g>
    
    <!-- 第三层：虚拟验证与优化 -->
    <g id="layer3" transform="translate(280, 640)">
      <rect x="0" y="0" width="640" height="220" fill="url(#bgGradient3)" stroke="#E91E63" stroke-width="2" stroke-dasharray="10,5" rx="10"></rect>
      <rect x="10" y="10" width="620" height="30" fill="#E91E63" rx="5"></rect>
      <text x="320" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="white">第三层：虚拟验证与优化（多分支并行）</text>
      
      <!-- 并行处理分支 -->
      <g id="branch1">
        <rect x="20" y="50" width="180" height="40" fill="#F48FB1" stroke="#C2185B" stroke-width="2" rx="5"></rect>
        <text x="110" y="75" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" fill="#880E4F">分子对接模拟</text>
        
        <rect x="20" y="95" width="180" height="40" fill="#F48FB1" stroke="#C2185B" stroke-width="2" rx="5"></rect>
        <text x="110" y="120" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" fill="#880E4F">分子动力学模拟</text>
      </g>
      
      <g id="branch2">
        <rect x="220" y="50" width="180" height="40" fill="#F48FB1" stroke="#C2185B" stroke-width="2" rx="5"></rect>
        <text x="310" y="75" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" fill="#880E4F">自由能计算</text>
        
        <rect x="220" y="95" width="180" height="40" fill="#F48FB1" stroke="#C2185B" stroke-width="2" rx="5"></rect>
        <text x="310" y="120" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" fill="#880E4F">结合模式分析</text>
      </g>
      
      <g id="branch3">
        <rect x="420" y="50" width="180" height="40" fill="#F48FB1" stroke="#C2185B" stroke-width="2" rx="5"></rect>
        <text x="510" y="75" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" fill="#880E4F">ADMET预测</text>
        
        <rect x="420" y="95" width="180" height="40" fill="#F48FB1" stroke="#C2185B" stroke-width="2" rx="5"></rect>
        <text x="510" y="120" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" fill="#880E4F">毒性评估</text>
      </g>
      
      <!-- 汇聚节点 -->
      <line x1="110" y1="135" x2="310" y2="160" stroke="#C2185B" stroke-width="2"></line>
      <line x1="310" y1="135" x2="310" y2="160" stroke="#C2185B" stroke-width="2"></line>
      <line x1="510" y1="135" x2="310" y2="160" stroke="#C2185B" stroke-width="2"></line>
      
      <circle cx="310" cy="160" r="20" fill="#E91E63" stroke="#880E4F" stroke-width="2"></circle>
      <text x="310" y="166" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="white">综合</text>
      
      <rect x="240" y="185" width="140" height="30" fill="#F48FB1" stroke="#C2185B" stroke-width="2" rx="5"></rect>
      <text x="310" y="204" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" fill="#880E4F">候选分子确定</text>
    </g>
    
    <!-- 层间箭头3 -->
    <g transform="translate(590, 860)">
      <rect x="-20" y="0" width="40" height="40" fill="#2C3E50" rx="5"></rect>
      <polygon points="0,40 -15,40 0,60 15,40 0,40" fill="#2C3E50"></polygon>
      <line x1="0" y1="10" x2="0" y2="30" stroke="white" stroke-width="3"></line>
      <polygon points="0,30 -5,20 5,20" fill="white"></polygon>
    </g>
    
    <!-- 第四层：实验验证 -->
    <g id="layer4" transform="translate(280, 900)">
      <rect x="0" y="0" width="640" height="160" fill="url(#bgGradient4)" stroke="#FFC107" stroke-width="2" stroke-dasharray="10,5" rx="10"></rect>
      <rect x="10" y="10" width="620" height="30" fill="#FFC107" rx="5"></rect>
      <text x="320" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="white">第四层：实验验证</text>
      
      <!-- 线性流程 -->
      <rect x="20" y="50" width="140" height="90" fill="#FFE082" stroke="#F57C00" stroke-width="2" rx="5"></rect>
      <text x="90" y="75" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" fill="#E65100">体外活性测试</text>
      <text x="90" y="92" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#E65100">IC50/EC50</text>
      <text x="90" y="108" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#E65100">选择性测试</text>
      <text x="90" y="124" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#E65100">机制验证</text>
      
      <line x1="160" y1="95" x2="180" y2="95" stroke="#F57C00" stroke-width="2" marker-end="url(#arrowSub)"></line>
      
      <rect x="180" y="50" width="140" height="90" fill="#FFE082" stroke="#F57C00" stroke-width="2" rx="5"></rect>
      <text x="250" y="75" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" fill="#E65100">体内药效评价</text>
      <text x="250" y="92" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#E65100">药代动力学</text>
      <text x="250" y="108" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#E65100">药效学研究</text>
      <text x="250" y="124" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#E65100">组织分布</text>
      
      <line x1="320" y1="95" x2="340" y2="95" stroke="#F57C00" stroke-width="2" marker-end="url(#arrowSub)"></line>
      
      <rect x="340" y="50" width="140" height="90" fill="#FFE082" stroke="#F57C00" stroke-width="2" rx="5"></rect>
      <text x="410" y="75" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" fill="#E65100">安全性评价</text>
      <text x="410" y="92" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#E65100">急性毒性</text>
      <text x="410" y="108" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#E65100">慢性毒性</text>
      <text x="410" y="124" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#E65100">特殊毒性</text>
      
      <line x1="480" y1="95" x2="500" y2="95" stroke="#F57C00" stroke-width="2" marker-end="url(#arrowSub)"></line>
      
      <rect x="500" y="50" width="120" height="90" fill="#FFE082" stroke="#F57C00" stroke-width="2" rx="5"></rect>
      <text x="560" y="75" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" fill="#E65100">先导化合物</text>
      <text x="560" y="92" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#E65100">优化确认</text>
      <text x="560" y="108" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#E65100">构效关系</text>
      <text x="560" y="124" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#E65100">成药性评价</text>
    </g>
    
    <!-- 层间箭头4 -->
    <g transform="translate(590, 1060)">
      <rect x="-20" y="0" width="40" height="40" fill="#2C3E50" rx="5"></rect>
      <polygon points="0,40 -15,40 0,60 15,40 0,40" fill="#2C3E50"></polygon>
      <line x1="0" y1="10" x2="0" y2="30" stroke="white" stroke-width="3"></line>
      <polygon points="0,30 -5,20 5,20" fill="white"></polygon>
    </g>
    
    <!-- 第五层：临床前评估 -->
    <g id="layer5" transform="translate(280, 1100)">
      <rect x="0" y="0" width="640" height="140" fill="url(#bgGradient5)" stroke="#9C27B0" stroke-width="2" stroke-dasharray="10,5" rx="10"></rect>
      <rect x="10" y="10" width="620" height="30" fill="#9C27B0" rx="5"></rect>
      <text x="320" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="white">第五层：临床前评估</text>
      
      <!-- 简单流程 -->
      <rect x="50" y="50" width="160" height="70" fill="#CE93D8" stroke="#6A1B9A" stroke-width="2" rx="5"></rect>
      <text x="130" y="75" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" fill="#4A148C">CMC研究</text>
      <text x="130" y="95" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#4A148C">制剂开发</text>
      
      <line x1="210" y1="85" x2="240" y2="85" stroke="#6A1B9A" stroke-width="2" marker-end="url(#arrowSub)"></line>
      
      <rect x="240" y="50" width="160" height="70" fill="#CE93D8" stroke="#6A1B9A" stroke-width="2" rx="5"></rect>
      <text x="320" y="75" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" fill="#4A148C">IND申报准备</text>
      <text x="320" y="95" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#4A148C">文档整理</text>
      
      <line x1="400" y1="85" x2="430" y2="85" stroke="#6A1B9A" stroke-width="2" marker-end="url(#arrowSub)"></line>
      
      <rect x="430" y="50" width="160" height="70" fill="#CE93D8" stroke="#6A1B9A" stroke-width="2" rx="5"></rect>
      <text x="510" y="75" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" fill="#4A148C">临床试验设计</text>
      <text x="510" y="95" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#4A148C">方案制定</text>
    </g>
  </g>
  
  <!-- 右侧输出列 -->
  <g id="rightColumn">
    <!-- 右侧标题 -->
    <rect x="970" y="160" width="180" height="40" fill="#E74C3C" rx="8"></rect>
    <text x="1060" y="185" text-anchor="middle" font-family="Arial, sans-serif" font-size="20" font-weight="bold" fill="white">输出成果</text>
    
    <!-- 第一层右侧输出 -->
    <g id="rightOutput1" transform="translate(970, 240)">
      <rect x="0" y="0" width="180" height="140" fill="#FFEBEE" stroke="#E74C3C" stroke-width="2" rx="8"></rect>
      <text x="90" y="25" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#2C3E50">标准化数据集</text>
      <rect x="10" y="40" width="160" height="25" fill="#FFCDD2" stroke="#EF5350" stroke-width="1" rx="5"></rect>
      <text x="90" y="58" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" fill="#B71C1C">结构化数据库</text>
      <rect x="10" y="70" width="160" height="25" fill="#FFCDD2" stroke="#EF5350" stroke-width="1" rx="5"></rect>
      <text x="90" y="88" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" fill="#B71C1C">知识图谱</text>
      <rect x="10" y="100" width="160" height="25" fill="#FFCDD2" stroke="#EF5350" stroke-width="1" rx="5"></rect>
      <text x="90" y="118" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" fill="#B71C1C">特征向量库</text>
    </g>
    
    <!-- 第二层右侧输出 -->
    <g id="rightOutput2" transform="translate(970, 420)">
      <rect x="0" y="0" width="180" height="180" fill="#FFF3E0" stroke="#FF9800" stroke-width="2" rx="8"></rect>
      <text x="90" y="25" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#2C3E50">候选分子库</text>
      <rect x="10" y="40" width="160" height="25" fill="#FFE0B2" stroke="#FB8C00" stroke-width="1" rx="5"></rect>
      <text x="90" y="58" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" fill="#E65100">新颖分子结构</text>
      <rect x="10" y="70" width="160" height="25" fill="#FFE0B2" stroke="#FB8C00" stroke-width="1" rx="5"></rect>
      <text x="90" y="88" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" fill="#E65100">活性预测值</text>
      <rect x="10" y="100" width="160" height="25" fill="#FFE0B2" stroke="#FB8C00" stroke-width="1" rx="5"></rect>
      <text x="90" y="118" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" fill="#E65100">理化性质报告</text>
      <rect x="10" y="130" width="160" height="25" fill="#FFE0B2" stroke="#FB8C00" stroke-width="1" rx="5"></rect>
      <text x="90" y="148" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" fill="#E65100">合成路径建议</text>
    </g>
    
    <!-- 第三层右侧输出 -->
    <g id="rightOutput3" transform="translate(970, 640)">
      <rect x="0" y="0" width="180" height="220" fill="#E8F5E9" stroke="#4CAF50" stroke-width="2" rx="8"></rect>
      <text x="90" y="25" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#2C3E50">计算验证报告</text>
      <rect x="10" y="40" width="160" height="25" fill="#C8E6C9" stroke="#66BB6A" stroke-width="1" rx="5"></rect>
      <text x="90" y="58" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#2E7D32">结合能数据</text>
      <rect x="10" y="70" width="160" height="25" fill="#C8E6C9" stroke="#66BB6A" stroke-width="1" rx="5"></rect>
      <text x="90" y="88" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#2E7D32">作用机制模型</text>
      <rect x="10" y="100" width="160" height="25" fill="#C8E6C9" stroke="#66BB6A" stroke-width="1" rx="5"></rect>
      <text x="90" y="118" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#2E7D32">选择性分析</text>
      <rect x="10" y="130" width="160" height="25" fill="#C8E6C9" stroke="#66BB6A" stroke-width="1" rx="5"></rect>
      <text x="90" y="148" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#2E7D32">ADMET预测表</text>
      <rect x="10" y="160" width="160" height="25" fill="#C8E6C9" stroke="#66BB6A" stroke-width="1" rx="5"></rect>
      <text x="90" y="178" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#2E7D32">风险评估报告</text>
      <rect x="10" y="190" width="160" height="25" fill="#C8E6C9" stroke="#66BB6A" stroke-width="1" rx="5"></rect>
      <text x="90" y="208" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#2E7D32">优化建议</text>
    </g>
    
    <!-- 第四层右侧输出 -->
    <g id="rightOutput4" transform="translate(970, 900)">
      <rect x="0" y="0" width="180" height="160" fill="#E3F2FD" stroke="#2196F3" stroke-width="2" rx="8"></rect>
      <text x="90" y="25" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#2C3E50">实验数据包</text>
      <rect x="10" y="40" width="160" height="25" fill="#BBDEFB" stroke="#42A5F5" stroke-width="1" rx="5"></rect>
      <text x="90" y="58" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" fill="#0D47A1">生物活性数据</text>
      <rect x="10" y="70" width="160" height="25" fill="#BBDEFB" stroke="#42A5F5" stroke-width="1" rx="5"></rect>
      <text x="90" y="88" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" fill="#0D47A1">PK/PD参数</text>
      <rect x="10" y="100" width="160" height="25" fill="#BBDEFB" stroke="#42A5F5" stroke-width="1" rx="5"></rect>
      <text x="90" y="118" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" fill="#0D47A1">安全性报告</text>
      <rect x="10" y="130" width="160" height="25" fill="#BBDEFB" stroke="#42A5F5" stroke-width="1" rx="5"></rect>
      <text x="90" y="148" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" fill="#0D47A1">先导物确认</text>
    </g>
    
    <!-- 第五层右侧输出 -->
    <g id="rightOutput5" transform="translate(970, 1100)">
      <rect x="0" y="0" width="180" height="140" fill="#FCE4EC" stroke="#E91E63" stroke-width="2" rx="8"></rect>
      <text x="90" y="25" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#2C3E50">IND申请文件</text>
      <rect x="10" y="40" width="160" height="25" fill="#F8BBD0" stroke="#EC407A" stroke-width="1" rx="5"></rect>
      <text x="90" y="58" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" fill="#880E4F">药学研究资料</text>
      <rect x="10" y="70" width="160" height="25" fill="#F8BBD0" stroke="#EC407A" stroke-width="1" rx="5"></rect>
      <text x="90" y="88" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" fill="#880E4F">毒理研究报告</text>
      <rect x="10" y="100" width="160" height="25" fill="#F8BBD0" stroke="#EC407A" stroke-width="1" rx="5"></rect>
      <text x="90" y="118" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" fill="#880E4F">临床试验方案</text>
    </g>
  </g>
  
  <!-- 连接线：左侧到中间 -->
  <line x1="230" y1="310" x2="280" y2="310" stroke="#3498DB" stroke-width="2" marker-end="url(#arrowMain)"></line>
  <line x1="230" y1="510" x2="280" y2="510" stroke="#4CAF50" stroke-width="2" marker-end="url(#arrowMain)"></line>
  <line x1="230" y1="750" x2="280" y2="750" stroke="#E91E63" stroke-width="2" marker-end="url(#arrowMain)"></line>
  <line x1="230" y1="980" x2="280" y2="980" stroke="#FFC107" stroke-width="2" marker-end="url(#arrowMain)"></line>
  <line x1="230" y1="1170" x2="280" y2="1170" stroke="#9C27B0" stroke-width="2" marker-end="url(#arrowMain)"></line>
  
  <!-- 连接线：中间到右侧 -->
  <line x1="920" y1="310" x2="970" y2="310" stroke="#3498DB" stroke-width="2" marker-end="url(#arrowMain)"></line>
  <line x1="920" y1="510" x2="970" y2="510" stroke="#FF9800" stroke-width="2" marker-end="url(#arrowMain)"></line>
  <line x1="920" y1="750" x2="970" y2="750" stroke="#4CAF50" stroke-width="2" marker-end="url(#arrowMain)"></line>
  <line x1="920" y1="980" x2="970" y2="980" stroke="#2196F3" stroke-width="2" marker-end="url(#arrowMain)"></line>
  <line x1="920" y1="1170" x2="970" y2="1170" stroke="#E91E63" stroke-width="2" marker-end="url(#arrowMain)"></line>
  
  <!-- 底部总结框 -->
  <g id="summary" transform="translate(200, 1280)">
    <rect x="0" y="0" width="800" height="120" fill="#ECEFF1" stroke="#607D8B" stroke-width="3" rx="10"></rect>
    <rect x="10" y="10" width="780" height="40" fill="#607D8B" rx="5"></rect>
    <text x="400" y="35" text-anchor="middle" font-family="Arial, sans-serif" font-size="20" font-weight="bold" fill="white">AI药物研发平台核心价值</text>
    
    <g transform="translate(20, 60)">
      <rect x="0" y="0" width="180" height="50" fill="#CFD8DC" stroke="#455A64" stroke-width="1" rx="5"></rect>
      <text x="90" y="20" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" fill="#263238">研发周期缩短</text>
      <text x="90" y="38" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" fill="#37474F">10-15年→3-5年</text>
      
      <rect x="200" y="0" width="180" height="50" fill="#CFD8DC" stroke="#455A64" stroke-width="1" rx="5"></rect>
      <text x="290" y="20" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" fill="#263238">成功率提升</text>
      <text x="290" y="38" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" fill="#37474F">5%→15-20%</text>
      
      <rect x="400" y="0" width="180" height="50" fill="#CFD8DC" stroke="#455A64" stroke-width="1" rx="5"></rect>
      <text x="490" y="20" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" fill="#263238">成本节约</text>
      <text x="490" y="38" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" fill="#37474F">减少60-70%</text>
      
      <rect x="600" y="0" width="160" height="50" fill="#CFD8DC" stroke="#455A64" stroke-width="1" rx="5"></rect>
      <text x="680" y="20" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" fill="#263238">新靶点发现</text>
      <text x="680" y="38" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" fill="#37474F">效率提升10倍</text>
    </g>
  </g>
  
  <!-- 技术栈标注 -->
  <g id="techStack" transform="translate(50, 1430)">
    <rect x="0" y="0" width="1100" height="100" fill="#F5F5F5" stroke="#9E9E9E" stroke-width="2" stroke-dasharray="5,3" rx="8"></rect>
    <text x="550" y="25" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#424242">核心技术栈</text>
    
    <g transform="translate(50, 40)">
      <rect x="0" y="0" width="150" height="40" fill="#E1BEE7" stroke="#7B1FA2" stroke-width="1" rx="5"></rect>
      <text x="75" y="26" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" fill="#4A148C">深度学习框架</text>
      
      <rect x="170" y="0" width="150" height="40" fill="#C5E1A5" stroke="#558B2F" stroke-width="1" rx="5"></rect>
      <text x="245" y="26" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" fill="#33691E">分子模拟软件</text>
      
      <rect x="340" y="0" width="150" height="40" fill="#FFCCBC" stroke="#D84315" stroke-width="1" rx="5"></rect>
      <text x="415" y="26" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" fill="#BF360C">化学信息学</text>
      
      <rect x="510" y="0" width="150" height="40" fill="#B2DFDB" stroke="#00796B" stroke-width="1" rx="5"></rect>
      <text x="585" y="26" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" fill="#004D40">高性能计算</text>
      
      <rect x="680" y="0" width="150" height="40" fill="#D7CCC8" stroke="#5D4037" stroke-width="1" rx="5"></rect>
      <text x="755" y="26" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" fill="#3E2723">数据管理系统</text>
      
      <rect x="850" y="0" width="150" height="40" fill="#FFCDD2" stroke="#C62828" stroke-width="1" rx="5"></rect>
      <text x="925" y="26" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" fill="#B71C1C">自动化平台</text>
    </g>
  </g>
  
  <!-- 时间线 -->
  <g id="timeline" transform="translate(100, 1570)">
    <text x="500" y="20" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#37474F">典型项目时间线</text>
    
    <line x1="50" y1="50" x2="950" y2="50" stroke="#546E7A" stroke-width="3"></line>
    
    <!-- 时间点标记 -->
    <g transform="translate(50, 50)">
      <circle cx="0" cy="0" r="8" fill="#1976D2"></circle>
      <text x="0" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#263238">0月</text>
      <text x="0" y="-15" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#37474F">项目启动</text>
    </g>
    
    <g transform="translate(250, 50)">
      <circle cx="0" cy="0" r="8" fill="#388E3C"></circle>
      <text x="0" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#263238">3月</text>
      <text x="0" y="-15" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#37474F">数据准备</text>
    </g>
    
    <g transform="translate(450, 50)">
      <circle cx="0" cy="0" r="8" fill="#7B1FA2"></circle>
      <text x="0" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#263238">6月</text>
      <text x="0" y="-15" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#37474F">分子设计</text>
    </g>
    
    <g transform="translate(650, 50)">
      <circle cx="0" cy="0" r="8" fill="#F57C00"></circle>
      <text x="0" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#263238">12月</text>
      <text x="0" y="-15" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#37474F">实验验证</text>
    </g>
    
    <g transform="translate(850, 50)">
      <circle cx="0" cy="0" r="8" fill="#C62828"></circle>
      <text x="0" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#263238">24月</text>
      <text x="0" y="-15" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#37474F">IND申报</text>
    </g>
    
    <g transform="translate(950, 50)">
      <circle cx="0" cy="0" r="8" fill="#00796B"></circle>
      <text x="0" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#263238">36月</text>
      <text x="0" y="-15" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#37474F">临床试验</text>
    </g>
  </g>
  
  <!-- 风险提示 -->
  <g id="riskWarning" transform="translate(150, 1700)">
    <rect x="0" y="0" width="900" height="80" fill="#FFF3E0" stroke="#FF6F00" stroke-width="2" stroke-dasharray="8,4" rx="8"></rect>
    <path d="M 30 20 L 50 50 L 10 50 Z" fill="#FF6F00"></path>
    <text x="35" y="48" text-anchor="middle" font-family="Arial, sans-serif" font-size="20" font-weight="bold" fill="white">!</text>
    <text x="70" y="35" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#E65100">关键风险点</text>
    <text x="70" y="55" font-family="Arial, sans-serif" font-size="14" fill="#F57C00">
      数据质量影响预测准确性 | 模型泛化能力需持续验证 | 实验验证仍是必要环节 | 监管合规要求严格
    </text>
  </g>
  
  <!-- 页脚信息 -->
  <g id="footer" transform="translate(100, 1820)">
    <text x="500" y="20" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#607D8B">
      * 本流程图展示了AI药物研发的典型阶段，实际项目可能因具体情况有所调整
    </text>
    <text x="500" y="40" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#607D8B">
      * 各阶段间存在迭代和反馈，并非严格线性推进
    </text>
    <text x="500" y="60" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#90A4AE">
      生成时间：2025年 | 版本：v1.0 | 更新频率：季度
    </text>
  </g>
  
  <!-- 版权标识 -->
  <g id="copyright" transform="translate(980, 1910)">
    <text x="-379" y="-10" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#B0BEC5" class="selected">
      © 2025 AI药物研发系统
    </text>
  </g>
</svg>

`
    },
    {
        id: 'luojibihuan',
        name: '关系逻辑闭环图',
        description: '展示整体思路的多维关系及逻辑闭环',
        svgCode: `<svg width="850" height="850" viewBox="0 0 850 850" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Markers -->
    <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="#333"></path>
    </marker>
    <marker id="arrow-large" markerWidth="12" markerHeight="12" refX="10" refY="4" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,8 L12,4 z" fill="#333"></path>
    </marker>
    
    <!-- Styles -->
    <style>
      .main-circle { fill: #f2f4f7; stroke: #333; stroke-width: 2; }
      .label-box { fill: #eef5f5; stroke: #666; stroke-width: 1; }
      .dashed-line { stroke: #999; stroke-width: 2; stroke-dasharray: 5,5; fill: none; }
      .outer-dashed-circle { stroke: #ccc; stroke-width: 8; stroke-dasharray: 10,10; fill: none; }
      .axis-line { stroke: #333; stroke-width: 2; }
      
      /* Fonts */
      .text-main-title { font-family: "Microsoft YaHei", SimHei, sans-serif; font-weight: bold; font-size: 24px; text-anchor: middle; fill: #000; }
      .text-title { font-family: "Microsoft YaHei", SimHei, sans-serif; font-weight: bold; font-size: 18px; text-anchor: middle; fill: #000; }
      .text-list { font-family: "Microsoft YaHei", SimHei, sans-serif; font-size: 12px; fill: #333; }
      .text-small { font-family: "Microsoft YaHei", SimHei, sans-serif; font-size: 12px; text-anchor: middle; fill: #333; }
      .text-axis { font-family: "Microsoft YaHei", SimHei, sans-serif; font-size: 11px; font-weight: bold; fill: #333; }
      
      /* Outer Environment Text */
      .text-env { font-family: "Microsoft YaHei", SimHei, sans-serif; font-weight: bold; font-size: 16px; fill: #444; text-anchor: middle;}
      .text-outer-arc { font-family: "Microsoft YaHei", SimHei, sans-serif; font-weight: bold; font-size: 18px; fill: #333; text-anchor: middle;}
    </style>
  </defs>

  <!-- Background -->
  <rect width="850" height="850" fill="white"></rect>

  <!-- Center Reference for Calculation: 425, 425 -->

  <!-- ==================== PART 2: OUTER LAYERS ==================== -->

  <!-- 1. Outer Dashed Circle -->
  <circle cx="425" cy="425" r="340" class="outer-dashed-circle"></circle>

  <!-- 2. Outer System Titles -->
  <!-- Top -->
  <text x="425" y="50" class="text-main-title" style="opacity: 1;">模具产业生态研究</text>
  <!-- Bottom -->
  <text x="425" y="810" class="text-main-title" style="opacity: 1;">模具产业集群生态</text>
  <!-- Left (Vertical) -->
  <text x="50" y="425" class="text-main-title" writing-mode="tb" letter-spacing="5">园区运营生态</text>
  <!-- Right (Vertical) -->
  <text x="800" y="425" class="text-main-title" writing-mode="tb" letter-spacing="5">项目实施生态</text>

  <!-- 3. Quadrant Environment Labels (Rotated inside the dashed circle) -->
  <!-- Top-Left: 数据处理环境 -->
  <g transform="translate(250, 250) rotate(-45)">
    <text x="0" y="0" class="text-env">产业政策环境</text>
  </g>
  <!-- Top-Right: 网络连接环境 -->
  <g transform="translate(600, 250) rotate(45)">
    <text x="0" y="0" class="text-env">技术创新环境</text>
  </g>
  <!-- Bottom-Right: 用户体验环境 -->
  <g transform="translate(600, 600) rotate(-45)">
    <text x="0" y="0" class="text-env">市场应用环境</text>
  </g>
  <!-- Bottom-Left: 业务执行环境 -->
  <g transform="translate(250, 600) rotate(45)">
    <text x="0" y="0" class="text-env">人才资源环境</text>
  </g>

  <!-- 4. Outer Arcs & Arrows (Clockwise Flow) -->
  <!-- Top-Left: GUI/Data -> Top (Transfer Data) -->
  <path d="M 150,350 A 380,380 0 0 1 350,150" fill="none" stroke="#333" stroke-width="3" marker-end="url(#arrow-large)"></path>
  <text x="180" y="245" class="text-outer-arc selected" transform="translate(180,220) rotate(-45) translate(-180,-220)">政策驱动</text>

  <!-- Top-Right: Top -> Right (Transfer Data) -->
  <path d="M 500,150 A 380,380 0 0 1 700,350" fill="none" stroke="#333" stroke-width="3" marker-end="url(#arrow-large)"></path>
  <text x="632" y="233" class="text-outer-arc" transform="translate(660,210) rotate(45) translate(-660,-210)">技术转化</text>

  <!-- Bottom-Right: Right -> Bottom (TUI Interaction) -->
  <path d="M 700,500 A 380,380 0 0 1 500,700" fill="none" stroke="#333" stroke-width="3" marker-end="url(#arrow-large)"></path>
  <text x="664" y="638" class="text-outer-arc" transform="translate(660,650) rotate(-45) translate(-660,-650)">市场反馈</text>

  <!-- Bottom-Left: Bottom -> Left (GUI Interaction) -->
  <path d="M 350,700 A 380,380 0 0 1 150,500" fill="none" stroke="#333" stroke-width="3" marker-end="url(#arrow-large)"></path>
  <text x="188" y="637" class="text-outer-arc" transform="translate(190,650) rotate(45) translate(-190,-650)">人才支撑</text>

  <!-- ==================== PART 1: INNER CORE (Offset adjusted to 425,425) ==================== -->
  
  <g transform="translate(25, 25)"> <!-- Adjusting inner group to center in 850x850 canvas -->
    
    <!-- Inner Diamond Connections -->
    <path d="M400,290 L510,400 L400,510 L290,400 Z" class="dashed-line"></path>
    <path d="M465,240 L600,360" class="dashed-line" style="stroke-dasharray: 4,4; opacity: 0.5"></path> 
    <path d="M600,440 L480,560" class="dashed-line" style="stroke-dasharray: 4,4; opacity: 0.5"></path>
    <path d="M320,560 L200,440" class="dashed-line" style="stroke-dasharray: 4,4; opacity: 0.5"></path>
    <path d="M200,360 L335,240" class="dashed-line" style="stroke-dasharray: 4,4; opacity: 0.5"></path>

    <!-- Central Axis -->
    <line x1="400" y1="310" x2="400" y2="490" class="axis-line"></line>
    <line x1="310" y1="400" x2="490" y2="400" class="axis-line" marker-end="url(#arrow)" marker-start="url(#arrow)"></line>
    <path d="M400,310 L400,390" stroke="#333" stroke-width="2" marker-end="url(#arrow)"></path>
    <path d="M400,490 L400,410" stroke="#333" stroke-width="2" marker-end="url(#arrow)"></path>

    <!-- Axis Text -->
    <text x="387" y="348" class="text-axis" writing-mode="tb" text-anchor="middle">需求识别</text>
    <text x="413" y="452" class="text-axis" writing-mode="tb" text-anchor="middle">产品交付</text>
    <text x="350" y="395" class="text-axis" text-anchor="middle">资源整合</text>
    <text x="450" y="415" class="text-axis" text-anchor="middle">服务输出</text>
    
    <text x="314" y="468" class="text-axis" font-size="10" transform="rotate(45, 340, 460)">模具制造</text>
    <text x="317" y="298" class="text-axis" font-size="10" transform="rotate(45, 350, 470)">产业服务</text>
    <text x="439" y="469" class="text-axis" font-size="10" transform="rotate(-45, 460, 460)">成品生产</text>
    <text x="439" y="302" class="text-axis" font-size="10" transform="rotate(-45, 450, 470)">技术创新</text>

    <!-- Main Circles -->
    <!-- TOP: Backend Data Layer -->
    <g transform="translate(400, 220)">
      <circle cx="0" cy="0" r="80" class="main-circle"></circle>
      <text x="0" y="-40" class="text-title">园区基础设施</text>
      <text x="-43" y="-15" class="text-list multi-selected">• 富饶工业区355亩</text>
      <text x="-43" y="5" class="text-list multi-selected">• 898亩特色产业园</text>
      <text x="-43" y="25" class="text-list multi-selected">• 分期开发建设</text>
      <rect x="-20" y="-95" width="40" height="20" rx="5" fill="white" stroke="#333"></rect>
      <text x="0" y="-81" class="text-small">载体</text>
    </g>

    <!-- BOTTOM: User Requirement Layer -->
    <g transform="translate(400, 580)">
      <circle cx="0" cy="0" r="80" class="main-circle"></circle>
      <text x="3" y="-37" class="text-title">模具应用场景</text>
      <text x="-50" y="-5" class="text-list multi-selected">• 汽车模具35-45%</text>
      <text x="-59" y="17" class="text-list multi-selected">• 电子信息模具25-30%</text>
      <text x="-62" y="39" class="text-list multi-selected">• 新能源汽车模具7-10%</text>
      <rect x="-20" y="75" width="40" height="20" rx="5" fill="white" stroke="#333"></rect>
      <text x="0" y="89" class="text-small">市场</text>
    </g>

    <!-- LEFT: Virtual Service Layer -->
    <g transform="translate(220, 400)">
      <circle cx="0" cy="0" r="80" class="main-circle"></circle>
      <text x="0" y="-40" class="text-title">产业服务平台</text>
      <text x="-45" y="-15" class="text-list">• 协同创新中心</text>
      <text x="-45" y="5" class="text-list">• 模具培训学院</text>
      <text x="-45" y="25" class="text-list">• 检测技术中心</text>
      <rect x="-95" y="-10" width="40" height="20" rx="5" fill="#eef5f5" stroke="#333"></rect>
      <text x="-75" y="4" class="text-small">服务</text>
    </g>

    <!-- RIGHT: Physical Product Layer -->
    <g transform="translate(580, 400)">
      <circle cx="0" cy="0" r="80" class="main-circle"></circle>
      <text x="0" y="-40" class="text-title">模具产品体系</text>
      <text x="-54" y="-13" class="text-list">• 汽车覆盖件模具</text>
      <text x="-54" y="6" class="text-list">• 消费电子精密模具</text>
      <text x="-53" y="26" class="text-list selected">• 一体化压铸模具</text>
      <rect x="55" y="-10" width="40" height="20" rx="5" fill="#eef5f5" stroke="#333"></rect>
      <text x="75" y="4" class="text-small">产品</text>
    </g>

    <!-- Connector Nodes -->
    <g transform="translate(290, 250)"><rect x="-18" y="-10" width="36" height="20" rx="3" class="label-box"></rect><text x="0" y="4" class="text-small">土地</text></g>
    <g transform="translate(240, 305)"><rect x="-18" y="-10" width="36" height="20" rx="3" class="label-box"></rect><text x="0" y="4" class="text-small">资金</text></g>
    <g transform="translate(510, 250)"><rect x="-18" y="-10" width="36" height="20" rx="3" class="label-box"></rect><text x="0" y="4" class="text-small">技术</text></g>
    <g transform="translate(560, 305)"><rect x="-18" y="-10" width="36" height="20" rx="3" class="label-box"></rect><text x="0" y="4" class="text-small">人才</text></g>
    <g transform="translate(560, 495)"><rect x="-18" y="-10" width="36" height="20" rx="3" class="label-box"></rect><text x="0" y="4" class="text-small">产值</text></g>
    <g transform="translate(510, 550)"><rect x="-18" y="-10" width="36" height="20" rx="3" class="label-box"></rect><text x="0" y="4" class="text-small">税收</text></g>
    <g transform="translate(240, 495)"><rect x="-18" y="-10" width="36" height="20" rx="3" class="label-box"></rect><text x="0" y="4" class="text-small">就业</text></g>
    <g transform="translate(290, 550)"><rect x="-18" y="-10" width="36" height="20" rx="3" class="label-box"></rect><text x="0" y="4" class="text-small">创新</text></g>
  </g>

</svg>`
    },
    {
        id: 'baogaojiegouhuabiaodatu',
        name: '报告结构化表达图',
        description: '展示报告的主要结构内容/研究思路',
        svgCode: `<svg xmlns="http://www.w3.org/2000/svg" width="900" height="1140" viewBox="0 0 900 1140">
  <!-- 定义箭头标记 -->
  <defs>
    <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
      <polygon points="0 0, 10 3, 0 6" fill="#333"></polygon>
    </marker>
  </defs>
  
  <!-- 顶部三个独立框 -->
  <g id="top-boxes">
    <!-- 研究基础 -->
    <rect x="50" y="40" width="120" height="45" fill="white" stroke="#333" stroke-width="1.5" rx="1"></rect>
    <text x="110" y="68" text-anchor="middle" font-family="Arial, sans-serif" font-size="20.16" data-original-font-size="14" style="font-size: 20.16px;">研究基础</text>
    
    <!-- 研究内容 -->
    <rect x="390" y="40" width="120" height="45" fill="white" stroke="#333" stroke-width="1.5" rx="1"></rect>
    <text x="450" y="68" text-anchor="middle" font-family="Arial, sans-serif" font-size="20.16" data-original-font-size="14" style="font-size: 20.16px;">研究内容</text>
    
    <!-- 研究目的 -->
    <rect x="730" y="40" width="120" height="45" fill="white" stroke="#333" stroke-width="1.5" rx="1"></rect>
    <text x="790" y="68" text-anchor="middle" font-family="Arial, sans-serif" font-size="20.16" data-original-font-size="14" style="font-size: 20.16px;">研究目的</text>
  </g>
  
  <!-- 左列框架 -->
  <g id="left-column">
    <!-- 理论 -->
    <rect x="50" y="150" width="120" height="45" fill="white" stroke="#333" stroke-width="1.5" rx="1"></rect>
    <text x="110" y="178" text-anchor="middle" font-family="Arial, sans-serif" font-size="20.16" data-original-font-size="14" style="font-size: 20.16px;">理论</text>
    <line x1="110" y1="85" x2="110" y2="150" stroke="#333" stroke-width="1.5" marker-end="url(#arrowhead)"></line>
    
    <!-- 第二个框 -->
    <rect x="50" y="270" width="120" height="95" fill="white" stroke="#333" stroke-width="1.5" rx="1"></rect>
    <text x="110" y="310" text-anchor="middle" font-family="Arial, sans-serif" font-size="20.16" data-original-font-size="14" style="font-size: 20.16px;">文献综述</text>
    <text x="110" y="330" text-anchor="middle" font-family="Arial, sans-serif" font-size="20.16" data-original-font-size="14" style="font-size: 20.16px;">与</text>
    <text x="110" y="350" text-anchor="middle" font-family="Arial, sans-serif" font-size="20.16" data-original-font-size="14" style="font-size: 20.16px;">现状分析</text>
    <line x1="110" y1="195" x2="110" y2="270" stroke="#333" stroke-width="1.5" marker-end="url(#arrowhead)"></line>
    
    <!-- 第三个框 -->
    <rect x="50" y="440" width="120" height="70" fill="white" stroke="#333" stroke-width="1.5" rx="1"></rect>
    <text x="110" y="467" text-anchor="middle" font-family="Arial, sans-serif" font-size="20.16" class="" data-original-font-size="14" style="font-size: 20.16px;">研究方法</text>
    <text x="110" y="485" text-anchor="middle" font-family="Arial, sans-serif" font-size="20.16" class="" data-original-font-size="14" style="font-size: 20.16px;">与</text>
    <text x="110" y="501" text-anchor="middle" font-family="Arial, sans-serif" font-size="20.16" class="" data-original-font-size="14" style="font-size: 20.16px;">技术路线</text>
    <line x1="110" y1="365" x2="110" y2="440" stroke="#333" stroke-width="1.5" marker-end="url(#arrowhead)"></line>
    
    <!-- 第四个大框 -->
    <rect x="50" y="585" width="120" height="400" fill="white" stroke="#333" stroke-width="1.5" rx="1"></rect>
    <text x="110" y="771" text-anchor="middle" font-family="Arial, sans-serif" font-size="20.16" class="" data-original-font-size="14" style="font-size: 20.16px;">实证研究</text>
    <text x="110" y="795" text-anchor="middle" font-family="Arial, sans-serif" font-size="20.16" class="" data-original-font-size="14" style="font-size: 20.16px;">与</text>
    <text x="110" y="817" text-anchor="middle" font-family="Arial, sans-serif" font-size="20.16" class="" data-original-font-size="14" style="font-size: 20.16px;">数据分析</text>
    <line x1="110" y1="510" x2="110" y2="585" stroke="#333" stroke-width="1.5" marker-end="url(#arrowhead)"></line>
    
    <!-- 第五个框 -->
    <rect x="50" y="1040" width="120" height="70" fill="white" stroke="#333" stroke-width="1.5" rx="1" class=""></rect>
    <text x="110" y="1062" text-anchor="middle" font-family="Arial, sans-serif" font-size="20.16" class="" data-original-font-size="14" style="font-size: 20.16px;">结论</text>
    <text x="110" y="1081" text-anchor="middle" font-family="Arial, sans-serif" font-size="20.16" class="" data-original-font-size="14" style="font-size: 20.16px;">与</text>
    <text x="110" y="1099" text-anchor="middle" font-family="Arial, sans-serif" font-size="20.16" class="" data-original-font-size="14" style="font-size: 20.16px;">展望</text>
    <line x1="110" y1="985" x2="110" y2="1040" stroke="#333" stroke-width="1.5" marker-end="url(#arrowhead)"></line>
  </g>
  
  <!-- 右列框架 -->
  <g id="right-column">
    <!-- 成果展现 -->
    <rect x="730" y="150" width="120" height="45" fill="white" stroke="#333" stroke-width="1.5" rx="1"></rect>
    <text x="790" y="178" text-anchor="middle" font-family="Arial, sans-serif" font-size="20.16" data-original-font-size="14" style="font-size: 20.16px;">成果展现</text>
    <line x1="790" y1="85" x2="790" y2="150" stroke="#333" stroke-width="1.5" marker-end="url(#arrowhead)"></line>
    
    <!-- 第二个框 -->
    <rect x="730" y="270" width="120" height="95" fill="white" stroke="#333" stroke-width="1.5" rx="1"></rect>
    <text x="790" y="310" text-anchor="middle" font-family="Arial, sans-serif" font-size="20.16" data-original-font-size="14" style="font-size: 20.16px;">理论框架</text>
    <text x="790" y="330" text-anchor="middle" font-family="Arial, sans-serif" font-size="20.16" data-original-font-size="14" style="font-size: 20.16px;">与</text>
    <text x="790" y="350" text-anchor="middle" font-family="Arial, sans-serif" font-size="20.16" data-original-font-size="14" style="font-size: 20.16px;">模型构建</text>
    <line x1="790" y1="195" x2="790" y2="270" stroke="#333" stroke-width="1.5" marker-end="url(#arrowhead)"></line>
    
    <!-- 第三个框 -->
    <rect x="730" y="440" width="120" height="70" fill="white" stroke="#333" stroke-width="1.5" rx="1" class=""></rect>
    <text x="790" y="463" text-anchor="middle" font-family="Arial, sans-serif" font-size="20.16" class="" data-original-font-size="14" style="font-size: 20.16px;">指标体系</text>
    <text x="790" y="482" text-anchor="middle" font-family="Arial, sans-serif" font-size="20.16" class="" data-original-font-size="14" style="font-size: 20.16px;">与</text>
    <text x="790" y="499" text-anchor="middle" font-family="Arial, sans-serif" font-size="20.16" class="" data-original-font-size="14" style="font-size: 20.16px;">评价方法</text>
    <line x1="790" y1="365" x2="790" y2="440" stroke="#333" stroke-width="1.5" marker-end="url(#arrowhead)"></line>
    
    <!-- 第四个大框 -->
    <rect x="730" y="585" width="120" height="400" fill="white" stroke="#333" stroke-width="1.5" rx="1" class=""></rect>
    <text x="790" y="771" text-anchor="middle" font-family="Arial, sans-serif" font-size="20.16" class="" data-original-font-size="14" style="font-size: 20.16px;">研究发现</text>
    <text x="790" y="795" text-anchor="middle" font-family="Arial, sans-serif" font-size="20.16" class="" data-original-font-size="14" style="font-size: 20.16px;">与</text>
    <text x="790" y="817" text-anchor="middle" font-family="Arial, sans-serif" font-size="20.16" class="" data-original-font-size="14" style="font-size: 20.16px;">创新点</text>
    <line x1="790" y1="510" x2="790" y2="585" stroke="#333" stroke-width="1.5" marker-end="url(#arrowhead)"></line>
    
    <!-- 第五个框 -->
    <rect x="730" y="1040" width="120" height="70" fill="white" stroke="#333" stroke-width="1.5" rx="1" class=""></rect>
    <text x="790" y="1062" text-anchor="middle" font-family="Arial, sans-serif" font-size="20.16" class="" data-original-font-size="14" style="font-size: 20.16px;">实施建议</text>
    <text x="790" y="1081" text-anchor="middle" font-family="Arial, sans-serif" font-size="20.16" class="" data-original-font-size="14" style="font-size: 20.16px;">与</text>
    <text x="790" y="1099" text-anchor="middle" font-family="Arial, sans-serif" font-size="20.16" class="" data-original-font-size="14" style="font-size: 20.16px;">应用价值</text>
    <line x1="790" y1="985" x2="790" y2="1040" stroke="#333" stroke-width="1.5" marker-end="url(#arrowhead)"></line>
  </g>
  
  <!-- 中间虚线框架区域 -->
  <g id="middle-sections">
    <!-- 第一个虚线框架 -->
    <rect x="260" y="125" width="380" height="95" fill="none" stroke="#666" stroke-width="1.5" stroke-dasharray="6,3" rx="1"></rect>
    
    <!-- 内部小框 -->
    <rect x="280" y="145" width="150" height="35" fill="white" stroke="#333" stroke-width="1" rx="0"></rect>
    <text x="355" y="168" text-anchor="middle" font-family="Arial, sans-serif" font-size="17.28" data-original-font-size="12" style="font-size: 17.28px;">研究背景</text>
    
    <rect x="470" y="145" width="150" height="35" fill="white" stroke="#333" stroke-width="1" rx="0"></rect>
    <text x="545" y="168" text-anchor="middle" font-family="Arial, sans-serif" font-size="17.28" data-original-font-size="12" style="font-size: 17.28px;">研究意义</text>
    
    <!-- 第二个虚线框架 -->
    <rect x="260" y="255" width="380" height="125" fill="none" stroke="#666" stroke-width="1.5" stroke-dasharray="6,3" rx="1"></rect>
    
    <!-- 内部长条框 -->
    <rect x="280" y="280" width="340" height="35" fill="white" stroke="#333" stroke-width="1" rx="0"></rect>
    <text x="450" y="303" text-anchor="middle" font-family="Arial, sans-serif" font-size="17.28" data-original-font-size="12" style="font-size: 17.28px;">国内外研究现状分析</text>
    <rect x="280" y="325" width="340" height="35" fill="white" stroke="#333" stroke-width="1" rx="0"></rect>
    <text x="450" y="348" text-anchor="middle" font-family="Arial, sans-serif" font-size="17.28" data-original-font-size="12" style="font-size: 17.28px;">关键问题识别与研究缺口</text>
    
    <!-- 第三个虚线框架 -->
    <rect x="260" y="425" width="380" height="100" fill="none" stroke="#666" stroke-width="1.5" stroke-dasharray="6,3" rx="1"></rect>
    
    <!-- 内部长条框 -->
    <rect x="280" y="455" width="340" height="50" fill="white" stroke="#333" stroke-width="1" rx="0"></rect>
    <text x="450" y="478" text-anchor="middle" font-family="Arial, sans-serif" font-size="17.28" data-original-font-size="12" style="font-size: 17.28px;">数据收集与处理方法</text>
    <text x="450" y="498" text-anchor="middle" font-family="Arial, sans-serif" font-size="17.28" data-original-font-size="12" style="font-size: 17.28px;">模型构建与验证流程</text>
    
    <!-- 第四个虚线框架（大） -->
    <rect x="260" y="570" width="380" height="430" fill="none" stroke="#666" stroke-width="1.5" stroke-dasharray="6,3" rx="1"></rect>
    
    <!-- 内部网格框 - 左列 -->
    <rect x="280" y="595" width="150" height="75" fill="white" stroke="#333" stroke-width="1" rx="0"></rect>
    <text x="355" y="625" text-anchor="middle" font-family="Arial, sans-serif" font-size="17.28" data-original-font-size="12" style="font-size: 17.28px;">案例选择</text>
    <text x="355" y="645" text-anchor="middle" font-family="Arial, sans-serif" font-size="17.28" data-original-font-size="12" style="font-size: 17.28px;">与数据采集</text>
    <rect x="280" y="685" width="150" height="75" fill="white" stroke="#333" stroke-width="1" rx="0"></rect>
    <text x="355" y="715" text-anchor="middle" font-family="Arial, sans-serif" font-size="17.28" data-original-font-size="12" style="font-size: 17.28px;">定量分析</text>
    <text x="355" y="735" text-anchor="middle" font-family="Arial, sans-serif" font-size="17.28" data-original-font-size="12" style="font-size: 17.28px;">与模型验证</text>
    <rect x="280" y="775" width="150" height="75" fill="white" stroke="#333" stroke-width="1" rx="0"></rect>
    <text x="355" y="805" text-anchor="middle" font-family="Arial, sans-serif" font-size="17.28" data-original-font-size="12" style="font-size: 17.28px;">定性研究</text>
    <text x="355" y="825" text-anchor="middle" font-family="Arial, sans-serif" font-size="17.28" data-original-font-size="12" style="font-size: 17.28px;">与深度访谈</text>
    <rect x="280" y="865" width="150" height="75" fill="white" stroke="#333" stroke-width="1" rx="0"></rect>
    <text x="355" y="895" text-anchor="middle" font-family="Arial, sans-serif" font-size="17.28" data-original-font-size="12" style="font-size: 17.28px;">比较分析</text>
    <text x="355" y="915" text-anchor="middle" font-family="Arial, sans-serif" font-size="17.28" data-original-font-size="12" style="font-size: 17.28px;">与综合评价</text>
    <rect x="280" y="955" width="150" height="40" fill="white" stroke="#333" stroke-width="1" rx="0"></rect>
    <text x="355" y="978" text-anchor="middle" font-family="Arial, sans-serif" font-size="17.28" data-original-font-size="12" style="font-size: 17.28px;">建议与意见</text>
    
    <!-- 内部网格框 - 右列 -->
    <rect x="470" y="595" width="150" height="75" fill="white" stroke="#333" stroke-width="1" rx="0"></rect>
    <text x="545" y="625" text-anchor="middle" font-family="Arial, sans-serif" font-size="17.28" data-original-font-size="12" style="font-size: 17.28px;">主要发现</text>
    <text x="545" y="645" text-anchor="middle" font-family="Arial, sans-serif" font-size="17.28" data-original-font-size="12" style="font-size: 17.28px;">与结果讨论</text>
    <rect x="470" y="685" width="150" height="75" fill="white" stroke="#333" stroke-width="1" rx="0"></rect>
    <text x="545" y="715" text-anchor="middle" font-family="Arial, sans-serif" font-size="17.28" data-original-font-size="12" style="font-size: 17.28px;">理论贡献</text>
    <text x="545" y="735" text-anchor="middle" font-family="Arial, sans-serif" font-size="17.28" data-original-font-size="12" style="font-size: 17.28px;">与创新价值</text>
    <rect x="470" y="775" width="150" height="75" fill="white" stroke="#333" stroke-width="1" rx="0"></rect>
    <text x="545" y="805" text-anchor="middle" font-family="Arial, sans-serif" font-size="17.28" data-original-font-size="12" style="font-size: 17.28px;">实践启示</text>
    <text x="545" y="825" text-anchor="middle" font-family="Arial, sans-serif" font-size="17.28" data-original-font-size="12" style="font-size: 17.28px;">与管理建议</text>
    <rect x="470" y="865" width="150" height="75" fill="white" stroke="#333" stroke-width="1" rx="0"></rect>
    <text x="545" y="895" text-anchor="middle" font-family="Arial, sans-serif" font-size="17.28" class="" data-original-font-size="12" style="font-size: 17.28px;">实施含义</text>
    <text x="545" y="915" text-anchor="middle" font-family="Arial, sans-serif" font-size="17.28" data-original-font-size="12" style="font-size: 17.28px;">与决策支持</text>
    <rect x="470" y="955" width="150" height="40" fill="white" stroke="#333" stroke-width="1" rx="0"></rect>
    <text x="545" y="978" text-anchor="middle" font-family="Arial, sans-serif" font-size="17.28" data-original-font-size="12" style="font-size: 17.28px;">建议与意见</text>
  </g>
  
  <!-- 水平连接箭头 -->
  <g id="horizontal-arrows">
    <!-- 第一行 -->
    <line x1="170" y1="172" x2="260" y2="172" stroke="#333" stroke-width="1.5" marker-end="url(#arrowhead)"></line>
    <line x1="640" y1="172" x2="730" y2="172" stroke="#333" stroke-width="1.5" marker-end="url(#arrowhead)"></line>
    
    <!-- 第二行 -->
    <line x1="170" y1="317" x2="260" y2="317" stroke="#333" stroke-width="1.5" marker-end="url(#arrowhead)"></line>
    <line x1="640" y1="317" x2="730" y2="317" stroke="#333" stroke-width="1.5" marker-end="url(#arrowhead)"></line>
    
    <!-- 第三行 -->
    <line x1="170" y1="475" x2="260" y2="475" stroke="#333" stroke-width="1.5" marker-end="url(#arrowhead)"></line>
    <line x1="640" y1="475" x2="730" y2="475" stroke="#333" stroke-width="1.5" marker-end="url(#arrowhead)"></line>
    
    <!-- 第四行 -->
    <line x1="170" y1="785" x2="260" y2="785" stroke="#333" stroke-width="1.5" marker-end="url(#arrowhead)"></line>
    <line x1="640" y1="785" x2="730" y2="785" stroke="#333" stroke-width="1.5" marker-end="url(#arrowhead)"></line>
    
    <!-- 第五行 -->
    <line x1="170" y1="1075" x2="730" y2="1075" stroke="#333" stroke-width="1.5" marker-end="url(#arrowhead)"></line>
  </g>
</svg>`
    },
    {
        id: 'org-chart1',
        name: '组织结构图',
        description: '展示企业或团队的组织结构',
        svgCode: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 850" width="900" height="850"><style>
    text { font-family: "Microsoft YaHei", "PingFang SC", "Microsoft YaHei", "SimHei", sans-serif; }</style>
  <defs>
    <!-- 干净的阴影效果 -->
    <filter id="cleanShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="3"></feGaussianBlur>
      <feOffset dx="0" dy="4" result="offset"></feOffset>
      <feFlood flood-color="#000000" flood-opacity="0.08"></feFlood>
      <feComposite in2="offset" operator="in"></feComposite>
      <feMerge> 
        <feMergeNode></feMergeNode>
        <feMergeNode in="SourceGraphic"></feMergeNode> 
      </feMerge>
    </filter>
    
    <!-- 精致箭头 -->
    <marker id="arrow" markerWidth="10" markerHeight="8" refX="9" refY="4" orient="auto" markerUnits="strokeWidth">
      <polygon points="0 0, 10 4, 0 8, 2 4" fill="#4a5568"></polygon>
    </marker>
    
    <!-- 决策箭头 -->
    <marker id="decisionArrow" markerWidth="10" markerHeight="8" refX="9" refY="4" orient="auto" markerUnits="strokeWidth">
      <polygon points="0 0, 10 4, 0 8, 2 4" fill="#e53e3e"></polygon>
    </marker>
  </defs>
  
  <!-- 背景 -->
  
  
  <!-- 标题 -->
  <text x="450" y="40" text-anchor="middle" font-family="'Helvetica Neue', Arial, sans-serif" font-size="27.36" font-weight="300" fill="#2d3748" letter-spacing="2px" data-original-font-size="24" style="font-size: 27.36px; opacity: 1;" class="">    模具产业生产过程工艺流程图（调整版面）  </text>
  <line x1="300" y1="55" x2="600" y2="55" stroke="#3182ce" stroke-width="2" opacity="0.3"></line>
  
  <!-- 第一行：设计规划阶段 -->
  <g id="preparation-phase">
    <!-- 产品设计 -->
    <rect x="50" y="99" width="142" height="70.00" rx="12" fill="#00a9f4" filter="url(#cleanShadow)" class="" data-original-x="50" data-original-y="100" data-original-width="160" data-original-height="70" data-original-stroke-width="1" data-center-x="130" data-center-y="135" stroke-width="1.00"></rect>
    <text x="123" y="125" text-anchor="middle" font-family="'Helvetica Neue', Arial, sans-serif" font-size="15.959999999999999" font-weight="600" fill="white" data-original-font-size="14" style="font-size: 15.96px;" class="">
      产品设计
    </text>
    <text x="123" y="145" text-anchor="middle" font-family="'Helvetica Neue', Arial, sans-serif" font-size="13.68" font-weight="400" fill="white" opacity="0.9" data-original-font-size="12" style="font-size: 13.68px;" class="">
      3D建模
    </text>
    <text x="123" y="160" text-anchor="middle" font-family="'Helvetica Neue', Arial, sans-serif" font-size="12.54" font-weight="300" fill="#ffffff" opacity="0.8" data-original-font-size="11" style="font-size: 12.54px;" class="">
      结构分析
    </text>
    
    <!-- 模具设计 -->
    <rect x="270" y="100" width="160" height="70" rx="12" fill="#03a9f4" filter="url(#cleanShadow)" class=""></rect>
    <text x="350" y="125" text-anchor="middle" font-family="'Helvetica Neue', Arial, sans-serif" font-size="15.959999999999999" font-weight="600" fill="white" data-original-font-size="14" style="font-size: 15.96px;">
      模具设计
    </text>
    <text x="350" y="145" text-anchor="middle" font-family="'Helvetica Neue', Arial, sans-serif" font-size="13.68" font-weight="400" fill="white" opacity="0.9" data-original-font-size="12" style="font-size: 13.68px;" class="">
      分型面设计
    </text>
    <text x="350" y="160" text-anchor="middle" font-family="'Helvetica Neue', Arial, sans-serif" font-size="12.54" font-weight="300" fill="white" opacity="0.8" data-original-font-size="11" style="font-size: 12.54px;" class="">
      流道系统
    </text>
    
    <!-- 工艺规划 -->
    <rect x="490" y="103" width="160" height="70" rx="12" fill="#03a9f4" filter="url(#cleanShadow)" class=""></rect>
    <text x="570" y="125" text-anchor="middle" font-family="'Helvetica Neue', Arial, sans-serif" font-size="15.959999999999999" font-weight="600" fill="white" data-original-font-size="14" style="font-size: 15.96px;">
      工艺规划
    </text>
    <text x="570" y="145" text-anchor="middle" font-family="'Helvetica Neue', Arial, sans-serif" font-size="13.68" font-weight="400" fill="white" opacity="0.9" data-original-font-size="12" style="font-size: 13.68px;" class="">
      加工参数
    </text>
    <text x="570" y="160" text-anchor="middle" font-family="'Helvetica Neue', Arial, sans-serif" font-size="12.54" font-weight="300" fill="white" opacity="0.8" data-original-font-size="11" style="font-size: 12.54px;" class="">
      工艺流程
    </text>
    
    <!-- 材料选择 -->
    <rect x="710" y="100" width="140" height="70" rx="12" fill="#03a9f4" filter="url(#cleanShadow)" class=""></rect>
    <text x="780" y="125" text-anchor="middle" font-family="'Helvetica Neue', Arial, sans-serif" font-size="15.959999999999999" font-weight="600" fill="#ffffff" data-original-font-size="14" style="font-size: 15.96px; opacity: 1;" class="">      材料选择    </text>
    <text x="780" y="145" text-anchor="middle" font-family="'Helvetica Neue', Arial, sans-serif" font-size="13.68" font-weight="400" fill="white" opacity="0.9" data-original-font-size="12" style="font-size: 13.68px;" class="">
      模具钢材
    </text>
    <text x="780" y="160" text-anchor="middle" font-family="'Helvetica Neue', Arial, sans-serif" font-size="12.54" font-weight="300" fill="white" opacity="0.8" data-original-font-size="11" style="font-size: 12.54px;" class="">
      热处理要求
    </text>
  </g>
  
  <!-- 连接箭头 第一行 -->
  <line x1="192" y1="135" x2="270" y2="135" stroke="#4a5568" stroke-width="2" marker-end="url(#arrow)" class=""></line>
  <line x1="430" y1="135" x2="490" y2="135" stroke="#4a5568" stroke-width="2" marker-end="url(#arrow)"></line>
  <line x1="650" y1="135" x2="710" y2="135" stroke="#4a5568" stroke-width="2" marker-end="url(#arrow)"></line>
  
  <!-- 垂直连接到第二行 -->
  <line x1="780" y1="170" x2="780" y2="220" stroke="#4a5568" stroke-width="2"></line>
  <line x1="780" y1="220" x2="450" y2="220" stroke="#4a5568" stroke-width="2"></line>
  <line x1="450" y1="220" x2="450" y2="250" stroke="#4a5568" stroke-width="2" marker-end="url(#arrow)"></line>
  
  <!-- 第二行：加工制造阶段 -->
  <g id="execution-phase">
    <!-- 材料准备 -->
    <rect x="50" y="260" width="140" height="70" rx="12" fill="#03a9f4" filter="url(#cleanShadow)" class=""></rect>
    <text x="120" y="285" text-anchor="middle" font-family="'Helvetica Neue', Arial, sans-serif" font-size="15.959999999999999" font-weight="600" fill="#ffffff" data-original-font-size="14" style="font-size: 15.96px;" class="">
      材料准备
    </text>
    <text x="120" y="306" text-anchor="middle" font-family="'Helvetica Neue', Arial, sans-serif" font-size="13.68" font-weight="400" fill="white" opacity="0.9" data-original-font-size="12" style="font-size: 13.68px;" class="">
      钢材切割
    </text>
    <text x="120" y="321" text-anchor="middle" font-family="'Helvetica Neue', Arial, sans-serif" font-size="12.54" font-weight="300" fill="white" opacity="0.8" data-original-font-size="11" style="font-size: 12.54px;" class="">
      粗加工
    </text>
    
    <!-- CNC加工 -->
    <rect x="220" y="260" width="119" height="70" rx="12" fill="#03a9f4" filter="url(#cleanShadow)" class=""></rect>
    <text x="279" y="283" text-anchor="middle" font-family="'Helvetica Neue', Arial, sans-serif" font-size="15.959999999999999" font-weight="600" fill="#ffffff" data-original-font-size="14" style="font-size: 15.96px; opacity: 1;" class="">      CNC加工    </text>
    <text x="279" y="306" text-anchor="middle" font-family="'Helvetica Neue', Arial, sans-serif" font-size="13.68" font-weight="400" fill="white" opacity="0.9" data-original-font-size="12" style="font-size: 13.68px;" class="">
      精密铣削
    </text>
    <text x="279" y="321" text-anchor="middle" font-family="'Helvetica Neue', Arial, sans-serif" font-size="12.54" font-weight="300" fill="white" opacity="0.8" data-original-font-size="11" style="font-size: 12.54px;" class="">
      电火花加工
    </text>
    
    <!-- 核心制造 -->
    <ellipse cx="450" cy="295" rx="80" ry="40" fill="#0288d1" filter="url(#cleanShadow)" class="selected"></ellipse>
    <text x="450" y="282" text-anchor="middle" font-family="'Helvetica Neue', Arial, sans-serif" font-size="18.24" font-weight="600" fill="white" data-original-font-size="16" style="font-size: 18.24px;" class="">
      模具制造
    </text>
    <text x="450" y="304" text-anchor="middle" font-family="'Helvetica Neue', Arial, sans-serif" font-size="18.24" font-weight="600" fill="white" data-original-font-size="16" style="font-size: 18.24px;" class="">
      核心工艺
    </text>
    <text x="450" y="323" text-anchor="middle" font-family="'Helvetica Neue', Arial, sans-serif" font-size="11.399999999999999" font-weight="300" fill="white" opacity="0.8" data-original-font-size="10" style="font-size: 11.4px;" class="">
      热处理/抛光
    </text>
    
    <!-- 组装调试 -->
    <rect x="560" y="260" width="140" height="70" rx="12" fill="#03a9f4" filter="url(#cleanShadow)" class=""></rect>
    <text x="630" y="285" text-anchor="middle" font-family="'Helvetica Neue', Arial, sans-serif" font-size="15.959999999999999" font-weight="600" fill="white" data-original-font-size="14" style="font-size: 15.96px;">
      组装调试
    </text>
    <text x="630" y="306" text-anchor="middle" font-family="'Helvetica Neue', Arial, sans-serif" font-size="13.68" font-weight="400" fill="white" opacity="0.9" data-original-font-size="12" style="font-size: 13.68px;" class="">
      模具组装
    </text>
    <text x="630" y="321" text-anchor="middle" font-family="'Helvetica Neue', Arial, sans-serif" font-size="12.54" font-weight="300" fill="white" opacity="0.8" data-original-font-size="11" style="font-size: 12.54px;" class="">
      试模调整
    </text>
    
    <!-- 质量控制 -->
    <rect x="730" y="260" width="120" height="70" rx="12" fill="#03a9f4" filter="url(#cleanShadow)" class=""></rect>
    <text x="790" y="285" text-anchor="middle" font-family="'Helvetica Neue', Arial, sans-serif" font-size="15.959999999999999" font-weight="600" fill="white" data-original-font-size="14" style="font-size: 15.96px;" class="">
      质量控制
    </text>
    <text x="790" y="306" text-anchor="middle" font-family="'Helvetica Neue', Arial, sans-serif" font-size="13.68" font-weight="400" fill="white" opacity="0.9" data-original-font-size="12" style="font-size: 13.68px;" class="">
      尺寸检测
    </text>
    <text x="790" y="321" text-anchor="middle" font-family="'Helvetica Neue', Arial, sans-serif" font-size="12.54" font-weight="300" fill="white" opacity="0.8" data-original-font-size="11" style="font-size: 12.54px;" class="">
      表面质量
    </text>
  </g>
  
  <!-- 连接箭头 第二行 -->
  <line x1="190" y1="295" x2="220" y2="295" stroke="#4a5568" stroke-width="2" marker-end="url(#arrow)"></line>
  <line x1="339" y1="295" x2="369" y2="295" stroke="#4a5568" stroke-width="2" marker-end="url(#arrow)" class=""></line>
  <line x1="530" y1="295" x2="560" y2="295" stroke="#4a5568" stroke-width="2" marker-end="url(#arrow)"></line>
  <line x1="700" y1="295" x2="730" y2="295" stroke="#4a5568" stroke-width="2" marker-end="url(#arrow)"></line>
  
  <!-- 垂直连接到第三行 -->
  <line x1="790" y1="330" x2="790" y2="380" stroke="#4a5568" stroke-width="2"></line>
  <line x1="790" y1="380" x2="450" y2="380" stroke="#4a5568" stroke-width="2"></line>
  <line x1="450" y1="380" x2="450" y2="410" stroke="#4a5568" stroke-width="2" marker-end="url(#arrow)"></line>
  
  <!-- 第三行：生产交付阶段 -->
  <g id="analysis-phase">
    <!-- 批量生产 -->
    <rect x="50" y="419" width="150" height="70" rx="12" fill="#0288d1" filter="url(#cleanShadow)" class=""></rect>
    <text x="125" y="445" text-anchor="middle" font-family="'Helvetica Neue', Arial, sans-serif" font-size="15.959999999999999" font-weight="600" fill="white" data-original-font-size="14" style="font-size: 15.96px;" class="">
      批量生产
    </text>
    <text x="125" y="465" text-anchor="middle" font-family="'Helvetica Neue', Arial, sans-serif" font-size="13.68" font-weight="400" fill="white" opacity="0.9" data-original-font-size="12" style="font-size: 13.68px;" class="">
      注塑成型
    </text>
    <text x="125" y="480" text-anchor="middle" font-family="'Helvetica Neue', Arial, sans-serif" font-size="12.54" font-weight="300" fill="white" opacity="0.8" data-original-font-size="11" style="font-size: 12.54px;" class="">
      冲压加工
    </text>
    
    <!-- 质量检验 -->
    <polygon points="450.00,413.00 534.00,455.00 450.00,497.00 366.00,455.00" fill="#67c23a" filter="url(#cleanShadow)" class="" data-original-points="450,420 520,455 450,490 380,455" data-original-stroke-width="1" data-center-x="450" data-center-y="455" stroke-width="1.20" transform="translate(0,0)"></polygon>
    <text x="450" y="445" text-anchor="middle" font-family="'Helvetica Neue', Arial, sans-serif" font-size="15.959999999999999" font-weight="600" fill="#ffffff" data-original-font-size="14" style="font-size: 15.96px; opacity: 1;" class="">      质量检验    </text>
    <text x="450" y="462" text-anchor="middle" font-family="'Helvetica Neue', Arial, sans-serif" font-size="15.959999999999999" font-weight="600" fill="white" data-original-font-size="14" style="font-size: 15.96px;" class="">
      与评估
    </text>
    <text x="450" y="481" text-anchor="middle" font-family="'Helvetica Neue', Arial, sans-serif" font-size="11.399999999999999" font-weight="300" fill="white" opacity="0.8" data-original-font-size="10" style="font-size: 11.4px;" class="">
      产品检测
    </text>
    
    <!-- 交付使用 -->
    <rect x="701" y="419" width="150" height="70" rx="12" fill="#0288d1" filter="url(#cleanShadow)" class=""></rect>
    <text x="777" y="445" text-anchor="middle" font-family="'Helvetica Neue', Arial, sans-serif" font-size="15.959999999999999" font-weight="600" fill="white" data-original-font-size="14" style="font-size: 15.96px;" class="">
      交付使用
    </text>
    <text x="777" y="465" text-anchor="middle" font-family="'Helvetica Neue', Arial, sans-serif" font-size="13.68" font-weight="400" fill="white" opacity="0.9" data-original-font-size="12" style="font-size: 13.68px;" class="">
      包装发货
    </text>
    <text x="777" y="480" text-anchor="middle" font-family="'Helvetica Neue', Arial, sans-serif" font-size="12.54" font-weight="300" fill="white" opacity="0.8" data-original-font-size="11" style="font-size: 12.54px;" class="">
      售后服务
    </text>
  </g>
  
  <!-- 连接箭头 第三行 -->
  <line x1="199" y1="455" x2="364" y2="455" stroke="#4a5568" stroke-width="2" marker-end="url(#arrow)" class=""></line>
  
  <!-- 合格路径 -->
  <line x1="533" y1="455" x2="697" y2="455" stroke="#4a5568" stroke-width="3" marker-end="url(#arrow)" class=""></line>
  <text x="585" y="445" text-anchor="middle" font-family="'Helvetica Neue', Arial, sans-serif" font-size="13.68" font-weight="600" fill="#38a169" data-original-font-size="12" style="font-size: 13.68px;" class="">
    检验合格
  </text>
  
  <!-- 返修循环路径 -->
  
  <text x="452" y="516" text-anchor="middle" font-family="'Helvetica Neue', Arial, sans-serif" font-size="13.68" font-weight="600" fill="#e53e3e" class="" data-original-font-size="12" style="font-size: 13.68px;">
    返修循环
  </text>
  
  <!-- 增加间距，底部信息区域 -->
  <rect x="100" y="600" width="700" height="120" rx="12" fill="white" stroke="#e2e8f0" stroke-width="1" filter="url(#cleanShadow)" class=""></rect>
  
  <!-- 方法学说明 -->
  <text x="450" y="630" text-anchor="middle" font-family="'Helvetica Neue', Arial, sans-serif" font-size="18.24" font-weight="400" fill="#2d3748" data-original-font-size="16" style="font-size: 18.24px;">
    模具产业标准化生产流程体系
  </text>
  
  <!-- 关键原则 -->
  <g id="principles">
    <circle cx="200" cy="670" r="20" fill="#3182ce" opacity="0.1"></circle>
    <text x="200" y="675" text-anchor="middle" font-family="'Helvetica Neue', Arial, sans-serif" font-size="11.399999999999999" font-weight="600" fill="#3182ce" data-original-font-size="10" style="font-size: 11.4px;">
      精密
    </text>
    <text x="200" y="695" text-anchor="middle" font-family="'Helvetica Neue', Arial, sans-serif" font-size="10.26" font-weight="400" fill="#718096" data-original-font-size="9" style="font-size: 10.26px;">
      高精度加工
    </text>
    
    <circle cx="350" cy="670" r="20" fill="#805ad5" opacity="0.1"></circle>
    <text x="350" y="675" text-anchor="middle" font-family="'Helvetica Neue', Arial, sans-serif" font-size="11.399999999999999" font-weight="600" fill="#805ad5" data-original-font-size="10" style="font-size: 11.4px;">
      高效
    </text>
    <text x="350" y="695" text-anchor="middle" font-family="'Helvetica Neue', Arial, sans-serif" font-size="10.26" font-weight="400" fill="#718096" data-original-font-size="9" style="font-size: 10.26px;">
      生产效率
    </text>
    
    <circle cx="550" cy="670" r="20" fill="#38a169" opacity="0.1"></circle>
    <text x="550" y="675" text-anchor="middle" font-family="'Helvetica Neue', Arial, sans-serif" font-size="11.399999999999999" font-weight="600" fill="#38a169" data-original-font-size="10" style="font-size: 11.4px;">
      质量
    </text>
    <text x="550" y="695" text-anchor="middle" font-family="'Helvetica Neue', Arial, sans-serif" font-size="10.26" font-weight="400" fill="#718096" data-original-font-size="9" style="font-size: 10.26px;">
      质量控制
    </text>
    
    <circle cx="700" cy="670" r="20" fill="#d69e2e" opacity="0.1"></circle>
    <text x="700" y="675" text-anchor="middle" font-family="'Helvetica Neue', Arial, sans-serif" font-size="11.399999999999999" font-weight="600" fill="#d69e2e" data-original-font-size="10" style="font-size: 11.4px;">
      可靠
    </text>
    <text x="700" y="695" text-anchor="middle" font-family="'Helvetica Neue', Arial, sans-serif" font-size="10.26" font-weight="400" fill="#718096" data-original-font-size="9" style="font-size: 10.26px;">
      稳定可靠
    </text>
  </g>
  
  <!-- 版权信息 -->
  <text x="456" y="745" text-anchor="middle" font-family="'Helvetica Neue', Arial, sans-serif" font-size="11.399999999999999" font-weight="300" fill="#a0aec0" class="selected" data-original-font-size="10" style="font-size: 11.4px;">
    模具制造工艺流程 | 标准化生产管理体系
  </text>
</svg>`
    },
    {
        id: 'chanyelian',
        name: '产业链结构图',
        description: '带技术流程方向',
        svgCode: `<svg xmlns="http://www.w3.org/2000/svg" width="1400" height="1100" viewBox="0 0 1400 1100"><style>
    text { font-family: "Microsoft YaHei", "PingFang SC", "Microsoft YaHei", "SimHei", sans-serif; }</style>
  <defs>
    <marker id="arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="#555"/>
    </marker>
    
    <marker id="circleMarker" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
      <circle cx="4" cy="4" r="3" fill="#555"/>
    </marker>
  </defs>
  
  <!-- 左侧虚线框 - 芯片产业链上游 -->
  <rect x="50" y="80" width="450" height="950" fill="none" stroke="#666" stroke-width="2" stroke-dasharray="10,5"/>
  
  <!-- 中间虚线框上部 - 芯片产业链中游：工艺生产 -->
  <rect x="540" y="80" width="420" height="460" fill="none" stroke="#666" stroke-width="2" stroke-dasharray="10,5"/>
  
  <!-- 中间虚线框下部 - 芯片产业链中游：制造流程 -->
  <rect x="540" y="580" width="420" height="450" fill="none" stroke="#666" stroke-width="2" stroke-dasharray="10,5"/>
  
  <!-- 右侧虚线框 - 芯片产业链下游 -->
  <rect x="1000" y="80" width="350" height="950" fill="none" stroke="#666" stroke-width="2" stroke-dasharray="10,5" class=""/>
  
  <!-- 中上标题 -->
  <rect x="640" y="54" width="220" height="50" fill="white" stroke="#333" stroke-width="2" class=""/>
  <text x="750" y="87" text-anchor="middle" font-family="Source Han Sans CN, sans-serif" font-size="24" font-weight="bold" data-original-font-size="18" style="font-size: 24px;" class="">中游：工艺生产</text>
  
  <!-- 中下标题 -->
  <rect x="640" y="600" width="220" height="50" fill="white" stroke="#333" stroke-width="2"/>
  <text x="750" y="631" text-anchor="middle" font-family="Source Han Sans CN, sans-serif" font-size="25.38" font-weight="bold" data-original-font-size="18" style="font-size: 25.38px;">中游：制造流程</text>
  
  <!-- 右侧标题 - 放在框的底部 -->
  <rect x="1076" y="51" width="210" height="55" fill="white" stroke="#333" stroke-width="2" class=""/>
  <text x="1171" y="88" text-anchor="middle" font-family="Source Han Sans CN, sans-serif" font-size="24" font-weight="bold" data-original-font-size="19" style="font-size: 24px;" class="">下游：市场消费</text>
  
  <!-- 左侧内容 - 芯片产业链上游 -->
  <rect x="165" y="140" width="180" height="65" fill="white" stroke="#333" stroke-width="2" class=""/>
  <text x="257" y="168" text-anchor="middle" font-family="Source Han Sans CN, sans-serif" font-size="21.15" class="" data-original-font-size="15" style="font-size: 21.15px;">半导体材料</text>
  <text x="256" y="190" text-anchor="middle" font-family="Source Han Sans CN, sans-serif" font-size="19.74" class="" data-original-font-size="14" style="font-size: 19.74px;">硅片、光刻胶等</text>
  
  <line x1="255" y1="205" x2="255" y2="255" stroke="#333" stroke-width="2" marker-end="url(#arrow)" class=""/>
  
  <rect x="166" y="260" width="180" height="65" fill="white" stroke="#333" stroke-width="2" class=""/>
  <text x="255" y="288" text-anchor="middle" font-family="Source Han Sans CN, sans-serif" font-size="21.15" class="" data-original-font-size="15" style="font-size: 21.15px;">生产设备</text>
  <text x="254" y="310" text-anchor="middle" font-family="Source Han Sans CN, sans-serif" font-size="19.74" class="" data-original-font-size="14" style="font-size: 19.74px;">光刻机、刻蚀机</text>
  
  <line x1="348" y1="292" x2="398" y2="292" stroke="#333" stroke-width="2" class=""/>
  <line x1="400" y1="292" x2="400" y2="382" stroke="#333" stroke-width="2" class="selected"/>
  <line x1="402" y1="382" x2="352" y2="382" stroke="#333" stroke-width="2" marker-end="url(#arrow)" class=""/>
  
  <rect x="168" y="360" width="180" height="65" fill="white" stroke="#333" stroke-width="2" class=""/>
  <text x="254" y="388" text-anchor="middle" font-family="Source Han Sans CN, sans-serif" font-size="21.15" class="" data-original-font-size="15" style="font-size: 21.15px;">EDA工具</text>
  <text x="252" y="410" text-anchor="middle" font-family="Source Han Sans CN, sans-serif" font-size="19.74" class="" data-original-font-size="14" style="font-size: 19.74px;">设计与仿真软件</text>
  
  <!-- 分支到三个要素 -->
  <line x1="255" y1="425" x2="255" y2="450" stroke="#333" stroke-width="2" class=""/>
  <line x1="174" y1="450" x2="334" y2="450" stroke="#333" stroke-width="2" class=""/>
  
  <line x1="175" y1="450" x2="175" y2="565" stroke="#333" stroke-width="2" marker-end="url(#arrow)" class=""/>
  <line x1="254" y1="450" x2="254" y2="565" stroke="#333" stroke-width="2" marker-end="url(#arrow)" class=""/>
  <line x1="333" y1="450" x2="333" y2="565" stroke="#333" stroke-width="2" marker-end="url(#arrow)" class=""/>
  
  <rect x="115" y="570" width="80" height="90" fill="white" stroke="#333" stroke-width="2" class=""/>
  <text x="151" y="595" text-anchor="middle" font-family="Source Han Sans CN, sans-serif" font-size="18.33" class="" data-original-font-size="13" style="font-size: 18.33px;">材料</text>
  <text x="150" y="615" text-anchor="middle" font-family="Source Han Sans CN, sans-serif" font-size="18.33" class="" data-original-font-size="13" style="font-size: 18.33px;">供应</text>
  <text x="148" y="635" text-anchor="middle" font-family="Source Han Sans CN, sans-serif" font-size="18.33" class="" data-original-font-size="13" style="font-size: 18.33px;">体系</text>
  
  <rect x="210" y="570" width="80" height="90" fill="white" stroke="#333" stroke-width="2" class=""/>
  <text x="252" y="595" text-anchor="middle" font-family="Source Han Sans CN, sans-serif" font-size="18.33" class="" data-original-font-size="13" style="font-size: 18.33px;">设备</text>
  <text x="251" y="615" text-anchor="middle" font-family="Source Han Sans CN, sans-serif" font-size="18.33" class="" data-original-font-size="13" style="font-size: 18.33px;">制造</text>
  <text x="252" y="635" text-anchor="middle" font-family="Source Han Sans CN, sans-serif" font-size="18.33" class="" data-original-font-size="13" style="font-size: 18.33px;">技术</text>
  
  <rect x="316" y="570" width="80" height="90" fill="white" stroke="#333" stroke-width="2" class=""/>
  <text x="352" y="595" text-anchor="middle" font-family="Source Han Sans CN, sans-serif" font-size="18.33" class="" data-original-font-size="13" style="font-size: 18.33px;">设计</text>
  <text x="352" y="615" text-anchor="middle" font-family="Source Han Sans CN, sans-serif" font-size="18.33" class="" data-original-font-size="13" style="font-size: 18.33px;">工具</text>
  <text x="351" y="635" text-anchor="middle" font-family="Source Han Sans CN, sans-serif" font-size="18.33" class="" data-original-font-size="13" style="font-size: 18.33px;">开发</text>
  
  <!-- 汇聚 -->
  <line x1="147" y1="660" x2="147" y2="700" stroke="#333" stroke-width="2" class=""/>
  <line x1="255" y1="660" x2="255" y2="700" stroke="#333" stroke-width="2" class=""/>
  <line x1="350" y1="660" x2="350" y2="700" stroke="#333" stroke-width="2" class=""/>
  <line x1="147" y1="700" x2="347" y2="700" stroke="#333" stroke-width="2" class=""/>
  <line x1="255" y1="700" x2="255" y2="740" stroke="#333" stroke-width="2" marker-end="url(#arrow)" class=""/>
  
  <rect x="139" y="745" width="220" height="65" fill="white" stroke="#333" stroke-width="2" class=""/>
  <text x="251" y="773" text-anchor="middle" font-family="Source Han Sans CN, sans-serif" font-size="21.15" class="" data-original-font-size="15" style="font-size: 21.15px;">上游整合</text>
  <text x="247" y="795" text-anchor="middle" font-family="Source Han Sans CN, sans-serif" font-size="19.74" class="" data-original-font-size="14" style="font-size: 19.74px;">与供应链管理</text>
  
  <line x1="255" y1="810" x2="255" y2="860" stroke="#333" stroke-width="2" marker-end="url(#arrow)" class=""/>
  
  <rect x="140" y="865" width="220" height="65" fill="white" stroke="#333" stroke-width="2" class=""/>
  <text x="252" y="893" text-anchor="middle" font-family="Source Han Sans CN, sans-serif" font-size="21.15" class="" data-original-font-size="15" style="font-size: 21.15px;">技术研发</text>
  <text x="250" y="915" text-anchor="middle" font-family="Source Han Sans CN, sans-serif" font-size="19.74" class="" data-original-font-size="14" style="font-size: 19.74px;">与创新突破</text>
  
  <!-- 中间上部 - 芯片设计中游 -->
  <rect x="570" y="190" width="150" height="60" fill="white" stroke="#333" stroke-width="2"/>
  <text x="645" y="216" text-anchor="middle" font-family="Source Han Sans CN, sans-serif" font-size="19.74" data-original-font-size="14" style="font-size: 19.74px;">芯片设计</text>
  <text x="645" y="236" text-anchor="middle" font-family="Source Han Sans CN, sans-serif" font-size="18.33" data-original-font-size="13" style="font-size: 18.33px;">架构规划</text>
  
  <rect x="760" y="190" width="150" height="60" fill="white" stroke="#333" stroke-width="2"/>
  <text x="835" y="216" text-anchor="middle" font-family="Source Han Sans CN, sans-serif" font-size="19.74" data-original-font-size="14" style="font-size: 19.74px;">电路设计</text>
  <text x="835" y="236" text-anchor="middle" font-family="Source Han Sans CN, sans-serif" font-size="18.33" data-original-font-size="13" style="font-size: 18.33px;">与仿真验证</text>
  
  <line x1="645" y1="250" x2="645" y2="290" stroke="#333" stroke-width="2"/>
  <line x1="835" y1="250" x2="835" y2="290" stroke="#333" stroke-width="2"/>
  <line x1="645" y1="290" x2="835" y2="290" stroke="#333" stroke-width="2"/>
  <line x1="740" y1="290" x2="740" y2="325" stroke="#333" stroke-width="2" marker-end="url(#arrow)"/>
  
  <rect x="620" y="330" width="240" height="60" fill="white" stroke="#333" stroke-width="2"/>
  <text x="740" y="356" text-anchor="middle" font-family="Source Han Sans CN, sans-serif" font-size="21.15" data-original-font-size="15" style="font-size: 21.15px;">版图设计</text>
  <text x="740" y="376" text-anchor="middle" font-family="Source Han Sans CN, sans-serif" font-size="19.74" data-original-font-size="14" style="font-size: 19.74px;">与掩膜制作</text>
  
  <line x1="740" y1="390" x2="740" y2="425" stroke="#333" stroke-width="2" marker-end="url(#arrow)"/>
  
  <rect x="620" y="430" width="240" height="60" fill="white" stroke="#333" stroke-width="2"/>
  <text x="740" y="456" text-anchor="middle" font-family="Source Han Sans CN, sans-serif" font-size="21.15" data-original-font-size="15" style="font-size: 21.15px;">设计验证</text>
  <text x="740" y="476" text-anchor="middle" font-family="Source Han Sans CN, sans-serif" font-size="19.74" data-original-font-size="14" style="font-size: 19.74px;">与成品率分析</text>
  
  <!-- 中间下部 - 芯片制造中游 -->
  <rect x="620" y="690" width="240" height="60" fill="white" stroke="#333" stroke-width="2"/>
  <text x="740" y="716" text-anchor="middle" font-family="Source Han Sans CN, sans-serif" font-size="21.15" data-original-font-size="15" style="font-size: 21.15px;">晶圆制造</text>
  <text x="740" y="736" text-anchor="middle" font-family="Source Han Sans CN, sans-serif" font-size="19.74" data-original-font-size="14" style="font-size: 19.74px;">光刻与刻蚀</text>
  
  <line x1="740" y1="750" x2="740" y2="785" stroke="#333" stroke-width="2"/>
  <line x1="600" y1="785" x2="880" y2="785" stroke="#333" stroke-width="2"/>
  
  <line x1="600" y1="785" x2="600" y2="820" stroke="#333" stroke-width="2" marker-end="url(#arrow)"/>
  <line x1="740" y1="785" x2="740" y2="820" stroke="#333" stroke-width="2" marker-end="url(#arrow)"/>
  <line x1="880" y1="785" x2="880" y2="820" stroke="#333" stroke-width="2" marker-end="url(#arrow)"/>
  
  <rect x="550" y="825" width="100" height="85" fill="white" stroke="#333" stroke-width="2" class=""/>
  <text x="600" y="862" text-anchor="middle" font-family="Source Han Sans CN, sans-serif" font-size="18.33" data-original-font-size="13" style="font-size: 18.33px;" class="selected">离子</text>
  <text x="600" y="887" text-anchor="middle" font-family="Source Han Sans CN, sans-serif" font-size="18.33" data-original-font-size="13" style="font-size: 18.33px;" class="">注入</text>
  
  <rect x="690" y="825" width="100" height="85" fill="white" stroke="#333" stroke-width="2"/>
  <text x="740" y="862" text-anchor="middle" font-family="Source Han Sans CN, sans-serif" font-size="18.33" data-original-font-size="13" style="font-size: 18.33px;" class="">薄膜</text>
  <text x="740" y="886" text-anchor="middle" font-family="Source Han Sans CN, sans-serif" font-size="18.33" data-original-font-size="13" style="font-size: 18.33px;" class="">沉积</text>
  
  <rect x="830" y="825" width="100" height="85" fill="white" stroke="#333" stroke-width="2"/>
  <text x="880" y="861" text-anchor="middle" font-family="Source Han Sans CN, sans-serif" font-size="18.33" data-original-font-size="13" style="font-size: 18.33px;" class="">化学</text>
  <text x="880" y="887" text-anchor="middle" font-family="Source Han Sans CN, sans-serif" font-size="18.33" data-original-font-size="13" style="font-size: 18.33px;" class="">机械抛光</text>
  
  <line x1="600" y1="910" x2="600" y2="945" stroke="#333" stroke-width="2"/>
  <line x1="740" y1="910" x2="740" y2="945" stroke="#333" stroke-width="2"/>
  <line x1="880" y1="910" x2="880" y2="945" stroke="#333" stroke-width="2"/>
  <line x1="600" y1="945" x2="880" y2="945" stroke="#333" stroke-width="2"/>
  <line x1="740" y1="945" x2="740" y2="975" stroke="#333" stroke-width="2" marker-end="url(#arrow)"/>
  
  <rect x="620" y="980" width="240" height="30" fill="white" stroke="#333" stroke-width="2"/>
  <text x="740" y="1001" text-anchor="middle" font-family="Source Han Sans CN, sans-serif" font-size="19.74" data-original-font-size="14" style="font-size: 19.74px;">封装与测试完成</text>
  
  <!-- 右侧内容 - 芯片产业链下游 -->
  <rect x="1040" y="140" width="270" height="60" fill="white" stroke="#333" stroke-width="2"/>
  <text x="1175" y="166" text-anchor="middle" font-family="Source Han Sans CN, sans-serif" font-size="21.15" data-original-font-size="15" style="font-size: 21.15px;">成品芯片</text>
  <text x="1175" y="186" text-anchor="middle" font-family="Source Han Sans CN, sans-serif" font-size="19.74" data-original-font-size="14" style="font-size: 19.74px;">分销与物流</text>
  
  <line x1="1175" y1="200" x2="1175" y2="245" stroke="#333" stroke-width="2" marker-end="url(#arrow)"/>
  
  <rect x="1040" y="250" width="270" height="60" fill="white" stroke="#333" stroke-width="2"/>
  <text x="1175" y="276" text-anchor="middle" font-family="Source Han Sans CN, sans-serif" font-size="21.15" data-original-font-size="15" style="font-size: 21.15px;">终端产品</text>
  <text x="1175" y="296" text-anchor="middle" font-family="Source Han Sans CN, sans-serif" font-size="19.74" data-original-font-size="14" style="font-size: 19.74px;">制造集成</text>
  
  <line x1="1175" y1="310" x2="1175" y2="355" stroke="#333" stroke-width="2" marker-end="url(#arrow)"/>
  
  <rect x="1040" y="360" width="270" height="60" fill="white" stroke="#333" stroke-width="2"/>
  <text x="1175" y="386" text-anchor="middle" font-family="Source Han Sans CN, sans-serif" font-size="21.15" data-original-font-size="15" style="font-size: 21.15px;">市场销售</text>
  <text x="1175" y="406" text-anchor="middle" font-family="Source Han Sans CN, sans-serif" font-size="19.74" data-original-font-size="14" style="font-size: 19.74px;">渠道建设</text>
  
  <line x1="1175" y1="420" x2="1175" y2="485" stroke="#333" stroke-width="2" marker-end="url(#arrow)"/>
  
  <rect x="1040" y="490" width="270" height="60" fill="white" stroke="#333" stroke-width="2"/>
  <text x="1175" y="516" text-anchor="middle" font-family="Source Han Sans CN, sans-serif" font-size="21.15" data-original-font-size="15" style="font-size: 21.15px;">消费者</text>
  <text x="1175" y="536" text-anchor="middle" font-family="Source Han Sans CN, sans-serif" font-size="19.74" data-original-font-size="14" style="font-size: 19.74px;">购买使用</text>
  
  <line x1="1175" y1="550" x2="1175" y2="615" stroke="#333" stroke-width="2" marker-end="url(#arrow)"/>
  
  <rect x="1040" y="620" width="270" height="60" fill="white" stroke="#333" stroke-width="2"/>
  <text x="1175" y="646" text-anchor="middle" font-family="Source Han Sans CN, sans-serif" font-size="21.15" data-original-font-size="15" style="font-size: 21.15px;">售后服务</text>
  <text x="1175" y="666" text-anchor="middle" font-family="Source Han Sans CN, sans-serif" font-size="19.74" data-original-font-size="14" style="font-size: 19.74px;">与技术支持</text>
  
  <line x1="1175" y1="680" x2="1175" y2="745" stroke="#333" stroke-width="2" marker-end="url(#arrow)"/>
  
  <rect x="1040" y="750" width="270" height="60" fill="white" stroke="#333" stroke-width="2"/>
  <text x="1175" y="776" text-anchor="middle" font-family="Source Han Sans CN, sans-serif" font-size="21.15" data-original-font-size="15" style="font-size: 21.15px;">市场反馈</text>
  <text x="1175" y="796" text-anchor="middle" font-family="Source Han Sans CN, sans-serif" font-size="19.74" data-original-font-size="14" style="font-size: 19.74px;">与需求分析</text>
  
  <line x1="1175" y1="810" x2="1175" y2="875" stroke="#333" stroke-width="2" marker-end="url(#arrow)"/>
  
  <rect x="1040" y="880" width="270" height="30" fill="white" stroke="#333" stroke-width="2"/>
  <text x="1175" y="901" text-anchor="middle" font-family="Source Han Sans CN, sans-serif" font-size="19.74" data-original-font-size="14" style="font-size: 19.74px;">产业链价值实现</text>
  
  <!-- 区域间连接箭头 -->
  <polygon points="510,290 530,290 530,275 560,300 530,325 530,310 510,310" fill="white" stroke="#555" stroke-width="2" class="" transform="translate(-13,-219)"/>
  
  
  <polygon points="970,720 990,720 990,705 1020,730 990,755 990,740 970,740" fill="white" stroke="#555" stroke-width="2" class="" transform="translate(-11,-650)"/>
  
  
  <!-- 底部反馈箭头 -->
  
  
<rect x="148.00" y="61.00" width="220.00" height="50.00" fill="white" stroke="#333" stroke-width="2.00" class="" data-original-x="148" data-original-y="61" data-original-width="220" data-original-height="50" data-original-stroke-width="2" data-center-x="258" data-center-y="86"/><text x="257" y="95" text-anchor="middle" font-family="Source Han Sans CN, sans-serif" font-size="24" font-weight="bold" data-original-font-size="18" style="font-size: 24px;" class="">上游：原材料及软件</text></svg>
`
},
{
    id: 'org-chart',
    name: '项目运作/生产工艺流程图',
    description: '比较好看',
    svgCode: `<<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="900" viewBox="0 0 1200 900"><style>
    text { font-family: "Microsoft YaHei", "PingFang SC", "Microsoft YaHei", "SimHei", sans-serif; }</style>
  <!-- 定义样式和标记 -->
  <defs>
    <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
      <polygon points="0 0, 10 3, 0 6" fill="#333"></polygon>
    </marker>
    <marker id="arrow-gray" markerWidth="8" markerHeight="8" refX="7" refY="2.5" orient="auto">
      <polygon points="0 0, 8 2.5, 0 5" fill="#666"></polygon>
    </marker>
  </defs>
  
  <!-- 顶部标题区 -->
  <rect x="288" y="20" width="646" height="60" fill="#01579b" stroke="#01579b" stroke-width="2" rx="8" class=""></rect>
  <text x="599" y="60" text-anchor="middle" font-family="SimHei, sans-serif" font-size="30.240000000000002" font-weight="bold" data-original-font-size="24" style="font-size: 30.24px; opacity: 1; fill: white;" class="">模具产业生产过程工艺流程图</text>
  
  <!-- 左侧模具设计区 -->
  <g id="mold-design">
    <rect x="50" y="120" width="280" height="500" fill="white" stroke="#666" stroke-width="2" stroke-dasharray="8,4" rx="5" class=""></rect>
    
    <!-- 标签 - 已修改为正常角度 -->
    <rect x="7" y="319" width="61" height="75" fill="#0288d1" stroke="#0288d1" stroke-width="2" class=""></rect>
    <text x="38" y="350" text-anchor="middle" font-family="SimHei, sans-serif" font-size="22.68" font-weight="bold" class="" data-original-font-size="18" style="font-size: 22.68px; fill: white;">模具</text>
    
    <!-- 内容框 -->
    <rect x="80" y="146" width="220" height="45" fill="#cff1fa" stroke="#cff1fa" stroke-width="1.5" rx="3" class=""></rect>
    <text x="190" y="174" text-anchor="middle" font-family="SimHei, sans-serif" font-size="17.64" data-original-font-size="14" style="font-size: 17.64px;" class="">产品需求分析</text>
    
    <rect x="80" y="210" width="220" height="45" fill="#cff1fa" stroke="#cff1fa" stroke-width="1.5" rx="3" class=""></rect>
    <text x="190" y="238" text-anchor="middle" font-family="SimHei, sans-serif" font-size="17.64" data-original-font-size="14" style="font-size: 17.64px;">模具结构设计</text>
    
    <rect x="80" y="270" width="220" height="45" fill="#cff1fa" stroke="#cff1fa" stroke-width="1.5" rx="3" class=""></rect>
    <text x="190" y="298" text-anchor="middle" font-family="SimHei, sans-serif" font-size="17.64" data-original-font-size="14" style="font-size: 17.64px;">CAD建模</text>
    
    <rect x="80" y="370" width="220" height="60" fill="#00bcd4" stroke="#00bcd4" stroke-width="2" rx="5" class=""></rect>
    <text x="190" y="396" text-anchor="middle" font-family="SimHei, sans-serif" font-size="20.16" font-weight="bold" data-original-font-size="16" style="font-size: 20.16px; fill: white;" class="">模具设计</text>
    <text x="190" y="417" text-anchor="middle" font-family="SimHei, sans-serif" font-size="17.64" data-original-font-size="14" style="font-size: 17.64px; fill: white;" class="">与工程分析</text>
    
    <rect x="80" y="480" width="220" height="45" fill="#cff1fa" stroke="#cff1fa" stroke-width="1.5" rx="3" class=""></rect>
    <text x="190" y="509" text-anchor="middle" font-family="SimHei, sans-serif" font-size="17.64" data-original-font-size="14" style="font-size: 17.64px;" class="">CAE模拟分析</text>
    
    <rect x="80" y="540" width="220" height="45" fill="#cff1fa" stroke="#cff1fa" stroke-width="1.5" rx="3" class=""></rect>
    <text x="190" y="569" text-anchor="middle" font-family="SimHei, sans-serif" font-size="17.64" data-original-font-size="14" style="font-size: 17.64px;" class="">设计优化</text>
    
    <!-- 连接线 -->
    <line x1="190" y1="195" x2="190" y2="210" stroke="#666" stroke-width="1.5"></line>
    <line x1="190" y1="255" x2="190" y2="270" stroke="#666" stroke-width="1.5"></line>
    <line x1="190" y1="315" x2="190" y2="370" stroke="#666" stroke-width="1.5" marker-end="url(#arrow-gray)"></line>
    <line x1="190" y1="430" x2="190" y2="480" stroke="#666" stroke-width="1.5" marker-end="url(#arrow-gray)"></line>
    <line x1="190" y1="525" x2="190" y2="540" stroke="#666" stroke-width="1.5"></line>
  </g>
  
  <!-- 中间模具制造区 -->
  <g id="mold-manufacturing">
    <rect x="370" y="120" width="460" height="500" fill="white" stroke="#666" stroke-width="2" stroke-dasharray="8,4" rx="5" class=""></rect>
    
    <!-- 上部分：加工路径 -->
    <rect x="400" y="140" width="400" height="40" fill="#009688" stroke="#009688" stroke-width="2" rx="5" class=""></rect>
    <text x="600" y="168" text-anchor="middle" font-family="SimHei, sans-serif" font-size="20.16" font-weight="bold" data-original-font-size="16" style="font-size: 20.16px; fill: white;" class="">加工路径选择</text>
    
    <!-- 三个并列框 -->
    <rect x="400" y="200" width="120" height="80" fill="#c8e9e4" stroke="#c8e9e4" stroke-width="1.5" rx="3" class=""></rect>
    <text x="460" y="228" text-anchor="middle" font-family="SimHei, sans-serif" font-size="17.64" data-original-font-size="14" style="font-size: 17.64px;" class="">CNC加工</text>
    <text x="460" y="248" text-anchor="middle" font-family="SimHei, sans-serif" font-size="15.120000000000001" data-original-font-size="12" style="font-size: 15.12px;" class="">数控铣削</text>
    <text x="460" y="267" text-anchor="middle" font-family="SimHei, sans-serif" font-size="15.120000000000001" data-original-font-size="12" style="font-size: 15.12px;" class="">电火花加工</text>
    
    <rect x="540" y="200" width="120" height="80" fill="#c8e9e4" stroke="#c8e9e4" stroke-width="1.5" rx="3" class=""></rect>
    <text x="600" y="228" text-anchor="middle" font-family="SimHei, sans-serif" font-size="17.64" data-original-font-size="14" style="font-size: 17.64px;" class="">热处理</text>
    <text x="600" y="248" text-anchor="middle" font-family="SimHei, sans-serif" font-size="15.120000000000001" data-original-font-size="12" style="font-size: 15.12px;" class="">淬火回火</text>
    <text x="600" y="267" text-anchor="middle" font-family="SimHei, sans-serif" font-size="15.120000000000001" data-original-font-size="12" style="font-size: 15.12px;" class="">表面处理</text>
    
    <rect x="680" y="200" width="120" height="80" fill="#cae7e4" stroke="#cae7e4" stroke-width="1.5" rx="3" class=""></rect>
    <text x="740" y="228" text-anchor="middle" font-family="SimHei, sans-serif" font-size="17.64" data-original-font-size="14" style="font-size: 17.64px;" class="">精加工</text>
    <text x="740" y="248" text-anchor="middle" font-family="SimHei, sans-serif" font-size="15.120000000000001" data-original-font-size="12" style="font-size: 15.12px;" class="">磨削抛光</text>
    <text x="740" y="267" text-anchor="middle" font-family="SimHei, sans-serif" font-size="15.120000000000001" data-original-font-size="12" style="font-size: 15.12px;" class="">装配调试</text>
    
    <!-- 汇聚线 -->
    <line x1="460" y1="280" x2="460" y2="320" stroke="#333" stroke-width="1.5"></line>
    <line x1="600" y1="280" x2="600" y2="320" stroke="#333" stroke-width="1.5" class=""></line>
    <line x1="740" y1="280" x2="740" y2="320" stroke="#333" stroke-width="1.5"></line>
    <line x1="460" y1="320" x2="740" y2="320" stroke="#333" stroke-width="1.5"></line>
    <line x1="600" y1="321" x2="600" y2="356" stroke="#333" stroke-width="2" marker-end="url(#arrow)" class=""></line>
    
    <!-- 中部分：制造策略 -->
    <rect x="400" y="360" width="400" height="40" fill="#009688" stroke="#009688" stroke-width="2" rx="5" class=""></rect>
    <text x="600" y="388" text-anchor="middle" font-family="SimHei, sans-serif" font-size="20.16" font-weight="bold" data-original-font-size="16" style="font-size: 20.16px; fill: white;" class="selected">制造质量控制</text>
    
    <!-- 制造方法框组 -->
    <g id="manufacturing-methods">
      <rect x="400" y="420" width="180" height="40" fill="#c8e9e4" stroke="#c8e9e4" stroke-width="1.5" rx="3" class=""></rect>
      <text x="490" y="446" text-anchor="middle" font-family="SimHei, sans-serif" font-size="16.38" data-original-font-size="13" style="font-size: 16.38px;" class="">三坐标测量</text>
      
      <rect x="620" y="420" width="180" height="40" fill="#c8e9e4" stroke="#c8e9e4" stroke-width="1.5" rx="3" class=""></rect>
      <text x="710" y="446" text-anchor="middle" font-family="SimHei, sans-serif" font-size="16.38" data-original-font-size="13" style="font-size: 16.38px;" class="">表面粗糙度检测</text>
      
      <rect x="400" y="483" width="180" height="40" fill="#c8e9e4" stroke="#c8e9e4" stroke-width="1.5" rx="3" class=""></rect>
      <text x="490" y="509" text-anchor="middle" font-family="SimHei, sans-serif" font-size="16.38" data-original-font-size="13" style="font-size: 16.38px;" class="">硬度检测</text>
      
      <rect x="620" y="483" width="180" height="40" fill="#c8e9e4" stroke="#c8e9e4" stroke-width="1.5" rx="3" class=""></rect>
      <text x="710" y="509" text-anchor="middle" font-family="SimHei, sans-serif" font-size="16.38" data-original-font-size="13" style="font-size: 16.38px;" class="">尺寸精度检测</text>
      
      <rect x="510" y="545" width="180" height="40" fill="#c8e9e4" stroke="#c8e9e4" stroke-width="1.5" rx="3" class=""></rect>
      <text x="600" y="571" text-anchor="middle" font-family="SimHei, sans-serif" font-size="16.38" data-original-font-size="13" style="font-size: 16.38px;" class="">试模与调试</text>
    </g>
  </g>
  
  <!-- 右侧产品生产区 -->
  <g id="product-production">
    <rect x="870" y="121" width="280" height="500" fill="white" stroke="#666" stroke-width="2" stroke-dasharray="8,4" rx="5" class=""></rect>
    
    <!-- 标签 - 已修改为正常角度 -->
    <rect x="1133" y="319" width="61" height="75" fill="#0287d0" stroke="#0287d0" stroke-width="2" class=""></rect>
    <text x="1164" y="351" text-anchor="middle" font-family="SimHei, sans-serif" font-size="22.68" font-weight="bold" class="" data-original-font-size="18" style="font-size: 22.68px; fill: white;">产品</text>
    
    <!-- 内容框 -->
    <rect x="900" y="144" width="220" height="45" fill="#cfe2ec" stroke="#cfe2ec" stroke-width="1.5" rx="3" class=""></rect>
    <text x="1010" y="172" text-anchor="middle" font-family="SimHei, sans-serif" font-size="17.64" data-original-font-size="14" style="font-size: 17.64px;" class="">注塑成型</text>
    
    <rect x="900" y="218" width="220" height="45" fill="#cfe2ec" stroke="#cfe2ec" stroke-width="1.5" rx="3" class=""></rect>
    <text x="1010" y="246" text-anchor="middle" font-family="SimHei, sans-serif" font-size="17.64" data-original-font-size="14" style="font-size: 17.64px;" class="">压铸成型</text>
    
    <rect x="900" y="291" width="220" height="60" fill="#4997c1" stroke="#4997c1" stroke-width="2" rx="5" class=""></rect>
    <text x="1010" y="317" text-anchor="middle" font-family="SimHei, sans-serif" font-size="20.16" font-weight="bold" data-original-font-size="16" style="font-size: 20.16px; fill: white;" class="">成型工艺</text>
    <text x="1010" y="342" text-anchor="middle" font-family="SimHei, sans-serif" font-size="17.64" data-original-font-size="14" style="font-size: 17.64px; fill: white;" class="">与参数优化</text>
    
    <rect x="900" y="379" width="220" height="45" fill="#cfe2ec" stroke="#cfe2ec" stroke-width="1.5" rx="3" class=""></rect>
    <text x="1010" y="407" text-anchor="middle" font-family="SimHei, sans-serif" font-size="17.64" data-original-font-size="14" style="font-size: 17.64px;" class="">冲压成型</text>
    
    <rect x="900" y="451" width="220" height="45" fill="#cfe2ec" stroke="#cfe2ec" stroke-width="1.5" rx="3" class=""></rect>
    <text x="1010" y="479" text-anchor="middle" font-family="SimHei, sans-serif" font-size="17.64" data-original-font-size="14" style="font-size: 17.64px;" class="">吹塑成型</text>
    
    <rect x="900" y="527" width="220" height="60" fill="#4997c1" stroke="#4997c1" stroke-width="2" rx="5" class=""></rect>
    <text x="1010" y="553" text-anchor="middle" font-family="SimHei, sans-serif" font-size="20.16" font-weight="bold" data-original-font-size="16" style="font-size: 20.16px; fill: white;" class="">成品检测</text>
    <text x="1010" y="578" text-anchor="middle" font-family="SimHei, sans-serif" font-size="17.64" data-original-font-size="14" style="font-size: 17.64px; fill: white;" class="">与包装入库</text>
    
    <!-- 连接线 -->
    <line x1="1010" y1="191" x2="1010" y2="217" stroke="#666" stroke-width="1.5" class=""></line>
    <line x1="1010" y1="265" x2="1010" y2="289" stroke="#666" stroke-width="1.5" marker-end="url(#arrow-gray)" class=""></line>
    <line x1="1010" y1="353" x2="1010" y2="377" stroke="#666" stroke-width="1.5" class=""></line>
    <line x1="1010" y1="425" x2="1010" y2="450" stroke="#666" stroke-width="1.5" class=""></line>
    <line x1="1010" y1="496" x2="1010" y2="524" stroke="#333" stroke-width="2" marker-end="url(#arrow)" class=""></line>
  </g>
  
  <!-- 底部产业整合区 -->
  <g id="industry-integration">
    <rect x="200" y="660" width="800" height="180" fill="white" stroke="#666" stroke-width="2" stroke-dasharray="8,4" rx="5"></rect>
    
    <rect x="230" y="680" width="740" height="40" fill="#00b050" stroke="#00b050" stroke-width="2" rx="5" class=""></rect>
    <text x="600" y="709" text-anchor="middle" font-family="SimHei, sans-serif" font-size="22.68" font-weight="bold" data-original-font-size="18" style="font-size: 22.68px; fill: white;" class="">模具产业创新与整合</text>
    
    <!-- 三个要素框 -->
    <rect x="250" y="740" width="200" height="78" fill="#e3f2d9" stroke="#e3f2d9" stroke-width="1.5" rx="3" class="selected"></rect>
    <text x="350" y="763" text-anchor="middle" font-family="SimHei, sans-serif" font-size="17.64" data-original-font-size="14" style="font-size: 17.64px;" class="">智能制造</text>
    <text x="350" y="784" text-anchor="middle" font-family="SimHei, sans-serif" font-size="15.120000000000001" data-original-font-size="12" style="font-size: 15.12px;" class="">自动化生产线</text>
    <text x="350" y="804" text-anchor="middle" font-family="SimHei, sans-serif" font-size="15.120000000000001" data-original-font-size="12" style="font-size: 15.12px;" class="">工业互联网</text>
    
    <rect x="500" y="740" width="200" height="78" fill="#e3f2d9" stroke="#e3f2d9" stroke-width="1.5" rx="3" class=""></rect>
    <text x="600" y="763" text-anchor="middle" font-family="SimHei, sans-serif" font-size="17.64" data-original-font-size="14" style="font-size: 17.64px;" class="">技术创新</text>
    <text x="600" y="784" text-anchor="middle" font-family="SimHei, sans-serif" font-size="15.120000000000001" data-original-font-size="12" style="font-size: 15.12px;" class="">3D打印技术</text>
    <text x="600" y="804" text-anchor="middle" font-family="SimHei, sans-serif" font-size="15.120000000000001" data-original-font-size="12" style="font-size: 15.12px;" class="">新材料应用</text>
    
    <rect x="750" y="740" width="200" height="78" fill="#e3f2d9" stroke="#e3f2d9" stroke-width="1.5" rx="3" class=""></rect>
    <text x="850" y="763" text-anchor="middle" font-family="SimHei, sans-serif" font-size="17.64" data-original-font-size="14" style="font-size: 17.64px;" class="">产业升级</text>
    <text x="850" y="784" text-anchor="middle" font-family="SimHei, sans-serif" font-size="15.120000000000001" data-original-font-size="12" style="font-size: 15.12px;" class="">绿色制造</text>
    <text x="850" y="804" text-anchor="middle" font-family="SimHei, sans-serif" font-size="15.120000000000001" data-original-font-size="12" style="font-size: 15.12px;" class="">可持续发展</text>
  </g>
  
  <!-- 主要连接箭头 -->
  <line x1="331" y1="400" x2="370" y2="400" stroke="#333" stroke-width="2" marker-end="url(#arrow)" class=""></line>
  <line x1="830" y1="400" x2="870" y2="400" stroke="#333" stroke-width="2" marker-end="url(#arrow)"></line>
  
  <line x1="600" y1="621" x2="600" y2="658" stroke="#333" stroke-width="2" marker-end="url(#arrow)" class=""></line>
<text x="38" y="380" text-anchor="middle" font-family="SimHei, sans-serif" font-size="22.68" font-weight="bold" class="selected" data-original-font-size="18" style="font-size: 22.68px; fill: white;">设计</text><text x="1164" y="378" text-anchor="middle" font-family="SimHei, sans-serif" font-size="22.68" font-weight="bold" class="" data-original-font-size="18" style="font-size: 22.68px; fill: white;">生产</text></svg>`
}
];

// 安全验证逻辑
let loginAttempts = 0;
let lockoutUntil = 0;

// 密码验证函数
function validatePassword(input) {
    // 检查是否在锁定状态
    if (Date.now() < lockoutUntil) {
        const remainingTime = Math.ceil((lockoutUntil - Date.now()) / 1000);
        return { valid: false, message: `账户已锁定，请${remainingTime}秒后再试` };
    }
    
    // 简单混淆验证
    const encodedInput = btoa(input);
    if (encodedInput === SECURITY_CONFIG.validPassword) {
        loginAttempts = 0;
        return { valid: true };
    } else {
        loginAttempts++;
        
        if (loginAttempts >= SECURITY_CONFIG.maxAttempts) {
            lockoutUntil = Date.now() + SECURITY_CONFIG.lockoutTime;
            return { 
                valid: false, 
                message: `密码错误次数过多，账户已锁定${SECURITY_CONFIG.lockoutTime/1000/60}分钟` 
            };
        }
        
        const remainingAttempts = SECURITY_CONFIG.maxAttempts - loginAttempts;
        return { 
            valid: false, 
            message: `密码错误，还有${remainingAttempts}次尝试机会` 
        };
    }
}

// 初始化模板列表
function initTemplateList() {
    const templateList = document.getElementById('templateList');
    renderTemplateList(templates, templateList);
}

// 渲染模板列表
function renderTemplateList(templatesToRender, container) {
    container.innerHTML = '';
    
    if (templatesToRender.length === 0) {
        container.innerHTML = `
            <div class="no-results">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8c0 1.703-.523 3.283-1.416 4.591" />
                </svg>
                <h3>未找到匹配的模板</h3>
                <p>请尝试使用其他关键词搜索</p>
            </div>
        `;
        return;
    }
    
    templatesToRender.forEach(template => {
        const templateCard = document.createElement('div');
        templateCard.className = 'template-card';
        templateCard.innerHTML = `
            <div class="template-preview">
                ${template.svgCode}
            </div>
            <div class="template-info">
                <div class="template-name">${template.name}</div>
                <div class="template-description">${template.description}</div>
                <button class="copy-btn" data-id="${template.id}">预览并复制</button>
            </div>
        `;
        
        templateCard.querySelector('.copy-btn').addEventListener('click', () => {
            loadTemplate(template.id);
        });
        
        container.appendChild(templateCard);
    });
}

// 搜索功能
function initSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    const templateList = document.getElementById('templateList');
    
    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase().trim();
        
        if (query.length === 0) {
            searchResults.textContent = '';
            renderTemplateList(templates, templateList);
            return;
        }
        
        // 过滤模板
        const filteredTemplates = templates.filter(template => 
            template.name.toLowerCase().includes(query) || 
            template.description.toLowerCase().includes(query)
        );
        
        // 更新搜索结果提示
        searchResults.textContent = `找到 ${filteredTemplates.length} 个匹配的模板`;
        
        // 渲染过滤后的模板列表
        renderTemplateList(filteredTemplates, templateList);
    });
}

// 加载选中的模板
function loadTemplate(templateId) {
    const template = templates.find(t => t.id === templateId);
    if (!template) return;
    
    // 显示预览和代码区域
    document.getElementById('previewSection').style.display = 'block';
    document.getElementById('codeSection').style.display = 'block';
    
    // 显示SVG预览
    document.getElementById('previewContainer').innerHTML = template.svgCode;
    
    // 显示SVG代码
    document.getElementById('codeContainer').textContent = template.svgCode;
    
    // 更新页面标题
    document.getElementById('previewTitle').textContent = `${template.name} - 预览`;
    
    // 滚动到预览区域
    document.getElementById('previewSection').scrollIntoView({ behavior: 'smooth' });
}

// 显示通知
function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// 复制SVG代码到剪贴板
function copyToClipboard(text) {
    // 创建临时textarea元素
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        const successful = document.execCommand('copy');
        if (successful) {
            showNotification('SVG代码已复制到剪贴板！');
        } else {
            showNotification('复制失败，请手动复制代码');
        }
    } catch (err) {
        console.error('复制失败:', err);
        showNotification('复制失败，请手动复制代码');
    }
    
    document.body.removeChild(textArea);
}

// 安全配置 - 放在文件底部增加一点安全性
const SECURITY_CONFIG = {
    // 密码经过Base64编码处理 - SeaChangeSVG
    validPassword: "U2VhQ2hhbmdlU1ZH", 
    maxAttempts: 5,
    lockoutTime: 300000 // 5分钟锁定
};

// 初始化页面
document.addEventListener('DOMContentLoaded', () => {
    // 登录按钮事件
    document.getElementById('loginBtn').addEventListener('click', function() {
        const passwordInput = document.getElementById('password');
        const errorMessage = document.getElementById('errorMessage');
        const loginBtn = this;
        
        // 显示加载状态
        loginBtn.classList.add('loading');
        
        // 模拟加载延迟
        setTimeout(() => {
            const result = validatePassword(passwordInput.value);
            
            if (result.valid) {
                // 登录成功
                document.getElementById('loginContainer').style.display = 'none';
                document.getElementById('appContainer').style.display = 'flex';
                initTemplateList();
                initSearch();
            } else {
                // 登录失败
                errorMessage.textContent = result.message;
                errorMessage.classList.add('show');
                passwordInput.value = '';
                passwordInput.focus();
                
                // 移除加载状态
                loginBtn.classList.remove('loading');
                
                // 添加输入框错误动画
                passwordInput.style.animation = 'shake 0.5s';
                setTimeout(() => {
                    passwordInput.style.animation = '';
                }, 500);
            }
        }, 1000);
    });
    
    // 回车键登录
    document.getElementById('password').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            document.getElementById('loginBtn').click();
        }
    });
    
    // 添加复制按钮事件
    document.getElementById('copyPreviewBtn').addEventListener('click', () => {
        const svgContent = document.getElementById('codeContainer').textContent;
        copyToClipboard(svgContent);
    });
    
    document.getElementById('copyCodeBtn').addEventListener('click', () => {
        const svgContent = document.getElementById('codeContainer').textContent;
        copyToClipboard(svgContent);
    });
});