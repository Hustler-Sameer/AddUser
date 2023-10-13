import React from "react";
import classes from './UsersList.module.css';
import Card from "../UI/Card";

const UsersList = (props) => {

// we are expecting users array which contain user informations hence we map those here
    return(
        <Card className={classes.users}> 
       <ul>

        {props.users.map(user => <li> {user.name}
                                     ({user.age} Year Old) 
                                     </li>)}
       </ul>




       </Card>
    )
}

export default UsersList;