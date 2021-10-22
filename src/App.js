import React  from 'react'
import  Navbar from './components/Navbar';
import Footer from './components/Footer';
import Routes from './components/Routes';

const App = () => {


    return (
        <div>
            <div className="bg-gray-300 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
                <Navbar/>
                <Routes/>
                <Footer/>
            </div>
        </div>
    )
}

export default App
