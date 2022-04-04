import styled from 'styled-components'
import { DefaultTheme } from '../../styles/Global/types'
import { ButtonTextTypes } from './types'

export const ButtonStyle = styled.button<{
  theme: DefaultTheme
  props: { small: boolean }
  onClick?: () => void
}>`
  border: none;
  display: flex;
  padding: 16px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.primary.main};
  color: ${({ theme }) => theme.colors.neutral.white};
  cursor: pointer;
  align-items: center;
  justify-content: center;
  transition: background 0.3s;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.hover};
  }
  &:hover {
    background: ${({ theme }) => theme.colors.primary.hover};
  }
`

export const ButtonIcon = styled.div``

export const ButtonText = styled.div`
  font-size: ${({ small }: ButtonTextTypes) => {
    return small ? '14px' : '16px'
  }};
  line-height: ${({ small }: ButtonTextTypes) => {
    return small ? '16px' : '24px'
  }};
`
