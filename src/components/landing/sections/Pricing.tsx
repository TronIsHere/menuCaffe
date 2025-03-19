import { Button } from "@/components/ui/button";
import PricingCard from "@/components/landing/pricingCard";

export default function Pricing() {
  return (
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
            همه پلن‌ها شامل ۱۴ روز دوره آزمایشی رایگان هستند. بدون نیاز به کارت
            بانکی.
          </p>
          <Button variant="outline" className="border-stone-500">
            مشاهده مقایسه کامل پلن‌ها
          </Button>
        </div>
      </div>
    </section>
  );
}
