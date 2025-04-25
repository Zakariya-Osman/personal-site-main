import { Image } from "@nextui-org/image";
import { title, subtitle } from "@/components/primitives";
export default function HeroSection({ id }: { id: string }) {
  return (
    <section className="w-full md justify-center" id={id}>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="md:w-1/2">
          <span className={title()}>
            Gotham’s Most Reluctant <br />
            CTO & Nighttime Nuisance
          </span>

          <div className={subtitle({ class: "mt-4" })}>
            Hi, I'm Batman — billionaire by day, brooding vigilante by night. I
            run Wayne Enterprises and fight crime in a bat-themed suit because
            therapy is expensive and I process grief through gadgetry.
            <br />
            <br />
            For the past 15 years, I’ve been perfecting the art of silent
            rooftop lurking, dramatic cape flaring, and emotionally distant
            crime-solving. I built the Batmobile in a cave. With a box of
            scraps. (Okay, maybe not *literally* — that’s Tony’s thing).
            <br />
            <br />
            Before I became the Caped Crusader, I studied the blade… and
            criminology, escape artistry, theatricality, and ninja stuff in the
            mountains. Also went to Princeton. Dropped out. You know how it is.
            <br />
            <br />
            I don't really "do" internships, unless you count dragging
            traumatized orphans into my war on crime and calling it mentorship.
            (They get cool code names though — Nightwing, Red Hood, etc.)
            <br />
            <br />I occasionally write brooding monologues in my Bat-Journal and
            whisper "I'm vengeance" at my own reflection. Outside of work, I
            enjoy CrossFit, silent staring contests with the Joker, and
            emotionally repressing my feelings.
          </div>
        </div>

        <div className="md:w-1/2 flex items-start justify-center mt-[-40px] md:mt-[-60px]">
          <Image
            width={300}
            alt="Batman Picture"
            src="batman.jpg"
            className="w-full h-auto rounded-lg max-w-sm md:max-w-md z-[0]"
            removeWrapper
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
