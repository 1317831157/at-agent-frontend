<template>
  <div class="flex flex-col gap-6">
    <div v-if="isLoading" class="flex flex-col items-center justify-center h-[300px]">
      <div
        class="w-10 h-10 border-3 border-t-3 border-solid border-[#f3f3f3] border-t-[#4e79a7] rounded-full animate-spin mb-4">
      </div>
      <p class="text-sm text-gray-500">正在进行智能分析，请稍候...</p>
    </div>

    <div v-else class="flex flex-col gap-6">
      <div
        class="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow duration-300 opacity-0 animate-fadeIn"
        style="animation-delay: 100ms">
        <div class="flex items-center mb-3">
          <h4 class="text-base font-semibold m-0">事件概览</h4>
          <span class="ml-2 px-2 py-0.5 text-xs bg-blue-500 text-white rounded">AI生成</span>
        </div>
        <p class="text-[0.9375rem] leading-6 m-0">
          根据过去30天的事件数据分析，该地区的事件总数为1,248起，比上月增加12%。
          交通事故（45%）是最常见的事件类型，其次是治安事件（25%）和消防事件（15%）。
          市中心区域是事件高发区，占总体的28%。
        </p>
      </div>

      <div
        class="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow duration-300 opacity-0 animate-fadeIn"
        style="animation-delay: 200ms">
        <div class="flex items-center mb-3">
          <h4 class="text-base font-semibold m-0">关键发现</h4>
          <span class="ml-4 px-2 py-0.5 text-xs bg-blue-500 text-white rounded">AI生成</span>
        </div>
        <ul class="p-0 m-0 list-none flex flex-col gap-4">
          <li class="flex gap-3">
            <LightbulbIcon class="w-5 h-5 flex-shrink-0 text-blue-500" />
            <div>
              <h5 class="text-[0.9375rem] font-semibold m-0 mb-2">事件时间模式</h5>
              <p class="text-sm leading-6 m-0">工作日17:00-19:00是交通事故高峰期，周末晚间22:00-2:00是治安事件高发时段。</p>
            </div>
          </li>
          <li class="flex gap-3">
            <TrendingUpIcon class="w-5 h-5 flex-shrink-0 text-blue-500" />
            <div>
              <h5 class="text-[0.9375rem] font-semibold m-0 mb-2">增长趋势</h5>
              <p class="text-sm leading-6 m-0">南部新区的事件数量在过去2周内增长了23%，主要由于该区域新开发的商业中心带来的人流量增加。</p>
            </div>
          </li>
          <li class="flex gap-3">
            <MapPinIcon class="w-5 h-5 flex-shrink-0 text-blue-500" />
            <div>
              <h5 class="text-[0.9375rem] font-semibold m-0 mb-2">地理热点</h5>
              <p class="text-sm leading-6 m-0">主城区与郊区交界处的五个十字路口是交通事故的主要发生地，建议增加交通管制措施。</p>
            </div>
          </li>
          <li class="flex gap-3">
            <AlertTriangleIcon class="w-5 h-5 flex-shrink-0 text-red-500" />
            <div>
              <h5 class="text-[0.9375rem] font-semibold m-0 mb-2">异常发现</h5>
              <p class="text-sm leading-6 m-0">工业园区的消防事件比往常增加了35%，有必要进行安全检查和预防性维护。</p>
            </div>
          </li>
        </ul>
      </div>

      <div
        class="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow duration-300 opacity-0 animate-fadeIn"
        style="animation-delay: 300ms">
        <div class="flex items-center mb-3">
          <h4 class="text-base font-semibold m-0">行动建议</h4>
          <span class="ml-4 px-2 py-0.5 text-xs bg-blue-500 text-white rounded">AI生成</span>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="bg-gray-50 rounded-md p-3 hover:bg-gray-100 transition-colors duration-300">
            <div class="flex items-center gap-2 mb-2">
              <ShieldIcon class="w-[18px] h-[18px] text-blue-500" />
              <h5 class="text-[0.9375rem] font-semibold m-0">资源优化</h5>
            </div>
            <p class="text-sm leading-6 m-0">建议在工作日下午增派交通警力在主城区与郊区交界处巡逻，提高应对交通事故的能力。</p>
          </div>
          <div class="bg-gray-50 rounded-md p-3 hover:bg-gray-100 transition-colors duration-300">
            <div class="flex items-center gap-2 mb-2">
              <HeartIcon class="w-[18px] h-[18px] text-blue-500" />
              <h5 class="text-[0.9375rem] font-semibold m-0">预防措施</h5>
            </div>
            <p class="text-sm leading-6 m-0">针对工业园区消防事件增加，建议组织安全培训和消防演习，并增加巡检频率。</p>
          </div>
          <div class="bg-gray-50 rounded-md p-3 hover:bg-gray-100 transition-colors duration-300">
            <div class="flex items-center gap-2 mb-2">
              <ZapIcon class="w-[18px] h-[18px] text-blue-500" />
              <h5 class="text-[0.9375rem] font-semibold m-0">应急响应</h5>
            </div>
            <p class="text-sm leading-6 m-0">周末晚间在市中心增设临时应急点，缩短对治安事件的响应时间。</p>
          </div>
        </div>
      </div>

      <div
        class="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow duration-300 opacity-0 animate-fadeIn"
        style="animation-delay: 400ms">
        <div class="flex items-center mb-3">
          <h4 class="text-base font-semibold m-0">关联分析</h4>
          <span class="ml-4 px-2 py-0.5 text-xs bg-blue-500 text-white rounded">AI生成</span>
        </div>
        <div class="h-[280px] relative mb-4">
          <div class="relative h-full flex items-center justify-center">
            <div class="absolute py-2 px-3 rounded-md bg-blue-500 text-white text-sm z-[2]">
              <span>交通拥堵</span>
            </div>
            <div class="absolute w-full h-full">
              <div class="absolute top-1/2 left-1/2 w-[100px] h-[2px] bg-gray-300 origin-[0%_50%] rotate-[0deg] z-[1]">
              </div>
              <div
                class="absolute top-1/2 left-1/2 w-[100px] h-[2px] bg-gray-300 origin-[0%_50%] rotate-[120deg] z-[1]">
              </div>
              <div
                class="absolute top-1/2 left-1/2 w-[100px] h-[2px] bg-gray-300 origin-[0%_50%] rotate-[240deg] z-[1]">
              </div>
            </div>
            <div
              class="absolute top-[-22px] left-[150px] py-2 px-3 rounded-md bg-gray-100 border border-gray-200 text-sm z-[2] hover:bg-gray-200 transition-colors duration-300 cursor-pointer">
              <span>交通事故</span>
            </div>
            <div
              class="absolute top-[80px] left-[-160px] py-2 px-3 rounded-md bg-gray-100 border border-gray-200 text-sm z-[2] hover:bg-gray-200 transition-colors duration-300 cursor-pointer">
              <span>天气状况</span>
            </div>
            <div
              class="absolute top-[120px] left-[70px] py-2 px-3 rounded-md bg-gray-100 border border-gray-200 text-sm z-[2] hover:bg-gray-200 transition-colors duration-300 cursor-pointer">
              <span>道路施工</span>
            </div>
          </div>
        </div>
        <p class="text-sm leading-6 m-0">
          分析发现交通事故与交通拥堵、天气状况和道路施工三个因素高度相关。
          在雨天和道路施工期间，交通拥堵明显增加，进而导致交通事故风险提升约32%。
        </p>
      </div>

      <div
        class="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow duration-300 opacity-0 animate-fadeIn"
        style="animation-delay: 500ms">
        <div class="flex items-center mb-3">
          <h4 class="text-base font-semibold m-0">未来预测</h4>
          <span class="ml-4 px-2 py-0.5 text-xs bg-blue-500 text-white rounded">AI生成</span>
        </div>
        <div class="mb-4">
          <div class="h-6 bg-gray-100 rounded-full relative overflow-hidden">
            <div class="h-full bg-blue-500 rounded-full w-0 transition-all duration-1500" ref="progressBar"></div>
            <span
              class="absolute top-0 left-0 w-full h-full flex items-center justify-center text-sm text-white font-medium drop-shadow-sm">下周事件风险预测:
              75%</span>
          </div>
        </div>
        <p class="text-sm leading-6 m-0">
          基于历史数据和外部因素（如即将到来的节假日和天气预报），
          预计下周事件总量将增加15-20%，建议相关部门提前做好应对准备。
        </p>
      </div>
    </div>

    <div class="flex gap-3 mt-2 justify-end opacity-0 animate-fadeIn" style="animation-delay: 600ms">
      <Button variant="outline" size="sm" class="flex items-center gap-2 hover:bg-gray-100 cursor-pointer">
        <DownloadIcon class="w-4 h-4" />
        导出报告
      </Button>
      <Button variant="outline" size="sm" class="flex items-center gap-2 hover:bg-gray-100 cursor-pointer">
        <RefreshCwIcon class="w-4 h-4" />
        重新分析
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Button } from '@/components/ui/button'
import {
  LightbulbIcon,
  TrendingUpIcon,
  MapPinIcon,
  AlertTriangleIcon,
  ShieldIcon,
  HeartIcon,
  ZapIcon,
  DownloadIcon,
  RefreshCwIcon
} from 'lucide-vue-next'

// 定义组件名称以解决linter错误
defineOptions({
  name: 'AiAnalysisPanel'
})

// 模拟加载状态
const isLoading = ref(true)
const progressBar = ref<HTMLElement | null>(null)

onMounted(() => {
  // 模拟API调用延迟
  setTimeout(() => {
    isLoading.value = false

    // 延迟一下，等待卡片出现动画完成后，再执行进度条动画
    setTimeout(() => {
      if (progressBar.value) {
        progressBar.value.style.width = '75%'
      }
    }, 800)
  }, 800)
})
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.5s ease-out forwards;
}
</style>
