import react from 'react';
import mainPizza from './img/pizza-3010062_1920.jpg';

import './App.css';
import CategoryBlock from './components/CategoryBlock';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


function Header(props) {
  return (
    <header class="text-gray-600 body-">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <svg width="40" height="40" viewBox="0 0 81 81" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="40.5" cy="40.5" r="38.5" transform="rotate(90 40.5 40.5)" stroke="black" stroke-width="4"/>
          <path d="M65.1725 34.3792C63.1538 34.3792 61.5173 32.7427 61.5173 30.724C61.5173 28.7053 63.1538 27.0688 65.1725 27.0688C67.1912 27.0688 68.8276 28.7053 68.8276 30.724C68.8276 32.7427 67.1912 34.3792 65.1725 34.3792Z" stroke="black" stroke-width="2"/>
          <circle cx="54.931" cy="40.0346" r="3.65517" transform="rotate(90 54.931 40.0346)" stroke="black" stroke-width="2"/>
          <path d="M35.3792 29.7242C31.3038 29.7242 27.9999 26.4204 27.9999 22.3449C27.9999 18.2694 31.3038 14.9656 35.3792 14.9656C39.4547 14.9656 42.7585 18.2694 42.7585 22.3449C42.7585 26.4204 39.4547 29.7242 35.3792 29.7242Z" stroke="black" stroke-width="2"/>
          <path d="M37.2413 28.793C35.2226 28.793 33.5861 27.1565 33.5861 25.1378C33.5861 23.1191 35.2226 21.4827 37.2413 21.4827C39.26 21.4827 40.8965 23.1191 40.8965 25.1378C40.8965 27.1565 39.26 28.793 37.2413 28.793Z" fill="black" stroke="black" stroke-width="2"/>
          <path d="M65.1725 52.0689C63.1538 52.0689 61.5173 50.4324 61.5173 48.4137C61.5173 46.395 63.1538 44.7585 65.1725 44.7585C67.1912 44.7585 68.8276 46.395 68.8276 48.4137C68.8276 50.4324 67.1912 52.0689 65.1725 52.0689Z" stroke="black" stroke-width="2"/>
          <path d="M67.8844 11.3806L41.8603 41.9589M41.6714 39.1726L69.6473 64.2208" stroke="black" stroke-width="4"/>
        </svg>
          <span class="ml-3 text-xl">ХаХа Пицца</span>
        </a>
        <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a class="mr-5 hover:text-gray-900">Пиццы</a>
          <a class="mr-5 hover:text-gray-900">Салаты</a>
          <a class="mr-5 hover:text-gray-900">Напитки</a>
          <a class="mr-5 hover:text-gray-900">Скидки</a>
        </nav>
        <button class="inline-flex items-center bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-base mt-4 p-5 md:mt-0 text-white shadow-xl">Войти
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  )
}




function MainBlock(props) {
  return(
    <section class="text-gray-600 body-font">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img class="shadow-xl object-cover object-center rounded" alt="pizza photo" src={mainPizza} />
        </div>
        <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Очень смешные,
            <br class="hidden lg:inline-block" />немного постироничные пиццы
          </h1>
          <p class="mb-8 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel dictum nisl. Duis posuere orci non neque egestas viverra. Maecenas nec lectus sed lorem placerat feugiat. Nulla vulputate lacus mauris, vel tristique est bibendum at. Duis scelerisque ex id volutpat ullamcorper. Donec mattis sapien lorem, luctus sollicitudin velit.</p>
          <div class="flex justify-center">
            <button class="shadow-xl inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Перейти к каталогу</button>
          </div>
        </div>
      </div>
    </section>
  );
}



function Footer(props) {
  return(
    <div>
      <div class="border-t border-gray-200 mt-36">
        <div class="container px-5 py-8 flex flex-wrap mx-auto items-center">
          <div class="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
            <div class="relative sm:w-64 w-40 sm:mr-4 mr-2">
              <label for="footer-field" class="leading-7 text-sm text-gray-600">Подпишитесь на рассылку</label>
              <input placeholder="Ваш Email" type="text" id="footer-field" name="footer-field" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Подписаться</button>
            <p class="text-gray-500 text-sm md:ml-6 md:mt-0 mt-2 sm:text-left text-center">Мы будем присылать вам
              <br class="lg:block hidden"/>информацию об акциях
            </p>
          </div>
          <span class="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
            <a class="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-500">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-500">
              <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
      <div class="bg-gray-100">
        <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p class="text-gray-500 text-sm text-center sm:text-left">
          </p>
          <span class="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">ХаХа-Пицца</span>
        </div>
      </div>
    </div>
  );
}

function Home() {
  return(
    <react.Fragment>
    <Header />
    <MainBlock />
    <CategoryBlock />         
    <Footer />
  </react.Fragment>
  );  
}


function App() {
  return(    
    <Router>
      <Switch>
        <Route path="/" component={Home}/>
      </Switch>
    </Router>
  );
}

export default App;
