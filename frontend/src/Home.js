import React from 'react'
import './Home.css'
import Product from './Product'
import { Link } from 'react-router-dom'
import { useStateValue } from './StateProvider'
function Home() {
  const [{ product }, dispatch] = useStateValue()

  return (
    <div className="home">
      <div className="home_container">

        <img className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" />


        <div className="home_row">
          {
            product.map(item => (
              <Product key={item._id} id={item._id} title={item.title} price={item.price}
                image={item.image} rating={item.rating}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Home
