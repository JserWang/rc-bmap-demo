export default [
  {
    text: '地图示例',
    children: [
      {
        text: '地图展示',
        path: '/map',
      },
      {
        text: '同时加载两个地图',
        path: '/twoMap',
      },
      {
        text: '根据城市名设置地图中心点',
        path: '/center',
      },
      {
        text: '设置地图最大、最小级别',
        path: '/mostZoom',
      },
      {
        text: '移动地图',
        path: '/move',
      },
      {
        text: '缩放地图',
        path: '/setZoom',
      },
      {
        text: '拖拽地图',
        path: '/dragging',
      },
      {
        text: '设置地图显示范围',
        path: '/setBounds',
      },
      {
        text: '获取地图显示范围',
        path: '/getBounds',
      },
      {
        text: '获取两点间距离',
        path: '/getDistance',
      },
      {
        text: '关闭默认地图POI事件',
        path: '/closePOI',
      },
    ],
  },
  {
    text: '地图控件示例',
    children: [
      {
        text: '添加工具条、比例尺控件',
        path: '/navigation_scale',
      },
      {
        text: '添加/删除地图类型、缩略图控件',
        path: '/mapTypeCtrl',
      },
      {
        text: '定位控件',
        path: '/geolocation',
      },
      {
        text: '缩略地图控件',
        path: '/overviewMap',
      },
      {
        text: '切换全景地图控件',
        path: '/panorama',
      },
      {
        text: '版权控件',
        path: '/copyright',
      },
      {
        text: '城市列表控件',
        path: '/cityList',
      },
    ],
  },
  {
    text: '覆盖物',
    children: [
      {
        text: '圆',
        path: '/circle',
      },
      {
        text: '信息窗口',
        path: '/infoWindow',
      },
      {
        text: '文本标注',
        path: '/label',
      },
      {
        text: '标注',
        path: '/marker',
      },
      {
        text: '多边形',
        path: '/polygon',
      },
      {
        text: '折线',
        path: '/polyline',
      },
      {
        text: '矢量图标注',
        path: '/symbol',
      },
      {
        text: '行政区域',
        path: '/boundary',
      },
      {
        text: '海量标注',
        path: '/pointCollection',
      },
      {
        text: '地面叠加层',
        path: '/ground',
      },
    ],
  },
  {
    text: '规划',
    children: [
      {
        text: '公交线路规划',
        path: '/transitRoute',
      },
      {
        text: '驾车路线规划',
        path: '/drivingRoute',
      },
      {
        text: '骑行路线规划',
        path: '/ridingRoute',
      },
      {
        text: '步行路线规划',
        path: '/walkingRoute',
      },
      {
        text: '周边检索',
        path: '/localSearch',
      },
      {
        text: '公交路线搜索',
        path: '/busLineSearch',
      },
    ],
  },
  {
    text: '扩展库',
    children: [
      {
        text: '点聚合',
        path: '/markerClusterer',
      },
      {
        text: '抛物线',
        path: '/curveLine',
      },
      {
        text: '绘制工具',
        path: '/drawingManager',
      },
      {
        text: '热力图',
        path: '/heatmap',
      },
      {
        text: '路况控件',
        path: '/trafficControl',
      },
      {
        text: '测距工具',
        path: '/distanceTool',
      },
    ],
  },
  {
    text: '其他',
    children: [
      {
        text: '自动完成类',
        path: '/autoComplete',
      },
      {
        text: '自定义图层',
        path: '/tile',
      },
    ],
  },
];

