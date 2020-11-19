import { PageUtil, tagApi } from 'joplin-api'

export interface TagModel {
  id: string
  tag: string
  count: number
}

export class TagCloudApi {
  async countList() {
    const tagList = await PageUtil.pageToAllList(tagApi.list)
    return (await Promise.all(
      tagList.map(async (tag) => ({
        id: tag.id,
        tag: tag.title,
        count: (
          await PageUtil.pageToAllList(tagApi.notesByTagId as any, {
            id: tag.id,
          })
        ).length,
      })),
    )) as TagModel[]
  }
}

export const tagCloudApi = new TagCloudApi()
