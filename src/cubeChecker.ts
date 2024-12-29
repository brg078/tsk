
//https://www.codewars.com/kata/58d248c7012397a81800005c/train/typescript

export function cubeChecker(volume: number, side: number): boolean{

    if (volume === 0 || side === 0) {
        return false;
    } else {
        return side**3 === volume;
    }
    
}