import {
  TextInputStyle,
  InputLabel,
  InputField
} from './styles'

function TextInput({ label, placeholder, password }: { label?: string, placeholder?: string, password?: boolean }) {
  return (
    <TextInputStyle>
      {
        label &&
          <InputLabel
            // for={'this'}
          >
            { label }
          </InputLabel>
      }
      <InputField
        id={'this'}
        placeholder={placeholder}
      />
      {
        password && ''
      }
    </TextInputStyle>
  )
}

export default TextInput
