import * as React from 'react'
import { useMount } from 'react-use'
import { noteApi, PageUtil } from 'joplin-api'
import { NoteRelationConvertUtil } from './util/NoteRelationConvertUtil'
import Graphin, { Data, Edge, Node } from '@antv/graphin'
import '@antv/graphin/dist/index.css'
import { useState } from 'react'
import { useHistory } from 'react-router'
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
        successMsg: 'Succeeded in loading note diagram',
        errorMsg: 'Failed to load note diagram',
      } as Record<LocaleKeys, string>,
    },
    'zh-CN': {
      translation: {
        successMsg: '加载笔记关系图成功',
        errorMsg: '加载笔记关系图失败',
      } as Record<LocaleKeys, string>,
    },
  },
}

async function getData() {
  const noteList = await PageUtil.pageToAllList(noteApi.list, {
    fields: ['id', 'title', 'body'],
  })
  const noteLinks = NoteRelationConvertUtil.convert(noteList)
  const data: Data = {
    nodes: noteLinks.map((note) => {
      const data = {
        id: note.id,
        label: note.title.startsWith('#')
          ? note.title.replace('# ', '')
          : note.title,
      }
      return {
        data,
        ...data,
        shape: 'CircleNode',
        style: {
          nodeSize: 24 * Math.min(1 + note.links.length, 5),
        },
      } as Node
    }),
    edges: noteLinks.flatMap((note) =>
      note.links.map((link) => {
        const data = {
          source: note.id,
          target: link.id,
        }
        return {
          data,
          ...data,
        } as Edge
      }),
    ),
  }
  return data
}

/**
 * 笔记关系图
 */
const RelationMap: React.FC<PropsType> = () => {
  const [graphData, setGraphData] = useState<Data>({ edges: [], nodes: [] })

  const { success, error } = useMessage()
  const history = useHistory()
  useMount(async () => {
    await i18next.init(i18nOptions)
    try {
      const data = await getData()
      setGraphData(data)
      success(i18next.t<string, LocaleKeys>('successMsg'))
    } catch (e) {
      error(i18next.t<string, LocaleKeys>('errorMsg'))
      history.push('/setting')
    }
  })
  return (
    <div style={{ height: '100vh' }}>
      <Graphin
        data={graphData}
        layout={{
          name: 'force',
          options: {
            preset: { name: 'concentric' },
            preventOverlap: true,
            centripetalOptions: {
              single: 100, // 给孤立节点设置原来 （100/2）倍的向心力
              center: () => {
                // 根据不同的节点与度数设置不同的向心力的中心点
                return {
                  x: 100,
                  y: 100,
                }
              },
            },
          },
        }}
      />
    </div>
  )
}

export default RelationMap
