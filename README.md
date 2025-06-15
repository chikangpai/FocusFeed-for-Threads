# FocusFeed for Threads

A browser extension that lets you take control of your Threads feed. Hide the "For you" recommendations and only see posts from the accounts you explicitly whitelist.

## ✨ Features

- **Whitelist System:** Create a custom list of Threads accounts you want to see.
- **Feed Filtering:** Automatically hides all posts from accounts not on your whitelist.
- **Works on `threads.net` and `threads.com`:** Runs seamlessly on both official domains.
- **Simple UI:** Easily add and remove users from your whitelist through the extension popup.

---

## 🚀 Getting Started

Follow these instructions to get a local copy up and running for development or personal use.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)

### Installation & Build

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/FocusFeed-for-Threads.git
    cd FocusFeed-for-Threads
    ```

2.  **Install dependencies:**
    ```sh
    npm install
    ```

3.  **Build the extension:**
    ```sh
    npm run build
    ```
    This will compile the source code and place the ready-to-use extension files in the `dist/` directory.

---

## 🔧 Loading the Extension in Your Browser

After building the project, the `dist/` folder contains the unpacked extension.

### For Google Chrome / Brave / Edge

1.  Open your browser and navigate to `chrome://extensions`.
2.  Enable **Developer mode** using the toggle in the top-right corner.
3.  Click the **Load unpacked** button.
4.  Select the `dist` folder from this project's directory.
5.  The extension "FocusFeed for Threads" will now be active!

### For Mozilla Firefox

1.  Open Firefox and navigate to `about:debugging#/runtime/this-firefox`.
2.  Click the **Load Temporary Add-on...** button.
3.  Navigate into the `dist` folder and select the `manifest.json` file.
4.  The extension will be loaded temporarily until you close the browser.

---

## 💡 How to Use

1.  Navigate to `https://www.threads.net` or `https://www.threads.com`.
2.  Click the extension's icon in your browser's toolbar (you may need to pin it first).
3.  In the popup, enter a Threads username (without the "@") and click **Add**.
4.  Your feed will automatically filter to show only posts from users on your whitelist. Enjoy the focus!
