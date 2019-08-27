import React from 'react';

interface KittenState {
  kittens: Kitten[];
}

interface setKitten {
  (kitten: KittenState): void;
}

interface Kitten {
  name: string;
  age: number;
  toy: string;
}

let initialState: KittenState = {
  kittens: [
    { name: 'Catler', age: 2, toy: 'feather' },
    { name: 'Patches', age: 2, toy: 'bucket' },
    { name: 'Rolly', age: 2, toy: 'ball' }
  ]
};

const setKittenState = (kittenState: KittenState): void => {
  console.log('HIT KITTEN', kittenState);
  initialState = kittenState;
  console.log(initialState);
};

const KittenContext = React.createContext<[KittenState, setKitten]>([
  initialState,
  setKittenState
]);

export default KittenContext;
