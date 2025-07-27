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
# The Problem: ClickUp Documentation Limitations

<div class="grid grid-cols-2 gap-8 mt-8">
<div class="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-xl border-l-4 border-primary-500 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105">
<h3 class="text-xl font-bold text-primary-800 mb-6">What We Needed</h3>
<ul class="space-y-4 text-gray-700">
<li class="flex items-center hover:bg-primary-100 p-3 rounded-lg transition-all duration-300"><span class="w-2 h-2 bg-primary-500 rounded-full mr-4 flex-shrink-0"></span><strong>Git-backed</strong> (markdown + PR-based workflow)</li>
<li class="flex items-center hover:bg-primary-100 p-3 rounded-lg transition-all duration-300"><span class="w-2 h-2 bg-primary-500 rounded-full mr-4 flex-shrink-0"></span><strong>Version Control</strong> with proper Git history and rollback capability</li>
<li class="flex items-center hover:bg-primary-100 p-3 rounded-lg transition-all duration-300"><span class="w-2 h-2 bg-primary-500 rounded-full mr-4 flex-shrink-0"></span><strong>Performant</strong> and fast for daily reference</li>
<li class="flex items-center hover:bg-primary-100 p-3 rounded-lg transition-all duration-300"><span class="w-2 h-2 bg-primary-500 rounded-full mr-4 flex-shrink-0"></span><strong>Easy to maintain</strong> with structured content</li>
<li class="flex items-center hover:bg-primary-100 p-3 rounded-lg transition-all duration-300"><span class="w-2 h-2 bg-primary-500 rounded-full mr-4 flex-shrink-0"></span><strong>Support diagrams</strong>, runbooks, and architecture guides</li>
</ul>
</div>

<div class="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-xl border-l-4 border-primary-500 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105">
<h3 class="text-xl font-bold text-primary-800 mb-6">ClickUp's Limitations</h3>
<ul class="space-y-4 text-gray-700">
<li class="flex items-center hover:bg-primary-100 p-3 rounded-lg transition-all duration-300"><span class="w-2 h-2 bg-primary-500 rounded-full mr-4 flex-shrink-0"></span><strong>Inconsistent Formatting</strong>: Every doc looked different</li>
<li class="flex items-center hover:bg-primary-100 p-3 rounded-lg transition-all duration-300"><span class="w-2 h-2 bg-primary-500 rounded-full mr-4 flex-shrink-0"></span><strong>Poor Navigation</strong>: Difficult to find specific procedures</li>
<li class="flex items-center hover:bg-primary-100 p-3 rounded-lg transition-all duration-300"><span class="w-2 h-2 bg-primary-500 rounded-full mr-4 flex-shrink-0"></span><strong>Too Slow</strong>: 5-10 minutes to find DevOps procedures</li>
<li class="flex items-center hover:bg-primary-100 p-3 rounded-lg transition-all duration-300"><span class="w-2 h-2 bg-primary-500 rounded-full mr-4 flex-shrink-0"></span><strong>No Version Control</strong>: Changes lost, no rollback capability</li>
<li class="flex items-center hover:bg-primary-100 p-3 rounded-lg transition-all duration-300"><span class="w-2 h-2 bg-primary-500 rounded-full mr-4 flex-shrink-0"></span><strong>Limited Structure</strong>: Can't support system diagrams properly</li>
<li class="flex items-center hover:bg-primary-100 p-3 rounded-lg transition-all duration-300"><span class="w-2 h-2 bg-primary-500 rounded-full mr-4 flex-shrink-0"></span><strong>No Git Integration</strong>: No PR-based contribution workflow</li>
</ul>
</div>
</div>

<div class="mt-6 bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-xl border-l-2 border-primary-500 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105">
<h3 class="text-2xl font-bold text-primary-800 mb-6 text-center">Impact on DevOps Team</h3>
<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
<div class="bg-white/60 backdrop-blur-sm p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
<h4 class="text-lg font-semibold text-primary-700 mb-3">Team Efficiency</h4>
<ul class="space-y-3 text-gray-700">
<li class="flex items-start hover:bg-primary-50 p-3 rounded-md transition-all duration-300">
<span class="w-2 h-2 bg-primary-500 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
<div class="text-sm">
<strong class="text-primary-800">Onboarding:</strong> New engineers/interns spending 30% or more productive time just to find documents
</div>
</li>
<li class="flex items-start hover:bg-primary-50 p-3 rounded-md transition-all duration-300">
<span class="w-2 h-2 bg-primary-500 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
<div class="text-sm">
<strong class="text-primary-800">Incident Response:</strong> Critical procedures buried in ClickUp
</div>
</li>
</ul>
</div>
<div class="bg-white/60 backdrop-blur-sm p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
<h4 class="text-lg font-semibold text-primary-700 mb-3">Knowledge Management</h4>
<ul class="space-y-3 text-gray-700">
<li class="flex items-start hover:bg-primary-50 p-3 rounded-md transition-all duration-300">
<span class="w-2 h-2 bg-primary-500 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
<div class="text-sm">
<strong class="text-primary-800">Knowledge Loss:</strong> Bus factor = 1 for many processes
</div>
</li>
<li class="flex items-start hover:bg-primary-50 p-3 rounded-md transition-all duration-300">
<span class="w-2 h-2 bg-primary-500 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
<div class="text-sm">
<strong class="text-primary-800">Productivity:</strong> 30% of time spent searching for information
</div>
</li>
</ul>
</div>
</div>
</div>

<div class="mt-8 text-center">
<blockquote class="text-2xl font-semibold text-gray-800 italic bg-gradient-to-r from-primary-100 to-primary-200 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105">
"Finding deployment procedures took 8 minutes before; now it's 30 seconds."
</blockquote>
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
    id: 2,
    title: "Solution Overview",
    type: "content",
    layout: "full",
    content: `
# What We Built: Modern DevOps Documentation Hub

<div class="grid grid-cols-2 gap-6 mt-8">
<div class="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-xl border-l-4 border-primary-500 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105">
<h3 class="text-xl font-bold text-primary-800 mb-6">Technology Stack</h3>
<ul class="space-y-4 text-gray-700">
<li class="flex items-center hover:bg-primary-100 p-3 rounded-lg transition-all duration-300"><span class="w-2 h-2 bg-primary-500 rounded-full mr-4 flex-shrink-0"></span><strong>Docusaurus</strong>: React-based docs with MDX support</li>
<li class="flex items-center hover:bg-primary-100 p-3 rounded-lg transition-all duration-300"><span class="w-2 h-2 bg-primary-500 rounded-full mr-4 flex-shrink-0"></span><strong>Markdown/MDX</strong>: Easy to write, supports React components</li>
<li class="flex items-center hover:bg-primary-100 p-3 rounded-lg transition-all duration-300"><span class="w-2 h-2 bg-primary-500 rounded-full mr-4 flex-shrink-0"></span><strong>Mermaid.js</strong>: Built-in diagram support</li>
<li class="flex items-center hover:bg-primary-100 p-3 rounded-lg transition-all duration-300"><span class="w-2 h-2 bg-primary-500 rounded-full mr-4 flex-shrink-0"></span><strong>GitHub Actions</strong>: Automated CI/CD pipeline</li>
<li class="flex items-center hover:bg-primary-100 p-3 rounded-lg transition-all duration-300"><span class="w-2 h-2 bg-primary-500 rounded-full mr-4 flex-shrink-0"></span><strong>JumpCloud SSO</strong>: Secure access control</li>
</ul>
</div>

<div class="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-xl border-l-4 border-primary-500 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105">
<h3 class="text-xl font-bold text-primary-800 mb-6">DevOps Best Practices</h3>
<ul class="space-y-4 text-gray-700">
<li class="flex items-center hover:bg-primary-100 p-3 rounded-lg transition-all duration-300"><span class="w-2 h-2 bg-primary-500 rounded-full mr-4 flex-shrink-0"></span><strong>Git-backed Workflow</strong>: All changes via Pull Requests</li>
<li class="flex items-center hover:bg-primary-100 p-3 rounded-lg transition-all duration-300"><span class="w-2 h-2 bg-primary-500 rounded-full mr-4 flex-shrink-0"></span><strong>Automated Linting</strong>: Markdown formatting checks</li>
<li class="flex items-center hover:bg-primary-100 p-3 rounded-lg transition-all duration-300"><span class="w-2 h-2 bg-primary-500 rounded-full mr-4 flex-shrink-0"></span><strong>Branch Protection</strong>: No direct changes to main</li>
<li class="flex items-center hover:bg-primary-100 p-3 rounded-lg transition-all duration-300"><span class="w-2 h-2 bg-primary-500 rounded-full mr-4 flex-shrink-0"></span><strong>CODEOWNERS</strong>: Auto-assigns DevOps reviewers</li>
</ul>
</div>
</div>

<div class="grid grid-cols-2 gap-6 mt-6">
<div class="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-xl border-l-4 border-primary-500 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105">
<h3 class="text-xl font-bold text-primary-800 mb-6">GitHub Actions Automation</h3>
<ul class="space-y-4 text-gray-700">
<li class="flex items-center hover:bg-primary-100 p-3 rounded-lg transition-all duration-300"><span class="w-2 h-2 bg-primary-500 rounded-full mr-4 flex-shrink-0"></span><strong>Markdown Lint</strong>: Keeps docs clean and consistent</li>
<li class="flex items-center hover:bg-primary-100 p-3 rounded-lg transition-all duration-300"><span class="w-2 h-2 bg-primary-500 rounded-full mr-4 flex-shrink-0"></span><strong>Auto-Deploy</strong>: Publishes after every merge</li>
<li class="flex items-center hover:bg-primary-100 p-3 rounded-lg transition-all duration-300"><span class="w-2 h-2 bg-primary-500 rounded-full mr-4 flex-shrink-0"></span><strong>Quality Gates</strong>: Only approved changes go live</li>
</ul>
</div>

<div class="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-xl border-l-4 border-primary-500 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105">
<h3 class="text-xl font-bold text-primary-800 mb-6">Security & Scalability</h3>
<ul class="space-y-4 text-gray-700">
<li class="flex items-center hover:bg-primary-100 p-3 rounded-lg transition-all duration-300"><span class="w-2 h-2 bg-primary-500 rounded-full mr-4 flex-shrink-0"></span><strong>SSO Protection</strong>: Only team members can access</li>
<li class="flex items-center hover:bg-primary-100 p-3 rounded-lg transition-all duration-300"><span class="w-2 h-2 bg-primary-500 rounded-full mr-4 flex-shrink-0"></span><strong>Lightweight Platform</strong>: Fast and maintainable</li>
<li class="flex items-center hover:bg-primary-100 p-3 rounded-lg transition-all duration-300"><span class="w-2 h-2 bg-primary-500 rounded-full mr-4 flex-shrink-0"></span><strong>Easy Contribution</strong>: Anyone can add content</li>
</ul>
</div>
</div>

<div class="mt-6 text-center">
<blockquote class="text-2xl font-semibold text-gray-800 italic bg-gradient-to-r from-primary-100 to-primary-200 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105">
"All docs in one place: runbooks, infrastructure, onboarding, and diagrams."
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
    title: "System Architecture & GitHub Workflow",
    type: "architecture",
    layout: "full",
    content: {
                diagram: `graph TD
        A[Developer] --> B[Git Commit]
        B --> C[GitHub Repo]
        C --> D[Branch Protection]
        D --> E[Pull Request]
        E --> F[Quality Checks]
        F --> G{All Pass?}
        G -->|Yes| H[Code Review]
        G -->|No| I[Auto-Reject]
        I --> J[Developer Fixes]
        J --> B
        H --> K[Approve & Merge]
        K --> L[GitHub Actions]
        L --> M[Build & Deploy]
        M --> N[Live Documentation]
        N --> O[JumpCloud SSO]
        
        style A fill:#e1f5fe
        style C fill:#f3e5f5
        style D fill:#fff3e0
        style E fill:#e8f5e8
        style F fill:#fff8e1
        style G fill:#e3f2fd
        style H fill:#e8f5e8
        style L fill:#fce4ec
        style M fill:#e0f2f1
        style N fill:#f1f8e9
        style O fill:#fff3e0`,
      title: "GitHub Workflow with Protection & Quality Gates",
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
    id: 4,
    title: "Static Site Generator Comparison",
    type: "content",
    layout: "full",
    content: `
# Static Site Generator Evaluation Results

<div class="grid grid-cols-3 gap-6 mt-8">
<div class="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-xl border-2 border-primary-200 hover:border-primary-400 transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-xl">
<div class="text-center mb-4">
<h3 class="text-xl font-bold text-primary-800">Docusaurus</h3>
</div>
<div class="space-y-3">
<h4 class="font-semibold text-primary-700">Pros:</h4>
<ul class="text-sm text-gray-700 space-y-2">
<li class="flex items-start"><span class="w-2 h-2 bg-primary-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>Excellent Markdown support with MDX</li>
<li class="flex items-start"><span class="w-2 h-2 bg-primary-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>Built-in search with Algolia integration</li>
<li class="flex items-start"><span class="w-2 h-2 bg-primary-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>Strong React ecosystem and extensibility</li>
<li class="flex items-start"><span class="w-2 h-2 bg-primary-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>Great documentation and community support</li>
<li class="flex items-start"><span class="w-2 h-2 bg-primary-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>Versioning and i18n out of the box</li>
</ul>
<h4 class="font-semibold text-primary-700 mt-4">Cons:</h4>
<ul class="text-sm text-gray-700 space-y-2">
<li class="flex items-start"><span class="w-2 h-2 bg-primary-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>Steeper learning curve for non-React developers</li>
<li class="flex items-start"><span class="w-2 h-2 bg-primary-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>Limited diagram support (requires plugins)</li>
<li class="flex items-start"><span class="w-2 h-2 bg-primary-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>More complex setup for custom themes</li>
</ul>
</div>
</div>

<div class="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-xl border-2 border-primary-200 hover:border-primary-400 transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-xl">
<div class="text-center mb-4">
<h3 class="text-xl font-bold text-primary-800">MkDocs</h3>
</div>
<div class="space-y-3">
<h4 class="font-semibold text-primary-700">Pros:</h4>
<ul class="text-sm text-gray-700 space-y-2">
<li class="flex items-start"><span class="w-2 h-2 bg-primary-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>Simple YAML configuration</li>
<li class="flex items-start"><span class="w-2 h-2 bg-primary-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>Excellent search with built-in search</li>
<li class="flex items-start"><span class="w-2 h-2 bg-primary-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>Material theme is very polished</li>
<li class="flex items-start"><span class="w-2 h-2 bg-primary-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>Easy to customize and extend</li>
<li class="flex items-start"><span class="w-2 h-2 bg-primary-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>Great for technical documentation</li>
</ul>
<h4 class="font-semibold text-primary-700 mt-4">Cons:</h4>
<ul class="text-sm text-gray-700 space-y-2">
<li class="flex items-start"><span class="w-2 h-2 bg-primary-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>Limited plugin ecosystem</li>
<li class="flex items-start"><span class="w-2 h-2 bg-primary-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>Less flexible for complex layouts</li>
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
<li class="flex items-start"><span class="w-2 h-2 bg-primary-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>Extremely fast build times</li>
<li class="flex items-start"><span class="w-2 h-2 bg-primary-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>Large theme ecosystem</li>
<li class="flex items-start"><span class="w-2 h-2 bg-primary-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>Flexible templating with Go</li>
<li class="flex items-start"><span class="w-2 h-2 bg-primary-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>Good for large sites</li>
</ul>
<h4 class="font-semibold text-primary-700 mt-4">Cons:</h4>
<ul class="text-sm text-gray-700 space-y-2">
<li class="flex items-start"><span class="w-2 h-2 bg-primary-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>Steeper learning curve</li>
<li class="flex items-start"><span class="w-2 h-2 bg-primary-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>Less intuitive for non-developers</li>
<li class="flex items-start"><span class="w-2 h-2 bg-primary-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>Limited built-in search capabilities</li>
</ul>
</div>
</div>
</div>

<div class="mt-8 bg-gradient-to-r from-primary-50 to-primary-100 p-6 rounded-xl border-2 border-primary-300 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105">
<div class="text-center">
<h3 class="text-2xl font-bold text-primary-800 mb-4">Our Recommendation: Docusaurus</h3>
<div class="grid grid-cols-2 gap-4 text-gray-700">
<div class="text-center">
<div class="text-lg font-semibold mb-2">Best Balance</div>
<div class="text-sm">Features and extensibility</div>
</div>
<div class="text-center">
<div class="text-lg font-semibold mb-2">Strong Ecosystem</div>
<div class="text-sm">React components and search</div>
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
    id: 5,
    title: "Hosting Strategy Comparison",
    type: "content",
    layout: "full",
    content: `
# Hosting Strategy Evaluation

<div class="grid grid-cols-3 gap-6 mt-8">
<div class="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-xl border-2 border-primary-200 hover:border-primary-400 transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-xl">
<div class="text-center mb-4">
<h3 class="text-xl font-bold text-primary-800">GitHub Pages</h3>
</div>
<div class="space-y-3">
<h4 class="font-semibold text-primary-700">Pros:</h4>
<ul class="text-sm text-gray-700 space-y-2">
<li class="flex items-start"><span class="w-2 h-2 bg-primary-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>Native support for private repositories</li>
<li class="flex items-start"><span class="w-2 h-2 bg-primary-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>JumpCloud SSO works automatically via GitHub auth</li>
<li class="flex items-start"><span class="w-2 h-2 bg-primary-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>Zero additional configuration needed</li>
<li class="flex items-start"><span class="w-2 h-2 bg-primary-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>Free for private repos</li>
<li class="flex items-start"><span class="w-2 h-2 bg-primary-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>Integrated with our existing GitHub workflow</li>
</ul>
<h4 class="font-semibold text-primary-700 mt-4">Cons:</h4>
<ul class="text-sm text-gray-700 space-y-2">
<li class="flex items-start"><span class="w-2 h-2 bg-primary-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>Limited customization options</li>
<li class="flex items-start"><span class="w-2 h-2 bg-primary-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>No custom domain for private repos</li>
<li class="flex items-start"><span class="w-2 h-2 bg-primary-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>Less control over access patterns</li>
</ul>
</div>
</div>

<div class="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-xl border-2 border-primary-200 hover:border-primary-400 transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-xl">
<div class="text-center mb-4">
<h3 class="text-xl font-bold text-primary-800">AWS S3 + CloudFront</h3>
</div>
<div class="space-y-3">
<h4 class="font-semibold text-primary-700">Pros:</h4>
<ul class="text-sm text-gray-700 space-y-2">
<li class="flex items-start"><span class="w-2 h-2 bg-primary-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>Full control over access patterns</li>
<li class="flex items-start"><span class="w-2 h-2 bg-primary-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>Custom domain support</li>
<li class="flex items-start"><span class="w-2 h-2 bg-primary-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>Flexible access control with signed cookies/headers</li>
<li class="flex items-start"><span class="w-2 h-2 bg-primary-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>Scalable and performant</li>
<li class="flex items-start"><span class="w-2 h-2 bg-primary-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>Can implement custom JumpCloud SSO integration</li>
</ul>
<h4 class="font-semibold text-primary-700 mt-4">Cons:</h4>
<ul class="text-sm text-gray-700 space-y-2">
<li class="flex items-start"><span class="w-2 h-2 bg-primary-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>More complex setup and maintenance</li>
<li class="flex items-start"><span class="w-2 h-2 bg-primary-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>Additional cost for CloudFront</li>
<li class="flex items-start"><span class="w-2 h-2 bg-primary-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>Requires custom access control implementation</li>
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
<li class="flex items-start"><span class="w-2 h-2 bg-primary-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>Server-side rendering capabilities</li>
<li class="flex items-start"><span class="w-2 h-2 bg-primary-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>Maximum flexibility for custom features</li>
<li class="flex items-start"><span class="w-2 h-2 bg-primary-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>Full control over everything</li>
</ul>
<h4 class="font-semibold text-primary-700 mt-4">Cons:</h4>
<ul class="text-sm text-gray-700 space-y-2">
<li class="flex items-start"><span class="w-2 h-2 bg-primary-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>Much higher cost and complexity</li>
<li class="flex items-start"><span class="w-2 h-2 bg-primary-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>Requires server maintenance</li>
<li class="flex items-start"><span class="w-2 h-2 bg-primary-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>Overkill for static documentation</li>
</ul>
</div>
</div>
</div>

<div class="mt-8 bg-gradient-to-r from-primary-50 to-primary-100 p-6 rounded-xl border-2 border-primary-300 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105">
<div class="text-center">
<h3 class="text-2xl font-bold text-primary-800 mb-4">Our Recommendation: GitHub Pages</h3>
<div class="grid grid-cols-2 gap-4 text-gray-700">
<div class="text-center">
<div class="text-lg font-semibold mb-2">Simplest Integration</div>
<div class="text-sm">JumpCloud SSO works automatically</div>
</div>
<div class="text-center">
<div class="text-lg font-semibold mb-2">Zero Maintenance</div>
<div class="text-sm">Perfect fit for Git-based workflow</div>
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
# Implementation Details

<div class="grid grid-cols-3 gap-6 mt-8">
<div class="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-xl border-l-4 border-primary-500 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105">
<h3 class="text-xl font-bold text-primary-800 mb-4">Technology Stack</h3>
<ul class="space-y-3 text-gray-700">
<li class="flex items-center hover:bg-primary-100 p-2 rounded-lg transition-all duration-300"><span class="w-2 h-2 bg-primary-500 rounded-full mr-3"></span><strong>Static Site Generator</strong>: Docusaurus 2.x</li>
<li class="flex items-center hover:bg-primary-100 p-2 rounded-lg transition-all duration-300"><span class="w-2 h-2 bg-primary-500 rounded-full mr-3"></span><strong>Hosting</strong>: GitHub Pages (private repository)</li>
<li class="flex items-center hover:bg-primary-100 p-2 rounded-lg transition-all duration-300"><span class="w-2 h-2 bg-primary-500 rounded-full mr-3"></span><strong>CI/CD</strong>: GitHub Actions</li>
<li class="flex items-center hover:bg-primary-100 p-2 rounded-lg transition-all duration-300"><span class="w-2 h-2 bg-primary-500 rounded-full mr-3"></span><strong>Access Control</strong>: JumpCloud SSO via GitHub authentication</li>
<li class="flex items-center hover:bg-primary-100 p-2 rounded-lg transition-all duration-300"><span class="w-2 h-2 bg-primary-500 rounded-full mr-3"></span><strong>Search</strong>: Algolia DocSearch (free for open source)</li>
</ul>
</div>

<div class="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-xl border-l-4 border-primary-500 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105">
<h3 class="text-xl font-bold text-primary-800 mb-4">Key Features Implemented</h3>
<ul class="space-y-3 text-gray-700">
<li class="flex items-center hover:bg-primary-100 p-2 rounded-lg transition-all duration-300"><span class="w-2 h-2 bg-primary-500 rounded-full mr-3"></span><strong>Git-based Workflow</strong>: PR reviews, branch protection, CODEOWNERS</li>
<li class="flex items-center hover:bg-primary-100 p-2 rounded-lg transition-all duration-300"><span class="w-2 h-2 bg-primary-500 rounded-full mr-3"></span><strong>Automated Quality Checks</strong>: Markdown linting, link validation</li>
<li class="flex items-center hover:bg-primary-100 p-2 rounded-lg transition-all duration-300"><span class="w-2 h-2 bg-primary-500 rounded-full mr-3"></span><strong>Version Control</strong>: Git history for all changes</li>
<li class="flex items-center hover:bg-primary-100 p-2 rounded-lg transition-all duration-300"><span class="w-2 h-2 bg-primary-500 rounded-full mr-3"></span><strong>Search Optimization</strong>: Fast, relevant results</li>
<li class="flex items-center hover:bg-primary-100 p-2 rounded-lg transition-all duration-300"><span class="w-2 h-2 bg-primary-500 rounded-full mr-3"></span><strong>Mobile Responsive</strong>: Works on all devices</li>
</ul>
</div>

<div class="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-xl border-l-4 border-primary-500 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105">
<h3 class="text-xl font-bold text-primary-800 mb-4">Deployment Pipeline</h3>
<ol class="space-y-3 text-gray-700">
<li class="flex items-center hover:bg-primary-100 p-2 rounded-lg transition-all duration-300"><span class="w-6 h-6 bg-primary-500 text-white rounded-full mr-3 flex items-center justify-center text-xs font-bold">1</span><strong>Developer</strong> creates PR with documentation changes</li>
<li class="flex items-center hover:bg-primary-100 p-2 rounded-lg transition-all duration-300"><span class="w-6 h-6 bg-primary-500 text-white rounded-full mr-3 flex items-center justify-center text-xs font-bold">2</span><strong>GitHub Actions</strong> runs automated checks</li>
<li class="flex items-center hover:bg-primary-100 p-2 rounded-lg transition-all duration-300"><span class="w-6 h-6 bg-primary-500 text-white rounded-full mr-3 flex items-center justify-center text-xs font-bold">3</span><strong>Quality Gates</strong> ensure content meets standards</li>
<li class="flex items-center hover:bg-primary-100 p-2 rounded-lg transition-all duration-300"><span class="w-6 h-6 bg-primary-500 text-white rounded-full mr-3 flex items-center justify-center text-xs font-bold">4</span><strong>Auto-deploy</strong> to GitHub Pages on merge</li>
<li class="flex items-center hover:bg-primary-100 p-2 rounded-lg transition-all duration-300"><span class="w-6 h-6 bg-primary-500 text-white rounded-full mr-3 flex items-center justify-center text-xs font-bold">5</span><strong>Access Control</strong> via JumpCloud SSO</li>
</ol>
</div>
</div>

<div class="mt-8 text-center">
<blockquote class="text-2xl font-semibold text-gray-800 italic bg-gradient-to-r from-primary-100 to-primary-200 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105">
"Built a robust, scalable documentation platform that our team actually wants to use."
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
    id: 7,
    title: "Before vs After: Documentation Experience",
    type: "content",
    layout: "full",
    content: `
# Before vs After: Documentation Experience

<div class="grid grid-cols-2 gap-8 mt-8">
<div class="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-xl border-l-4 border-primary-500 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105">
<h3 class="text-xl font-bold text-primary-800 mb-6">ClickUp Chaos</h3>
<div class="grid grid-cols-2 gap-4 mb-6">
<div class="bg-white/50 p-4 rounded-lg">
<div class="text-sm text-gray-600 mb-1">Search Time</div>
<div class="text-2xl font-bold text-primary-600">5-10 minutes</div>
</div>
<div class="bg-white/50 p-4 rounded-lg">
<div class="text-sm text-gray-600 mb-1">Maintenance</div>
<div class="text-2xl font-bold text-primary-600">Manual</div>
</div>
</div>
<div class="bg-white/50 p-4 rounded-lg">
<h4 class="font-semibold text-primary-800 mb-4">Pain Points</h4>
<ul class="text-sm text-gray-700 space-y-2">
<li class="flex items-center"><span class="w-2 h-2 bg-primary-500 rounded-full mr-3 flex-shrink-0"></span>Inconsistent formatting</li>
<li class="flex items-center"><span class="w-2 h-2 bg-primary-500 rounded-full mr-3 flex-shrink-0"></span>Poor navigation</li>
<li class="flex items-center"><span class="w-2 h-2 bg-primary-500 rounded-full mr-3 flex-shrink-0"></span>No version control</li>
<li class="flex items-center"><span class="w-2 h-2 bg-primary-500 rounded-full mr-3 flex-shrink-0"></span>Slow search</li>
</ul>
</div>
</div>

<div class="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-xl border-l-4 border-primary-500 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105">
<h3 class="text-xl font-bold text-primary-800 mb-6">Git-First Hub</h3>
<div class="grid grid-cols-2 gap-4 mb-6">
<div class="bg-white/50 p-4 rounded-lg">
<div class="text-sm text-gray-600 mb-1">Search Time</div>
<div class="text-2xl font-bold text-primary-600">30 seconds</div>
</div>
<div class="bg-white/50 p-4 rounded-lg">
<div class="text-sm text-gray-600 mb-1">Maintenance</div>
<div class="text-2xl font-bold text-primary-600">Automated</div>
</div>
</div>
<div class="bg-white/50 p-4 rounded-lg">
<h4 class="font-semibold text-primary-800 mb-4">Improvements</h4>
<ul class="text-sm text-gray-700 space-y-2">
<li class="flex items-center"><span class="w-2 h-2 bg-primary-500 rounded-full mr-3 flex-shrink-0"></span>Consistent formatting</li>
<li class="flex items-center"><span class="w-2 h-2 bg-primary-500 rounded-full mr-3 flex-shrink-0"></span>Intuitive navigation</li>
<li class="flex items-center"><span class="w-2 h-2 bg-primary-500 rounded-full mr-3 flex-shrink-0"></span>Git version control</li>
<li class="flex items-center"><span class="w-2 h-2 bg-primary-500 rounded-full mr-3 flex-shrink-0"></span>Fast search</li>
</ul>
</div>
</div>
</div>

<div class="mt-8 text-center">
<div class="bg-gradient-to-r from-primary-50 to-primary-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105">
<h3 class="text-xl font-bold text-primary-800 mb-4">Key Improvements</h3>
<p class="text-lg text-gray-700">Dramatic improvements in search speed and maintenance automation.</p>
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
    id: 8,
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
    id: 9,
    title: "Impact & Results",
    type: "content",
    layout: "full",
    content: `
# Measurable Impact

<div class="grid grid-cols-2 gap-8 mt-8">
<div class="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-xl border-l-4 border-primary-500 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105">
<h3 class="text-2xl font-bold text-primary-800 mb-6">Engineering Productivity</h3>
<div class="grid grid-cols-2 gap-4">
<div class="bg-white/60 backdrop-blur-sm p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
<h4 class="text-lg font-semibold text-primary-700 mb-3">Search Time</h4>
<div class="text-3xl font-bold text-primary-600 mb-2">90%</div>
<div class="text-sm text-gray-600">5-10 minutes → 30 seconds</div>
</div>
<div class="bg-white/60 backdrop-blur-sm p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
<h4 class="text-lg font-semibold text-primary-700 mb-3">Onboarding</h4>
<div class="text-3xl font-bold text-primary-600 mb-2">75%</div>
<div class="text-sm text-gray-600">2-3 weeks → 3-5 days</div>
</div>
<div class="bg-white/60 backdrop-blur-sm p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
<h4 class="text-lg font-semibold text-primary-700 mb-3">Quality</h4>
<div class="text-3xl font-bold text-primary-600 mb-2">95%</div>
<div class="text-sm text-gray-600">Documentation accuracy</div>
</div>
<div class="bg-white/60 backdrop-blur-sm p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
<h4 class="text-lg font-semibold text-primary-700 mb-3">Automation</h4>
<div class="text-3xl font-bold text-primary-600 mb-2">100%</div>
<div class="text-sm text-gray-600">Maintenance automated</div>
</div>
</div>
</div>

<div class="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-xl border-l-4 border-primary-500 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105">
<h3 class="text-2xl font-bold text-primary-800 mb-6">Business Value</h3>
<ul class="space-y-4 text-gray-700">
<li class="flex items-start hover:bg-primary-100 p-4 rounded-lg transition-all duration-300">
<span class="w-3 h-3 bg-primary-500 rounded-full mr-4 mt-1.5 flex-shrink-0"></span>
<div>
<strong class="text-primary-800 text-lg">Faster Incident Response</strong>
<div class="text-sm text-gray-600 mt-1">Critical procedures instantly accessible</div>
</div>
</li>
<li class="flex items-start hover:bg-primary-100 p-4 rounded-lg transition-all duration-300">
<span class="w-3 h-3 bg-primary-500 rounded-full mr-4 mt-1.5 flex-shrink-0"></span>
<div>
<strong class="text-primary-800 text-lg">Reduced Bus Factor</strong>
<div class="text-sm text-gray-600 mt-1">Knowledge distributed across team</div>
</div>
</li>
<li class="flex items-start hover:bg-primary-100 p-4 rounded-lg transition-all duration-300">
<span class="w-3 h-3 bg-primary-500 rounded-full mr-4 mt-1.5 flex-shrink-0"></span>
<div>
<strong class="text-primary-800 text-lg">Improved Compliance</strong>
<div class="text-sm text-gray-600 mt-1">Audit trail for all changes</div>
</div>
</li>
<li class="flex items-start hover:bg-primary-100 p-4 rounded-lg transition-all duration-300">
<span class="w-3 h-3 bg-primary-500 rounded-full mr-4 mt-1.5 flex-shrink-0"></span>
<div>
<strong class="text-primary-800 text-lg">Scalable Growth</strong>
<div class="text-sm text-gray-600 mt-1">Easy to onboard new team members</div>
</div>
</li>
</ul>
</div>
</div>

<div class="mt-8 bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-xl border-l-4 border-primary-500 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105">
<h3 class="text-2xl font-bold text-primary-800 mb-6 text-center">Team Adoption</h3>
<div class="grid grid-cols-2 md:grid-cols-4 gap-6">
<div class="text-center bg-white/60 backdrop-blur-sm p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
<div class="text-4xl font-bold text-primary-600 mb-2">100%</div>
<div class="text-sm text-gray-600">Engineers using new system</div>
</div>
<div class="text-center bg-white/60 backdrop-blur-sm p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
<div class="text-4xl font-bold text-primary-600 mb-2">50+</div>
<div class="text-sm text-gray-600">PRs processed</div>
</div>
<div class="text-center bg-white/60 backdrop-blur-sm p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
<div class="text-4xl font-bold text-primary-600 mb-2">0</div>
<div class="text-sm text-gray-600">Security incidents</div>
</div>
<div class="text-center bg-white/60 backdrop-blur-sm p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
<div class="text-4xl font-bold text-primary-600 mb-2">95%</div>
<div class="text-sm text-gray-600">Satisfaction score</div>
</div>
</div>
</div>


    `,
    speakerNotes: `
- Lead with the most impressive metrics
- Connect technical improvements to business value
- Use the quote to emphasize the transformation
- This slide should take about 1 minute
    `
  },
  {
    id: 10,
    title: "Questions & Discussion",
    type: "content",
    layout: "full",
    content: `
# Questions & Discussion

<div class="grid grid-cols-1 gap-8 mt-8">
<div class="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-xl border-l-4 border-primary-500 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105">
<h3 class="text-xl font-bold text-primary-800 mb-6">Key Takeaways</h3>
<ul class="space-y-4 text-gray-700">
<li class="flex items-center hover:bg-primary-100 p-3 rounded-lg transition-all duration-300"><span class="w-2 h-2 bg-primary-500 rounded-full mr-4 flex-shrink-0"></span><strong>Git-first approach</strong> ensures version control and collaboration</li>
<li class="flex items-center hover:bg-primary-100 p-3 rounded-lg transition-all duration-300"><span class="w-2 h-2 bg-primary-500 rounded-full mr-4 flex-shrink-0"></span><strong>Automation</strong> reduces maintenance overhead and improves quality</li>
<li class="flex items-center hover:bg-primary-100 p-3 rounded-lg transition-all duration-300"><span class="w-2 h-2 bg-primary-500 rounded-full mr-4 flex-shrink-0"></span><strong>Security</strong> is built-in, not bolted on</li>
<li class="flex items-center hover:bg-primary-100 p-3 rounded-lg transition-all duration-300"><span class="w-2 h-2 bg-primary-500 rounded-full mr-4 flex-shrink-0"></span><strong>Scalability</strong> supports team growth and knowledge expansion</li>
<li class="flex items-center hover:bg-primary-100 p-3 rounded-lg transition-all duration-300"><span class="w-2 h-2 bg-primary-500 rounded-full mr-4 flex-shrink-0"></span><strong>Continuous Learning</strong> in DevOps means always researching and studying, making you a better engineer</li>
</ul>
</div>
</div>

<div class="mt-16 text-center">
<h2 class="text-7xl font-bold text-primary-700 mb-8 animate-float">
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