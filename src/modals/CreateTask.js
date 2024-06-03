import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import { FormControl, InputLabel, Select, MenuItem} from '@mui/material'

const CreateTaskPopup = ({ modal, toggle, save }) => {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] =useState('')

    const handleChange = (e) => {
        const { name, value } = e.target;
        switch(name){
            case "taskName":
                setTaskName(value);
                break;
            case "description":
                setDescription(value);
                break;
            case "category": 
                setCategory(value);
                break;
            default:
                break;
        }
    };

    const handleSave = (e) => {
        e.preventDefault();
        let taskObj = {};
        taskObj["Name"] = taskName;
        taskObj["Description"] = description;
        taskObj["Category"] = category;
        save(taskObj);
    };

    return (
        <Dialog open={modal} onClose={toggle}>
            <DialogTitle>Create Task</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    <div className="form-group">
                        <TextField
                            label="Task Name"
                            variant="outlined"
                            fullWidth
                            value={taskName}
                            onChange={handleChange}
                            name="taskName"
                            margin="dense"
                        />
                    </div>
                    <div className="form-group">
                        <TextField
                            label="Description"
                            variant="outlined"
                            fullWidth
                            value={description}
                            onChange={handleChange}
                            name="description"
                            margin="dense"
                        />
                    </div>
                    <div className="form-group">
                        <FormControl fullWidth variant="outlined" margin="dense">
                        <InputLabel id="category-label">Category</InputLabel>
                        <Select
                            labelId="category-label"
                            value={category}
                            onChange={handleChange}
                            label="Category"
                            name="category"
                        >
                            <MenuItem value="1">기본</MenuItem>
                            <MenuItem value="2">Category 1</MenuItem>
                            <MenuItem value="3">Category 2</MenuItem>

                        </Select>
                        </FormControl>
                    </div>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button color="primary" onClick={handleSave}>Create</Button>
                <Button color="secondary" onClick={toggle}>Cancel</Button>
            </DialogActions>
        </Dialog>
    );
};

export default CreateTaskPopup;
