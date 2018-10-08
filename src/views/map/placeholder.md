import React from 'react';
import ReactDOM from 'react-dom';
import { Map } from 'rc-bmap';

const { PlaceHolder } = Map;

const Example = () => (
  <div style={{ height: '90vh' }}>
    <Map
      ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
      center="重庆"
      zoom={12}
    >
      <PlaceHolder>
        <div>地图加载时占位</div>
      </PlaceHolder>
    </Map>
  </div>
);

ReactDOM.render(
  <Example />,
  document.getElementById('root'),
);
