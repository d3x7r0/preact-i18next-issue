/** @jsx h */
import { h } from 'preact'
import { I18nextProvider, Trans } from 'react-i18next'

import i18n from './i18n'

const MyWrapper = (props) => (
  <strong className="my-wrapper bar" {...props} />
)

const Foo = ({ name }) => (
  <Trans i18nKey="foo" values={{ name }}>
    Hello <MyWrapper title="name here">{name}</MyWrapper>
  </Trans>
)

const App = () => (
  <I18nextProvider i18n={i18n}>
    <h1>Title</h1>

    <p>
      <Foo name="Google" />
    </p>
  </I18nextProvider>
)

export default App
