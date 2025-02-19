import type { HttpContext } from '@adonisjs/core/http'

export default class AuthController {
  async signin({ inertia }: HttpContext) {
    return inertia.render('auth/signin')
  }

  async register({ inertia }: HttpContext) {
    return inertia.render('auth/register')
  }
}
