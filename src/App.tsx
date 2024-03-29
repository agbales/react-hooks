import React, { useState } from 'react';
import './App.css';
import AddKitten from './components/AddKitten';
import KittenList from './components/KittenList';
// import console = require('console');

const App: React.FC = () => {
  interface KittenState {
    kittens: Kitten[];
  }

  interface Kitten {
    name: string;
    age: number;
    toy: string;
    image: string;
  }

  let initialState: KittenState = {
    kittens: [
      {
        name: 'Catler',
        age: 2,
        toy: 'feather',
        image: 'https://live.staticflickr.com/4127/5012570728_2000a77565_b.jpg'
      },
      {
        name: 'Patches',
        age: 2,
        toy: 'bucket',
        image: 'https://placekitten.com/100/100'
      },
      {
        name: 'Rolly',
        age: 2,
        toy: 'ball',
        image:
          'https://render.fineartamerica.com/images/rendered/default/poster/10/8/break/images-medium-5/kitten-square-dog-photography.jpg'
      }
    ]
  };

  let profilePicArray: string[] = [
    'https://t2.ea.ltmcdn.com/en/images/7/8/8/how_to_train_a_kitten_887_600.jpg',
    'https://cdn.shopify.com/s/files/1/2529/5140/products/retro-rainbow-kitten-diamond-painting-kit-ytg-official-store-30x30cm-12x12-in-square_1024x1024.jpg?v=1557776517',
    'https://www.papercards.com/images/avanti/36045-got-milk-kitten-gift-card-holder.jpg'
  ];

  const [state, setState] = useState(initialState);

  const updateKittenName = (e: any, index: number): void => {
    const newName = e.target.value;
    let kittenArray = state.kittens;
    const updateKittenName = (kittenArray[index] = {
      ...kittenArray[index],
      name: newName
    });
    setState({ ...state, kittens: kittenArray });
  };

  const removeKitten = (e: any, index: number): void => {
    let updatedKittens = state.kittens;
    updatedKittens.splice(index, 1);
    setState({ kittens: updatedKittens });
  };

  const selectProfilePic = (): string => {
    const getRandomInt = (max: number): number => {
      return Math.floor(Math.random() * Math.floor(max));
    };

    const url: any = profilePicArray[getRandomInt(3)];
    return url;
  };

  const addKitten = (e: any): void => {
    e.preventDefault();
    const newKitten: Kitten = {
      name: e.target.name.value,
      age: e.target.age.value,
      toy: e.target.toy.value,
      image: selectProfilePic()
    };
    let updatedKittens: Kitten[] = state.kittens;
    updatedKittens.push(newKitten);
    setState({ kittens: updatedKittens });
    resetAddKittenForm(e);
  };

  const resetAddKittenForm = (e: any): void => {
    e.target.name.value = '';
    e.target.age.value = '';
    e.target.toy.value = '';
  };

  return (
    <div>
      <AddKitten addKitten={addKitten} />
      <KittenList
        state={state}
        removeKitten={removeKitten}
        updateKittenName={updateKittenName}
      />
    </div>
  );
};

export default App;
