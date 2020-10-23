import {
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from '@material-ui/core'
import * as React from 'react'
import css from './JoplinSetting.module.css'
import { useForm, ValidationRules } from 'react-hook-form'
import { config, noteApi } from 'joplin-api'
import { useSnackbar } from 'notistack'
import { useLocalStorage } from 'react-use'
import { useHistory } from 'react-router'
import { SettingForm } from './model/SettingForm'

type PropsType = {}

/**
 * joplin 配置页面
 */
const JoplinSetting: React.FC<PropsType> = () => {
  const { register, handleSubmit, errors } = useForm<SettingForm>({
    defaultValues: {
      port: 41184,
    },
  })

  const snackbar = useSnackbar()

  const [, setSettingForm] = useLocalStorage<SettingForm>('settingForm')
  const history = useHistory()

  async function onSubmit(data: SettingForm) {
    console.log('handleSubmit: ', data)
    try {
      config.token = data.token
      config.port = data.port
      await noteApi.list(['id'])
      setSettingForm(config)
      snackbar.enqueueSnackbar('验证成功，即将进入图表页', {
        variant: 'success',
        autoHideDuration: 3000,
      })
      history.push('/')
    } catch (e) {
      snackbar.enqueueSnackbar(
        '验证失败，请检查授权 token 令牌与端口号是否正确',
        {
          variant: 'error',
          autoHideDuration: 3000,
        },
      )
    }
  }

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={css.container}
    >
      <Container maxWidth="xs">
        <Typography component="h1" variant="h5">
          设置页
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            fullWidth
            name="token"
            label="授权 Token 令牌"
            autoFocus
            error={!!errors.token}
            inputRef={register({
              required: 'token 是必填项',
            })}
            helperText={!!errors.token ? errors.token.message : ' '}
          />
          <TextField
            fullWidth
            name="port"
            label="端口"
            error={!!errors.port}
            inputRef={register({
              required: '端口是必填项',
              validate(val) {
                console.log(val)
                return true
              },
            } as ValidationRules)}
            helperText={!!errors.port ? errors.port.message : ' '}
          />
          <Button type="submit" fullWidth variant="contained" color="primary">
            完成
          </Button>
        </form>
      </Container>
    </Grid>
  )
}

export default JoplinSetting
