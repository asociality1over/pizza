import React, { Component } from "react";
import SectionChoose from './SectionChoose';
import Card from './Card';

class CategoryBlock extends Component {
    constructor(props) {
        super(props);
        this.pizzaCategoryClick = this.pizzaCategoryClick.bind(this);
        this.saladCategoryClick = this.saladCategoryClick.bind(this);
        this.drinkCategoryClick = this.drinkCategoryClick.bind(this);
        this.state={category: 'pizza'}
    }
    
    pizzaCategoryClick() {
        this.setState({category: 'pizza'});
    }
    
    saladCategoryClick() {
        this.setState({category: 'salad'});
    }
    
    drinkCategoryClick() {
        this.setState({category: 'drink'});
    }
    
    
    render() {
        const currentCategory = this.state.category;
        
        return(
            <React.Fragment>
                <SectionChoose category={currentCategory} onClickPizza={this.pizzaCategoryClick} onClickSalad={this.saladCategoryClick} onClickDrink={this.drinkCategoryClick} /> 
                <div className="container mx-auto">
                    <div className="flex flex-wrap -m-4 justify-between">
                        <Card category={currentCategory} />
                        <Card category={currentCategory} />
                        <Card category={currentCategory} />
                    </div>
                </div>     
            </React.Fragment>            
        );
    }
    
    
}

export default CategoryBlock;