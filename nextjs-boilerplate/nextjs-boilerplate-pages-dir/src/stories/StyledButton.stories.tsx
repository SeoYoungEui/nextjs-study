import { StyledButton, StyledButtonProps } from '@/components'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof StyledButton> = {
  title: 'Components/StyledButton',
  component: StyledButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: {
        type: 'radio',
      },
      options: ['primary', 'success', 'error', 'transparent'],
    },
    size: {
      control: {
        type: 'radio',
      },
      options: ['small', 'medium', 'large'],
    },
    onClick: { action: 'clicked' },
  },
}

export default meta

type Story = StoryObj<typeof StyledButton>

export const Primary: Story = {
  args: {
    variant: 'primary',
    label: 'Primary',
    size: 'medium',
  },
  render: (props: StyledButtonProps) => (
    <StyledButton {...props} variant='primary'>
      {props.label}
    </StyledButton>
  ),
}
export const Success: Story = {
  args: {
    variant: 'success',
    label: 'Success',
    size: 'small',
  },
  render: (props: StyledButtonProps) => (
    <StyledButton {...props} variant='success'>
      {props.label}
    </StyledButton>
  ),
}
export const Error: Story = {
  args: {
    variant: 'error',
    label: 'Error',
  },
  render: (props: StyledButtonProps) => (
    <StyledButton {...props} variant='error'>
      {props.label}
    </StyledButton>
  ),
}
export const Transparent: Story = {
  args: {
    variant: 'transparent',
    label: 'Transparent',
  },
  render: (props: StyledButtonProps) => (
    <StyledButton {...props} variant='transparent'>
      {props.label}
    </StyledButton>
  ),
}
// const Template: StoryFn<StyledButtonProps> = (args) => (
//   <StyledButton {...args} />
// )

// export const Primary = Template.bind({})
// Primary.args = {
//   variant: 'primary',
//   label: 'Primary',
// }
// export const Success = Template.bind({})
// Success.args = {
//   variant: 'success',
//   label: 'Success',
// }

// export const Error = Template.bind({})
// Error.args = {
//   variant: 'error',
//   label: 'Error',
// }

// export const Transparent = Template.bind({})
// Transparent.args = {
//   variant: 'transparent',
//   label: 'Transparent',
// }
