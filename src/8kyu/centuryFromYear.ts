//TODO hhttps://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097/train/typescript



export const centuryFromYear = (year: number): number => {

    return (year % 100) ?  Math.floor(year/100) + 1 : year/100 ;

};


//? Top Solution

// export const centuryFromYear = (year: number): number => {
//     return Math.ceil(year / 100);
//   };

//*export function
//!critique I skipped the ciel functionality which could have leaned my code out more