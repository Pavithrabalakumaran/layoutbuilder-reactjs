// Write your code here
import ConfigurationContext from '../../Context/ConfigurationContext'

import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavBar, showRightNavBar} = value

      return (
        <div className="body-container">
          {showLeftNavBar ? (
            <div className="left-nav-bar">
              <h1 className="navbar-heading">Left Navbar Menu</h1>
              <ul className="list-items">
                <li className="item-1">Item 1</li>
                <li className="item-1">Item 2</li>
                <li className="item-1">Item 3</li>
                <li className="item-1">Item 4</li>
              </ul>
            </div>
          ) : null}

          {showContent ? (
            <div className="content-container">
              <h1 className="content-heading">Content</h1>
              <p className="content-description">
                Lorem ipsum dolor sit amet, consecteur adipiscing alit, sed do
                eiusmod tempor incididunt up labore et dolore magna alignua. Ut
                eium ad minimum vienam.
              </p>
            </div>
          ) : null}

          {showRightNavBar ? (
            <div className="left-nav-bar">
              <h1 className="navbar-heading">Right Navbar</h1>
              <div className="ad-box-container">
                <p className="ad-box">Ad 1</p>
                <p className="ad-box">Ad 2</p>
              </div>
            </div>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
