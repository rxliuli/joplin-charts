import { tagApi } from 'joplin-api'

export interface TagModel {
  id: string
  tag: string
  count: number
}

export class TagCloudApi {
  async countList() {
    const tagList = await tagApi.list()
    return (await Promise.all(
      tagList.map(async (tag) => ({
        id: tag.id,
        tag: tag.title,
        count: (await tagApi.notesByTagId(tag.id)).length,
      })),
    )) as TagModel[]
  }
}

export const tagCloudApi = new TagCloudApi()
