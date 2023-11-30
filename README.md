[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/ahaywood/brazilian-nut-news__stepped-rw)

# Brazilian Nut News

This is a companion project to my [YouTube Series on Building a Full Stack Application with RedwoodJS](https://www.youtube.com/watch?v=Xr92RcUMngc&list=PLrz61zkUHJJFzXe0xZ55RdAF3o3PGhd0U).

![YouTube Series](/images/youtube-screenshot.png)

## Project Overview

We'll be building the "Brazilian Nut News," a Hacker News Clone.

- Users will see a weighted list of shared links
- Users will see a list of the latest shared links
- Each link will have it's own dedicated page, where users can comment on the link
- Users will be able to submit a link
- Users can sign up / login / logout
- Every user will have their own profile page where you can see links they shared, links they've marked as their favorites, comments they've made on other links
- Users can edit their profile

## Project Assets

- [Figma file](https://www.figma.com/file/z6Vipsmnua7VzF9E6w4PtL/Brazilian-Nut-News-App?type=design&node-id=1%3A550&mode=design&t=PUkhU6X2ISuhK4xZ-1)

## Videos on YouTube

_NOTE: I'll update this section as new videos are posted_

1. [Intro - Master the Full-Stack: RedwoodJS Step-by-Step Guide](https://www.youtube.com/watch?v=Xr92RcUMngc&list=PLrz61zkUHJJFzXe0xZ55RdAF3o3PGhd0U)
2. [Installing Redwood / Setup / Tooling](https://youtu.be/lR8qwNFI5Z8)
3. [Folder Structure](https://youtu.be/tJd2Db6y8tw)
4. [Redwood Generators / Stubbing out Pages, Components, and Layouts](https://youtu.be/vnBij3YzOpI)
5. [Routing Overview, Dynamic Routes, Pre-render, and Sets](https://youtu.be/HkposptbF-o)
6. [Installing Tailwind and Initial/Customization Setup](https://youtu.be/3UVQ9FdGgcA)
7. [Storybook Overview](https://youtu.be/PMNAehI0_cI)
8. Building frontend component: Header & Testing
9. Building frontend component: Nav & Testing
10. Building the Icon / SVG Script & Testing
11. Building frontend component: Shared Link & Testing
12. Building frontend component: Comment & Testing
13. Building frontend component: Terms and Conditions
14. Setting up he Database
15. Seeding Content
16. Auth - Hotwiring the Login pages
17. Building frontend: Login / Forgot Password / Reset Password
18. Overview of GraphQL
19. Fetching COntent // Hotwiring the links listing page
20. Hotwiring the Vote Up/Down links
21. Hotwiring the Feed Page
22. Hotwiring the Latest Page
23. Hotwiring the Individual Page
24. Forms // Hotwiring the Share Link Page
25. Forms // Hotwiring the Comments
26. Hotwiring the vote up/down for Comments
27. Hotwiring the Profile / Shared Links Page
28. Hotwiring the Profile / Favorites Page
29. Hotwiring the Profile / Comments Page
30. Deploying to Vercel

## Getting Started

Clone the repo:

```terminal
git clone https://github.com/ahaywood/brazilian-nut-news__stepped-rw.git
```

Once all the project files have been downloaded, navigate to the part/lesson you want to work with. For example, part 2:

```terminal
cd part-02
```

Then, you'll need to download all the project's dependencies:

```terminal
yarn install
```

Finally:

```terminal
yarn rw dev
```

## Questions

If you have questions, please comment on the corresponding YouTube video. I'll do my best to answer them there.

## Lesson Breakdown

### Part 1

- [On YouTube](https://www.youtube.com/watch?v=Xr92RcUMngc&list=PLrz61zkUHJJFzXe0xZ55RdAF3o3PGhd0U)
- On Hashnode (if you prefer text) - coming soon

This video introduces the multi-part YouTube series. I give a brief overview of RedwoodJS, a full-stack React framework. And the tech stack: React, GraphQL, Apollo, Storybook, Prisma, TypeScript, and Jest.

I also give a brief project overview, demonstrating what we'll be building.

### Part 2: Installing Redwood / Setup / Tooling

- [On YouTube](https://youtu.be/lR8qwNFI5Z8)
- On Hashnode (if you prefer text) - coming soon

In this video, let's talk about tools and prerequisites for our RedwoodJS full-stack application. Together, we'll walk through every step from installation to the first run. Plus, I've got some pro tips on tools and extensions that will make your coding experience silky smooth.

### Part 3: Folder Structure

- [On YouTube](https://youtu.be/tJd2Db6y8tw)
- On Hashnode (if you prefer text) - coming soon

In this video, we'll explore the file and folder structure within RedwoodJS. We dive into Redwood's unique features, contrasting it with other frameworks like Next and Remix. Explore the API folder, backend configuration with Prisma, and serverless functions setup. On the backend, we'll briefly look at the functions, GraphQL, and lib directories, and delve into the services directory for GraphQL resolvers. On the front end, we'll look at how Redwood manages routes with their distinctive approach.

### Part 4: Redwood Generators / Stubbing out Pages, Components, and Layouts

- [On YouTube](https://youtu.be/vnBij3YzOpI)
- On Hashnode (if you prefer text) - coming soon

Here, we look at maximizing your efficiency as a developer through the use of RedwoodJS's generators. Out of the box, Redwood comes with 16 different generators that speed up and automate the process of creating components, layouts, and pages.

🎁 [FREE CHEAT SHEET](https://selfteachme.ck.page/4edae5d0d7) for working with all 16 of Redwood's generators

### Part 5: Routing Overview, Dynamic Routes, Pre-render, and Sets

- [On YouTube](https://youtu.be/HkposptbF-o)
- On Hashnode (if you prefer text) - coming soon

In this video, we dive into the Redwood router and explore its unique features and capabilities. We discuss how it differs from other frameworks and demonstrate how to leverage its power to connect pages, layouts, and components.

### Part 6: Installing Tailwind and Initial/Customization Setup

- [On YouTube](https://youtu.be/3UVQ9FdGgcA)
- On Hashnode (if you prefer text) - coming soon

In this video, we'll set up Tailwind CSS, customize our font and color palette, and configure our project for styling. With RedwoodJS, this is one of the easiest Tailwind setups you'll ever do.

### Part 7: Storybook Overview

- [On YouTube](https://youtu.be/PMNAehI0_cI)
- On Hashnode (if you prefer text) - coming soon

n this YouTube video, we’ll take a look at Storybook and explore its features and benefits. With RedwoodJS this is as a simple as running a single command! We’ll go over the basics of creating stories, showcasing the different panels and controls within Storybook, and highlighting the component variations and automated documentation. Whether you're new to Storybook or looking to enhance your development workflow, this video provides a comprehensive overview of Storybook's capabilities and how it can streamline your frontend development process.
