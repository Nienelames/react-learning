import { ReactElement } from "react"
import TravelDataInterface from '../travelDataInterface'


function TravelCard(props: TravelDataInterface): ReactElement {
    const location: string = props.location.split('').join(' ')
    
    return (
        <div className="travel-card">
            <img src={props.imageUrl} alt="photo" className="location-photo"/>
            <div className="travel-details">
                <div className="location-details">
                    <img src="../public/assets/location-pin.svg" alt="location-pin" className="location-pin-logo"/>
                    <span className="location-name">{location}</span>
                    <a href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h4 className="object-title">{props.title}</h4>
                <p><b>{props.startDate} - {props.endDate}</b></p>
                <p className="description">{props.description}</p>
            </div>
        </div>
    )
}

export default TravelCard