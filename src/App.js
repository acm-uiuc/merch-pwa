import React from 'react';

import Login from 'screens/Login';
import ItemList from 'screens/ItemList';
import PurchaseView from 'screens/PurchaseView';

/*
  Main controller for the app.

  state:
    items: The list of items in the machine. Null if we haven't fetched it yet.
    apiKey: The api key for the flask backend. Null if we don't know it yet.
    purchasing: The item that the user is attempting to purchase. Null if the
        user is not purchasing an item.
*/
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: null,
      apiKey: sessionStorage.getItem('apiKey'),
      purchasing: null,
    };
    this.updateKey = this.updateKey.bind(this);
    this.getItems = this.getItems.bind(this);
    this.purchase = this.purchase.bind(this);
  }

  componentDidMount() {
    if (this.state.apiKey !== null) this.getItems();
  }

  /*
    Sets this.state.apiKey to the given key if it is a valid key.
  */
  updateKey(newKey) {
    sessionStorage.setItem('apiKey', newKey);
    this.setState({ apiKey: newKey }, () => {
      this.getItems();
    });
  }

  /*
    Attempts to fetch the vending machine items from the flask backend. Sets
    apiKey and items to null if it fails.
  */
  async getItems() {
    return fetch('https://infra-core-api.aws.qa.acmuiuc.org/api/v1/vending/items', {
    }).then(response => {
      if (response.status !== 200) {
        sessionStorage.removeItem('apiKey');
        this.setState({ items: null, apiKey: null });
      } else {
        response.json().then(itemObj => {
          this.setState({ items: itemObj.items });
        });
      }
    });
  }

  /*
    Navigates the user to a view where they can purchase the given item.
  */
  purchase(purchaseData) {
    this.setState({ purchasing: purchaseData });
  }

  render() {
    if (this.state.items === null) {
      return (
        <Login updateKey={this.updateKey}/>
      );
    } else if (this.state.purchasing !== null) {
      let back = this.purchase.bind(this, null);
      return (
        <PurchaseView item={this.state.purchasing.item}
                      quotedSol={this.state.purchasing.quotedSol}
                      back={back}/>
      );
    } else {
      return (
        <ItemList items={this.state.items} updateItems={this.getItems}
                  purchase={this.purchase}/>
      );
    }
  }
}

export default App;
