<template>
  <div class="flex flex-col gap-6">
    <div class="bg-white rounded-lg shadow-sm p-4">
      <div class="mb-4">
        <h4 class="m-0 mb-1 text-base font-semibold">事件类型分布</h4>
        <p class="m-0 text-sm text-gray-500">按事件类型统计的分布情况</p>
      </div>
      <div class="h-[200px] flex items-center justify-between">
        <!-- 饼图展示区域 -->
        <div class="flex items-center justify-center h-full">
          <div class="relative w-[150px] h-[150px] rounded-full overflow-hidden bg-gray-100">
            <div class="absolute w-full h-full"
              style="background: conic-gradient(#4e79a7 0% 45%, transparent 45% 100%);"></div>
            <div class="absolute w-full h-full rotate-[162deg]"
              style="background: conic-gradient(#f28e2c 0% 25%, transparent 25% 100%);"></div>
            <div class="absolute w-full h-full rotate-[252deg]"
              style="background: conic-gradient(#e15759 0% 15%, transparent 15% 100%);"></div>
            <div class="absolute w-full h-full rotate-[306deg]"
              style="background: conic-gradient(#76b7b2 0% 15%, transparent 15% 100%);"></div>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <div class="flex items-center gap-2 text-sm">
            <span class="inline-block w-3 h-3 rounded bg-[#4e79a7]"></span>
            <span>交通事故 (45%)</span>
          </div>
          <div class="flex items-center gap-2 text-sm">
            <span class="inline-block w-3 h-3 rounded bg-[#f28e2c]"></span>
            <span>治安事件 (25%)</span>
          </div>
          <div class="flex items-center gap-2 text-sm">
            <span class="inline-block w-3 h-3 rounded bg-[#e15759]"></span>
            <span>消防事件 (15%)</span>
          </div>
          <div class="flex items-center gap-2 text-sm">
            <span class="inline-block w-3 h-3 rounded bg-[#76b7b2]"></span>
            <span>其他 (15%)</span>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white rounded-lg shadow-sm p-4">
      <div class="mb-4">
        <h4 class="m-0 mb-1 text-base font-semibold">过去30天事件趋势</h4>
        <p class="m-0 text-sm text-gray-500">按日期统计的事件数量变化</p>
      </div>
      <div class="h-[200px] relative">
        <!-- 折线图展示区域 -->
        <div class="w-full h-full relative py-2.5">
          <div class="absolute bottom-0 left-0 w-full h-px bg-gray-200"></div>
          <div class="absolute top-0 left-0 w-px h-full bg-gray-200"></div>
          <svg class="absolute top-2.5 left-0 w-full h-[calc(100%-5px)]">
            <path
              d="M0,150 L20,130 L40,140 L60,100 L80,110 L100,90 L120,80 L140,70 L160,85 L180,65 L200,55 L220,45 L240,60 L260,40 L280,30 L300,20"
              fill="none" stroke="#4e79a7" stroke-width="2"></path>
          </svg>
          <div class="absolute top-0 left-0 w-full h-full">
            <div class="absolute w-1.5 h-1.5 bg-[#4e79a7] rounded-full transform -translate-x-1/2 -translate-y-1/2"
              style="left: 0%; top: 86.7%;"></div>
            <div class="absolute w-1.5 h-1.5 bg-[#4e79a7] rounded-full transform -translate-x-1/2 -translate-y-1/2"
              style="left: 6.9%; top: 80%;"></div>
            <div class="absolute w-1.5 h-1.5 bg-[#4e79a7] rounded-full transform -translate-x-1/2 -translate-y-1/2"
              style="left: 13.8%; top: 83.3%;"></div>
            <div class="absolute w-1.5 h-1.5 bg-[#4e79a7] rounded-full transform -translate-x-1/2 -translate-y-1/2"
              style="left: 20.7%; top: 66.7%;"></div>
            <div class="absolute w-1.5 h-1.5 bg-[#4e79a7] rounded-full transform -translate-x-1/2 -translate-y-1/2"
              style="left: 27.6%; top: 70%;"></div>
            <div class="absolute w-1.5 h-1.5 bg-[#4e79a7] rounded-full transform -translate-x-1/2 -translate-y-1/2"
              style="left: 34.5%; top: 60%;"></div>
            <div class="absolute w-1.5 h-1.5 bg-[#4e79a7] rounded-full transform -translate-x-1/2 -translate-y-1/2"
              style="left: 41.4%; top: 53.3%;"></div>
            <div class="absolute w-1.5 h-1.5 bg-[#4e79a7] rounded-full transform -translate-x-1/2 -translate-y-1/2"
              style="left: 48.3%; top: 46.7%;"></div>
            <div class="absolute w-1.5 h-1.5 bg-[#4e79a7] rounded-full transform -translate-x-1/2 -translate-y-1/2"
              style="left: 55.2%; top: 56.7%;"></div>
            <div class="absolute w-1.5 h-1.5 bg-[#4e79a7] rounded-full transform -translate-x-1/2 -translate-y-1/2"
              style="left: 62.1%; top: 43.3%;"></div>
            <div class="absolute w-1.5 h-1.5 bg-[#4e79a7] rounded-full transform -translate-x-1/2 -translate-y-1/2"
              style="left: 69%; top: 36.7%;"></div>
            <div class="absolute w-1.5 h-1.5 bg-[#4e79a7] rounded-full transform -translate-x-1/2 -translate-y-1/2"
              style="left: 75.9%; top: 30%;"></div>
            <div class="absolute w-1.5 h-1.5 bg-[#4e79a7] rounded-full transform -translate-x-1/2 -translate-y-1/2"
              style="left: 82.8%; top: 40%;"></div>
            <div class="absolute w-1.5 h-1.5 bg-[#4e79a7] rounded-full transform -translate-x-1/2 -translate-y-1/2"
              style="left: 89.7%; top: 26.7%;"></div>
            <div class="absolute w-1.5 h-1.5 bg-[#4e79a7] rounded-full transform -translate-x-1/2 -translate-y-1/2"
              style="left: 96.6%; top: 20%;"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-3 gap-4">
      <div class="bg-white rounded-lg shadow-sm p-4 flex items-center gap-4">
        <div class="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-50 text-blue-500">
          <AlertTriangleIcon class="h-6 w-6" />
        </div>
        <div>
          <h5 class="m-0 mb-1 text-sm text-gray-500 font-medium">总事件数</h5>
          <p class="m-0 mb-1 text-lg font-semibold">1,248</p>
          <p class="m-0 text-xs text-green-600">+12% 较上月</p>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow-sm p-4 flex items-center gap-4">
        <div class="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-50 text-blue-500">
          <ClockIcon class="h-6 w-6" />
        </div>
        <div>
          <h5 class="m-0 mb-1 text-sm text-gray-500 font-medium">平均处理时间</h5>
          <p class="m-0 mb-1 text-lg font-semibold">42分钟</p>
          <p class="m-0 text-xs text-red-600">-8% 较上月</p>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow-sm p-4 flex items-center gap-4">
        <div class="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-50 text-blue-500">
          <MapPinIcon class="h-6 w-6" />
        </div>
        <div>
          <h5 class="m-0 mb-1 text-sm text-gray-500 font-medium">高频区域</h5>
          <p class="m-0 mb-1 text-lg font-semibold">市中心</p>
          <p class="m-0 text-xs">占比28%</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { AlertTriangleIcon, ClockIcon, MapPinIcon } from 'lucide-vue-next'
</script>

<style scoped>
.data-visualization {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.chart-container {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 1rem;
}

.chart-header {
  margin-bottom: 1rem;
}

.chart-header h4 {
  margin: 0 0 0.25rem 0;
  font-size: 1rem;
  font-weight: 600;
}

.chart-desc {
  margin: 0;
  font-size: 0.875rem;
  color: #6c757d;
}

.chart {
  height: 200px;
  position: relative;
}

.chart-placeholder {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 饼图样式 */
.pie-chart {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.pie-chart-visual {
  width: 150px;
  height: 150px;
  position: relative;
  border-radius: 50%;
  overflow: hidden;
  background: #f0f0f0;
}

.pie-segment {
  position: absolute;
  width: 100%;
  height: 100%;
  transform: rotate(0);
  transform-origin: 50% 50%;
  background: conic-gradient(var(--color) 0% var(--percent), transparent var(--percent) 100%);
}

.pie-segment:nth-child(2) {
  transform: rotate(calc(3.6deg * 45));
}

.pie-segment:nth-child(3) {
  transform: rotate(calc(3.6deg * 70));
}

.pie-segment:nth-child(4) {
  transform: rotate(calc(3.6deg * 85));
}

.chart-legend {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
}

.legend-color {
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 2px;
}

/* 折线图样式 */
.line-chart-visual {
  width: 100%;
  height: 100%;
  position: relative;
  padding: 10px 0;
}

.line-chart-svg {
  position: absolute;
  top: 10px;
  left: 0;
  width: 100%;
  height: calc(100% - 20px);
}

.line-chart-axis {
  position: absolute;
  background-color: #dee2e6;
}

.x-axis {
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
}

.y-axis {
  top: 0;
  left: 0;
  width: 1px;
  height: 100%;
}

.chart-dot {
  position: absolute;
  width: 6px;
  height: 6px;
  background-color: #4e79a7;
  border-radius: 50%;
  transform: translate(-50%, -50%);
}

/* 统计卡片 */
.stats-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.stat-card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.stat-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background-color: #f1f5f9;
  color: #4e79a7;
}

.stat-content h5 {
  margin: 0 0 0.25rem 0;
  font-size: 0.875rem;
  color: #6c757d;
  font-weight: 500;
}

.stat-value {
  margin: 0 0 0.25rem 0;
  font-size: 1.125rem;
  font-weight: 600;
}

.stat-change {
  margin: 0;
  font-size: 0.75rem;
}

.positive {
  color: #28a745;
}

.negative {
  color: #dc3545;
}
</style>
