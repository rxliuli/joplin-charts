import * as React from 'react'
import { useAsync, useMount } from 'react-use'
import { noteActionApi, noteApi, PageUtil } from 'joplin-api'
import Timeline from '@material-ui/lab/Timeline'
import TimelineItem from '@material-ui/lab/TimelineItem'
import TimelineSeparator from '@material-ui/lab/TimelineSeparator'
import TimelineConnector from '@material-ui/lab/TimelineConnector'
import TimelineContent from '@material-ui/lab/TimelineContent'
import TimelineDot from '@material-ui/lab/TimelineDot'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  Typography,
} from '@material-ui/core'
import { TimelineOppositeContent } from '@material-ui/lab'
import i18next, { InitOptions } from 'i18next'

type NoteTimelineProps = {}

type LocaleKeys = 'openNoteAction'

const i18nOptions: InitOptions = {
  lng: navigator.language,
  fallbackLng: 'en',
  resources: {
    en: {
      translation: {
        openNoteAction: 'Open in editor',
      } as Record<LocaleKeys, string>,
    },
    'zh-CN': {
      translation: {
        openNoteAction: '在编辑器中打开',
      } as Record<LocaleKeys, string>,
    },
  },
}

/**
 * 笔记的时间线
 */
const NoteTimeline: React.FC<NoteTimelineProps> = () => {
  const noteListState = useAsync(async () => {
    return await PageUtil.pageToAllList(noteApi.list, {
      fields: ['id', 'title', 'body', 'user_updated_time'],
      order_by: 'user_updated_time',
      order_dir: 'DESC',
    })
  }, [])

  useMount(async () => {
    await i18next.init(i18nOptions)
  })

  async function onOpenEditor(id: string) {
    await noteActionApi.openAndWatch(id)
  }

  return (
    <>
      {noteListState.loading ? (
        <CircularProgress />
      ) : (
        <Timeline align="alternate">
          {noteListState.value!.map((note, i) => (
            <TimelineItem>
              <TimelineOppositeContent>
                <Typography color="textSecondary">
                  {new Date(note.user_updated_time).toLocaleString()}
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color={i % 2 === 0 ? 'primary' : 'secondary'} />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Card>
                  <CardContent>
                    <Typography variant={'h5'}>
                      {note.title.startsWith('#')
                        ? note.title.replace('# ', '')
                        : note.title}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button onClick={() => onOpenEditor(note.id)}>
                      {i18next.t<string, LocaleKeys>('openNoteAction')}
                    </Button>
                  </CardActions>
                </Card>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      )}
    </>
  )
}

export default NoteTimeline
