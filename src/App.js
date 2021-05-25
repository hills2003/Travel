import React,{useEffect ,useRef} from 'react';
import "./index.css";
import { Card ,CardContent ,AppBar ,Toolbar ,IconButton} from "@material-ui/core"
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import CommuteIcon from '@material-ui/icons/Commute';
import RoomIcon from '@material-ui/icons/Room';

function App(props) {
           const mapid =useRef();
          
     useEffect(()=>{
          const maps = mapid.current.id;
           
          var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
          mapboxgl.accessToken = 'pk.eyJ1IjoiaGlsbHMiLCJhIjoiY2tvOGNncDVxMjRwazJxbHlkbG55OXk5aCJ9.E9W-GsOb5UkqqF3pcGdutw';
         
            const map = new mapboxgl.Map({
             container: maps,
             style: 'mapbox://styles/mapbox/streets-v10',
             center: [-73.985664, 40.748514],
             zoom: 12,
             pitch:30,
           });
           map.addControl(new mapboxgl.NavigationControl());

            const directions = new MapboxDirections({
              accessToken: mapboxgl.accessToken,
            });
            map.addControl(directions, 'top-left');
            },[])

    return (
        <div className='center'>
            <AppBar>
                <Toolbar>
                     <IconButton><CommuteIcon color="secondary"/></IconButton>
                     <p>Travel made easy </p>
                     <IconButton><RoomIcon /></IconButton>
                </Toolbar>
            </AppBar>
           <div>

               <Card className='maps' ref={mapid} id="maps"></Card>
           </div>
        </div>
    );
}

export default App;