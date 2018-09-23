export default [
  {
    text: '地图示例',
    path: '/map',
    children: [
      {
        text: '地图展示',
        path: '/show',
      },
      {
        text: '同时加载两个地图',
        path: '/double',
      },
      {
        text: '根据城市名设置地图中心点',
        path: '/center',
      },
      {
        text: '设置地图最大、最小级别',
        path: '/range',
      },
      {
        text: '移动地图',
        path: '/moving',
      },
      {
        text: '缩放地图',
        path: '/zoom',
      },
      {
        text: '拖拽地图',
        path: '/dragging',
      },
      // TODO: rc-bmap 需支持
      // {
      //   text: '设置地图显示范围',
      //   path: '/setBounds',
      // },
      {
        text: '获取地图显示范围',
        path: '/bounds',
      },
      {
        text: '获取两点间距离',
        path: '/distance',
      },
      {
        text: '关闭默认地图POI事件',
        path: '/click',
      },
    ],
  },
  {
    text: '地图控件示例',
    path: '/control',
    children: [
      {
        text: '添加工具条、比例尺控件',
        path: '/navscale',
      },
      {
        text: '添加/删除地图类型、缩略图控件',
        path: '/maptype',
      },
      {
        text: '添加定位相关控件',
        path: '/geolocation',
      },
      {
        text: '添加第三方版权控件',
        path: '/copyright',
      },
      {
        text: '添加自定义控件',
        path: '/custom',
      },
      {
        text: '添加城市列表控件',
        path: '/city',
      },
    ],
  },
  {
    text: '覆盖物示例',
    path: '/overlay',
    children: [
      {
        text: '添加/删除覆盖物',
        path: '/normal',
      },
      {
        text: '折线上添加箭头',
        path: '/polyline',
      },
      {
        text: '设置点的弹跳动画',
        path: '/marker',
      },
      {
        text: '设置点的新图标',
        path: '/icon',
      },
      {
        text: '设置点的是否可拖拽',
        path: '/dragging',
      },
      {
        text: '设置线、面可编辑',
        path: '/editing',
      },
      {
        text: '设置覆盖物的显示/隐藏',
        path: '/display',
      },
      {
        text: '添加文字标签',
        path: '/label',
      },
      {
        text: '设置覆盖物的文字标签',
        path: '/markerlabel',
      },
      {
        text: '获取覆盖物信息',
        path: '/instance',
      },
      {
        text: '添加多个点示例',
        path: '/multiple',
      },
      {
        text: '从多个点里删除特定点',
        path: '/remove',
      },
      // {
      //   text: '加载闪烁点',
      //   path: '/showStars',
      // },
      {
        text: '加载海量点',
        path: '/massive',
      },
      {
        text: '添加弧线',
        path: '/curve_line',
      },
      {
        text: '添加椭圆',
        path: '/oval',
      },
      {
        text: '添加行政区域',
        path: '/boundary',
      },
      {
        text: '添加自定义覆盖物',
        path: '/customOverlay',
      },
      {
        text: '添加/删除地面叠加层',
        path: '/ground',
      },
      {
        text: '点聚合',
        path: '/markerClusterer',
      },
      {
        text: '添加热力图',
        path: '/heatmap',
      },
      {
        text: '矢量图标',
        path: '/symbol',
      },
    ],
  },
  {
    text: '信息窗口示例',
    path: '/infoWindow',
    children: [
      {
        text: '添加纯文字的信息窗口',
        path: '/text',
      },
      {
        text: '添加图文结合的信息窗口',
        path: '/picture',
      },
      {
        text: '添加带检索功能的信息窗口',
        path: '/search',
      },
      {
        text: '给多个点添加信息窗口',
        path: '/multiple',
      },
      {
        text: '获取信息窗口的内容',
        path: '/getContent',
      },
    ],
  },
  {
    text: '右键菜单示例',
    path: '/menu',
    children: [
      {
        text: '给地图添加右键菜单',
        path: '/mapMenu',
      },
      {
        text: '给覆盖物添加右键菜单',
        path: '/overlayMenu',
      },
    ],
  },
  {
    text: '叠加层示例',
    path: '/layer',
    children: [
      {
        text: '叠加/删除路况图层',
        path: '/trafficControl',
      },
      {
        text: '叠加/删除清华微观图',
        path: '/tileLayer1',
      },
      {
        text: '叠加/删除魔兽地图',
        path: '/tileLayer2',
      },
      {
        text: '叠加/删除自定义网格',
        path: '/tileLayer3',
      },
    ],
  },
  {
    text: '事件示例',
    path: '/event',
    children: [
      {
        text: '图块加载完成事件',
        path: '/tilesloaded',
      },
      {
        text: '地图单击事件',
        path: '/click',
      },
      {
        text: '给覆盖物注册事件',
        path: '/addEvent',
      },
      {
        text: '传递事件参数',
        path: '/param',
      },
      {
        text: '为多个点注册单击事件',
        path: '/addEvents',
      },
      {
        text: '注销事件',
        path: '/removeEvent',
      },
    ],
  },
  {
    text: '输入提示示例',
    path: '/autoComplete',
    children: [
      {
        text: '关键字提示输入',
        path: '/autoComplete',
      },
    ],
  },
];
