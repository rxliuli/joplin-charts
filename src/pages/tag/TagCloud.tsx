import * as React from 'react'
import { tagCloudApi } from './api/TagCloudApi'
import { useMount } from 'react-use'
import { WordCloud } from '@antv/g2plot'
import i18next, { InitOptions } from 'i18next'
import { useMessage } from '../../common/hooks/useMessage'

type PropsType = {}

type LocaleKeys = 'successMsg' | 'errorMsg'

const i18nOptions: InitOptions = {
  lng: navigator.language,
  fallbackLng: 'en',
  resources: {
    en: {
      translation: {
        successMsg: 'Successfully loaded the joplin tag list',
        errorMsg: 'Failed to load joplin tag list',
      } as Record<LocaleKeys, string>,
    },
    'zh-CN': {
      translation: {
        successMsg: 'Joplin 标签列表加载成功',
        errorMsg: 'Joplin 标签列表加载失败',
      } as Record<LocaleKeys, string>,
    },
  },
}

/**
 * 标签云
 */
const TagCloud: React.FC<PropsType> = () => {
  const { success, error } = useMessage()
  useMount(async () => {
    await i18next.init(i18nOptions)
    try {
      const tagCountList = await tagCloudApi.countList()
      const wordCloud = new WordCloud('container', {
        data: tagCountList,
        wordField: 'tag',
        weightField: 'count',
        colorField: 'tag',
        random: () => 0.5,
      })
      wordCloud.render()
      success(i18next.t<string, LocaleKeys>('successMsg'))
    } catch (e) {
      console.error(e)
      error(i18next.t<string, LocaleKeys>('errorMsg'))
    }
  })

  return <div id="container" style={{ width: '100%', height: '100vh' }} />
}

export default TagCloud
