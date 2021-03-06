import React from 'react'
import { Route } from 'react-router'
import { Grid, GridColumn, GridRow } from 'semantic-ui-react'
import CartDetail from '../pages/CartDetail'
import ProductDetail from '../pages/ProductDetail'
import ProductList from '../pages/ProductList'
import Categories from './Categories'

const Dashboard = () => {
    return (
        <div>
            <Grid>
                <GridRow>
                    <GridColumn width={4}>
                        <Categories/>
                    </GridColumn>
                    <GridColumn width={12}>
                   <Route exact path="/" component={ProductList} />
                   <Route exact path="/products" component={ProductList} />
                   <Route path="/products/:name" component={ProductDetail} />
                   <Route path="/cart" component={CartDetail} />
                    </GridColumn>
                </GridRow>
            </Grid>
           
          
        </div>
    )
}

export default Dashboard
