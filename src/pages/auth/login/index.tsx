import Image from 'next/image'
import Button from '../../../components/Button'
import TextInput from '../../../components/TextInput'
import {
  LoginContainer,
  LoginView
} from './styles'

function Login() {
  const handleLogin = (): void => {
    console.log('login')
  }

  return (
    <LoginContainer>
      <LoginView>
        <span>
          Bem-vindx à plataforma da
        </span>
        <Image
          src={'/logo-rizos.svg'}
          alt='logo rizos'
          width={160}
          height={164}
        />
        <span>
          Utilize seus dados para acessar a sua conta
        </span>

        <TextInput
          label={'E-mail'}
          placeholder={'Digite seu e-mail'}
        />
        <TextInput
          label={'Senha'}
          placeholder={'Digite sua senha'}
          password
        />

        <Button
          onClick={handleLogin}
        >
          Entrar
        </Button>
      </LoginView>

    </LoginContainer>
  )
}

export default Login
