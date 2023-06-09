Hooks are your one-stop shop to clean, reusable & more performant code while using the React library. They allow you to access React's feature-set without needing to write a class component. By using them inside your functional components, you will be provided with a number of different tools; ranging from managing the state of a component to caching values to improve app performance. They are prefixed with **_use_** (e.g. _useEffect_) & here's some information on their usage:

### useState

This hook is probably going to be one you'll be using the most as it enables you to efficiently _set_ and _update_ the state of a component.

Here's an example of it [being used](https://github.com/lewisnkwo/personal-site/blob/main/app/components/pages/layout/index.tsx#L35) to control the visibility of the side menu on this site:

```tsx
const Layout = ({ children }: Props) => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
};
```

The `useState` hook accepts an initial value where I have passed in `false`. Once the `Layout` component is rendered, I want the side menu to be initially hidden which is why I have given it that default value. For Typescript users, it also accepts a single type argument (where I've passed in `boolean`) to reflect the type of the state.

Let's have a further look at the return types of this useState usage:

```tsx
[boolean, React.Dispatch<React.SetStateAction<boolean>>];
```

We are given an array of two values: the first being the current value, the second being a method to set/update the value in state. To access these two values, we can _destructure_ the returned array:

```tsx
const [openMenu, setOpenMenu] = useState;
```

I can now use `openMenu` in the component as a flag for showing/hiding the menu:

```tsx
<Sidebar
    isMenuOpen={openMenu}
    ...
```

Here is where I've used `setOpenMenu` to close the menu once the user performs an action:

```tsx
onMenuClose={() => setOpenMenu(false)}
```

### useEffect

**useEffect** allows you to perform _side effects_ in your functional components. It is basically the combination of the `componentDidMount`, `componentDidUpdate` & `componentWillUnmount` component lifecycle methods on a class component.

Where would useEffect be helpful? Here's a few scenarios:

- Using the `fetch` method to retrieve data from an endpoint
- In combination with another React Hook (e.g. `useState`, `useRef`)
- To trigger something in response to a value on your component changing.

> Note: If this trigger is a response to a user action (e.g. when a user clicks on a button), event handlers would be more suitable in this scenario rather than using useEffect.

#### How have I used it?

Here's an example where I used it in the [Sidebar](https://github.com/lewisnkwo/personal-site/blob/main/app/components/shared/sidebar/index.tsx#L14) component:

```tsx
useEffect(() => {
  document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
}, [isMenuOpen]);
```

This reads:

> If the side menu is open, I want to set the value of the _overflow_ CSS property on the `body` of the page to `hidden` (to prevent scrolling of the page on mobile view). If the side menu is closed, the `unset` value on the _overflow_ property will act as a 'reset' (to enable scrolling again).

Did you notice that `isMenuOpen` sits in an array? This is a dependency array that can be provided to the hook. `useEffect` accepts two arguments:

```tsx
useEffect(effect: React.EffectCallback, deps?: React.DependencyList | undefined)
```

- A callback function: This is where you can place the 'side effect' code which will execute after the component has successfully mounted onto the DOM (**Document Object Model**).
- A dependency array: The code in the function passed in as the first argument will only run if the values in this array change (hence the trigger for the `overflow` value of the body being `isMenuOpen`).

**Some things to note about _useEffect_:**

- They have two types of usages; _with cleanup_ (if you specify a return value inside the useEffect callback function e.g. when subscribing to something), and _without cleanup_ (e.g. relying on changes to the state of your component).

#### Why should usages of useEffect be 'cleaned up'?

This should be done to prevent memory leaks and other unwanted behaviour across your application.

> - Consecutive usages of _useEffect_ are automatically cleaned up each time after the component renders. This is great, but every time the state is updated in the component (when useState is used, for example), the component will re-render (see the **useMemo** & **useCallback** sections below on how to prevent this 😉). Since useEffect is ran on every re-render, we must take steps to clean up our effects manually, where necessary.

#### Cleaning up an effect

Let's say I wanted to subscribe to a feed by calling a `/feed` endpoint. I've now called the endpoint, but it's taking a while to return a response. What if there's a display condition that 'hides' the component during the fetch? React will try and update the state on an unmounted component once you've finally received a response... which causes this error:

```md
Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.
```

A way to solve this:

```tsx
const [isSubscribed, setIsSubscribed] = useState<boolean>(false);

useEffect(() => {
  fetch("https://lewisnkwo.com/feed") // (Note: this endpoint does not exist at the moment!)
    .then((response) => response.json())
    .then((result) => {
      if (result.posts[0]) {
        // i.e. If I can access a post...
        setIsSubscribed(true);
      }
    })
    .catch((err) => console.error(err));

  // The return function below will cleanup the effect (incase the component is unexpectedly unmounted before the fetch is completed, for example)
  return () => {
    setIsSubscribed(false);
  };
}, []);
```

_(useRef, useCallback, useMemo, useContext, useReducer, & Custom Hooks sections coming soon!)_
