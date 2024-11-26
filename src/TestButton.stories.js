import { h } from 'vue'
import TestButton from './TestButton.vue'
import { expect } from '@storybook/test'

export default {
  component: TestButton
}

export const TextSlot = {
  args: {
    default: 'Primary'
  },
  play: async ({ args, canvasElement }) => {
    await expect(canvasElement.textContent).toContain(args.default)
  }
}

export const FunctionSlot = {
  args: {
    default: () => h('span', 'Primary')
  },
  play: async ({ canvasElement }) => {
    await expect(canvasElement.textContent).toContain('Primary')
  }
}
