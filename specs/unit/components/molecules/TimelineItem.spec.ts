import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TimelineItem from '~/components/molecules/TimelineItem.vue'

describe('TimelineItem', () => {
  const defaultProps = {
    period: '2023 - Present',
    title: 'Software Developer',
    subtitle: 'Company Name',
  }

  it('renders period, title and subtitle correctly', () => {
    const wrapper = mount(TimelineItem, {
      props: defaultProps,
    })

    expect(wrapper.text()).toContain('2023 - Present')
    expect(wrapper.text()).toContain('Software Developer')
    expect(wrapper.text()).toContain('Company Name')
  })

  it('renders summary when provided', () => {
    const wrapper = mount(TimelineItem, {
      props: {
        ...defaultProps,
        summary: 'Building great software',
      },
    })

    expect(wrapper.text()).toContain('Building great software')
  })

  it('does not render summary when not provided', () => {
    const wrapper = mount(TimelineItem, {
      props: defaultProps,
    })

    // Should only have period, title and subtitle
    const textContent = wrapper.text()
    expect(textContent).toBe('2023 - PresentSoftware DeveloperCompany Name')
  })

  it('shows expand button when details are provided', () => {
    const wrapper = mount(TimelineItem, {
      props: {
        ...defaultProps,
        details: ['Detail 1', 'Detail 2'],
      },
    })

    expect(wrapper.find('button').exists()).toBe(true)
  })

  it('does not show expand button when no details', () => {
    const wrapper = mount(TimelineItem, {
      props: defaultProps,
    })

    expect(wrapper.find('button').exists()).toBe(false)
  })

  it('toggles details visibility on button click', async () => {
    const wrapper = mount(TimelineItem, {
      props: {
        ...defaultProps,
        details: ['Detail 1', 'Detail 2'],
      },
    })

    // Initially details should not be visible
    expect(wrapper.text()).not.toContain('Detail 1')

    // Click to expand
    await wrapper.find('button').trigger('click')
    expect(wrapper.text()).toContain('Detail 1')
    expect(wrapper.text()).toContain('Detail 2')

    // Click to collapse
    await wrapper.find('button').trigger('click')
    expect(wrapper.text()).not.toContain('Detail 1')
  })

  it('hides timeline line when isLast is true', () => {
    const wrapper = mount(TimelineItem, {
      props: {
        ...defaultProps,
        isLast: true,
      },
    })

    // When isLast is true, the timeline line should not be rendered
    const timelineLine = wrapper.find('.absolute.left-\\[7px\\]')
    expect(timelineLine.exists()).toBe(false)
  })

  it('shows timeline line when isLast is false', () => {
    const wrapper = mount(TimelineItem, {
      props: {
        ...defaultProps,
        isLast: false,
      },
    })

    const timelineLine = wrapper.find('.absolute.left-\\[7px\\]')
    expect(timelineLine.exists()).toBe(true)
  })

  it('renders timeline dot', () => {
    const wrapper = mount(TimelineItem, {
      props: defaultProps,
    })

    const dot = wrapper.find('.rounded-full.border-2.border-accent')
    expect(dot.exists()).toBe(true)
  })
})
