#  redux-learning

> A hands-on Redux + React tutorial — learn state management step by step.

---

##  Why Redux?

React's `useState` causes **prop drilling** when many components share data.  
Redux gives you a single global **store** — any component can read or update it directly.

---

##  Core Concepts

| Term | What it does |
|---|---|
| **Store** | Holds all app state in one place |
| **Slice** | One feature's state + its reducer functions |
| **Reducer** | A function: `(state, action) → newState` |
| **Action** | An object describing what happened |
| **Dispatch** | Sends an action to the store to trigger a change |

---

## 🚀 Implementation — 5 Steps

### Step 1 · Install

```bash
npm install @reduxjs/toolkit react-redux
```

---

### Step 2 · Create a Slice — `features.js`

Defines the state and the functions that change it.

```js
import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 0 };

export const counter = createSlice({
  name: 'count',
  initialState,
  reducers: {
    increment: (state) => { state.value += 1 },
    decrement: (state) => { state.value -= 1 },
    sum: (state, action) => { state.value += action.payload }, // payload = passed value
  },
});

export const { increment, decrement, sum } = counter.actions;
export default counter.reducer;
```

---

### Step 3 · Create the Store — `store.js`

Registers all slices into one global store.

```js
import { configureStore } from '@reduxjs/toolkit';
import { counter } from './features';

export const store = configureStore({
  reducer: { count: counter.reducer }, // accessible as state.count.value
});
```

---

### Step 4 · Provide the Store — `main.jsx`

Wraps the app so every component can access the store.

```jsx
import { Provider } from 'react-redux';
import { store } from './redux/store';

<Provider store={store}>
  <App />
</Provider>
```

---

### Step 5 · Read & Update State — `App.jsx`

```jsx
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, sum } from './redux/features';

const count   = useSelector((state) => state.count.value); // 🔍 read state
const dispatch = useDispatch();                             //  update state

dispatch(increment());  // no payload
dispatch(sum(10));      // with payload → action.payload = 10
```

---

## 🔁 Data Flow

```
dispatch(action)
    → reducer runs
    → store updates
    → useSelector detects change
    → UI re-renders
```

---

## 📂 File Structure

```
src/
├── redux/
│   ├── features.js   ← Step 2: Slice
│   └── store.js      ← Step 3: Store
├── main.jsx          ← Step 4: Provider
└── App.jsx           ← Step 5: useSelector + useDispatch
```
