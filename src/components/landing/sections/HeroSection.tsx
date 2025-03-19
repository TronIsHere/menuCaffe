import { Button } from "@/components/ui/button";
import { CheckCircle, ChevronRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative bg-darkPrimary text-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10 items-center">
        <div className="max-w-lg">
          <h1 className="text-4xl md:text-5xl font-morabba-bold mb-6">
            مدیریت دیجیتال منوی کافه‌ شما
          </h1>
          <p className="text-lg mb-8 text-stone-300">
            با مِنو کافه، منوی دیجیتال خود را به سادگی مدیریت کنید و تجربه
            مشتریان خود را متحول سازید. مدیریت محصولات، آمار فروش و پیشنهادات
            ویژه همه در یک پلتفرم.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-primary-500 text-white hover:bg-primary-600"
            >
              شروع رایگان
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-stone-500">
              نمایش دمو
            </Button>
          </div>
          <div className="mt-8 flex items-center gap-2 text-stone-400">
            <CheckCircle className="h-5 w-5 text-success-400" />
            <span>۱۴ روز رایگان، بدون نیاز به کارت بانکی</span>
          </div>
        </div>
        <div className="flex justify-center w-full md:block">
          <div className="relative w-11/12 md:flex justify-center border">
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
  );
}
