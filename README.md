# AI Branch - Kỹ Thuật Vàng

Nhánh AI của hệ thống Kỹ Thuật Vàng với trang đăng nhập và trang chủ.

## Tính năng

- 🔐 **Trang đăng nhập** tại `https://ai.kythuatvang.com/`
- 🏠 **Trang chủ** tại `https://ai.kythuatvang.com/homepage`
- 🛡️ **Bảo mật** với hệ thống xác thực
- 📱 **Responsive** thiết kế đẹp mắt
- ⚡ **Nhanh chóng** với Vite và React

## Cài đặt

1. **Cài đặt dependencies:**
```bash
npm install
```

2. **Chạy ứng dụng:**
```bash
npm run dev
```

3. **Truy cập ứng dụng:**
- Mở trình duyệt và truy cập `http://localhost:3000`

## Tài khoản demo

- **Email:** `admin@kythuatvang.com`
- **Mật khẩu:** `admin123`

## Cấu trúc thư mục

```
AI/
├── src/
│   ├── components/          # Các component tái sử dụng
│   ├── contexts/           # React Context (AuthContext)
│   ├── pages/              # Các trang chính
│   │   ├── LoginPage.jsx   # Trang đăng nhập
│   │   └── HomePage.jsx    # Trang chủ
│   ├── App.jsx             # Component chính
│   ├── main.jsx           # Entry point
│   └── index.css          # Styles chính
├── index.html             # HTML template
├── package.json           # Dependencies
├── vite.config.js        # Vite config
└── tailwind.config.js     # Tailwind config
```

## Công nghệ sử dụng

- **React 18** - UI framework
- **React Router DOM** - Routing
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **Context API** - State management

## Deployment

Để deploy lên production:

1. **Build ứng dụng:**
```bash
npm run build
```

2. **Upload thư mục `dist/` lên server**

3. **Cấu hình server để serve static files**

## Phát triển thêm

- Thêm các tính năng AI mới
- Tích hợp API backend thực tế
- Thêm các trang khác
- Cải thiện UI/UX

## Liên hệ

Để được hỗ trợ, vui lòng liên hệ team phát triển Kỹ Thuật Vàng.
