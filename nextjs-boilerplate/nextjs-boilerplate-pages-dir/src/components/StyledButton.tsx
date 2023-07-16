import { css, styled } from 'styled-components'

const variants = {
  primary: {
    color: '#ffffff',
    backgroundColor: '#1D3461',
    border: 'none',
  },
  success: {
    color: '#ffffff',
    backgroundColor: '#5AB203',
    border: 'none',
  },
  error: {
    color: '#ffffff',
    backgroundColor: '#ea5555',
    border: 'none',
  },
  transparent: {
    color: '#111111',
    backgroundColor: 'transparent',
    border: '1px solid black',
  },
} as const

export interface StyledButtonProps {
  variant: keyof typeof variants
  label: string
  size?: 'small' | 'medium' | 'large'
}

export const StyledButton = styled.button<StyledButtonProps>`
  ${({ variant }: { variant: keyof typeof variants }) => {
    return css`
      color: ${variants[variant].color};
      background-color: ${variants[variant].backgroundColor};
      border: ${variants[variant].border};
    `
  }}
  border-radius: 12px;
  font-size: 14px;
  height: 38px;
  line-height: 22px;
  letter-spacing: 0;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`
