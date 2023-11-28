import React from 'react'

const configurationContext = React.createContext({
  showContent: true,
  showLeftNavBar: true,
  showRightNavBar: true,
  onToggleShowContent: () => {},
  onToggleShowLeftNavBar: () => {},
  onToggleShowRightNavBar: () => {},
})

export default configurationContext
