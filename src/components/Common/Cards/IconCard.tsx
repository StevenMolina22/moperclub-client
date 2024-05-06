import "../../../scss/IconPersonalMenu.scss";
// import ImagesIcons from "../../Layout/ImagesIcons";

// icon card type definition
interface IconCard {
  title: string;
  body: string;
  icon: string;
}


export const IconCard = ({title, body, icon}: IconCard) => {
  // const myComponent = <ImagesIcons articles={[]}/>
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
      {/* This was just for components props testing (ignore:) */}
      {/* <div>{myComponent}</div> */} 
    </div>
  )
}

