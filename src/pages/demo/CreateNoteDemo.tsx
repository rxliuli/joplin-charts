import * as React from 'react'
import { useSnackbar } from 'notistack'
import { useMount } from 'react-use'
import { folderApi, noteApi } from 'joplin-api'

type PropsType = {}

const CreateNoteDemo: React.FC<PropsType> = () => {
  const snackbar = useSnackbar()
  useMount(async () => {
    const folderList = await folderApi.listAll()
    const folder = folderList[0]
    const res = await noteApi.create({
      title: 'test title',
      body: 'test body',
      parent_id: folder.id,
    })
    snackbar.enqueueSnackbar(
      `Create note successfully: [${res.title}], The list of notes is: [${folder.title}]`,
      {
        variant: 'success',
        autoHideDuration: 3000,
      },
    )
  })
  return <div>CreateNoteDemo</div>
}

export default CreateNoteDemo
