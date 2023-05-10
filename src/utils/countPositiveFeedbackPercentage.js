 export function countPositiveFeedbackPercentage(a, b) {
    if (a === 0) {
      return 0;
    }
    return Math.round((b / a) * 100);
  }