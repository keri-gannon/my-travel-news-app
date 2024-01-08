# Getting Started

## NYTimes Developer Key

Please create a [NYTimes API developer key](https://developer.nytimes.com/) with the [Top Stories API](https://developer.nytimes.com/docs/top-stories-product/1/overview). Then, in the root directory of this project, create a `.env.local` file, adding your development key.

```
NEXT_PUBLIC_NYT_API_KEY=your-api-key
```

## Running the application

Please follow these instructions to install dependencies and to run the development server:

- `npm` to install package dependencies
- `npm run dev` to run the development server:

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Running Tests

# Architectural Decisions

- Next.js - Given that Goodwin uses Next.js, I decided to use this React framework. I have worked with Next.js professionally in production before, and enjoy this framework for many reasons. I find that the built-in routing is easy to create and organize routes. Also, Next.js has built-in support for styling CSS with Tailwind, clean and simple ways to fetch data both on the client and the server, easy to read documentation, and many resources and community support on the internet.
- Tailwind CSS - I enjoy using utility classes to style, and find this method consistent and easy to understand. Also, I find their documentation enjoyable and easy to navigate.
- React Context - I chose to use React Context to manage state between different components to avoid the anti-pattern of prop-drilling. This way, the state can be stored and accessed cleanly between components.
- Mantine - I decided to use this React component library based upon the fact that Goodwin uses this library, so I wanted to familiarize myself with this library.

# Additonal Features

Given more time, here are some changes I would add to the app:

- Add different fonts for headers and titles
- Add color scheme (i.e background color, font color, accent colors, etc.)
- Add toggle to switch between light and dark mode
- Use a more accurate alt for the Image in ArticlePreview
- Use media queries for different screen sizes
- Use pagination to show fewer articles on the home page and allow pages
- Show "No results found" when search has no results
- Use an API related to travel. Given the time, I decided to keep this webpage simple without diving too deeply into finding travel-related news.
- Add back button to navigate back to home page when on article page
