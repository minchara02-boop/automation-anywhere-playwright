# Playwright Automation – Automation Anywhere Community Edition

## 📌 Overview

This project demonstrates **UI and API automation using Playwright** for **Automation Anywhere Community Edition**.

It covers real-world automation challenges such as:
- Non-ARIA UI elements
- Canvas-based editors
- Manual authentication handling
- Token-based API authentication
- SaaS product limitations

The project is designed to be **stable, readable, and interview-ready**.

---

## 🧪 Test Use Cases Covered

### ✅ UI Automation

#### 1️⃣ Create Message Box Task
- Navigates to Automation module
- Creates a new Task Bot with a unique name
- Verifies Task Bot editor is opened successfully

**File:**  
`tests/messageBoxTask.spec.js`

---

#### 2️⃣ Create Form with File Upload
- Navigates to Automation module
- Creates a new Form with a unique name
- Verifies Form Builder page is opened

**File:**  
`tests/formUpload.spec.js`

> ⚠️ Drag-and-drop and canvas widgets are not asserted directly due to Automation Anywhere UI limitations.  
> Validation is done using URL and entity presence, which is a stable and recommended approach.

---

### ✅ API Automation

#### 3️⃣ Validate Learning Instance API
- Sends POST request to Learning Instance API
- Uses token-based authentication
- Validates expected failure behavior in Community Edition

**File:**  
`tests/learningInstance.api.spec.js`

**Expected behavior:**
- `400` → Invalid payload validation  
- `401` → Token expired / invalid  

Both outcomes are valid and handled in the test.

---

## 🚀 Tech Stack

- **Node.js**
- **Playwright**
- **JavaScript**
- **Git & GitHub**

---

## 📂 Project Structure

automation-anywhere-playwright/
├── tests/
│ ├── example.spec.js
│ ├── messageBoxTask.spec.js
│ ├── formUpload.spec.js
│ ├── learningInstance.api.spec.js
├── pages/
│ └── LoginPage.js
├── test-assets/
│ └── sample.pdf
├── playwright.config.js
├── global-setup.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md

---

## ▶️ How to Run the Project

### 1️⃣ Install Dependencies
```bash
npm install
2️⃣ Run All Tests
npx playwright test

3️⃣ View HTML Report
npx playwright show-report

🔐 Authentication Handling

UI tests require one-time manual login

Session is saved and reused using Playwright storage state

Sensitive files like auth.json are excluded using .gitignore

🛡️ Notes & Limitations

Automation Anywhere Community Edition restricts certain API operations

UI elements inside canvas/iframes are intentionally not over-asserted

Tests are designed for stability over fragility

💡 Why This Project Is Valuable

This project demonstrates:

Real-world UI automation strategy

SaaS automation constraints handling

API testing with authentication edge cases

Clean Playwright framework design

Secure GitHub practices

👤 Author

GitHub: https://github.com/minchara02-boop


---

## ✅ NEXT STEPS (VERY QUICK)

After creating `README.md`:

```powershell
git add README.md
git commit -m "Add project README"
git push


