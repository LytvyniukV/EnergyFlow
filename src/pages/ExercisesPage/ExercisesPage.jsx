import AdviceSection from "../../components/AdviceSection/AdviceSection";
import HeroSection from "../../components/HeroSection/HeroSection";
import PrivatePageLayout from "../../shared/components/PrivatePageLayout/PrivatePageLayout";
import css from "./ExercisesPage.module.css";
export default function ExercisesPage() {
  return (
    <PrivatePageLayout>
      <HeroSection />
      <AdviceSection />
    </PrivatePageLayout>
  );
}
