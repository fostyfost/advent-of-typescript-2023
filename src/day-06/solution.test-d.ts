import { test, expectTypeOf } from 'vitest'
import type { FilterChildrenBy } from './solution'

test('day-06', () => {
  // noinspection TypeScriptDuplicateUnionOrIntersectionType
  expectTypeOf<FilterChildrenBy<'nice' | 'nice' | 'nice', 'naughty'>>().toEqualTypeOf<'nice'>()

  // noinspection TypeScriptDuplicateUnionOrIntersectionType
  expectTypeOf<FilterChildrenBy<'nice' | 'naughty' | 'naughty', 'naughty'>>().toEqualTypeOf<'nice'>()

  // eslint-disable-next-line @typescript-eslint/ban-types
  expectTypeOf<FilterChildrenBy<string | number | (() => void), Function>>().toEqualTypeOf<string | number>()
})
