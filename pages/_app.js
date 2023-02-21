import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <main>
        <Component {...pageProps} />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
    ) 
}

export default MyApp
