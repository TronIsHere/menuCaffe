import React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChevronRight,
  Coffee,
  Package,
  ShoppingBag,
  BarChart,
  MessageSquare,
  Calendar,
  Monitor,
  CheckCircle,
  Star,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen dark font-iran-sans-regular">
      {/* Hero Section */}
      <header className="relative bg-darkPrimary py-4 border-b border-darkSecondary">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="font-morabba-bold text-3xl text-white">مِنو کافه</h1>
          <nav className="hidden md:flex items-center gap-8 text-stone-300">
            <a
              href="#features"
              className="hover:text-primary-300 transition-colors"
            >
              ویژگی‌ها
            </a>
            <a
              href="#pricing"
              className="hover:text-primary-300 transition-colors"
            >
              قیمت گذاری
            </a>
            <a
              href="#testimonials"
              className="hover:text-primary-300 transition-colors"
            >
              نظرات مشتریان
            </a>
            <a
              href="#contact"
              className="hover:text-primary-300 transition-colors"
            >
              تماس با ما
            </a>
          </nav>
          <div className="flex gap-4">
            <Button
              variant="outline"
              className="hidden md:flex border-stone-500 text-white"
            >
              ورود
            </Button>
            <Button className="bg-primary-500 text-white hover:bg-primary-600">
              شروع رایگان
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-grow" dir="rtl">
        {/* Hero Section */}
        <section className="relative bg-darkPrimary text-white py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10 items-center">
            <div className="max-w-lg">
              <h1 className="text-4xl md:text-5xl font-morabba-bold mb-6">
                مدیریت دیجیتال منوی کافه‌ شما
              </h1>
              <p className="text-lg mb-8 text-stone-300">
                با مِنو کافه، منوی دیجیتال خود را به سادگی مدیریت کنید و تجربه
                مشتریان خود را متحول سازید. مدیریت محصولات، آمار فروش و
                پیشنهادات ویژه همه در یک پلتفرم.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-primary-500 text-white hover:bg-primary-600"
                >
                  شروع رایگان
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-stone-500"
                >
                  نمایش دمو
                </Button>
              </div>
              <div className="mt-8 flex items-center gap-2 text-stone-400">
                <CheckCircle className="h-5 w-5 text-success-400" />
                <span>۱۴ روز رایگان، بدون نیاز به کارت بانکی</span>
              </div>
            </div>

            <div className="relative hidden md:block">
              <div className="relative bg-darkSecondary p-4 rounded-xl border border-stone-700 shadow-xl overflow-hidden">
                <img
                  src="/img/land.png"
                  alt="منو کافه داشبورد"
                  className="rounded-lg border border-stone-700 w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-darkPrimary to-transparent opacity-10"></div>
              </div>
              <div className="absolute -left-6 -bottom-6 bg-primary-500 text-white px-6 py-3 rounded-lg shadow-lg transform rotate-6">
                +۲۸٪ افزایش فروش
              </div>
            </div>
          </div>

          <div className="container mx-auto px-4 mt-20">
            <div className="border-t border-stone-800 pt-10">
              <p className="text-center text-stone-400 mb-8">
                مورد اعتماد بیش از ۵۰۰ کافه در سراسر ایران
              </p>
              <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                {[
                  "کافه لمیز",
                  "کافه نیل",
                  "کوفی شاپ ویونا",
                  "کافه چیتا",
                  "برشکا کافه",
                ].map((name, i) => (
                  <div key={i} className="text-stone-500 text-lg font-bold">
                    {name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          id="features"
          className="py-16 md:py-24 bg-darkSecondary text-white"
        >
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-morabba-bold mb-4">
                ویژگی‌های منحصر به فرد مِنو کافه
              </h2>
              <p className="text-stone-300">
                پلتفرم ما تمام نیازهای مدیریت منوی شما را پوشش می‌دهد، از
                بروزرسانی منو تا تحلیل داده‌های فروش
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Coffee className="h-10 w-10 text-primary-300" />}
                title="مدیریت آسان محصولات"
                description="به سادگی محصولات خود را با عکس و توضیحات اضافه، ویرایش و مدیریت کنید."
              />
              <FeatureCard
                icon={<ShoppingBag className="h-10 w-10 text-primary-300" />}
                title="دسته‌بندی هوشمند"
                description="محصولات خود را در دسته‌های مختلف با آیکون‌های سفارشی سازماندهی کنید."
              />
              <FeatureCard
                icon={<Package className="h-10 w-10 text-primary-300" />}
                title="پیشنهادات ویژه"
                description="تخفیف‌ها و پیشنهادات ویژه را به راحتی ایجاد و مدیریت کنید."
              />
              <FeatureCard
                icon={<BarChart className="h-10 w-10 text-primary-300" />}
                title="آنالیز بازدیدها"
                description="با داشبورد پیشرفته، از میزان بازدید و محبوبیت محصولات خود مطلع شوید."
              />
              <FeatureCard
                icon={<Monitor className="h-10 w-10 text-primary-300" />}
                title="نمایش دیجیتال"
                description="منوی زیبا و واکنش‌گرا برای نمایش در موبایل، تبلت و وب."
              />
              <FeatureCard
                icon={<Calendar className="h-10 w-10 text-primary-300" />}
                title="برنامه‌ریزی زمان‌بندی"
                description="منوهای مختلف برای روزهای مختلف هفته یا مناسبت‌های خاص."
              />
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 md:py-24 bg-darkPrimary text-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-morabba-bold mb-4">
                چگونه مِنو کافه کار می‌کند؟
              </h2>
              <p className="text-stone-300">
                تنها در چند مرحله ساده، منوی دیجیتال کافه خود را راه‌اندازی کنید
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <StepCard
                number="۱"
                title="ثبت‌نام و ایجاد پروفایل"
                description="اطلاعات کافه خود را وارد کنید و پروفایل خود را در کمتر از ۵ دقیقه بسازید."
              />
              <StepCard
                number="۲"
                title="افزودن محصولات و دسته‌بندی‌ها"
                description="محصولات، قیمت‌ها و عکس‌ها را اضافه کنید و آنها را در دسته‌های مختلف سازماندهی کنید."
              />
              <StepCard
                number="۳"
                title="به اشتراک‌گذاری و استفاده"
                description="QR کد منحصر به فرد خود را دریافت کنید و روی میزها قرار دهید تا مشتریان منوی شما را ببینند."
              />
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section
          id="pricing"
          className="py-16 md:py-24 bg-darkSecondary text-white"
        >
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-morabba-bold mb-4">
                قیمت‌گذاری ساده و منعطف
              </h2>
              <p className="text-stone-300">
                بدون قراردادهای طولانی مدت، بدون هزینه‌های پنهان
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <PricingCard
                title="پایه"
                price="۱۹۰,۰۰۰"
                period="ماهانه"
                description="برای کافه‌های کوچک"
                features={[
                  "حداکثر ۳۰ محصول",
                  "۵ دسته‌بندی",
                  "آپلود تصاویر",
                  "پشتیبانی ایمیل",
                  "۱ منوی دیجیتال",
                ]}
                buttonText="شروع دوره آزمایشی"
                featured={false}
              />
              <PricingCard
                title="پیشرفته"
                price="۳۹۰,۰۰۰"
                period="ماهانه"
                description="برای کافه‌های متوسط"
                features={[
                  "محصولات نامحدود",
                  "دسته‌بندی‌های نامحدود",
                  "آپلود تصاویر نامحدود",
                  "پیشنهادات ویژه",
                  "پشتیبانی تلفنی و ایمیل",
                  "۳ منوی دیجیتال",
                  "آنالیز بازدیدها",
                ]}
                buttonText="شروع دوره آزمایشی"
                featured={true}
              />
              <PricingCard
                title="سازمانی"
                price="۷۹۰,۰۰۰"
                period="ماهانه"
                description="برای کافه‌های بزرگ و زنجیره‌ای"
                features={[
                  "همه ویژگی‌های پلن پیشرفته",
                  "مدیریت چند شعبه",
                  "دسترسی API",
                  "سفارشی‌سازی کامل برند",
                  "پشتیبانی اختصاصی ۲۴/۷",
                  "گزارش‌های پیشرفته",
                ]}
                buttonText="شروع دوره آزمایشی"
                featured={false}
              />
            </div>

            <div className="mt-12 text-center">
              <p className="text-stone-400 mb-4">
                همه پلن‌ها شامل ۱۴ روز دوره آزمایشی رایگان هستند. بدون نیاز به
                کارت بانکی.
              </p>
              <Button variant="outline" className="border-stone-500">
                مشاهده مقایسه کامل پلن‌ها
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section
          id="testimonials"
          className="py-16 md:py-24 bg-darkPrimary text-white"
        >
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-morabba-bold mb-4">
                کافه‌داران درباره ما چه می‌گویند
              </h2>
              <p className="text-stone-300">
                تجربه واقعی صاحبان کافه‌ها از استفاده از مِنو کافه
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <TestimonialCard
                quote="از وقتی از مِنو کافه استفاده می‌کنیم، سرعت سفارش‌گیری ما ۳۰٪ افزایش یافته و مشتریان از تجربه دیجیتال لذت می‌برند."
                author="سارا محمدی"
                role="مدیر کافه لمیز"
                rating={5}
              />
              <TestimonialCard
                quote="امکان ایجاد پیشنهادات ویژه و تخفیف‌ها باعث افزایش فروش ما شده. رابط کاربری بسیار ساده و کاربردی است."
                author="علی کریمی"
                role="صاحب کافه نیل"
                rating={5}
              />
              <TestimonialCard
                quote="بهترین تصمیم ما استفاده از مِنو کافه بود. اکنون مشتریان ما قبل از آمدن به کافه، منوی ما را آنلاین چک می‌کنند."
                author="مریم رضایی"
                role="مدیر کوفی شاپ ویونا"
                rating={4}
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-darkSecondary text-white">
          <div className="container mx-auto px-4">
            <div className="bg-primary-500/10 rounded-xl p-8 md:p-12 border border-primary-500/30">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-morabba-bold mb-6">
                  منوی کافه خود را متحول کنید
                </h2>
                <p className="text-lg mb-8">
                  همین امروز رایگان شروع کنید و تجربه مشتریان خود را با منوی
                  دیجیتال زیبا و کاربردی به سطح جدیدی ببرید.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button
                    size="lg"
                    className="bg-primary-500 text-white hover:bg-primary-600"
                  >
                    شروع دوره آزمایشی رایگان
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary-300 text-primary-300"
                  >
                    درخواست دمو اختصاصی
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-16 md:py-24 bg-darkPrimary text-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-morabba-bold mb-4">
                سوالات متداول
              </h2>
              <p className="text-stone-300">
                پاسخ سوالات رایج درباره خدمات مِنو کافه
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl mx-auto">
              <FaqItem
                question="آیا می‌توانم منوی خود را سفارشی‌سازی کنم؟"
                answer="بله، شما می‌توانید رنگ‌ها، فونت‌ها و طرح کلی منو را مطابق با برند خود سفارشی‌سازی کنید. در پلن‌های پیشرفته و سازمانی، امکانات سفارشی‌سازی بیشتری در دسترس است."
              />
              <FaqItem
                question="آیا نیاز به نصب نرم‌افزار خاصی است؟"
                answer="خیر، مِنو کافه یک سرویس تحت وب است و برای استفاده از آن تنها به اینترنت و یک مرورگر نیاز دارید. همچنین اپلیکیشن موبایل ما نیز برای مدیریت آسان‌تر در دسترس است."
              />
              <FaqItem
                question="آیا مشتریان برای دیدن منو نیاز به نصب اپلیکیشن دارند؟"
                answer="خیر، مشتریان می‌توانند با اسکن QR کد، منوی شما را مستقیماً در مرورگر خود مشاهده کنند. هیچ نیازی به نصب اپلیکیشن نیست."
              />
              <FaqItem
                question="آیا امکان سفارش آنلاین هم وجود دارد؟"
                answer="بله، در پلن‌های پیشرفته و سازمانی، امکان سفارش آنلاین و پرداخت آنلاین نیز وجود دارد و می‌توانید سیستم سفارش‌گیری خود را با مِنو کافه یکپارچه کنید."
              />
              <FaqItem
                question="آیا می‌توانم منو را به زبان‌های مختلف ارائه دهم؟"
                answer="بله، شما می‌توانید منوی خود را به چندین زبان تنظیم کنید که این ویژگی برای کافه‌های با مشتریان بین‌المللی بسیار مفید است."
              />
              <FaqItem
                question="آیا پشتیبانی فنی ارائه می‌دهید؟"
                answer="بله، ما پشتیبانی فنی برای همه پلن‌ها ارائه می‌دهیم. در پلن‌های پیشرفته و سازمانی، پشتیبانی اختصاصی و سریع‌تر در دسترس است."
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="py-16 md:py-24 bg-darkSecondary text-white"
        >
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-morabba-bold mb-6">
                  با ما در تماس باشید
                </h2>
                <p className="text-stone-300 mb-8">
                  سوالی دارید؟ تیم پشتیبانی ما آماده پاسخگویی به تمامی سوالات
                  شما است.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-darkPrimary p-3 rounded-lg">
                      <MessageSquare className="h-6 w-6 text-primary-300" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">ایمیل</h3>
                      <p className="text-stone-400">
                        پاسخگویی در کمتر از ۲۴ ساعت
                      </p>
                      <a
                        href="mailto:info@menucaffe.ir"
                        className="text-primary-300 mt-1 block"
                      >
                        info@menucaffe.ir
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-darkPrimary p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-primary-300" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">تلفن پشتیبانی</h3>
                      <p className="text-stone-400">
                        شنبه تا پنجشنبه، ۹ صبح تا ۶ عصر
                      </p>
                      <a
                        href="tel:+982112345678"
                        className="text-primary-300 mt-1 block"
                      >
                        ۰۲۱-۱۲۳۴۵۶۷۸
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-darkPrimary p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-primary-300" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">دفتر مرکزی</h3>
                      <p className="text-stone-400">
                        تهران، خیابان ولیعصر، خیابان بهار، پلاک ۱۰، طبقه ۳
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-darkPrimary rounded-xl p-8 border border-stone-700">
                <h3 className="font-bold text-xl mb-6">ارسال پیام</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block mb-2 text-sm">
                      نام و نام خانوادگی
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-lg bg-darkSecondary border border-stone-700 text-white"
                      placeholder="نام خود را وارد کنید"
                      dir="rtl"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm">ایمیل</label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 rounded-lg bg-darkSecondary border border-stone-700 text-white"
                      placeholder="ایمیل خود را وارد کنید"
                      dir="rtl"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm">نام کافه</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-lg bg-darkSecondary border border-stone-700 text-white"
                      placeholder="نام کافه خود را وارد کنید"
                      dir="rtl"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm">پیام</label>
                    <textarea
                      className="w-full px-4 py-2 rounded-lg bg-darkSecondary border border-stone-700 text-white h-32"
                      placeholder="پیام خود را وارد کنید"
                      dir="rtl"
                    ></textarea>
                  </div>
                  <Button className="w-full bg-primary-500 hover:bg-primary-600">
                    ارسال پیام
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
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
    </div>
  );
}

// Component for the Phone icon in contact section
const Phone = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
};

// Component for the MapPin icon in contact section
const MapPin = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
};

// Component for social media icons
const Instagram = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
};

const Twitter = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
};

const Linkedin = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
};

// Feature Card Component
const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <div className="bg-darkPrimary p-6 rounded-xl border border-stone-700 hover:border-primary-500/50 transition-colors">
      <div className="mb-4">{icon}</div>
      <h3 className="font-bold text-xl mb-2">{title}</h3>
      <p className="text-stone-300">{description}</p>
    </div>
  );
};

// Step Card Component
const StepCard = ({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="bg-darkSecondary p-6 rounded-xl border border-stone-700 relative">
      <div className="absolute top-4 left-4 bg-primary-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
        {number}
      </div>
      <h3 className="font-bold text-xl mb-4 mt-2">{title}</h3>
      <p className="text-stone-300">{description}</p>
    </div>
  );
};
interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  buttonText: string;
  featured: boolean;
}

// Pricing Card Component
const PricingCard = ({
  title,
  price,
  period,
  description,
  features,
  buttonText,
  featured,
}: PricingCardProps) => {
  return (
    <div
      className={`bg-darkPrimary rounded-xl overflow-hidden border ${
        featured
          ? "border-primary-500 shadow-lg shadow-primary-500/10"
          : "border-stone-700"
      } flex flex-col h-full`}
    >
      {featured && (
        <div className="bg-primary-500 py-1 text-center">
          <span className="text-white text-sm font-bold">پیشنهاد ویژه</span>
        </div>
      )}
      <div className="p-6 flex-1">
        <h3 className="font-bold text-xl mb-1">{title}</h3>
        <p className="text-stone-400 text-sm mb-4">{description}</p>
        <div className="mb-6">
          <span className="text-3xl font-bold">{price}</span>
          <span className="text-stone-400"> تومان / {period}</span>
        </div>
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary-300 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-6 pt-0">
        <Button
          className={`w-full ${
            featured
              ? "bg-primary-500 hover:bg-primary-600"
              : "bg-darkSecondary hover:bg-stone-700"
          }`}
          variant={featured ? "default" : "outline"}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};
interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  rating: number;
}
// Testimonial Card Component
const TestimonialCard = ({
  quote,
  author,
  role,
  rating,
}: TestimonialCardProps) => {
  return (
    <div className="bg-darkSecondary p-6 rounded-xl border border-stone-700">
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < rating ? "text-amber-400" : "text-stone-600"
            }`}
          />
        ))}
      </div>
      <p className="text-stone-300 mb-6">"{quote}"</p>
      <div>
        <p className="font-bold">{author}</p>
        <p className="text-stone-400 text-sm">{role}</p>
      </div>
    </div>
  );
};
interface FaqItemProps {
  question: string;
  answer: string;
}
// FAQ Item Component
const FaqItem = ({ question, answer }: FaqItemProps) => {
  return (
    <div>
      <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
        <div className="bg-primary-500/20 text-primary-300 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">
          <span className="text-sm">؟</span>
        </div>
        {question}
      </h3>
      <p className="text-stone-300">{answer}</p>
    </div>
  );
};
