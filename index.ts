type AppProps = {
  title: string,
  text: string,
  buttonLabel: string
}
export default function App({title, text, buttonLabel}: AppProps){
 return (
  `<div>
    <h1>${title}</h1>
    <p>${text}</h1>
    <button>${buttonLabel}</button>
  </div>`
 ) 
}
