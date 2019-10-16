import './psp.scss'

import React from "react";
import styled from 'styled-components'

// load components
import Search from '../../components/search'
import Filters from '../../components/filters.js';
import ProductList from '../../components/product-list.js'

// @ts-ignore
const MainContainerStyle = styled.div`
  color: #000;
  font-family: Verdana, Geneva, Tahoma, sans-serif
`;

const PSP = () => {
    return (
        <MainContainerStyle>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-3 col-lg-3">
                        <Filters />
                    </div>
                    <div className="col-sm-12 col-md-9 col-lg-9">
                        <Search />
                        <ProductList />
                    </div>
                </div>
            </div>
        </MainContainerStyle>
    )
}

export default PSP
