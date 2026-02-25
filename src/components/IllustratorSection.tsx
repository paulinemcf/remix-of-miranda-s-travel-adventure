import { motion } from "framer-motion";
import { Palette, MapPin, Dog, Sparkles } from "lucide-react";
import illustratorImage from "@/assets/illustrator-olivia.jpg";

const IllustratorSection = () => {
  return (
    <section id="illustrator" className="py-20 md:py-32 bg-gradient-adventure">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content first on desktop (reversed from About) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>

            <span className="inline-block bg-secondary text-secondary-foreground px-4 py-2 rounded-full font-display font-semibold text-sm mb-6">🎨 Meet the Chapter Illustrator

            </span>

            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
              Hi! I'm{" "}
              <span className="text-gradient-sunset">Olivia Wynter</span>
            </h2>

            <p className="font-body text-lg text-muted-foreground mb-4 leading-relaxed">
              A lifelong artist, Olivia brings each chapter to life through thoughtfully crafted 
              illustrations that preview key moments and cultural details of Miranda's journeys.
            </p>

            <p className="font-body text-muted-foreground mb-4 leading-relaxed">
              Her artwork blends storytelling and imagination, offering readers a visual window 
              into the countries explored in the series. Each illustration captures the spirit of 
              the culture, the warmth of the characters, and the excitement of discovery.
            </p>

            <p className="font-body text-lg text-muted-foreground mb-6 leading-relaxed font-medium">
              Olivia is a passionate believer that creativity lives in every child. ✨
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              <div className="flex items-start gap-3 p-4 bg-muted rounded-xl">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground">Ontario, Canada</h4>
                  <p className="text-sm text-muted-foreground">Based in Ontario</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-muted rounded-xl">
                <div className="w-10 h-10 rounded-full bg-accent/30 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground">Multicultural Roots</h4>
                  <p className="text-sm text-muted-foreground">Canadian, Portuguese & Guyanese</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-muted rounded-xl">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                  <Palette className="w-5 h-5 text-secondary-foreground" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground">Lifelong Artist</h4>
                  <p className="text-sm text-muted-foreground">Storytelling through art</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-muted rounded-xl">
                <div className="w-10 h-10 rounded-full bg-volcano/10 flex items-center justify-center flex-shrink-0">
                  <Dog className="w-5 h-5 text-volcano" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground">Dog Lover & Soccer Fan</h4>
                  <p className="text-sm text-muted-foreground">Creative spirit on & off the field</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative">

            <div className="relative z-10">
              <img
                src={illustratorImage}
                alt="Olivia Wynter - Illustrator of Miranda's Travel Adventures"
                className="w-full max-w-xs mx-auto rounded-2xl shadow-2xl" />

            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/30 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />

          </motion.div>
        </div>
      </div>
    </section>);

};

export default IllustratorSection;