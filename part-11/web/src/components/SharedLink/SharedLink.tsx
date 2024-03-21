import { Link, routes } from '@redwoodjs/router'

import { formatRelativeTime } from 'src/helpers/dateHelpers'

import Icon from '../Icon/Icon'

interface Props {
  id: string
  numberOfComments: number
  submittedBy: {
    firstName: string
    lastName: string
    nickname: string
  }
  title: string
  url: string
  countVotes: number
  currentUserVote: string
  lastUpdated: string
  favorited?: boolean
}

const SharedLink = ({
  id,
  numberOfComments,
  submittedBy,
  title,
  url,
  countVotes,
  currentUserVote,
  lastUpdated,
  favorited = false,
}: Props) => {
  return (
    <div className="flex gap-x-5 pb-6 pl-4 pr-8 pt-8">
      {/* vote */}
      <div className="flex flex-col">
        <button
          className={`up ${currentUserVote === 'UP' && 'filled'}`}
          data-testid="voteUp"
        >
          <Icon id="up" />
        </button>
        <button
          className={`down ${currentUserVote === 'DOWN' && 'filled'}`}
          data-testid="voteDown"
        >
          <Icon id="up" className="rotate-180" />
        </button>
      </div>

      {/* content */}
      <div className="flex-1">
        <h2 className="font-condensed text-6xl uppercase leading-[0.8]">
          <Link
            to={routes.link({ id })}
            className="text-cinder dark:text-icterine"
          >
            {title}
          </Link>
        </h2>
        <div className="text-medium font-sans dark:text-icterine">
          <strong>
            {countVotes} point{countVotes !== 1 && 's'}
          </strong>{' '}
          • submitted by{' '}
          <Link
            to={routes.profile({ nickname: submittedBy.nickname })}
            className="font-bold underline hover:no-underline"
          >
            {submittedBy.firstName} {submittedBy.lastName}
          </Link>{' '}
          • {formatRelativeTime(lastUpdated)} •{' '}
          <Link
            to={routes.link({ id })}
            className="font-bold underline hover:no-underline"
          >
            {numberOfComments} comment{numberOfComments !== 1 && 's'}
          </Link>{' '}
          •{' '}
          {favorited ? (
            <button
              className="relative top-1 inline-flex items-center gap-1 underline"
              data-testid="favoritedButton"
            >
              <Icon id="heart--filled" size={20} />
              Remove favorite
            </button>
          ) : (
            <button
              className="relative top-1 inline-flex items-center gap-1 underline"
              data-testid="unfavoritedButton"
            >
              <Icon id="heart--empty" size={20} />
              Mark as favorite
            </button>
          )}
        </div>
      </div>

      {/* arrow */}
      <div>
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="text-cinder dark:text-icterine"
          data-testid="arrowLink"
        >
          <Icon id="arrow" className="relative top-2 w-14" />
        </a>
      </div>
    </div>
  )
}

export default SharedLink
