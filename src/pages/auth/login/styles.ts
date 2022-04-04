import styled from 'styled-components'

export const LoginContainer = styled.div`
  min-height: 100vh;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const LoginView = styled.div`
  min-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (max-width: 680px) {
    min-width: unset;
  }
`
