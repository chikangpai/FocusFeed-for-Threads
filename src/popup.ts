import {
  getFilterState,
  getWhitelist,
  setFilterState,
  setWhitelist,
} from "./utils/storage";

const list = document.getElementById("list") as HTMLUListElement;
const input = document.getElementById("handle") as HTMLInputElement;
const form = document.querySelector("form")!;
const toggle = document.getElementById(
  "whitelist-toggle"
) as HTMLInputElement;

const render = (handles: string[]) => {
  list.innerHTML = handles
    .map(
      (h, i) =>
        `<li>
          <span>@${h}</span>
          <button data-idx="${i}">✕</button>
         </li>`
    )
    .join("");
  // 刪除
  list.querySelectorAll<HTMLButtonElement>("button").forEach((btn) =>
    btn.addEventListener("click", async () => {
      handles.splice(Number(btn.dataset.idx), 1);
      await setWhitelist(handles);
      render(handles);
    })
  );
};

// 載入現有白名單 & Toggler
Promise.all([getWhitelist(), getFilterState()]).then(
  ([whitelist, isEnabled]) => {
    render([...whitelist]);
    toggle.checked = isEnabled;
  }
);

toggle.addEventListener("change", () => {
  setFilterState(toggle.checked);
});

// 新增帳號
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const handle = input.value.trim().replace(/^@/, "").toLowerCase();
  if (!handle) return;
  const handles = [...(await getWhitelist())];
  if (!handles.includes(handle)) handles.push(handle);
  await setWhitelist(handles);
  input.value = "";
  render(handles);
}); 