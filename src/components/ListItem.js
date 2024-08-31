import React from 'react';

import 'components/ListItem.css';
import ItemImage from './ItemImage';

/*
  This component is a single row in the table in the ItemList screen.

  props:
    item: The item that this row should display.
    solanaPrice: The current price of Solana in USD. Null if the price hasn't
        been fetched yet.
    purchase: A function that directs the user in purchasing the given item.
*/
class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.purchase = this.purchase.bind(this);
  }

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
    Returns this item's Solana price.
  */
  solPrice() {
    return { num: 2, expo: 2,
             solPrice: 2 };
  }

  /*
    Calls the function to direct the user to purchase this item.
  */
  purchase(quotedSol) {
    let purchaseData = { item: this.props.item, quotedSol: quotedSol };
    this.props.purchase(purchaseData);
  }

  render() {
    let currentSolPrice = this.solPrice();
    let purchaseHandler = this.purchase.bind(this, currentSolPrice.solPrice);
    return (
      <div className='listItem'>
        <ItemImage url={this.props.item.image_url} name={this.props.item.name}
                   className='listItemImage'/>
        <div className='itemNameLabel'>{this.props.item.name}</div>
      </div>
    );
  }  // render()
}  // class ListItem

export default ListItem;
