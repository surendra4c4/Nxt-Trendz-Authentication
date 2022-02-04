// Write your JS code here
import Header from '../Header'

import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <div>
        <h1 className="heading">Clothes That Get You Noticed</h1>
        <p className="paragraph">
          Fashion is part of the daily air and it does not quite help that it
          change all the time. Clothes have always been a maker of the era and
          we are in a revolution. Your fashion makes you been seen and heard the
          way you are. So, celebrate the seasons new and exciting fashion in
          your own way.
        </p>
        <button type="button" className="shopNow-btn">
          Shop Now
        </button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        alt="clothes that get you noticed"
        className="home-img"
      />
    </div>
  </>
)

export default Home
