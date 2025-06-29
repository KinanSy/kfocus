
import { parseISO, format } from 'date-fns';


export default function formatDate(date, dateFormat = "EEEE',' dd MMMM yyyy") {
    const parsedDate = parseISO(date);
    const formatted = format(parsedDate, dateFormat);
    
    return formatted
}
