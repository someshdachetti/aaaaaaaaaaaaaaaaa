import './index.css'

const historyItems = props => {
  const {allItems} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = allItems

  return (
    <div className="whiteCard">
      <ul className="order">
        <p className="time">{timeAccessed}</p>
        <img className="img" src={logoUrl} alt={title} />
        <h1 className="title">{title}</h1>
        <p className="domainName">{domainUrl}</p>
      </ul>
    </div>
  )
}
export default historyItems
