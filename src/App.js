import React from 'react';

import Login from 'screens/Login';
import ItemList from 'screens/ItemList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: null,
      apiKey: sessionStorage.getItem('apiKey'),
    };
    this.updateKey = this.updateKey.bind(this);
    this.getItems = this.getItems.bind(this);
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
    return fetch('/api/get_items', {
      headers: {
        'Authorization': 'Bearer: ' + this.state.apiKey
      }
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

  render() {
    if (this.state.items === null) {
      return (
        <Login updateKey={this.updateKey}/>
      );
    } else {
      return (
        <ItemList items={this.state.items} updateItems={this.getItems}/>
      );
    }
  }
}

export default App;
