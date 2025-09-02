import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import ClassCard from '../ClassCard.jsx'

const mockClassData = {
  school: 'Saint Louis University',
  classTakenName: 'Calculus I',
  date: 'Spring 2024',
  description: 'Introduction to differential and integral calculus, including limits, derivatives, and basic integration techniques.',
  bgColor: '#003DA5',
  tags: ['Mathematics', 'Calculus', 'Fundamentals'],
  githubURL: 'https://github.com/test/repo'
}

describe('ClassCard', () => {
  test('renders class information correctly', () => {
    render(<ClassCard {...mockClassData} />)
    
    expect(screen.getByText('Calculus I')).toBeInTheDocument()
    expect(screen.getByText('Saint Louis University')).toBeInTheDocument()
    expect(screen.getByText('Spring 2024')).toBeInTheDocument()
    expect(screen.getByText(/Introduction to differential and integral calculus/)).toBeInTheDocument()
  })

  test('renders all tags', () => {
    render(<ClassCard {...mockClassData} />)
    
    expect(screen.getByText('Mathematics')).toBeInTheDocument()
    expect(screen.getByText('Calculus')).toBeInTheDocument()
    expect(screen.getByText('Fundamentals')).toBeInTheDocument()
  })

  test('renders GitHub link when githubURL is provided', () => {
    render(<ClassCard {...mockClassData} />)
    
    const githubLinks = screen.getAllByRole('link')
    const githubLink = githubLinks.find(link => link.getAttribute('href') === 'https://github.com/test/repo')
    
    expect(githubLink).toBeInTheDocument()
    expect(githubLink).toHaveAttribute('target', '_blank')
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer')
  })

  test('does not render GitHub icon when githubURL is not provided', () => {
    const dataWithoutGithub = { ...mockClassData }
    delete dataWithoutGithub.githubURL
    
    render(<ClassCard {...dataWithoutGithub} />)
    
    const links = screen.queryAllByRole('link')
    expect(links).toHaveLength(0)
  })

  test('applies hex background color correctly', () => {
    const { container } = render(<ClassCard {...mockClassData} />)
    
    const card = container.querySelector('div[style*="background-color"]')
    expect(card).toHaveStyle({ backgroundColor: '#003DA5' })
  })

  test('applies CSS class background when not hex color', () => {
    const dataWithCssClass = { ...mockClassData, bgColor: 'bg-blue-500' }
    
    const { container } = render(<ClassCard {...dataWithCssClass} />)
    
    const card = container.querySelector('.bg-blue-500')
    expect(card).toHaveClass('bg-blue-500')
    expect(card).not.toHaveAttribute('style')
  })

  test('uses default background color when bgColor is not provided', () => {
    const dataWithoutBgColor = { ...mockClassData }
    delete dataWithoutBgColor.bgColor
    
    const { container } = render(<ClassCard {...dataWithoutBgColor} />)
    
    const card = container.querySelector('div[style*="background-color"]')
    expect(card).toHaveStyle({ backgroundColor: '#031ca6' })
  })

  test('renders empty tags gracefully', () => {
    const dataWithoutTags = { ...mockClassData, tags: [] }
    
    render(<ClassCard {...dataWithoutTags} />)
    
    expect(screen.getByText('Calculus I')).toBeInTheDocument()
    // Tags section should not be rendered
    expect(screen.queryByText('Mathematics')).not.toBeInTheDocument()
  })

  test('renders external link when provided', () => {
    const dataWithExternal = {
      ...mockClassData,
      hasExternal: true,
      externalURL: 'https://example.com'
    }
    
    render(<ClassCard {...dataWithExternal} />)
    
    const externalLink = screen.getByText('External')
    expect(externalLink).toBeInTheDocument()
    expect(externalLink.closest('a')).toHaveAttribute('href', 'https://example.com')
  })

  test('renders GitHub button when hasGitHub is true', () => {
    const dataWithGithubButton = {
      ...mockClassData,
      hasGitHub: true,
      githubURL: 'https://github.com/test/repo'
    }
    
    render(<ClassCard {...dataWithGithubButton} />)
    
    const githubButton = screen.getByText('GitHub')
    expect(githubButton).toBeInTheDocument()
    expect(githubButton.closest('a')).toHaveAttribute('href', 'https://github.com/test/repo')
  })

  test('has proper accessibility attributes', () => {
    render(<ClassCard {...mockClassData} />)
    
    const githubIcon = screen.getByRole('link').querySelector('[aria-hidden="true"]')
    expect(githubIcon).toBeInTheDocument()
  })

  test('applies hover effects classes', () => {
    const { container } = render(<ClassCard {...mockClassData} />)
    
    const card = container.querySelector('.hover\\:scale-105')
    expect(card).toHaveClass('hover:scale-105', 'hover:shadow-xl', 'transition-transform')
  })
})