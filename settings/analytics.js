// CATEGORY - The object that user interacted with.
const CATEGORY = {
  BLOG_ENTRY_IMG: "Blog entry image",
  SHARING: "Sharing",
  BLOG_ENTRY: "Blog entry",
  SOCIAL: "Social link"
};

// ACTION - The type of interaction (click, play, etc.)
const ACTION = {
  CLICK: "clicked",
  SCROLL(amount) {
    return "scrolled" + (amount ? `-${amount}%` : "");
  }
};

export { CATEGORY, ACTION };
