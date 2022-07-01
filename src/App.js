// import logo from './logo.svg';
import './App.css';
import Heading from './components/Heading';
import Navigation from './components/Navigation';
import Upcoming from './pages/upcoming';
import { useEffect, useState } from 'react';
import { callAPI } from './utils/apiCaller';

const query = `
query GetLearnWithJasonEpisodes($now: DateTime!) {
  allEpisode(limit: 10, sort: {date: ASC}, where: {date: {gte: $now}}) {
    date
    title
    guest {
      name
      twitter
    }
    description
  }
}
`;

const newQuery = `
  newSchedule(type: "All", status:"upcoming", page:1){
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


function App() {
  const [type, setType] = useState('All');
  const [status, setStatus] = useState('upcoming');

  useEffect(() => {
    // callAPI('post', body);
  })

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
        <Upcoming setType={setType} />
      </div>
    </main>

  );
}

export default App;
