import MarkdownIt from 'markdown-it'
import { NoteGetRes } from 'joplin-api/dist/modal/NoteGetRes'
import { NoteProperties } from 'joplin-api/dist/modal/NoteProperties'

export type Note = Pick<NoteGetRes, 'id' | 'title'> & {
  links: string[]
}

type RelationNote = Pick<NoteProperties, 'id' | 'title' | 'body'>

export class NoteRelationConvertUtil {
  static convert(noteList: RelationNote[]): Note[] {
    const md = new MarkdownIt()
    const noteIdSet = new Set(noteList.map((note) => note.id))

    function findRelationByNote(note: RelationNote): string[] {
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
          return noteIdSet.has(id)
        })
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
