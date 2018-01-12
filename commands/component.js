// @cliDescription  Generates a stateless component, styles, and an optional test.

module.exports = async function (context) {
  // grab some features
  const { parameters, strings, print, ignite } = context
  const { pascalCase, isBlank } = strings
  const config = ignite.loadIgniteConfig()
  const { tests } = config

  // validation
  if (isBlank(parameters.first)) {
    print.info(`${context.runtime.brand} generate component <name>\n`)
    print.info('A name is required.')
    return
  }

  // read some configuration
  const name = pascalCase(parameters.first)
  const props = { name }
  const jobs = [
    {
      template: 'component.ejs',
      target: `App/Components/${name}/${name}.tsx`
    },
    {
      template: 'component-style.ejs',
      target: `App/Components/${name}/${name}Style.ts`
    },
    {
      template: 'component-index.ejs',
      target: `App/Components/${name}/index.ts`
    },
    {
      template: 'component-story.ejs',
      target: `App/Components/${name}/${name}.story.tsx`
    },
    tests === 'ava' &&
    {
      template: 'component-test-ava.ejs',
      target: `App/Components/${name}/${name}Test.tsx`
    },
    tests === 'jest' &&
    {
      template: 'component-test-jest.ejs',
      target: `App/Components/${name}/${name}Test.tsx`
    }
  ]

  await ignite.copyBatch(context, jobs, props)
}
