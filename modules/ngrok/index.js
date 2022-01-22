// eslint-disable-next-line import/default
import ngrok from 'ngrok'
import chalk from 'chalk'

export default function () {
  const { nuxt } = this
  if (!nuxt.options.dev) return

  let url;

  const options = nuxt.options.ngrok || {}
  const token = process.env.NGROK_TOKEN || options.token

  nuxt.hook('listen', async ( _server, { port } ) => {
    
    if(token) {
      await ngrok.authtoken(token)
    }
    
    url = await ngrok.connect(port)

    nuxt.options.publicRuntimeConfig.ngrok = { url }

    nuxt.options.cli.badgeMessages.push(`Public URL: ${chalk.underline.magenta(url)}`)
  })

  nuxt.hook('close', _ => {
    url && ngrok.disconnect()
  })
}