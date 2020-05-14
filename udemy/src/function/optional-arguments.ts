export {};

let bmi: (height: number, wegight: number, printable?: boolean) => number = (
  height: number,
  wegight: number,
  printable?: boolean
): number => {
  const bmi: number = wegight / (height * height);
  if (printable) {
    console.log(bmi);
  }
  return bmi;
};

bmi(1.39, 89, true);

// bmi(身長,体重,logで出すか出さないか)
// bmi(1.39, 89,true)
// bmi(1.39, 89,false)
// bmi(1.39, 89)
