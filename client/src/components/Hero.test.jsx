import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Hero from './Hero'

describe('Hero', () => {
  it('renders the main heading', () => {
    render(<Hero />)
    expect(screen.getByText(/Digital Products/)).toBeInTheDocument()
  })

  it('renders the subtitle', () => {
    render(<Hero />)
    expect(
      screen.getByText(/cutting-edge technologies/)
    ).toBeInTheDocument()
  })

  it('renders the call-to-action button', () => {
    render(<Hero />)
    const cta = screen.getByText(/Get Started/)
    expect(cta).toBeInTheDocument()
    expect(cta).toHaveAttribute('href', '#contact')
  })
})
