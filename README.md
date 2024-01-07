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

# Additonal Features

Given more time, here are some changes I would add to the app:

- Add different fonts for headers and titles
- Add color scheme (i.e background color, font color, accent colors, etc.)
- Add toggle to switch between light and dark mode
- Use a more accurate alt for the Image in ArticlePreview
- Use Media Queries for different screen sizes
- Use pagination to show fewer articles on the home page and allow pages
- Show "No results found" when search has no results
- Use an API related to travel
- Add back button to navigate back to home page when on article page
