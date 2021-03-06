import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS } from '../constants';

// add reminder
export const addReminder = (text, dueDate) => {
    const action = {
        type: ADD_REMINDER,
        text,
        dueDate,
    }
    console.log('action in addReminder', action);
    return action;
}

// delete reminder

export const deleteReminder = (id) => {
    const action = {
        type: DELETE_REMINDER,
        id,
    }
    console.log('deleting in actions', action);
    return action;
}

// clear reminders

export const clearReminders = () => {
    return {
        type: CLEAR_REMINDERS,  
    }
}