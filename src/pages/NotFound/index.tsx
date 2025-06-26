import React from "react"
import "./NotFound.css"
import { useNavigate } from "react-router-dom"
import ErrorPage from "../../assets/icons/error icon.svg"
import { texts } from "../../Constants/texts"

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate('/');
  }
  return (
    <div className='notFound-container'>
      <img src={ErrorPage} />
      <h1>{texts.notFound.title}</h1>
      <p>{texts.notFound.description}</p>
      <button onClick={goHome}>
        {texts.notFound.btnText}
      </button>
    </div>
  )
}

export default NotFound;