# ✅ Checklist Deploy Nhanh

## Bước 1: Kiểm tra dự án
- [ ] Chạy `npm run build` thành công
- [ ] Test local với `npm run preview`
- [ ] Không có lỗi trong console

## Bước 2: Push lên GitHub
```powershell
git add .
git commit -m "Ready for production"
git push origin master
```

## Bước 3: Deploy trên Vercel
1. [ ] Truy cập https://vercel.com
2. [ ] Import project từ GitHub
3. [ ] Đợi build hoàn tất
4. [ ] Kiểm tra preview URL

## Bước 4: Kết nối Domain
1. [ ] Vào Settings → Domains trong Vercel
2. [ ] Thêm domain: `ai.kythuatvang.com`
3. [ ] Copy CNAME value từ Vercel

## Bước 5: Cấu hình GoDaddy
1. [ ] Đăng nhập GoDaddy
2. [ ] Vào DNS Management của kythuatvang.com
3. [ ] Thêm CNAME record:
   - Type: CNAME
   - Name: ai
   - Value: cname.vercel-dns.com
   - TTL: 1 Hour
4. [ ] Save changes

## Bước 6: Verify
1. [ ] Domain verified trong Vercel (⏳ có thể mất vài phút)
2. [ ] SSL certificate được cấp tự động
3. [ ] Truy cập https://ai.kythuatvang.com
4. [ ] Test tất cả pages và routes

## 🎉 Hoàn tất!

**Lưu ý:**
- DNS có thể mất 24-48 giờ để propagate hoàn toàn
- Kiểm tra DNS: https://dnschecker.org/
- Xem logs trong Vercel Dashboard nếu có lỗi
