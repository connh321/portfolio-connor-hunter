# Connor Hunter Portfolio

A modern, responsive portfolio site built with React, Next.js, AWS, and Material UI. This site showcases Connor Hunter's projects, experience, certifications, and skills with dynamic rendering and optimized static hosting on AWS. It is designed with scalability, accessibility, and performance in mind.

## Features

- 💡 Information about Connor Hunter.
- 📱 Mobile-first responsive layout
- ⚙️ AWS Amplify Hosting
- 🌐 Custom domain with HTTPS via Route 53 and ACM
- 🎨 Material UI theme support with modern design
- 🖼️ Static storage and access via S3
- 🧩 Modular and maintainable project structure

## Tech Stack

- **Frontend:**
  - Next.js 15 (App Router)
  - React 19
  - TypeScript
  - Material UI
  - Redux Toolkit

- **Backend & Infra:**
  - AWS Amplify for hosting and deployments
  - S3 for static and dynamic asset storage
  - CloudFront for CDN caching and delivery
  - Route 53 for DNS and custom domain
  - ACM for SSL/TLS certificates

- **CI/CD:**
  - AWS Amplify Connection to GitHub

## Getting Started

### Development Prerequisites

- Node.js (Latest LTS version)
- GitHub account
- AWS account and connection to Amplify.
- Environment variable values to fetch data
- S3 bucket with data.

### Installation

1. Clone the repository

```bash
git clone https://github.com/connh321/portfolio-connor-hunter.git
cd portfolio-connor-hunter
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

4. For production build and preview

```bash
npm run build
npm start
```

## Project Structure

portfolio-connor-hunter/
├── public/ # Static assets like resume PDFs, favicons
├── src/
│ ├── app/ # Next.js App Router pages and layouts
│ ├── components/ # Reusable UI components
│ ├── redux/ # Redux slices and store config
│ ├── types/ # TypeScript interfaces
│ └── utils/ # Utility functions and constants
└── .github/ # GitHub Actions workflows

## Development

- npm run dev - Start development server
- npm run build - Build production bundle
- npm run lint - Run ESLint
- npm run format - Format code
- npm test - Run tests

## Deployment

The application can be deployed using AWS Amplify.
First push your changes to GitHub and Amplify should automatically pick up the changes.

## Git Hooks

This project uses Husky for Git hooks to ensure code quality:

### Pre-commit

- Runs ESLint
- Runs Prettier formatting

### Pre-push

- Runs ESLint
- Runs Prettier formatting

To skip hooks temporarily while committing/ pushing (not recommended), use:

```bash
--no-verify
```

Note: Hooks can be found in the .husky directory

## Contributing

1. Fork the repository
2. Create your feature branch (git checkout -b feature/AmazingFeature)
3. Commit your changes (git commit -m 'Add some AmazingFeature')
4. Push to the branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

Connor Hunter - [@connh321](https://github.com/connh321)
