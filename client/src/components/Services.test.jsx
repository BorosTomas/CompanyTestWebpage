import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Services from './Services'

describe('Services', () => {
  it('renders the section heading', () => {
    render(<Services />)
    expect(screen.getByText('Our Services')).toBeInTheDocument()
  })

  it('renders all four service cards', () => {
    render(<Services />)
    expect(screen.getByText('Web Development')).toBeInTheDocument()
    expect(screen.getByText('Enterprise Solutions')).toBeInTheDocument()
    expect(screen.getByText('Cloud Services')).toBeInTheDocument()
    expect(screen.getByText('API Development')).toBeInTheDocument()
  })
})
