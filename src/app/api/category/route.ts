import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import { Category } from "@/models/category";

export async function GET(request: NextRequest) {
  try {
    await dbConnect();

    const categories = await Category.find().sort({ name: 1 });

    return NextResponse.json(
      { success: true, data: categories },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching categories:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch categories" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await dbConnect();

    const body = await request.json();

    // Validate required fields
    if (!body.name || !body.icon) {
      return NextResponse.json(
        {
          success: false,
          error: "Missing required fields",
          requiredFields: ["name", "icon"],
        },
        { status: 400 }
      );
    }

    // Check if category with same name already exists
    const existingCategory = await Category.findOne({ name: body.name });
    if (existingCategory) {
      return NextResponse.json(
        { success: false, error: "A category with this name already exists" },
        { status: 409 }
      );
    }

    // Create new category
    const category = await Category.create({
      name: body.name,
      icon: body.icon,
    });

    return NextResponse.json(
      {
        success: true,
        data: category,
        message: "Category created successfully",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating category:", error);
    return NextResponse.json(
      { success: false, error: "Failed to create category" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    await dbConnect();
    const body = await request.json();

    if (!body._id) {
      return NextResponse.json(
        { success: false, error: "MongoDB _id is required in request body" },
        { status: 400 }
      );
    }

    const deletedCategory = await Category.findByIdAndDelete(body._id);

    if (!deletedCategory) {
      return NextResponse.json(
        { success: false, error: "Category not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Category deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting category:", error);
    return NextResponse.json(
      { success: false, error: "Failed to delete category" },
      { status: 500 }
    );
  }
}
