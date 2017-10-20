const execa = require('execa')
const jetpack = require('fs-jetpack')
const tempy = require('tempy')

const IGNITE = 'ignite'
const APP = 'IntegrationTest'
const BOILERPLATE = `${__dirname}/..`
console.warn(BOILERPLATE)
// calling the ignite cli takes a while
jasmine.DEFAULT_TIMEOUT_INTERVAL = 600000

describe('without a linter', () => {
  beforeAll(async () => {
    // creates a new temp directory
    process.chdir(tempy.directory())
    await execa(IGNITE, ['new', APP, '--min', '--skip-git', '--no-lint', '--boilerplate', BOILERPLATE])
    process.chdir(APP)
  })

  test('does not have a linting script', async () => {
    expect(jetpack.read('package.json', 'json')['scripts']['lint']).toBe(undefined)
  })
})

describe('generators', () => {
  beforeAll(async () => {
    // creates a new temp directory
    process.chdir(tempy.directory())
    await execa(IGNITE, ['new', APP, '--min', '--skip-git', '--boilerplate', BOILERPLATE])
    process.chdir(APP)
  })

  test('generates a component', async () => {
    await execa(IGNITE, ['g', 'component', 'Test'], { preferLocal: false })
    expect(jetpack.exists('App/Components/Test.tsx')).toBe('file')
    expect(jetpack.exists('App/Components/Styles/TestStyle.ts')).toBe('file')
    const lint = await execa('npm', ['-s', 'run', 'lint'])
    expect(lint.stderr).toBe('')
  })

  test('generate listview of type row works', async () => {
    await execa(IGNITE, ['g', 'list', 'TestRow', '--type=Row', '--codeType=listview', '--dataType=Single'], { preferLocal: false })
    expect(jetpack.exists('App/Containers/TestRow.tsx')).toBe('file')
    expect(jetpack.exists('App/Containers/Styles/TestRowStyle.ts')).toBe('file')
    const lint = await execa('npm', ['run', 'lint'])
    expect(lint.stderr).toBe('')
  })

  test('generate flatlist of type row works', async () => {
    await execa(IGNITE, ['g', 'list', 'TestFlatRow', '--type=Row', '--codeType=flatlist', '--dataType=Single'], { preferLocal: false })
    expect(jetpack.exists('App/Containers/TestFlatRow.tsx')).toBe('file')
    expect(jetpack.exists('App/Containers/Styles/TestFlatRowStyle.ts')).toBe('file')
    const lint = await execa('npm', ['run', 'lint'])
    expect(lint.stderr).toBe('')
  })

  test('generate listview of sections works', async () => {
    await execa(IGNITE, ['g', 'list', 'TestSection', '--type=Row', '--codeType=listview', '--dataType=Sectioned'], { preferLocal: false })
    expect(jetpack.exists('App/Containers/TestSection.tsx')).toBe('file')
    expect(jetpack.exists('App/Containers/Styles/TestSectionStyle.ts')).toBe('file')
    const lint = await execa('npm', ['run', 'lint'])
    expect(lint.stderr).toBe('')
  })

  test('generate flatlist of sections works', async () => {
    await execa(IGNITE, ['g', 'list', 'TestFlatSection', '--type=Row', '--codeType=flatlist', '--dataType=Sectioned'], { preferLocal: false })
    expect(jetpack.exists('App/Containers/TestFlatSection.tsx')).toBe('file')
    expect(jetpack.exists('App/Containers/Styles/TestFlatSectionStyle.ts')).toBe('file')
    const lint = await execa('npm', ['run', 'lint'])
    expect(lint.stderr).toBe('')
  })

  test('generate listview of type grid works', async () => {
    await execa(IGNITE, ['g', 'list', 'TestGrid', '--type=Grid', '--codeType=listview', '--dataType=Single'], { preferLocal: false })
    expect(jetpack.exists('App/Containers/TestGrid.tsx')).toBe('file')
    expect(jetpack.exists('App/Containers/Styles/TestGridStyle.ts')).toBe('file')
    const lint = await execa('npm', ['run', 'lint'])
    expect(lint.stderr).toBe('')
  })

  test('generate redux works', async () => {
    await execa(IGNITE, ['g', 'redux', 'Test'], { preferLocal: false })
    expect(jetpack.exists('App/Redux/TestRedux.tsx')).toBe('file')
    const lint = await execa('npm', ['run', 'lint'])
    expect(lint.stderr).toBe('')
  })

  test('generate container works', async () => {
    await execa(IGNITE, ['g', 'container', 'Container'], { preferLocal: false })
    expect(jetpack.exists('App/Containers/Container.tsx')).toBe('file')
    expect(jetpack.exists('App/Containers/Styles/ContainerStyle.ts')).toBe('file')
    const lint = await execa('npm', ['run', 'lint'])
    expect(lint.stderr).toBe('')
  })

  test('generate saga works', async () => {
    await execa(IGNITE, ['g', 'saga', 'Test'], { preferLocal: false })
    expect(jetpack.exists('App/Sagas/TestSagas.tsx')).toBe('file')
    const lint = await execa('npm', ['run', 'lint'])
    expect(lint.stderr).toBe('')
  })

  test('generate screen works', async () => {
    await execa(IGNITE, ['g', 'screen', 'Test'], { preferLocal: false })
    expect(jetpack.exists('App/Containers/TestScreen.tsx')).toBe('file')
    expect(jetpack.exists('App/Containers/Styles/TestScreenStyle.ts')).toBe('file')
    const lint = await execa('npm', ['run', 'lint'])
    expect(lint.stderr).toBe('')
  })
})
