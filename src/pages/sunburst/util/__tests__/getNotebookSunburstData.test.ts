import { getNotebookSunburstData } from '../getNotebookSunburstData'

it('测试 getNotebookSunburstData', async () => {
  const notebookSunburstData = await getNotebookSunburstData()
  console.log(JSON.stringify(notebookSunburstData, null, 2))
})
