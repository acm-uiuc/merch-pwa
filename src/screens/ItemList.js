import React from 'react';

import 'screens/ItemList.css';
import ListItem from 'components/ListItem';
import acmLogo from 'images/acmLogo.svg';
import palantirLogo from 'images/palantirLogo.svg';

/*
  This screen lists all the items in the vending machine.

  props:
    items: An array of items in the machine.
    updateItems: A function that calls the api to fetch the latest list of items
        in the machine.
    purchase: A function that directs the user in purchasing the given item.

  state:
    touchStart: Y position of the last touch start event. Used for the pull down
        to refresh functionality.
    translate: How much to translate the item table and loading icon by. Used
        for the pull down to refresh functionality.
    solanaPrice: The current price of solana in USD. Null if we haven't fetched
        the price yet.
*/
class ItemList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      touchStart: 0,
      translate: 0,
      solanaPrice: null,
    };
    this.touchStartHandler = this.touchStartHandler.bind(this);
    this.touchMoveHandler = this.touchMoveHandler.bind(this);
    this.touchEndHandler = this.touchEndHandler.bind(this);
    this.getSolPrice = this.getSolPrice.bind(this);
  }

  /*
    Update the SOL prices of items every 10 minutes.
  */
  componentDidMount() {
    let updateSol = () => {
      this.getSolPrice();
      setTimeout(updateSol, 600000);
    };
    updateSol();
  }

  /*
    Function that controls the pull down to refresh animation.
  */
  easingFn(x) {
   return Math.pow(Math.E, -0.01 * x + 4.6) * -1 + 100;
  }

  /*
    For pull down to refresh. Sets the touchStart state variable.
  */
  touchStartHandler(e) {
    this.setState({ touchStart: e.targetTouches[0].screenY });
  }

  /*
    For pull down to refresh. This does the "pull down" part.
  */
  touchMoveHandler(e) {
    let newTranslate = e.changedTouches[0].screenY - this.state.touchStart;
    if (e.currentTarget.scrollTop <= 0 && newTranslate > 0) {
      newTranslate = this.easingFn(newTranslate);
      this.setState({
        translate: newTranslate
      });
    }
  }

  /*
    For pull down to refresh. This does the "refresh" part.
  */
  touchEndHandler() {
    if (this.state.translate < 90) {
      this.setState({ translate: 0 });
    } else {
      this.setState({ translate: 100 }, () => {
        setTimeout(() => {
          this.getSolPrice().then(() => {
            this.props.updateItems().then(() => {
              this.setState({ translate: 0 });
            });
          });
        }, 350);
      });
    }
  }

  /*
    Fetches the current solana price and sets the solanaPrice state variable.
  */
  async getSolPrice() {
    this.setState({ solanaPrice: 0 });
  }

  render() {
    let itemComponents =
        this.props.items.filter(item => item.quantity > 0).map((item, idx) => {
          return <ListItem item={item} key={idx}
                           solanaPrice={this.state.solanaPrice}
                           purchase={this.props.purchase}/>;
        });
    let itemTableStyle = { transform: `translateY(${this.state.translate}px)` };
    if (this.state.translate === 0) {
      itemTableStyle.transition = 'transform 0.15s ease-out';
    }
    let spinnerStyle = {
      transform: `rotate(${this.state.translate / 100 * 360}deg)`
    };
    let spinnerClass = 'fas fa-spinner';
    if (this.state.translate === 100) spinnerClass += ' spinning';
    return (
      <div className='contentBox'>
        <div className='header'>
          <img src={acmLogo} alt='ACM logo' className='acmLogo'/>
          <div className='merchLogo'>Vending Machine</div>
          {/* <img src={palantirLogo} alt='Palantir Logo' className='palantirLogo'/> */}
        </div>
        <div className='loadBox' style={itemTableStyle}>
          <i className={spinnerClass} style={spinnerStyle}/>
        </div>
        <div className='itemTable' onTouchMove={this.touchMoveHandler}
             onTouchStart={this.touchStartHandler}
             onTouchEnd={this.touchEndHandler} style={itemTableStyle}>
          {itemComponents}
        </div>
      </div>
    );
  }
}

export default ItemList;
