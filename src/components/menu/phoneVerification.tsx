import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { FiPhone, FiCheck, FiX } from "react-icons/fi";

const PhoneVerificationDiscount = () => {
  const [open, setOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [step, setStep] = useState("phone"); // phone, code, success
  const [error, setError] = useState("");
  const [countdown, setCountdown] = useState(0);
  const [discountActivated, setDiscountActivated] = useState(false);

  // For demonstration purposes - in a real app, this would be stored in a more persistent way
  useEffect(() => {
    const hasVerified = localStorage.getItem("phoneVerified");
    if (hasVerified === "true") {
      setDiscountActivated(true);
    }
  }, []);

  // Countdown for resending code
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  const handlePhoneSubmit = () => {
    // Basic validation
    const phoneRegex = /^09\d{9}$/;
    if (!phoneRegex.test(phoneNumber)) {
      setError("لطفا یک شماره موبایل معتبر وارد کنید");
      return;
    }

    setError("");
    // In a real implementation, this would call an API to send a verification code
    setStep("code");
    setCountdown(120); // 2 minute countdown

    // For demo purposes, we'll use 1234 as the verification code
    console.log("Verification code sent: 1234");
  };

  const handleVerifyCode = () => {
    // In a real implementation, this would validate the code against what was sent
    if (verificationCode === "1234") {
      // Demo code
      setStep("success");
      setDiscountActivated(true);
      localStorage.setItem("phoneVerified", "true");

      // Dispatch a custom event that other components can listen to
      const discountEvent = new CustomEvent("discountActivated", {
        detail: { discountPercent: 15 },
      });
      window.dispatchEvent(discountEvent);

      // Auto-close after 3 seconds
      setTimeout(() => {
        setOpen(false);
        // Reset for next time
        setTimeout(() => {
          setStep("phone");
          setVerificationCode("");
          setPhoneNumber("");
        }, 500);
      }, 3000);
    } else {
      setError("کد تایید اشتباه است");
    }
  };

  const handleResendCode = () => {
    // In a real implementation, this would call an API to resend the code
    setCountdown(120);
    setError("");
    console.log("Verification code resent: 1234");
  };

  const formatTime = (seconds: any) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <>
      {discountActivated ? (
        <div
          className="bg-success-500/10 border border-success-500/30 mb-6 p-4 rounded-lg flex items-center justify-between"
          dir="rtl"
        >
          <div className="flex items-center">
            <div className="bg-success-500 rounded-full p-2 text-white ml-3">
              <FiCheck size={18} />
            </div>
            <div>
              <h3 className="font-iran-sans-bold text-success-500">
                تخفیف ۱۵٪ فعال شد!
              </h3>
              <p className="text-sm">تخفیف شما روی سبد خرید اعمال شده است</p>
            </div>
          </div>
          <Badge variant="success" className="ml-2">
            ۱۵٪
          </Badge>
        </div>
      ) : (
        <div
          className="bg-amber-50 border border-amber-200 mb-6 p-4 rounded-lg flex items-center justify-between"
          dir="rtl"
        >
          <div className="flex items-center">
            <div className="bg-amber-500 rounded-full p-2 text-white ml-3">
              <FiPhone size={18} />
            </div>
            <div>
              <h3 className="font-iran-sans-bold text-amber-800">
                تخفیف ویژه با تایید شماره موبایل
              </h3>
              <p className="text-sm text-amber-700">
                شماره موبایل خود را تایید کنید و از ۱۵٪ تخفیف بهره‌مند شوید
              </p>
            </div>
          </div>
          <Button
            onClick={() => setOpen(true)}
            className="bg-amber-500 hover:bg-amber-600 text-white"
          >
            دریافت تخفیف
          </Button>
        </div>
      )}

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          darkMode={true}
          className="max-w-md font-iran-sans-regular"
          dir="rtl"
        >
          <DialogHeader>
            <DialogTitle className="text-center text-xl mb-2">
              {step === "phone" && "دریافت تخفیف ۱۵٪"}
              {step === "code" && "تایید شماره موبایل"}
              {step === "success" && "تبریک! تخفیف شما فعال شد"}
            </DialogTitle>
          </DialogHeader>

          {step === "phone" && (
            <div className="py-4">
              <p className="text-center mb-6">
                برای دریافت تخفیف، لطفا شماره موبایل خود را وارد کنید
              </p>
              <Input
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="شماره موبایل (مثال: ۰۹۱۲۳۴۵۶۷۸۹)"
                className="text-center mb-2"
                dir="ltr"
              />
              {error && (
                <p className="text-error-500 text-sm text-center">{error}</p>
              )}
              <Button
                onClick={handlePhoneSubmit}
                className="w-full mt-4 bg-primary-500"
              >
                دریافت کد تایید
              </Button>
            </div>
          )}

          {step === "code" && (
            <div className="py-4">
              <p className="text-center mb-6">
                کد تایید به شماره {phoneNumber} ارسال شد
              </p>
              <Input
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                placeholder="کد تایید (برای نمایش وارد کنید: ۱۲۳۴)"
                className="text-center tracking-wider mb-2"
                dir="ltr"
              />
              {error && (
                <p className="text-error-500 text-sm text-center">{error}</p>
              )}

              <div className="flex justify-between items-center mt-4">
                <Button
                  variant="link"
                  onClick={handleResendCode}
                  disabled={countdown > 0}
                  className="text-sm"
                >
                  {countdown > 0
                    ? `ارسال مجدد کد (${formatTime(countdown)})`
                    : "ارسال مجدد کد"}
                </Button>
                <Button onClick={handleVerifyCode} className="bg-primary-500">
                  تایید کد
                </Button>
              </div>
            </div>
          )}

          {step === "success" && (
            <div className="py-4 text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-success-400 flex items-center justify-center mb-4">
                <FiCheck size={32} className="text-white" />
              </div>
              <p className="font-iran-sans-bold text-xl mb-2">
                تخفیف ۱۵٪ با موفقیت فعال شد
              </p>
              <p className="text-sm mb-6">
                تخفیف شما روی سبد خرید اعمال شده است
              </p>
            </div>
          )}

          <DialogFooter className="flex justify-center">
            {(step === "phone" || step === "code") && (
              <Button variant="ghost" onClick={() => setOpen(false)}>
                انصراف
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PhoneVerificationDiscount;
