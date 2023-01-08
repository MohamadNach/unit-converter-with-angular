export class ConversionDef {
  constructor(
    public name: string,
    public inUnit: string,
    public outUnit: string,
    public coeff: number
  ) {}
}
