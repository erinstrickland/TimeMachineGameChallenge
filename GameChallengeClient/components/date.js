import React from 'react'
import styled from 'styled-components'
import { months } from 'moment';


//Completing a game moves you 1 month ahead

const Container = styled.div`
  text-align: center;
  padding-top: 25px;
  display: inline;
  `

const ShowDate = ({date}) => {

    return <Container>
    <h2>Today's date is </h2>
    {date.format('MMMM D, YYYY')}
    <h3>You can play any game released on or before today</h3>
  </Container>
}

export default ShowDate