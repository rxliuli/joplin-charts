import { useSnackbar } from 'notistack'

export function useMessage() {
  const snackbar = useSnackbar()
  const autoHideDuration = 3000
  return {
    success(msg: string) {
      snackbar.enqueueSnackbar(msg, {
        variant: 'success',
        autoHideDuration,
      })
    },
    error(msg: string) {
      snackbar.enqueueSnackbar(msg, {
        variant: 'error',
        autoHideDuration,
      })
    },
  }
}
