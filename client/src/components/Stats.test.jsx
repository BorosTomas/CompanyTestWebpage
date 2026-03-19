import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Stats from './Stats'

describe('Stats', () => {
  it('renders all stat items', () => {
    render(<Stats />)
    expect(screen.getByText('150+')).toBeInTheDocument()
    expect(screen.getByText('Projects Completed')).toBeInTheDocument()
    expect(screen.getByText('50+')).toBeInTheDocument()
    expect(screen.getByText('Happy Clients')).toBeInTheDocument()
  })
})
