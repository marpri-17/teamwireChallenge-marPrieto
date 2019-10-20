import React from "react";
import { OutlinedInput, Button } from "@material-ui/core";

const NewWishForm = ({ handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit} className="form_wish">
            <OutlinedInput autoFocus={true} type="text" placeholder="Add a new wish" />
            <Button type="submit" variant="outlined" size="large" classname="form_button">Add Wish</Button>
        </form>
    );
};

export default NewWishForm;
