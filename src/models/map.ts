import * as config from '../config.json'
import mapboxgl, { Marker } from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

export default class Map {
  // TODO: Узнать интерфейс
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private map: any
  private markers: Array<Marker>

  constructor () {
    mapboxgl.accessToken = config.map.keyMap
    this.map = new mapboxgl.Map({
      container: 'map',
      style: config.map.style,
      center: [37.62876226496542, 55.750564371779575],
      zoom: config.map.zoom
    })

    this.markers = []
  }

  public init (): void {
    this.map.on('load', () => {
    // TODO: Here we want to load a layer
    // TODO: Here we want to load/setup the popup
    })
    // this.map.on('click', (e) => {
    //   console.log(JSON.stringify(e.lngLat.wrap()))
    // })
    this.addMarkers()
  }

  private addMarkers (): void {
    // Add points Marker
    config.map.points.forEach(point => {
      this.markers.push(new mapboxgl.Marker()
        .setLngLat([point[0], point[1]])
        .addTo(this.map)
      )
    })
  }
}
