import { folderApi } from 'joplin-api'
import { FolderListAllRes } from 'joplin-api/dist/modal/FolderListAllRes'

export type SunburstData = {
  label: string
  children?: SunburstData[]
  sum?: number
}

export async function getNotebookSunburstData() {
  const folderList = await folderApi.listAll()

  function convert(folder: FolderListAllRes): SunburstData {
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
