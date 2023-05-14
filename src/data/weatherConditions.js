import { FaBolt } from 'react-icons/fa';
import { FaCloud, FaCloudShowersHeavy, FaCloudSun, FaCloudSunRain, FaCloudRain, FaSun, FaSnowflake, FaSmog, FaWind } from 'react-icons/fa';
import { WiDayCloudy, WiDayFog, WiDaySunny, WiRain, WiSnow, WiThunderstorm } from 'react-icons/wi';


const weatherConditions = [
   {
      weatherCondition: 'Thunderstorm',
      condicaoClimatica: 'Tempestade',
      icon: <FaBolt />,
   },
   {
      weatherCondition: 'Drizzle',
      condicaoClimatica: 'Chuvisco',
      icon: <FaCloudRain />,
   },
   {
      weatherCondition: 'Rain',
      condicaoClimatica: 'Chuva',
      icon: <FaCloudShowersHeavy />,
   },
   {
      weatherCondition: 'Snow',
      condicaoClimatica: 'Neve',
      icon: <FaSnowflake />,
   },
   { weatherCondition: 'Mist', condicaoClimatica: 'Névoa', icon: <FaSmog /> },
   { weatherCondition: 'Smoke', condicaoClimatica: 'Fumaça', icon: <FaSmog /> },
   {
      weatherCondition: 'Haze',
      condicaoClimatica: 'Névoa seca',
      icon: <FaSmog />,
   },
   { weatherCondition: 'Dust', condicaoClimatica: 'Poeira', icon: <FaSmog /> },
   { weatherCondition: 'Fog', condicaoClimatica: 'Neblina', icon: <FaSmog /> },
   { weatherCondition: 'Sand', condicaoClimatica: 'Areia', icon: <FaSmog /> },
   {
      weatherCondition: 'Ash',
      condicaoClimatica: 'Cinzas vulcânicas',
      icon: <FaSmog />,
   },
   {
      weatherCondition: 'Squall',
      condicaoClimatica: 'Pancadas de vento',
      icon: <FaWind />,
   },
   {
      weatherCondition: 'Tornado',
      condicaoClimatica: 'Tornado',
      icon: <FaWind />,
   },
   {
      weatherCondition: 'Clear',
      condicaoClimatica: 'Céu limpo',
      icon: <FaSun />,
   },
   {
      weatherCondition: 'Clouds',
      condicaoClimatica: 'Nublado',
      icon: <FaCloud />,
   },
];

export default weatherConditions;
