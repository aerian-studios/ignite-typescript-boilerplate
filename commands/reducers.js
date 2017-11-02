// @cliDescription  Generates a action/creator/reducer set for Redux.

module.exports = async function (context) {
  // grab some features
  const { parameters, ignite, strings, print } = context
  const { isBlank, pascalCase } = strings
  const config = ignite.loadIgniteConfig()

  // validation
  if (isBlank(parameters.first)) {
    print.info(`${context.runtime.brand} generate reducers <name>\n`)
    print.info('A name is required.')
    return
  }

  const name = pascalCase(parameters.first)
  const props = { name }

  const jobs = [{ template: `reducers.ejs`, target: `App/Reducers/${name}Reducers/index.tsx` }]
  if (config.tests && config.tests !== 'none') {
    jobs.push({
      template: `reducers-test-${config.tests}.ejs`,
      target: `App/Reducers/${name}Reducers/${name}ReducersTest.tsx`
    })
  }

  await ignite.copyBatch(context, jobs, props)
}
