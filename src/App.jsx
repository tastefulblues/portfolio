import gitIcon from './assets/GitHub_Invertocat_White.png'
import hnIcon from './assets/hacker-news-s.png'
import Clock from './components/Clock'

function App() {
  return (
  <>
  <div className = "clockContainer">
  < Clock />
  </div>
    <div className = "container">
      <div className = "name">
        <h3>Max Hunt</h3>
        <p><a href = "mailto:hi@maxjh.dev">hi@maxjh.dev</a></p>
      </div>
      <a href = "https://github.com/tastefulblues" target = "_blank">
      <img src = {gitIcon} className = "gitIcon"/>
      </a>

    </div>

    <hr></hr>
    <div className = "bio">
      <p>
        Currently enrolled at the University of Utah,
        based in Salt Lake City. Thanks for stopping by.
      </p>
    </div>
    <hr></hr>

    <div className = "projects">
      <div className = "projectCard">
        <h4 className = "projectHead">Hacker News Sentiment Analysis</h4>
        <ul className = "a">
          <li>Full-stack web app that automatically fetches Hacker News top stories every hour, 
            runs sentiment analysis on each title, and visualizes trends in a live dashboard. 
            Built with Node.js, Express, PostgreSQL, and React.
          </li>
        </ul>
        <a href = "https://github.com/tastefulblues/hn-sentiment" target = "_blank" className = "projectLink">
        View on GitHub →
        </a>
      </div>

      <div className = "projectCard">
        <h4 className = "projectHead">Bitcoin Price Ticker</h4>
        <ul className = "a">
          <li>Arduino project that fetches the live Bitcoin price from CoinAPI
            over WiFi and displays it on an SSD1306 OLED screen, refreshing
            every 15 minutes. Built with C++ on an Arduino UNO R4 WiFi.
          </li>
        </ul>
        <a href = "https://github.com/tastefulblues/bitcoin_price" target = "_blank" className = "projectLink">
        View on GitHub →
        </a>
      </div>
    </div>
  </>  
  )
}
export default App