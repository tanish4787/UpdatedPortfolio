import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-32">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-muted/30 to-transparent"
      />

      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Let’s build something solid
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground/80">
            Whether it’s a product idea, freelance work, or a full-time role —
            I’m open to meaningful conversations.
          </p>
        </div>

        <div
          className="
            mx-auto max-w-2xl
            rounded-2xl
            border border-border/60
            bg-card/60 backdrop-blur
            p-6 shadow-lg
            sm:p-8
          "
        >
          <form className="space-y-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <Input placeholder="Your name" />
              <Input type="email" placeholder="Email address" />
            </div>

            <Input placeholder="Subject" />

            <Textarea
              placeholder="Tell me about your project or opportunity..."
              rows={5}
            />

            <Button size="lg" className="w-full rounded-xl">
              Send message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
