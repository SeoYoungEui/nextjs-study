import { StyledButton, StyledButtonProps } from '@/components'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof StyledButton> = {
  title: 'StyledButton',
  component: StyledButton,
}

export default meta

type Story = StoryObj<typeof StyledButton>

export const Primary: Story = {
  render: (props: StyledButtonProps) => (
    <StyledButton {...props} variant='primary'>
      Primary
    </StyledButton>
  ),
}
export const Success: Story = {
  render: (props: StyledButtonProps) => (
    <StyledButton {...props} variant='success'>
      Success
    </StyledButton>
  ),
}
export const Error: Story = {
  render: (props: StyledButtonProps) => (
    <StyledButton {...props} variant='primary'>
      Error
    </StyledButton>
  ),
}
export const Transparent: Story = {
  render: (props: StyledButtonProps) => (
    <StyledButton {...props} variant='transparent'>
      Transparent
    </StyledButton>
  ),
}
