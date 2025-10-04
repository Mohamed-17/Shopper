# إعداد Clerk للمصادقة

## المشكلة

كانت مشكلة `currentUser()` لا تعيد بيانات المستخدم رغم تسجيل الدخول.

## الحلول المطبقة

### 1. تغيير من `currentUser()` إلى `auth()`

تم تغيير الكود في `app/(client)/wishlist/page.tsx`:

```typescript
// قبل
import { currentUser } from "@clerk/nextjs/server";
const user = await currentUser();

// بعد
import { auth } from "@clerk/nextjs/server";
const { userId } = await auth();
```

### 2. إضافة publishableKey إلى ClerkProvider

تم تحديث `app/(client)/layout.tsx`:

```typescript
<ClerkProvider
  publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
>
```

## متغيرات البيئة المطلوبة

أنشئ ملف `.env.local` في جذر المشروع مع المحتوى التالي:

```env
# Clerk Environment Variables
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key_here
CLERK_SECRET_KEY=your_secret_key_here

# Clerk URLs (اختياري)
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
```

## كيفية الحصول على المفاتيح

1. اذهب إلى [Clerk Dashboard](https://dashboard.clerk.com/)
2. سجل الدخول أو أنشئ حساب
3. أنشئ تطبيق جديد أو اختر تطبيق موجود
4. اذهب إلى "API Keys"
5. انسخ `Publishable Key` و `Secret Key`
6. ضعها في ملف `.env.local`

## إعادة تشغيل الخادم

بعد إضافة متغيرات البيئة:

```bash
npm run dev
```

## ملاحظات إضافية

- تأكد من أن ملف `.env.local` في `.gitignore`
- لا تشارك مفاتيح Clerk مع أي شخص
- في الإنتاج، استخدم متغيرات البيئة في منصة الاستضافة
