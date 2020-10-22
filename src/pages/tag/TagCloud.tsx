import * as React from 'react'
import { useLayoutEffect, useRef, useState } from 'react'
import * as am4core from '@amcharts/amcharts4/core'
import { WordCloud, WordCloudSeries } from '@amcharts/amcharts4/plugins/wordCloud'
import { tagCloudApi, TagModel } from './api/TagCloudApi'
import { useMount } from 'react-use'

type PropsType = {}

/**
 * 标签云
 */
const TagCloud: React.FC<PropsType> = () => {
  const [tagCountList, setTagCountList] = useState<TagModel[]>([])
  const chart = useRef<WordCloud>(null)
  useLayoutEffect(() => {
    let x = am4core.create('chartdiv', WordCloud)
    const series = x.series.push(new WordCloudSeries())
    series.data = tagCountList
    series.dataFields.id = 'id' as keyof TagModel
    series.dataFields.word = 'tag' as keyof TagModel
    series.dataFields.value = 'count' as keyof TagModel

    series.heatRules.push({
      'target': series.labels.template,
      'property': 'fill',
      'min': am4core.color('#0000CC'),
      'max': am4core.color('#CC00CC'),
      'dataField': 'value',
    })

    series.labels.template.url = 'https://stackoverflow.com/questions/tagged/{word}'
    series.labels.template.urlTarget = '_blank'
    series.labels.template.tooltipText = '{word}: {value}'

    const hoverState = series.labels.template.states.create('hover')
    hoverState.properties.fill = am4core.color('#FF0000')

    ;(chart as any).current = x

    return () => {
      x.dispose()
    }
  }, [tagCountList])

  useMount(async () => {
    setTagCountList(await tagCloudApi.countList())
  })

  return (
    <div id="chartdiv" style={{ width: '100%', height: '100vh' }} />
  )
}

export default TagCloud
