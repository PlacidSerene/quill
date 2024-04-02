import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <MaxWidthWrapper className="mt-20 flex justify-center">
      <SignUp />;
    </MaxWidthWrapper>
  );
}
