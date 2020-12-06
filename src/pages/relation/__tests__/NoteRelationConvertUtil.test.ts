import { config, noteApi, PageUtil } from 'joplin-api'
import { NoteRelationConvertUtil } from '../util/NoteRelationConvertUtil'

describe('测试将笔记转换为可用信息', () => {
  config.token =
    '64d011b4ba8d7a4636f13ed318ded6579594efcf856224f474abaa341e0dc5dfb4b0d10aa182dcda108a4a5c3e68278d3fb651fc40137d80117f96caa9a5da9f'
  it('获取笔记中的引用链接', async () => {
    const noteList = await PageUtil.pageToAllList(noteApi.list, {
      fields: ['id', 'title', 'body'],
    })
    const relationList = NoteRelationConvertUtil.convert(noteList)
    console.log(relationList.filter((note) => note.links.length !== 0))
  })
})
