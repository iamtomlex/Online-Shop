import Banner from '../components/banner/Banner'
import Products from '../components/products/Products'
import FreeDelivery from '../components/sections/FreeDelivery'
import Clearance from '../components/sections/Clearance'
import Fashion from '../components/sections/Fashion'

const Home = () => {
  return (
    <>
      <Banner />
      <Products />
      <FreeDelivery/>
      <Clearance/>
      <Fashion/>
    </>
  )
}

export default Home
