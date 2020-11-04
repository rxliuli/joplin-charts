import * as React from 'react'
import { useMount } from 'react-use'
import { Sunburst } from '@antv/g2plot'
import { getNotebookSunburstData } from './util/getNotebookSunburstData'
import i18next, { InitOptions } from 'i18next'
import { useMessage } from '../../common/hooks/useMessage'

type SunburstProps = {}

type LocaleKeys = 'successMsg' | 'errorMsg'

const i18nOptions: InitOptions = {
  lng: navigator.language,
  fallbackLng: 'en',
  resources: {
    en: {
      translation: {
        successMsg: 'The notebook list is loaded successfully',
        errorMsg: 'Failed to load notebook list',
      } as Record<LocaleKeys, string>,
    },
    'zh-CN': {
      translation: {
        successMsg: '笔记本列表加载成功',
        errorMsg: '笔记本列表加载失败',
      } as Record<LocaleKeys, string>,
    },
  },
}

/**
 * 笔记目录大小分析图
 */
const NotebookSunburst: React.FC<SunburstProps> = () => {
  const { success, error } = useMessage()
  useMount(async () => {
    await i18next.init(i18nOptions)
    try {
      const data = await getNotebookSunburstData()
      success(i18next.t<string, LocaleKeys>('successMsg'))
      const sunburstPlot = new Sunburst('container', {
        data,
        type: 'treemap',
        reflect: 'y',
        seriesField: 'sum',
        colorField: 'label',
        innerRadius: 0.3,
        interactions: [{ type: 'element-active' }],
      })
      sunburstPlot.render()
    } catch (e) {
      error(i18next.t<string, LocaleKeys>('errorMsg'))
    }
  })
  return <div id={'container'} style={{ height: '100vh' }} />
}

export default NotebookSunburst
