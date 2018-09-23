import React from 'react';
import ReactDOM from 'react-dom';
import { Map } from 'rc-bmap';

const Example = () => (
  <div style={{ height: '100vh' }}>
    <Map
      ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
      center="上海"
      zoom={15}
    />
  </div>
);

ReactDOM.render(
  <Example />,
  document.getElementById('root'),
);
