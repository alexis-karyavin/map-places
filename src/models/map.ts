import * as config from '../config.json'
import mapboxgl, { EventData, Marker, Popup } from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { Features } from '@/models/interfaces'

export default class Map {
  // TODO: Узнать интерфейс
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private map: any
  private markers: Array<Marker>
  private popup: Popup

  constructor () {
    mapboxgl.accessToken = config.map.keyMap
    this.map = new mapboxgl.Map({
      container: 'map',
      style: config.map.style,
      center: [37.62876226496542, 55.750564371779575],
      zoom: config.map.zoom
    })

    this.markers = []
    this.popup = new mapboxgl.Popup()
  }

  public init (): void {
    this.map.on('load', () => {
    // TODO: Here we want to load a layer
    // TODO: Here we want to load/setup the popup
    })
    // this.addEventGetLgnLat()
    // this.addMarkers()
    // this.addEventMarkers()
    // this.addImageMarker('custom-marker', )
  }

  public addPlaces (places: Features): void {
    // TODO: Разбить на более мелкие функции
    this.map.on('load', () => {
      this.map.addSource('places', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: places
        }
      })

      this.map.addLayer({
        id: 'places',
        type: 'symbol',
        source: 'places',
        layout: {
          'icon-image': '{icon}-15',
          'icon-size': 1.5,
          'icon-allow-overlap': true
        }
      })

      this.map.on('click', 'places', (e: EventData) => {
        const coordinates = e.features[0].geometry.coordinates.slice()
        const description = e.features[0].properties.description

        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360
        }

        this.showPopup(coordinates[0], coordinates[1], description)

        this.goTo(coordinates[0], coordinates[1])
      })

      // Change the cursor to a pointer when the mouse is over the places layer.
      this.map.on('mouseenter', 'places', () => {
        this.map.getCanvas().style.cursor = 'pointer'
      })

      // Change it back to a pointer when it leaves.
      this.map.on('mouseleave', 'places', () => {
        this.map.getCanvas().style.cursor = ''
      })
    })
  }

  public addImageMarker (name: string, url: string): void {
    this.map.loadImage(name, this.createImage(url))
  }

  private addEventGetLgnLat (): void {
    this.map.on('click', (e: EventData) => {
      console.log(JSON.stringify(e.lngLat))
    })
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

  private addEventMarkers (): void {
    this.markers.forEach(marker => {
      const { lng, lat } = marker.getLngLat()
      marker.getElement().addEventListener('click', () => {
        this.goTo(lng, lat)
      })
    })
  }

  private goTo (x: number, y: number, isEssential = true): void {
    this.map.flyTo({
      center: [x, y],
      essential: isEssential,
      zoom: 12
    })
  }

  private showPopup (lng: number, lat: number, description = ''): void {
    new mapboxgl.Popup()
      .setLngLat([lng, lat])
      .setHTML(description)
      .addTo(this.map)
  }

  private createImage (url: string): HTMLImageElement {
    const image = new Image(50, 50)
    image.src = url
    return image
  }
}
