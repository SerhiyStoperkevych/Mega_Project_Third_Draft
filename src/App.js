import React from 'react';
import './App.scss';
import Head from './components/head/Head';
import Body from './components/body/Body';
import Catalog from './components/body/secondary/catalog/Catalog';
import Genres from './components/body/secondary/genres/Genres';
import Preferences from './components/body/secondary/preferences/Preferences';
import Top from './components/body/secondary/top/Top';
import WholeList from './components/body/wholeList/WholeList';
import Main from './components/main/Main'
import { AppProvider } from './AppContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

function App() {
    return (
        <AppProvider>
            <Router>
                <ScrollToTop />
                <div className="App">
                    <Head />
                    <Routes>
                        <Route path="/catalog" element={<Catalog />} />
                        <Route path="/genres" element={<Genres />} />
                        <Route path="/preferences" element={<Preferences />} />
                        <Route path="/top" element={<Top />} />
                        <Route path="/wholeList" element={<WholeList />} />
                        <Route path="/main" element={<Main />} />
                        <Route path="/" element={<Body />} />
                    </Routes>
                </div>
            </Router>
        </AppProvider>
    );
}

export default App;
