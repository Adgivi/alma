import { render, waitFor } from "@testing-library/vue";
import "@testing-library/jest-dom";

import AppFooter from "@/components/AppFooter.vue";

describe.skip("App Footer", () => {
  it("renders author", () => {
    const { getByText } = render(AppFooter);
    const author = "adgivi";

    expect(getByText(author)).toBeVisible();
  });

  it("finds background image", async () => {
    await waitFor(() =>
      import("assets/footer-bk.jpg").then(() => {
        expect.anything();
      })
    );
  });
});
