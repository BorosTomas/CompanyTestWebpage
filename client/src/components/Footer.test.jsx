import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Footer from './Footer'

describe('Footer', () => {
  it('renders copyright information', () => {
    render(<Footer />)
    expect(screen.getByText(/2026 TechVision Solutions/)).toBeInTheDocument()
  })
})
