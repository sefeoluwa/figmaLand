import { Navbar, Hero, Footer, Gallery, Features, Try, Contents, Partners, Testimonials } from './components'


function App() {
 

  return (
    <div className='m-0 p-0 box-border bg-black text-white'>
     <Navbar />
     <Hero />
     <Features />
     <Contents />
     <Gallery />
     <Partners />
     <Testimonials />
     <Try />
     <Footer />
    </div>
  )
}

export default App
