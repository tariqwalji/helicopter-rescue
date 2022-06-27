import { HeightMap } from './heightmap';

test("heightmap has a base height", () => {
  const heightMap:HeightMap = new HeightMap(100);
  expect(heightMap.getBaseHeightMap()).toBe(100);
  expect(heightMap.getDisplacementAtPoint(10)).toBe(100);
});

test("heightmap add displacement point above base height", () => {
  const heightMap:HeightMap = new HeightMap(100);
  heightMap.setDisplacementPoint(10, 110);
  expect(heightMap.getDisplacementAtPoint(10)).toBe(110);
  expect(heightMap.getDisplacementAtPoint(20)).toBe(100);
});

test("heightmap add displacement point below base height", () => {
  const heightMap:HeightMap = new HeightMap(100);
  heightMap.setDisplacementPoint(10, 90);
  expect(heightMap.getDisplacementAtPoint(10)).toBe(90);
  expect(heightMap.getDisplacementAtPoint(20)).toBe(100);
});

test("heightmap update displacement point", () => {
  const heightMap:HeightMap = new HeightMap(100);
  heightMap.setDisplacementPoint(10, 90);
  heightMap.setDisplacementPoint(15, 95);
  expect(heightMap.getDisplacementAtPoint(10)).toBe(90);
  expect(heightMap.getDisplacementAtPoint(15)).toBe(95);
  expect(heightMap.getDisplacementAtPoint(20)).toBe(100);
  heightMap.setDisplacementPoint(15, 85);
  expect(heightMap.getDisplacementAtPoint(15)).toBe(85);
});