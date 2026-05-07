# NSOSYAL - Frontend Case Study
Bu proje, Next.js (App Router) kullanılarak geliştirilmiş bir sosyal medya profil sayfasıdır. Kullanıcı bilgileri, istatistikler ve sonsuz kaydırma (Infinite Scroll) özelliğine sahip post akışını içerir.

## Çalıştırma
### Bağımlılıkları Yükle:
```bash
npm install
```
### Projeyi Başlat: 
```bash
npm run dev
```
### Testleri Çalıştır:
```bash
npm test
```
Tarayıcıda http://localhost:3000 adresinden uygulamaya erişebilirsiniz.

## Kullanılan Teknolojiler
Next.js 14 & TypeScript: Modern uygulama mimarisi ve tip güvenliği.

Tailwind CSS: Responsive ve hızlı arayüz geliştirme.

Vitest: Birim testleri (Unit tests).

Intersection Observer: Performanslı sonsuz kaydırma (Infinite Scroll).

## Yaklaşımım ve Kararlarım
Hibrit Veri Yönetimi: Profil bilgilerini hızlı açılış için Server Component, post akışını ise dinamik yapı nedeniyle Client Component ile yönettim.

Mock API: Backend olmadığı için lib/api.ts dosyasında asenkron ve gecikmeli veriler dondurerek gerçek bir sunucu isteğini simüle ettim.

Hata ve Yükleme Yönetimi: error.tsx ile hata yakalama, Skeleton Shimmer ile yükleme ekranları ve Optimistic UI ile hızlı takip etme butonu ekleyerek kullanıcı deneyimini artırdım.

Performans: next/image ile görsel optimizasyonu sağladım.

## Klasör Yapısı
app/: Sayfa ve hata yönetimi.

components/: UI bileşenleri.

hooks/: Sonsuz kaydırma mantığı.

lib/: API simülasyonu.

__tests__/: Unit testler.
