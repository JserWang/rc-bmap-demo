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
import CustomCtrl from 'views/control/customCtrl/index.md';
import Copyright from 'views/control/copyright/index.md';
import CityList from 'views/control/cityList/index.md';
import MapTypeCtrl from 'views/control/mapTypeCtrl/index.md';
import Overlay from 'views/overlay/overlay/index.md';
import Polyline from 'views/overlay/polyline/index.md';

import NewMarker from 'views/overlay/newMarker/index.md';
import DraggingMarker from 'views/overlay/draggingMarker/index.md';
import Editing from 'views/overlay/editing/index.md';
import DisplayStatus from 'views/overlay/displayStatus/index.md';
import AddLabel from 'views/overlay/addLabel/index.md';
import SetLabel from 'views/overlay/setLabel/index.md';
import GetAttr from 'views/overlay/getAttr/index.md';
import AddPoints from 'views/overlay/addPoints/index.md';
import RemovePoint from 'views/overlay/removePoint/index.md';
import ShowStars from 'views/overlay/showStars/index.md';
import CurveLine from 'views/overlay/curveLine/index.md';
import Oval from 'views/overlay/oval/index.md';
import Boundary from 'views/overlay/boundary/index.md';
import CustomOverlay from 'views/overlay/customOverlay/index.md';
import MarkerClusterer from 'views/overlay/markerClusterer/index.md';
import Heatmap from 'views/overlay/heatmap/index.md';
import Symbol from 'views/overlay/symbol/index.md';
import Text from 'views/infoWindow/text/index.md';
import Picture from 'views/infoWindow/picture/index.md';
import Search from 'views/infoWindow/search/index.md';
import Multiple from 'views/infoWindow/multiple/index.md';
import GetContent from 'views/infoWindow/getContent/index.md';
import MapMenu from 'views/menu/mapMenu/index.md';
import OverlayMenu from 'views/menu/overlayMenu/index.md';
import TrafficControl from 'views/layer/trafficControl/index.md';
import TileLayer1 from 'views/layer/tile1/index.md';
import TileLayer2 from 'views/layer/tile2/index.md';
import TileLayer3 from 'views/layer/tile3/index.md';

import AutoComplete from 'views/autoComplete/autoComplete/index.md';

const getExample = code => () => (<Container code={code} />);

const route = () => (
  <Switch>
    <Route exact path="/" component={getExample(MapCode)} />
    <Route path="/map" component={getExample(MapCode)} />
    <Route path="/twoMap" component={getExample(TwoMap)} />
    <Route path="/center" component={getExample(Center)} />
    <Route path="/mostZoom" component={getExample(MostZoom)} />
    <Route path="/move" component={getExample(Move)} />
    <Route path="/setZoom" component={getExample(SetZoom)} />
    <Route path="/dragging" component={getExample(Dragging)} />
    <Route path="/setBounds" component={getExample(SetBounds)} />
    <Route path="/getBounds" component={getExample(GetBounds)} />
    <Route path="/getDistance" component={getExample(GetDistance)} />
    <Route path="/closePOI" component={getExample(ClosePOI)} />
    <Route path="/navigation_scale" component={getExample(NavScale)} />
    <Route path="/geolocation" component={getExample(Geolocation)} />
    <Route path="/copyright" component={getExample(Copyright)} />
    <Route path="/mapTypeCtrl" component={getExample(MapTypeCtrl)} />
    <Route path="/customCtrl" component={getExample(CustomCtrl)} />
    <Route path="/cityList" component={getExample(CityList)} />
    <Route path="/overlay" component={getExample(Overlay)} />
    <Route path="/polyline" component={getExample(Polyline)} />

    <Route path="/newMarker" component={getExample(NewMarker)} />
    <Route path="/draggingMarker" component={getExample(DraggingMarker)} />
    <Route path="/editing" component={getExample(Editing)} />
    <Route path="/displayStatus" component={getExample(DisplayStatus)} />
    <Route path="/addLabel" component={getExample(AddLabel)} />
    <Route path="/setLabel" component={getExample(SetLabel)} />
    <Route path="/getAttr" component={getExample(GetAttr)} />
    <Route path="/addPoints" component={getExample(AddPoints)} />
    <Route path="/removePoint" component={getExample(RemovePoint)} />
    <Route path="/showStars" component={getExample(ShowStars)} />
    <Route path="/curveLine" component={getExample(CurveLine)} />
    <Route path="/oval" component={getExample(Oval)} />
    <Route path="/boundary" component={getExample(Boundary)} />
    <Route path="/customOverlay" component={getExample(CustomOverlay)} />
    <Route path="/markerClusterer" component={getExample(MarkerClusterer)} />
    <Route path="/heatmap" component={getExample(Heatmap)} />
    <Route path="/symbol" component={getExample(Symbol)} />
    <Route path="/text" component={getExample(Text)} />
    <Route path="/picture" component={getExample(Picture)} />
    <Route path="/search" component={getExample(Search)} />
    <Route path="/multiple" component={getExample(Multiple)} />
    <Route path="/getContent" component={getExample(GetContent)} />
    <Route path="/mapMenu" component={getExample(MapMenu)} />
    <Route path="/overlayMenu" component={getExample(OverlayMenu)} />
    <Route path="/trafficControl" component={getExample(TrafficControl)} />
    <Route path="/tileLayer1" component={getExample(TileLayer1)} />
    <Route path="/tileLayer2" component={getExample(TileLayer2)} />
    <Route path="/tileLayer3" component={getExample(TileLayer3)} />

    <Route path="/autoComplete" component={getExample(AutoComplete)} />

    <Route path="/navigation_scale" component={getExample(NavScale)} />
    <Route path="/geolocation" component={getExample(Geolocation)} />
    <Route path="/markerClusterer" component={getExample(MarkerClusterer)} />
    <Route path="/curveLine" component={getExample(CurveLine)} />
  </Switch>
);

export default route;
