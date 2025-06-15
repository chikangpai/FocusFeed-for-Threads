import { getFilterState, getWhitelist } from "./utils/storage";

const initObserver = async () => {
  let whitelist = await getWhitelist();
  let isWhitelistEnabled = await getFilterState();

  setTimeout(() => {
    const followingTab = document.querySelector('a[href="/following"]');
    if (followingTab) (followingTab as HTMLElement).click();
  }, 1000);

  chrome.storage.onChanged.addListener((changes) => {
    if (changes.whitelist) {
      whitelist = new Set<string>(changes.whitelist.newValue ?? []);
    }
    if (changes.isWhitelistEnabled) {
      isWhitelistEnabled = changes.isWhitelistEnabled.newValue ?? true;
    }
    filterAll();
  });

  const shouldHide = (postContainer: HTMLElement): boolean => {
    if (!isWhitelistEnabled) return false;
    const anchor = postContainer.querySelector<HTMLAnchorElement>("a[href^='/@']");
    if (!anchor) return false;
    const handle = anchor.href.split("/@")[1]?.split("/")[0]?.toLowerCase();
    return handle ? !whitelist.has(handle) : false;
  };

  const filterAll = () => {
    const posts = document.querySelectorAll<HTMLElement>('div[style*="padding-left: 12px"]');
    if (!isWhitelistEnabled) {
      posts.forEach((el) => (el.style.display = ""));
      return;
    }
    posts.forEach((el) => {
      el.style.display = shouldHide(el) ? "none" : "";
    });
  };

  filterAll();
  const mo = new MutationObserver(filterAll);
  mo.observe(document.body, { childList: true, subtree: true });
};

if (location.hostname === "www.threads.net" || location.hostname === "www.threads.com") {
  setTimeout(() => initObserver().catch(console.error), 500);
} 