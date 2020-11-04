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
import { useAsync, useLocalStorage } from 'react-use'
import { useHistory } from 'react-router'
import { SettingForm } from './model/SettingForm'
import i18next, { InitOptions } from 'i18next'
import { useMessage } from '../../common/hooks/useMessage'

type PropsType = {}

type LocaleKeys =
  | 'successMsg'
  | 'errorMsg'
  | 'settingFormHeader'
  | 'tokenLabel'
  | 'tokenErrorRequiredMsg'
  | 'portLabel'
  | 'portErrorRequiredMsg'
  | 'submitText'

const i18nOptions: InitOptions = {
  lng: navigator.language,
  fallbackLng: 'en',
  resources: {
    en: {
      translation: {
        successMsg:
          'The verification is successful, and you are about to enter the homepage',
        errorMsg:
          'Verification failed, please check whether the authorization token and port number are correct',
        settingFormHeader: 'Settings page',
        tokenLabel: 'Token',
        tokenErrorRequiredMsg: 'Token is required',
        portLabel: 'Port',
        portErrorRequiredMsg: 'Port is required',
        submitText: 'Submit',
      } as Record<LocaleKeys, string>,
    },
    'zh-CN': {
      translation: {
        successMsg: '验证成功，即将进入主页',
        errorMsg: '验证失败，请检查授权 token 令牌与端口号是否正确',
        settingFormHeader: '设置页',
        tokenLabel: '授权 Token 令牌',
        tokenErrorRequiredMsg: 'token 是必填项',
        portLabel: '端口',
        portErrorRequiredMsg: '端口是必填项',
        submitText: '提交',
      } as Record<LocaleKeys, string>,
    },
  },
}

/**
 * joplin 配置页面
 */
const JoplinSetting: React.FC<PropsType> = () => {
  const i18nLoad = useAsync(() => i18next.init(i18nOptions), [])
  const { register, handleSubmit, errors } = useForm<SettingForm>({
    defaultValues: {
      port: 41184,
    },
  })

  const [, setSettingForm] = useLocalStorage<SettingForm>('settingForm')
  const history = useHistory()

  const { success, error } = useMessage()

  async function onSubmit(data: SettingForm) {
    console.log('handleSubmit: ', data)
    try {
      config.token = data.token
      config.port = data.port
      await noteApi.list(['id'])
      setSettingForm(config)
      success(i18next.t<string, LocaleKeys>('successMsg'))
      history.push('/')
    } catch (e) {
      error(i18next.t<string, LocaleKeys>('errorMsg'))
    }
  }

  return (
    <>
      {i18nLoad.value && (
        <Grid
          container
          justify="center"
          alignItems="center"
          className={css.container}
        >
          {
            <Container maxWidth="xs">
              <Typography component="h1" variant="h5">
                {i18next.t<string, LocaleKeys>('settingFormHeader')}
              </Typography>
              <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                  fullWidth
                  name="token"
                  label={i18next.t<string, LocaleKeys>('tokenLabel')}
                  autoFocus
                  error={!!errors.token}
                  inputRef={register({
                    required: i18next.t<string, LocaleKeys>(
                      'tokenErrorRequiredMsg',
                    ),
                  })}
                  helperText={!!errors.token ? errors.token.message : ' '}
                />
                <TextField
                  fullWidth
                  name="port"
                  label={i18next.t<string, LocaleKeys>('portLabel')}
                  error={!!errors.port}
                  inputRef={register({
                    required: i18next.t<string, LocaleKeys>(
                      'portErrorRequiredMsg',
                    ),
                  } as ValidationRules)}
                  helperText={!!errors.port ? errors.port.message : ' '}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                >
                  {i18next.t<string, LocaleKeys>('submitText')}
                </Button>
              </form>
            </Container>
          }
        </Grid>
      )}
    </>
  )
}

export default JoplinSetting
