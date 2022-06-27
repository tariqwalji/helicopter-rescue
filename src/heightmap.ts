export class HeightMap {
  private displacementMap:number[] = [];
  constructor(private baseHeightMap:number) {}
  getBaseHeightMap() {
    return this.baseHeightMap;
  }
  setDisplacementPoint(x:number, y:number) {
    this.displacementMap[x] = y;
  }
  getDisplacementAtPoint(x:number) {
    return this.displacementMap[x] ?? this.baseHeightMap;
  }
}
