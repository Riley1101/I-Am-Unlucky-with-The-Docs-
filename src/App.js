import React, { lazy, Suspense, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import ThemeContext from './components/ContextTest/context'


const HigherOrderTest = lazy(() => import('./components/higherorder'))
const A = lazy(() => import('./components/ContextTest'))
const HOCWithAuth = lazy(() => import('./components/higherorder/auth'))
const Memo = lazy(() => import('./components/useMemo'))


function App() {
  const [auth, setAuth] = useState(false)
  return (
    <>
      <Suspense fallback={<h1>Loading ....</h1>}>

        <Router>
          <ul>
            <li><Link to='context'>Context </Link></li>

            <li>
              HOC
              <ul>
                <li><Link to='higherorder'>HigherOrderTest with loader</Link></li>
                <li><Link to='higherorderAuth'>HigherOrderTest with auth</Link>
                  <ul>
                    <li onClick={() => setAuth(!auth)}>{auth ? <>Deauthenticate</> : <>Authenticate</>}</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li><Link to='memo'>UseMemo </Link></li>
          </ul>



          <Switch>
            <Route path="/context" exact={true}>
              <ThemeContext.Provider value="I am value from context">
                <A />
              </ThemeContext.Provider>
            </Route>

            <Route path="/higherorder" exact={true}>
              <HigherOrderTest />
            </Route>
            <Route path="/higherorderAuth" exact={true}>
              <HOCWithAuth isAuthenticated={auth} optional={'hola optional'} />
            </Route>
            <Route path="/memo" exact={true}>
              <Memo />
            </Route>
          </Switch>
        </Router>

      </Suspense>
    </>
  );
}

export default App;
