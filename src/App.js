import './App.css';
import { HashRouter as Router } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { DataStore } from '@aws-amplify/datastore';
import { Members, PerformancesMembers, Performances } from './models';

import Header from './pages/Header';
import Footer from './pages/Footer';
import About from './pages/About';
import PastPerf from './pages/PastPerf';
import Member from './pages/Members';
import Home from './pages/Home';
import FAQ from './pages/FAQ';
import LivePerformance from './pages/LivePerformance';
import Amplify from 'aws-amplify'
import awsconfig from './aws-exports'
Amplify.configure(awsconfig)
function App() {
  const [performances, setPerformances] = useState([]);
  const [members, setMembers] = useState([]);
  useEffect(() => {
    const fetchMembers = async () => {
      const membersPerformances = JSON.parse(JSON.stringify(await DataStore.query(PerformancesMembers)))
      let members = JSON.parse(JSON.stringify(await DataStore.query(Members)));
      let performances = JSON.parse(JSON.stringify(await DataStore.query(Performances)));
      for (const relationship of membersPerformances) {
        const memberIndex = members.findIndex(req => req.id === relationship.members.id);
        const performanceIndex = performances.findIndex(req => req.id === relationship.performances.id);
        members[memberIndex].performances = members[memberIndex].performances || [];
        members[memberIndex].performances.push(relationship);
        performances[performanceIndex].members = performances[performanceIndex].members || [];
        performances[performanceIndex].members.push(relationship);
      }
      setMembers(members);
      setPerformances(performances);
    }
    fetchMembers()
  }, [])

  return (
    <Router >
      <div data-testid="App">
        <Header />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="members" element={<Member members={members} />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="performances" element={<PastPerf performances={performances} />} />
          <Route path="wushulive" element={<LivePerformance />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
