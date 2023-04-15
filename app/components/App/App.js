'use client';

import React, {useState} from 'react';

import MainTile from '../MainTile/MainTile';
import MainButton from '../MainButton/MainButton';

import './App.css';
import Loader from '../Loader/Loader';

const App = ({initialArr}) => {
  const [tilesArr, setTilesArr] = useState(initialArr);
  const [charging, setChargin] = useState(false);

  async function fetchTiles(amount) {
    console.log(
      'You are going to see this console log because is rendered in the client',
    );
    setChargin(true);
    try {
      const serverResponse = await fetch(
        `https://tinyfac.es/api/data?limit=${amount}&quality=0`,
      );
      if (!serverResponse.ok) {
        throw new Error();
      }
      const serverResponseJson = await serverResponse.json();
      return serverResponseJson.map(face => face.url);
    } catch {
      alert('There was an error with the server');
    }
  }

  async function changeSingleTile({id}) {
    const serverResponseJson = await fetchTiles(1);
    if (serverResponseJson) {
      let newArr = [].concat(tilesArr);
      newArr[id] = serverResponseJson[0];
      serverResponseJson && setTilesArr(newArr);
    }
    setChargin(false);
  }

  async function addTile() {
    const serverResponseJson = await fetchTiles(1);
    if (serverResponseJson) {
      let newArr = [].concat(tilesArr);
      newArr.push(serverResponseJson[0]);
      setTilesArr(newArr);
    }
    setChargin(false);
  }

  async function reRenderAll() {
    let arrLen = tilesArr.length;
    const serverResponseJson = await fetchTiles(arrLen);
    if (serverResponseJson) {
      serverResponseJson && setTilesArr(serverResponseJson);
    }
    setChargin(false);
  }

  return (
    <main className="main">
      {charging && (
        <div className="charging-container">
          <Loader />
        </div>
      )}
      <MainTile
        addTile={addTile}
        changeSingleTile={changeSingleTile}
        tilesArr={tilesArr}
      />
      <MainButton reRenderAll={reRenderAll} charging={charging} />
    </main>
  );
};

export default App;
