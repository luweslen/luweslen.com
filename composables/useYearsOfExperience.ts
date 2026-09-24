const CAREER_START = new Date(2020, 1, 1)

export function useYearsOfExperience(): ComputedRef<number> {
  return computed(() => {
    const now = new Date()
    const years = now.getFullYear() - CAREER_START.getFullYear()
    const beforeAnniversary = now.getMonth() < CAREER_START.getMonth()
      || (now.getMonth() === CAREER_START.getMonth() && now.getDate() < CAREER_START.getDate())

    return beforeAnniversary ? years - 1 : years
  })
}
