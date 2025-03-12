import MaxWidthWrapper from "../MaxWidthWrapper";
import { BlurFade } from "../layout-grid";

export default function AboutUsimages() {
  const images = Array.from({ length: 19 }, (_, i) => {
    const isLandscape = i % 2 === 0
    const width = isLandscape ? 800 : 600
    const height = isLandscape ? 600 : 800
    return `/site-photos/a${i}.jpeg`
  })
  return (
    <div className="bg-b ">
      <MaxWidthWrapper>
      <section id="photos">
      <div className="columns-2 gap-4 sm:columns-3 pt-20">
        {images.map((imageUrl, idx) => (
          <BlurFade key={imageUrl} delay={0.25 + idx * 0.05} inView>
            <img
              className="mb-4 size-full rounded-lg object-contain"
              src={imageUrl}
              alt={`Random stock image ${idx + 1}`}
            />
          </BlurFade>
        ))}
      </div>
    </section>
      </MaxWidthWrapper>
    </div>
  );
}
