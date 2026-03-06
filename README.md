# 💌 Website Thư Tình Cảm Lãng Mạn

Website single page đẹp mắt để gửi thư tình yêu với đầy đủ animation và hiệu ứng lãng mạn.

## ✨ Tính Năng

- 🌸 **Cánh hoa bay liên tục** trên màn hình
- ⌨️ **Typing animation** cho tiêu đề
- 💌 **Hiệu ứng mở phong thư** mượt mà
- 💖 **Trái tim bay** xung quanh bức thư
- 🎨 **Màu sắc pastel** lãng mạn (hồng, tím, trắng)
- 📱 **Responsive** hoàn hảo cho mobile & desktop
- 🎭 **Parallax effect** nhẹ nhàng
- 🎯 **Easter egg**: Click vào hình trong gallery để tạo hiệu ứng bùng nổ trái tim!

## 🚀 Cách Sử Dụng

### Chạy Local

Đơn giản chỉ cần mở file `index.html` bằng trình duyệt!

```bash
# Hoặc dùng Live Server nếu có
# Click phải vào index.html -> Open with Live Server
```

## 📤 Hướng Dẫn Deploy

### 1️⃣ Deploy lên GitHub Pages (MIỄN PHÍ)

**Bước 1:** Tạo repository trên GitHub

- Vào https://github.com/new
- Đặt tên repository (ví dụ: `love-letter`)
- Chọn `Public`
- Nhấn `Create repository`

**Bước 2:** Upload code lên GitHub

```bash
cd d:\8-3
git init
git add .
git commit -m "💌 Initial commit - Love letter website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/love-letter.git
git push -u origin main
```

**Bước 3:** Kích hoạt GitHub Pages

- Vào Settings của repository
- Chọn `Pages` ở sidebar
- Source: chọn `main` branch
- Nhấn `Save`
- Website sẽ có tại: `https://YOUR_USERNAME.github.io/love-letter/`

### 2️⃣ Deploy lên Netlify (SIÊU DỄ - KHUYÊN DÙNG)

**Cách 1: Drag & Drop**

1. Vào https://app.netlify.com/drop
2. Kéo thả folder `8-3` vào
3. Xong! Website live ngay lập tức

**Cách 2: Từ GitHub**

1. Đăng nhập Netlify: https://app.netlify.com
2. Nhấn `Add new site` → `Import an existing project`
3. Chọn GitHub → Chọn repository
4. Nhấn `Deploy`
5. Netlify tự động deploy và cho bạn URL miễn phí!

### 3️⃣ Deploy lên Vercel

**Cách 1: Vercel CLI**

```bash
# Cài Vercel CLI
npm i -g vercel

# Deploy
cd d:\8-3
vercel
```

**Cách 2: Vercel Web**

1. Vào https://vercel.com/new
2. Import repository từ GitHub
3. Nhấn `Deploy`
4. Xong!

## 🎨 Tùy Chỉnh Nội Dung

### Thay đổi nội dung bức thư

Mở file `index.html`, tìm phần:

```html
<div class="letter-content" id="letter-content">
  <p class="letter-line">Every moment with you feels like a beautiful dream,</p>
  <!-- Thay đổi các dòng này theo ý bạn -->
</div>
```

### Thay đổi màu sắc

Mở file `style.css`, tìm phần:

```css
body {
  background: linear-gradient(
    135deg,
    #ffeef8 0%,
    #ffe5f3 25%,
    #ffd6f0 50%,
    #f5e6ff 75%,
    #e8f0ff 100%
  );
}
```

Thay đổi mã màu hex theo ý thích.

### Thay đổi số lượng cánh hoa

Mở file `script.js`, tìm dòng:

```javascript
for (let i = 0; i < 20; i++) {  // Thay 20 thành số bạn muốn
```

## 🎯 Tối Ưu Hóa

Website đã được tối ưu:

- ✅ Không cần external library
- ✅ Animation nhẹ, không lag
- ✅ Tự động responsive
- ✅ File nhỏ gọn, load nhanh
- ✅ Tương thích mọi trình duyệt hiện đại

## 📝 Cấu Trúc File

```
8-3/
├── index.html      # File HTML chính
├── style.css       # CSS với animation đầy đủ
├── script.js       # JavaScript cho tương tác
└── README.md       # File hướng dẫn này
```

## 💡 Tips

- **Tùy chỉnh ảnh**: Thay thế emoji trong `.gallery-item` bằng ảnh thật với tag `<img>`
- **Âm nhạc**: Thêm background music bằng `<audio autoplay loop>`
- **Video**: Có thể thêm video background cho romantic hơn
- **Font chữ**: Import Google Fonts để có font chữ đẹp hơn

## 📱 Browser Support

- ✅ Chrome/Edge (Chromium)
- ✅ Firefox
- ✅ Safari
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🌟 Demo Features

Khi mở website:

1. Màn hình chào mừng với typing animation
2. Click nút "Open the letter 💌"
3. Phong thư mở ra với animation mượt
4. Bức thư hiện ra từng dòng
5. Scroll xuống xem gallery
6. Click vào hình trong gallery → trái tim bùng nổ! 💥

## ❤️ Made with Love

Được tạo ra với tình yêu và CSS animations!

---

**Chúc bạn gửi được tình cảm đến người đặc biệt! 💕**
