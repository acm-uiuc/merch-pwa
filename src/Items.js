import bottle from './images/bottle.png';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Divider, ListItemText } from '@mui/material';

const Items = () => {
  return (
    <div className="item">
      <List>
        <ListItem
          secondaryAction={
            <div className="itemPrice">
              <h4>0.007 SOL</h4>
            </div>
          }
        >
          <img src={bottle} className="itemBottle" alt="bottle" />
          <ListItemText
            primary={
              <div className="itemDetails">
                <h2>Bubbly Passion Fruit</h2>
              </div>
            }
            secondary={
              <div className="itemSubDetails">
                <h4>A8</h4>
                <h4>0 cals, 0g carbs, 0g fiber, 0g fat, 0g protein</h4>
              </div>
            }
          />
        </ListItem>
        <Divider variant="middle" component="li" />
        <ListItem
          secondaryAction={
            <div className="itemPrice">
              <h4>0.007 SOL</h4>
            </div>
          }
        >
          <img src={bottle} className="itemBottle" alt="bottle" />
          <ListItemText
            primary={
              <div className="itemDetails">
                <h2>Bubbly Passion Fruit</h2>
              </div>
            }
            secondary={
              <div className="itemSubDetails">
                <h4>A8</h4>
                <h4>0 cals, 0g carbs, 0g fiber, 0g fat, 0g protein</h4>
              </div>
            }
          />
        </ListItem>
        <Divider variant="middle" component="li" />
        <ListItem
          secondaryAction={
            <div className="itemPrice">
              <h4>0.007 SOL</h4>
            </div>
          }
        >
          <img src={bottle} className="itemBottle" alt="bottle" />
          <ListItemText
            primary={
              <div className="itemDetails">
                <h2>Bubbly Passion Fruit</h2>
              </div>
            }
            secondary={
              <div className="itemSubDetails">
                <h4>A8</h4>
                <h4>0 cals, 0g carbs, 0g fiber, 0g fat, 0g protein</h4>
              </div>
            }
          />
        </ListItem>
        <Divider variant="middle" component="li" />
        <ListItem
          secondaryAction={
            <div className="itemPrice">
              <h4>0.007 SOL</h4>
            </div>
          }
        >
          <img src={bottle} className="itemBottle" alt="bottle" />
          <ListItemText
            primary={
              <div className="itemDetails">
                <h2>Bubbly Passion Fruit</h2>
              </div>
            }
            secondary={
              <div className="itemSubDetails">
                <h4>A8</h4>
                <h4>0 cals, 0g carbs, 0g fiber, 0g fat, 0g protein</h4>
              </div>
            }
          />
        </ListItem>
        <Divider variant="middle" component="li" />
        <ListItem
          secondaryAction={
            <div className="itemPrice">
              <h4>0.007 SOL</h4>
            </div>
          }
        >
          <img src={bottle} className="itemBottle" alt="bottle" />
          <ListItemText
            primary={
              <div className="itemDetails">
                <h2>Bubbly Passion Fruit</h2>
              </div>
            }
            secondary={
              <div className="itemSubDetails">
                <h4>A8</h4>
                <h4>0 cals, 0g carbs, 0g fiber, 0g fat, 0g protein</h4>
              </div>
            }
          />
        </ListItem>
        <Divider variant="middle" component="li" />
        <ListItem
          secondaryAction={
            <div className="itemPrice">
              <h4>0.007 SOL</h4>
            </div>
          }
        >
          <img src={bottle} className="itemBottle" alt="bottle" />
          <ListItemText
            primary={
              <div className="itemDetails">
                <h2>Bubbly Passion Fruit</h2>
              </div>
            }
            secondary={
              <div className="itemSubDetails">
                <h4>A8</h4>
                <h4>0 cals, 0g carbs, 0g fiber, 0g fat, 0g protein</h4>
              </div>
            }
          />
        </ListItem>
        <Divider variant="middle" component="li" />
        <ListItem
          secondaryAction={
            <div className="itemPrice">
              <h4>0.007 SOL</h4>
            </div>
          }
        >
          <img src={bottle} className="itemBottle" alt="bottle" />
          <ListItemText
            primary={
              <div className="itemDetails">
                <h2>Bubbly Passion Fruit</h2>
              </div>
            }
            secondary={
              <div className="itemSubDetails">
                <h4>A8</h4>
                <h4>0 cals, 0g carbs, 0g fiber, 0g fat, 0g protein</h4>
              </div>
            }
          />
        </ListItem>
        <Divider variant="middle" component="li" />
      </List>
    </div>
  );
}
 
export default Items;