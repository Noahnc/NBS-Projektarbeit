export class ChartData {
  name?: string;
  series: SingleData[] = [];
}

export class SingleData {
  name?: string;
  value?: number;
}
