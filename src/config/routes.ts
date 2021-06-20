import IRoute from '../interfaces/route';
import AboutPage from '../components/About';

import LessonSetup from '../components/Setup#20';

const routes: IRoute[] = [
    {
        path: '/about',
        name: 'About Page',
        component: AboutPage,
        exact: true
    },
    {
        path: '/nobs20',
        name: 'BSTS',
        component: LessonSetup,
        exact: true
    },
    {
        path: '/about/:number',
        name: 'About Page',
        component: AboutPage,
        exact: true
    },
]

export default routes;