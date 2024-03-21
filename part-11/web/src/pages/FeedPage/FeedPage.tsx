import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const FeedPage = () => {
  return (
    <>
      <MetaTags title="Feed" description="Feed page" />

      <h1>FeedPage</h1>
      <p>
        Find me in <code>./web/src/pages/FeedPage/FeedPage.tsx</code>
      </p>
      <p>
        My default route is named <code>feed</code>, link to me with `
        <Link to={routes.link()}>Individual Link</Link>`
      </p>
    </>
  )
}

export default FeedPage
