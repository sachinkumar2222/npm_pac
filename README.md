# @sparky/validator-lite

A lightweight, zero-dependency JavaScript validation library for modern web and Node.js applications.  
Quickly validate emails, URLs, phone numbers, passwords, PAN, PIN codes, UUIDs, IP addresses, and more — all in one tiny utility.

---

## 🚀 Features

- 📧 `isEmail` — Basic email format validation
- 📱 `isPhone` — International phone number format
- 🌐 `isURL` — Validates HTTP/HTTPS/FTP URLs
- 🔒 `isStrongPassword` — Checks for uppercase, lowercase, digit, symbol, min length
- 📭 `isEmpty` — Checks if value is empty (string, object, array, null, etc.)
- 🔢 `isNumeric` — Validates integer/float strings
- 🔤 `isAlpha` / `isAlphanumeric` — Character-only or char+num strings
- 📏 `isLength` — Validates string length with min/max
- 📅 `isDate` — Checks if value is a valid date
- ✅ `isBoolean` — Accepts true/false, 0/1, "true"/"false"
- 🧾 `isJSON` — Checks for valid JSON strings
- 🧬 `isUUID` — Validates UUID v4
- 🎨 `isHexColor` — Hex color codes (#fff / #ffffff)
- 🧠 `isIP` — IPv4 and IPv6 address check
- 💳 `isCreditCard` — Basic pattern match for Visa, MasterCard, Amex, Discover
- 🇮🇳 `isIndianPIN` — Indian postal code (6-digit)
- 🇮🇳 `isPAN` — Indian PAN card format (e.g., `ABCDE1234F`)

---

## 📦 Installation

```bash
npm install @sparky/validator-lite
