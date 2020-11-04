import { config, noteApi } from 'joplin-api'
import { NoteRelationConvertUtil } from '../util/NoteRelationConvertUtil'

describe('测试将笔记转换为可用信息', () => {
  config.token =
    'fc2f96db977465ea019ba0ebb148c2e212998fb7aec7a6b93a88c5fd86fe779e56d7c0229feb868c1b38df6a2390bd383bd1e2b090887569ae9e502b1a6d743f'
  it('获取笔记中的引用链接', async () => {
    const noteList = await noteApi.list(['id', 'title', 'body'])
    const relationList = NoteRelationConvertUtil.convert(noteList)
    console.log(relationList.filter((note) => note.links.length !== 0))
  })
})
