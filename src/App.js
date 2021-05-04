import react, { useEffect } from 'react';
import mainPizza from './img/pizza-3010062_1920.jpg';

import './App.css';
import CategoryBlock from './components/CategoryBlock';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useState } from 'react';



function Button(props) {
  return(
    <button class="inline-flex items-center bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-base mt-4 p-5 md:mt-0 text-white shadow-xl">{props.text}
    {props.arrow ? 
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg> : null}      
    </button>
  );
}


function Header(props) {
  return (
    <header class="text-gray-600 dark:bg-gray-800">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to="/">
        <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <svg class="fill-current text-gray-100" width="40" height="40" viewBox="0 0 81 81" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="40.5" cy="40.5" r="38.5" transform="rotate(90 40.5 40.5)" stroke="black" stroke-width="4"/>
          <path d="M65.1725 34.3792C63.1538 34.3792 61.5173 32.7427 61.5173 30.724C61.5173 28.7053 63.1538 27.0688 65.1725 27.0688C67.1912 27.0688 68.8276 28.7053 68.8276 30.724C68.8276 32.7427 67.1912 34.3792 65.1725 34.3792Z" stroke="black" stroke-width="2"/>
          <circle cx="54.931" cy="40.0346" r="3.65517" transform="rotate(90 54.931 40.0346)" stroke="black" stroke-width="2"/>
          <path d="M35.3792 29.7242C31.3038 29.7242 27.9999 26.4204 27.9999 22.3449C27.9999 18.2694 31.3038 14.9656 35.3792 14.9656C39.4547 14.9656 42.7585 18.2694 42.7585 22.3449C42.7585 26.4204 39.4547 29.7242 35.3792 29.7242Z" stroke="black" stroke-width="2"/>
          <path d="M37.2413 28.793C35.2226 28.793 33.5861 27.1565 33.5861 25.1378C33.5861 23.1191 35.2226 21.4827 37.2413 21.4827C39.26 21.4827 40.8965 23.1191 40.8965 25.1378C40.8965 27.1565 39.26 28.793 37.2413 28.793Z" fill="black" stroke="black" stroke-width="2"/>
          <path d="M65.1725 52.0689C63.1538 52.0689 61.5173 50.4324 61.5173 48.4137C61.5173 46.395 63.1538 44.7585 65.1725 44.7585C67.1912 44.7585 68.8276 46.395 68.8276 48.4137C68.8276 50.4324 67.1912 52.0689 65.1725 52.0689Z" stroke="black" stroke-width="2"/>
          <path d="M67.8844 11.3806L41.8603 41.9589M41.6714 39.1726L69.6473 64.2208" stroke="black" stroke-width="4"/>
        </svg>
          <span class="ml-3 text-xl dark:text-gray-100">ХаХа Пицца</span>
        </a>
        </Link>
        <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a class="mr-5 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark: classhover:cursor-pointer">Пиццы</a>
          <a class="mr-5 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark: classhover:cursor-pointer">Салаты</a>
          <a class="mr-5 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark: classhover:cursor-pointer">Напитки</a>
          <a class="mr-5 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark: classhover:cursor-pointer">Скидки</a>
        </nav>
        
        <div className="buttons flex justify-around w-1/6">
          <Link to={'/cart'}>
            <Button text="Корзина" />
          </Link>
          
          <Link to={'/login'}>
            <Button text="Войти" arrow="true"/>
          </Link>
        </div>
        
      </div>
    </header>
  )
}




function MainBlock(props) {
  return(
    <section class="text-gray-600 body-font dark:bg-gray-800">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img class="shadow-xl object-cover object-center rounded" alt="pizza photo" src={mainPizza} />
        </div>
        <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-gray-100">Очень смешные,
            <br class="hidden lg:inline-block" />немного постироничные пиццы
          </h1>
          <p class="mb-8 leading-relaxed dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel dictum nisl. Duis posuere orci non neque egestas viverra. Maecenas nec lectus sed lorem placerat feugiat. Nulla vulputate lacus mauris, vel tristique est bibendum at. Duis scelerisque ex id volutpat ullamcorper. Donec mattis sapien lorem, luctus sollicitudin velit.</p>
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
    <div className="dark:bg-gray-800">
      <div class="border-t border-gray-200 dark:border-gray-600">
        <div class="container px-5 py-8 flex flex-wrap mx-auto items-center mt-1">
          <div class="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
            <div class="relative sm:w-64 w-40 sm:mr-4 mr-2">
              <label for="footer-field" class="leading-7 text-sm text-gray-600">Подпишитесь на рассылку</label>
              <input placeholder="Ваш Email" type="text" id="footer-field" name="footer-field" class="dark:placeholder-gray-100 w-full bg-gray-100 bg-opacity-50 rounded border dark:border-gray-600 border-gray-300 focus:ring-2 focus:bg-transparent dark:text-gray-50 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <Button text="Подписаться" />
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
      <div class="bg-gray-100 dark:bg-gray-900">
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

function Login() {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState('Поле не может быть пустым');
  const [passwordError, setPasswordError] = useState('Поле не может быть пустым');
  const [formValid, setFormValid] = useState(false);
  
  
  useEffect(()=>{
    if(emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError])
  
  
  const blurHandler = (e) => {
      switch (e.target.name) {
          case 'email':
              setEmailDirty(true)
              break
          case 'password':
              setPasswordDirty(true)
              break
      }
  }
  
  const emailHandler = (e) => {
    setEmail(e.target.value);
    const regex = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    if (!regex.test(String(e.target.value).toLowerCase())) {
      setEmailError('Некорректный адрес')
      if (!e.target.value) {
        setPasswordError('Поле не может быть пустым');
      }
    } else {
      setEmailError('');
    }
  }
  
  
  const passwordHandler = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 8 || e.target.value.length > 32) {
      setPasswordError('Пароль должен быть длинее 8 символов, но короче 32-х');
      if (!e.target.value) {
        setPasswordError('Поле не может быть пустым');
      }
    } else {
      setPasswordError('');
    }
  }
  
  
  return(
    <div className="dark:bg-gray-800">
      <Header />
      <div className="mb-36 container xl:mx-auto md:mx-auto xl:w-1/6 md:w-3/6 sm:w-full flex flex-col sm:mx-3">
          <div className="xl:mt-48 mt-32 mb-6">
              <h2 class="text-center font-semibold text-2xl mb-16 dark:text-gray-100">Приветствуем в ХаХа Пицце</h2>       
          
              <input value={email} onChange={e => emailHandler(e)} onBlur={e => blurHandler(e)} type="email" id="required-email" class="border-transparent flex-1 appearance-none border-b border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 dark:text-gray-100 dark:placeholder-gray-100 dark:bg-gray-800 shadow-sm text-base focus:outline-none focus:border-indigo-600 focus:border-2 focus:placeholder-white" name="email" placeholder="Ваш адрес электронной почты"/>
              {(emailDirty && emailError) && <p class="text-sm pl-4 mt-1 text-red-500">{emailError}</p>}
              
              
              <input value={password} onChange={e => passwordHandler(e)} onBlur={e => blurHandler(e)} type="password" id="password" class="mt-8 border-transparent flex-1 appearance-none border-b border-gray-300 w-full py-2 px-4 bg-white text-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-100 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:border-indigo-600 focus:border-2 focus:placeholder-white" name="password" placeholder="Ваш пароль"/>
              {(passwordDirty && passwordError) && <p class="text-sm pl-4 mt-1 text-red-500">{passwordError}</p>}
              
              <div className="flex mt-16 items-center justify-between">
                  <a href="#" className="text-indigo-600">Регистрация</a>
                  
                  <Button text="Войти" />
              </div>
          </div>
      </div>
      <Footer />
    </div>
  );
}

function Cart () {
  return(
    <div className="dark:bg-gray-800 flex flex-col justify-between h-screen">
      <div>
        <Header />
        
        <div class="container mx-auto mt-10">
        
            <div class="w-full dark:bg-gray-800 px-10 py-10">
              <div class="flex justify-between border-b pb-8">
                <h1 class="font-semibold text-2xl dark:text-gray-100">Корзина</h1>
                <h2 class="font-semibold text-2xl dark:text-gray-100">0 товаров</h2>
              </div>
              <div class="flex mt-10 mb-5">
                <h3 class="font-semibold dark:text-gray-100 text-gray-800 text-xs uppercase w-2/5">О товаре</h3>
                <h3 class="font-semibold dark:text-gray-100 text-gray-800 text-xs uppercase w-1/5 text-center">Количество</h3>
                <h3 class="font-semibold dark:text-gray-100 text-gray-800 text-xs uppercase w-1/5 text-center">Цена</h3>
                <h3 class="font-semibold dark:text-gray-100 text-gray-800 text-xs uppercase w-1/5 text-center">Итог</h3>
              </div>
            </div>
          
        </div>
      </div>
      <Footer />
      </div>
  );
}

function Signup() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState('Поле не может быть пустым');
  const [passwordError, setPasswordError] = useState('Поле не может быть пустым');
  const [formValid, setFormValid] = useState(false);

  const blurHandler = (e) => {
    switch (e.target.name) {
        case 'email':
            setEmailDirty(true)
            break
        case 'password':
            setPasswordDirty(true)
            break
    }
}

const passwordHandler = (e) => {
  setPassword(e.target.value);
  if (e.target.value.length < 8 || e.target.value.length > 32) {
    setPasswordError('Пароль должен быть длинее 8 символов, но короче 32-х');
    if (!e.target.value) {
      setPasswordError('Поле не может быть пустым');
    }
  } else {
    setPasswordError('');
  }
}


  return(
<div className="dark:bg-gray-800">
      <Header />
      <div className="mb-36 container xl:mx-auto md:mx-auto xl:w-1/6 md:w-3/6 sm:w-full flex flex-col sm:mx-3">
          <div className="xl:mt-48 mt-32 mb-6">
              <h2 class="text-center font-semibold text-2xl mb-16 dark:text-gray-100">Приветствуем в ХаХа Пицце</h2>       
          
              <input  onBlur={e => blurHandler(e)} type="email" id="required-email" class="border-transparent flex-1 appearance-none border-b border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 dark:text-gray-100 dark:placeholder-gray-100 dark:bg-gray-800 shadow-sm text-base focus:outline-none focus:border-indigo-600 focus:border-2 focus:placeholder-white" name="email" placeholder="Ваш адрес электронной почты"/> 
              {(emailDirty && emailError) && <p class="text-sm pl-4 mt-1 text-red-500">{emailError}</p>}
              <input onChange={e => passwordHandler(e)} onBlur={e => blurHandler(e)} type="password" id="password" class="mt-8 border-transparent flex-1 appearance-none border-b border-gray-300 w-full py-2 px-4 bg-white text-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-100 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:border-indigo-600 focus:border-2 focus:placeholder-white" name="password" placeholder="Ваш пароль"/> 
              {(passwordDirty && passwordError) && <p class="text-sm pl-4 mt-1 text-red-500">{passwordError}</p>}
              <input onChange={e => passwordHandler(e)} onBlur={e => blurHandler(e)} type="password" id="password" class="mt-8 border-transparent flex-1 appearance-none border-b border-gray-300 w-full py-2 px-4 bg-white text-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-100 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:border-indigo-600 focus:border-2 focus:placeholder-white" name="password" placeholder="Подтвердите пароль"/>             
              {(passwordDirty && passwordError) && <p class="text-sm pl-4 mt-1 text-red-500">{passwordError}</p>}        
              <div className="flex mt-16 items-center justify-between">

                  <a href="#" className="text-indigo-600">Уже есть аккаунт?</a>
                  
                  <Button text="Регистрация" />
              </div>
          </div>
      </div>
      <Footer />
    </div>
  )
}

function App() {
  return(    
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={Login} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
    </Router>
  );
}

export default App;
