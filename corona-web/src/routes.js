import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './components/Layout'

export default function routes() {
    return (
        <Layout>
            <HashRouter>
                <Switch>
                    <Route component={Home}></Route>
                </Switch>
            </HashRouter>
        </Layout>
    )
}
