import React, {useState} from "react";
import Card from "../UI/Card";
import classes from './AddUser.module.css'
import Button from "../UI/Button";



const AddUser = (props) =>{
    const [enteredUsername , setEnteredUsername] = useState(' ');
    const [enteredAge , setEnteredAge] = useState(' ');

    const onSubmitHandler = event =>{
        event.preventDefault();
        console.log('Form Submitted')
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
            return ;
        }
        if(+enteredAge < 1 ){
            return;

        }
        console.log(enteredAge , enteredUsername);
        props.onAddUser(enteredUsername , enteredAge);
        //lifting state up
        setEnteredAge('');
        setEnteredUsername('');  

    }
    const onUsernameHandler = event => {
        setEnteredUsername(event.target.value)
    }
    const onAgeHandler = (event) => {
        setEnteredAge(event.target.value);

    }
   
  



    return(
        
            <Card className={classes.input}>
        <form onSubmit={onSubmitHandler}>
            <label htmlFor='username'>Username</label>
            <input type='text' id="username" value={enteredUsername} onChange={onUsernameHandler}></input>
            <label htmlFor='Age'>Age (Years)</label>
            <input type='number' id="Age" value={enteredAge} onChange={onAgeHandler}></input>
            <Button type='submit' >Add User</Button>
        </form>
        </Card>
        


       
    )
}
// in input we are passing entered username as wee need to clear it once the form is submitted
export default AddUser;