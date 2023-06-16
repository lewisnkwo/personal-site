Continuing on from (Part 1)[https://lewisnkwo.com/posts/002-the-usages-of-react-hooks], the next hook I'm going to discuss is `useMemo`.

### useMemo

`useMemo` may sound like a note-taking feature provided by the team at React, but it is actually a handy way to save precious computing time across your app.

It can be used to create a memoised (or 'cached') value to avoid repeating expensive calculations on component renders.

Take this component as an example:

```tsx
interface Player {
  userId: number;
}

interface Props {
  maxPlayers: number;
}

const LotteryForToday = ({ maxPlayers }: Props) => {
  const [totalPlayers, setTotalPlayers] = useState<number>(0);
  const [players, setPlayers] = useState<Player[] | undefined>(undefined);

  const getLotteryPlayers = (
    maxPlayers: number = 10000 /* That's up to 10,000 potential players */
  ) =>
    fetch(`https://lewisnkwo.com/getRandomNumberBetween1And${maxPlayers}`)
      .then((response) => response.json())
      .then((result) => {
        setTotalPlayers(result);
        setPlayers(generatePlayerList(result));
      })
      .catch(console.error);

  // get the lottery players once the component has been mounted on the DOM
  useEffect(() => {
    getLotteryPlayers(maxPlayers);
  }, []);

  // this function may take a while to finish!
  const generatePlayerList = (totalPlayers: number): Player[] => {
    let usersPlayingTheLottery: Player[] = [];

    // figure out the amount of lottery players for today
    if (totalPlayers > 0) {
      for (let i = 1; i < totalPlayers; i++) {
        usersPlayingTheLottery = [
          ...usersPlayingTheLottery,
          {
            userId: i,
          },
        ];
      }
    }

    return usersPlayingTheLottery;
  };

  // Render a numbered list of lottery players
  return (
    <ol>
      {players?.map((player) => (
        <li key={player.userId}>{player.userId}</li>
      ))}
    </ol>
  );
};
```

In the component above, I want to generate a random number of players for today's lottery. Once I've done this, I want to show the players in a list.

To help generate this, I'm calling an endpoint to get a random number; and then returning the player list as an array with user objects (type: `Player[]`), containing a `userId` (taken from the current index of the `for` loop inside the function).

> As a note: The most important thing is that I only want to generate the user list _**once per day**_.

#### Modifying the results

Now let's give the user the ability to only show the first _100_ players of the lottery:

```tsx
return (
  <>
    <button
      onClick={() => {
        setPlayers(players.slice(0, 100));
      }}
    >
      Show only the first 100 players
    </button>
    <ol>
      {players.map((player) => (
        <li key={player.userId}>{player.userId}</li>
      ))}
    </ol>
  </>
);
```

Assuming that the user has clicked on the `Show only the first 100 players` button, the `players` state will have changed, and `generatePlayerList` would be called again (as the component will be re-rendered). Due to the nature inside of this function (e.g. the `for` loop & even the `players.map` usage), things can get really expensive very quickly for the browser's memory.

We could add a value to the dependency array of the `useEffect` to prevent `getLotteryPlayers` (which invokes `generatePlayerList`) from being called again until the value has changed:

```tsx
useEffect(() => {
  getLotteryPlayers(maxPlayers); // containing the call to generatePlayerList;
}, [someValueHere]);
```

But if `someValueHere` eventually changes, This `useEffect` will be called again. So how do we prevent `generatePlayerList` from unnecessarily being called?

#### Improving performance

We can 'wrap' our invocation of `generatePlayerList` with a `useMemo` hook:

```tsx
// without useMemo:
setPlayers(generatePlayerList(result));

// with useMemo:
setPlayers(
  useMemo<Player[]>(() => generatePlayerList(result), [placeDependencyHere])
);
```

For reference, here are the types in this instance:

```tsx
useMemo<Player[]>(factory: () => Player[], deps: React.DependencyList | undefined): Player[]
```

Similarly to structure of `useEffect`, `useMemo` accepts two arguments:

- A callback function
- A dependency array

By placing the return value of `generatePlayerList(result)` inside a `useMemo` callback function, the `generatePlayerList` function will only run if a value in the dependency array changes. Since we only want to generate the players _once_ per day, we can add something like this to the component for the `useMemo` dependency:

```tsx
setPlayers(
  useMemo<Player[]>(() => generatePlayerList(result), [totalPlayers]) // only generate the players again if the amount of total players has changed
);
```

#### Some things to note:

- If the user refreshes their browser; unless there's some sort of fetch caching in place outside this component, then the endpoint in the example above will most likely be called again (hint: the `useEffect`):

```tsx
useEffect(() => {
  getLotteryPlayers(maxPlayers);
}, []); // maybe we can add a dependency here also?
```

We could add a condition on the back-end, restricting the amount of calls to the endpoint per day. Then we could pass this down as a prop, to be added to the `useEffect` above:

```tsx
interface Props {
  maxPlayers: number;
  canGetPlayersForToday: boolean
}

const LotteryForToday = ({ maxPlayers, canGetPlayersForToday }: Props) => {

useEffect(() => {
  getLotteryPlayers(maxPlayers);
}, [canGetPlayersForToday]);
...
```

- _Or even better_; expensive calculations such as the one above should really be calculated in an environment with more memory/speed/power (e.g. on a server, rather than the client's browser), when necessary. This helps to free up memory on the client for other tasks.

_(useCallback, useContext, useReducer, & Custom Hooks sections coming soon!)_
