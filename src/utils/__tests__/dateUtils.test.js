import { describe, test, expect } from 'vitest'
import { parseDateString } from '../dateUtils.js'

describe('parseDateString', () => {
  test('handles Spring semester correctly', () => {
    expect(parseDateString('Spring 2024')).toBe(20241)
  })

  test('handles Summer semester correctly', () => {
    expect(parseDateString('Summer 2024')).toBe(20242)
  })

  test('handles Fall semester correctly', () => {
    expect(parseDateString('Fall 2024')).toBe(20243)
  })

  test('sorts semesters correctly within same year', () => {
    const spring = parseDateString('Spring 2024')
    const summer = parseDateString('Summer 2024') 
    const fall = parseDateString('Fall 2024')
    
    expect(fall).toBeGreaterThan(summer)
    expect(summer).toBeGreaterThan(spring)
  })

  test('handles different years correctly', () => {
    expect(parseDateString('Spring 2025')).toBeGreaterThan(parseDateString('Fall 2024'))
    expect(parseDateString('Fall 2025')).toBeGreaterThan(parseDateString('Spring 2025'))
  })

  test('handles future years correctly', () => {
    expect(parseDateString('Spring 2026')).toBeGreaterThan(parseDateString('Fall 2025'))
    expect(parseDateString('Fall 2030')).toBeGreaterThan(parseDateString('Spring 2026'))
  })

  test('handles "Current" classes with highest priority', () => {
    const currentValue = parseDateString('Current')
    
    expect(currentValue).toBeGreaterThan(parseDateString('Fall 2025'))
    expect(currentValue).toBeGreaterThan(parseDateString('Spring 2030'))
  })

  test('handles unknown seasons gracefully', () => {
    expect(parseDateString('Winter 2024')).toBe(20240)
  })

  test('chronological sorting works as expected', () => {
    const dates = [
      'Spring 2024',
      'Fall 2025', 
      'Summer 2024',
      'Current',
      'Spring 2025',
      'Fall 2024'
    ]
    
    const sorted = dates.sort((a, b) => parseDateString(b) - parseDateString(a))
    
    expect(sorted).toEqual([
      'Current',
      'Fall 2025',
      'Spring 2025', 
      'Fall 2024',
      'Summer 2024',
      'Spring 2024'
    ])
  })
})