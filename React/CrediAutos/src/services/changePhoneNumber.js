export function changePhoneNumber(utmSource) {
    let number;
    if (utmSource === 'Facebook') {
        number = '300 Facebook';
    } else if (utmSource === 'Google') {
        number = '300 Google';
    } else {
        number = '300 Defecto';
    }
    return number;
}