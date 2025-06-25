// src/state/updateTimes.js

// Initialize times: returns a default array of available times
export function initializeTimes() {
  return [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ];
}

// Update times reducer: for now, just returns the current state unchanged
export function updateTimes(state, action) {
  switch (action.type) {
    case 'update_times':
      // For now, just return the current state unchanged
      return state;
    default:
      return state;
  }
}
