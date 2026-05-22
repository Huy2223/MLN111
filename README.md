# MLN111 — Landing Page Triết Học Mác–Lênin

Landing page tương tác cho **Phần III: Lý Luận Nhận Thức** (giáo trình Triết học Mác–Lênin), trình bày 6 trường phái triết học qua scroll animation và 3D cinematic transitions.

---

## Demo

> Chạy local: `npm run dev` → `http://localhost:5173`

---

## Tính năng

- **4 Scene3D transitions** xen giữa các trường phái, mỗi cái một kiểu animation khác nhau:
  - `rise` — tấm bảng nằm nghiêng 3D (rotateX) rồi dựng đứng về phía viewer
  - `curtain` — màn hình kéo xuống lộ ảnh (clip-path reveal)
  - `flip` — cánh cửa xoay từ bên trái vào (rotateY door-swing)
  - `focus` — rack focus: ảnh mờ + phóng to rồi lấy nét kéo về

- **Scroll-driven animations** toàn trang với Framer Motion `useScroll` + `useTransform`
- **6 cặp triết gia** hiển thị inline với layout xen kẽ trái/phải
- **Ảnh thật** cho Marx, Lenin, Berkeley, Ernst Mach — các triết gia còn lại dùng art portrait
- **Intro section** với blur-dissolve headline, clip-path eyebrow wipe, ornament draw animation
- Responsive mobile, `prefers-reduced-motion` support

---

## Các trường phái (thứ tự scroll)

| # | Trường phái | Đại diện |
|---|---|---|
| 1 | Chủ nghĩa duy tâm chủ quan | Berkeley & Mach |
| 2 | Chủ nghĩa duy tâm khách quan | Plato & Hegel |
| 3 | Thuyết hoài nghi | Descartes & Hume |
| 4 | Thuyết không thể biết | Immanuel Kant |
| 5 | Chủ nghĩa duy vật trước Marx | Feuerbach & Holbach |
| 6 | Chủ nghĩa duy vật biện chứng | Marx & Lenin |

---

## Stack

- **React 18** + **Vite 5**
- **Framer Motion v12** — scroll animations, 3D transforms, whileInView
- CSS thuần — không có UI library
- Font: Playfair Display (serif) + Inter (sans)

---

## Cấu trúc

```
src/
├── data/pairs.jsx          — 6 cặp triết gia, nội dung tiếng Việt
├── components/
│   ├── Hero.jsx            — Full-viewport hero section
│   ├── Intro.jsx           — Intro text với blur-fade animation
│   ├── ScrollPairs.jsx     — Layout cuộn xen kẽ 6 cặp
│   ├── Scene3D.jsx         — 4 variants 3D transition (rise/curtain/flip/focus)
│   └── Modal.jsx           — Modal chi tiết
└── hooks/useInView.js      — IntersectionObserver hook

public/images/              — Ảnh triết gia + scene backgrounds
```

---

## Cài đặt & chạy

```bash
npm install
npm run dev
```

```bash
npm run build   # production build → dist/
```

---

## Môn học

**Triết học Mác–Lênin — MLN111**  
FPT University · Semester Summer 2026
