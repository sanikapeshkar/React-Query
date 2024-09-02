import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { HomePage } from "./componenets/Home.page.jsx";
import { SuperHeroes } from "./componenets/SuperHeros.page.jsx";
import { RQSuperHeros } from "./componenets/RQSuperHeros.page.jsx";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/super-heroes">Traditional Super Heroes</Link>
              </li>
              <li>
                <Link to="/rq-super-heroes">RQ Super Heroes</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/super-heroes" element={<SuperHeroes />} />
            <Route path="/rq-super-heroes" element={<RQSuperHeros />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
