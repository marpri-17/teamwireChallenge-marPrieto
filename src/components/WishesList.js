import React from "react";
import { List, ListItem, ListItemIcon, Typography, ListItemText } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import Brightness1OutlinedIcon from '@material-ui/icons/Brightness1Outlined';

const WishesList = ({ wishes, handleDelete }) => {
    return (
        <List component="ul" className="wish_list">
            <Typography variant="h6">Wishes</Typography>
            {wishes.map(wish => {
                return (
                    <ListItem key={wish} id={wish} onClick={handleDelete} className="list-item">
                        <ListItemIcon>
                            <Brightness1OutlinedIcon />
                        </ListItemIcon>
                        <ListItemText>  {wish} </ListItemText>
                        <ListItemIcon>
                            <DeleteIcon />
                        </ListItemIcon>
                    </ListItem>
                );
            })}
        </List>
    );
};

export default WishesList;
