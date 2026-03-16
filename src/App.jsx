import gitIcon from './assets/GitHub_Invertocat_White.png'

function App() {
  return (
  <>
    <div className = "container">
      <div className = "name">
        <h3>Max Hunt</h3>
        <p><a href = "mailto:hi@maxjh.dev">hi@maxjh.dev</a></p>
      </div>
      <a href = "https://github.com/tastefulblues">
      <img src = {gitIcon} className = "git"/>
      </a>

    </div>
    <hr></hr>
    <div className = "bio">
      <p>
        Currently a student at the University of Utah,
        based in Salt Lake City. Thanks for stopping by.
      </p>
    </div>
    <hr></hr>
    <div className = "bio">
      Find some info below.
    </div>
  </>  
  )
}
export default App