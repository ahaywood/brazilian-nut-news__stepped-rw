// Pass props to your component by passing an `args` object to your story
//
// ```tsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react'

import Icon from './Icon'

const meta: Meta<typeof Icon> = {
  component: Icon,
}

export default meta

type Story = StoryObj<typeof Icon>

export const Arrow: Story = {
  args: {
    id: 'arrow',
  },
}

export const Facebook: Story = {
  args: {
    id: 'facebook',
  },
}

export const GitHub: Story = {
  args: {
    id: 'github',
  },
}

export const Hide: Story = {
  args: {
    id: 'hide',
  },
}

export const LinkedIn: Story = {
  args: {
    id: 'linkedin',
  },
}

export const YouTube: Story = {
  args: {
    id: 'youtube',
  },
}
