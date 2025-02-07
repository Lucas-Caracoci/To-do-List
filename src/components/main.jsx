
import React, {useMemo, useState , useCallback, useEffect} from 'react';
import ItemTarefas from './tarefas'


const Main = () => {
    const [tarefas,setTarefas] = useState([])
    const [input,setInput] = useState('')
    const [color,setColor] = useState('#000')
   

    const [bgColor, setBgColor] = useState(() => {
        return JSON.parse(localStorage.getItem("bgColor")) || ["#ffffff", "#000000"];
    });
        
        useEffect(() => {
            localStorage.setItem("bgColor", JSON.stringify(bgColor));
        }, [bgColor]);

    
        console.log(color)
        console.log(bgColor[0])
        console.log(bgColor[1])

   const handleAdd = useCallback(() => {
    if (input) {
        setTarefas([
            ...tarefas, 
            { text: input, checked: false } 
        ]);
    }
    setInput('');
    
    console.log('setei tarefas para: ', input);
}, [tarefas, input]);

    const totalTarefas = useMemo(() => tarefas.length,[tarefas])
    return (
        <main >
             <h1 className="titulo">Lista de Tarefas</h1>
             <strong>Total de Tarefas :  {totalTarefas}</strong>
             <br /><br />
             <input type="color" name="" id="" onChange={e => setColor(e.target.value)}/>
           
            <input className='nova-tarefa' type="text" name="" id="" placeholder='Digite uma Tarefa...' value={input} onChange={e => setInput(e.target.value)} />
            <button className='adicionar' onClick={handleAdd} style={{backgroundColor: color}}>Adicionar</button>

            <ul>
                <ItemTarefas ListaDeTarefas={tarefas} setTarefas={setTarefas} color={color}/>

            </ul>
         
        </main>
    );
}

export default Main;
