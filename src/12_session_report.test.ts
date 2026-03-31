import { describe, expect, it } from "vitest";

import { sessionReport } from "./katas";

describe("12 sessionReport", () => {
  it("returns an interview-style analytics summary object", () => {
    const json = JSON.stringify([
      { userId: "u1", durationMinutes: 30, completed: true },
      { userId: "u2", durationMinutes: 10, completed: false },
      { userId: "u3", durationMinutes: 20, completed: true },
      { userId: "u1", durationMinutes: 50, completed: true },
    ]);

    expect(sessionReport(json)).toEqual({
      totalSessions: 4,
      completedSessions: 3,
      totalDurationMinutes: 110,
      averageDurationMinutes: 27.5,
      completedUserIds: ["u1", "u3"],
    });
  });

  it("returns zeros and an empty user list for no sessions", () => {
    expect(sessionReport("[]")).toEqual({
      totalSessions: 0,
      completedSessions: 0,
      totalDurationMinutes: 0,
      averageDurationMinutes: 0,
      completedUserIds: [],
    });
  });
});
