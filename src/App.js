import './App.css';
import Header from './components/Headers';
import Prototypes from './components/Prototypes';
import Orders from './components/Orders';
import Footer from './components/Footers';
import AppStateProvider from './providers/AppStateProvider';

function App() {
  return (
    <AppStateProvider>
      <Header />
      <div className='container'>
        <Prototypes/>
        <Orders />
        <Footer />
      </div>
    </AppStateProvider>
  );
}

export default App;
