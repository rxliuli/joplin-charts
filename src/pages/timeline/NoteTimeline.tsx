import * as React from 'react'
import { useMount } from 'react-use'
import { noteApi } from 'joplin-api'

type NoteTimelineProps = {}

/**
 * 笔记的时间线
 */
const NoteTimeline: React.FC<NoteTimelineProps> = () => {
  useMount(async () => {
    const noteList = await noteApi.list()
    noteList.sort((a, b) => a.user_updated_time - b.user_updated_time)
    console.log('noteList: ', noteList)
  })
  return <div>timeline</div>
}

export default NoteTimeline
