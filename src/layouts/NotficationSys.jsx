import { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
const NotficationSys = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked); // Holatni o'zgartiramiz
  };
  const style = {
    listDefaults: "text-xl p-3 rounded-md w-100 flex justify-between items-center font-[500]",
    listError: "text-red-500 bg-red-200 font-[500] ",
    listSuccess: "text-green-500 bg-green-200 font-[500] ",
    listInfo: "text-blue-500 bg-blue-200 font-[500] ",
    listWarning: "text-yellow-500 bg-yellow-200 font-[500] ",
    listText: "font-[500] ",
    listIcon: "cursor-pointer"
  }

  return (
    <div className='w-100 '>
      <div className='w-[80%] mx-auto flex justify-center items-center mt-5'>
        <ul className='w-100 flex flex-col gap-3'>

          <li className={`${style.listDefaults} ${style.listError}`}>
            <h4 className={style.listText}>Error Lorem ipsum dolor sit.</h4>
            <span className={style.listIcon} onClick={handleClick}><CloseIcon /></span>
          </li>

          <li className={`${style.listDefaults} ${style.listSuccess}`}>
            <h4 className={style.listText}>Success Lorem ipsum dolor sit.</h4>
            <span className={style.listIcon} onClick={handleClick} ><CloseIcon /></span>
          </li>

          <li className={`${style.listDefaults} ${style.listInfo}`}>
            <h4 className={style.listText}>Info Lorem ipsum dolor sit.</h4>
            <span className={style.listIcon} onClick={handleClick} ><CloseIcon /></span>
          </li>

          <li className={`${style.listDefaults} ${style.listWarning}`}>
            <h4 className={style.listText}>Warning Lorem ipsum dolor sit.</h4>
            <span className={style.listIcon} onClick={handleClick} ><CloseIcon /></span>
          </li>

        </ul>
      </div>
    </div>
  )
}

export default NotficationSys;