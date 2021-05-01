import { Component } from "react";
import pizza from './img/pizza-1209748_1920.jpg';

class SectionChoose extends Component {
    constructor(props) {
        super(props);
        this.pizzaCategoryClick = this.pizzaCategoryClick.bind(this);
        this.saladCategoryClick = this.saladCategoryClick.bind(this);
        this.drinkCategoryClick = this.drinkCategoryClick.bind(this);
    }
    
    pizzaCategoryClick() {
        this.props.onClickPizza('pizza');
    }
    
    saladCategoryClick() {
        this.props.onClickSalad('salad');
    }
    
    drinkCategoryClick() {
        this.props.onClickDrink('drink');
    }
    
    
    render() {
        const currentCategory = this.props.category;
        
        return(
            <div class="flex mx-auto mb-20 md:mb-16 sm:mb-1 justify-center dark:bg-gray-800">
                <a onClick={this.pizzaCategoryClick} className={currentCategory == 'pizza' ? "hover:bg-gray-100 cursor-pointer sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium dark:bg-gray-600 dark:hover:bg-gray-600 bg-gray-100 inline-flex items-center leading-none border-indigo-500 text-indigo-500 tracking-wider rounded-t" : "dark:text-gray-100 dark:hover:bg-gray-600 hover:bg-gray-100 cursor-pointer sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider"}>
                    Пиццы
                </a>
                <a onClick={this.saladCategoryClick} className={currentCategory == 'salad' ? "hover:bg-gray-100 cursor-pointer sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 dark:bg-gray-600 title-font font-medium bg-gray-100 inline-flex items-center leading-none border-indigo-500 text-indigo-500 tracking-wider rounded-t" : "dark:text-gray-100 dark:hover:bg-gray-600 hover:bg-gray-100 cursor-pointer sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider"}>
                    Салаты
                </a>
                <a onClick={this.drinkCategoryClick} className={currentCategory == 'drink' ? "hover:bg-gray-100 cursor-pointer sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 dark:bg-gray-600 title-font font-medium bg-gray-100 inline-flex items-center leading-none border-indigo-500 text-indigo-500 tracking-wider rounded-t" : "dark:text-gray-100 dark:hover:bg-gray-600 hover:bg-gray-100 cursor-pointer sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider"}>
                    Напитки
                </a>
            </div>
        );
    }
}

export default SectionChoose;