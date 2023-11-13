// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/edit-profile" page={EditProfilePage} name="editProfile" />
      <Route path="/profile" page={ProfilePage} name="profile" />
      <Route path="/comments" page={CommentsPage} name="comments" />
      <Route path="/favorites" page={FavoritesPage} name="favorites" />
      <Route path="/privacy" page={PrivacyPage} name="privacy" />
      <Route path="/disclaimers" page={DisclaimersPage} name="disclaimers" />
      <Route path="/terms" page={TermsPage} name="terms" />
      <Route path="/link" page={LinkPage} name="link" />
      <Route path="/submit-link" page={SubmitLinkPage} name="submitLink" />
      <Route path="/latest" page={LatestPage} name="latest" />
      <Route path="/feed" page={FeedPage} name="feed" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
