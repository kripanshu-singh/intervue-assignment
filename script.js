// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // ====== ACCORDION FUNCTIONALITY ======
  class Accordion {
    constructor() {
      this.accordionItems = document.querySelectorAll("[data-accordion-item]");
      this.init();
    }

    init() {
      this.accordionItems.forEach((item) => {
        const button = item.querySelector("[data-accordion-button]");
        const content = item.querySelector("[data-accordion-content]");
        const icon = button.querySelector("i");

        // Set initial state - ensure content is fully collapsed
        content.style.maxHeight = "0";
        content.style.overflow = "hidden";
        content.style.transition = "max-height 0.3s ease, padding 0.3s ease";
        content.style.paddingTop = "0";
        content.style.paddingBottom = "0";
        content.style.opacity = "0";

        button.addEventListener("click", (e) => {
          e.preventDefault();
          const isOpen = content.style.maxHeight !== "0px";

          // Toggle this item
          if (isOpen) {
            this.closeAccordion(item, content, icon);
          } else {
            // Close all others first if you want only one open
            this.closeAll();
            this.openAccordion(item, content, icon);
          }
        });
      });
    }

    openAccordion(item, content, icon) {
      // First make content visible for height calculation
      content.style.opacity = "1";
      content.style.paddingTop = "0.5rem"; // pt-2
      content.style.paddingBottom = "1.25rem"; // pb-5

      // Set max-height to scrollHeight plus padding
      const totalHeight = content.scrollHeight + 20; // Add some buffer
      content.style.maxHeight = totalHeight + "px";

      icon.className = "fas fa-minus text-primary-500";
      item.classList.add("accordion-open");
    }

    closeAccordion(item, content, icon) {
      // Start transition
      content.style.maxHeight = "0";
      content.style.paddingTop = "0";
      content.style.paddingBottom = "0";
      content.style.opacity = "0";

      icon.className = "fas fa-plus text-primary-500";
      item.classList.remove("accordion-open");
    }

    closeAll() {
      this.accordionItems.forEach((item) => {
        const content = item.querySelector("[data-accordion-content]");
        const icon = item.querySelector("[data-accordion-button] i");
        this.closeAccordion(item, content, icon);
      });
    }
  }

  // ====== MOBILE MENU FUNCTIONALITY ======
  class MobileMenu {
    constructor() {
      this.menuButton = document.getElementById("mobile-menu-button");
      this.mobileMenu = document.getElementById("mobile-menu");
      this.body = document.body;
      this.isOpen = false;
      this.init();
    }

    init() {
      // Create mobile menu if it doesn't exist
      if (!this.mobileMenu) {
        this.createMobileMenu();
      }

      if (this.menuButton) {
        this.menuButton.addEventListener("click", () => {
          this.toggle();
        });
      }

      // Close menu when clicking outside
      document.addEventListener("click", (e) => {
        if (
          this.isOpen &&
          !this.mobileMenu.contains(e.target) &&
          !this.menuButton.contains(e.target)
        ) {
          this.close();
        }
      });

      // Close menu on escape key
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && this.isOpen) {
          this.close();
        }
      });

      // Close menu on window resize if screen becomes large
      window.addEventListener("resize", () => {
        if (window.innerWidth >= 768 && this.isOpen) {
          this.close();
        }
      });
    }

    createMobileMenu() {
      const menuHTML = `
                <div id="mobile-menu" class="fixed inset-0 z-50 hidden">
                    <div class="fixed inset-0 bg-black bg-opacity-50" id="mobile-menu-overlay"></div>
                    <div class="fixed top-0 right-0 h-full w-64 bg-white shadow-xl transform translate-x-full transition-transform duration-300 ease-in-out" id="mobile-menu-panel">
                        <div class="flex items-center justify-between p-6 border-b">
                            <span class="text-xl font-bold text-dark-900">Menu</span>
                            <button id="mobile-menu-close" class="p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100">
                                <i class="fas fa-times text-xl"></i>
                            </button>
                        </div>
                        <nav class="p-6">
                            <div class="space-y-4">
                                <a href="#features" class="block py-3 px-4 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-lg transition-colors">
                                    Become an Interviewer
                                </a>
                                <a href="#resources" class="block py-3 px-4 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-lg transition-colors">
                                    Pricing
                                </a>
                                <a href="#security" class="block py-3 px-4 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-lg transition-colors">
                                    Start a free trial
                                </a>
                                <a href="#faq" class="block py-3 px-4 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-lg transition-colors">
                                    FAQ
                                </a>
                            </div>
                            <div class="mt-8 pt-8 border-t border-gray-200 space-y-4">
                                <button class="w-full px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium text-center">
                                    Login
                                </button>
                                <button class="w-full px-4 py-3 bg-dark-900 text-white rounded-lg hover:bg-dark-800 transition-colors font-medium text-center">
                                    Sign up
                                </button>
                            </div>
                        </nav>
                    </div>
                </div>
            `;

      document.body.insertAdjacentHTML("beforeend", menuHTML);
      this.mobileMenu = document.getElementById("mobile-menu");
      this.menuPanel = document.getElementById("mobile-menu-panel");
      this.menuOverlay = document.getElementById("mobile-menu-overlay");
      this.closeButton = document.getElementById("mobile-menu-close");

      // Add event listeners for the newly created elements
      this.closeButton.addEventListener("click", () => this.close());
      this.menuOverlay.addEventListener("click", () => this.close());

      // Add click handlers for menu links
      const menuLinks = this.mobileMenu.querySelectorAll('a[href^="#"]');
      menuLinks.forEach((link) => {
        link.addEventListener("click", () => {
          this.close();
        });
      });
    }

    toggle() {
      if (this.isOpen) {
        this.close();
      } else {
        this.open();
      }
    }

    open() {
      this.isOpen = true;
      this.mobileMenu.classList.remove("hidden");
      this.body.style.overflow = "hidden";

      // Trigger animation
      setTimeout(() => {
        this.menuPanel.style.transform = "translateX(0)";
      }, 10);

      // Update button icon
      const icon = this.menuButton.querySelector("i");
      if (icon) {
        icon.className = "fas fa-times text-xl";
      }
    }

    close() {
      this.isOpen = false;
      this.menuPanel.style.transform = "translateX(100%)";
      this.body.style.overflow = "";

      // Hide menu after animation
      setTimeout(() => {
        this.mobileMenu.classList.add("hidden");
      }, 300);

      // Update button icon
      const icon = this.menuButton.querySelector("i");
      if (icon) {
        icon.className = "fas fa-bars text-xl";
      }
    }
  }

  // ====== VIDEO MODAL FUNCTIONALITY ======
  const videoModal = {
    init() {
      const thumbnail = document.getElementById("video-thumbnail");
      const modal = document.getElementById("video-modal");
      const closeBtn = document.getElementById("close-video-modal");
      const video = document.getElementById("testimonial-video");

      if (thumbnail && modal && closeBtn && video) {
        thumbnail.addEventListener("click", function () {
          modal.classList.remove("hidden");
          video.currentTime = 0;
          video.play();
        });

        closeBtn.addEventListener("click", function () {
          modal.classList.add("hidden");
          video.pause();
          video.currentTime = 0;
        });

        // Close modal on outside click
        modal.addEventListener("click", function (e) {
          if (e.target === modal) {
            modal.classList.add("hidden");
            video.pause();
            video.currentTime = 0;
          }
        });
      }
    },
  };

  // ====== SMOOTH SCROLLING FOR ANCHOR LINKS ======
  const smoothScroll = {
    init() {
      const links = document.querySelectorAll('a[href^="#"]');
      links.forEach((link) => {
        link.addEventListener("click", function (e) {
          const href = this.getAttribute("href");
          if (href === "#") return;

          const target = document.querySelector(href);
          if (target) {
            e.preventDefault();
            const headerOffset = 80; // Account for sticky header
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition =
              elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          }
        });
      });
    },
  };

  // ====== SEARCH FUNCTIONALITY ======
  const searchFunctionality = {
    init() {
      const searchInput = document.querySelector(
        'input[placeholder="Search for resources..."]',
      );
      const searchButton = searchInput?.nextElementSibling;

      if (searchInput && searchButton) {
        searchButton.addEventListener("click", () => {
          this.performSearch(searchInput.value);
        });

        searchInput.addEventListener("keypress", (e) => {
          if (e.key === "Enter") {
            this.performSearch(searchInput.value);
          }
        });
      }
    },

    performSearch(query) {
      if (!query.trim()) return;

      // Simple search implementation - you can enhance this
      const resourceCards = document.querySelectorAll("#resources .card-hover");
      let found = false;

      resourceCards.forEach((card) => {
        const title = card.querySelector("h3")?.textContent.toLowerCase() || "";
        const description =
          card.querySelector("p")?.textContent.toLowerCase() || "";
        const category =
          card.querySelector(".uppercase")?.textContent.toLowerCase() || "";

        const searchTerm = query.toLowerCase();
        const matches =
          title.includes(searchTerm) ||
          description.includes(searchTerm) ||
          category.includes(searchTerm);

        if (matches) {
          card.style.display = "block";
          card.classList.add("highlight-search");
          found = true;
        } else {
          card.style.display = "none";
        }
      });

      if (!found) {
        console.log("No resources found for:", query);
        // You could add a "no results" message here
      }

      // Remove highlights after 3 seconds
      setTimeout(() => {
        resourceCards.forEach((card) => {
          card.classList.remove("highlight-search");
        });
      }, 3000);
    },
  };

  // ====== INITIALIZE ALL COMPONENTS ======
  try {
    new Accordion();
    new MobileMenu();
    videoModal.init();
    smoothScroll.init();
    searchFunctionality.init();

    console.log("All components initialized successfully");
  } catch (error) {
    console.error("Error initializing components:", error);
  }
});

// ====== UTILITY FUNCTIONS ======
const addUtilityStyles = () => {
  const styles = `
        <style>
            .highlight-search {
                animation: highlightPulse 1s ease-in-out;
                border: 2px solid #3b82f6 !important;
            }
            
            @keyframes highlightPulse {
                0% { transform: scale(1); }
                50% { transform: scale(1.02); }
                100% { transform: scale(1); }
            }
            
            .accordion-open {
                background-color: #f8fafc;
            }
            
            @media (max-width: 767px) {
                .mobile-menu-open {
                    overflow: hidden;
                }
            }
        </style>
    `;

  document.head.insertAdjacentHTML("beforeend", styles);
};

// Add utility styles when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", addUtilityStyles);
} else {
  addUtilityStyles();
}
