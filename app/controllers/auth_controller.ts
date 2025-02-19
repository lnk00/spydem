import type { HttpContext } from '@adonisjs/core/http'

export default class AuthController {
  async render_signin({ inertia }: HttpContext) {
    return inertia.render('auth/signin')
  }

  async render_register({ inertia }: HttpContext) {
    return inertia.render('auth/register')
  }

  async register({ request, response }: HttpContext) {
    console.log(request.body())

    response.redirect().toPath('/')
  }
}
