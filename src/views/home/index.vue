<template>
  <div class="min-h-screen flex flex-col p-8 bg-gray-50">
    <div class="flex flex-col items-center justify-center text-center py-16 px-4">
      <h1 class="text-4xl font-bold mb-4 text-gray-900">城市事件地图分析系统</h1>
      <p class="text-xl text-gray-600 mb-10 max-w-2xl">实时监控城市各类事件，提供数据可视化和AI智能分析</p>

      <!-- 需求输入区域 -->
      <div class="w-full max-w-xl mb-6">
        <div class="flex items-center gap-2 mb-2">
          <MessageSquareIcon class="w-5 h-5 text-blue-600" />
          <h3 class="text-base font-semibold text-gray-900">输入您的需求</h3>
        </div>
        <div class="flex gap-3">
          <input v-model="userRequirement"
            class="flex-1 px-4 py-2.5 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors outline-none"
            placeholder="请描述您的项目需求..." />
          <Button class="flex items-center cursor-pointer" :disabled="isSubmitting || !userRequirement"
            @click="submitRequirement">
            <SendIcon v-if="!isSubmitting" class="h-4 w-4 mr-2" />
            <LoaderIcon v-else class="h-4 w-4 mr-2 animate-spin" />
            发送
          </Button>
        </div>
      </div>

      <!-- 分析进度展示区域 -->
      <div v-if="showProgress" class="w-full max-w-xl bg-white rounded-lg shadow-sm p-6 mb-8 text-left">
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center">
            <FolderIcon class="w-5 h-5 text-blue-600 mr-2" />
            <h3 class="text-lg font-semibold text-gray-900">{{ projectName }}</h3>
          </div>
          <span class="text-sm text-gray-500">用时：{{ elapsedTime }}</span>
        </div>

        <div class="mb-4">
          <div class="flex justify-between mb-1.5">
            <span class="text-sm font-medium text-gray-700">分析进度</span>
            <span class="text-sm font-medium text-gray-700">{{ progressPercentage }}%</span>
          </div>
          <div class="h-2.5 bg-gray-100 rounded-full overflow-hidden">
            <div class="h-full bg-blue-500 rounded-full transition-all duration-700"
              :style="`width: ${progressPercentage}%`"></div>
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="text-sm text-gray-600">{{ progressStatus }}</div>
          <Button v-if="analysisComplete" class="flex items-center cursor-pointer" @click="goToMap">
            <MapPinIcon class="h-4 w-4 mr-2" />
            进入地图
          </Button>
        </div>
      </div>

      <!-- 启动按钮 (仅在未开始分析时显示) -->
      <!-- <div v-if="!showProgress" class="flex gap-4">
        <Button class="flex items-center px-6 cursor-pointer" size="lg" @click="handleJump">
          <MapPinIcon class="h-5 w-5 mr-2" />
          进入地图
        </Button>
      </div> -->
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 px-4 max-w-6xl mx-auto w-full">
      <div class="bg-white rounded-lg p-8 shadow-sm flex flex-col items-center text-center">
        <MapIcon class="w-12 h-12 text-blue-600 mb-5" />
        <h3 class="text-xl font-semibold mb-3 text-gray-900">事件地图标记</h3>
        <p class="text-base text-gray-600 leading-relaxed">实时在地图上标记各类事件发生地点，鼠标悬停可查看详情</p>
      </div>

      <div class="bg-white rounded-lg p-8 shadow-sm flex flex-col items-center text-center">
        <BarChartIcon class="w-12 h-12 text-blue-600 mb-5" />
        <h3 class="text-xl font-semibold mb-3 text-gray-900">数据可视化</h3>
        <p class="text-base text-gray-600 leading-relaxed">提供多维度数据统计和图表分析，直观展示事件分布情况</p>
      </div>

      <div class="bg-white rounded-lg p-8 shadow-sm flex flex-col items-center text-center">
        <BrainCircuitIcon class="w-12 h-12 text-blue-600 mb-5" />
        <h3 class="text-xl font-semibold mb-3 text-gray-900">AI智能分析</h3>
        <p class="text-base text-gray-600 leading-relaxed">基于人工智能算法，提供事件关联分析和预测性建议</p>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { Button } from '@/components/ui/button'
import {
  MapPinIcon,
  MapIcon,
  BarChartIcon,
  BrainCircuitIcon,
  MessageSquareIcon,
  SendIcon,
  LoaderIcon,
  FolderIcon
} from 'lucide-vue-next'
import { analysisApi } from '@/api'
const router = useRouter()

// 用户需求相关状态
const userRequirement = ref('')
const isSubmitting = ref(false)
const showProgress = ref(false)
const progressPercentage = ref(0)
const elapsedTime = ref('0秒')
const projectName = ref('分析中...')
const analysisComplete = ref(false)

// 进度状态计算属性
const progressStatus = computed(() => {
  if (progressPercentage.value < 100) {
    return '正在分析您的需求...'
  } else {
    return '分析完成，请点击启动按钮'
  }
})

// 提交用户需求
const submitRequirement = async () => {
  if (!userRequirement.value) return

  isSubmitting.value = true
  progressPercentage.value = 0
  analysisComplete.value = false

  try {
    const res = await analysisApi.submitAnalysisTask({ text: userRequirement.value })
    const estimatedTime = res.data.estimatedTime || 10 // 获取预估完成时间，默认30秒

    projectName.value = '事件分析项目 #' + Math.floor(Math.random() * 1000)
    showProgress.value = true
    isSubmitting.value = false

    // 记录开始时间
    const startTime = Date.now()

    // 定时更新进度
    const progressTimer = setInterval(() => {
      try {
        // 计算已用时间
        const timeElapsed = Math.floor((Date.now() - startTime) / 1000)
        elapsedTime.value = timeElapsed + '秒'

        // 根据预估时间和已用时间计算进度
        const progress = Math.min(Math.floor((timeElapsed / estimatedTime) * 100), 99)

        // 更新进度条
        progressPercentage.value = progress

        // 当达到预估时间的95%后，逐渐减缓进度增长
        if (timeElapsed >= estimatedTime * 0.95) {
          // 如果已经超过了预估时间的120%，完成分析
          if (timeElapsed > estimatedTime * 1.2) {
            progressPercentage.value = 100
            analysisComplete.value = true
            clearInterval(progressTimer)
          }
        }
      } catch (error) {
        console.error('进度更新出错:', error)
      }
    }, 1000) // 每秒更新一次进度

  } catch (error) {
    console.error('提交需求失败:', error)
    isSubmitting.value = false
    showProgress.value = false
  }
}

// // 进入地图
// const handleJump = () => {
//   router.push({ name: 'map' })
// }

// 分析完成后跳转至地图
const goToMap = () => {
  router.push({ name: 'map' })
}
</script>
