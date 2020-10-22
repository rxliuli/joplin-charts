import { config, noteApi } from 'joplin-api'
import { NoteRelationConvertUtil } from './noteRelationConvertUtil'

describe('测试将笔记转换为可用信息', () => {
  config.token =
    ''
  it('获取笔记中的引用链接', async () => {
    const noteList = await noteApi.list(['id', 'title', 'body'])
    const relationList = NoteRelationConvertUtil.convert(noteList)
    console.log(relationList.filter((note) => note.links.length !== 0))
  })
})
