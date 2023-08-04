import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api'
import { useMemo } from 'react'
import '../styles/googleMaps.css'

const GoogleMaps = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    })

    const center = useMemo(
        () => ({ lat: 4.44086440503711, lng: 114.00880734507545 }),
        []
    )

    return (
        <div className="googleMaps">
            {!isLoaded ? (
                <h1>Loading...</h1>
            ) : (
                <GoogleMap
                    mapContainerClassName="map-container"
                    center={center}
                    zoom={17}
                    mapTypeId="hybrid"
                >
                    <Marker
                        position={{
                            lat: 4.44086440503711,
                            lng: 114.00880734507545,
                        }}
                        title="HydraPower Engineering"
                    />
                </GoogleMap>
            )}
        </div>
    )
}

export default GoogleMaps
