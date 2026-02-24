import { describe, test, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ClassSearch from '../ClassSearch.jsx'

describe('ClassSearch', () => {
  test('renders search input with placeholder text', () => {
    const mockSetSearchTerm = vi.fn()
    
    render(<ClassSearch searchTerm="" setSearchTerm={mockSetSearchTerm} />)
    
    const searchInput = screen.getByPlaceholderText('Search by class name or tag...')
    expect(searchInput).toBeInTheDocument()
  })

  test('displays the current search term value', () => {
    const mockSetSearchTerm = vi.fn()
    
    render(<ClassSearch searchTerm="calculus" setSearchTerm={mockSetSearchTerm} />)
    
    const searchInput = screen.getByDisplayValue('calculus')
    expect(searchInput).toBeInTheDocument()
  })

  test('calls setSearchTerm when user types', async () => {
    const mockSetSearchTerm = vi.fn()
    const user = userEvent.setup()
    
    render(<ClassSearch searchTerm="" setSearchTerm={mockSetSearchTerm} />)
    
    const searchInput = screen.getByPlaceholderText('Search by class name or tag...')
    await user.type(searchInput, 'm')
    
    expect(mockSetSearchTerm).toHaveBeenCalledWith('m')
  })

  test('calls setSearchTerm when user clears input', async () => {
    const mockSetSearchTerm = vi.fn()
    const user = userEvent.setup()
    
    render(<ClassSearch searchTerm="calculus" setSearchTerm={mockSetSearchTerm} />)
    
    const searchInput = screen.getByDisplayValue('calculus')
    await user.clear(searchInput)
    
    expect(mockSetSearchTerm).toHaveBeenCalledWith('')
  })

  test('has correct input type and styling classes', () => {
    const mockSetSearchTerm = vi.fn()
    
    render(<ClassSearch searchTerm="" setSearchTerm={mockSetSearchTerm} />)
    
    const searchInput = screen.getByRole('textbox')
    expect(searchInput).toHaveAttribute('type', 'text')
    expect(searchInput).toHaveClass('w-full', 'p-2', 'rounded-2xl', 'border')
  })

  test('handles special characters in search', async () => {
    const mockSetSearchTerm = vi.fn()
    const user = userEvent.setup()
    
    render(<ClassSearch searchTerm="" setSearchTerm={mockSetSearchTerm} />)
    
    const searchInput = screen.getByPlaceholderText('Search by class name or tag...')
    await user.type(searchInput, '+')
    
    expect(mockSetSearchTerm).toHaveBeenCalledWith('+')
  })
})