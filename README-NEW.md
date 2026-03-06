# 💌 Website Thư Tình Cảm 3D Cinematic

Website single page **FULLSCREEN** không scroll với hiệu ứng 3D carousel, confetti celebration và transitions cực mượt!

## ✨ Tính Năng Đặc Biệt

### 🎬 Fullscreen Experience - Không Cuộn

- ✅ Mỗi màn hình chiếm **100% viewport** (không scroll)
- ✅ Chuyển tiếp mượt mà giữa các màn hình
- ✅ Hiệu ứng fade & scale transitions
- ✅ Fixed positioning - trải nghiệm như app native

### 🎉 Confetti Celebration Effect

- ✅ **Canvas-based confetti** với vật lý thực tế
- ✅ Confetti bùng nổ khi mở bức thư
- ✅ Celebration khi chuyển màn hình
- ✅ Click anywhere để tạo confetti burst!
- ✅ Smooth animations với RequestAnimationFrame

### 🌍 3D Parallax Layers (Thế Giới Xíu)

- ✅ **3 lớp parallax** background chuyển động độc lập
- ✅ Floating animations tạo depth
- ✅ Radial gradients với opacity layers
- ✅ Tạo cảm giác không gian 3D sâu

### 🎠 3D Carousel Gallery

- ✅ **Carousel 3D thật** với 9 ảnh từ Cloudinary
- ✅ Circular arrangement - ảnh xếp thành vòng tròn
- ✅ Rotate với perspective transform
- ✅ Nút điều khiển: Previous / Next
- ✅ **Keyboard support**: Arrow Left/Right
- ✅ **Touch swipe** cho mobile
- ✅ Active image scale & glow effect

### 🌸 Hiệu Ứng Lãng Mạn

- ✅ Cánh hoa bay liên tục
- ✅ Typing animation
- ✅ Hiệu ứng mở phong thư 3D
- ✅ Bức thư hiện từng dòng
- ✅ Trái tim bay floating

## 🎮 Cách Sử Dụng

### Màn hình 1: Intro

- Click nút **"Open the letter 💌"** → Bùng nổ confetti!
- Click anywhere → Confetti burst tại vị trí click

### Màn hình 2: Bức Thư

- Phong thư tự động mở
- Bức thư hiện từng dòng với animation
- Click **"See Our Memories 📸"** → Chuyển sang gallery

### Màn hình 3: 3D Gallery

- **Nút ◄ ►** hoặc **Arrow keys** để xem ảnh
- **Swipe** trên mobile (trái/phải)
- Ảnh đang xem sẽ phóng to & sáng lên
- Mỗi lần chuyển ảnh → Confetti burst!

## 🚀 Chạy Website

```bash
# Mở trực tiếp file
# Chỉ cần double-click index.html

# Hoặc dùng Live Server (VS Code)
# Click phải -> Open with Live Server
```

## 📤 Deploy (3 Cách Siêu Dễ)

### 1️⃣ Netlify Drop (DỄ NHẤT - 30 giây)

1. Vào: https://app.netlify.com/drop
2. Kéo thả folder `8-3`
3. ✅ Xong! Website live ngay!

### 2️⃣ GitHub Pages

```bash
cd d:\8-3
git init
git add .
git commit -m "💌 3D Love Letter Website"
git remote add origin https://github.com/USERNAME/love-letter.git
git push -u origin main
```

Sau đó: Settings → Pages → Source: main → Save

### 3️⃣ Vercel

```bash
npm i -g vercel
cd d:\8-3
vercel
```

## 🎨 Tùy Chỉnh

### Thay đổi ảnh

Mở `index.html`, tìm section `#gallery-screen`:

```html
<div class="carousel-item" style="--i: 0">
  <img src="LINK_ẢNH_CỦA_BẠN" alt="Memory 1" />
</div>
```

### Thay đổi màu chủ đạo

Mở `style.css`, tìm:

```css
/* Gradient background */
background: linear-gradient(
  135deg,
  #ffeef8 0%,
  #ffe5f3 25%,
  #ffd6f0 50%,
  #f5e6ff 75%,
  #e8f0ff 100%
);

/* Button colors */
background: linear-gradient(135deg, #ff6fbf, #d946a6);
```

### Thay đổi nội dung bức thư

Mở `index.html`, edit phần `<p class="letter-line">`:

```html
<p class="letter-line">Nội dung dòng 1...</p>
<p class="letter-line">Nội dung dòng 2...</p>
```

### Thay số lượng ảnh trong carousel

- Thêm/xóa `<div class="carousel-item">` trong HTML
- Update `style="--i: X"` (X từ 0 đến n-1)
- JavaScript tự động tính toán góc xoay

## 🎯 Kỹ Thuật Sử Dụng

### HTML5

- Semantic sections
- Canvas element cho confetti
- Data attributes cho carousel

### CSS3

- **3D Transforms**: `perspective`, `rotateY`, `translateZ`
- **Flexbox** layouts
- **Animations** & **Transitions**
- **Media queries** responsive
- **CSS Variables** (`--i` cho carousel items)

### Vanilla JavaScript

- **Canvas API** - Vẽ confetti particles
- **Class-based** architecture (OOP)
- **MutationObserver** - Theo dõi DOM changes
- **Touch events** - Swipe support
- **Keyboard events** - Arrow keys
- **RequestAnimationFrame** - Smooth 60fps animations

## 📊 Cấu Trúc File

```
8-3/
├── index.html          # Structure với 3 screens
├── style.css           # 3D CSS + Animations + Responsive
├── script.js           # Confetti Class + Carousel Controller
├── README.md           # Hướng dẫn này
└── asscess/
    └── index.ts        # Cloudinary image URLs
```

## 🌟 Tối Ưu Hóa

- ✅ **No external libraries** - Pure vanilla
- ✅ **Lightweight** - Fast loading
- ✅ **Hardware accelerated** - GPU rendering
- ✅ **Responsive** - Mobile & Desktop
- ✅ **Touch optimized** - Swipe gestures
- ✅ **Keyboard accessible** - Arrow keys
- ✅ **Reduced motion** support - Accessibility

## 📱 Browser Support

- ✅ Chrome/Edge (Chromium) 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Mobile Safari (iOS 14+)
- ✅ Chrome Mobile (Android 8+)

## 🎮 Controls

### Desktop:

- **Mouse Click**: Interact với buttons
- **Arrow Left/Right**: Navigate carousel
- **Click anywhere**: Confetti burst

### Mobile:

- **Tap**: Interact với buttons
- **Swipe Left/Right**: Navigate carousel
- **Tap anywhere**: Confetti burst

## 💡 Tips & Tricks

### Thêm nhạc nền:

```html
<!-- Thêm vào cuối body -->
<audio autoplay loop>
  <source src="your-music.mp3" type="audio/mpeg" />
</audio>
```

### Thêm video background:

```html
<video autoplay muted loop class="bg-video">
  <source src="your-video.mp4" type="video/mp4" />
</video>
```

### Custom confetti colors:

Mở `script.js`, tìm:

```javascript
this.colors = ["#ff6fbf", "#d946a6", "#ffb3d9" /* thêm màu */];
```

## 🐛 Troubleshooting

**Ảnh không hiển thị?**

- Kiểm tra link Cloudinary
- Kiểm tra network connection
- Mở DevTools → Console để xem lỗi

**Carousel không xoay?**

- Refresh lại trang
- Kiểm tra console có lỗi JS không
- Đảm bảo `style="--i: X"` đúng thứ tự

**Confetti lag?**

- Giảm số lượng particles trong `burst()` method
- Giảm FPS bằng cách thêm delay

## ❤️ Credits

- **Design**: Modern 3D Cinematic Love Letter
- **Images**: Cloudinary CDN
- **Animations**: CSS3 + Canvas
- **Made with**: 💖 Vanilla JavaScript

---

## 🎊 Cảm ơn bạn đã sử dụng!

**Chúc bạn gửi được tình cảm đến người đặc biệt! 💕✨**

Website này được tạo ra với tình yêu, CSS 3D transforms, và rất nhiều confetti! 🎉
