import "./home.css"
import { Form } from '../components/Form'

export const Home = () => {
  return (
    <>
      <div className="jumbotron">
        <h1>Bienvenido a mi Restaurant</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore reiciendis reprehenderit harum. Rerum amet quasi sunt autem iusto quo vero possimus eveniet, soluta asperiores error praesentium fugit? Qui, eveniet nam.</p>
      </div>
      <div className="container">
        <div className="info">
          <h2>Nos ajustamos a lo que tienes en mente y te entregamos exactamente lo que soñaste</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dolorum rem totam dolor possimus
            quae, labore, inventore distinctio quaerat exercitationem perferendis cupiditate officiis
            reiciendis,
            aspernatur ad voluptatem nobis est incidunt.</p>
        </div>
        <div className="img-info"></div>
      </div>

      <Form />
    </>   
  )
}


