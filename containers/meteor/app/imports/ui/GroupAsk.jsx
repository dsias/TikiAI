import React   from 'react'

import TikiBar from './TikiBar'
import Auditor from './Auditor'
import Gallery from './Gallery'
import Testing from './Testing'

import Container from '@material-ui/core/Container'

const css =
{
  root :
  {
    padding : 0
  }
}

const GroupAsk = () =>
(
  <Container id="AppRoot" style={css.root}>
    <TikiBar id="TikiBar" />
    <Auditor id="Auditor" />
    <Gallery id="Gallery" />
  </Container>
)

export default GroupAsk