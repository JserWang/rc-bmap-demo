import React from 'react';
import {
  Map,
  ControlAnchor,
  Scale,
  LengthUnit,
} from 'rc-bmap';
import { Button } from 'antd';

class ScaleExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: {
        width: 10,
        height: 10,
      },
      anchor: ControlAnchor.TOP_RIGHT,
      unit: LengthUnit.METRIC,
    };
  }

  handleAnchor = () => {
    this.setState({
      anchor: ControlAnchor[getRandomControlAnchor()],
    });
  }

  handleOffset = () => {
    const { offset } = this.state;
    this.setState({
      offset: {
        width: offset.width + 3,
        height: offset.height + 3,
      },
    });
  }

  handleUnit = () => {
    const { unit } = this.state;
    this.setState({
      unit: unit === LengthUnit.IMPERIAL ? LengthUnit.METRIC : LengthUnit.IMPERIAL,
    });
  }

  render() {
    const { offset, anchor, unit } = this.state;
    return (
        <div style={{ height: '90vh' }}>
          <Map
            ak="dbLUj1nQTvDvKXkov5fhnH5HIE88RUEO"
            scrollWheelZoom
          >
            <Scale
              offset={offset}
              anchor={anchor}
              unit={unit}
            />
          </Map>
          <Button onClick={this.handleOffset}>改变offset</Button>
          <Button onClick={this.handleAnchor}>随机改变停靠位置</Button>
          <Button onClick={this.handleUnit}>
            {unit === LengthUnit.METRIC ? '使用英制单位' : '使用公制单位'}
          </Button>
        </div>
    );
  }
}

ReactDOM.render(
  <ScaleExample />,
  document.getElementById('root'),
);
