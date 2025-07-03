import Navbar from './components/layout/navbar';
import Footer from './components/layout/footer';
import Home from './pages/home';
import './App.css';

function App() {
  return (
    <div style={{ 
      fontFamily: 'Arial, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh'
    }}>
      <Navbar />
      <main style={{ 
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px'
      }}>
        <Home />
      </main>
      <Footer />
    </div>
  );
}
export default App;