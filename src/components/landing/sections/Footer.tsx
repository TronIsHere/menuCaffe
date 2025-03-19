import { Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-darkPrimary pt-16 pb-8 text-white border-t border-stone-800">
      <div className="container mx-auto px-4" dir="rtl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-morabba-bold text-2xl mb-4">مِنو کافه</h3>
            <p className="text-stone-400 mb-4">
              پلتفرم مدیریت منوی دیجیتال برای کافه‌ها و رستوران‌ها
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-stone-400 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-stone-400 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-stone-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">محصول</h4>
            <ul className="space-y-2 text-stone-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  ویژگی‌ها
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  قیمت‌گذاری
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  مستندات
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  آپدیت‌های جدید
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">پشتیبانی</h4>
            <ul className="space-y-2 text-stone-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  مرکز راهنما
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  ویدیوهای آموزشی
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  سوالات متداول
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  تماس با پشتیبانی
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">شرکت</h4>
            <ul className="space-y-2 text-stone-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  درباره ما
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  وبلاگ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  مشاغل
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  تماس با ما
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-stone-400 text-sm">
              © ۱۴۰۴ مِنو کافه - تمامی حقوق محفوظ است
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-stone-400 hover:text-white transition-colors text-sm"
              >
                قوانین استفاده
              </a>
              <a
                href="#"
                className="text-stone-400 hover:text-white transition-colors text-sm"
              >
                حریم خصوصی
              </a>
              <a
                href="#"
                className="text-stone-400 hover:text-white transition-colors text-sm"
              >
                امنیت
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
