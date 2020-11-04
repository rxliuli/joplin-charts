import * as React from 'react'
import { useMount } from 'react-use'
import { noteApi } from 'joplin-api'
import { NoteRelationConvertUtil } from './util/NoteRelationConvertUtil'
import Graphin, { Data, Edge, Node } from '@antv/graphin'
import '@antv/graphin/dist/index.css'
import { useState } from 'react'
import { useSnackbar } from 'notistack'
import { useHistory } from 'react-router'

type PropsType = {}

async function getData() {
  const noteList = await noteApi.list(['id', 'title', 'body'])
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
          nodeSize: 24 * (1 + note.links.length),
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

  const snackbar = useSnackbar()
  const history = useHistory()
  useMount(async () => {
    try {
      const data = await getData()
      setGraphData(data)
      snackbar.enqueueSnackbar('加载笔记关系图成功', {
        autoHideDuration: 3000,
      })
    } catch (e) {
      snackbar.enqueueSnackbar('加载笔记关系图失败', {
        autoHideDuration: 3000,
      })
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
