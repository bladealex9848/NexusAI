import React from 'react'
import { AppInfo } from './app-info'

type AppInfoContainerProps = {
  location: 'sidebar' | 'header'
}

const AppInfoContainer: React.FC<AppInfoContainerProps> = async ({
  location
}) => {
  return (
    <div
      className={location === 'header' ? 'block sm:hidden' : 'hidden sm:block'}
    >
      <AppInfo location={location} />
    </div>
  )
}

export default AppInfoContainer
