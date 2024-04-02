import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <MaxWidthWrapper className="mt-20 flex justify-center">
      <SignIn />
    </MaxWidthWrapper>
  );
}
