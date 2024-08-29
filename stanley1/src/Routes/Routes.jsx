import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import MyLayout from '../Layout/MyLayout'
import Dashboard from '../Components/Dashboard'
const AppRoutes = () => {
    return (
        <BrowserRouter>
          <Routes>
            <Route
              path='/'
              element={
                
                  <MyLayout />
                
              }
            >

              <Route path='/Dashboard' element={<Dashboard />} />
            </Route>
          </Routes>
        </BrowserRouter>
      );
}

export default AppRoutes;