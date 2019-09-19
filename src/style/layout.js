import styled from 'styled-components'

export const SiteLayout = styled.div`
  position: relative;
  padding-top: 72px;
  max-width: 1000px;
  margin: 0 auto;
  @media screen and (max-width: 1024px) {
    margin: 0 24px;
  }
`

export const Section = styled.section`
  margin: ${props => props.marginSection ? props.marginSection : "0px 24px" }
`