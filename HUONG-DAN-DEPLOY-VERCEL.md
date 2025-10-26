# Hướng dẫn Deploy dự án lên Vercel và kết nối với Domain

## 📋 Tổng quan

Dự án này sẽ được deploy lên Vercel và kết nối với domain/subdomain của bạn:
- **Domain chính:** https://kythuatvang.com
- **Subdomain cho AI:** https://ai.kythuatvang.com (khuyến nghị)

---

## 🚀 Phương án 1: Deploy subdomain ai.kythuatvang.com (KHUYẾN NGHỊ)

### Bước 1: Đẩy code lên GitHub

```powershell
# Khởi tạo git repository (nếu chưa có)
git init

# Thêm tất cả file
git add .

# Commit
git commit -m "Initial commit - AI Branch project"

# Thêm remote repository (thay YOUR_USERNAME và YOUR_REPO)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# Đẩy code lên GitHub
git push -u origin master
```

### Bước 2: Import dự án vào Vercel

1. Truy cập [https://vercel.com/](https://vercel.com/)
2. Đăng nhập bằng tài khoản GitHub
3. Click **"Add New..."** → **"Project"**
4. Chọn repository GitHub vừa tạo
5. Vercel sẽ tự động detect Vite framework

### Bước 3: Cấu hình Build trên Vercel

Vercel sẽ tự động cấu hình, nhưng đảm bảo các thông tin sau:

- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`

Click **"Deploy"** để bắt đầu.

### Bước 4: Thêm Subdomain trong Vercel

1. Sau khi deploy thành công, vào **Settings** của project
2. Chọn tab **"Domains"**
3. Click **"Add"** và nhập: `ai.kythuatvang.com`
4. Vercel sẽ yêu cầu bạn thêm DNS records

### Bước 5: Cấu hình DNS trên GoDaddy

1. Đăng nhập vào [GoDaddy](https://www.godaddy.com/)
2. Vào **"My Products"** → **"DNS"** của domain kythuatvang.com
3. Thêm record mới:

**Cho subdomain ai.kythuatvang.com:**
```
Type: CNAME
Name: ai
Value: cname.vercel-dns.com
TTL: 1 Hour (hoặc 3600 seconds)
```

### Bước 6: Xác nhận Domain trên Vercel

1. Quay lại Vercel, domain `ai.kythuatvang.com` sẽ tự động verify
2. Đợi vài phút để DNS propagate (có thể mất 24-48 giờ)
3. Vercel sẽ tự động cấp SSL certificate

✅ **Hoàn tất!** Truy cập https://ai.kythuatvang.com

---

## 🌐 Phương án 2: Deploy trên domain chính kythuatvang.com

Nếu bạn muốn deploy trực tiếp trên domain chính:

### Bước 1-3: Giống Phương án 1

### Bước 4: Thêm Domain chính trong Vercel

1. Vào **Settings** → **"Domains"**
2. Thêm: `kythuatvang.com` và `www.kythuatvang.com`

### Bước 5: Cấu hình DNS trên GoDaddy

Thêm các records sau:

**A Record cho domain chính:**
```
Type: A
Name: @
Value: 76.76.19.19
TTL: 1 Hour
```

**CNAME cho www:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 1 Hour
```

⚠️ **Lưu ý:** Cách này sẽ thay thế trang hiện tại trên kythuatvang.com

---

## 📱 Phương án 3: Deploy cả hai (Subdomain + Path)

Nếu muốn có cả:
- `https://kythuatvang.com` (trang chính)
- `https://kythuatvang.com/ai` (trang AI)
- `https://ai.kythuatvang.com` (trang AI riêng)

Bạn cần cấu hình Vercel Rewrites hoặc sử dụng monorepo.

---

## 🔧 Các lệnh hữu ích

```powershell
# Chạy local để test
npm run dev

# Build production
npm run build

# Preview build
npm run preview

# Kiểm tra DNS propagation
nslookup ai.kythuatvang.com

# Test local build
npm run build
npm run preview
```

---

## 🐛 Xử lý lỗi thường gặp

### 1. Lỗi 404 khi refresh trang

✅ **Đã fix:** File `vercel.json` đã được cấu hình để redirect tất cả routes về `index.html`

### 2. Assets không load

✅ **Đã fix:** `base: '/'` trong `vite.config.js` đã được cập nhật

### 3. DNS chưa propagate

⏳ **Chờ đợi:** DNS có thể mất 24-48 giờ để propagate hoàn toàn
🔍 **Kiểm tra:** Sử dụng https://dnschecker.org/

### 4. SSL Certificate lỗi

⏳ **Chờ đợi:** Vercel cần vài phút để cấp SSL certificate
🔄 **Thử lại:** Xóa domain và thêm lại trong Vercel settings

---

## 📚 Tài liệu tham khảo

- [Vercel Documentation](https://vercel.com/docs)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [GoDaddy DNS Management](https://www.godaddy.com/help/manage-dns-680)

---

## ✅ Checklist Deploy

- [ ] Code đã được push lên GitHub
- [ ] Project đã được import vào Vercel
- [ ] Build thành công trên Vercel
- [ ] Domain/Subdomain đã được thêm trong Vercel
- [ ] DNS records đã được cấu hình trên GoDaddy
- [ ] Domain đã được verify trên Vercel
- [ ] SSL certificate đã được cấp
- [ ] Trang web hoạt động bình thường

---

## 💡 Khuyến nghị

**Nên sử dụng Phương án 1** (subdomain `ai.kythuatvang.com`) vì:
- ✅ Không ảnh hưởng đến trang chính
- ✅ Dễ quản lý và maintain
- ✅ Có thể có nhiều subdomain cho các dự án khác
- ✅ SEO tốt hơn với subdomain riêng

---

## 🆘 Cần hỗ trợ?

Nếu gặp vấn đề, hãy kiểm tra:
1. Console log trong browser (F12)
2. Build logs trên Vercel
3. DNS settings trên GoDaddy
4. Network tab để xem requests

**Chúc bạn deploy thành công! 🎉**
