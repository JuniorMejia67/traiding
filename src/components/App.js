const App = () => {
       const [texto, setTexto] = useState('');
     
       return (
         <div>
           <InputTexto onChange={setTexto} />
           <MostrarTexto texto={texto} />
         </div>
       );
};