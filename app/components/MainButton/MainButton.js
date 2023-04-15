import React, {memo} from 'react';

import './MainButton.css';

export default memo(function MainButton({reRenderAll, charging}) {
  return (
    <section className="mainButton">
      <button
        className={`mainButton__button ${charging && 'chargingButton'}`}
        onClick={reRenderAll}
        disabled={charging}
      >
        {charging ? 'Loading...' : 'Refresh All'}
      </button>
    </section>
  );
});
