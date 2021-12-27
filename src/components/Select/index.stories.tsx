import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ESSelect, { ESSelectProps } from '.'
import { SelectProps } from '@mui/material'

export default {
  title: 'Component/Select',
  component: ESSelect,
} as ComponentMeta<typeof ESSelect>

const Template: ComponentStory<typeof ESSelect> = (
  args: ESSelectProps & SelectProps
) => (
  <ESSelect {...args}>
    <option>option 1</option>
    <option>option 2</option>
  </ESSelect>
)

export const Big = Template.bind({})
Big.args = {}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
}

export const WithHelperText = Template.bind({})
WithHelperText.args = {
  helperText: '1 option',
}

export const WithLabel = Template.bind({})
WithLabel.args = {
  label: 'Button',
}
