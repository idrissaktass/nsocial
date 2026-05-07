import { render, screen } from "@testing-library/react";
import StatsBar from "../components/profile/StatsBar";
import { expect, test, describe } from "vitest";

describe("StatsBar Component", () => {
  const mockStats = { 
    followerCount: 1250, 
    followingCount: 450, 
    postCount: 12 
  };

  test("Renders incoming statistics with correct labels", () => {
    render(<StatsBar stats={mockStats} />);
    
    expect(screen.getByText("1250")).toBeDefined();
    expect(screen.getByText("followers")).toBeDefined();
    expect(screen.getByText("450")).toBeDefined();
    expect(screen.getByText("12")).toBeDefined();
  });
});