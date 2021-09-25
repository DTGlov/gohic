import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import * as ROUTES from './constants/routes';
import Test from './pages/Test';

const HomePage=lazy(()=>import('./pages/Home'))

function App() {
  return (
    <Router>
      <Suspense
        fallback={
          <div className="h-screen flex justify-center items-center">
           <h1 className="text-5xl font-Poppins">Loading.....</h1>
          </div>
      }
      >
        <Switch>
          <Route exact path={ROUTES.HOMEPAGE}>
            <Header/>
            <HomePage />
          </Route>
          <Route path="/test" component={ Test}/>
        </Switch>
      </Suspense>
   </Router>
  );
}

export default App;
