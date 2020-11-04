import * as React from 'react'
import { tagCloudApi } from './api/TagCloudApi'
import { useMount } from 'react-use'
import { useSnackbar } from 'notistack'
import { WordCloud } from '@antv/g2plot'

type PropsType = {}

/**
 * 标签云
 */
const TagCloud: React.FC<PropsType> = () => {
  const snackbar = useSnackbar()
  useMount(async () => {
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
      snackbar.enqueueSnackbar('Successfully loaded the joplin tag list', {
        variant: 'success',
        autoHideDuration: 3000,
      })
    } catch (e) {
      console.error(e)
      snackbar.enqueueSnackbar('Failed to load joplin tag list', {
        variant: 'error',
        autoHideDuration: 3000,
      })
    }
  })

  return <div id="container" style={{ width: '100%', height: '100vh' }} />
}

export default TagCloud
