import React, { useState } from 'react';

// * Components
import Card from '../../components/Card/Card';
import Form from '../../components/Form/Form';
import Cyte from '../../components/Cyte/Cyte';

// * CSS
import './Home.css';

// * Data
import cities from '../../data/cities';

// * Images
import errorIllustration from '../../assets/img/error-illutstration.svg';

// * Icons
import { HiLocationMarker } from 'react-icons/hi';

const Home = (props) => {
   const [cardRender, setCardRender] = useState('initial');
   const [inputValue, setInputValue] = useState('');
   const [data, setData] = useState('');
   const [possibleRender, setPossibleRender] = useState(false);

   function renderCities() {
      //Function to shuffle the array
      function shuffle(array) {
         for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
         }
         return array;
      }

      // Shuffles the array of cities and takes the first 6 elements
      const selectedCities = shuffle(cities).slice(0, 6);

      return selectedCities.map((city) => {
         return (
            <Cyte
               name={city}
               key={city}
               fetchWeather={fetchWeather}
               setInputValue={setInputValue}
            />
         );
      });
   }

   function handleClickSearch() {
      if (!inputValue) {
         setCardRender('error');
      } else {
         fetchWeather(String(inputValue));
      }
   }

   async function fetchWeather(city) {
      try {
         const apiKey = 'da4dc986ca1f6c6c45ae0c9bbeea664d';
         const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt-br`;

         const response = await fetch(apiURL);
         const data = await response.json();

         console.log(data);
         setData(data);
         setCardRender('result');
         setPossibleRender(true);

         // add a check for invalid response and set cardRender to 'error'
         if (data.cod === '404') {
            setCardRender('error');
         } else if (data.cod === '200') {
            setCardRender('result');
         }
      } catch (e) {
         console.log('Deu erro');
         setCardRender('error');
         possibleRender(false);
      }
   }

   return (
      <section
         className="Home"
         onKeyDown={(e) => {
            if (e.key === 'Enter') {
               handleClickSearch();
            }
         }}
      >
         <div className="conteiner">
            <Form
               inputValue={inputValue}
               setInputValue={setInputValue}
               handleClickSearch={handleClickSearch}
            />
            {cardRender === 'initial' && (
               <Card classNamePassed="initial" cardRender={cardRender}>
                  <div className="random-cities">{renderCities()}</div>
               </Card>
            )}
            {cardRender === 'result' &&
               possibleRender === true &&
               data.cod !== '404' &&
               data?.sys?.country && (
                  <Card classNamePassed="result" cardRender={cardRender}>
                     <div>
                        <h1>{Number(data.main.temp).toFixed(0)} °C</h1>
                        <h2>
                           {data.name},{' '}
                           <span className="country">{data.sys.country}</span>
                        </h2>
                        <p className="weather-condition">
                           {data.weather[0].main}
                        </p>
                     </div>
                  </Card>
               )}
            {cardRender === 'error' && (
               <Card classNamePassed="error" cardRender={cardRender}>
                  <div>
                     <img src={errorIllustration} alt="error illustration" />
                     <p>Oops! Invalid location :/</p>
                  </div>
               </Card>
            )}
         </div>
      </section>
   );
};

export default Home;
