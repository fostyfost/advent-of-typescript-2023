import { test, expectTypeOf } from 'vitest'
import type { CookieSurveyInput } from './solution'

const cookieInventory = {
  chocolate: 1,
  sugar: 20,
  gingerBread: 10,
  peanutButter: 30,
  snickeDoodle: 73,
}

const unrelated = {
  hi: 1,
  hi2: 1,
  hi3: 1,
  hi4: 1,
  hi5: 1,
  hi6: 1,
  hi7: 1,
}

test('day-02', () => {
  expectTypeOf<CookieSurveyInput<typeof cookieInventory>>().toEqualTypeOf<
    'chocolate' | 'sugar' | 'gingerBread' | 'peanutButter' | 'snickeDoodle'
  >()

  expectTypeOf<CookieSurveyInput<typeof unrelated>>().toEqualTypeOf<
    'hi' | 'hi2' | 'hi3' | 'hi4' | 'hi5' | 'hi6' | 'hi7'
  >()
})
