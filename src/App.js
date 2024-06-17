// import logo from './logo.svg';
import './App.css';
import './Style.css'
import AboutApp from './components/About';
import DoctorsList from './components/DoctorsList';
import Footer from './components/Footer';
import Header from './components/Header';
import QuotesSection from './components/QuotesSection';
import Subscribe from './components/Subscribe';

function App() {
  return (
    <div className="App bg-slate-100">
      <header className="text-center my-header text-slate-700">
        <Header />
      </header>
      <main className='w-full md:w-4/5 mx-auto'>
        <AboutApp />
        {/* <Home /> */}
        <QuotesSection/>
        <DoctorsList />
        <Subscribe />
        <Footer />
      </main>

    </div>
  );
}

export default App;
