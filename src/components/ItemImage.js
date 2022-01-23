import React from 'react';

import defaultItem from 'images/defaultItem.svg';
import 'components/ItemImage.css';

/*
  This component renders the image of an item in the machine.

  props:
    name: The name of this item.
    url: The item's image url.
*/
class ItemImage extends React.Component {
  render() {
    let parentClass = 'itemImageParent';
    if (this.props.className) parentClass += ' ' + this.props.className;
    return (
      <div className={parentClass}>
        <img src={this.props.url} alt={this.props.name}
             onError={(e) => {e.target.src = defaultItem}}
             className='itemImage'/>
      </div>
    );
  }
}

export default ItemImage;
