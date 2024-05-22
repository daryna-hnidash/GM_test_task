import { CardInfo } from "./types"


type Props = {
  card: CardInfo
}

export const Card: React.FC<Props> = ({ card }) => {
  return (
    <div
      className={`p-6 flex flex-col justify-between w-card h-card border rounded border-${card.color} hover:shadow-xl group`}
    >
      <div className="flex flex-col gap-6">
        <div
          className={`self-end ${card.iconName} group-hover:scale-105 transition-all`}
        ></div>
        <h1 className="font-semibold text-4xl text-title">{card.title}</h1>
        <ul className="grid gap-3">
          {card.descriptionList.map(item => (
            <li
              key={item}
              className="list-disc text-2xl ml-6"
            >{item}</li>
          ))}
        </ul>
      </div>
      <a
        href="#"
        className="text-2xl self-end justify-self-end underline transition-all"
      >View more</a>
    </div>
  )
}
