// import React from 'react'
// import { useSelector } from 'react-redux'
// import { Map, TileLayer } from 'react-leaflet'
// import TreatmentMarker from './TreatmentMarker'

// const maps = {
//   "☀️": {
//     url: "https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png",
//     attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
//   },
//   "❄️": {
//     url: "https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png",
//     attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
//   },
//   "🌧": {
//     url: "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png",
//     attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
//   },
//   "☁️": {
//     url: "https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png",
//     attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
//   },
// }


// const TreatmentMap = () => {

//     const { position, treatment} = useSelector(state => {
//       return {
//         position: state.position,
//         treatments: state.treatments
//       }
//     })
//     console.log(position)


//     // const map = maps[icon]? maps[icon] : maps["☀️"]

//     // const handleMapClick = mapDetails => {
//     // const { lat, lng } = mapDetails.latlng
//     // dispatch(postTreatment(lat, lng))
//     // }


//     return (
//         // <Map 
//         // center={position} 
//         // zoom={15} 
//         // onClick={handleMapClick}
//         // style = {{height: "84vh" }}> 
//         //     <TileLayer url={map.url} attribution={map.attribution} />
//         //     {treatment.map((treatment, index) => <TreatmentMarker key = {index}
//         //     treatment={treatment} /> )}
//         //     </Map>
//         <div> map </div>
//     )
// }

// export default TreatmentMap
