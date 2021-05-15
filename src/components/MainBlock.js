import mainPizza from "./img/pizza-3010062_1920.jpg";

export default function () {
  return (
    <section class="text-gray-600 body-font dark:bg-gray-800">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            class="shadow-xl object-cover object-center rounded"
            alt="pizza photo"
            src={mainPizza}
          />
        </div>
        <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-gray-100">
            Очень смешные,
            <br class="hidden lg:inline-block" />
            немного постироничные пиццы
          </h1>
          <p class="mb-8 leading-relaxed dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel
            dictum nisl. Duis posuere orci non neque egestas viverra. Maecenas
            nec lectus sed lorem placerat feugiat. Nulla vulputate lacus mauris,
            vel tristique est bibendum at. Duis scelerisque ex id volutpat
            ullamcorper. Donec mattis sapien lorem, luctus sollicitudin velit.
          </p>
          <div class="flex justify-center">
            <button class="shadow-xl inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Перейти к каталогу
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
