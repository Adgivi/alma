import { render, screen } from "@testing-library/vue";
import "@testing-library/jest-dom";

import { post as postMock } from "../__mocks__";
import PostPage from "@/pages/_slug.vue";

const renderPage = () =>
  render(PostPage, {
    stubs: {
      NuxtLink: true
    },
    mocks: {
      $dayjs: jest.fn(() => ({ format: jest.fn() })),
      $route: { params: "mock-slug" },
      $store: { getters: { getPostBySlug: () => postMock } },
      $md: { render: () => "Mock body" }
    }
  });

describe("Index page", () => {
  beforeEach(() => renderPage());

  it("renders title", () => {
    expect(screen.getByText("Mock Title")).toBeVisible();
  });

  it("renders iframe", () => {
    expect(screen.getByText("Mock iframe")).toBeVisible();
  });
});
