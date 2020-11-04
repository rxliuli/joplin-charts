import { folderApi } from 'joplin-api'
import { FolderListRes } from 'joplin-api/dist/modal/FolderListRes'

export type SunburstData = {
  label: string
  children?: SunburstData[]
  sum?: number
}

export async function getNotebookSunburstData() {
  const folderList = await folderApi.list()

  function convert(folder: FolderListRes): SunburstData {
    return {
      label: folder.title,
      sum: folder.note_count,
      children: folder.children?.map(convert),
    }
  }

  return {
    label: 'root',
    children: folderList.map(convert),
  }
}
