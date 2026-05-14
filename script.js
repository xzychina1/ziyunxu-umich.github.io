(() => {
  const currentPath = window.location.pathname.replace(/\\/g, "/").toLowerCase();
  const navLinks = document.querySelectorAll(".site-nav a");

  navLinks.forEach((link) => {
    const linkUrl = new URL(link.getAttribute("href"), window.location.href);
    const linkPath = linkUrl.pathname
      .replace(/\\/g, "/")
      .toLowerCase();

    if (currentPath.endsWith("/index.html") && linkPath.endsWith("/index.html")) {
      link.setAttribute("aria-current", "page");
      return;
    }

    if (currentPath === linkPath || currentPath.endsWith(linkPath)) {
      link.setAttribute("aria-current", "page");
    }
  });
})();