import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TechTagPill from '~/components/atoms/TechTagPill.vue'

describe('TechTagPill', () => {
  it('renders the label correctly', () => {
    const wrapper = mount(TechTagPill, {
      props: {
        label: 'Vue.js',
      },
    })

    expect(wrapper.text()).toBe('Vue.js')
  })

  it('applies accent styling classes', () => {
    const wrapper = mount(TechTagPill, {
      props: {
        label: 'TypeScript',
      },
    })

    expect(wrapper.classes()).toContain('text-accent')
    expect(wrapper.classes()).toContain('bg-accent/10')
    expect(wrapper.classes()).toContain('rounded-full')
  })

  it('renders as a span element', () => {
    const wrapper = mount(TechTagPill, {
      props: {
        label: 'Node.js',
      },
    })

    expect(wrapper.element.tagName).toBe('SPAN')
  })
})
