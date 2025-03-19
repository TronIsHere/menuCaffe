import StepCard from "@/components/landing/stepCard";

export default function HowItWorks() {
  return (
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
  );
}
