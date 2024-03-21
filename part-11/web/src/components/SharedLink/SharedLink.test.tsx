import { render, screen } from '@redwoodjs/testing/web'

import SharedLink from './SharedLink'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SharedLink', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <SharedLink
          id="1"
          numberOfComments={21}
          submittedBy={{
            firstName: 'John',
            lastName: 'Doe',
            nickname: 'johnnydoe',
          }}
          title="RedwoodJS Docs"
          url="https://redwoodjs.com/docs"
          countVotes={60}
          currentUserVote="UP"
          lastUpdated="2024-03-21T22:29:17.845Z"
          favorited={true}
        />
      )
    }).not.toThrow()
  })

  it('displays the number of comments', () => {
    render(
      <SharedLink
        id="1"
        numberOfComments={21}
        submittedBy={{
          firstName: 'John',
          lastName: 'Doe',
          nickname: 'johnnydoe',
        }}
        title="RedwoodJS Docs"
        url="https://redwoodjs.com/docs"
        countVotes={60}
        currentUserVote="UP"
        lastUpdated="2024-03-21T22:29:17.845Z"
        favorited={true}
      />
    )

    expect(screen.getByText('21 comments')).toBeInTheDocument()
  })

  it('displays the name of the person who submitted the link', () => {
    render(
      <SharedLink
        id="1"
        numberOfComments={21}
        submittedBy={{
          firstName: 'John',
          lastName: 'Doe',
          nickname: 'johnnydoe',
        }}
        title="RedwoodJS Docs"
        url="https://redwoodjs.com/docs"
        countVotes={60}
        currentUserVote="UP"
        lastUpdated="2024-03-21T22:29:17.845Z"
        favorited={true}
      />
    )

    expect(screen.getByText('John Doe')).toBeInTheDocument()
  })

  it('displays the link title', () => {
    render(
      <SharedLink
        id="1"
        numberOfComments={21}
        submittedBy={{
          firstName: 'John',
          lastName: 'Doe',
          nickname: 'johnnydoe',
        }}
        title="RedwoodJS Docs"
        url="https://redwoodjs.com/docs"
        countVotes={60}
        currentUserVote="UP"
        lastUpdated="2024-03-21T22:29:17.845Z"
        favorited={true}
      />
    )

    expect(screen.getByText('RedwoodJS Docs')).toBeInTheDocument()
  })

  it('link out to the shared link URL', () => {
    render(
      <SharedLink
        id="1"
        numberOfComments={21}
        submittedBy={{
          firstName: 'John',
          lastName: 'Doe',
          nickname: 'johnnydoe',
        }}
        title="RedwoodJS Docs"
        url="https://redwoodjs.com/docs"
        countVotes={60}
        currentUserVote="UP"
        lastUpdated="2024-03-21T22:29:17.845Z"
        favorited={true}
      />
    )

    expect(screen.getByTestId('arrowLink')).toHaveAttribute(
      'href',
      'https://redwoodjs.com/docs'
    )
  })

  it('displays the number of votes', () => {
    render(
      <SharedLink
        id="1"
        numberOfComments={21}
        submittedBy={{
          firstName: 'John',
          lastName: 'Doe',
          nickname: 'johnnydoe',
        }}
        title="RedwoodJS Docs"
        url="https://redwoodjs.com/docs"
        countVotes={60}
        currentUserVote="UP"
        lastUpdated="2024-03-21T22:29:17.845Z"
        favorited={true}
      />
    )

    expect(screen.getByText('60 points')).toBeInTheDocument()
  })

  it('displays the default state as voted up', () => {
    render(
      <SharedLink
        id="1"
        numberOfComments={21}
        submittedBy={{
          firstName: 'John',
          lastName: 'Doe',
          nickname: 'johnnydoe',
        }}
        title="RedwoodJS Docs"
        url="https://redwoodjs.com/docs"
        countVotes={60}
        currentUserVote="UP"
        lastUpdated="2024-03-21T22:29:17.845Z"
        favorited={true}
      />
    )

    expect(screen.getByTestId('voteUp')).toHaveClass('filled')
    expect(screen.getByTestId('voteDown')).not.toHaveClass('filled')
  })
  it('displays the default state as voted down', () => {
    render(
      <SharedLink
        id="1"
        numberOfComments={21}
        submittedBy={{
          firstName: 'John',
          lastName: 'Doe',
          nickname: 'johnnydoe',
        }}
        title="RedwoodJS Docs"
        url="https://redwoodjs.com/docs"
        countVotes={60}
        currentUserVote="DOWN"
        lastUpdated="2024-03-21T22:29:17.845Z"
        favorited={true}
      />
    )

    expect(screen.getByTestId('voteUp')).not.toHaveClass('filled')
    expect(screen.getByTestId('voteDown')).toHaveClass('filled')
  })
  it('displays the last updated date', () => {
    // set the test date to December 18, 2023
    jest.useFakeTimers('modern')
    jest.setSystemTime(new Date('2023-12-18T00:00:00Z'))

    render(
      <SharedLink
        id="1"
        numberOfComments={21}
        submittedBy={{
          firstName: 'John',
          lastName: 'Doe',
          nickname: 'johnnydoe',
        }}
        title="RedwoodJS Docs"
        url="https://redwoodjs.com/docs"
        countVotes={60}
        currentUserVote="UP"
        lastUpdated="2023-03-21T22:29:17.845Z"
        favorited={true}
      />
    )

    const regex = /9 months ago/i
    expect(
      screen.getByText((content, node) => {
        const hasText = (node) => node.textContent.match(regex)
        if (node) {
          return (
            hasText(node) &&
            Array.from(node.children).every((child) => !hasText(child))
          )
        }
      })
    ).toBeInTheDocument()

    jest.useRealTimers()
  })

  it('displays the default state as favorited', () => {
    render(
      <SharedLink
        id="1"
        numberOfComments={21}
        submittedBy={{
          firstName: 'John',
          lastName: 'Doe',
          nickname: 'johnnydoe',
        }}
        title="RedwoodJS Docs"
        url="https://redwoodjs.com/docs"
        countVotes={60}
        currentUserVote="UP"
        lastUpdated="2024-03-21T22:29:17.845Z"
        favorited={true}
      />
    )
    expect(screen.getByTestId('favoritedButton')).toBeInTheDocument()
  })

  it('displays the default state as not favorited', () => {
    render(
      <SharedLink
        id="1"
        numberOfComments={21}
        submittedBy={{
          firstName: 'John',
          lastName: 'Doe',
          nickname: 'johnnydoe',
        }}
        title="RedwoodJS Docs"
        url="https://redwoodjs.com/docs"
        countVotes={60}
        currentUserVote="UP"
        lastUpdated="2024-03-21T22:29:17.845Z"
        favorited={false}
      />
    )
    expect(screen.getByTestId('unfavoritedButton')).toBeInTheDocument()
  })
})
