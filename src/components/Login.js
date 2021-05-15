import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function () {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState("Поле не может быть пустым");
  const [passwordError, setPasswordError] = useState(
    "Поле не может быть пустым"
  );
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError]);

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
    }
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const regex = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );
    if (!regex.test(String(e.target.value).toLowerCase())) {
      setEmailError("Некорректный адрес");
      if (!e.target.value) {
        setPasswordError("Поле не может быть пустым");
      }
    } else {
      setEmailError("");
    }
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 8 || e.target.value.length > 32) {
      setPasswordError("Пароль должен быть длинее 8 символов, но короче 32-х");
      if (!e.target.value) {
        setPasswordError("Поле не может быть пустым");
      }
    } else {
      setPasswordError("");
    }
  };

  return (
    <div className="dark:bg-gray-800">
      <div className="mb-36 container xl:mx-auto md:mx-auto xl:w-1/6 md:w-3/6 sm:w-full flex flex-col sm:mx-3">
        <div className="xl:mt-48 mt-32 pb-3">
          <h2 class="text-center font-semibold text-2xl mb-16 dark:text-gray-100">
            Приветствуем в ХаХа Пицце
          </h2>

          <input
            value={email}
            onChange={emailHandler}
            onBlur={blurHandler}
            type="email"
            id="required-email"
            class="border-transparent flex-1 appearance-none border-b border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 dark:text-gray-100 dark:placeholder-gray-100 dark:bg-gray-800 shadow-sm text-base focus:outline-none focus:border-indigo-600 focus:border-2 focus:placeholder-white"
            name="email"
            placeholder="Ваш адрес электронной почты"
          />
          {emailDirty && emailError && (
            <p class="text-sm pl-4 mt-1 text-red-500">{emailError}</p>
          )}

          <input
            value={password}
            onChange={passwordHandler}
            onBlur={blurHandler}
            type="password"
            id="password"
            class="mt-8 border-transparent flex-1 appearance-none border-b border-gray-300 w-full py-2 px-4 bg-white text-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-100 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:border-indigo-600 focus:border-2 focus:placeholder-white"
            name="password"
            placeholder="Ваш пароль"
          />
          {passwordDirty && passwordError && (
            <p class="text-sm pl-4 mt-1 text-red-500">{passwordError}</p>
          )}

          <div className="flex mt-16 items-center justify-between">
            <Link to="/signup">
              <a href="#" className="text-indigo-600">
                Регистрация
              </a>
            </Link>

            <button
              disabled={!formValid}
              class={
                formValid
                  ? "inline-flex items-center bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-base mt-4 p-5 md:mt-0 text-white shadow-xl"
                  : "inline-flex items-center bg-indigo-100 border-0 py-2 px-6 focus:outline-none rounded text-base mt-4 p-5 md:mt-0 text-white cursor-default"
              }
            >
              Войти
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
