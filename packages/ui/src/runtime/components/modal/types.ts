export type ModalProps = {
  variant: 'info' | 'danger' | 'success' | 'warn' | 'primary'
  layout: 'centered' | 'simple'
  title: string
  description: string
  closeButton: boolean
  open: boolean
  onClose: () => void
  buttons: ModalButtonProps[]
  hideCloseButton: boolean
}

export type ModalButtonProps = {
  label: string
  onClick: () => void
  variant: 'info' | 'secondary' | 'danger' | 'success' | 'warn'
  [attr: string]: any
}
