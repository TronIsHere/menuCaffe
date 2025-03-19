import FeatureCard from "@/components/landing/featureCard";
import {
  BarChart,
  Calendar,
  Coffee,
  Monitor,
  Package,
  ShoppingBag,
} from "lucide-react";

export default function FeaturesSection() {
  return (
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
            پلتفرم ما تمام نیازهای مدیریت منوی شما را پوشش می‌دهد، از بروزرسانی
            منو تا تحلیل داده‌های فروش
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
  );
}
