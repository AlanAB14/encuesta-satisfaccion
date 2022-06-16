import React from 'react'
import {  useParams } from 'react-router-dom'
import { Encuesta } from './components/ui/Encuesta'
import { Header } from './components/ui/Header'

export const EncuestaApp = () => {

  
  let params = useParams();
  let emailParam = params.email


  return (    
    <>
            <Header />
            <Encuesta  email={emailParam} />
    </>
  )
}
