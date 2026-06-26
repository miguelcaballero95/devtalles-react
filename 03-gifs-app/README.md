# Gifs App

This is a modern React application built with TypeScript and Vite that allows users to search and discover GIFs using the Giphy API. The project serves as a comprehensive learning resource for React development, demonstrating best practices in component architecture, state management, and API integration.

## Description

The Gifs App is a functional web application where users can search for GIFs via a debounced search bar. It maintains a history of the most recent searches and provides a responsive grid display of the results. The project also includes a secondary counter application used to illustrate basic hook patterns and state manipulation.

### Key Features

- Real-time GIF search using the Giphy API.
- Debounced search input to optimize API calls and improve user experience.
- Search history tracking with quick-access labels.
- Local caching of results using useRef to prevent redundant network requests.
- Modular architecture with clear separation of concerns.
- Full TypeScript support for enhanced type safety and developer productivity.

## Local Installation

To get this project running on your local machine, follow these steps:

### Prerequisites

- Node.js (Latest LTS version recommended)
- pnpm, npm, or yarn package manager
- A Giphy API Key (You can obtain one for free at the [Giphy Developers Portal](https://developers.giphy.com/))

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/miguelcaballero95/devtalles-react-gifs.git
   cd devtalles-react-gifs
   ```

2. Install dependencies:

   ```bash
   pnpm install
   # or
   npm install
   # or
   yarn install
   ```

3. Configure environment variables:
   Create a `.env` file in the root directory based on `.env.template` and add your Giphy API key:

   ```env
   VITE_GIPHY_API_KEY=your_giphy_api_key_here
   ```

4. Start the development server:

   ```bash
   pnpm dev
   # or
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5173`.

## Study Notes

This project covers a wide range of essential React concepts and modern web development patterns. Below are the comprehensive study notes based on the implementation details.

### 1. React Fundamentals and Architecture

- **Functional Components**: The entire application is built using functional components, which is the modern standard in React. This approach promotes the use of hooks and results in cleaner, more testable code.
- **Component Composition**: Logic is divided into small, reusable components (e.g., SearchBar, GifList, CustomHeader). This follows the single responsibility principle, making the codebase easier to maintain.
- **Modular File Structure**: The project is organized by features (gifs, counter, shared). Each feature has its own components, hooks, actions, and interfaces, which scales better for larger applications.

### 2. React Hooks

Hooks are the backbone of state and lifecycle management in this project:

- **useState**: Used for managing reactive data that triggers re-renders when updated. Examples include the current search query, the list of GIFs, and the search history.
- **useEffect**: Employed to handle side effects. In the SearchBar component, it is used to implement debouncing by setting a timeout that triggers the search only after the user stops typing for a specific duration. It also includes a cleanup function (`clearTimeout`) to prevent memory leaks and race conditions.
- **useRef**: Used as a persistent data store that does not trigger re-renders. In this project, it serves as a cache for GIF results, allowing the application to retrieve previously fetched data instantly when a user clicks on a previous search term.
- **Custom Hooks**: Logic is encapsulated into custom hooks like `useGifs` and `useCounter`. This allows for a clean separation between UI and business logic, promoting reusability and keeping components focused on presentation.

### 3. TypeScript Integration

TypeScript is utilized throughout the project to provide robust type safety:

- **Interfaces**: Defined for API responses (GiphyResponse) and internal data structures (Gif). This ensures that the data consumed by components matches the expected format.
- **Type-Safe Props**: Component props are strictly typed, reducing the likelihood of runtime errors and improving the developer experience through better IDE autocompletion.
- **Event Handling**: Specific types for events (e.g., `KeyboardEvent<HTMLInputElement>`) are used to ensure correct handling of user interactions.

### 4. API Integration and Asynchronous Patterns

- **Axios**: The project uses Axios for HTTP requests, configured with a base URL and default parameters (like the API key) in a centralized API configuration file.
- **Async/Await**: Asynchronous operations are handled using clean async/await syntax, providing a more readable alternative to promise chaining.
- **Action Pattern**: Data fetching logic is abstracted into "actions" (e.g., `getGifsByQuery`). This decouples the API implementation from the components and hooks, making it easier to swap out the data source or modify the data transformation logic.

### 5. Performance and UX Optimizations

- **Debouncing**: By delaying the search execution in the SearchBar, the application avoids making excessive API requests for every keystroke, saving bandwidth and improving performance.
- **Result Caching**: The use of `useRef` to cache search results ensures that switching between previous searches is instantaneous and doesn't consume additional API quota.
- **Environment Variables**: Sensitive information like API keys is managed via Vite's environment variable system (`import.meta.env`), following security best practices.

### 6. Modern Build Tools

- **Vite**: Used as the build tool and development server. Vite provides an extremely fast development experience with Hot Module Replacement (HMR) and optimized production builds.
- **ESLint and Prettier**: Configured to maintain high code quality and consistent formatting across the project.
