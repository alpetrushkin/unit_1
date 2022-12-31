import './App.css';

let text = 'text variable'

function App() {
   let text2 = '222'

   const style = {
      fontSize: '24px',
      fontStyle: 'italic',
      color: 'green'
   }

   return (
      <>
         <div className="container">
            <h1 style={style}>app_1</h1>
            <img src="/images/pictures.webp" alt="pictures"/>
            <ul>
               <li>Hello</li>
               <li>{text + text2}</li>
            </ul>
         </div>
      </>
   );
}

export default App;
