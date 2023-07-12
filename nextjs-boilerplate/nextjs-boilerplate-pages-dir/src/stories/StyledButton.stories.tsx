import { StyledButton } from '@/components'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof StyledButton> = {
  title: 'StyledButton',
  component: StyledButton,
}

export default meta

type Story = StoryObj<typeof StyledButton>

// export const Primary = (props: StyledButtonProps) => {
//   return <StyledButton {...props} variant='primary'></StyledButton>
// }

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
}
