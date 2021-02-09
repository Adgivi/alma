import { render } from "@testing-library/vue";
import "@testing-library/jest-dom";

import posts from "../__mocks__/posts";
import Index from "@/pages/index.vue";

const renderPage = () =>
  render(Index, {
    store: {
      state: { posts }
    },
    stubs: {
      NuxtLink: true
    },
    mocks: {
      $dayjs: jest.fn(() => ({ format: jest.fn() })),
      localePath: jest.fn(),
      $ga: { page: jest.fn() }
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

  it.skip("renders header", () => {
    const { getByRole } = renderPage();

    expect(getByRole("banner")).toBeVisible();
  });

  it.skip("should greet", () => {
    const { getByText } = renderPage();

    expect(getByText(/Eh, hola!/gi)).toBeVisible();
  });
});
