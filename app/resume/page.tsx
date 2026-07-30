import Resume from "../components/Resume";

export const metadata = {
  title: "Resume - Kamrujjaman Khan Bilas",
  description:
    "Resume of Kamrujjaman Khan Bilas — Software Engineering Student & Full-Stack Developer",
};

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Resume />
    </div>
  );
}
