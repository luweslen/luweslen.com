import { describe } from "node:test";
import { expect, it } from "vitest";
import BetweenDate from "~/components/cv/BetweenDate.vue";
import { mountSuspended } from "@nuxt/test-utils/runtime";

describe("Components :: CV :: BetweenDate", () => {
  it("should be defined", async () => {
    const component = await mountSuspended(BetweenDate, {
      props: {
        start: new Date().toISOString(),
        end: new Date().toISOString(),
      }
    })

    expect(component).toBeDefined()
  })

  it("should render with correct data", async () => {
    const component = await mountSuspended(BetweenDate, {
      props: {
        start: '2023-01-01T12:00:00.000Z',
        end: '2024-01-01T12:00:00.000Z',
      }
    })
  
    expect(component.html()).toEqual('<div class="flex gap-1 items-center justify-start"><span class="i-mdi-calendar bg-slate-500"></span><span>jan. de 2023 - jan. de 2024</span></div>')
  })

  it('should render without end prop', async () => {
    const component = await mountSuspended(BetweenDate, {
      props: {
        start: '2023-01-01T12:00:00.000Z',
      }
    })
    
    expect(component.html()).toEqual('<div class="flex gap-1 items-center justify-start"><span class="i-mdi-calendar bg-slate-500"></span><span>jan. de 2023 - atualmente</span></div>')
  })
})