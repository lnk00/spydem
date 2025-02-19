/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const DashboardController = () => import('#controllers/dashboard_controller')
const AuthController = () => import('#controllers/auth_controller')

router.get('/', [DashboardController, 'index'])
router.get('/auth/signin', [AuthController, 'render_signin'])
router.get('/auth/register', [AuthController, 'render_register'])
router.post('/auth/register', [AuthController, 'register'])
