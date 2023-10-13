import React, {useState} from "react";
import Card from "../UI/Card";
import classes from './AddUser.module.css'
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../helpers/Wrapper";



const AddUser = (props) =>{
    const [enteredUsername , setEnteredUsername] = useState(' ');
    const [enteredAge , setEnteredAge] = useState(' ');
    const [error , setError] = useState( );

    const onSubmitHandler = event =>{
        event.preventDefault();
        console.log('Form Submitted')
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
            setError({
                title: 'Invalid input' ,
                message: 'Please enter a valid name and age (non empty values)'
            })
            return;
        }
        if(+enteredAge < 1  ){
            setError({
                title: 'Invalid Age' ,
                message: 'Please enter a valid Age (Age > 0)'
            })
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
    const setErrorHandler = () => {
        setError(null)
    }
   
  // onError handler we have create in error modal and also we have passed it 
  // if not understanding revisit video 131 of react course on udemy



    return(
        <Wrapper>
        { error && <ErrorModal title={error.title} message={error.message} onErrorHandler={setErrorHandler} />}
        
            <Card className={classes.input}>
        <form onSubmit={onSubmitHandler}>
            <label htmlFor='username'>Username</label>
            <input type='text' id="username" value={enteredUsername} onChange={onUsernameHandler}></input>
            <label htmlFor='Age'>Age (Years)</label>
            <input type='number' id="Age" value={enteredAge} onChange={onAgeHandler}></input>
            <Button type='submit' >Add User</Button>
        </form>
        </Card>
        
        </Wrapper>
        


       
    )
}
// in input we are passing entered username as wee need to clear it once the form is submitted
export default AddUser;