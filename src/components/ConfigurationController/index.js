// Write your code here
import ConfigurationContext from '../../Context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavBar,
        showRightNavBar,
        onToggleShowContent,
        onToggleShowLeftNavBar,
        onToggleShowRightNavBar,
      } = value

      const onChangeContent = () => {
        onToggleShowContent()
      }

      const onChangeLeftNavBar = event => {
        onToggleShowLeftNavBar(event.target.value)
      }

      const onChangeRightNavBar = event => {
        onToggleShowRightNavBar(event.target.value)
      }

      return (
        <div className="configuration-control-container">
          <div className="responsive-control-container">
            <h1 className="layout-heading">Layout</h1>
            <div className="checkbox-container">
              <div className="checkbox-1">
                <input
                  type="checkbox"
                  onChange={onChangeContent}
                  checked={showContent}
                  id="content"
                />
                <label className="label-text" htmlFor="content">
                  Content
                </label>
              </div>

              <div className="checkbox-1">
                <input
                  type="checkbox"
                  onChange={onChangeLeftNavBar}
                  checked={showLeftNavBar}
                  id="leftBar"
                />
                <label className="label-text" htmlFor="leftBar">
                  Left NavBar
                </label>
              </div>

              <div className="checkbox-1">
                <input
                  type="checkbox"
                  onChange={onChangeRightNavBar}
                  checked={showRightNavBar}
                  id="rightBar"
                />
                <label className="label-text" htmlFor="rightBar">
                  Right NavBar
                </label>
              </div>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
