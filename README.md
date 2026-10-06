# Stella Space

A modern Angular landing page built for a luxury real-estate / vastu-inspired brand concept.

## Overview

This project is a static single-page Angular application designed to match a provided Stella Space visual concept. It includes a branded hero section, custom SVG leaf background, stylized logo treatment, and a polished marketing layout for a premium property / design consultancy experience.

## Tech Stack

- Angular 19
- TypeScript
- SCSS
- HTML
- Node.js

## Project Structure

```text
src/
├── app/
│   ├── stella_space/
│   │   ├── stella_space.component.ts
│   │   └── stella_space.component.html
│   ├── stella_space_admin/
│   └── app.routes.ts
├── libs/
│   ├── pages/
│   │   └── en.json
│   ├── services/
│   ├── shared/common/leaf-background/
│   └── styles/
├── index.html
└── main.ts
```

Angular project: `stellaSpace`  
npm package: `stella-space`

```text
├── .cpanel.yml
├── .gitignore
├── angular.json
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── README.md
└── package-lock.json
```

## Prerequisites

Make sure you have the following installed:

- Node.js 18+
- npm

## Local Setup

```bash
npm install
npm start
```

Then open:

```text
http://localhost:4200/
```

## Production Build

```bash
ng build
```

The built files will be generated in:

```text
dist/stella-space/
```

## cPanel Deployment

This project includes a `.cpanel.yml` file for cPanel Git deployment.

### Update before deployment

Open `.cpanel.yml` and replace:

```yaml
YOUR_CPANEL_USERNAME
```

with your actual cPanel username, for example:

```yaml
/home/exampleuser/public_html/
```

### Deploy steps

1. Push this repository to your remote Git provider.
2. In cPanel, go to:
   - Files
   - Git Version Control
3. Create or connect the Git repository in cPanel.
4. Ensure the repository contains the `.cpanel.yml` file.
5. Trigger deployment from cPanel or push to the cPanel-managed repository.

### Example deployment config

```yaml
---
deployment:
  tasks:
    - export DEPLOYPATH=/home/YOUR_CPANEL_USERNAME/public_html/
    - /bin/rm -rf $DEPLOYPATH/*
    - /bin/cp -R dist/stella-space/. $DEPLOYPATH
```

## Git

To commit and push updates:

```bash
git add .
git commit -m "Your commit message"
git push origin master
```

## Notes

- This app is designed as a static marketing landing page.
- It is not a full CMS or backend-integrated application.
- The app is ready to be hosted on a static hosting provider or cPanel-managed web hosting.

## License

This project is for demonstration and portfolio use.
