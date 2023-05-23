import { useState } from "react";
import Serviceimg from "../services/text-davinci-003/services.img";

export default function ImgIA() {
  const [descripcionInput, setdescripcionInput] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const response = await Serviceimg.getimg({ d: descripcionInput });
      /*const response = await fetch("/text-davinci-003/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ animal: animalInput }),
      });*/

      const data = await response;
      console.log(response);
      if (response.status !== 200) {
        throw (
          data.error ||
          new Error(`Request failed with status ${response.status}`)
        );
      }
      console.log("response", response);
      setResult(data.result);
      setdescripcionInput("");
    } catch (error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }
  }

  return (
    <div>
      <title>OpenAI Quickstart</title>
      <link rel="icon" href="/dog.png" />

      <main>
        <h3>Generador de imágenes IA!</h3>
        <form onSubmit={onSubmit}>
          <h3>Ingresa qué imagen deseas generar: </h3>
          <input
            type="text"
            name="descripcion input"
            placeholder="Enter an descipcion"
            value={descripcionInput}
            onChange={(e) => setdescripcionInput(e.target.value)}
          />
          <input type="submit" value="Generate names" />
        </form>
        <img src={result} alt="Hola"></img>
      </main>
    </div>
  );
}
