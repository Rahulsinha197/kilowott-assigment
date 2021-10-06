import "./App.scss";
import { lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const Users = lazy(() => import("./components/Users.js"));
const Posts = lazy(() => import("./components/Posts.js"));
const Comments = lazy(() => import("./components/Comments.js"));

function App() {
  return (
    <div className="App">
      <Suspense fallback="...loading">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Users} />
            <Route exact path="/post/:id" component={Posts} />
            <Route exact path="/post/comments/:id" component={Comments} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
