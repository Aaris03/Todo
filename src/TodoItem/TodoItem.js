import { FaCheck } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import "./TodoItem.css"

function TodoItem (props){
    return(
      <li>
        <div className={`check-Box ${props.completed && "check-true"}`} onClick={props.onComplete}>
          <strong><FaCheck /></strong>
        </div>
        <p className={`${props.completed && "text-complete"}`}>{props.text}</p>
        <span onClick={props.onDelete}><IoIosClose /></span>
      </li>
    );
}

export { TodoItem };