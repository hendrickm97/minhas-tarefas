import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  list-style: none;
  text-decoration: none;
}
`
export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`

export default EstiloGlobal

export const MainContainer = styled.main`
  padding: 0 40px;
  height: 80vh;
  overflow-y: scroll;
`
export const Titulo = styled.p`
  font-weight: bold;
  font-size: 18px;
  margin-top: 40px;
  margin-bottom: 40px;
  display: block;
`
export const Campo = styled.input`
  padding: 8px;
  border-radius: 8px;
  border-color: #666666;
  font-weight: bold;
  background-color: #fff;
  color: #666666;
  width: 100%;
`
export const Botao = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: #2f3640;
  border-radius: 8px;
  margin-right: 8px;
`
export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`
