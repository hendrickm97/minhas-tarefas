import { useState, useEffect, ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'
import {
  Card,
  Titulo,
  Tag,
  Descricao,
  BarraAcoes,
  BotaoCancelarRemover
} from './styles'
import { BotaoSalvar, Botao } from '../../styles'

import { remover, editar, alterarStatus } from '../../store/reducers/tarefas'
import TarefaClass from '../../models/Tarefas'
import * as enums from '../../utils/enums/Tarefas'

type Props = TarefaClass

const Tarefa = ({ descricao, prioridade, status, titulo, id }: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [mensagem, setMensagem] = useState('')

  useEffect(() => {
    if (descricao.length > 0) {
      setMensagem(descricao)
    }
  }, [descricao])

  function alterarStatusTarefa(evento: ChangeEvent<HTMLInputElement>) {
    dispatch(alterarStatus({ id, finalizado: evento.target.checked }))
  }
  return (
    <Card>
      <label htmlFor={titulo}>
        <input
          type="checkbox"
          checked={status === enums.Status.CONCLUIDA}
          id={titulo}
          onChange={alterarStatusTarefa}
        />
        <Titulo>{titulo}</Titulo>
      </label>

      <Tag parametro="prioridade" prioridade={prioridade}>
        {prioridade}
      </Tag>
      <Tag parametro="status" status={status}>
        {status}
      </Tag>
      <Descricao
        disabled={!estaEditando}
        value={mensagem}
        onChange={(evento) => setMensagem(evento.target.value)}
      />
      <BarraAcoes>
        {estaEditando ? (
          <>
            <BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    descricao,
                    prioridade,
                    status,
                    titulo,
                    id
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </BotaoSalvar>
            <BotaoCancelarRemover
              onClick={() => {
                setEstaEditando(false)
                setMensagem(descricao)
              }}
            >
              Cancelar
            </BotaoCancelarRemover>
          </>
        ) : (
          <>
            <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
            <BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </BotaoCancelarRemover>
          </>
        )}
      </BarraAcoes>
    </Card>
  )
}

export default Tarefa
