// =============================================
// CONFETTI CELEBRATION EFFECT
// =============================================
class ConfettiEffect {
  constructor() {
    this.canvas = document.getElementById("confetti-canvas");
    this.ctx = this.canvas.getContext("2d");
    this.particles = [];
    this.colors = [
      "#ff6fbf",
      "#d946a6",
      "#ffb3d9",
      "#ff99cc",
      "#ffc8e3",
      "#ffe0f0",
    ];

    this.resize();
    window.addEventListener("resize", () => this.resize());
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  createParticle(x, y) {
    return {
      x: x,
      y: y,
      vx: (Math.random() - 0.5) * 10,
      vy: Math.random() * -15 - 5,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 10,
      size: Math.random() * 8 + 4,
      color: this.colors[Math.floor(Math.random() * this.colors.length)],
      life: 1,
      decay: Math.random() * 0.015 + 0.01,
    };
  }

  burst(x, y, count = 50) {
    for (let i = 0; i < count; i++) {
      this.particles.push(this.createParticle(x, y));
    }
    this.animate();
  }

  celebrate() {
    // Multiple bursts across screen
    const bursts = 5;
    for (let i = 0; i < bursts; i++) {
      setTimeout(() => {
        const x = Math.random() * this.canvas.width;
        const y = Math.random() * this.canvas.height * 0.5;
        this.burst(x, y, 80);
      }, i * 200);
    }
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.particles = this.particles.filter((p) => {
      // Update physics
      p.vy += 0.5; // gravity
      p.x += p.vx;
      p.y += p.vy;
      p.rotation += p.rotationSpeed;
      p.life -= p.decay;

      if (p.life <= 0) return false;

      // Draw particle
      this.ctx.save();
      this.ctx.translate(p.x, p.y);
      this.ctx.rotate((p.rotation * Math.PI) / 180);
      this.ctx.globalAlpha = p.life;
      this.ctx.fillStyle = p.color;
      this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
      this.ctx.restore();

      return true;
    });

    if (this.particles.length > 0) {
      requestAnimationFrame(() => this.animate());
    }
  }
}

const confetti = new ConfettiEffect();

// =============================================
// CÁNH HOA BAY (Falling Petals Effect)
// =============================================
function createFallingPetals() {
  const petalsContainer = document.getElementById("petals-container");
  const petalEmojis = ["🌸", "🌺", "🌼", "💮", "🏵️", "💐"];

  // Tạo 15 cánh hoa bay (giảm xuống để nhẹ hơn)
  for (let i = 0; i < 15; i++) {
    setTimeout(() => {
      const petal = document.createElement("div");
      petal.className = "petal";
      petal.textContent =
        petalEmojis[Math.floor(Math.random() * petalEmojis.length)];

      petal.style.left = Math.random() * 100 + "%";
      const duration = Math.random() * 6 + 6;
      petal.style.animationDuration = duration + "s";
      petal.style.animationDelay = Math.random() * 5 + "s";

      petalsContainer.appendChild(petal);

      setTimeout(
        () => {
          petal.remove();
          createSinglePetal();
        },
        (duration + 5) * 1000,
      );
    }, i * 200);
  }
}

function createSinglePetal() {
  const petalsContainer = document.getElementById("petals-container");
  const petalEmojis = ["🌸", "🌺", "🌼", "💮", "🏵️", "💐"];

  const petal = document.createElement("div");
  petal.className = "petal";
  petal.textContent =
    petalEmojis[Math.floor(Math.random() * petalEmojis.length)];
  petal.style.left = Math.random() * 100 + "%";

  const duration = Math.random() * 6 + 6;
  petal.style.animationDuration = duration + "s";

  petalsContainer.appendChild(petal);

  setTimeout(() => {
    petal.remove();
    createSinglePetal();
  }, duration * 1000);
}

// =============================================
// TYPING ANIMATION
// =============================================
function typingAnimation() {
  const text = "Gửi Người Đặc Biệt";
  const typingElement = document.querySelector(".typing-text");
  const cursor = document.querySelector(".cursor");

  typingElement.textContent = "";
  typingElement.style.opacity = "1";

  let index = 0;

  const typeInterval = setInterval(() => {
    if (index < text.length) {
      typingElement.textContent += text[index];
      index++;
    } else {
      clearInterval(typeInterval);
      setTimeout(() => {
        cursor.style.display = "none";
      }, 1000);
    }
  }, 100);
}

// =============================================
// SCREEN TRANSITIONS (Chuyển màn hình mượt)
// =============================================
function switchScreen(fromScreen, toScreen, callback) {
  const from = document.getElementById(fromScreen);
  const to = document.getElementById(toScreen);

  // Fade out current screen
  from.style.opacity = "0";
  from.style.transform = "scale(0.95)";

  setTimeout(() => {
    from.classList.remove("active");
    to.classList.add("active");

    // Trigger confetti celebration
    confetti.celebrate();

    if (callback) {
      setTimeout(callback, 100);
    }
  }, 500);
}

// =============================================
// MỞ BỨC THƯ (Open Letter)
// =============================================
function setupLetterScreen() {
  const openBtn = document.getElementById("open-letter-btn");
  const envelope = document.getElementById("envelope");
  const letterPaper = document.getElementById("letter-paper");

  openBtn.addEventListener("click", () => {
    switchScreen("intro-screen", "letter-screen", () => {
      // Hiện envelope sau 500ms
      setTimeout(() => {
        envelope.classList.add("visible");
        confetti.burst(window.innerWidth / 2, window.innerHeight / 2, 30);

        // Click vào ENVELOPE để mở
        setupEnvelopeClick(envelope, letterPaper);
      }, 500);
    });
  });
}

// =============================================
// CLICK VÀO ENVELOPE ĐỂ MỞ VÀ HIỆN THƯ LUÔN
// =============================================
function setupEnvelopeClick(envelope, letterPaper) {
  let clicked = false;

  envelope.addEventListener("click", function handleEnvelopeClick() {
    if (clicked) return;
    clicked = true;

    // Mở envelope (animation flap)
    envelope.classList.add("open");

    // Confetti khi mở
    confetti.burst(window.innerWidth / 2, window.innerHeight / 2, 50);

    // Sau khi mở envelope xong (1.5s) → Hiện thư và nội dung LUÔN
    setTimeout(() => {
      // Ẩn envelope
      envelope.style.opacity = "0";
      envelope.style.transform = "translate(-50%, -50%) scale(0.5)";
      envelope.style.pointerEvents = "none";

      // Hiện letter-paper
      letterPaper.classList.add("show");

      // Hiện header và nội dung LUÔN
      setTimeout(() => {
        const letterHeader = document.getElementById("letter-header");
        const letterContent = document.getElementById("letter-content");

        // Header và content đã có opacity: 1 trong CSS
        // Chỉ cần hiện từng dòng thư
        showLetterLines();

        // Confetti lần 2
        confetti.burst(window.innerWidth / 2, window.innerHeight / 2, 40);
      }, 800);
    }, 1500);

    envelope.removeEventListener("click", handleEnvelopeClick);
  });
}

// =============================================
// HIỂN THỊ TỪNG DÒNG THƯ
// =============================================
function showLetterLines() {
  const lines = document.querySelectorAll(".letter-line");

  // Hiệu ứng mới: Từng chữ hiện dần
  lines.forEach((line, lineIndex) => {
    setTimeout(() => {
      line.classList.add("show");

      // Thêm hiệu ứng shimmer khi dòng xuất hiện
      line.style.animation = "lineShimmer 1s ease-out forwards";

      // Confetti nhẹ cho signature
      if (lineIndex === lines.length - 1) {
        confetti.burst(window.innerWidth / 2, window.innerHeight / 2, 30);

        // Hiện nút sau khi đọc xong
        setTimeout(() => {
          const btn = document.getElementById("show-gallery-btn");
          if (btn) {
            btn.style.opacity = "0";
            btn.style.display = "block";
            setTimeout(() => {
              btn.style.transition = "all 0.5s ease";
              btn.style.opacity = "1";
              btn.style.transform = "scale(1)";
            }, 100);
          }
        }, 1000);
      }
    }, lineIndex * 400);
  });
}

// =============================================
// CHUYỂN SANG GALLERY
// =============================================
function setupGalleryTransition() {
  const showGalleryBtn = document.getElementById("show-gallery-btn");

  if (showGalleryBtn) {
    showGalleryBtn.addEventListener("click", () => {
      transitionToGallery();
    });
  }
}

function transitionToGallery() {
  switchScreen("letter-screen", "gallery-screen", () => {
    setTimeout(() => {
      confetti.celebrate();
      // Bắt đầu chuỗi animation đặc biệt
      startGalleryAnimationSequence();
    }, 500);
  });
}

// =============================================
// CHUỖI ANIMATION ĐẶC BIỆT CHO GALLERY
// =============================================
function startGalleryAnimationSequence() {
  const items = document.querySelectorAll(".carousel-item");
  const finalMessage = document.getElementById("final-message");
  const galleryTitle = document.querySelector(".gallery-title");

  // Ẩn title
  if (galleryTitle) {
    galleryTitle.style.opacity = "0";
  }

  // Thiết lập biến CSS cho mỗi ảnh
  items.forEach((item, index) => {
    const angle = (index / items.length) * Math.PI * 2;

    // Scatter positions (phân tán)
    const scatterRadius = 300;
    item.style.setProperty(
      "--scatter-x",
      `${Math.cos(angle) * scatterRadius}px`,
    );
    item.style.setProperty(
      "--scatter-y",
      `${Math.sin(angle) * scatterRadius}px`,
    );
    item.style.setProperty("--scatter-rotate", `${Math.random() * 360}deg`);

    // Sphere positions (hình cầu)
    const sphereAngleY = (index / items.length) * 360;
    const sphereAngleX = Math.sin(angle * 2) * 60; // Tạo độ cao thấp khác nhau
    item.style.setProperty("--sphere-angle-y", `${sphereAngleY}deg`);
    item.style.setProperty("--sphere-angle-x", `${sphereAngleX}deg`);

    // Scatter 2nd time
    const scatterRadius2 = 400;
    const angle2 = angle + Math.PI / 4;
    item.style.setProperty(
      "--scatter-x-2",
      `${Math.cos(angle2) * scatterRadius2}px`,
    );
    item.style.setProperty(
      "--scatter-y-2",
      `${Math.sin(angle2) * scatterRadius2}px`,
    );
    item.style.setProperty("--scatter-rotate-2", `${Math.random() * 720}deg`);

    // Final slide down positions
    item.style.setProperty("--final-x", (index - items.length / 2) * 15);
  });

  // Phase 0: Circle Rotate (Xoay vòng tròn carousel) (5s)
  items.forEach((item) => item.classList.add("phase-circle-rotate"));

  setTimeout(() => {
    items.forEach((item) => item.classList.remove("phase-circle-rotate"));

    // Phase 1: Initial Rotate (6s)
    items.forEach((item) => item.classList.add("phase-rotate"));

    setTimeout(() => {
      items.forEach((item) => item.classList.remove("phase-rotate"));

      // Phase 2: Scatter (4s)
      items.forEach((item) => item.classList.add("phase-scatter"));

      setTimeout(() => {
        items.forEach((item) => item.classList.remove("phase-scatter"));

        // Phase 3: Gather to Sphere (5s)
        items.forEach((item) => item.classList.add("phase-gather"));

        setTimeout(() => {
          items.forEach((item) => item.classList.remove("phase-gather"));

          // Phase 4: Sphere Rotate (8s)
          items.forEach((item) => item.classList.add("phase-sphere-rotate"));

          setTimeout(() => {
            items.forEach((item) =>
              item.classList.remove("phase-sphere-rotate"),
            );

            // Phase 5: Scatter Again (4s)
            items.forEach((item) => item.classList.add("phase-scatter-2"));

            setTimeout(() => {
              items.forEach((item) => item.classList.remove("phase-scatter-2"));

              // Phase 6: Slide Down (6s)
              items.forEach((item) => item.classList.add("phase-slide-down"));

              setTimeout(() => {
                // Ẩn tất cả ảnh
                items.forEach((item) => (item.style.display = "none"));

                // Hiện final message
                finalMessage.classList.add("show");

                // Confetti đặc biệt
                setTimeout(() => {
                  confetti.celebrate();
                  confetti.celebrate();
                }, 500);

                setTimeout(() => {
                  confetti.celebrate();
                }, 1500);
              }, 6000); // Sau slide down
            }, 4000); // Sau scatter 2
          }, 8000); // Sau sphere rotate
        }, 5000); // Sau gather
      }, 4000); // Sau scatter 1
    }, 6000); // Sau initial rotate
  }, 5000); // Sau circle rotate
}

// =============================================
// 3D CAROUSEL CONTROLLER
// =============================================
class Carousel3D {
  constructor() {
    this.carousel = document.getElementById("carousel-3d");
    this.items = document.querySelectorAll(".carousel-item");
    this.currentIndex = 0;
    this.totalItems = this.items.length;
    this.autoRotate = null;

    this.setupControls();
    this.updateCarousel();
    this.startAutoRotate();
  }

  startAutoRotate() {
    // Tự động xoay carousel mỗi 4 giây
    this.autoRotate = setInterval(() => {
      this.next();
    }, 4000);
  }

  stopAutoRotate() {
    if (this.autoRotate) {
      clearInterval(this.autoRotate);
      this.autoRotate = null;
    }
  }

  resetAutoRotate() {
    this.stopAutoRotate();
    this.startAutoRotate();
  }

  setupControls() {
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");

    prevBtn.addEventListener("click", () => this.prev());
    nextBtn.addEventListener("click", () => this.next());

    // Keyboard controls
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") this.prev();
      if (e.key === "ArrowRight") this.next();
    });

    // Touch swipe support
    let touchStartX = 0;
    this.carousel.addEventListener("touchstart", (e) => {
      touchStartX = e.touches[0].clientX;
    });

    this.carousel.addEventListener("touchend", (e) => {
      const touchEndX = e.changedTouches[0].clientX;
      const diff = touchStartX - touchEndX;

      if (Math.abs(diff) > 50) {
        if (diff > 0) this.next();
        else this.prev();
      }
    });
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.totalItems;
    this.updateCarousel();
    confetti.burst(window.innerWidth / 2, window.innerHeight / 2, 15);
    this.resetAutoRotate();
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.totalItems) % this.totalItems;
    this.updateCarousel();
    confetti.burst(window.innerWidth / 2, window.innerHeight / 2, 15);
    this.resetAutoRotate();
  }

  updateCarousel() {
    const angleStep = 360 / this.totalItems;

    this.items.forEach((item, index) => {
      const offset = index - this.currentIndex;
      const angle = offset * angleStep;

      // Remove active class from all
      item.classList.remove("active");

      // Rotate the entire carousel
      item.style.transform = `
        rotateY(${angle}deg) 
        translateZ(${index === this.currentIndex ? 550 : 500}px)
        scale(${index === this.currentIndex ? 1 : 0.8})
      `;

      // Add active to current
      if (index === this.currentIndex) {
        item.classList.add("active");
      }
    });
  }
}

// =============================================
// KHỞI ĐỘNG ỨNG DỤNG
// =============================================
function init() {
  // Hiệu ứng cánh hoa bay
  createFallingPetals();

  // Typing animation
  setTimeout(() => {
    typingAnimation();
  }, 500);

  // Setup letter screen
  setupLetterScreen();

  // Setup gallery transition
  setupGalleryTransition();

  // Click anywhere on intro screen to trigger confetti
  document.getElementById("intro-screen").addEventListener("click", (e) => {
    if (e.target.tagName !== "BUTTON") {
      confetti.burst(e.clientX, e.clientY, 20);
    }
  });
}

// Global carousel instance
let carousel3DInstance = null;

function initCarousel() {
  if (!carousel3DInstance) {
    setTimeout(() => {
      carousel3DInstance = new Carousel3D();
      console.log("Carousel initialized and auto-rotating!");
    }, 500);
  }
}

// Chạy khi DOM đã load xong
document.addEventListener("DOMContentLoaded", init);
