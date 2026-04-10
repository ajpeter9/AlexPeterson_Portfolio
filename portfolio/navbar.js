export function createNavbar() {
    const path = window.location.pathname;
    const hash = window.location.hash;

    // Determine active states
    const isHome = path.includes("index") || path === "/";
    const isProjects = hash === "#projects" || path.includes("projects");

    const activeClass = "text-green-500 font-semibold";

    return `
<nav id="navbar" class="fixed top-0 w-full z-50 bg-[#181717] transition-all duration-300 px-6 py-6">
  <div class="max-w-6xl mx-auto flex justify-between items-center">
    <h1 id="logo" class="font-bold text-white">Alex Peterson</h1>
    
    <div class="space-x-6">
      <a href="index.html" class="${isHome ? activeClass : "px-4 py-2 text-white"}">
        Home
      </a>

      <a href="projects.html" 
         class="${isProjects ? activeClass : "px-4 py-2 text-white"}">
        Projects
      </a>
    </div>
  </div>
</nav>
`;
}