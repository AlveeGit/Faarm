import { NextResponse } from "next/server";

export const POST = async (req) => {
  const body = await req.json();
  await startDb();
  const oldUser = await UserModel.findOne({ email: body.email });
  if (oldUser) {
    return NextResponse.json(
      { error: "Email is already in use!" },
      { status: 400 }
    );
  }
  const user = await UserModel.create({...body});
  
  return NextResponse.json(
    { user :
        {
            id: user._id.toString(),
            email: user.email,
            name: user.name,
            role: user.role
        }
    }
    );
};
