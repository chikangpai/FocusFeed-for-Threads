export const getWhitelist = (): Promise<Set<string>> =>
  new Promise((res) =>
    chrome.storage.local.get(["whitelist"], (data) =>
      res(new Set<string>(data.whitelist ?? []))
    )
  );

export const setWhitelist = (handles: string[]) =>
  chrome.storage.local.set({ whitelist: handles });

export const getFilterState = (): Promise<boolean> =>
  new Promise((res) =>
    chrome.storage.local.get(
      ["isWhitelistEnabled"],
      ({ isWhitelistEnabled }) => res(isWhitelistEnabled ?? true)
    )
  );

export const setFilterState = (isEnabled: boolean) =>
  chrome.storage.local.set({ isWhitelistEnabled: isEnabled }); 