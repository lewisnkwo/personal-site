Hooks are your one-stop shop to clean, reusable & more performant code while using the React library. They allow you to access React's feature-set without needing to write a class component. By using them inside your functional components, you will be provided with a number of different tools; ranging from managing the state of a component to caching values to improve app performance. They are prefixed with **_use_** (e.g. _useEffect_) & here's some information on their usage:

### useState

This hook is probably going to be one you'll be using the most as it enables you to efficiently _set_ and _update_ the state of a component.

Here's an example of it [being used](https://github.com/lewisnkwo/personal-site/blob/main/app/components/pages/layout/index.tsx#L35) to control the visibility of the side menu on this site:

```tsx
const Layout = ({ children }: Props) => {
  const [openMenu, setOpenMenu] = useState<boolean | undefined>(undefined);
};
```

The `useState` hook accepts an initial value where I have passed in `undefined`. Once the `Layout` component is rendered, I want the side menu to be initially hidden with `undefined` (as having a `boolean` value on the state will control the visibility of the side menu, with the `.Sidebar--open` & `.Sidebar--close` classes that I have set on the element).

For Typescript users, it also accepts a single type argument (where I've passed in `boolean | undefined`) to reflect the type of the state.

Let's have a further look at the return type of this `useState` usage:

```tsx
[
  boolean | undefined,
  React.Dispatch<React.SetStateAction<boolean | undefined>>,
];
```

We are given an array of two values: the first being the current value, the second being a method to set/update the value in state. To access these two values, we can _destructure_ the array:

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

- It has two types of usages; _with cleanup_ (if you specify a return value inside the useEffect callback function e.g. when subscribing to something), and _without cleanup_ (e.g. relying on changes to the state of your component).

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
let userCanViewContent;

useEffect(() => {
  // (Note: this endpoint does not exist at the moment!)
  fetch("https://lewisnkwo.com/feed")
    .then((response) => response.json())
    .then((result) => {
      userCanViewContent = true;
    })
    .catch((err) => console.error(err));

  // The return function below will cleanup the effect (incase the component is unexpectedly unmounted before the fetch is completed, for example)
  return () => {
    userCanViewContent = false;
  };
}, []);
```

### useRef

This hook can be used to create a reference (or a `ref` attribute) to access an element imperatively on the DOM. References specified with `useRef` do not cause the component to re-render. One reason why this may be used to improve performance on a component that has values that may not need to be updated on each render.

One other way to utilise `useRef` is to use it to persist data between component re-rendering. This is helpful if, for example, you wanted to keep track of values throughout the life of a component (or as long as the component is mounted to the DOM).

#### The `.current` property

The value returned from `useRef` contains an object with a single property: `.current`. This property is mutable (meaning it can be modified), which is what provides you with the ability to hold data between component re-renders.

On the other hand, this means that using the hook for data that needs to be updated on the UI will not prove helpful. Have a look at this example:

```tsx
const pageViewRef = useRef<number>(0);

return (
  <>
    <button
      onClick={() => {
        pageViewRef.current = pageViewRef.current + 1;
      }}
    >
      Update Page Views
    </button>
    <span> Current View Count: {pageViewRef.current}</span>
  </>
);
```

In the code above, I've added a button which aims to increment the value of the `.current` property of `pageViewRef` by `1`, every time it is clicked. Here's what happens when I click on the button:

![image](https://lewisnkwosite-assets.s3.eu-west-2.amazonaws.com/images/useRefCounter.gif)

Did you notice how initially, the count does not update as intended? I clicked on the button 3 times expecting the UI to display `Current Count: 3`, but the UI did not change.

The UI was only updated when I triggered [a change on the `Home` component](https://github.com/lewisnkwo/personal-site/blob/main/app/components/pages/content/home/index.tsx#L58) (by clicking on a post item which opens up a sidebar that utilises `useState`). This caused the component to re-render — updating the UI with the correct value.

In this scenario, you would use `useState` instead of `useRef` to update the page view count.

#### Where have I used it?

In one instance, I've used it _imperatively_ to [control the scroll direction & animation](https://github.com/lewisnkwo/personal-site/blob/main/app/components/pages/content/home/index.tsx#L20) of a side bar on the homepage:

```tsx
// accessing the scrollIntoView method on the .current property
if (sidebarPostRef?.current) {
  sidebarPostRef.current.scrollIntoView({
    behavior: "smooth",
    block: "end",
    inline: "nearest",
  });
}

// adding the ref attribute to an element
<div ref={isMobile ? sidebarPostRef : null}>
  <SidebarDetail {...selectedPost} />
</div>;
```

#### As a summary

- `useRef` can be used to directly access an element's properties on the DOM.
- Use `useState` over `useRef` when dealing with state changes that need to be updated in the UI.

[Click here to view the next part in this series](https://lewisnkwo.com/posts/003-the-usages-of-react-hooks-2) of using React's Hooks.
