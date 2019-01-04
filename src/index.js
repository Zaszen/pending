import React from 'react';
import ReactDOM from 'react-dom';

require('./index.less');

const title = 'My Minimal React Webpack Babel Setup';

ReactDOM.render(
  <div className="red">{title}</div>,
  document.getElementById('app')
);

module.hot.accept();
