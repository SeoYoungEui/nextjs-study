import { StyledButton, StyledButtonProps } from '@/components'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof StyledButton> = {
  title: 'StyledButton',
  component: StyledButton,
}

export default meta

type Story = StoryObj<typeof StyledButton>

export const Primary = (props: StyledButtonProps) => {
  return (
    <StyledButton {...props} variant='primary'>
      Primary
    </StyledButton>
  )
}
export const Success = (props: StyledButtonProps) => {
  return (
    <StyledButton {...props} variant='success'>
      Success
    </StyledButton>
  )
}
export const Error = (props: StyledButtonProps) => {
  return (
    <StyledButton {...props} variant='error'>
      Error
    </StyledButton>
  )
}
export const Transparent = (props: StyledButtonProps) => {
  return (
    <StyledButton {...props} variant='transparent'>
      Transparent
    </StyledButton>
  )
}
