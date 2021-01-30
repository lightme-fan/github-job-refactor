import { formatDistance } from 'date-fns'

export const formattedDate = (date) => {
    return formatDistance(new Date(date), new Date());
};