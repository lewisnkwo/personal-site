Continuing on from [Part 2](https://lewisnkwo.com/posts/003-the-usages-of-react-hooks-2), the next topic I'm going to discuss is React's _Context_ & how we could access it with `useContext`.

### useContext

React's Context is a way to pass down information to your child components through something called a _context provider_, rather than the traditional method of relying on the information through the props of a parent component. Having access to React's Context API through `useContext` becomes quite helpful when dealing with sharing relevant information across larger applications that have a more complex structure.

Rather than passing the data down through a huge number of components (which can become quite tedious), you can simply set up a **Provider** on the root of your app to 'provide' it to a **Consumer** component.

#### How do I use it?

You can use it to:

- Pass down data (e.g. a specific version for an app/or even a specific theme)
- Manage state inside an application

In this instance, I'm going to explore how we can use it to manage state on an application by managing a _user's favourite posts_.

To be honest, I could have a single parent component utilise `useState` for a user's favourites; and then pass it down to it's children, but what if I want access the user's favourites in another unrelated area of the app (e.g. a settings page)? This is where the Context API can come in handy.

#### Creating the Context

Firstly, we need to create the context by importing the `createContext` function from React. I want to enable a way for a component to manage state through a **Provider**, so I'm going to provide `createContext` with the properties of `useState`. `createContext` also requires a single type argument that we need to pass in for TypeScript users. I have set up two interfaces to help with this:

```tsx
// context/userFavourites.tsx

interface FavouritePost {
  postId: string;
  isFavourite: boolean;
}

interface UserFavourites {
  [userId: string]: {
    posts: FavouritePost[];
  };
  // the '[userId: string]' key type here will act as an 'Index Signature' for the userIds that I'll use as keys for UserFavourites object. In other words, I want to specify each userId as a key on this object with the type of 'string'.
}
```

Before I add the properties of `useState` to `createContext`, we will need to add a type for our `useContext` instance. This will be the state itself (`UserFavourites`), and the type for the function to update the state:

```tsx
// context/userFavourites.tsx

interface UserFavouritesContextType {
  userFavourites: UserFavourites;
  setUserFavourites: React.Dispatch<React.SetStateAction<UserFavourites>>;
}
```

Now we can call `createContext` which will return an object that we'll use in the JSX. Also, I've decided to go with PascalCase on the name of this variable which follows the convention of other React Providers:

```tsx
// context/userFavourites.tsx (each instance of a Context should have its own file)

const UserFavouritesContext = createContext<UserFavouritesContextType>({
  userFavourites: {},
  setUserFavourites: () => {},
  // these will be the initial 'useState' values of the context object
});
```

Before we create our **Provider** component, let's have a look at the `UserFavouritesContext` type:

```tsx
// context/userFavourites.tsx

const UserFavouritesContext: React.Context<UserFavouritesContextType>;
```

As we can see, by invoking `createContext`, we have now 'transformed' our initial values above into the type of `React.Context`. On `UserFavouritesContext` we now have access to three properties: `UserFavouritesContext.Consumer`, `UserFavouritesContext.Provider` & `UserFavouritesContext.displayName`.

#### Creating our Provider

Since we now have a _Context_ that we can use, let's create a HOC (_Higher Order Component_) with `UserFavouritesContext.Provider`:

```tsx
// context/userFavourites.tsx

interface Props {
  children: JSX.Element;
}

const UserFavouritesProvider = ({ children }: Props) => {
  const [userFavourites, setUserFavourites] = useState<UserFavourites>({});

  return (
    <UserFavouritesContext.Provider
      value={{ userFavourites, setUserFavourites }}
    >
      {children}
    </UserFavouritesContext.Provider>
  );
};
```

**Let's break it down:**

- This HOC, `UserFavouritesProvider` takes in a single prop, `children`, which will represent all of the child components that will have access to this _Context_.
- We then call the `useState` hook which will store the user favourites in this component.
- In our `return`, we create an element with `UserFavouritesContext.Provider` where we pass in the properties of `useState` to the `value` prop. This is how we can access this `useState` usage from this provider. We then render the children inside this element.

Finally, let's export the context and the Provider itself, so we can access them across our application:

```tsx
export { UserFavouritesContext, UserFavouritesProvider };
```

#### Using the Provider

So how do we actually use our newly created `UserFavouritesProvider`? We can use it as a wrapper to 'wrap' our components with the provider's data in the root of our app. For example:

```tsx
// index.tsx

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <UserFavouritesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/settings" element={<Settings />} />
            {/* other routes... */}
          </Route>
        </Routes>
      </BrowserRouter>
    </UserFavouritesProvider>
  </React.StrictMode>
);
```

By placing the provider at a high enough level in the component tree, we make it possible for the child components to access the Context (our user favourites state). Next we'll explore using the hook to access the data.

#### Creating our Consumer

Let's imagine we're on the `Settings` component of our application. I've written up a **Consumer** component below as an example, which demonstrates accessing the `userFavourites` state from `UserFavouritesContext` _to show the favourite posts from all users_. I've also transformed the state of `userFavourites` into something more easily mappable to access favourite posts in a function called `createFavouritePostList`.

Here is the full component which will _consume_ the data from the provider with `useContext`:

```tsx
// Settings.tsx

interface FavouritePostListItem {
  userId: string;
  favourites: FavouritePost[];
}

const createFavouritePostList = (
  userFavourites: UserFavourites // our state from useContext
): FavouritePostListItem[] => {
  let favouritePostList: FavouritePostListItem[] = [];

  // only take their favourite posts and their userId for each user in the state
  for (const [key, value] of Object.entries(userFavourites)) {
    favouritePostList = [
      ...favouritePostList,
      {
        userId: key,
        favourites: value.posts,
      },
    ];
  }

  return favouritePostList;
};

const Settings = () => {
  // grab the state & the function to update the state from UserFavouritesContext
  const { userFavourites, setUserFavourites } = useContext(
    UserFavouritesContext
  );

  return (
    <section>
      <h2>Favourite posts from all users:</h2>
      <ul>
        {createFavouritePostList(userFavourites)?.map((user) => (
          <ul key={user.userId}>
            <li>{user.userId}</li>
            <li>
              {user.favourites.map((fav) => (
                <>
                  {fav.postId} {fav.isFavourite ? "⭐, " : "★, "}
                </>
              ))}
            </li>
          </ul>
        ))}
      </ul>
    </section>
  );
};
```

The only thing we haven't done yet above, is to _update_ our state. Currently it should be empty as we did not define a default value earlier when creating our context:

```tsx
// context/userFavourites.tsx

const UserFavouritesContext = createContext<UserFavouritesContextType>({
  userFavourites: {}, // nothing to see here... hehe 😬
  ...
});
```

Let's provide a way to update the state:

```tsx
<button
  onClick={() => {
    // It's just like using useState
    setUserFavourites({
      ...userFavourites,
      johnDoe: {
        posts: [{ postId: "1", isFavourite: true }],
      },
    });
  }}
>
  Update Favourite Posts
</button>
```

As a summary, we've created our Context (with `createContext`), & our Provider and Consumer components; and then accessed the Context with `useContext` in our `Settings` component to display (and update) a list of favourite posts for each user in the app. Neat!

#### Does it replace Redux for managing state?

For developers working on larger/complex applications that need to manage some sort of state, using `useContext` may beg the question: Does the Context API replace _Redux_? The short answer will be _no_. Let's see some pros and cons of React's Context:

**Advantages:**

- The first advantage is related to what we explored above — on the steps we took to provide a centralised state to a component. It doesn't require much setup (you don't have to deal with setting up actions & reducers to update the store), and it can become a cleaner way to manage state in smaller/medium sized applications.
- On the topic of it being more of a 'cleaner' solution for state, imagine if we had to send down a prop to the _most-inner child component_ in a component tree of **5** different components. What if this most-inner child component was the only component that _needed_ this prop? It would be far less cumbersome to use the `useContext` hook to provide this information, rather than passing it down through the other _4_ components that do not need it.
- It could be used with Redux — But it'll probably be best to use it for providing more simple pieces of data to components, rather than for managing state.

**Disadvantages:**

- Less debugging capability than Redux — With features such as 'time-travel debugging' (where the Redux DevTools provides access to your state updates or action usage at different times), debugging in Context at the moment may be less powerful for larger applications.
- Increased complexity when using multiple providers together (i.e. nested providers) — It could become increasingly difficult to manage states or debug issues across various contexts in use (especially if a single component accesses multiple Contexts). This can also be a cause for performance, as updating multiple states across different Contexts could cause unnecessary re-renders, which may slow down your application.
- Reduced scalability solutions than Redux - With support for caching, code-splitting & middleware, you may be suited using an isolated state management library such as Redux if you need these features.

_(useReducer, & Custom Hooks sections coming soon!)_
