export const slides = [
  {
    id: 0,
    title: "Welcome",
    type: "custom",
    layout: "center",
    component: "WelcomeSlide",
    speakerNotes: `
- Hook: "One site. Every doc. No more ClickUp clutter for DevOps team"
- This immediately establishes the problem and solution
- Sets expectations for what they'll learn
- Keep energy high and confident
- The typewriter effect draws attention to the key message
    `
  },
  {
    id: 1,
    title: "Problem Identification",
    type: "content",
    layout: "full",
    content: `
# Problem: ClickUp Documentation Chaos

<div class="grid grid-cols-2 gap-8 mt-8">
<div class="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-xl border-l-4 border-primary-500 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105">
<h3 class="text-xl font-bold text-primary-800 mb-6">What Engineers Need</h3>
<ul class="space-y-4 text-gray-700">
<li class="flex items-center hover:bg-primary-100 p-3 rounded-lg transition-all duration-300"><span class="w-2 h-2 bg-primary-500 rounded-full mr-4 flex-shrink-0"></span>Git-backed workflow</li>
<li class="flex items-center hover:bg-primary-100 p-3 rounded-lg transition-all duration-300"><span class="w-2 h-2 bg-primary-500 rounded-full mr-4 flex-shrink-0"></span>Version control & rollback</li>
<li class="flex items-center hover:bg-primary-100 p-3 rounded-lg transition-all duration-300"><span class="w-2 h-2 bg-primary-500 rounded-full mr-4 flex-shrink-0"></span>Fast search & navigation</li>
<li class="flex items-center hover:bg-primary-100 p-3 rounded-lg transition-all duration-300"><span class="w-2 h-2 bg-primary-500 rounded-full mr-4 flex-shrink-0"></span>Structured content</li>
<li class="flex items-center hover:bg-primary-100 p-3 rounded-lg transition-all duration-300"><span class="w-2 h-2 bg-primary-500 rounded-full mr-4 flex-shrink-0"></span>Diagram support</li>
</ul>
</div>

<div class="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-xl border-l-4 border-primary-500 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105">
<h3 class="text-xl font-bold text-primary-800 mb-6">ClickUp Problems</h3>
<ul class="space-y-4 text-gray-700">
<li class="flex items-center hover:bg-primary-100 p-3 rounded-lg transition-all duration-300"><span class="w-2 h-2 bg-primary-500 rounded-full mr-4 flex-shrink-0"></span>Inconsistent formatting</li>
<li class="flex items-center hover:bg-primary-100 p-3 rounded-lg transition-all duration-300"><span class="w-2 h-2 bg-primary-500 rounded-full mr-4 flex-shrink-0"></span>Poor navigation</li>
<li class="flex items-center hover:bg-primary-100 p-3 rounded-lg transition-all duration-300"><span class="w-2 h-2 bg-primary-500 rounded-full mr-4 flex-shrink-0"></span>5-10 minutes to find procedures</li>
<li class="flex items-center hover:bg-primary-100 p-3 rounded-lg transition-all duration-300"><span class="w-2 h-2 bg-primary-500 rounded-full mr-4 flex-shrink-0"></span>No version control</li>
<li class="flex items-center hover:bg-primary-100 p-3 rounded-lg transition-all duration-300"><span class="w-2 h-2 bg-primary-500 rounded-full mr-4 flex-shrink-0"></span>Limited diagram support</li>
<li class="flex items-center hover:bg-primary-100 p-3 rounded-lg transition-all duration-300"><span class="w-2 h-2 bg-primary-500 rounded-full mr-4 flex-shrink-0"></span>No Git integration</li>
</ul>
</div>
</div>


    `,
    speakerNotes: `
- Emphasize the technical requirements (Git-backed, performant, structured)
- Show how ClickUp failed to meet these needs
- Quantify the productivity impact
- This slide should take about 1.5 minutes
    `
  },
  {
    id: 5,
    title: "Solution Overview",
    type: "content",
    layout: "full",
    content: `
# The Shift: From ClickUp to Git-First Documentation

<div class="grid grid-cols-2 gap-6 mt-8">
<div class="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-xl border-l-4 border-primary-500 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105">
<h3 class="text-xl font-bold text-primary-800 mb-6">Our Own DevOps Documentation Site</h3>
<ul class="space-y-4 text-gray-700">
<li class="flex items-center hover:bg-primary-100 p-3 rounded-lg transition-all duration-300"><span class="w-2 h-2 bg-primary-500 rounded-full mr-4 flex-shrink-0"></span>Structured & versioned</li>
<li class="flex items-center hover:bg-primary-100 p-3 rounded-lg transition-all duration-300"><span class="w-2 h-2 bg-primary-500 rounded-full mr-4 flex-shrink-0"></span>Designed for engineers</li>
<li class="flex items-center hover:bg-primary-100 p-3 rounded-lg transition-all duration-300"><span class="w-2 h-2 bg-primary-500 rounded-full mr-4 flex-shrink-0"></span>Git-backed workflow</li>
<li class="flex items-center hover:bg-primary-100 p-3 rounded-lg transition-all duration-300"><span class="w-2 h-2 bg-primary-500 rounded-full mr-4 flex-shrink-0"></span>Proper evaluation needed</li>
</ul>
</div>

<div class="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-xl border-l-4 border-primary-500 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105">
<h3 class="text-xl font-bold text-primary-800 mb-6">Key Requirements</h3>
<ul class="space-y-4 text-gray-700">
<li class="flex items-center hover:bg-primary-100 p-3 rounded-lg transition-all duration-300"><span class="w-2 h-2 bg-primary-500 rounded-full mr-4 flex-shrink-0"></span>Markdown support</li>
<li class="flex items-center hover:bg-primary-100 p-3 rounded-lg transition-all duration-300"><span class="w-2 h-2 bg-primary-500 rounded-full mr-4 flex-shrink-0"></span>React components</li>
<li class="flex items-center hover:bg-primary-100 p-3 rounded-lg transition-all duration-300"><span class="w-2 h-2 bg-primary-500 rounded-full mr-4 flex-shrink-0"></span>Built-in search</li>
<li class="flex items-center hover:bg-primary-100 p-3 rounded-lg transition-all duration-300"><span class="w-2 h-2 bg-primary-500 rounded-full mr-4 flex-shrink-0"></span>Versioning system</li>
</ul>
</div>
</div>

<div class="mt-6 text-center">
<blockquote class="text-2xl font-semibold text-gray-800 italic bg-gradient-to-r from-primary-100 to-primary-200 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105">
"Before jumping into the final tech stack, I wanted to evaluate options properly."
</blockquote>
</div>
    `,
    speakerNotes: `
- Explain the systematic evaluation approach
- Emphasize the technical criteria considered
- Show the range of hosting options evaluated
- This slide should take about 1.5 minutes
    `
  },
  {
    id: 6,
    title: "System Architecture & GitHub Workflow",
    type: "architecture",
    layout: "full",
    content: {
                diagram: `graph TD
        A[Developer] --> B[Create Feature Branch]
        B --> C[Edit Markdown/MDX Files]
        C --> D[Local Testing: npm start]
        D --> E[Git Commit with Conventional Commits]
        E --> F[Push & Create Pull Request]
        F --> G[Automated Checks]
        G --> H{PR Title Valid?}
        H -->|No| I[Edit PR Title]
        I --> F
        H -->|Yes| J[Markdown Linting]
        J --> K{All Tests Pass?}
        K -->|No| L[Fix Issues]
        L --> E
        K -->|Yes| M[DevOps Team Review]
        M --> N{Approved?}
        N -->|No| O[Address Feedback]
        O --> E
        N -->|Yes| P[Merge to Main]
        P --> Q[GitHub Actions Deploy]
        Q --> R[Build Docusaurus Site]
        R --> S[Deploy to GitHub Pages]
        S --> T[Live Documentation Site]
        T --> U[JumpCloud SSO Access]
        
        style A fill:#e1f5fe
        style F fill:#f3e5f5
        style G fill:#fff3e0
        style J fill:#e8f5e8
        style M fill:#fff8e1
        style Q fill:#e3f2fd
        style R fill:#e8f5e8
        style S fill:#fce4ec
        style T fill:#e0f2f1
        style U fill:#f1f8e9`,
      title: "GitHub Workflow",
      description: "Complete CI/CD pipeline with automated quality checks, branch protection, and secure deployment",
      diagramLabel: "Mermaid Diagram"
    },
    speakerNotes: `
- Explain the end-to-end workflow
- Highlight the quality gates and protection rules
- Show how automation ensures consistency
- Emphasize the security aspects
- This slide should take about 2 minutes
    `
  },
  {
    id: 3,
    title: "Static Site Generator Comparison",
    type: "content",
    layout: "full",
    content: `
# Static Site Generator Evaluation

<div class="grid grid-cols-3 gap-6 mt-8">
<div class="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-xl border-2 border-primary-200 hover:border-primary-400 transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-xl">
<div class="text-center mb-4">
<h3 class="text-xl font-bold text-primary-800">MkDocs</h3>
</div>
<div class="space-y-3">
<h4 class="font-semibold text-primary-700">Pros:</h4>
<ul class="text-sm text-gray-700 space-y-2">
<li class="flex items-start"><span class="w-2 h-2 bg-primary-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>Easy to use</li>
<li class="flex items-start"><span class="w-2 h-2 bg-primary-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>Simple YAML config</li>
<li class="flex items-start"><span class="w-2 h-2 bg-primary-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>Material theme</li>
</ul>
<h4 class="font-semibold text-primary-700 mt-4">Cons:</h4>
<ul class="text-sm text-gray-700 space-y-2">
<li class="flex items-start"><span class="w-2 h-2 bg-primary-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>Limited customization</li>
<li class="flex items-start"><span class="w-2 h-2 bg-primary-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>No React support</li>
<li class="flex items-start"><span class="w-2 h-2 bg-primary-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>No built-in versioning</li>
</ul>
</div>
</div>

<div class="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-xl border-2 border-primary-200 hover:border-primary-400 transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-xl">
<div class="text-center mb-4">
<h3 class="text-xl font-bold text-primary-800">Hugo</h3>
</div>
<div class="space-y-3">
<h4 class="font-semibold text-primary-700">Pros:</h4>
<ul class="text-sm text-gray-700 space-y-2">
<li class="flex items-start"><span class="w-2 h-2 bg-primary-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>Extremely fast</li>
<li class="flex items-start"><span class="w-2 h-2 bg-primary-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>Large theme ecosystem</li>
<li class="flex items-start"><span class="w-2 h-2 bg-primary-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>Flexible templating</li>
</ul>
<h4 class="font-semibold text-primary-700 mt-4">Cons:</h4>
<ul class="text-sm text-gray-700 space-y-2">
<li class="flex items-start"><span class="w-2 h-2 bg-primary-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>Steep learning curve</li>
<li class="flex items-start"><span class="w-2 h-2 bg-primary-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>Hard to customize</li>
<li class="flex items-start"><span class="w-2 h-2 bg-primary-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>Limited search</li>
</ul>
</div>
</div>

<div class="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-xl border-2 border-primary-500 hover:border-primary-600 transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-xl">
<div class="text-center mb-4">
<h3 class="text-xl font-bold text-primary-800">Docusaurus</h3>
<div class="text-sm text-primary-600 font-semibold">WINNER</div>
</div>
<div class="space-y-3">
<h4 class="font-semibold text-primary-700">Pros:</h4>
<ul class="text-sm text-gray-700 space-y-2">
<li class="flex items-start"><span class="w-2 h-2 bg-primary-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>React-based with MDX</li>
<li class="flex items-start"><span class="w-2 h-2 bg-primary-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>Built-in search</li>
<li class="flex items-start"><span class="w-2 h-2 bg-primary-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>Versioning system</li>
<li class="flex items-start"><span class="w-2 h-2 bg-primary-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>Strong ecosystem</li>
</ul>
<h4 class="font-semibold text-primary-700 mt-4">Cons:</h4>
<ul class="text-sm text-gray-700 space-y-2">
<li class="flex items-start"><span class="w-2 h-2 bg-primary-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>Learning curve</li>
<li class="flex items-start"><span class="w-2 h-2 bg-primary-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>Complex setup</li>
</ul>
</div>
</div>
</div>

<div class="mt-8 bg-gradient-to-r from-primary-50 to-primary-100 p-6 rounded-xl border-2 border-primary-300 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105">
<div class="text-center">
<h3 class="text-2xl font-bold text-primary-800 mb-4">Docusaurus: Best Fit for Our Team</h3>
<div class="grid grid-cols-2 gap-4 text-gray-700">
<div class="text-center">
<div class="text-lg font-semibold mb-2">React + MDX</div>
<div class="text-sm">Supports React components</div>
</div>
<div class="text-center">
<div class="text-lg font-semibold mb-2">Built-in Features</div>
<div class="text-sm">Search & versioning</div>
</div>
</div>
</div>
</div>
    `,
    speakerNotes: `
- Explain the evaluation process
- Highlight key differences between options
- Justify the Docusaurus recommendation
- This slide should take about 2 minutes
    `
  },
  {
    id: 4,
    title: "Hosting Strategy Comparison",
    type: "content",
    layout: "full",
    content: `
# Hosting Platform Evaluation

<div class="grid grid-cols-3 gap-6 mt-8">
<div class="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-xl border-2 border-primary-200 hover:border-primary-400 transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-xl">
<div class="text-center mb-4">
<h3 class="text-xl font-bold text-primary-800">AWS S3 + CloudFront</h3>
<div class="text-sm text-red-600 font-semibold">FAILED</div>
</div>
<div class="space-y-3">
<h4 class="font-semibold text-primary-700">Pros:</h4>
<ul class="text-sm text-gray-700 space-y-2">
<li class="flex items-start"><span class="w-2 h-2 bg-primary-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>Full control</li>
<li class="flex items-start"><span class="w-2 h-2 bg-primary-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>Custom domain</li>
<li class="flex items-start"><span class="w-2 h-2 bg-primary-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>Flexible access</li>
</ul>
<h4 class="font-semibold text-primary-700 mt-4">Cons:</h4>
<ul class="text-sm text-gray-700 space-y-2">
<li class="flex items-start"><span class="w-2 h-2 bg-primary-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>Failed SSO integration</li>
<li class="flex items-start"><span class="w-2 h-2 bg-primary-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>Complex HTTPS redirects</li>
<li class="flex items-start"><span class="w-2 h-2 bg-primary-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>Unscalable for our case</li>
</ul>
</div>
</div>

<div class="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-xl border-2 border-primary-200 hover:border-primary-400 transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-xl">
<div class="text-center mb-4">
<h3 class="text-xl font-bold text-primary-800">AWS EC2</h3>
</div>
<div class="space-y-3">
<h4 class="font-semibold text-primary-700">Pros:</h4>
<ul class="text-sm text-gray-700 space-y-2">
<li class="flex items-start"><span class="w-2 h-2 bg-primary-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>Full control</li>
<li class="flex items-start"><span class="w-2 h-2 bg-primary-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>Customizable</li>
</ul>
<h4 class="font-semibold text-primary-700 mt-4">Cons:</h4>
<ul class="text-sm text-gray-700 space-y-2">
<li class="flex items-start"><span class="w-2 h-2 bg-primary-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>Too expensive</li>
<li class="flex items-start"><span class="w-2 h-2 bg-primary-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>Heavy for static site</li>
<li class="flex items-start"><span class="w-2 h-2 bg-primary-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>Requires maintenance</li>
</ul>
</div>
</div>

<div class="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-xl border-2 border-primary-500 hover:border-primary-600 transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-xl">
<div class="text-center mb-4">
<h3 class="text-xl font-bold text-primary-800">GitHub Pages</h3>
<div class="text-sm text-primary-600 font-semibold">WINNER</div>
</div>
<div class="space-y-3">
<h4 class="font-semibold text-primary-700">Pros:</h4>
<ul class="text-sm text-gray-700 space-y-2">
<li class="flex items-start"><span class="w-2 h-2 bg-primary-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>Git integration</li>
<li class="flex items-start"><span class="w-2 h-2 bg-primary-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>SSO support</li>
<li class="flex items-start"><span class="w-2 h-2 bg-primary-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>Zero infra maintenance</li>
<li class="flex items-start"><span class="w-2 h-2 bg-primary-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>CI/CD compatibility</li>
</ul>
<h4 class="font-semibold text-primary-700 mt-4">Cons:</h4>
<ul class="text-sm text-gray-700 space-y-2">
<li class="flex items-start"><span class="w-2 h-2 bg-primary-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>Limited customization</li>
<li class="flex items-start"><span class="w-2 h-2 bg-primary-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>No custom domain</li>
</ul>
</div>
</div>
</div>

<div class="mt-8 bg-gradient-to-r from-primary-50 to-primary-100 p-6 rounded-xl border-2 border-primary-300 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105">
<div class="text-center">
<h3 class="text-2xl font-bold text-primary-800 mb-4">Pivoted to GitHub Pages</h3>
<div class="grid grid-cols-2 gap-4 text-gray-700">
<div class="text-center">
<div class="text-lg font-semibold mb-2">Trial → Failed → Decision</div>
<div class="text-sm">Real-world testing approach</div>
</div>
<div class="text-center">
<div class="text-lg font-semibold mb-2">Perfect Integration</div>
<div class="text-sm">JumpCloud SSO + Git workflow</div>
</div>
</div>
</div>
</div>
    `,
    speakerNotes: `
- Explain the hosting evaluation process
- Highlight the access control considerations
- Justify the GitHub Pages recommendation
- This slide should take about 2 minutes
    `
  },
  {
    id: 7,
    title: "Implementation Details",
    type: "content",
    layout: "full",
    content: `
# Site Architecture + Tools Used

<div class="grid grid-cols-2 gap-6 mt-8">
<div class="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-xl border-l-4 border-primary-500 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105">
<h3 class="text-xl font-bold text-primary-800 mb-6">Technology Stack</h3>
<ul class="space-y-4 text-gray-700">
<li class="flex items-center hover:bg-primary-100 p-3 rounded-lg transition-all duration-300"><span class="w-2 h-2 bg-primary-500 rounded-full mr-4 flex-shrink-0"></span>Docusaurus for static site</li>
<li class="flex items-center hover:bg-primary-100 p-3 rounded-lg transition-all duration-300"><span class="w-2 h-2 bg-primary-500 rounded-full mr-4 flex-shrink-0"></span>MDX to mix Markdown with React</li>
<li class="flex items-center hover:bg-primary-100 p-3 rounded-lg transition-all duration-300"><span class="w-2 h-2 bg-primary-500 rounded-full mr-4 flex-shrink-0"></span>Framer Motion for animations</li>
<li class="flex items-center hover:bg-primary-100 p-3 rounded-lg transition-all duration-300"><span class="w-2 h-2 bg-primary-500 rounded-full mr-4 flex-shrink-0"></span>TailwindCSS for styling</li>
<li class="flex items-center hover:bg-primary-100 p-3 rounded-lg transition-all duration-300"><span class="w-2 h-2 bg-primary-500 rounded-full mr-4 flex-shrink-0"></span>Mermaid.js for diagrams</li>
</ul>
</div>

<div class="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-xl border-l-4 border-primary-500 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105">
<h3 class="text-xl font-bold text-primary-800 mb-6">Key Innovation</h3>
<ul class="space-y-4 text-gray-700">
<li class="flex items-center hover:bg-primary-100 p-3 rounded-lg transition-all duration-300"><span class="w-2 h-2 bg-primary-500 rounded-full mr-4 flex-shrink-0"></span>MDX made docs interactive</li>
<li class="flex items-center hover:bg-primary-100 p-3 rounded-lg transition-all duration-300"><span class="w-2 h-2 bg-primary-500 rounded-full mr-4 flex-shrink-0"></span>React components in docs</li>
<li class="flex items-center hover:bg-primary-100 p-3 rounded-lg transition-all duration-300"><span class="w-2 h-2 bg-primary-500 rounded-full mr-4 flex-shrink-0"></span>Charts & animated content</li>
<li class="flex items-center hover:bg-primary-100 p-3 rounded-lg transition-all duration-300"><span class="w-2 h-2 bg-primary-500 rounded-full mr-4 flex-shrink-0"></span>Reusable layout blocks</li>
<li class="flex items-center hover:bg-primary-100 p-3 rounded-lg transition-all duration-300"><span class="w-2 h-2 bg-primary-500 rounded-full mr-4 flex-shrink-0"></span>Modern, intuitive UX</li>
</ul>
</div>
</div>

<div class="mt-6 text-center">
<blockquote class="text-2xl font-semibold text-gray-800 italic bg-gradient-to-r from-primary-100 to-primary-200 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105">
"It's not just about making docs work — it's about making them feel intuitive, modern, and enjoyable to use."
</blockquote>
</div>
    `,
    speakerNotes: `
- Focus on the technical implementation
- Emphasize the automation and quality aspects
- Show the deployment pipeline
- This slide should take about 1.5 minutes
    `
  },
  {
    id: 8,
    title: "Before vs After: Documentation Experience",
    type: "content",
    layout: "full",
    content: `
# Before vs After

<div class="grid grid-cols-2 gap-8 mt-8">
<div class="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl border-l-4 border-red-500 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105">
<h3 class="text-xl font-bold text-red-800 mb-6">ClickUp Chaos</h3>
<div class="grid grid-cols-2 gap-4 mb-6">
<div class="bg-white/50 p-4 rounded-lg">
<div class="text-sm text-gray-600 mb-1">Search Time</div>
<div class="text-2xl font-bold text-red-600">5-10 minutes</div>
</div>
<div class="bg-white/50 p-4 rounded-lg">
<div class="text-sm text-gray-600 mb-1">Maintenance</div>
<div class="text-2xl font-bold text-red-600">Manual</div>
</div>
</div>
<div class="bg-white/50 p-4 rounded-lg">
<h4 class="font-semibold text-red-800 mb-4">Pain Points</h4>
<ul class="text-sm text-gray-700 space-y-2">
<li class="flex items-center"><span class="w-2 h-2 bg-red-500 rounded-full mr-3 flex-shrink-0"></span>Inconsistent formatting</li>
<li class="flex items-center"><span class="w-2 h-2 bg-red-500 rounded-full mr-3 flex-shrink-0"></span>Poor navigation</li>
<li class="flex items-center"><span class="w-2 h-2 bg-red-500 rounded-full mr-3 flex-shrink-0"></span>No version control</li>
<li class="flex items-center"><span class="w-2 h-2 bg-red-500 rounded-full mr-3 flex-shrink-0"></span>Slow search</li>
</ul>
</div>
</div>

<div class="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border-l-4 border-green-500 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105">
<h3 class="text-xl font-bold text-green-800 mb-6">Git-First Hub</h3>
<div class="grid grid-cols-2 gap-4 mb-6">
<div class="bg-white/50 p-4 rounded-lg">
<div class="text-sm text-gray-600 mb-1">Search Time</div>
<div class="text-2xl font-bold text-green-600">30 seconds</div>
</div>
<div class="bg-white/50 p-4 rounded-lg">
<div class="text-sm text-gray-600 mb-1">Maintenance</div>
<div class="text-2xl font-bold text-green-600">Automated</div>
</div>
</div>
<div class="bg-white/50 p-4 rounded-lg">
<h4 class="font-semibold text-green-800 mb-4">Improvements</h4>
<ul class="text-sm text-gray-700 space-y-2">
<li class="flex items-center"><span class="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></span>Consistent formatting</li>
<li class="flex items-center"><span class="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></span>Intuitive navigation</li>
<li class="flex items-center"><span class="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></span>Git version control</li>
<li class="flex items-center"><span class="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></span>Fast search</li>
</ul>
</div>
</div>
</div>

<div class="mt-8 text-center">
<div class="bg-gradient-to-r from-primary-50 to-primary-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105">
<h3 class="text-xl font-bold text-primary-800 mb-4">Dramatic Improvements</h3>
<p class="text-lg text-gray-700">Search speed and maintenance automation transformed the experience.</p>
</div>
</div>
`,
    speakerNotes: `
- Emphasize the dramatic time savings (5-10 minutes → 30 seconds)
- Highlight the onboarding improvement (2-3 weeks → 3-5 days)
- Show how accuracy improved from 60% to 95%
- This slide should take about 1 minute
    `
  },
  {
    id: 9,
    title: "Live Demo",
    type: "demo",
    layout: "full",
    content: {
      title: "Live Demo: Documentation Site",
      url: "https://glowing-system-mrjj8we.pages.github.io/",
      fallback: {
        title: "Documentation Site Demo",
        description: "Your GitHub Pages documentation site is live at the URL above! Here's what you've built:",
        features: [
          "Git-backed documentation with PR workflow",
          "Fast search and navigation",
          "Consistent Markdown formatting",
          "Responsive design for all devices",
          "JumpCloud SSO integration",
          "Automated deployment via GitHub Actions"
        ],
        metrics: {
          "Search Time": "30 seconds (vs 5-10 minutes in ClickUp)",
          "Onboarding": "3-5 days (vs 2-3 weeks)",
          "Accuracy": "95% (vs 60%)",
          "Maintenance": "Automated (vs Manual)"
        }
      }
    },
    speakerNotes: `
- This is the moment to show the actual solution
- Have a backup screen recording ready
- Focus on the user experience
- Demonstrate search speed and content quality
- This slide should take about 1.5 minutes
    `
  },

  {
    id: 10,
    title: "Questions & Discussion",
    type: "content",
    layout: "full",
    content: `
# Key Takeaways

<div class="grid grid-cols-1 gap-8 mt-8">
<div class="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-xl border-l-4 border-primary-500 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105">
<h3 class="text-xl font-bold text-primary-800 mb-6">Lessons Learned</h3>
<ul class="space-y-4 text-gray-700">
<li class="flex items-center hover:bg-primary-100 p-3 rounded-lg transition-all duration-300"><span class="w-2 h-2 bg-primary-500 rounded-full mr-4 flex-shrink-0"></span>As a DevOps engineer, you're always learning — Git workflows, new technologies, testing, security</li>
<li class="flex items-center hover:bg-primary-100 p-3 rounded-lg transition-all duration-300"><span class="w-2 h-2 bg-primary-500 rounded-full mr-4 flex-shrink-0"></span>It's actually fun! Exploring new tools and solving complex problems keeps the work exciting</li>
<li class="flex items-center hover:bg-primary-100 p-3 rounded-lg transition-all duration-300"><span class="w-2 h-2 bg-primary-500 rounded-full mr-4 flex-shrink-0"></span>Security + automation = trust + scale — the foundation of reliable DevOps</li>
<li class="flex items-center hover:bg-primary-100 p-3 rounded-lg transition-all duration-300"><span class="w-2 h-2 bg-primary-500 rounded-full mr-4 flex-shrink-0"></span>Good documentation makes teams faster, more consistent, and less siloed</li>
<li class="flex items-center hover:bg-primary-100 p-3 rounded-lg transition-all duration-300"><span class="w-2 h-2 bg-primary-500 rounded-full mr-4 flex-shrink-0"></span>Technical growth + user experience design = better solutions for everyone</li>
</ul>
</div>
</div>

<div class="mt-16 text-center">
<h2 class="text-5xl font-bold text-primary-700 mb-8 animate-float">
<span class="inline-block opacity-0 animate-fadeInUp" style="animation-delay: 0.1s; animation-duration: 1s; animation-fill-mode: forwards;">T</span>
<span class="inline-block opacity-0 animate-fadeInUp" style="animation-delay: 0.3s; animation-duration: 1s; animation-fill-mode: forwards;">h</span>
<span class="inline-block opacity-0 animate-fadeInUp" style="animation-delay: 0.5s; animation-duration: 1s; animation-fill-mode: forwards;">a</span>
<span class="inline-block opacity-0 animate-fadeInUp" style="animation-delay: 0.7s; animation-duration: 1s; animation-fill-mode: forwards;">n</span>
<span class="inline-block opacity-0 animate-fadeInUp" style="animation-delay: 0.9s; animation-duration: 1s; animation-fill-mode: forwards;">k</span>
<span class="inline-block opacity-0 animate-fadeInUp" style="animation-delay: 1.1s; animation-duration: 1s; animation-fill-mode: forwards;"> </span>
<span class="inline-block opacity-0 animate-fadeInUp" style="animation-delay: 1.3s; animation-duration: 1s; animation-fill-mode: forwards;">Y</span>
<span class="inline-block opacity-0 animate-fadeInUp" style="animation-delay: 1.5s; animation-duration: 1s; animation-fill-mode: forwards;">o</span>
<span class="inline-block opacity-0 animate-fadeInUp" style="animation-delay: 1.7s; animation-duration: 1s; animation-fill-mode: forwards;">u</span>
<span class="inline-block opacity-0 animate-fadeInUp" style="animation-delay: 1.9s; animation-duration: 1s; animation-fill-mode: forwards;">!</span>
</h2>
<div class="text-3xl font-semibold text-primary-700 mb-6 animate-float" style="animation-delay: 1s;">
<span class="inline-block opacity-0 animate-fadeInUp" style="animation-delay: 2.5s; animation-duration: 1s; animation-fill-mode: forwards;">F</span>
<span class="inline-block opacity-0 animate-fadeInUp" style="animation-delay: 2.7s; animation-duration: 1s; animation-fill-mode: forwards;">o</span>
<span class="inline-block opacity-0 animate-fadeInUp" style="animation-delay: 2.9s; animation-duration: 1s; animation-fill-mode: forwards;">r</span>
<span class="inline-block opacity-0 animate-fadeInUp" style="animation-delay: 3.1s; animation-duration: 1s; animation-fill-mode: forwards;"> </span>
<span class="inline-block opacity-0 animate-fadeInUp" style="animation-delay: 3.3s; animation-duration: 1s; animation-fill-mode: forwards;">y</span>
<span class="inline-block opacity-0 animate-fadeInUp" style="animation-delay: 3.5s; animation-duration: 1s; animation-fill-mode: forwards;">o</span>
<span class="inline-block opacity-0 animate-fadeInUp" style="animation-delay: 3.7s; animation-duration: 1s; animation-fill-mode: forwards;">u</span>
<span class="inline-block opacity-0 animate-fadeInUp" style="animation-delay: 3.9s; animation-duration: 1s; animation-fill-mode: forwards;">r</span>
<span class="inline-block opacity-0 animate-fadeInUp" style="animation-delay: 4.1s; animation-duration: 1s; animation-fill-mode: forwards;"> </span>
<span class="inline-block opacity-0 animate-fadeInUp" style="animation-delay: 4.3s; animation-duration: 1s; animation-fill-mode: forwards;">a</span>
<span class="inline-block opacity-0 animate-fadeInUp" style="animation-delay: 4.5s; animation-duration: 1s; animation-fill-mode: forwards;">t</span>
<span class="inline-block opacity-0 animate-fadeInUp" style="animation-delay: 4.7s; animation-duration: 1s; animation-fill-mode: forwards;">t</span>
<span class="inline-block opacity-0 animate-fadeInUp" style="animation-delay: 4.9s; animation-duration: 1s; animation-fill-mode: forwards;">e</span>
<span class="inline-block opacity-0 animate-fadeInUp" style="animation-delay: 5.1s; animation-duration: 1s; animation-fill-mode: forwards;">n</span>
<span class="inline-block opacity-0 animate-fadeInUp" style="animation-delay: 5.3s; animation-duration: 1s; animation-fill-mode: forwards;">t</span>
<span class="inline-block opacity-0 animate-fadeInUp" style="animation-delay: 5.5s; animation-duration: 1s; animation-fill-mode: forwards;">i</span>
<span class="inline-block opacity-0 animate-fadeInUp" style="animation-delay: 5.7s; animation-duration: 1s; animation-fill-mode: forwards;">o</span>
<span class="inline-block opacity-0 animate-fadeInUp" style="animation-delay: 5.9s; animation-duration: 1s; animation-fill-mode: forwards;">n</span>
</div>
<div class="mt-8 flex justify-center space-x-6">
<div class="w-3 h-3 bg-primary-500 rounded-full animate-pulse" style="animation-delay: 6.5s;"></div>
<div class="w-3 h-3 bg-primary-600 rounded-full animate-pulse" style="animation-delay: 6.7s;"></div>
<div class="w-3 h-3 bg-primary-700 rounded-full animate-pulse" style="animation-delay: 6.9s;"></div>
</div>
</div>
    `,
    speakerNotes: `
- Summarize the key points
- Provide contact information
- Invite questions
- Keep energy high for Q&A
- This slide should take about 30 seconds
    `
  }
] 