import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/contact';
import Productpage from './pages/Productpage';
import Blogpage from './pages/blogpage';
import Notfoundpage from './pages/Notfoundpage';

// যদি sarver side randering করা হয় তাহলে যদি <BrowserRouter/> ব্যবহার করা হয় 
//তাহলে অবশ্যই সার্ভার সাইট কনফিগারেশন file  handle করতে হবে for your currect routing
// আর যদি <HashRauter/> ব্যবহার করা হয় তাহলে sarver side randering এর জন্য  আলাদা করে সার্ভারের কোন configaration file 
// used করতে হবে না । 

// HTML 5 HISTORY API একটা HTML programing interface যেটা দিয়ে browser webpage go and back হয়। 
// যা দিয়ে পরের পেইজে যায় এবং back করলে আগের পেইজে চলে আসে । 

// <HashRouter/> html 5 er history api use kore na and <browserRouter/> html 5 er history api use kore

// server manage korar jonno <hashRouter/> e sarver side randering er jonno kono configaretion file mamage 
//korar dorkar nai  
// but <browserRouter/> use korle sarver side randering er jonno config file manage korte hobe. 

//react application zodi linux sarver er modde host hora hoy tokhon react application build korar 
//pore tar যে root directory ase sekhane akta .htaccess file দিয়ে দিতে হয়। 
// find .htmlaccess file on google go any browser and serch ".htaccess file for react router dom"
//react router dom er jonno .htaccess file toiri kore application ta যে directory te diploy 
// korsen সেই directory te দিয়ে দিয়ে হয় । 



const App = () => {
  return (
    <div>
      <HashRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/blog' element={<Blogpage/>}/>
            <Route path='/product/:productId/:productName' element={<Productpage/>}/>
            <Route path='*' element={<Notfoundpage/>}/>
          </Routes>
      </HashRouter>
    </div>
  );
};

export default App;