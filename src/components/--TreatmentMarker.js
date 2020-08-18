// import React from 'react'
// import { icon } from 'leaflet';
// import { Marker, Popup } from 'react-leaflet'

// const TreatmentMarker = ({ treatment }) => {

//   const treatmentIcon = icon({
//     iconUrl: treatment.front_sprite,
//     iconSize: [96, 96],
//     iconAnchor: [48, 48],
//     popupAnchor: [0, -28]
//   })

//   return (
//     <Marker position={[treatment.lat, treatment.lng]} icon={treatmentIcon}>
//       <Popup>
//         <h1>{treatment.name}</h1>
//         {treatment.stats.map(stat =>
//           <div key={stat.name}>
//             <strong>{stat.name}: </strong>
//             <span>{stat.base_stat}</span>
//           </div>
//         )}
//       </Popup>
//     </Marker>
//   )
// }

// export default TreatmentMarker