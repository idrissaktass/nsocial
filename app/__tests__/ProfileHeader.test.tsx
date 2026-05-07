import { render, screen, fireEvent } from "@testing-library/react";
import ProfileHeader from "../components/profile/ProfileHeader";
import { expect, test, describe } from "vitest";

describe("ProfileHeader Component", () => {
  const mockUser = {
    id: "1",
    username: "alexrivera",
    displayName: "Alex Rivera",
    bio: "Senior Full Stack Engineer | Open Source Contributor | Coffee Lover ☕",
    avatarUrl: "/test.jpg",
    isVerified: true,
    createdAt: "2023-05-15T12:00:00Z"
  };

  test("Follow button text toggles when clicked", () => {
    render(<ProfileHeader user={mockUser} />);
    
    const followButton = screen.getByRole("button", { name: /follow/i });
    
    fireEvent.click(followButton);
    expect(followButton.textContent).toBe("Unfollow");

    fireEvent.click(followButton);
    expect(followButton.textContent).toBe("Follow");
  });

  test("Displays verification icon when the user is verified", () => {
    render(<ProfileHeader user={mockUser} />);
    expect(screen.getByTitle("Verified")).toBeDefined();
  });
});