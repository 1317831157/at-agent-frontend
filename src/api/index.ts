import request from '../utils/request'

/**
 * API接口封装
 */

// 数据分析相关接口
export const analysisApi = {
  /**
   * 获取数据分析结果
   * @param params 查询参数
   * @returns 分析结果
   */
  getAnalysisData: (params?: any) => {
    return request.get<API.AnalysisResult>('/api/output', params)
  },

  /**
   * 提交数据进行异步分析
   * @param data 分析数据
   * @returns 任务ID
   */
  submitAnalysisTask: (data: API.AnalysisParams) => {
    return request.post<API.AnalysisTaskResult>('/analyze', data)
  },

  /**
   * 获取分析任务进度
   * @param taskId 任务ID
   * @returns 任务状态信息
   */
  getTaskProgress: (taskId: string) => {
    return request.get<API.AnalysisTaskStatus>(`/analyze/progress/${taskId}`)
  },
}

// 定义API类型命名空间
namespace API {
  // 基础响应类型
  export interface BaseResult {
    code: number
    message: string
    success: boolean
  }

  // 分析参数类型
  export interface AnalysisParams {
    dataType: string
    startTime?: string
    endTime?: string
    sourceIds?: string[]
    options?: Record<string, any>
  }

  // 分析结果类型
  export interface AnalysisResult extends BaseResult {
    data: {
      statistics: any[]
      charts: any[]
      summary: string
    }
  }

  // 异步任务结果类型
  export interface AnalysisTaskResult extends BaseResult {
    data: {
      taskId: string
      estimatedTime: number
    }
  }

  // 任务状态类型
  export interface AnalysisTaskStatus extends BaseResult {
    data: {
      taskId: string
      status: 'pending' | 'processing' | 'completed' | 'failed'
      progress: number
      result?: any
      errorMessage?: string
    }
  }
}

export default {
  analysisApi,
}
