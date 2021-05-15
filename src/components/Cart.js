export default function () {
  return (
    <div className="dark:bg-gray-800 flex flex-col justify-between h-screen">
      <div>
        <div class="container mx-auto mt-10">
          <div class="w-full dark:bg-gray-800 px-10 py-10">
            <div class="flex justify-between border-b pb-8">
              <h1 class="font-semibold text-2xl dark:text-gray-100">Корзина</h1>
              <h2 class="font-semibold text-2xl dark:text-gray-100">
                0 товаров
              </h2>
            </div>
            <div class="flex mt-10 mb-5">
              <h3 class="font-semibold dark:text-gray-100 text-gray-800 text-xs uppercase w-2/5">
                О товаре
              </h3>
              <h3 class="font-semibold dark:text-gray-100 text-gray-800 text-xs uppercase w-1/5 text-center">
                Количество
              </h3>
              <h3 class="font-semibold dark:text-gray-100 text-gray-800 text-xs uppercase w-1/5 text-center">
                Цена
              </h3>
              <h3 class="font-semibold dark:text-gray-100 text-gray-800 text-xs uppercase w-1/5 text-center">
                Итог
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
