import AppInfoContainer from './app-info-container'

export async function Sidebar() {
  return (
    <div className="h-screen p-2 fixed top-0 right-0 flex-col justify-center pb-24 hidden sm:flex">
      <AppInfoContainer location="sidebar" />
    </div>
  )
}
