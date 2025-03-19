import { Button } from "@/components/ui/button";
import { MapPin, MessageSquare, Phone } from "lucide-react";

export default function Contact() {
  return (
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
              سوالی دارید؟ تیم پشتیبانی ما آماده پاسخگویی به تمامی سوالات شما
              است.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-darkPrimary p-3 rounded-lg">
                  <MessageSquare className="h-6 w-6 text-primary-300" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">ایمیل</h3>
                  <p className="text-stone-400">پاسخگویی در کمتر از ۲۴ ساعت</p>
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
                <label className="block mb-2 text-sm">نام و نام خانوادگی</label>
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
  );
}
