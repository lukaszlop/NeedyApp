
import {LOG_USER} from './user.types';

export const logUser = user => ({
    type: LOG_USER,
    payload: user
})