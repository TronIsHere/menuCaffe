import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="py-16 bg-darkSecondary text-white">
      <div className="container mx-auto px-4">
        <div className="bg-primary-500/10 rounded-xl p-8 md:p-12 border border-primary-500/30">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-morabba-bold mb-6">
              منوی کافه خود را متحول کنید
            </h2>
            <p className="text-lg mb-8">
              همین امروز رایگان شروع کنید و تجربه مشتریان خود را با منوی دیجیتال
              زیبا و کاربردی به سطح جدیدی ببرید.
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
  );
}
