import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import { Product } from "@/models/product";

export async function GET() {
  try {
    await dbConnect();
    const products = await Product.find({})
      .populate("categoryId", "name icon")
      .sort({ createdAt: -1 });
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json(
      { error: "خطا در دریافت محصولات" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    await dbConnect();
    const body = await request.json();
    const product = await Product.create(body);
    const populatedProduct = await Product.findById(product._id).populate(
      "categoryId",
      "name icon"
    );
    return NextResponse.json(populatedProduct);
  } catch (error) {
    return NextResponse.json({ error: "خطا در ایجاد محصول" }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    await dbConnect();
    const body = await request.json();
    const { _id, ...updateData } = body;

    if (!_id) {
      return NextResponse.json(
        { error: "شناسه محصول الزامی است" },
        { status: 400 }
      );
    }

    const product = await Product.findByIdAndUpdate(_id, updateData, {
      new: true,
    }).populate("categoryId", "name icon");

    if (!product) {
      return NextResponse.json({ error: "محصول یافت نشد" }, { status: 404 });
    }

    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json(
      { error: "خطا در بروزرسانی محصول" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    await dbConnect();
    const { searchParams } = new URL(request.url);
    const _id = searchParams.get("_id");

    if (!_id) {
      return NextResponse.json(
        { error: "شناسه محصول الزامی است" },
        { status: 400 }
      );
    }

    const product = await Product.findByIdAndDelete(_id);

    if (!product) {
      return NextResponse.json({ error: "محصول یافت نشد" }, { status: 404 });
    }

    return NextResponse.json({ message: "محصول با موفقیت حذف شد" });
  } catch (error) {
    return NextResponse.json({ error: "خطا در حذف محصول" }, { status: 500 });
  }
}
