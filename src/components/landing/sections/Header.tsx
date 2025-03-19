import { Button } from "@/components/ui/button";

export default function Header() {
  return (
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
  );
}
