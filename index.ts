type AppProps = {
  title: string,
  text: string
}
export default function App({title, text}: ){
 return (
  `<div>
    <h1>${title}</h1>
    <p>${text}</h1>
    <button>Accept</button>
  </div>`
 ) 
}
