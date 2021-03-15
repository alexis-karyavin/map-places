import * as config from '../config.json'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

export default class Map {
  public init (): void {
    mapboxgl.accessToken = config.map.keyMap
    const map = new mapboxgl.Map({
      container: 'map',
      style: config.map.style,
      center: [37.62876226496542, 55.750564371779575],
      zoom: config.map.zoom
    })
    map.on('load', () => {
    // TODO: Here we want to load a layer
    // TODO: Here we want to load/setup the popup
    })
  }
}
