type AppProps = {
  title: string,
  text: string,
  buttonLabel: string
}

async function makeRequest(){
 return await fetch('localhost:8080')
}

export default async function App({title, text, buttonLabel}: AppProps){
 const data = await makeRequest()
 return (
  `<div>
    <h1>${title}</h1>
    <p>${text}</h1>
    <button>${buttonLabel}</button>
    <div>${data}</div>
  </div>`
 ) 
}
