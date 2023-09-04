import React from "react";
 
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 
import RecordList from "./components/recordList";
import Create from "./components/create";
 
const App = () => {
 return (
   <div>
     <Routes>
       <Route exact path="/" element={<RecordList />} />
       <Route path="/create" element={<Create />} />
     </Routes>
   </div>
 );
};
 
export default App;