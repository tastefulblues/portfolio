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
          <liv>Full-stack web app that automatically fetches Hacker News top stories every hour, 
            runs sentiment analysis on each title, and visualizes trends in a live dashboard. 
            Built with Node.js, Express, PostgreSQL, and React.
          </liv>
        </ul>
        <a href = "https://hn-sentiment.vercel.app/" target = "_blank">
        <img src = {hnIcon} className = "hnIcon"/>
        </a>
      </div>
    </div>
  </>  
  )
}
export default App