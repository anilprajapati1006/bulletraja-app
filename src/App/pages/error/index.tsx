import Button from "@/core/components/Button/Button";
import { useNavigate } from "react-router-dom";

export default function ErroPage() {
  const navigate = useNavigate();

  return (
    <section className="px-8 lg:px-14 py-20">
      <div className="flex flex-col justify-center items-center">
        <div className="">
          <h1 className="text-app-black text-center font-inter text-4xl/[36px] md:text-6xl/[60px] lg:text-[110px]/[110px] font-medium pb-5">404 Not Found</h1>
          <p className="text-base/[24px] text-center font-normal font-poppins mb-10">Your visited page not found. You may go home page.</p>
        </div>
        <Button onClick={() => navigate('/')} text="Back to home" className="max-w-fit mx-auto" />
      </div>
    </section>
  );
}