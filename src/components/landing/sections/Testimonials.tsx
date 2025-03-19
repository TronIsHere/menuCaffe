import TestimonialCard from "@/components/landing/testimonialCard";

export default function Testimonials() {
  return (
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
  );
}
