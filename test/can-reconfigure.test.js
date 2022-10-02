import { describe, expect, it } from 'vitest'

const canConfigure = (from, to) => {
  if (from === undefined) throw new Error('from is requested')
  if (typeof from !== 'string') throw new Error('from is not a string')
}

describe('canReconfigure', () => {
  it('should be a function', () => {
    expect(canConfigure).toBeTypeOf('function')
  })

  it('should throw if first parameter is missing', () => {
    expect(() => canConfigure()).toThrow()
  })

  it('should throw if first parameter is not a string', () => {
    expect(() => canConfigure(2)).toThrow()
  })

  it('should be a function', () => {
    expect(canConfigure).toBeTypeOf('function')
  })

  it('should throw if first parameter is missing', () => {
    expect(() => canConfigure()).toThrow()
  })

  it('should throw if first parameter is not a string', () => {
    expect(() => canConfigure(2)).toThrow()
  })
})
