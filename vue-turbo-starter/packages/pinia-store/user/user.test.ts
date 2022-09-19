import { expect, beforeEach, describe, it, test } from 'vitest'
import { setActivePinia, createPinia, defineStore } from 'pinia'
import { user as userStore } from './user'

describe('User Store with describe', () => {
  setActivePinia(createPinia())

  let useUser = defineStore('user', userStore)

  beforeEach(() => {
    useUser = defineStore('user', userStore)
  })

  it('First Name', () => {
    const user = useUser()
    expect(user.firstName).toBe('Lebron')
    user.setFirstName('Testo')
    expect(user.firstName).toBe('Testo')
  })

  it('Last Name', () => {
    const user = useUser()
    expect(user.lastName).toBe('James')
    user.setLastName('Testo')
    expect(user.lastName).toBe('Testo')
  })
})

test('User Store: First Name with test', () => {
  setActivePinia(createPinia())
  const useUser = defineStore('user', userStore)
  const user = useUser()

  expect(user.firstName).toBe('Lebron')
  user.setFirstName('Terminator')
  expect(user.firstName).toBe('Terminator')
})
