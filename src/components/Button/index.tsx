import { ButtonTypes } from './types'
import {
  ButtonStyle,
  ButtonIcon,
  ButtonText
} from './styles'

function Button({ icon, children }: ButtonTypes) {
  return (
    <ButtonStyle
      // onClick={onClick}
    >
      {icon && <ButtonIcon />}
      <ButtonText small={false}>
        {children}
      </ButtonText>
    </ButtonStyle>
  )
}

export default Button
