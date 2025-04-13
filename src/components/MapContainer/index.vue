<template>
  <div class="map-container">
    <div ref="Map" class="GlobalMap"></div>
    <!-- 底部统计信息 -->
    <div class="stats-container">
      <div class="stat-item">
        <div class="stat-icon browser-icon"></div>
        <div class="stat-content">
          <div class="stat-value">34,952</div>
          <div class="stat-label">全球网站访问量</div>
        </div>
      </div>
      <div class="stat-item">
        <div class="stat-icon attack-icon"></div>
        <div class="stat-content">
          <div class="stat-value">3,366</div>
          <div class="stat-label">全球攻击总量</div>
        </div>
      </div>
      <div class="stat-item">
        <div class="stat-icon data-icon"></div>
        <div class="stat-content">
          <div class="stat-value">26,120</div>
          <div class="stat-label">区域访问总量</div>
        </div>
      </div>
      <div class="stat-item">
        <div class="stat-icon security-icon"></div>
        <div class="stat-content">
          <div class="stat-value">19,743</div>
          <div class="stat-label">僵尸网络访问量</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import world from "../../assets/maps/world.json";
import * as echarts from "echarts";
export default {
  props: {
    attackData: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {};
  },
  mounted() {
    this.Global();
    window.addEventListener("resize", this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
  },
  watch: {
    attackData: {
      handler() {
        this.Global();
      },
      deep: true
    }
  },
  methods: {
    Global() {
      var mycontractMap = echarts.init(this.$refs.Map);
      echarts.registerMap("world", world);
      let nameMap = {
        Afghanistan: "阿富汗",
        Singapore: "新加坡",
        Angola: "安哥拉",
        Albania: "阿尔巴尼亚",
        "United Arab Emirates": "阿联酋",
        Argentina: "阿根廷",
        Armenia: "亚美尼亚",
        "French Southern and Antarctic Lands": "法属南半球和南极领地",
        Australia: "澳大利亚",
        Austria: "奥地利",
        Azerbaijan: "阿塞拜疆",
        Burundi: "布隆迪",
        Belgium: "比利时",
        Benin: "贝宁",
        "Burkina Faso": "布基纳法索",
        Bangladesh: "孟加拉国",
        Bulgaria: "保加利亚",
        "The Bahamas": "巴哈马",
        "Bosnia and Herzegovina": "波斯尼亚和黑塞哥维那",
        Belarus: "白俄罗斯",
        Belize: "伯利兹",
        Bermuda: "百慕大",
        Bolivia: "玻利维亚",
        Brazil: "巴西",
        Brunei: "文莱",
        Bhutan: "不丹",
        Botswana: "博茨瓦纳",
        "Central African Republic": "中非共和国",
        Canada: "加拿大",
        Switzerland: "瑞士",
        Chile: "智利",
        China: "中国",
        "Ivory Coast": "象牙海岸",
        Cameroon: "喀麦隆",
        "Democratic Republic of the Congo": "刚果民主共和国",
        "Republic of the Congo": "刚果共和国",
        Colombia: "哥伦比亚",
        "Costa Rica": "哥斯达黎加",
        Cuba: "古巴",
        "Northern Cyprus": "北塞浦路斯",
        Cyprus: "塞浦路斯",
        "Czech Republic": "捷克共和国",
        Germany: "德国",
        Djibouti: "吉布提",
        Denmark: "丹麦",
        "Dominican Republic": "多明尼加共和国",
        Algeria: "阿尔及利亚",
        Ecuador: "厄瓜多尔",
        Egypt: "埃及",
        Eritrea: "厄立特里亚",
        Spain: "西班牙",
        Estonia: "爱沙尼亚",
        Ethiopia: "埃塞俄比亚",
        Finland: "芬兰",
        Fiji: "斐",
        "Falkland Islands": "福克兰群岛",
        France: "法国",
        Gabon: "加蓬",
        "United Kingdom": "英国",
        Georgia: "格鲁吉亚",
        Ghana: "加纳",
        Guinea: "几内亚",
        Gambia: "冈比亚",
        "Guinea Bissau": "几内亚比绍",
        Greece: "希腊",
        Greenland: "格陵兰",
        Guatemala: "危地马拉",
        "French Guiana": "法属圭亚那",
        Guyana: "圭亚那",
        Honduras: "洪都拉斯",
        Croatia: "克罗地亚",
        Haiti: "海地",
        Hungary: "匈牙利",
        Indonesia: "印度尼西亚",
        India: "印度",
        Ireland: "爱尔兰",
        Iran: "伊朗",
        Iraq: "伊拉克",
        Iceland: "冰岛",
        Israel: "以色列",
        Italy: "意大利",
        Jamaica: "牙买加",
        Jordan: "约旦",
        Japan: "日本",
        Kazakhstan: "哈萨克斯坦",
        Kenya: "肯尼亚",
        Kyrgyzstan: "吉尔吉斯斯坦",
        Cambodia: "柬埔寨",
        Kosovo: "科索沃",
        Kuwait: "科威特",
        Laos: "老挝",
        Lebanon: "黎巴嫩",
        Liberia: "利比里亚",
        Libya: "利比亚",
        "Sri Lanka": "斯里兰卡",
        Lesotho: "莱索托",
        Lithuania: "立陶宛",
        Luxembourg: "卢森堡",
        Latvia: "拉脱维亚",
        Morocco: "摩洛哥",
        Moldova: "摩尔多瓦",
        Madagascar: "马达加斯加",
        Mexico: "墨西哥",
        Macedonia: "马其顿",
        Mali: "马里",
        Myanmar: "缅甸",
        Montenegro: "黑山",
        Mongolia: "蒙古",
        Mozambique: "莫桑比克",
        Mauritania: "毛里塔尼亚",
        Malawi: "马拉维",
        Malaysia: "马来西亚",
        Namibia: "纳米比亚",
        "New Caledonia": "新喀里多尼亚",
        Niger: "尼日尔",
        Nigeria: "尼日利亚",
        Nicaragua: "尼加拉瓜",
        Netherlands: "荷兰",
        Norway: "挪威",
        Nepal: "尼泊尔",
        "New Zealand": "新西兰",
        Oman: "阿曼",
        Pakistan: "巴基斯坦",
        Panama: "巴拿马",
        Peru: "秘鲁",
        Philippines: "菲律宾",
        "Papua New Guinea": "巴布亚新几内亚",
        Poland: "波兰",
        "Puerto Rico": "波多黎各",
        "North Korea": "北朝鲜",
        Portugal: "葡萄牙",
        Paraguay: "巴拉圭",
        Qatar: "卡塔尔",
        Romania: "罗马尼亚",
        Russia: "俄罗斯",
        Rwanda: "卢旺达",
        "Western Sahara": "西撒哈拉",
        "Saudi Arabia": "沙特阿拉伯",
        Sudan: "苏丹",
        "South Sudan": "南苏丹",
        Senegal: "塞内加尔",
        "Solomon Islands": "所罗门群岛",
        "Sierra Leone": "塞拉利昂",
        "El Salvador": "萨尔瓦多",
        Somaliland: "索马里兰",
        Somalia: "索马里",
        "Republic of Serbia": "塞尔维亚",
        Suriname: "苏里南",
        Slovakia: "斯洛伐克",
        Slovenia: "斯洛文尼亚",
        Sweden: "瑞典",
        Swaziland: "斯威士兰",
        Syria: "叙利亚",
        Chad: "乍得",
        Togo: "多哥",
        Thailand: "泰国",
        Tajikistan: "塔吉克斯坦",
        Turkmenistan: "土库曼斯坦",
        "East Timor": "东帝汶",
        "Trinidad and Tobago": "特里尼达和多巴哥",
        Tunisia: "突尼斯",
        Turkey: "土耳其",
        "United Republic of Tanzania": "坦桑尼亚",
        Uganda: "乌干达",
        Ukraine: "乌克兰",
        Uruguay: "乌拉圭",
        "United States": "美国",
        Uzbekistan: "乌兹别克斯坦",
        Venezuela: "委内瑞拉",
        Vietnam: "越南",
        Vanuatu: "瓦努阿图",
        "West Bank": "西岸",
        Yemen: "也门",
        "South Africa": "南非",
        Zambia: "赞比亚",
        Korea: "韩国",
        Tanzania: "坦桑尼亚",
        Zimbabwe: "津巴布韦",
        Congo: "刚果",
        "Central African Rep.": "中非",
        Serbia: "塞尔维亚",
        "Bosnia and Herz.": "波黑",
        "Czech Rep.": "捷克",
        "W. Sahara": "西撒哈拉",
        "Lao PDR": "老挝",
        "Dem.Rep.Korea": "朝鲜",
        "Falkland Is.": "福克兰群岛",
        "Timor-Leste": "东帝汶",
        "Solomon Is.": "所罗门群岛",
        Palestine: "巴勒斯坦",
        "N. Cyprus": "北塞浦路斯",
        Aland: "奥兰群岛",
        "Fr. S. Antarctic Lands": "法属南半球和南极陆地",
        Mauritius: "毛里求斯",
        Comoros: "科摩罗",
        "Eq. Guinea": "赤道几内亚",
        "Guinea-Bissau": "几内亚比绍",
        "Dominican Rep.": "多米尼加",
        "Saint Lucia": "圣卢西亚",
        Dominica: "多米尼克",
        "Antigua and Barb.": "安提瓜和巴布达",
        "U.S. Virgin Is.": "美国原始岛屿",
        Montserrat: "蒙塞拉特",
        Grenada: "格林纳达",
        Barbados: "巴巴多斯",
        Samoa: "萨摩亚",
        Bahamas: "巴哈马",
        "Cayman Is.": "开曼群岛",
        "Faeroe Is.": "法罗群岛",
        "IsIe of Man": "马恩岛",
        Malta: "马耳他共和国",
        Jersey: "泽西",
        "Cape Verde": "佛得角共和国",
        "Turks and Caicos Is.": "特克斯和凯科斯群岛",
        "St. Vin. and Gren.": "圣文森特和格林纳丁斯",
      };

      // 标记点数据
      const geoCoordMap = {
        '上海': [121.4648, 31.2891],
        '北京': [116.4551, 40.2539],
        '广州': [113.2644, 23.1292],
        '伦敦': [-0.1278, 51.5074],
        '中国': [105.0, 35.0],
        '韩国': [127.5, 37.0],
        '俄罗斯': [105.0, 60.0],
        '印度': [78.0, 21.0],
        '东京': [139.6917, 35.6895],
        '纽约': [-74.0060, 40.7128],
        '迪拜': [55.2708, 25.2048],
        '莫斯科': [37.6173, 55.7558],
      };

      // 使用传入的攻击数据，如果没有则使用默认数据
      const mapAttackData = this.attackData && this.attackData.length > 0 ? this.attackData : [
        {
          name: '中国 北京',
          ip: '192.168.1.1.1',
          packages: '45，112',
          value: 90,
          coords: [116.4551, 40.2539],
          symbolSize: 16,
          itemStyle: { color: '#FF4D4F' }
        },
        {
          name: '韩国 平壤',
          ip: '192.100.1.3.1',
          packages: '103，124',
          value: 70,
          coords: [125.7625, 39.0392],
          symbolSize: 16,
          itemStyle: { color: '#FF4D4F' }
        },
        {
          name: '俄罗斯 莫斯科',
          ip: '192.177.1.1.3',
          packages: '95，110',
          value: 60,
          coords: [37.6173, 55.7558],
          symbolSize: 16,
          itemStyle: { color: '#FF4D4F' }
        },
        {
          name: '德国 柏林',
          ip: '202.153.1.1.1',
          packages: '55，118',
          value: 55,
          coords: [13.4050, 52.5200],
          symbolSize: 16,
          itemStyle: { color: '#FF4D4F' }
        },
        {
          name: '英国 伦敦',
          ip: '202.153.1.1.1',
          packages: '55，118',
          value: 55,
          coords: [-0.1278, 51.5074],
          symbolSize: 16,
          itemStyle: { color: '#FF4D4F' }
        },
        {
          name: '韩国 首尔',
          ip: '192.177.1.3.1',
          packages: '95，116',
          value: 65,
          coords: [127.0, 37.5665],
          symbolSize: 16,
          itemStyle: { color: '#FF4D4F' }
        }
      ];

      // 区域信息
      const regionInfo = [
        {
          name: '伊斯兰地区',
          location: '伊朗/土耳其/伊拉克/埃及/沙特阿拉伯',
          coords: [55, 30],
          symbolSize: 0,
        }
      ];

      // 将数据转换为地图点
      const convertData = function (data) {
        const res = [];
        for (let i = 0;i < data.length;i++) {
          const geoCoord = geoCoordMap[data[i].name];
          if (geoCoord) {
            res.push({
              name: data[i].name,
              value: geoCoord.concat(data[i].value),
            });
          }
        }
        return res;
      };

      let option = {
        backgroundColor: '#070C30', // 蓝色背景

        // 鼠标悬浮提示框
        tooltip: {
          trigger: "item",
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          borderColor: "rgba(32, 128, 255, 0.8)",
          borderWidth: 1,
          textStyle: {
            color: '#fff',
            fontSize: 12
          },
          formatter: function (params) {
            if (params.seriesType === 'effectScatter' && params.seriesName === '攻击标记') {
              // 自定义攻击点的提示框
              const data = mapAttackData.find(item => item.name === params.name);
              if (data) {
                return `
                  <div style="padding: 5px;">
                    <div style="font-weight: bold; margin-bottom: 5px;">${data.name}</div>
                    <div>IP地址: ${data.ip}</div>
                    <div>数据包: ${data.packages}</div>
                  </div>
                `;
              }
              return params.name;
            } else if (params.seriesType === 'effectScatter') {
              return `${params.name}: ${params.value[2]}`;
            } else if (params.name) {
              return params.name + (params.value ? ': ' + params.value : '');
            }
          },
        },

        // 添加坐标系配置
        geo: {
          show: false, // 设为不显示，只用于坐标定位，不显示地图
          map: 'world',
          roam: true,
          zoom: 1.2,
          scaleLimit: { min: 0.8, max: 2 }, // 限制缩放比例为0.8到2
          center: [0, 30],
          itemStyle: {
            normal: {
              areaColor: 'transparent', // 透明，不显示区域
              borderColor: 'transparent', // 不显示边框
              borderWidth: 0,
              shadowBlur: 0
            },
            emphasis: {
              areaColor: 'transparent'
            }
          },
          label: {
            normal: { show: false },
            emphasis: { show: false }
          }
        },

        // 添加必需的坐标轴配置
        xAxis: { show: false },
        yAxis: { show: false },
        grid: { show: false },

        series: [
          {
            name: "世界地图",
            type: "map",
            map: "world",
            top: 20,
            zoom: 1.2,
            roam: true, // 允许拖拽和缩放
            scaleLimit: { min: 0.8, max: 2 }, // 限制缩放比例为0.8到2
            center: [0, 30], // 地图中心点
            itemStyle: {
              normal: {
                areaColor: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                    offset: 0, color: '#112158' // 渐变起始色
                  }, {
                    offset: 1, color: '#0C1B4A' // 渐变结束色
                  }]
                }, // 更改为渐变色
                borderColor: '#1990FF', // 区域边框颜色
                borderWidth: 1.5, // 增加边框宽度
                shadowColor: 'rgba(25, 144, 255, 0.3)',
                shadowBlur: 8 // 增加阴影模糊度
              },
              emphasis: {
                areaColor: '#2470C1', // 鼠标悬浮区域颜色
                shadowColor: 'rgba(25, 144, 255, 0.5)',
                shadowBlur: 15, // 增加阴影模糊度
                borderWidth: 1.5 // 增加边框宽度
              },
            },
            label: {
              normal: {
                show: false,
              },
              emphasis: {
                show: false,
              },
            },
            data: [],
            nameMap: nameMap,
          },
          {
            // 散点图 - 世界主要城市
            name: '城市标记',
            type: 'scatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            symbol: 'circle',
            symbolSize: function (val) {
              return val[2] / 10 + 5;
            },
            itemStyle: {
              normal: {
                color: '#FFC745', // 散点颜色
                shadowBlur: 10,
                shadowColor: 'rgba(255, 199, 69, 0.5)'
              }
            },
            data: convertData(mapAttackData)
          },
          // 添加攻击标记点
          {
            name: '攻击标记',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 3,
            rippleEffect: {
              brushType: 'fill',
              scale: 6,
              period: 3
            },
            label: {
              show: false // 不直接显示标签
            },
            tooltip: {
              show: true,
              enterable: true, // 鼠标可进入提示框
              position: 'right',
              formatter: function (params) {
                const data = mapAttackData.find(item => item.name === params.name);
                if (data) {
                  return `
                    <div style="width: 180px; background-color: rgba(95, 0, 0, 0.9); border-radius: 4px; border: 2px solid #c00; padding: 10px; color: #fff; box-shadow: 0 0 15px rgba(255, 0, 0, 0.2);">
                      <div style="font-weight: bold; margin-bottom: 8px; font-size: 14px; border-bottom: 1px solid rgba(255, 255, 255, 0.3); padding-bottom: 5px">${data.name}</div>
                      <div style="margin: 5px 0; font-size: 12px;">IP地址: ${data.ip}</div>
                      <div style="margin: 5px 0; font-size: 12px;">数据包: ${data.packages}</div>
                    </div>
                  `;
                }
                return params.name;
              }
            },
            itemStyle: {
              normal: {
                color: '#FF4D4F',
                shadowBlur: 10,
                shadowColor: 'rgba(255, 77, 79, 0.8)'
              }
            },
            data: mapAttackData.map(item => ({
              name: item.name,
              value: item.coords.concat(item.value),
              symbolSize: item.symbolSize || 12,
              itemStyle: item.itemStyle
            }))
          }
        ],
      };

      mycontractMap.setOption(option);

      // 监听地图缩放和移动事件
      mycontractMap.on('georoam', function () {
        // 当地图移动或缩放时，强制更新标记点位置
        mycontractMap.setOption({
          series: option.series
        });
      });
    },
    handleResize() {
      const chart = echarts.getInstanceByDom(this.$refs.Map);
      if (chart) {
        chart.resize();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.map-container {
  width: 100%;
  height: 100%;
  min-height: 600px;
  position: relative;
  display: flex;
  flex-direction: column;
}

.GlobalMap {
  width: 100%;
  flex: 1;
  background: #070C30;
  position: relative;
}

.stats-container {
  position: relative;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 80px; // 增加高度
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: rgba(7, 12, 48, 0.95); // 增加背景不透明度
  border-top: 1px solid rgba(32, 128, 255, 0.5); // 更明显的边框
  padding: 0 20px;
  z-index: 10;
  box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.3); // 添加阴影效果
}

.stat-item {
  display: flex;
  flex-direction: row; // 改为水平排列
  align-items: center;
  color: #fff;
  padding: 10px 15px; // 增加内边距
  border-radius: 6px; // 添加圆角
  transition: all 0.3s ease; // 添加过渡效果
  width: 22%; // 控制宽度

  &:hover {
    background-color: rgba(32, 128, 255, 0.2); // 鼠标悬停效果
    transform: translateY(-3px); // 微小上移动画
  }
}

.stat-icon {
  width: 32px; // 增大图标尺寸
  height: 32px;
  margin-right: 12px; // 与右侧文字的距离
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  flex-shrink: 0; // 防止图标缩小
}

// 文字内容容器
.stat-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start; // 左对齐
}

.stat-value {
  font-size: 20px; // 增大字体
  font-weight: bold;
  color: #00CCFF;
  margin-bottom: 4px;
  text-shadow: 0 0 8px rgba(0, 204, 255, 0.5); // 添加文本阴影
}

.stat-label {
  font-size: 12px; // 增大字体
  color: rgba(255, 255, 255, 0.8); // 增加对比度
}

.browser-icon {
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="%230099ff"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93s3.06-7.44 7-7.93v15.86zm2-15.86c1.03.13 2 .45 2.87.93H13v-.93zM13 7h5.24c.25.31.48.65.68 1H13V7zm0 3h6.74c.08.33.15.66.19 1H13v-1zm0 9.93V19h2.87c-.87.48-1.84.8-2.87.93zM18.24 17H13v-1h5.92c-.2.35-.43.69-.68 1zm1.5-3H13v-1h6.93c-.04.34-.11.67-.19 1z"/></svg>');
}

.attack-icon {
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="%23ff4d4f"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/></svg>');
}

.data-icon {
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="%2300cc99"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z"/></svg>');
}

.security-icon {
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="%23ffcc00"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/></svg>');
}
</style>
