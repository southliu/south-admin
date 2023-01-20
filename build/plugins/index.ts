import type { PluginOption } from 'vite'
import { presetUno, presetAttributify, presetIcons } from 'unocss'
import { configPageImportPlugin } from './pages'
import { visualizer } from 'rollup-plugin-visualizer'
import { preloadPlugin } from './preload'
import { timePlugin } from './time'
import { cachePlugin } from './cache'
import { imgMinPlugin } from './imgMin'
import react from '@vitejs/plugin-react'
import Unocss from 'unocss/vite'
import viteCompression from 'vite-plugin-compression'

export function createVitePlugins() {
  // 插件参数
  const vitePlugins: PluginOption[] = [
    react(),
    Unocss({
      presets: [
        presetUno(), 
        presetAttributify(), 
        presetIcons()
      ],
    }),
    // 包分析
    visualizer({
      gzipSize: true,
      brotliSize: true,
    }),
    // 缓存策略
    cachePlugin(),
    // 打包时间
    timePlugin(),
    // 图片压缩
    imgMinPlugin(),
    // 压缩包
    viteCompression(),
    // 自动生成路由
    configPageImportPlugin(),
    // 预加载处理
    process.env.NODE_ENV === 'production' && preloadPlugin()
  ]

  return vitePlugins
}