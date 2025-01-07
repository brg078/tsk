//TODO https://www.codewars.com/kata/

export function remove(s: string): string {

    return s.replace(/!/g,'')+ '!';

}


//? Top Solution
//* export function remove(s: string): string {

//return s.replace(/\!/g,'')+ '!';

//}
//! The only improvement to be made is to add the backslash before the ! in the regex formula as an escape, not needed in this instance but best practice when you want to evaluate for the literal character