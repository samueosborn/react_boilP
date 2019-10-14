import React, { Suspense, useEffect, lazy } from "react";
import { Router } from "@reach/router";
import { useConnect } from "../context";
let Home = lazy(() => import("../components/Home.js"));
let Login = lazy(() => import("../components/Login.js"));
import Loading from "../components/common/Loading";

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Router className="app">
        <Home path="/" />
        <Login path="/login" />
      </Router>
    </Suspense>
  );
};

export default useConnect()(App);
