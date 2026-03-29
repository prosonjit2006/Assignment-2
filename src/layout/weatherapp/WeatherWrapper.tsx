import { Outlet } from "react-router-dom"

const WeatherWrapper = () => {
  return (
    <>
        <main>
            <Outlet />
        </main>
    </>
  )
}

export default WeatherWrapper