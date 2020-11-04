import * as React from 'react'
import { useMount } from 'react-use'
import { Sunburst } from '@antv/g2plot'
import { getNotebookSunburstData } from './util/getNotebookSunburstData'

type SunburstProps = {}

/**
 * 笔记目录大小分析图
 */
const NotebookSunburst: React.FC<SunburstProps> = () => {
  useMount(async () => {
    const data = await getNotebookSunburstData()
    console.log('data: ', data)
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
  })
  return <div id={'container'} style={{ height: '100vh' }} />
}

export default NotebookSunburst
