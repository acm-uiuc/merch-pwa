import React from 'react';

import 'screens/PurchaseView.css';
import { createQR } from 'utility/createQR';
import ItemImage from 'components/ItemImage';

/*
  This screen is displayed when a user is purchasing an item.

  props:
    item: The item attempted to be purchased.
    quotedSol: The amount of Solana needed to vend this item.
    back: Call function to go back to main list.
*/
class PurchaseView extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  componentDidUpdate() {
    this.drawQR();
  }

  componentDidMount() {
    this.drawQR();
  }

  drawQR() {
    let qr = createQR('https://www.solana.com/', 300, 'white', '#2a2a2a');
    qr.append(this.ref.current);
  }

  render() {
    let roundedSol = Math.round(this.props.quotedSol * 1000000000) / 1000000000;
    return (
      <div className='contentBox'>
        <div className='header'>
          <button className='cancelButton' onClick={this.props.back}>
            <i className="fas fa-times"></i>
          </button>
          <div className='merchLogo'>Checkout</div>
        </div>
        <div className='checkoutGrid'>
          <ItemImage url={this.props.item.image_url} name={this.props.item.name}
                     className='checkoutItemImage'/>
          <div>
            <div ref={this.ref}></div>
            <div className='poweredBy'>
              <div className='poweredText'>Powered by</div>
              <svg
                  height="40"
                  viewBox="0 0 55 40"
                  width="55"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                  <linearGradient id="a" gradientUnits="userSpaceOnUse" x1="1.35059" x2="14.1601" y1="26.3337" y2="11.574">
                      <stop offset=".08" stopColor="#9945ff" />
                      <stop offset=".3" stopColor="#8752f3" />
                      <stop offset=".5" stopColor="#5497d5" />
                      <stop offset=".6" stopColor="#43b4ca" />
                      <stop offset=".72" stopColor="#28e0b9" />
                      <stop offset=".97" stopColor="#19fb9b" />
                  </linearGradient>
                  <path
                      d="m15.9176 23.038-2.6413 2.7713c-.0574.0602-.1269.1082-.2041.141s-.1604.0497-.2446.0497h-12.520966c-.059744 0-.118187-.0171-.168147-.0491-.0499596-.0321-.0892609-.0777-.1130745-.1313-.02381372-.0536-.03110249-.1129-.02097081-.1705.01013171-.0576.03724251-.111.07800141-.1538l2.6432769-2.7713c.05726-.06.12651-.1079.20346-.1407s.15996-.0498.2439-.05h12.52032c.0597 0 .1182.0171.1681.0492.05.032.0893.0776.1131.1313.0238.0536.0311.1128.021.1704-.0102.0576-.0373.1111-.078.1538zm-2.6413-5.5807c-.0574-.0602-.1269-.1082-.2041-.141s-.1604-.0497-.2446-.0496h-12.520966c-.059744 0-.118187.017-.168147.0491-.0499596.0321-.0892609.0777-.1130745.1313-.02381372.0536-.03110249.1128-.02097081.1704.01013171.0576.03724251.1111.07800141.1538l2.6432769 2.7714c.05726.06.12651.1079.20346.1407s.15996.0498.2439.0499h12.52032c.0597 0 .1182-.017.1681-.0491.05-.0321.0893-.0777.1131-.1313s.0311-.1128.021-.1704c-.0102-.0576-.0373-.1111-.078-.1538zm-12.969666-1.9906h12.520966c.0842 0 .1674-.0169.2446-.0497s.1467-.0808.2041-.141l2.6413-2.7713c.0407-.0428.0678-.0962.078-.1538.0101-.0576.0028-.1169-.021-.1705s-.0631-.0992-.1131-.1313c-.0499-.032-.1084-.0491-.1681-.0491h-12.52032c-.08394.0001-.16695.0171-.2439.0499s-.1462.0807-.20346.1408l-2.6425955 2.7713c-.0407196.0427-.0678184.0961-.07797306.1536-.01015467.0576-.00292373.1168.02080606.1703.0237297.0536.0629266.0993.1127835.1314.049857.0321.108207.0492.167893.0494z"
                      fill="url(#a)"
                  />
                  <g fill="currentColor">
                      <path d="m25.16 26v-5.6h3.26c2.82 0 5.12-1.16 5.12-4.2 0-2.96-2.2-4.2-5.12-4.2h-5.88v14zm0-11.78h3.26c1.72 0 2.42.76 2.42 1.98s-.74 1.98-2.42 1.98h-3.26z" />
                      <path d="m37.7172 26.36c1.68 0 2.68-.74 3.2-1.7-.06.32-.1.62-.1.94v.4h2.26v-5.74c0-2.74-1.2-4.34-4.18-4.34-2.52 0-4.18 1.44-4.34 3.48h2.52c.1-1.02.82-1.66 1.96-1.66 1.04 0 1.6.6 1.6 1.28 0 .48-.28.76-1.08.88l-1.4.18c-2.1.28-3.8 1.04-3.8 3.24 0 1.92 1.66 3.04 3.36 3.04zm.66-1.8c-.86 0-1.54-.48-1.54-1.34 0-.88.78-1.28 1.92-1.48l.8-.16c.6-.1.94-.22 1.16-.42v1.06c0 1.38-1.04 2.34-2.34 2.34z" />
                      <path d="m48.9283 30.08 5.14-13.84h-2.56l-1.98 6.3c-.1.34-.22.7-.3 1.16-.1-.46-.2-.82-.32-1.16l-2.08-6.3h-2.74l3.82 9.68-1.58 4.16z" />
                  </g>
              </svg>
            </div>
          </div>
        </div>
        <div>{roundedSol}</div>
      </div>
    );
  }
}

export default PurchaseView;
