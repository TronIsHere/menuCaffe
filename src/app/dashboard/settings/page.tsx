"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import {
  MdEdit,
  MdSave,
  MdUpload,
  MdInfo,
  MdLock,
  MdColorLens,
} from "react-icons/md";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaQrcode } from "react-icons/fa";
import QRCode from "react-qr-code";

export default function SettingsPage() {
  const [editProfile, setEditProfile] = useState(false);
  const [profileData, setProfileData] = useState({
    cafeName: "مِنو کافه",
    ownerName: "محمد احمدی",
    email: "info@menucafe.com",
    phone: "09123456789",
    address: "تهران، خیابان ولیعصر، کوچه بهار",
  });

  const handleProfileChange = (
    field: keyof typeof profileData,
    value: string
  ) => {
    setProfileData((prev) => ({ ...prev, [field]: value }));
  };

  const handleProfileSave = () => {
    // Here you would typically save profile data to your backend
    console.log("Saving profile data:", profileData);
    setEditProfile(false);
  };

  return (
    <div className="flex justify-center  w-full">
      <div
        className="text-white font-iran-sans-regular space-y-6 max-w-[1200px] md: w-[900px]"
        dir="rtl"
      >
        <h1 className="font-bold text-3xl">تنظیمات</h1>

        <Tabs defaultValue="profile" className="w-full" dir="rtl">
          <TabsList className="bg-darkSecondary py-5 overflow-hidden text-white w-full justify-start mb-6 overflow-x-auto">
            <TabsTrigger
              value="profile"
              className="data-[state=active]:bg-primary-500"
            >
              <MdInfo className="ml-2" />
              پروفایل
            </TabsTrigger>
            <TabsTrigger
              value="security"
              className="data-[state=active]:bg-primary-500"
            >
              <MdLock className="ml-2" />
              امنیت
            </TabsTrigger>
            {/* <TabsTrigger
              value="appearance"
              className="data-[state=active]:bg-primary-500"
            >
              <MdColorLens className="ml-2" />
              ظاهر
            </TabsTrigger> */}
            <TabsTrigger
              value="qr-code"
              className="data-[state=active]:bg-primary-500"
            >
              <FaQrcode className="ml-2" />
              کد QR
            </TabsTrigger>
          </TabsList>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-6">
            <Card className="bg-darkSecondary border-0">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-xl">اطلاعات پروفایل</CardTitle>
                <Button
                  onClick={() => setEditProfile(!editProfile)}
                  variant="outline"
                  size="sm"
                >
                  {editProfile ? (
                    <MdSave className="ml-2" />
                  ) : (
                    <MdEdit className="ml-2" />
                  )}
                  {editProfile ? "ذخیره تغییرات" : "ویرایش پروفایل"}
                </Button>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-1 space-y-4">
                    <div>
                      <Label htmlFor="cafeName">نام کافه</Label>
                      <Input
                        id="cafeName"
                        value={profileData.cafeName}
                        onChange={(e) =>
                          handleProfileChange("cafeName", e.target.value)
                        }
                        disabled={!editProfile}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="ownerName">نام مالک</Label>
                      <Input
                        id="ownerName"
                        value={profileData.ownerName}
                        onChange={(e) =>
                          handleProfileChange("ownerName", e.target.value)
                        }
                        disabled={!editProfile}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">ایمیل</Label>
                      <Input
                        id="email"
                        type="email"
                        value={profileData.email}
                        onChange={(e) =>
                          handleProfileChange("email", e.target.value)
                        }
                        disabled={!editProfile}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">شماره تماس</Label>
                      <Input
                        id="phone"
                        value={profileData.phone}
                        onChange={(e) =>
                          handleProfileChange("phone", e.target.value)
                        }
                        disabled={!editProfile}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="address">آدرس</Label>
                      <Input
                        id="address"
                        value={profileData.address}
                        onChange={(e) =>
                          handleProfileChange("address", e.target.value)
                        }
                        disabled={!editProfile}
                        className="mt-2"
                      />
                    </div>

                    {editProfile && (
                      <Button onClick={handleProfileSave} className="mt-4">
                        <MdSave className="ml-2" />
                        ذخیره اطلاعات
                      </Button>
                    )}
                  </div>

                  <div className="md:w-1/3 flex flex-col items-center">
                    <div className="w-32 h-32 rounded-full bg-darkPrimary flex items-center justify-center overflow-hidden border-4 border-primary-500 mb-4">
                      <img
                        src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {editProfile && (
                      <Button variant="outline" size="sm">
                        <MdUpload className="ml-2" />
                        آپلود عکس جدید
                      </Button>
                    )}

                    <div className="mt-8 bg-darkPrimary p-4 rounded-lg w-full">
                      <h3 className="font-bold mb-2">اطلاعات حساب</h3>
                      <p className="text-sm text-stone-300 mb-1">
                        نوع حساب: کاربری
                      </p>
                      <p className="text-sm text-stone-300 mb-1">
                        تاریخ عضویت: ۱۴۰۳/۰۶/۲۵
                      </p>
                      <p className="text-sm text-stone-300">
                        وضعیت اشتراک: فعال (۳۲ روز باقیمانده)
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-darkSecondary border-0">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">اطلاعات کافه</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="businessHours">ساعت کاری</Label>
                    <Input
                      id="businessHours"
                      placeholder="مثال: شنبه تا چهارشنبه ۹ صبح تا ۱۱ شب"
                      disabled={!editProfile}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="website">وب‌سایت</Label>
                    <Input
                      id="website"
                      placeholder="www.example.com"
                      disabled={!editProfile}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="instagram">اینستاگرام</Label>
                    <Input
                      id="instagram"
                      placeholder="@example"
                      disabled={!editProfile}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phoneSupport">شماره پشتیبانی</Label>
                    <Input
                      id="phoneSupport"
                      placeholder="۰۲۱-۱۲۳۴۵۶۷۸"
                      disabled={!editProfile}
                      className="mt-2"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <Label htmlFor="about">درباره کافه</Label>
                  <textarea
                    id="about"
                    rows={4}
                    className="mt-2 w-full rounded-md border border-input bg-transparent px-3 py-1 text-right shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                    placeholder="توضیحاتی درباره کافه..."
                    disabled={!editProfile}
                  ></textarea>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Security Tab */}
          <TabsContent value="security" className="space-y-6">
            <Card className="bg-darkSecondary border-0">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">تغییر رمز عبور</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-4 max-w-md">
                  <div>
                    <Label htmlFor="currentPassword">رمز عبور فعلی</Label>
                    <Input
                      id="currentPassword"
                      type="password"
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="newPassword">رمز عبور جدید</Label>
                    <Input id="newPassword" type="password" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="confirmPassword">تکرار رمز عبور جدید</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      className="mt-2"
                    />
                  </div>
                  <Button className="mt-2">
                    <MdSave className="ml-2" />
                    ذخیره رمز عبور جدید
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Appearance Tab */}
          {/* <TabsContent value="appearance" className="space-y-6">
            <Card className="bg-darkSecondary border-0">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">تنظیمات ظاهری</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-6">
                  <div>
                    <Label>حالت نمایش</Label>
                    <div className="grid grid-cols-2 gap-4 mt-2">
                      <div className="border border-primary-500 bg-darkPrimary rounded-lg p-4 flex items-center justify-center cursor-pointer">
                        <div className="text-center">
                          <div className="w-12 h-12 bg-darkSecondary rounded-full mx-auto mb-2 border-2 border-primary-500"></div>
                          <span>حالت تیره</span>
                        </div>
                      </div>
                      <div className="border border-stone-600 bg-darkPrimary rounded-lg p-4 flex items-center justify-center cursor-pointer opacity-50">
                        <div className="text-center">
                          <div className="w-12 h-12 bg-white rounded-full mx-auto mb-2 border-2 border-stone-300"></div>
                          <span>حالت روشن</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label>انتخاب رنگ اصلی</Label>
                    <div className="grid grid-cols-5 gap-4 mt-2">
                      <div className="h-12 bg-primary-500 rounded-lg cursor-pointer border-2 border-white"></div>
                      <div className="h-12 bg-blue-500 rounded-lg cursor-pointer"></div>
                      <div className="h-12 bg-green-500 rounded-lg cursor-pointer"></div>
                      <div className="h-12 bg-red-500 rounded-lg cursor-pointer"></div>
                      <div className="h-12 bg-yellow-500 rounded-lg cursor-pointer"></div>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="menuDirection">جهت منو</Label>
                    <Select defaultValue="rtl">
                      <SelectTrigger className="mt-2" dir="rtl">
                        <SelectValue placeholder="انتخاب جهت" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="rtl">راست به چپ</SelectItem>
                        <SelectItem value="ltr">چپ به راست</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button className="mt-4">
                    <MdSave className="ml-2" />
                    ذخیره تنظیمات
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent> */}

          {/* QR Code Tab */}
          <TabsContent value="qr-code" className="space-y-6">
            <Card className="bg-darkSecondary border-0">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">مدیریت کد QR منو</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-1 space-y-6">
                    <div>
                      <Label>تنظیمات کد QR</Label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                        <div>
                          <Label htmlFor="qrSize" className="text-sm">
                            اندازه کد
                          </Label>
                          <Select defaultValue="medium">
                            <SelectTrigger className="mt-1" dir="rtl">
                              <SelectValue placeholder="انتخاب اندازه" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="small">کوچک</SelectItem>
                              <SelectItem value="medium">متوسط</SelectItem>
                              <SelectItem value="large">بزرگ</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="qrColor" className="text-sm">
                            رنگ کد
                          </Label>
                          <Select defaultValue="black">
                            <SelectTrigger className="mt-1" dir="rtl">
                              <SelectValue placeholder="انتخاب رنگ" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="black">مشکی</SelectItem>
                              <SelectItem value="blue">آبی</SelectItem>
                              <SelectItem value="green">سبز</SelectItem>
                              <SelectItem value="purple">بنفش</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="qrStyle">استایل کد</Label>
                      <div className="grid grid-cols-3 gap-4 mt-2">
                        <div className="border border-stone-600 bg-darkPrimary rounded-lg p-4 flex items-center justify-center cursor-pointer">
                          <div className="text-center">
                            <div className="w-12 h-12 bg-white rounded-md mx-auto mb-2"></div>
                            <span className="text-xs">استاندارد</span>
                          </div>
                        </div>
                        <div className="border border-stone-600 bg-darkPrimary rounded-lg p-4 flex items-center justify-center cursor-pointer">
                          <div className="text-center">
                            <div className="w-12 h-12 bg-white rounded-full mx-auto mb-2"></div>
                            <span className="text-xs">گرد</span>
                          </div>
                        </div>
                        <div className="border border-primary-500 bg-darkPrimary rounded-lg p-4 flex items-center justify-center cursor-pointer">
                          <div className="text-center">
                            <div className="w-12 h-12 bg-white rounded-md mx-auto mb-2 border-4 border-primary-500"></div>
                            <span className="text-xs">قاب‌دار</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <Label>اضافه کردن لوگو به کد QR</Label>
                      <div className="mt-2 flex items-center gap-4">
                        <div className="w-16 h-16 bg-darkPrimary rounded-lg flex items-center justify-center border border-stone-600">
                          <MdUpload size={24} />
                        </div>
                        <Button variant="outline">آپلود لوگو</Button>
                      </div>
                      <p className="text-xs text-stone-400 mt-1">
                        برای بهترین نتیجه، از لوگوی مربعی با فرمت PNG استفاده
                        کنید.
                      </p>
                    </div>

                    <Button className="mt-4">
                      <MdSave className="ml-2" />
                      بروزرسانی کد QR
                    </Button>
                  </div>

                  <div className="md:w-1/3 flex flex-col items-center justify-start bg-white p-8 rounded-lg">
                    <div className="bg-black p-8 rounded-lg mb-4">
                      <QRCode
                        size={256}
                        style={{
                          height: "auto",
                          maxWidth: "100%",
                          width: "100%",
                        }}
                        value={"www.google.com"}
                        viewBox={`0 0 256 256`}
                      />
                      {/* <img
                        src="/img/qr-sample.png"
                        alt="QR Code"
                        className="w-48 h-48"
                        onError={(e) => {
                          e.currentTarget.src =
                            "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://menucafe.example.com";
                        }}
                      /> */}
                    </div>
                    <div className="space-y-2 w-full">
                      <Button variant="outline" className="w-full">
                        دانلود کد QR
                      </Button>
                      <Button variant="outline" className="w-full">
                        چاپ کد QR
                      </Button>
                      <Button variant="outline" className="w-full">
                        اشتراک‌گذاری
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
