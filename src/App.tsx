import GlobalStyles from './GlobalStyles';
import Navbar from './components/navbar/navbar';
import Courses from './components/courses/courses';
import Footer from './components/footer/footer';

function App() {
  return (
    <>
      <Navbar />
      <Courses />
      <Footer />
      <GlobalStyles />
    </>
  );
}

export default App;
