# Rapid ERP

Rapid ERP is a high-performance Next.js application built with TypeScript, Redux Toolkit (RTK Query), next-intl for localization, and Tailwind CSS.

## Getting Started

### 1. Installation
Install the project dependencies using `pnpm`:
```bash
pnpm install
```
*(If prompted for build scripts, run `pnpm approve-builds` to authorize packages like `@swc/core` and `sharp`.)*

### 2. Run Development Server
Run the local dev server:
```bash
pnpm dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Editor Configuration

To maintain code standards, formatting, and linting guidelines automatically without changing your global VS Code settings, this project includes workspace-level configurations (`.vscode/settings.json` and `.vscode/extensions.json`).

### Recommended Extensions & Settings
When you open this project folder in Visual Studio Code, it will suggest installing the workspace-recommended extensions. 

To view and install them manually:
1. Open the **Extensions** panel in VS Code (`Cmd + Shift + X` on macOS or `Ctrl + Shift + X` on Windows/Linux).
2. Type `@recommended` in the search box.
3. Install the workspace recommendations listed:
   - **ESLint** (`dbaeumer.vscode-eslint`)
   - **Prettier** (`esbenp.prettier-vscode`)
   - **Tailwind CSS IntelliSense** (`bradlc.vscode-tailwindcss`)
   - **NPM IntelliSense** (`christian-kohler.npm-intellisense`)

Once installed, these extensions and settings work automatically:
- Editor actions on save will format code, organize imports, and auto-fix linting issues.
- Tailwind utility classes are automatically sorted on save using `prettier-plugin-tailwindcss`.
- Tailwind IntelliSense works inside helper functions like `clsx(...)` and `twMerge(...)`.
- A standard 2-space indentation style is enforced across the project.


