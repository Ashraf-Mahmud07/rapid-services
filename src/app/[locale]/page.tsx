import { useTranslations } from "next-intl";
import { Footer, Navbar } from "@/shared/components/layout";

export default function HomePage() {
  const t = useTranslations("common");
  return (
    <>
      <Navbar variant="solid" />

      <h1 className="text-primary">{t("welcome")}</h1>

      <Footer />
    </>
  );
}
