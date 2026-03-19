import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import About from './About'

describe('About', () => {
  it('renders the section heading', () => {
    render(<About />)
    expect(screen.getByText('Technologies We Work With')).toBeInTheDocument()
  })

  it('renders all three technology cards', () => {
    render(<About />)
    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('Node.js')).toBeInTheDocument()
    expect(screen.getByText('C# / .NET')).toBeInTheDocument()
  })
})
