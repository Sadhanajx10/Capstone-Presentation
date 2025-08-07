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
    id: 6,
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
        N -->|No| O[Request Changes]
        O --> P[Update Code]
        P --> E
        N -->|Yes| Q[Merge to Main]
        Q --> R[GitHub Actions Deploy]
        R --> S[Build Docusaurus Site]
        S --> T[Deploy to GitHub Pages]
        T --> U[JumpCloud SSO Access]
        U --> V[Live Documentation Site]
        
        style A fill:#e1f5fe
        style B fill:#f3e5f5
        style C fill:#e8f5e8
        style D fill:#fff3e0
        style E fill:#fce4ec
        style F fill:#f1f8e9
        style G fill:#e0f2f1
        style H fill:#fff8e1
        style I fill:#ffebee
        style J fill:#e8eaf6
        style K fill:#fff8e1
        style L fill:#ffebee
        style M fill:#e0f2f1
        style N fill:#fff8e1
        style O fill:#ffebee
        style P fill:#fce4ec
        style Q fill:#e8f5e8
        style R fill:#f3e5f5
        style S fill:#e1f5fe
        style T fill:#f3e5f5
        style U fill:#e8f5e8
        style V fill:#e1f5fe`,
                title: "GitHub Workflow"
            },
    speakerNotes: `
- Walk through the complete workflow
- Emphasize the security aspects
- This slide should take about 2 minutes
    `
  },
  {
    id: 9,
    title: "Live Demo",
    type: "demo",
    layout: "center",
    component: "LiveDemo",
    content: {
      title: "Live Documentation Site",
      url: "https://glowing-system-mrjj8we.pages.github.io/"
    },
    speakerNotes: `
- Show the live site
- Demonstrate key features
- Highlight the user experience
- This slide should take about 1 minute
    `
  },
  {
    id: 10,
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
<div class="text-2xl font-bold text-green-600">&lt; 30 seconds</div>
</div>
<div class="bg-white/50 p-4 rounded-lg">
<div class="text-sm text-gray-600 mb-1">Maintenance</div>
<div class="text-2xl font-bold text-green-600">Automated</div>
</div>
</div>
<div class="bg-white/50 p-4 rounded-lg">
<h4 class="font-semibold text-green-800 mb-4">Improvements</h4>
<ul class="text-sm text-gray-700 space-y-2">
<li class="flex items-center"><span class="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></span>Structured content</li>
<li class="flex items-center"><span class="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></span>Fast navigation</li>
<li class="flex items-center"><span class="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></span>Version control</li>
<li class="flex items-center"><span class="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></span>Instant search</li>
</ul>
</div>
</div>
</div>

<div class="mt-8 text-center">
<blockquote class="text-2xl font-semibold text-gray-800 italic bg-gradient-to-r from-primary-100 to-primary-200 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105">
"From chaos to clarity: Documentation that actually works for engineers."
</blockquote>
</div>
    `,
    speakerNotes: `
- Emphasize the dramatic improvement
- Quantify the benefits
- Show the transformation
- This slide should take about 1 minute
    `
  },
  {
    id: 11,
    title: "Key Takeaways",
    type: "content",
    layout: "full",
    content: `
# Key Takeaways

<div class="bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-xl border-l-4 border-primary-500 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105">
<h2 class="text-3xl font-bold text-primary-800 mb-8 text-center">Lessons Learned</h2>
<div class="grid grid-cols-1 gap-6">
<ul class="space-y-4 text-gray-700">
<li class="flex items-center hover:bg-primary-100 p-3 rounded-lg transition-all duration-300"><span class="w-2 h-2 bg-primary-500 rounded-full mr-4 flex-shrink-0"></span>As a DevOps engineer, you're always learning — Git workflows, new technologies, testing, security</li>
<li class="flex items-center hover:bg-primary-100 p-3 rounded-lg transition-all duration-300"><span class="w-2 h-2 bg-primary-500 rounded-full mr-4 flex-shrink-0"></span>It's actually fun! Exploring new tools and solving complex problems keeps the work exciting</li>
<li class="flex items-center hover:bg-primary-100 p-3 rounded-lg transition-all duration-300"><span class="w-2 h-2 bg-primary-500 rounded-full mr-4 flex-shrink-0"></span>Security + automation = trust + scale — the foundation of reliable DevOps</li>
<li class="flex items-center hover:bg-primary-100 p-3 rounded-lg transition-all duration-300"><span class="w-2 h-2 bg-primary-500 rounded-full mr-4 flex-shrink-0"></span>Good documentation makes teams faster, more consistent, and less siloed</li>
<li class="flex items-center hover:bg-primary-100 p-3 rounded-lg transition-all duration-300"><span class="w-2 h-2 bg-primary-500 rounded-full mr-4 flex-shrink-0"></span>Technical growth + user experience design = better solutions for everyone</li>
</ul>
</div>
</div>

<div class="mt-8 text-center">
<div class="text-5xl font-bold text-primary-600 mb-4 animate-float">Thank You!</div>
<div class="text-xl text-gray-600">Questions & Discussion</div>
</div>
    `,
    speakerNotes: `
- Summarize key learnings
- Emphasize the continuous learning aspect
- End with confidence
- This slide should take about 1 minute
    `
  }
]; 