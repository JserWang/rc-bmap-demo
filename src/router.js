import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import Container from 'components/Container';

import MapCode from 'views/map/map/index.md';
import TwoMap from 'views/map/twoMap/index.md';
import Center from 'views/map/center/index.md';
import MostZoom from 'views/map/mostZoom/index.md';
import Move from 'views/map/move/index.md';
import SetZoom from 'views/map/setZoom/index.md';
import Dragging from 'views/map/dragging/index.md';
import SetBounds from 'views/map/setBounds/index.md';
import GetBounds from 'views/map/getBounds/index.md';
import GetDistance from 'views/map/getDistance/index.md';
import ClosePOI from 'views/map/closePOI/index.md';

import NavScale from 'views/control/navScale/index.md';
import Geolocation from 'views/control/geolocation/index.md';
import OverviewMap from 'views/control/overviewMap/index.md';
import Scale from 'views/control/scale/index.md';
import Panorama from 'views/control/panorama/index.md';
import Copyright from 'views/control/copyright/index.md';
import CityList from 'views/control/cityList/index.md';
import MapTypeCtrl from 'views/control/mapTypeCtrl/index.md';
import TransitRoute from 'views/service/transitRoute/index.md';
import DrivingRoute from 'views/service/drivingRoute/index.md';
import RidingRoute from 'views/service/ridingRoute/index.md';
import WalkingRoute from 'views/service/walkingRoute/index.md';
import LocalSearch from 'views/service/localSearch/index.md';
import BusLineSearch from 'views/service/busLineSearch/index.md';
import MarkerClusterer from 'views/lib/markerClusterer/index.md';
import CurveLine from 'views/lib/curveLine/index.md';
import DrawingManager from 'views/lib/drawingManager/index.md';
import Heatmap from 'views/lib/heatmap/index.md';
import TrafficControl from 'views/lib/trafficControl/index.md';
import DistanceTool from 'views/lib/distanceTool/index.md';
import Boundary from 'views/overlay/boundary/index.md';
import Symbol from 'views/overlay/symbol/index.md';
import PointCollection from 'views/overlay/pointCollection/index.md';
import Ground from 'views/overlay/ground/index.md';
import Circle from 'views/overlay/circle/index.md';
import InfoWindow from 'views/overlay/infoWindow/index.md';
import Label from 'views/overlay/label/index.md';
import Marker from 'views/overlay/marker/index.md';
import Polygon from 'views/overlay/polygon/index.md';
import Polyline from 'views/overlay/polyline/index.md';
import AutoComplete from 'views/other/autoComplete/index.md';
import Tile from 'views/other/tile/index.md';

const getExample = code => () => (<Container code={code} />);

const route = () => (
  <Switch>
    <Route exact path="/" component={getExample(MapCode)} />
    <Route exact path="/map" component={getExample(MapCode)} />
    <Route exact path="/twoMap" component={getExample(TwoMap)} />
    <Route exact path="/center" component={getExample(Center)} />
    <Route exact path="/mostZoom" component={getExample(MostZoom)} />
    <Route exact path="/move" component={getExample(Move)} />
    <Route exact path="/setZoom" component={getExample(SetZoom)} />
    <Route exact path="/dragging" component={getExample(Dragging)} />
    <Route exact path="/setBounds" component={getExample(SetBounds)} />
    <Route exact path="/getBounds" component={getExample(GetBounds)} />
    <Route exact path="/getDistance" component={getExample(GetDistance)} />
    <Route exact path="/closePOI" component={getExample(ClosePOI)} />

    <Route path="/navigation_scale" component={getExample(NavScale)} />
    <Route path="/geolocation" component={getExample(Geolocation)} />
    <Route path="/overViewMap" component={getExample(OverviewMap)} />
    <Route path="/scale" component={getExample(Scale)} />
    <Route path="/copyright" component={getExample(Copyright)} />
    <Route path="/mapTypeCtrl" component={getExample(MapTypeCtrl)} />
    <Route path="/panorama" component={getExample(Panorama)} />
    <Route path="/cityList" component={getExample(CityList)} />
    <Route path="/transitRoute" component={getExample(TransitRoute)} />
    <Route path="/drivingRoute" component={getExample(DrivingRoute)} />
    <Route path="/ridingRoute" component={getExample(RidingRoute)} />
    <Route path="/walkingRoute" component={getExample(WalkingRoute)} />
    <Route path="/localSearch" component={getExample(LocalSearch)} />
    <Route path="/busLineSearch" component={getExample(BusLineSearch)} />
    <Route path="/markerClusterer" component={getExample(MarkerClusterer)} />
    <Route path="/curveLine" component={getExample(CurveLine)} />
    <Route path="/drawingManager" component={getExample(DrawingManager)} />
    <Route path="/heatmap" component={getExample(Heatmap)} />
    <Route path="/trafficControl" component={getExample(TrafficControl)} />
    <Route path="/distanceTool" component={getExample(DistanceTool)} />
    <Route path="/tile" component={getExample(Tile)} />
    <Route path="/boundary" component={getExample(Boundary)} />
    <Route path="/symbol" component={getExample(Symbol)} />
    <Route path="/pointCollection" component={getExample(PointCollection)} />
    <Route path="/ground" component={getExample(Ground)} />
    <Route path="/circle" component={getExample(Circle)} />
    <Route path="/infoWindow" component={getExample(InfoWindow)} />
    <Route path="/label" component={getExample(Label)} />
    <Route path="/marker" component={getExample(Marker)} />
    <Route path="/polygon" component={getExample(Polygon)} />
    <Route path="/polyline" component={getExample(Polyline)} />
    <Route path="/autoComplete" component={getExample(AutoComplete)} />
  </Switch>
);

export default route;
