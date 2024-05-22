import React from "react"
import { Card } from "./Card"
import { cardsArray } from "./vars"

function App() {
  return (
    <div
      className="container flex justify-center p-8 flex-wrap m-auto gap-6 text-text"
    >
      {cardsArray.map(card => (
        <React.Fragment key={card.title}>
          <Card card={card} />
        </React.Fragment>
      ))}
    </div>
  )
}

export default App
