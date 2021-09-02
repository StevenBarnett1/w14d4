import dayImage from './images/greenhouse-day.jpg';
import nightImage from './images/greenhouse-night.jpg';
import {useTheme} from "../../context/ThemeContext"
import './Greenhouse.css';

import LightSwitch from './LightSwitch';
import ClimateStats from './ClimateStats';


function Greenhouse() {

  let {themeName} = useTheme()
  let picType
  if(themeName === "day"){
    picType = dayImage
  } else {
    picType = nightImage
  }
  return (
    <section>
      <img className='greenhouse-img' src={picType} alt='greenhouse' />
      <LightSwitch />
      <ClimateStats />
    </section>
  );
}


export default Greenhouse;
