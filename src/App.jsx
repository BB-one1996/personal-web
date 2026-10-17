import Footer from "./components/Footer.jsx"
import Header from "./components/Header.jsx"
import Home from "./pages/Home.jsx"

function App() {
  return (
    <div className="bg-canvas-bg text-on-surface antialiased min-h-screen">
      <Header />
      <main className="w-full pt-14 min-h-screen">
        <Home />
      </main>
      <Footer />
    </div>
  )
}

export default App
