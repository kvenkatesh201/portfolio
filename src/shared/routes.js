import Home from '../client/components/home'
import About from '../client/components/about'
import Quotes from '../client/components/quotes'

const routes =[
    {
        path:'/',
        exact: true,
        component: Home
    },
    {
        path:'/about',
        exact: true,
        component: About
    },
    {
        path:'/quotes',
        exact: true,
        component: Quotes
    }
]

export default routes;