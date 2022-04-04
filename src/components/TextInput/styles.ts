import styled from 'styled-components'
import { DefaultTheme } from '../../styles/Global/types'

export const TextInputStyle = styled.fieldset<{ theme: DefaultTheme }>`
  border: none;
  background: ${({ theme }) => theme.colors.neutral[80]};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 10px 14px 6px 14px;

  position: relative;
  &::after {
    transition: width 0.3s;
    width: 0;
    height: 2px;
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    background: ${({ theme }) => theme.colors.primary.main};
  }

  :focus-within {
    label {
      color: ${({ theme }) => theme.colors.primary.main};
    }
    &::after {
      width: 100%;
    }
  }
`

export const InputLabel = styled.label`
  color: ${({ theme }) => theme.colors.primary.white};
  font-size: 12px;
  font-weight: lighter;
  transition: color 0.3s;
`

export const InputField = styled.input`
  flex: 1;
  border: none;

  font-size: 14px;
  color: ${({ theme }) => theme.colors.neutral.white};
  caret-color: ${({ theme }) => theme.colors.primary.main};

  background: transparent;

  outline: none;
`
