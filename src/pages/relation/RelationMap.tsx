import * as React from 'react'
import { useLocalStorage, useMount } from 'react-use'
import { config, noteApi } from 'joplin-api'
import * as am4core from '@amcharts/amcharts4/core'
import {
  ForceDirectedSeries,
  ForceDirectedTree,
} from '@amcharts/amcharts4/plugins/forceDirected'
import { useEffect, useState } from 'react'
import {
  Note,
  NoteRelationConvertUtil,
} from './__tests__/noteRelationConvertUtil'
import { SettingForm } from '../setting'

type PropsType = {}

/**
 * 笔记关系图
 */
const RelationMap: React.FC<PropsType> = () => {
  const [relationNoteList, setRelationNoteList] = useState<Note[]>([])

  useEffect(() => {
    const chart = am4core.create('chartdiv', ForceDirectedTree)

    const networkSeries = chart.series.push(new ForceDirectedSeries())
    networkSeries.dataFields.linkWith = 'links'
    networkSeries.dataFields.name = 'title'
    networkSeries.dataFields.id = 'id'
    networkSeries.dataFields.value = 'id'
    networkSeries.dataFields.children = 'children'

    networkSeries.nodes.template.label.text = '{name}'
    networkSeries.fontSize = 8
    networkSeries.linkWithStrength = 0

    const nodeTemplate = networkSeries.nodes.template
    nodeTemplate.tooltipText = '{name}'
    nodeTemplate.fillOpacity = 1
    nodeTemplate.label.hideOversized = true
    nodeTemplate.label.truncate = true

    const linkTemplate = networkSeries.links.template
    linkTemplate.strokeWidth = 1
    const linkHoverState = linkTemplate.states.create('hover')
    linkHoverState.properties.strokeOpacity = 1
    linkHoverState.properties.strokeWidth = 2

    nodeTemplate.events.on('over', function (event) {
      const dataItem = event.target.dataItem
      dataItem.childLinks.each(function (link) {
        link.isHover = true
      })
    })

    nodeTemplate.events.on('out', function (event) {
      const dataItem = event.target.dataItem
      dataItem.childLinks.each(function (link) {
        link.isHover = false
      })
    })

    networkSeries.data = relationNoteList
  }, [relationNoteList])

  const [settingForm] = useLocalStorage<SettingForm>('settingForm')

  useMount(async () => {
    config.token = settingForm!.token
    config.port = settingForm!.port
    const noteList = await noteApi.list(['id', 'title', 'body'])
    setRelationNoteList(NoteRelationConvertUtil.convert(noteList))
  })
  return (
    <div
      id="chartdiv"
      style={{
        width: '100%',
        height: '100vh',
      }}
    />
  )
}

export default RelationMap
