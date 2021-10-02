import React,{Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class Geolocation extends Component {
    render() {
        return(
            <div><p>Google Maps</p>
            <Map google={this.props.google} zoom={14}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
          
        </InfoWindow>
      </Map>
            </div>
            
        );
    }
   
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyDZJYnv0qkd6n8P_cD0hneq0NMVjIbnEKE")
})(Geolocation)

