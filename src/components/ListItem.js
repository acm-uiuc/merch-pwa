import React from 'react';

import 'components/ListItem.css';
import defaultItem from 'images/defaultItem.svg';

/*
  This component is a single row in the table in the ItemList screen.

  props:
    item: The item that this row should display.
    solanaPrice: The current price of Solana in USD. Null if the price hasn't
        been fetched yet.
*/
class ListItem extends React.Component {
  /*
    Returns the filled in contents of the nutrition panel info box.
  */
  nutritionPanels() {
    let nutrients = [
      { key: 'calories', abbr: 'Cals', units: '' },
      { key: 'carbs', abbr: 'Carbs', units: 'g' },
      { key: 'sugar', abbr: 'Sugar', units: 'g' },
      { key: 'fiber', abbr: 'Fiber', units: 'g' },
      { key: 'fat', abbr: 'Fat', units: 'g' },
      { key: 'protein', abbr: 'Protein', units: 'g' },
    ];
    let panelArr = nutrients.map((nutrient, idx) => {
      let hasNutrient = this.props.item[nutrient.key] !== null;
      let val = hasNutrient
          ? `${this.props.item[nutrient.key]}${nutrient.units}`
          : '—';
      let style = hasNutrient
          ? {}
          : { color: '#b9b9b9' };
      return (
        <div key={idx} style={style}>
          {nutrient.abbr}<br/>
          {val}
        </div>
      );
    });
    return panelArr;
  }

  /*
    Returns the scientific notation of this item's Solana price.
  */
  solScientific() {
    if (this.props.solanaPrice === null) {
      return { num: '—', expo: '—' };
    }
    let solPriceNum = this.props.item.price / this.props.solanaPrice;
    let eString = solPriceNum.toExponential(2);
    let eStringComponents = eString.split('e');
    let cleanedExponent = eStringComponents[1][0] === '+'
        ? eStringComponents[1].substring(1)
        : eStringComponents[1];
    return { num: eStringComponents[0], expo: cleanedExponent };
  }

  render() {
    let sciPrice = this.solScientific();
    return (
      <div className='listItem'>
        <img src={this.props.item.image_url} alt={this.props.item.name}
             className='itemImage'
             onError={(e) => {e.target.src = defaultItem}}/>
        <div className='itemNameLabel'>{this.props.item.name}</div>
        <div className='locAndNutritionBox'>
          <div className='locAndNutritionPanel'>
            <div className='locLabel'>{this.props.item.locations[0]}</div>
            {this.nutritionPanels()}
          </div>
        </div>
        <button className='buyButton'>
          <i className="fas fa-shopping-cart buyButtonIcon"/>
          <div><br/>{sciPrice.num}&#x00d7;10<sup>{sciPrice.expo}</sup> SOL</div>
          <div>({this.props.item.price.toFixed(2)} USD)</div>
        </button>
      </div>
    );
  }
}

export default ListItem;
