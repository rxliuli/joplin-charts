import MarkdownIt from 'markdown-it'
import { NoteGetRes } from 'joplin-api/dist/modal/NoteGetRes'
import { NoteProperties } from 'joplin-api/dist/modal/NoteProperties'

export type Note = Pick<NoteGetRes, 'id' | 'title'> & {
  links: Pick<NoteGetRes, 'id' | 'title'>[]
}

type RelationNote = Pick<NoteProperties, 'id' | 'title' | 'body'>

export class NoteRelationConvertUtil {
  static convert(noteList: RelationNote[]): Note[] {
    const md = new MarkdownIt()
    const noteIdMap = noteList.reduce((res, note) => {
      res.set(note.id, note)
      return res
    }, new Map<string, RelationNote>())

    function findRelationByNote(note: RelationNote) {
      const tokenList = md.parseInline(note.body, '')
      return tokenList[0]
        .children!.filter((token) => {
          return (
            token.type === 'link_open' &&
            token.attrGet('href')?.startsWith(':/')
          )
        })
        .map((token) => {
          return token.attrGet('href')?.substr(2)!
        })
        .filter((id) => {
          return noteIdMap.has(id)
        })
        .map((id) => ({
          id,
          title: noteIdMap.get(id)!.title,
        }))
    }

    return noteList.map(
      (note) =>
        ({
          id: note.id,
          title: note.title,
          links: findRelationByNote(note),
        } as Note),
    )
  }
}
