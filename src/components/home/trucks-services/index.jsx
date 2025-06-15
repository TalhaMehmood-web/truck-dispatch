import trucksData from "@/data/trucks";
import TruckCard from "./truck-card";
import ContentWrapper from "@/components/shared/content-wrapper";
import SectionTitle from "@/components/shared/section-title";

const TruckGrid = () => {
  return (
    <section id="trucks" className="py-20 bg-gray-50">
      <div className=" px-4 text-center">
        <SectionTitle className="mb-16" text="Truck Types We Dispatch" />

        <ContentWrapper>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {trucksData.map((truck, idx) => (
              <TruckCard key={idx} {...truck} />
            ))}
          </div>
        </ContentWrapper>
      </div>
    </section>
  );
};

export default TruckGrid;
