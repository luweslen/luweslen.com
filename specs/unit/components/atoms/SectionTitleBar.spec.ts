import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SectionTitleBar from '~/components/atoms/SectionTitleBar.vue'

describe('SectionTitleBar', () => {
  it('renders the title correctly', () => {
    const wrapper = mount(SectionTitleBar, {
      props: {
        title: 'About Me',
      },
    })

    expect(wrapper.text()).toBe('About Me')
  })

  it('defaults to h2 tag', () => {
    const wrapper = mount(SectionTitleBar, {
      props: {
        title: 'Skills',
      },
    })

    expect(wrapper.find('h2').exists()).toBe(true)
  })

  it('renders h1 tag when specified', () => {
    const wrapper = mount(SectionTitleBar, {
      props: {
        title: 'Page Title',
        tag: 'h1',
      },
    })

    expect(wrapper.find('h1').exists()).toBe(true)
    expect(wrapper.find('h2').exists()).toBe(false)
  })

  it('renders h3 tag when specified', () => {
    const wrapper = mount(SectionTitleBar, {
      props: {
        title: 'Subsection',
        tag: 'h3',
      },
    })

    expect(wrapper.find('h3').exists()).toBe(true)
  })

  it('includes accent border decoration', () => {
    const wrapper = mount(SectionTitleBar, {
      props: {
        title: 'Projects',
      },
    })

    const border = wrapper.find('.border-l-4')
    expect(border.exists()).toBe(true)
    expect(border.classes()).toContain('border-accent')
  })
})
