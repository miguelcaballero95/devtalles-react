# React Hooks

This repository is a comprehensive collection of React Hooks examples and patterns developed during my React course. It serves as a personal study guide, covering everything from basic state management to advanced performance optimization and the latest React 19 features.

---

## Table of Contents

1. [Introduction](#introduction)
2. [Hooks Covered](#hooks-covered)
   - [useState](#usestate)
   - [useEffect](#useeffect)
   - [useRef](#useref)
   - [useReducer](#usereducer)
   - [Memoization (React.memo, useMemo, useCallback)](#memoization)
   - [useOptimistic (React 19)](#useoptimistic)
   - [use / Suspense (React 19)](#use-suspense)
   - [useContext](#usecontext)
3. [Custom Hooks](#custom-hooks)
4. [Third-Party Dependencies](#third-party-dependencies)
5. [How to use this Repo](#how-to-use-this-repo)

---

## Introduction

The goal of this project is to master the functional components paradigm in React through the use of Hooks. Hooks allow us to "hook into" React state and lifecycle features from function components.

---

## Hooks Covered

### useState

The most fundamental hook. It allows you to add state to functional components.

- **Concept:** Returns a stateful value and a function to update it.
- **Example:** A traffic light system where we track the current color.
- **Check file:** `src/01-useState/TrafficLight.tsx`

### useEffect

Allows you to perform side effects in functional components (data fetching, subscriptions, manual DOM changes).

- **Concept:** Runs after every render by default, but can be fine-tuned using a dependency array.
- **Cleanup:** Crucial for avoiding memory leaks (e.g., clearing intervals).
- **Check file:** `src/02-useEffect/TrafficLightWithEffect.tsx`

### useRef

Persistent storage that doesn't trigger a re-render.

- **Concept:** Primarily used to access DOM elements directly or to store "mutable" variables that persist across renders.
- **Example:** Focusing an input field programmatically.
- **Check file:** `src/04-useRef/FocusScreen.tsx`

### useReducer

An alternative to `useState` for complex state logic.

- **Concept:** Follows the Redux pattern: `(state, action) => newState`. Great for managing state transitions that depend on previous state or multiple sub-values.
- **Example:** A Task/Todo application with Zod validation and LocalStorage persistence.
- **Check files:**
  - `src/05-useReducer/TaskApp.tsx`
  - `src/05-useReducer/reducer/tasksReducer.ts`

### Memoization

Techniques to prevent unnecessary re-renders and expensive calculations.

- **React.memo:** High-order component that skips re-rendering a component if its props haven't changed.
- **useMemo:** Memoizes the result of a calculation.
- **useCallback:** Memoizes a function definition to prevent it from being recreated on every render.
- **Check file:** `src/06-memos/MemoHook.tsx`

### useOptimistic (React 19)

Provides a way to optimistically update the UI before a server response is received.

- **Concept:** Improves UX by making the app feel faster. If the server action fails, React automatically rolls back the state.
- **Example:** Adding a comment to a feed ("Instagrom").
- **Check file:** `src/07-useOptimistic/InstagromApp.tsx`

### use & Suspense (React 19)

New way to handle asynchronous resources in React.

- **Concept:** `use` can be used to read a promise or context. Combined with `Suspense`, it simplifies loading states.
- **Example:** Fetching client information with a simulated API delay.
- **Check file:** `src/08-use-suspense/ClientInformation.tsx`

### useContext

Provides a way to share values (state, functions) between components without having to explicitly pass a prop through every level of the tree.

- **Concept:** "Global" state for a specific part of your app.
- **Example:** A professional authentication flow with private routes and login/logout logic.
- **Check files:**
  - `src/09-useContext/context/UserContext.tsx`
  - `src/09-useContext/router/app.router.tsx`

---

## Custom Hooks

Abstraction is key. We've built reusable logic into custom hooks:

- **`useCounter`**: Manages numeric state with increment/decrement/reset logic.
- **`usePokemon`**: Handles data fetching logic for the PokeAPI.
- **`useTrafficLight`**: Encapsulates the logic for a timed traffic light.

**Location:** `src/hooks/`

---

## Third-Party Dependencies

| Dependency          | Purpose       | Why I used it?                                                                   |
| ------------------- | ------------- | -------------------------------------------------------------------------------- |
| **Lucide React**    | Icons         | Professional and lightweight SVG icons.                                          |
| **Sonner**          | Toasts        | Beautiful and customizable notifications (used in `useOptimistic` example).      |
| **Zod**             | Validation    | Type-safe schema validation, especially for `useReducer` state and LocalStorage. |
| **React Router**    | Routing       | Standard for navigation in React (used in `useContext` example).                 |
| **Shadcn/UI**       | UI Components | High-quality accessible components built on Radix UI.                            |
| **Canvas Confetti** | Effects       | Visual feedback when completing tasks.                                           |

---

## How to use this Repo

1. Install dependencies: `pnpm install`
2. Start the dev server: `pnpm dev`
3. To explore a specific topic, go to `src/main.tsx` and uncomment the component you want to see. Each section in the code corresponds to a topic mentioned above.
