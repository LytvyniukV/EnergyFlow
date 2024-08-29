import AdviceSection from "../../components/AdviceSection/AdviceSection";
import ExercisesSection from "../../components/ExercisesSection/ExercisesSection";
import HeroSection from "../../components/HeroSection/HeroSection";
import PrivatePageLayout from "../../shared/components/PrivatePageLayout/PrivatePageLayout";
import css from "./ExercisesPage.module.css";
export default function ExercisesPage() {
  return (
    <PrivatePageLayout>
      <HeroSection />
      <ExercisesSection />
      <AdviceSection />
    </PrivatePageLayout>
  );
}
