// import logo from './logo.svg';
import './App.css';
import Heading from './components/Heading';
import Navigation from './components/Navigation';
import Upcoming from './pages/upcoming';
import { useEffect, useState } from 'react';
import { callAPI } from './utils/apiCaller';

function createQuery(type = "All", status = "upcoming") {
  const query = `
    newSchedule(type: ${type}, status:${status.toLowerCase()}, page:1){
      matches {
        teamsWinProbability
        matchScore
      }
      seriesID
      matchType
      seriesName
      seriesView
      league
      seriesAvailable
    }
`;
  return query;
}

function App() {
  const [type, setType] = useState('All');
  const [status, setStatus] = useState('upcoming');
  const [schedules, setSchedules] = useState([]);

  const setupAllSchedules = async (type, status) => {
    const body = {
      query: createQuery(type, status)
    };
    const data = await callAPI('post', body);
    setSchedules(data);
    
  }
  useEffect(() => {
    setupAllSchedules(type, status)
  }, [type, status])

  return (
    <main className='mx-auto max-w-3xl '>
      <div className='my-4 px-2'>
        <Heading>
          Schedule
        </Heading>
      </div>
      <div className='my-4'>
        <Navigation
          selectedLink="Upcoming"
          onChange={setStatus}
          links={['Upcoming', 'Live', 'Results']}
        />
      </div>
      <div className='my-4'>
        <Upcoming setType={setType} schedules={schedules} />
      </div>
    </main>

  );
}

export default App;
