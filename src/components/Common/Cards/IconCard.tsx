import "../../../scss/IconMenu.scss";


// icon card type definition
interface IconCard {
  title: string;
  body: string;
  icon: string;
}


export const IconCard = ({title, body, icon}: IconCard) => {
  return (
    <div className="personal-menu__card" >
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <div className="info-icon">
        <i className="material-icons md-36">{icon}</i>
      </div>
      <p className="personal-menu__title">{title}</p>
      <p className="personal-menu__text">{body}</p>
    </div>
  )
}

