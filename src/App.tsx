import React, { useState } from 'react';
import './App.css';
import AddCat from './components/AddCat';
import KittenList from './components/KittenList';

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
        image: 'https://placekitten.com/100/100'
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
        image: 'https://placekitten.com/100/100'
      }
    ]
  };

  const [state, setState] = useState(initialState);

  const updateCatName = (e: any, index: number): void => {
    const newName = e.target.value;
    let kittenArray = state.kittens;
    const updateKittenName = (kittenArray[index] = {
      ...kittenArray[index],
      name: newName
    });
    console.log('STATE', state);
    setState({ ...state, kittens: kittenArray });
  };

  const removeCat = (e: any, index: number): void => {
    let updatedKittens = state.kittens;
    updatedKittens.splice(index, 1);
    setState({ kittens: updatedKittens });
  };

  const addCat = (e: any): void => {
    e.preventDefault();
    const newKitten: Kitten = {
      name: e.target.name.value,
      age: e.target.age.value,
      toy: e.target.toy.value,
      image: 'https://placekitten.com/100/100'
    };
    let updatedKittens: Kitten[] = state.kittens;
    updatedKittens.push(newKitten);
    setState({ kittens: updatedKittens });
    resetAddCatForm(e);
  };

  const resetAddCatForm = (e: any): void => {
    e.target.name.value = '';
    e.target.age.value = '';
    e.target.toy.value = '';
  };

  return (
    <div>
      <AddCat addCat={addCat} />
      <KittenList
        state={state}
        removeCat={removeCat}
        updateCatName={updateCatName}
      >
        <div className="App">
          <KittenList />
        </div>
      </KittenList>
    </div>
  );
};

export default App;
