import { render } from "@testing-library/vue";
import "@testing-library/jest-dom";

import posts from "../__mocks__/posts";
import Index from "@/pages/index.vue";
import Header from "@/components/Header";

const renderPage = () =>
  render(Index, {
    store: {
      state: { posts }
    },
    stubs: {
      NuxtLink: true
    }
  });

describe("Index page", () => {
  it("renders all posts with title and description", () => {
    const { getByText, getByRole } = renderPage();

    posts.forEach(({ fields: { title, description } }) => {
      expect(getByRole("heading", { name: title })).toBeVisible();
      expect(getByText(description)).toBeVisible();
    });
  });

  it("renders header", async () => {
    const { getByRole } = render(Header);

    expect(getByRole("banner")).toBeVisible();
  });
});
