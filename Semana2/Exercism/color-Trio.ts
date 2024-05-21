const COLOR = [
    'black',
    'brown',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'violet',
    'grey',
    'white' 
  ] as const
  export type Colors = typeof COLOR[number];
  
  export const decodedResistorValue = ([color1, color2, color3]:Colors[]):string => {
    let value:number = COLOR.indexOf(color1)*10 + COLOR.indexOf(color2);
    let ohmUnit:number = COLOR.indexOf(color3);
    value *= 10**ohmUnit
  
    let unit: string = 'ohms'
  
    if (ohmUnit > 1) {
      value /= 1000
      unit = 'kiloohms'
    }
    if (ohmUnit > 4) {
      value /= 1000
      unit = 'megaohms'
    }
    if (ohmUnit > 7) {
      value /= 1000
      unit = 'gigaohms'
    }
  
    return (`${value} ${unit}` )
  
  }