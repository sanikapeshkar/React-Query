import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { HomePage } from "./componenets/Home.page.jsx";
import { SuperHeroes } from "./componenets/SuperHeros.page.jsx";
import { RQSuperHeros } from "./componenets/RQSuperHeros.page.jsx";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RqSuperHero } from "./componenets/RQSuperHero.jsx";
import InfiniteScroll from "./componenets/InfiteScroll.jsx";

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
              <li>
                <Link to="/scroll"><button>Try infinite scroll</button></Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/rq-super-heroes/:heroId" element={<RqSuperHero />} />
            <Route path="/super-heroes" element={<SuperHeroes />} />
            <Route path="/rq-super-heroes" element={<RQSuperHeros />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/scroll" element={<InfiniteScroll />} />
          </Routes>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
