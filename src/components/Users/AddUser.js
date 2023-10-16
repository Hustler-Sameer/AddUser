import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import classes from './AddUser.module.css'
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../helpers/Wrapper";



const AddUser = (props) => {
    
    const [error, setError] = useState();
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const onSubmitHandler = event => {
        event.preventDefault();
        console.log('Form Submitted')
        console.log(nameInputRef.current.value , ageInputRef.current.value)
        const enteredUserName = nameInputRef.current.value;
        const enteredUserAge= ageInputRef.current.value;
        if (enteredUserName.trim().length === 0 || enteredUserAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non empty values)'
            })
            return;
        }
        if (+enteredUserAge < 1) {
            setError({
                title: 'Invalid Age',
                message: 'Please enter a valid Age (Age > 0)'
            })
            return;

        }
         //lifting state up
        props.onAddUser(enteredUserName, enteredUserAge);
       
        //resetting our input field
        nameInputRef.current.value ='';
        ageInputRef.current.value = '';
        

    }
    // const onUsernameHandler = event => {
    //     setEnteredUsername(event.target.value)
    //  value={enteredUsername} onChange={onUsernameHandler} was passed in input
    // }
    // const onAgeHandler = (event) => {
    //     setEnteredAge(event.target.value);
    //value={enteredAge} onChange={onAgeHandler} was passed in input

    // }
    const setErrorHandler = () => {
        setError(null)
    }

    // onError handler we have create in error modal and also we have passed it 
    // if not understanding revisit video 131 of react course on udemy



    return (
        <Wrapper>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={setErrorHandler} />}

            <Card className={classes.input}>
                <form onSubmit={onSubmitHandler}>
                    <label htmlFor='username'>Username</label>
                    <input type='text' id="username" ref={nameInputRef}/>
                    <label htmlFor='Age'>Age Years</label>
                    <input type='number' id="Age"  ref={ageInputRef}/>
                    <Button type='submit'>Add User</Button>
                </form>
            </Card>

        </Wrapper>




    )
}
// in input we are passing entered username as wee need to clear it once the form is submitted
export default AddUser;