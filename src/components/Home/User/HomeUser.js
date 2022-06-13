import React from 'react';
import Header from '../../Header/Header';
import Toolbar from '../Toolbar/Toolbar';
import { Wrapper } from './HomeUser.styles';
import Swipper from '../Swipper/Swipper';
import NewsHot from '../NewsHot/NewsHot';
import NewsOfDanhMuc from '../NewsOfDanhMuc/NewsOfDanhMuc';
import Footer from '../../Footer/Footer';
const HomeAdmin = ()=>(
    <Wrapper>
        <Header/>        
        <Toolbar/>
        <Swipper/>
        <NewsHot/>
        <NewsOfDanhMuc/>
        <Footer/>
    </Wrapper>
    
);


export default HomeAdmin;