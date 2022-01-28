import React, { useState } from 'react';

import './App.css';
import MyLibraryTitle from './Atoms/MyLibraryTitle/MyLibraryTitle';
import { AppBar } from '@mui/material';
import AppBarWithCategories from './Organisms/AppBarWithCategories/AppBarWithCategories';
import MyAppBar from './Organisms/AppBar/MyAppBar';
import BookCard from './Molecules/BookCard/BookCard';
import GridOfBooks from './Organisms/GridOfBooks/GridOfBooks';
import MySearchBar from './Molecules/MySearchBar/MySearchBar';
import { SearchOrganism } from './Organisms/SearchOrganism/SearchOrganism';
import { SetUpKindle } from './Organisms/MyModal/SetUpKindle';
import { SentKindle } from './Organisms/MyModal/SentKindle';
import BookDetail from './Organisms/Bookdetail/Bookdetail';

function App() {

 
   
 
  return (
    <>

 <BookDetail bookName='The Grid' author='Matt Watkinson' caption='The Decision making tool for every business' image="grid.png" readTime='12-minute read' /> 





   
     
    </>
  );
}

export default App;
