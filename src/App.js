// import logo from './logo.svg';
import './App.css';
import Heading from './components/Heading';
import Navigation from './components/Navigation';
import Upcoming from './pages/upcoming';



function App() {
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
          links={['Upcoming', 'Live', 'Results']}
        />
      </div>
      <div className='my-4'>
        <Upcoming />
      </div>
    </main>

  );
}

export default App;
