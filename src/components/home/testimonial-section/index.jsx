import SectionTitle from "@/components/shared/section-title";
import TestimonialCarousel from "./carousel";

export default function TestimonialSlider() {
  return (
    <section id="testimonials" className=" w-full mt-24">
      <SectionTitle text="Testimonials" className="mb-8" />
      <SectionTitle
        className="text-base text-[#7799BF] mb-2 font-light"
        text="Here’s what our happy drivers had to say about our services:"
      />
      <TestimonialCarousel />
    </section>
  );
}
