import { Link } from 'react-router-dom';
import Button from './Button'

export default function () {
  return (
    <header class="text-gray-600 dark:bg-gray-800">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to="/">
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              class="fill-current text-gray-100"
              width="40"
              height="40"
              viewBox="0 0 81 81"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="40.5"
                cy="40.5"
                r="38.5"
                transform="rotate(90 40.5 40.5)"
                stroke="black"
                stroke-width="4"
              />
              <path
                d="M65.1725 34.3792C63.1538 34.3792 61.5173 32.7427 61.5173 30.724C61.5173 28.7053 63.1538 27.0688 65.1725 27.0688C67.1912 27.0688 68.8276 28.7053 68.8276 30.724C68.8276 32.7427 67.1912 34.3792 65.1725 34.3792Z"
                stroke="black"
                stroke-width="2"
              />
              <circle
                cx="54.931"
                cy="40.0346"
                r="3.65517"
                transform="rotate(90 54.931 40.0346)"
                stroke="black"
                stroke-width="2"
              />
              <path
                d="M35.3792 29.7242C31.3038 29.7242 27.9999 26.4204 27.9999 22.3449C27.9999 18.2694 31.3038 14.9656 35.3792 14.9656C39.4547 14.9656 42.7585 18.2694 42.7585 22.3449C42.7585 26.4204 39.4547 29.7242 35.3792 29.7242Z"
                stroke="black"
                stroke-width="2"
              />
              <path
                d="M37.2413 28.793C35.2226 28.793 33.5861 27.1565 33.5861 25.1378C33.5861 23.1191 35.2226 21.4827 37.2413 21.4827C39.26 21.4827 40.8965 23.1191 40.8965 25.1378C40.8965 27.1565 39.26 28.793 37.2413 28.793Z"
                fill="black"
                stroke="black"
                stroke-width="2"
              />
              <path
                d="M65.1725 52.0689C63.1538 52.0689 61.5173 50.4324 61.5173 48.4137C61.5173 46.395 63.1538 44.7585 65.1725 44.7585C67.1912 44.7585 68.8276 46.395 68.8276 48.4137C68.8276 50.4324 67.1912 52.0689 65.1725 52.0689Z"
                stroke="black"
                stroke-width="2"
              />
              <path
                d="M67.8844 11.3806L41.8603 41.9589M41.6714 39.1726L69.6473 64.2208"
                stroke="black"
                stroke-width="4"
              />
            </svg>
            <span class="ml-3 text-xl dark:text-gray-100">ХаХа Пицца</span>
          </a>
        </Link>
        <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a class="mr-5 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark: classhover:cursor-pointer">
            Пиццы
          </a>
          <a class="mr-5 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark: classhover:cursor-pointer">
            Салаты
          </a>
          <a class="mr-5 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark: classhover:cursor-pointer">
            Напитки
          </a>
          <a class="mr-5 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark: classhover:cursor-pointer">
            Скидки
          </a>
        </nav>

        <div className="buttons flex justify-around w-1/6">
          <Link to={"/cart"}>
            <Button text="Корзина" />
          </Link>

          <Link to={"/login"}>
            <Button text="Войти" arrow="true" />
          </Link>
        </div>
      </div>
    </header>
  );
}
