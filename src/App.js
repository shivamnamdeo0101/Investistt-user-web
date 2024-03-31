import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import {HomePage, AboutUsPage, ContactUsPage, NewsPage, PropertiesPage, SignInPage} from "./pages";
import {RouteTypes} from "./contants";
import {Header} from './components/ui';
function App() {
  return (
    <div className='website'>
      <div className='App'>
      <Header />
      <Routes>
        <Route path={RouteTypes.HomePage} element={ <HomePage/> } />
        <Route path={RouteTypes.AboutUsPage} element={ <AboutUsPage/> } />
        <Route path={RouteTypes.ContactUsPage} element={ <ContactUsPage/> } />
        <Route path={RouteTypes.NewsPage} element={ <NewsPage/> } />
        <Route path={RouteTypes.PropertiesPage} element={ <PropertiesPage/> } />
        <Route path={RouteTypes.SignInPage} element={ <SignInPage/> } />
      </Routes>
      </div>
    </div>
  );
}

export default App;
