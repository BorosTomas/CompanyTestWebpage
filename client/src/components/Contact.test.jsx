import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Contact from './Contact'

describe('Contact', () => {
  it('renders the section heading', () => {
    render(<Contact />)
    expect(screen.getByText(/Build Something Great/)).toBeInTheDocument()
  })

  it('renders form fields', () => {
    render(<Contact />)
    expect(screen.getByLabelText('Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
  })

  it('renders a submit button', () => {
    render(<Contact />)
    expect(screen.getByRole('button', { name: /Send Message/ })).toBeInTheDocument()
  })
})
