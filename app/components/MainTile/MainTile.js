import React, {memo} from 'react';

import Tile from '../Tile/Tile';
import AddTile from '../AddTile/AddTile';

import './MainTile.css';

export default memo(function MainTile({tilesArr, changeSingleTile, addTile}) {
  return (
    <section className="mainTile">
      {tilesArr.map((element, index) => {
        return (
          <Tile
            key={index}
            url={element}
            id={index}
            changeSingleTile={changeSingleTile}
          ></Tile>
        );
      })}

      <AddTile addTile={addTile} />
      <div className="space"></div>
    </section>
  );
});
