
/**
 * Determine what time of day it is based on timestamp then return a tailored message
 * @return { String } message
*/
export const timeOfDay = () => {

    const timestamp = new Date().getHours();
    let message = '';

    if ( timestamp >= 0 && timestamp < 12 )  message = 'Good morning! ';

    if ( timestamp >= 12 && timestamp < 18 ) message = 'Good afternoon! ';

    if ( timestamp >= 18 && timestamp < 24 ) message = 'Good evening! ';

    return message;
}