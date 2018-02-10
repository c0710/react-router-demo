import React from 'react'
import {BrowserRouter as Router } from 'react-router-dom'
import { Route, Link } from './Router/index'


const Home = () => (
  <h3>Home</h3>
)

const About = () => (
  <h3>About</h3>
)

const Topic = ({topicId}) => (
  <h3>{topicId}33</h3>
)

const Topics = (props) => {
  const match = props.match
  const items = [
    { name: 'Rendering with React', slug: 'rendering' },
    { name: 'Components', slug: 'components' },
    { name: 'Props v. State', slug: 'props-v-state' }
  ]
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        {items.map(({name, slug}) => (
            <li key={name}>
              <Link to={`${match.url}/${slug}`}>{name}</Link>
            </li>
          ))}
      </ul>
      {items.map(({name, slug}) => (
        <Route key={name} path={`${match.path}/${slug}`} render={() => (
          <Topic topicId={name} />
        )} />
      ))}
      <Route exact path={match.url} render={() => (
        <h3>Please select a topic</h3>
      )} />
    </div>
  )
}

const App = () => (
  <Router>
    <div className="App">
      {console.log(window.addEventListener)}
      <ul>
        <li><Link to="/">home</Link></li>
        <li><Link to="/about">about</Link></li>
        <li><Link to="/topics">topics</Link></li>
      </ul>

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
    </div>
  </Router>
)

export default App
