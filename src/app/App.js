import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './shared/hocs/Layout';
import Home from '../home/Home';

const App = () => (
    <div>
      <Router>
          <Layout>
              <Routes>
                  <Route path='/' element={<Home/>} />
              </Routes>
          </Layout>
      </Router>
    </div>

);

export default App;