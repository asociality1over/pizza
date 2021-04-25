import { Component } from "react";
import pizza from './img/pizza-1209748_1920.jpg';
import salad from './img/eat-2834549_1920.jpg';
import drink from  './img/berry-4201069_1920.jpg';

class Card extends Component {
    constructor(props) {
        super(props);
        
        this.sizeSmallClick = this.sizeSmallClick.bind(this);
        this.sizeMediumClick = this.sizeMediumClick.bind(this);
        this.sizeBigClick = this.sizeBigClick.bind(this);
        
        this.state = {size: 1};
    }
    
    sizeSmallClick() {
        this.setState({size: 1});
    }
    
    sizeMediumClick() {
        this.setState({size: 2});
    }
    
    sizeBigClick() {
        this.setState({size: 3});
    }
    
    render() {
        const currentCategory = this.props.category;
        const currentSize = this.state.size;
        
        return(
            <div class="p-1 xl:w-1/4 md:w-1/2 w-full container">
                <div class="h-full p-1 rounded-lg border-2 border-gray-400 flex flex-col relative overflow-hidden">          
                <img class="object-cover object-center rounded-t" alt="pizza Photo" src={currentCategory=='pizza' ? pizza : currentCategory=='salad' ? salad : drink} />
                <h1 class="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none p-6 self-center">{currentCategory=='pizza' ? 'Пицца' : currentCategory=='salad' ? 'Салат' : 'Морс'}</h1> 
                
                    <div class="container py-2 mx-auto">
                        <div class="flex flex-col text-center w-full mb-5">
                            <div class="flex mx-auto border-2 border-indigo-500 rounded overflow-hidden">
                                <button onClick={this.sizeSmallClick} class={currentSize == 1 ? "py-1 border-r border-gray-200 px-4 bg-indigo-500 text-white focus:outline-none" : "py-1 border-r border-gray-200 px-4 text-gray-300 focus:outline-none"}>{currentCategory=='pizza' ? '35 см' : currentCategory=='salad' ? '300 г' : '500 мг'}</button>
                                <button onClick={this.sizeMediumClick} class={currentSize == 2 ? "py-1 border-r border-gray-200 px-4 bg-indigo-500 text-white focus:outline-none" : "py-1 border-r border-gray-200 px-4 text-gray-300 focus:outline-none"}>{currentCategory=='pizza' ? '30 см' : currentCategory=='salad' ? '200 г' : '350 мг'}</button>
                                <button onClick={this.sizeBigClick} class={currentSize == 3 ? "py-1 px-4 bg-indigo-500 text-white focus:outline-none" : "py-1 px-4 text-gray-300 focus:outline-none"}>{currentCategory=='pizza' ? '25 см' : currentCategory=='salad' ? '150 г' : '200 мг'}</button>
                            </div>
                        </div>
                    </div>
                
                    <div class="flex flex-col px-6 items-center">
                        <p class="flex items-center text-gray-400 mb-2">{currentCategory=='pizza' ? 'Тонкое тесто' : currentCategory=='salad' ? 'Свежие овощи' : 'Свежие ягоды'}</p>
                        <p class="flex items-center text-gray-400 mb-2">{currentCategory=='pizza' ? 'Сделано в печи' : null}</p>
                        <p class="flex items-center text-gray-400 mb-6">{this.props.desc3}</p>
                    </div>
                
                    <div class="flex flex-wrap justify-between pr-6">         
                        <button class="m-6 w-5/12 flex items-center mt-auto text-white bg-indigo-500 hover:bg-indigo-600 border-0 py-2 px-4 focus:outline-none hover:bg-gray-500 rounded">В корзину
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </button>
                        
                        <h3 class="text-2xl">{currentCategory=='pizza' ? '549 р.' : currentCategory=='salad' ? '159 р.' : '59 р.'}</h3>
                    </div>         
                </div>
            </div>
        );
    }
}

export default Card;