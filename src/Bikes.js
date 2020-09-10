import React, { useEffect, useState } from "react"
import createEnturService from '@entur/sdk'

const service = createEnturService({
    clientName: 'hasvold-project_aslak',
});
const Bikes = () => {
    const [bikesStations, setBikesStations] = useState([]);

    useEffect(() => {
        service
            .getBikeRentalStationsByPosition(
                {
                    latitude: 63.428311, 
                    longitude: 10.392514,
                },
                230
            )
            .then((data) => setBikesStations(data));
    }, []);

    return (
        <div className="bikes">
           {bikesStations.map((station) => (
               <Station key={station.id} station={station} />
           ))} 
        </div>
    );
};
 
export default Bikes;

const Station = (props) => {
    const { name, bikesAvailable, spacesAvailable } = props.station;
    
    return (
        <div className="station">
            {name} - {bikesAvailable} : {spacesAvailable}
        </div>
    )
};