// Load components
fetch("../html/component/sidebar.html")
  .then((res) => res.text())
  .then((html) => {
    document.getElementById("sidebar-container").innerHTML = html;
  });

fetch("../html/component/header.html")
  .then((res) => res.text())
  .then((html) => {
    document.getElementById("header-container").innerHTML = html;
    initHeaderDropdown();
  });

// Header Dropdown
function initHeaderDropdown() {
  const loginInfor = document.querySelector(".login-infor");

  if (loginInfor) {
    loginInfor.addEventListener("click", function (e) {
      e.stopPropagation();
      this.classList.toggle("active");
    });

    document.addEventListener("click", function (e) {
      if (!loginInfor.contains(e.target)) {
        loginInfor.classList.remove("active");
      }
    });

    const dropdown = loginInfor.querySelector(".user-dropdown");
    if (dropdown) {
      dropdown.addEventListener("click", function (e) {
        e.stopPropagation();
      });
    }
  }
}

const SidebarManager = (function () {
  let initialized = false;
  let overlay = null;
  let eventListeners = [];

  function cleanup() {
    eventListeners.forEach(({ element, event, handler }) => {
      if (element) {
        element.removeEventListener(event, handler);
      }
    });
    eventListeners = [];
  }

  function addTrackedListener(element, event, handler) {
    if (element) {
      element.addEventListener(event, handler);
      eventListeners.push({ element, event, handler });
    }
  }

  function createOverlay() {
    if (!overlay || !document.body.contains(overlay)) {
      overlay = document.createElement("div");
      overlay.id = "sidebarOverlay";
      overlay.className = "sidebar-overlay";
      document.body.appendChild(overlay);
    }
    return overlay;
  }

  function closeSidebar() {
    const sidebar = document.getElementById("sidebar");
    if (sidebar && overlay) {
      sidebar.classList.remove("active");
      overlay.classList.remove("active");
    }
  }

  function initializeNavigation() {
    const navGroups = document.querySelectorAll(".nav-group");

    navGroups.forEach((navGroup) => {
      const parent = navGroup.querySelector(".nav-parent");
      if (!parent) return;

      const clickHandler = function (e) {
        e.preventDefault();
        const isOpen = navGroup.classList.contains("open");

        document.querySelectorAll(".nav-group").forEach((group) => {
          if (group !== navGroup) {
            group.classList.remove("open");
            const groupParent = group.querySelector(".nav-parent");
            if (groupParent) groupParent.classList.remove("active");
          }
        });

        if (!isOpen) {
          navGroup.classList.add("open");
          parent.classList.add("active");
        } else {
          navGroup.classList.remove("open");
          parent.classList.remove("active");
        }
      };

      addTrackedListener(parent, "click", clickHandler);
    });

    document.querySelectorAll(".nav-item:not(.nav-parent)").forEach((item) => {
      const clickHandler = function () {
        if (window.innerWidth <= 768) {
          closeSidebar();
        }
      };
      addTrackedListener(item, "click", clickHandler);
    });

    document.querySelectorAll(".nav-subitem").forEach((subitem) => {
      const clickHandler = function (e) {
        e.stopPropagation();

        document.querySelectorAll(".nav-subitem").forEach((item) => {
          item.classList.remove("active");
        });

        this.classList.add("active");

        if (window.innerWidth <= 768) {
          closeSidebar();
        }
      };

      addTrackedListener(subitem, "click", clickHandler);
    });
  }

  function initializeToggle() {
    const sidebarToggle = document.getElementById("sidebarToggle");
    const sidebar = document.getElementById("sidebar");
    const mainContent = document.querySelector(".main-content");

    if (sidebarToggle && sidebar && mainContent) {
      if (window.innerWidth > 768) {
        // mainContent.classList.add("sidebar-open");
        sidebar.classList.add("collapsed");
        mainContent.classList.add("sidebar-collapsed");

        const icon = sidebarToggle.querySelector("i");
        if (icon) icon.className = "fa-solid fa-bars";
      }

      const toggleHandler = function (e) {
        e.preventDefault();
        sidebar.classList.toggle("collapsed");
        const icon = this.querySelector("i");

        if (sidebar.classList.contains("collapsed")) {
          mainContent.classList.remove("sidebar-open");
          mainContent.classList.add("sidebar-collapsed");
          if (icon) icon.className = "fa-solid fa-bars";
        } else {
          mainContent.classList.add("sidebar-open");
          mainContent.classList.remove("sidebar-collapsed");
          if (icon) icon.className = "fas fa-chevron-left";
        }
      };

      addTrackedListener(sidebarToggle, "click", toggleHandler);
    }
  }

  function initializeMobile() {
    const hamburgerMenu = document.getElementById("hamburgerMenu");
    const sidebar = document.getElementById("sidebar");

    if (!hamburgerMenu || !sidebar) return;

    const hamburgerHandler = function (e) {
      e.preventDefault();
      e.stopPropagation();
      sidebar.classList.toggle("active");
      overlay.classList.toggle("active");
    };

    const overlayHandler = function (e) {
      e.preventDefault();
      closeSidebar();
    };

    addTrackedListener(hamburgerMenu, "click", hamburgerHandler);
    addTrackedListener(overlay, "click", overlayHandler);
  }

  return {
    initialize: function () {
      if (initialized) {
        console.warn("Sidebar already initialized");
        return;
      }

      const sidebar = document.getElementById("sidebar");
      const sidebarToggle = document.getElementById("sidebarToggle");

      if (!sidebar) {
        console.warn("Sidebar element not found");
        return;
      }

      cleanup();

      createOverlay();

      initializeNavigation();
      initializeToggle();
      initializeMobile();

      initialized = true;
    },

    destroy: function () {
      cleanup();
      if (overlay && document.body.contains(overlay)) {
        document.body.removeChild(overlay);
      }
      overlay = null;
      initialized = false;
    },

    isInitialized: function () {
      return initialized;
    },
  };
})();

document.addEventListener("DOMContentLoaded", function () {
  const checkSidebar = setInterval(() => {
    const sidebar = document.getElementById("sidebar");
    const sidebarToggle = document.getElementById("sidebarToggle");

    if (sidebar && sidebarToggle) {
      clearInterval(checkSidebar);
      setTimeout(() => {
        SidebarManager.initialize();
      }, 100);
    }
  }, 50);

  setTimeout(() => {
    clearInterval(checkSidebar);
  }, 5000);
});
