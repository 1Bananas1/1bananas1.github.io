import { describe, test, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Classes from '../Classes.jsx'

// Mock the classesData to have predictable test data
vi.mock('../../data/classDict.jsx', () => ({
  classesData: [
    {
      id: 'calc-1',
      school: 'Test University',
      classTakenName: 'Calculus I',
      bgColor: '#003DA5',
      date: 'Spring 2024',
      description: 'Basic calculus course',
      tags: ['Mathematics', 'Calculus'],
    },
    {
      id: 'cs-101',
      school: 'Test University', 
      classTakenName: 'Computer Science 101',
      bgColor: '#000000',
      date: 'Fall 2024',
      description: 'Introduction to programming',
      tags: ['Computer Science', 'Programming'],
    },
    {
      id: 'advanced-calc',
      school: 'Test University',
      classTakenName: 'Advanced Calculus',
      bgColor: '#003DA5', 
      date: 'Spring 2025',
      description: 'Advanced calculus topics',
      tags: ['Mathematics', 'Advanced'],
    }
  ]
}))

describe('Classes', () => {
  test('renders page title and description', () => {
    render(<Classes />)
    
    expect(screen.getByText('Classes')).toBeInTheDocument()
    expect(screen.getByText('Courses Taken')).toBeInTheDocument()
  })

  test('renders search input', () => {
    render(<Classes />)
    
    const searchInput = screen.getByPlaceholderText('Search by class name or tag...')
    expect(searchInput).toBeInTheDocument()
  })

  test('displays all classes initially', () => {
    render(<Classes />)
    
    expect(screen.getByText('Calculus I')).toBeInTheDocument()
    expect(screen.getByText('Computer Science 101')).toBeInTheDocument()
    expect(screen.getByText('Advanced Calculus')).toBeInTheDocument()
  })

  test('classes are sorted by date (newest first)', () => {
    render(<Classes />)
    
    const classCards = screen.getAllByText(/Test University/)
    const cardContainer = classCards[0].closest('[class*="grid"]').parentElement
    
    // Spring 2025 should come first (Advanced Calculus)
    // Fall 2024 should come second (CS 101)  
    // Spring 2024 should come last (Calculus I)
    expect(cardContainer).toHaveTextContent(/Advanced Calculus.*Computer Science 101.*Calculus I/s)
  })

  test('filters classes by name search', async () => {
    const user = userEvent.setup()
    render(<Classes />)
    
    const searchInput = screen.getByPlaceholderText('Search by class name or tag...')
    await user.type(searchInput, 'calculus')
    
    expect(screen.getByText('Calculus I')).toBeInTheDocument()
    expect(screen.getByText('Advanced Calculus')).toBeInTheDocument()
    expect(screen.queryByText('Computer Science 101')).not.toBeInTheDocument()
  })

  test('filters classes by tag search', async () => {
    const user = userEvent.setup()
    render(<Classes />)
    
    const searchInput = screen.getByPlaceholderText('Search by class name or tag...')
    await user.type(searchInput, 'computer science')
    
    expect(screen.getByText('Computer Science 101')).toBeInTheDocument()
    expect(screen.queryByText('Calculus I')).not.toBeInTheDocument()
    expect(screen.queryByText('Advanced Calculus')).not.toBeInTheDocument()
  })

  test('search is case insensitive', async () => {
    const user = userEvent.setup()
    render(<Classes />)
    
    const searchInput = screen.getByPlaceholderText('Search by class name or tag...')
    await user.type(searchInput, 'MATHEMATICS')
    
    expect(screen.getByText('Calculus I')).toBeInTheDocument()
    expect(screen.getByText('Advanced Calculus')).toBeInTheDocument()
    expect(screen.queryByText('Computer Science 101')).not.toBeInTheDocument()
  })

  test('shows "no results" message for invalid search', async () => {
    const user = userEvent.setup()
    render(<Classes />)
    
    const searchInput = screen.getByPlaceholderText('Search by class name or tag...')
    await user.type(searchInput, 'nonexistent course')
    
    expect(screen.getByText('Oops! We couldn\'t find that class')).toBeInTheDocument()
    expect(screen.getByText(/Try searching for a different class name/)).toBeInTheDocument()
  })

  test('clearing search shows all classes again', async () => {
    const user = userEvent.setup()
    render(<Classes />)
    
    const searchInput = screen.getByPlaceholderText('Search by class name or tag...')
    
    // First filter
    await user.type(searchInput, 'calculus')
    expect(screen.queryByText('Computer Science 101')).not.toBeInTheDocument()
    
    // Clear search
    await user.clear(searchInput)
    expect(screen.getByText('Computer Science 101')).toBeInTheDocument()
  })

  test('filtered results maintain date sorting', async () => {
    const user = userEvent.setup()
    render(<Classes />)
    
    const searchInput = screen.getByPlaceholderText('Search by class name or tag...')
    await user.type(searchInput, 'calculus')
    
    const mathCards = screen.getAllByText(/Basic calculus|Advanced calculus/)
    const cardContainer = mathCards[0].closest('[class*="grid"]').parentElement
    
    // Advanced Calculus (Spring 2025) should come before Calculus I (Spring 2024)
    expect(cardContainer).toHaveTextContent(/Advanced Calculus.*Calculus I/s)
  })

  test('each class card has animation delay', () => {
    render(<Classes />)
    
    const classCards = screen.getAllByText(/Test University/)
    
    classCards.forEach((card, index) => {
      const cardElement = card.closest('.animate-fadeIn')
      expect(cardElement).toHaveStyle(`animation-delay: ${index * 50}ms`)
    })
  })

  test('handles partial matches in search', async () => {
    const user = userEvent.setup()
    render(<Classes />)
    
    const searchInput = screen.getByPlaceholderText('Search by class name or tag...')
    await user.type(searchInput, 'calc')
    
    expect(screen.getByText('Calculus I')).toBeInTheDocument()
    expect(screen.getByText('Advanced Calculus')).toBeInTheDocument()
  })
})