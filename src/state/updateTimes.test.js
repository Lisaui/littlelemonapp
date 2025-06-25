import { initializeTimes, updateTimes } from './updateTimes';

describe('initializeTimes', () => {
  test('should return an array of default times', () => {
    const times = initializeTimes();
    expect(Array.isArray(times)).toBe(true);
    expect(times.length).toBeGreaterThan(0);
    expect(times).toContain("17:00");
  });
});

describe('updateTimes', () => {
  test('should return the same state when action type is update_times', () => {
    const initialState = ["17:00", "18:00"];
    const action = { type: 'update_times', date: '2025-06-16' };
    const result = updateTimes(initialState, action);
    expect(result).toEqual(initialState);
  });

  test('should return the same state for unknown action type', () => {
    const initialState = ["17:00", "18:00"];
    const action = { type: 'unknown_action' };
    const result = updateTimes(initialState, action);
    expect(result).toEqual(initialState);
  });
});
