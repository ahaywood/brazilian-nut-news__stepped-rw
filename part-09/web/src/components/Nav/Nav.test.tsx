import { routes } from '@redwoodjs/router'
import { render, screen } from '@redwoodjs/testing/web'

import Nav from './Nav'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Nav', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Nav />)
    }).not.toThrow()
  })

  it('links to the home page', () => {
    render(<Nav />)
    const homeLink = screen.getByText('Home')
    expect(homeLink).toHaveAttribute('href', routes.feed())
  })

  describe('when a user is not logged in', () => {
    it.skip('links to the login page', () => {})
    it.skip('links to the sign up page', () => {})
  })

  describe('when a user is logged in', () => {
    it('links to the submit a link page', () => {
      render(<Nav />)
      const submitLink = screen.getByText('Submit a Link')
      expect(submitLink).toHaveAttribute('href', routes.submitLink())
    })

    it.skip('links to the logout page', () => {})

    it('links to the profile page', () => {
      render(<Nav />)
      const profileLink = screen.getByText('My Profile')
      expect(profileLink).toHaveAttribute(
        'href',
        routes.profile({ nickname: 'Amy' })
      )
    })
  })
})
