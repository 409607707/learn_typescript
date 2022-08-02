// import { User } from './User'
// import { Company } from './Company'
/**
 * Instructions to every other class on how they can be an argument to 'addMarker'
 */
export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  color: string;
  markerContent(): string
}
export class CustomMap {
  private googleMap: google.maps.Map;
  
  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId) as HTMLDivElement, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    })
  }
  // bad
  // addUserMarker(user: User): void {
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: user.location.lat,
  //       lng: user.location.lng
  //     }
  //   })
  // }

  // addCompanyMarker(company: Company): void {
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: company.location.lat,
  //       lng: company.location.lng
  //     }
  //   })
  // }

  // good
  // addMarker(instance: User | Company): void {
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: instance.location.lat,
  //       lng: instance.location.lng
  //     }
  //   })
  // }
  addMarker(instance: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: instance.location.lat,
        lng: instance.location.lng
      }
    })
    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: instance.markerContent()
      })
      infoWindow.open(this.googleMap, marker)
    })
  }
}