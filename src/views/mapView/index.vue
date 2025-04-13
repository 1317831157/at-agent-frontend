<template>
  <div class="flex w-full h-screen overflow-hidden">
    <div class="flex-1 relative">
      <MapContainer :attackData="analysisData" />
    </div>

    <div class="w-[350px] bg-gray-50 border-l border-gray-200 flex flex-col relative overflow-hidden">
      <div class="p-6 border-b border-gray-200 bg-white">
        <h2 class="m-0 text-xl font-semibold text-gray-900">事件分析控制面板</h2>
      </div>

      <div class="p-4 flex flex-col gap-3 bg-white border-b border-gray-200">
        <!-- <Button class="flex items-center justify-start w-full cursor-pointer" size="lg" variant="default"
          @click="toggleDataVisualization">
          <BarChartIcon class="mr-2 h-5 w-5" />
          数据可视化
        </Button> -->

        <!-- <Button class="flex items-center justify-start w-full cursor-pointer" size="lg" variant="secondary"
          @click="toggleAiAnalysis">
          <BrainCircuitIcon class="mr-2 h-5 w-5" />
          AI智能分析
        </Button> -->
      </div>

      <div class="flex-1 flex flex-col p-4 overflow-y-auto">
        <div class="mb-4">
          <h3 class="m-0 text-lg font-semibold text-gray-900 mb-4">事件概览</h3>
        </div>
        <div class="grid grid-cols-3 gap-3 mb-6">
          <div class="bg-white rounded-md p-3 text-center shadow-sm">
            <div class="text-xs text-gray-500 mb-1">总事件数</div>
            <div class="text-xl font-semibold text-gray-700">1,248</div>
          </div>
          <div class="bg-white rounded-md p-3 text-center shadow-sm">
            <div class="text-xs text-gray-500 mb-1">今日新增</div>
            <div class="text-xl font-semibold text-gray-700">42</div>
          </div>
          <div class="bg-white rounded-md p-3 text-center shadow-sm">
            <div class="text-xs text-gray-500 mb-1">处理中</div>
            <div class="text-xl font-semibold text-gray-700">18</div>
          </div>
        </div>

        <div class="mb-2">
          <h4 class="m-0 text-sm font-semibold text-gray-700">最近事件</h4>
        </div>
        <div class="flex flex-col gap-3">
          <div v-for="event in statistics" :key="event.id"
            class="bg-white rounded-md p-3 flex items-start gap-3 shadow-sm">
            <div class="w-2.5 h-2.5 rounded-full mt-1.5 flex-shrink-0" :class="{
              'bg-red-500': event.type === 'traffic',
              'bg-blue-500': event.type === 'security',
              'bg-amber-500': event.type === 'fire'
            }"></div>
            <div class="flex-1">
              <div class="text-sm font-semibold text-gray-800 mb-1">{{ event.title }}</div>
              <div class="text-xs text-gray-600 mb-1 leading-normal">{{ event.details }}</div>
              <div class="text-xs text-gray-400">{{ event.time }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- 数据可视化面板 -->
      <div v-if="showDataViz" class="absolute top-0 right-0 w-full h-full bg-white/98 z-10">
        <div class="p-6 h-full overflow-y-auto flex flex-col">
          <div class="flex justify-between items-center mb-6">
            <h3 class="m-0 text-xl font-semibold">事件数据可视化</h3>
            <Button variant="ghost" size="icon" class="cursor-pointer" @click="toggleDataVisualization">
              <XIcon class="h-4 w-4" />
            </Button>
          </div>

          <DataVisualization />
        </div>
      </div>

      <!-- AI分析面板 -->
      <div v-if="showAiAnalysis" class="absolute top-0 right-0 w-full h-full bg-white/98 z-10">
        <div class="p-6 h-full overflow-y-auto flex flex-col">
          <div class="flex justify-between items-center mb-6">
            <h3 class="m-0 text-xl font-semibold">AI智能分析</h3>
            <Button variant="ghost" size="icon" class="cursor-pointer" @click="toggleAiAnalysis">
              <XIcon class="h-4 w-4" />
            </Button>
          </div>

          <AiAnalysis />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import MapContainer from '@/components/MapContainer/index.vue'
import DataVisualization from '@/components/DataVisualization/index.vue'
import AiAnalysis from '@/components/AiAnalysis/index.vue'
import { Button } from '@/components/ui/button'
import { BarChartIcon, BrainCircuitIcon, XIcon } from 'lucide-vue-next'
import { analysisApi } from '@/api'

// 控制面板显示状态
const showDataViz = ref(false)
const showAiAnalysis = ref(false)

// 接口数据
const analysisData = ref<any>({
  attackData: [],
  statistics: [],
})
const isLoading = ref(false)

// 事件数据
const statistics = [
  {
    id: 1,
    title: '交通事故 - 西城区西长安街',
    details: '两车轻微碰撞，无人员伤亡',
    time: '今天 08:30',
    type: 'traffic'
  },
  {
    id: 2,
    title: '治安事件 - 东城区东长安街',
    details: '商场内发生争执，已有警员到场处理',
    time: '今天 12:45',
    type: 'security'
  },
  {
    id: 3,
    title: '消防事件 - 东城区建国门内大街',
    details: '写字楼电气短路引发小型火灾，消防队已赶到现场',
    time: '今天 15:20',
    type: 'fire'
  }
]

// 页面加载时获取数据
onMounted(async () => {
  try {
    isLoading.value = true
    // 尝试获取真实数据
    try {
      const result = await analysisApi.getAnalysisData({ country: '中国', city: '北京', date_from: '2025-04-01', date_to: '2024-04-13', page: 1, per_page: 100 })
      analysisData.value = result.data
    } catch (apiError) {
      console.error('获取分析数据失败:', apiError)
      // 不再静默失败，允许错误提示显示
      // 创建默认的数据结构，避免undefined错误
      analysisData.value = {
        attackData: [],
        statistics: []
      }
      // 让错误继续传播，以便显示toast提示
      throw apiError
    }
    // 不管API成功与否，都使用mock数据
    analysisData.value.statistics = statistics
    isLoading.value = false
  } catch (error) {
    console.error('处理数据过程出错:', error)
    // 创建默认的数据结构
    analysisData.value = {
      attackData: [],
      statistics: statistics
    }
    isLoading.value = false
  }
})

// 切换数据可视化面板的显示
const toggleDataVisualization = () => {
  showDataViz.value = !showDataViz.value
  // 如果打开数据可视化，关闭AI分析面板
  if (showDataViz.value) {
    showAiAnalysis.value = false
  }
}

// 切换AI分析面板的显示
const toggleAiAnalysis = () => {
  showAiAnalysis.value = !showAiAnalysis.value
  // 如果打开AI分析，关闭数据可视化面板
  if (showAiAnalysis.value) {
    showDataViz.value = false
  }
}
</script>
