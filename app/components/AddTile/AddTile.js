import React, {memo} from 'react';

import './AddTile.css';

export default memo(function AddTile({addTile}) {
  return (
    <div className="box" onClick={addTile}>
      <div className="boxRectangleHorizontal"></div>
      <div className="boxRectangleVertical"></div>
    </div>
  );
});
