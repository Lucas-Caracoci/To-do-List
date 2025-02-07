import React, { useState, useEffect, useMemo } from 'react';
import { MdDelete } from 'react-icons/md'
import { FaCheckDouble } from "react-icons/fa";
import './tarefas.css'
const ItemTarefas = ({ ListaDeTarefas,setTarefas, color }) => {
  


    useEffect(()=>{
        const tarefaStorage = localStorage.getItem('tarefas')

        if (tarefaStorage){
            setTarefas(JSON.parse(tarefaStorage))
        }

    },[])

    useEffect(()=>{
        localStorage.setItem('tarefas',JSON.stringify(ListaDeTarefas))

    },[ListaDeTarefas])

    function handleCheck(index) {
        const novasTarefas = ListaDeTarefas.map((tarefa, i) =>
            i === index ? { ...tarefa, checked: !tarefa.checked } : tarefa
        );
        setTarefas(novasTarefas);
    }
    function handleDelete(tarefaDelete){
        const novasTarefas = ListaDeTarefas.filter(tarefa => tarefa !== tarefaDelete)
        setTarefas(novasTarefas)
        localStorage.setItem('tarefas', JSON.stringify(novasTarefas))
    }


    return (
        <>
            {ListaDeTarefas.map((tarefa, index) => (
                <li key={index}><span className={tarefa.checked ? 'checked':''}>{tarefa.text}</span>
                    <div className='opt-list'>
                        <button className="check" onClick={()=>handleCheck(index)}>
                            <FaCheckDouble size={24} />
                        </button>
                        <button className='delete '  onClick={()=>handleDelete(tarefa)}>
                            <MdDelete size={24} />
                        </button>
                    </div>
                </li>
            ))}
        </>
    );
}

export default ItemTarefas;
