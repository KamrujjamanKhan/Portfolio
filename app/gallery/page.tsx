import Header from "../components/Header";
import GalleryGrid from "../components/GalleryGrid";
import Footer from "../components/Footer";

export const metadata = {
  title: "Photography Gallery - Bilas.dev",
  description:
    "Explore my photography portfolio featuring urban landscapes, portraits, and travel moments.",
};

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main className="flex-1 pb-12">
        <section className="section-pad pt-10 md:pt-14">
          <div className="container-max mb-10 md:mb-12">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Photography
            </p>
            <h1 className="font-heading text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              Gallery
            </h1>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Capturing moments — urban landscapes, portraits, and travel experiences.
            </p>
          </div>
          <div className="container-max">
            <GalleryGrid />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
