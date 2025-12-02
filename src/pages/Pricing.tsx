import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Youtube, Instagram } from "lucide-react";
import Header from "@/components/Header";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              In my best year I made over $500k in AD revenue alone
            </h1>
            <p className="text-2xl text-muted-foreground">
              And I'll show you exactly how to do it
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Basic Plan */}
            <Card className="border-2 border-border shadow-lg bg-card-elevated">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">Course Access</CardTitle>
                <CardDescription>Perfect for getting started</CardDescription>
                <div className="mt-6">
                  <span className="text-5xl font-bold">$197</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {[
                    "Full course curriculum",
                    "Lifetime access to materials",
                    "Community forum access",
                    "Monthly Q&A sessions",
                    "Email support"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-6" size="lg">Choose Plan</Button>
              </CardContent>
            </Card>

            {/* Premium Plan */}
            <Card className="border-2 border-primary shadow-xl relative bg-card-elevated">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-accent text-accent-foreground px-6 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">Course + Mentorship</CardTitle>
                <CardDescription>For serious creators</CardDescription>
                <div className="mt-6">
                  <span className="text-5xl font-bold">$497</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {[
                    "Everything in Course Access",
                    "1-on-1 mentorship calls",
                    "Personalized channel audit",
                    "Private community access",
                    "Priority support",
                    "Bonus resources & templates"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-6" size="lg">Choose Plan</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Stevie Emerson</h3>
              <p className="text-muted-foreground text-sm mb-4">
                YouTube creator with 1.74M+ subscribers specializing in comedy, relationships, and storytelling
              </p>
              <div className="flex gap-3">
                <a href="https://www.youtube.com/@stevie_emerson" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/stevie_emerson/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Course</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/#course" className="hover:text-foreground transition-colors">Curriculum</a></li>
                <li><a href="/pricing" className="hover:text-foreground transition-colors">Pricing</a></li>
                <li><a href="/#reviews" className="hover:text-foreground transition-colors">Reviews</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/#about" className="hover:text-foreground transition-colors">About</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="max-w-7xl mx-auto mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
            © 2024 Stevie Emerson. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Pricing;
