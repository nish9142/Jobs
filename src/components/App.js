import React from "react";
import JobList from "./jobsList";
import AddJob from "./addJob";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <main>
        <Switch>
          <Route path="/" component={AddJob} exact />
          <Route path="/list" component={JobList} exact />
          {/* <Route path="/list/:jobId" component={Shop} /> */}
        </Switch>
      </main>
    </div>
  );
}

export default App;
