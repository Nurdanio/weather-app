import compose from 'compose-function'
import { withMantineProvider } from './withMantineProvider'
import { withRouter } from './withRouter'
import { withStrictMode } from './withStrictMode'

export const withHocs = compose(withMantineProvider, withRouter)
