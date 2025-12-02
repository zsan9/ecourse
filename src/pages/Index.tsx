import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Star, Play, Users, Youtube, Instagram, Lightbulb, Megaphone, DollarSign, Calendar, Settings, Upload, Video, FileText, Camera, Sparkles, BookOpen, Zap, Compass, TrendingUp } from "lucide-react";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import stevieProfile from "@/assets/stevie-profile.jpg";
import stevieAvatar from "@/assets/stevie-avatar.jpg";
import videoThumb1 from "@/assets/video-thumb-1.jpg";
import videoThumb2 from "@/assets/video-thumb-2.jpg";
import Header from "@/components/Header";

const ScrollingReviews = () => {
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const row1 = row1Ref.current;
    const row2 = row2Ref.current;
    
    if (!row1 || !row2) return;

    let row1Pos = 0;
    let row2Pos = 0;
    const speed = 0.5;

    const animate = () => {
      row1Pos -= speed;
      row2Pos += speed;

      if (Math.abs(row1Pos) >= row1.scrollWidth / 2) {
        row1Pos = 0;
      }
      if (Math.abs(row2Pos) >= row2.scrollWidth / 2) {
        row2Pos = 0;
      }

      row1.style.transform = `translateX(${row1Pos}px)`;
      row2.style.transform = `translateX(${row2Pos}px)`;

      requestAnimationFrame(animate);
    };

    const animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const reviews1 = [
    {
      name: "Alex Martinez",
      role: "Comedy Creator • 85K Subscribers",
      content: "Stevie's approach to storytelling and comedy timing completely transformed my content. I was stuck at 2K subscribers for over a year, posting consistently but getting nowhere. After taking this course, I learned how to craft hooks that actually grab attention and keep people watching. Within 8 months I hit 85K subscribers. The algorithm optimization techniques alone were worth 10x the price. Now my videos regularly hit 100K+ views and I'm finally making real money from YouTube. Best decision I ever made for my channel."
    },
    {
      name: "Jordan Kim",
      role: "Relationship Content • 120K Subscribers",
      content: "Learning Stevie's techniques for creating relatable relationship content was absolutely game-changing for my channel. Before this course, I struggled to connect with my audience and my engagement was terrible. Stevie showed me exactly how to structure my stories to keep people hooked from start to finish. My average view duration went from 2 minutes to over 6 minutes. My views tripled overnight and my comment section exploded. I went from barely monetized to making a full-time income in less than a year."
    },
    {
      name: "Taylor Brooks",
      role: "Lifestyle Vlogger • 65K Subscribers",
      content: "The strategies for viral content and audience building in this course are pure gold. I had been creating content for 3 years with minimal growth, maybe gaining 50-100 subscribers per month. Stevie's framework for identifying trending topics and putting your own spin on them changed everything. I created my first viral video using his exact template and it got 1.2M views. That single video brought me 15K new subscribers and now I'm growing faster than ever. This is hands down the best investment I've made for my YouTube career."
    },
    {
      name: "Sam Rivera",
      role: "Dating Advice • 42K Subscribers",
      content: "Stevie breaks down exactly what works and what doesn't in dating and relationship content. No fluff, no BS, just actionable strategies that actually work. I used to waste hours filming content that would barely get 1K views. Now I know exactly what topics will perform before I even hit record. His monetization strategies got me to YouTube Partner Program in just 3 months when I thought it would take years. The community alone is worth the price - being able to ask questions and get feedback from other successful creators has been incredible."
    }
  ];

  const reviews2 = [
    {
      name: "Casey Morgan",
      role: "Comedy Sketches • 95K Subscribers",
      content: "The production quality and editing lessons alone were worth 10x the price of this course. I thought my content was good but Stevie showed me I was making critical mistakes in the first 3 seconds that were killing my retention. After implementing his hook strategies and pacing techniques, my average retention rate went from 30% to 65%. That's insane! My videos started getting pushed by the algorithm like crazy. I gained 60K subscribers in 4 months. The course also taught me how to batch content efficiently so I'm working less but getting better results."
    },
    {
      name: "Riley Chen",
      role: "Story Time Creator • 58K Subscribers",
      content: "Finally, a course that actually delivers real results instead of generic advice! Stevie's storytelling frameworks are unlike anything I've seen before. I used to ramble and lose my audience halfway through my stories. Now I have a proven structure that builds tension and keeps people glued to the screen. I created my first viral video using his exact method and it got 2M views and 30K subscribers in one week. My most popular video before that had 15K views. The difference is night and day. I'm now making more from YouTube than my day job."
    },
    {
      name: "Morgan Foster",
      role: "Self-Improvement • 71K Subscribers",
      content: "This course completely changed how I approach content creation. Stevie's insights on thumbnail psychology and title formulas are mind-blowing. I used to spend hours on thumbnails that would get 2-3% click-through rates. Now I consistently hit 10-12% CTR using his proven templates. Combined with his content structure strategies, my channel exploded. I went from 8K to 71K subscribers in 6 months. The bonus material on brand deals and sponsorships has already paid for the course 5x over. If you're serious about YouTube, this is mandatory."
    },
    {
      name: "Jamie Parker",
      role: "Couples Content • 89K Subscribers",
      content: "My partner and I were about to give up on YouTube after two years of slow growth. We found Stevie's course and decided to give it one last shot. Everything changed. We learned how to position our couple content to stand out in a saturated market. Stevie taught us the exact formula for creating shareable relationship content that resonates with both men and women. Our engagement went through the roof and we started getting comments from people saying our videos saved their relationships. We hit monetization in 2 months and now we're at 89K subscribers and growing every day. This course literally saved our YouTube dreams."
    }
  ];

  return (
    <div className="space-y-6 overflow-hidden">
      {/* Row 1 - Scrolling Left */}
      <div className="relative">
        <div className="flex gap-6" ref={row1Ref}>
          {[...reviews1, ...reviews1].map((review, index) => (
            <Card key={index} className="flex-shrink-0 w-[500px] bg-card-elevated shadow-lg border-border/50">
              <CardContent className="p-6">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">{review.content}</p>
                <div>
                  <div className="font-semibold text-foreground">{review.name}</div>
                  <div className="text-sm text-muted-foreground">{review.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Row 2 - Scrolling Right */}
      <div className="relative">
        <div className="flex gap-6" ref={row2Ref}>
          {[...reviews2, ...reviews2].map((review, index) => (
            <Card key={index} className="flex-shrink-0 w-[500px] bg-card-elevated shadow-lg border-border/50">
              <CardContent className="p-6">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">{review.content}</p>
                <div>
                  <div className="font-semibold text-foreground">{review.name}</div>
                  <div className="text-sm text-muted-foreground">{review.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900/5 to-gray-800/10 rounded-2xl mx-4 mb-8">
        <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Youtube className="w-4 h-4" />
            <span>From the creator with 1.74M+ YouTube subscribers</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-tight">
            Master YouTube Content Creation -- Make Passive Income Doing What You Love
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Join Stevie's no bullsh*t course to save yourself YEARS of failure
          </p>
          
          {/* Video Placeholder */}
          <div className="relative aspect-video bg-muted rounded-2xl overflow-hidden shadow-2xl border border-border group cursor-pointer">
            <img 
              src={videoThumb1} 
              alt="YouTube Course Preview" 
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 mx-auto bg-primary rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                </div>
                <p className="text-white font-semibold">Watch Course Preview</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6 rounded-full" asChild>
              <Link to="/pricing">Get Started Today</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-full">
              View Curriculum
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-muted-foreground">Rated 4.9/5 by students</span>
            </div>
            <div className="flex items-center gap-4 text-muted-foreground">
              <span className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                1.74M Subscribers
              </span>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Student Reviews - Scrolling */}
      <section id="course" className="py-20 bg-gradient-to-b from-gray-800/10 to-gray-900/15 rounded-2xl mx-4 mb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">What Students Are Saying</h2>
            <p className="text-xl text-muted-foreground">
              Real results from creators who transformed their channels
            </p>
          </div>

          <ScrollingReviews />
        </div>
      </section>

      {/* About Stevie Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-gray-900/5 to-gray-800/10 rounded-2xl mx-4 mb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">YouTube completely changed my life.</h2>
            <p className="text-xl md:text-2xl text-muted-foreground">And I promise it can change yours too</p>
          </div>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="aspect-square bg-muted rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={stevieProfile} 
                alt="Stevie Emerson - YouTube Creator" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">Meet Stevie Emerson</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Stevie Emerson is a proven YouTube creator with 1.74M subscribers focused on comedy, dating, relationships, and lifestyle content. Known for engaging storytelling and viral content, Stevie has mastered the art of creating videos that connect with millions of viewers.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Starting from scratch and building a channel that averages hundreds of thousands of views per video, Stevie understands the journey from beginner to successful creator. Now, Stevie shares the exact strategies, techniques, and insights that turned a passion for content creation into a thriving career.
              </p>
              <div className="flex gap-6 pt-4">
                <div>
                  <div className="text-3xl font-bold text-foreground">1.74M+</div>
                  <div className="text-muted-foreground">YouTube Subscribers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-foreground">Weekly</div>
                  <div className="text-muted-foreground">New Content</div>
                </div>
              </div>
              <div className="flex gap-4 pt-6">
                <Button variant="outline" size="lg" asChild className="rounded-full">
                  <a href="https://www.youtube.com/@stevie_emerson" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Youtube className="w-5 h-5" />
                    <span>Watch on YouTube</span>
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild className="rounded-full">
                  <a href="https://www.instagram.com/stevie_emerson/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Instagram className="w-5 h-5" />
                    <span>Follow on Instagram</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Infographic Section */}
      <section className="py-20 bg-gradient-to-b from-gray-800/10 to-gray-900/15 rounded-2xl mx-4 mb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
              5 years later I was finally able to go full time and make real money
            </h2>
            
            <div className="relative bg-[#f5f1e8] rounded-2xl p-8 md:p-12 shadow-xl min-h-[500px]">
              {/* SVG Infographic */}
              <svg viewBox="0 0 800 500" className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
                <defs>
                  <linearGradient id="growthGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#22c55e" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
                  </linearGradient>
                </defs>
                
                {/* X-axis timeline */}
                <line x1="80" y1="400" x2="720" y2="400" stroke="#1f2937" strokeWidth="3" />
                <text x="80" y="420" fontSize="14" fill="#1f2937" fontWeight="600">0</text>
                <text x="208" y="420" fontSize="14" fill="#1f2937" fontWeight="600">1</text>
                <text x="336" y="420" fontSize="14" fill="#1f2937" fontWeight="600">2</text>
                <text x="464" y="420" fontSize="14" fill="#1f2937" fontWeight="600">3</text>
                <text x="592" y="420" fontSize="14" fill="#1f2937" fontWeight="600">4</text>
                <text x="720" y="420" fontSize="14" fill="#1f2937" fontWeight="600">5</text>
                <text x="720" y="440" fontSize="12" fill="#6b7280">years</text>
                
                {/* Tick marks */}
                <line x1="80" y1="395" x2="80" y2="405" stroke="#1f2937" strokeWidth="2" />
                <line x1="208" y1="395" x2="208" y2="405" stroke="#1f2937" strokeWidth="2" />
                <line x1="336" y1="395" x2="336" y2="405" stroke="#1f2937" strokeWidth="2" />
                <line x1="464" y1="395" x2="464" y2="405" stroke="#1f2937" strokeWidth="2" />
                <line x1="592" y1="395" x2="592" y2="405" stroke="#1f2937" strokeWidth="2" />
                <line x1="720" y1="395" x2="720" y2="405" stroke="#1f2937" strokeWidth="2" />
                
                {/* Growth curve path - adjusted for 5 years */}
                <path
                  d="M 80 400 Q 180 380 280 360 Q 380 320 480 250 Q 580 150 680 80 Q 700 60 720 50"
                  fill="none"
                  stroke="#22c55e"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                
                {/* Gradient fill under curve */}
                <path
                  d="M 80 400 Q 180 380 280 360 Q 380 320 480 250 Q 580 150 680 80 Q 700 60 720 50 L 720 400 L 80 400 Z"
                  fill="url(#growthGradient)"
                />
                
                {/* Milestone 1: Start (Year 0) */}
                <circle cx="80" cy="400" r="6" fill="#22c55e" />
                <rect x="20" y="300" width="120" height="60" rx="8" fill="white" stroke="#e5e7eb" strokeWidth="2" />
                <polygon points="80,360 60,380 100,380" fill="white" stroke="#e5e7eb" strokeWidth="2" />
                <text x="80" y="325" fontSize="12" fill="#1f2937" fontWeight="600" textAnchor="middle">0 Subscribers</text>
                <text x="80" y="345" fontSize="12" fill="#1f2937" fontWeight="600" textAnchor="middle">$0 Revenue</text>
                
                {/* Milestone 2: Mid-point (around 2.5 years) */}
                <circle cx="400" cy="300" r="6" fill="#22c55e" />
                <rect x="300" y="200" width="140" height="60" rx="8" fill="white" stroke="#e5e7eb" strokeWidth="2" />
                <polygon points="400,260 380,280 420,280" fill="white" stroke="#e5e7eb" strokeWidth="2" />
                <text x="400" y="225" fontSize="12" fill="#1f2937" fontWeight="600" textAnchor="middle">500k Subscribers</text>
                <text x="400" y="245" fontSize="12" fill="#1f2937" fontWeight="600" textAnchor="middle">$500k+ Revenue</text>
                
                {/* Milestone 3: End (Year 5) */}
                <circle cx="720" cy="50" r="6" fill="#22c55e" />
                <rect x="620" y="-50" width="140" height="60" rx="8" fill="white" stroke="#e5e7eb" strokeWidth="2" />
                <polygon points="720,10 700,30 740,30" fill="white" stroke="#e5e7eb" strokeWidth="2" />
                <text x="720" y="-25" fontSize="12" fill="#1f2937" fontWeight="600" textAnchor="middle">1.74M Subscribers</text>
                <text x="720" y="-5" fontSize="12" fill="#1f2937" fontWeight="600" textAnchor="middle">$1M+ Revenue</text>
                
                {/* Upward arrow at end */}
                <path d="M 720 50 L 740 30 L 720 10" fill="#22c55e" stroke="#22c55e" strokeWidth="2" />
                
                {/* Sparkles */}
                <circle cx="750" cy="20" r="3" fill="#fbbf24" opacity="0.8" />
                <circle cx="760" cy="35" r="2" fill="#f59e0b" opacity="0.8" />
                <circle cx="745" cy="45" r="2.5" fill="#fbbf24" opacity="0.8" />
              </svg>
              
              {/* Icons positioned around the graphic using absolute positioning */}
              <div className="absolute top-16 left-20 text-blue-500 opacity-80 hidden md:block">
                <Settings className="w-8 h-8" />
              </div>
              <div className="absolute top-24 left-48 text-yellow-500 opacity-80 hidden md:block">
                <Lightbulb className="w-8 h-8" />
              </div>
              <div className="absolute top-20 left-80 text-red-500 opacity-80 hidden md:block">
                <Play className="w-8 h-8" />
              </div>
              <div className="absolute top-16 left-[40%] text-green-500 opacity-80 hidden md:block">
                <Megaphone className="w-8 h-8" />
              </div>
              <div className="absolute top-12 right-32 text-purple-500 opacity-80 hidden md:block">
                <DollarSign className="w-8 h-8" />
              </div>
              <div className="absolute bottom-24 right-48 text-amber-700 opacity-80 hidden md:block">
                <Calendar className="w-8 h-8" />
              </div>
            </div>
            
            {/* Text below graphic */}
            <p className="text-lg md:text-xl text-muted-foreground text-center mt-8 max-w-3xl mx-auto leading-relaxed">
              Now my youtube channel has 1.7m subscribers and I have a team of incredible creatives who I work with every week to bring joy to peoples lives through comedy
            </p>
            
            {/* Call to action */}
            <div className="text-center mt-8">
              <Button size="lg" className="text-lg px-8 py-6 rounded-full" asChild>
                <Link to="/pricing">Change your life today and join the course for $495</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-gradient-to-b from-gray-900/5 to-gray-800/10 rounded-2xl mx-4 mb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">What Creators Who Took the Course Have to Say</h2>
          </div>

          {/* Creators Panel */}
          <div className="max-w-7xl mx-auto mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: "@SarahCreates", subs: "250K", tag: "Lifestyle", video: videoThumb1 },
                { name: "@MikeVlogs", subs: "180K", tag: "Vlogs", video: videoThumb2 },
                { name: "@EmmaComedy", subs: "420K", tag: "Comedy", video: videoThumb1 },
                { name: "@TechTom", subs: "95K", tag: "Tech", video: videoThumb2 },
              ].map((creator, index) => (
                <Card key={index} className="bg-card-elevated border-border/50 hover:shadow-lg transition-shadow overflow-hidden">
                  <CardContent className="p-0">
                    <div className="aspect-square w-full mb-4 bg-muted overflow-hidden">
                      <video
                        className="w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                      >
                        <source src={creator.video} type="video/mp4" />
                        <img src={creator.video} alt={`${creator.name} testimonial`} className="w-full h-full object-cover" />
                      </video>
                    </div>
                    <div className="px-6 pb-6 text-center space-y-3">
                      <div className="font-semibold text-2xl">{creator.name}</div>
                      <div className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full inline-block">
                        {creator.tag}
                      </div>
                      <div className="text-lg text-muted-foreground flex items-center justify-center gap-2">
                        <Users className="w-5 h-5" />
                        {creator.subs} subscribers
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Text below creator cards */}
            <div className="text-center mt-12 space-y-6">
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                They all took Stevies course and since then their success has been unstoppable
              </p>
              <Button size="lg" className="text-base px-6 py-4 rounded-full flex flex-col items-center gap-1 inline-flex" asChild>
                <Link to="/pricing">
                  <span>They Did it - And You Can Do It Too</span>
                  <span className="text-sm opacity-90">Join now for $495</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Secret Formula Section */}
      <section className="py-20 bg-gradient-to-b from-gray-800/10 to-gray-900/15 rounded-2xl mx-4 mb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto mb-16">
            <div className="text-center mb-12 space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">
                The "secret" formula isn't secret at all...it's about excecution
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Over the last 12 years I've learned that your content means nothing if you don't have the correct excecution strategy underneath it
              </p>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                In this course not only will you learn how to make banger content, you will learn the proper excecution strategy to blow your channel up
              </p>
            </div>
            
            <h3 className="text-2xl font-bold text-center mb-8">See What You'll Learn</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl group cursor-pointer">
                <img 
                  src={videoThumb1} 
                  alt="Creating Engaging Content" 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <p className="font-semibold text-lg">Creating Engaging Relationship Content</p>
                    <p className="text-sm text-white/80">Learn viral storytelling techniques</p>
                  </div>
                </div>
              </div>
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl group cursor-pointer">
                <img
                  src={videoThumb2} 
                  alt="Professional Production" 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <p className="font-semibold text-lg">Behind the Scenes: Studio Setup</p>
                    <p className="text-sm text-white/80">Master professional production</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto">
            <p className="text-center text-muted-foreground mb-8">Join hundreds of creators who've launched successful channels</p>
          </div>

          {/* The #1 Way Section */}
          <div className="max-w-6xl mx-auto text-center space-y-8 mt-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              The #1 way to explode your channel is quite simple...
            </h2>
            
            {/* Infographic */}
            <div className="max-w-6xl mx-auto mt-12">
              <div className="relative flex flex-col md:flex-row items-center justify-center gap-8 md:gap-48 min-h-[400px]">
                {/* Creating Block */}
                <div className="flex flex-col items-center space-y-4 bg-white rounded-2xl p-8 shadow-lg border border-gray-200 z-10">
                  <div className="relative">
                    <div className="w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center">
                      <Play className="w-12 h-12 text-white ml-1" fill="currentColor" />
                    </div>
                    <svg className="absolute -bottom-2 left-1/2 -translate-x-1/2" width="60" height="20" viewBox="0 0 60 20">
                      <path d="M 10 10 Q 30 5 50 10" stroke="#f97316" strokeWidth="2" fill="none" strokeDasharray="5,5" />
                    </svg>
                  </div>
                  <div className="text-center space-y-1">
                    <div className="text-2xl font-bold">Creating</div>
                    <div className="text-base text-gray-700">Find a formula</div>
                    <div className="text-base text-gray-700">that works</div>
                  </div>
                </div>
                
                {/* Center Text */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                  <div className="text-center bg-white/95 rounded-lg px-6 py-4 shadow-lg border border-gray-200">
                    <div className="text-base text-gray-700">Repeat this for</div>
                    <div className="text-xl font-bold text-gray-900"><span className="text-2xl">18 months</span></div>
                  </div>
                </div>
                
                {/* Posting Block */}
                <div className="flex flex-col items-center space-y-4 bg-white rounded-2xl p-8 shadow-lg border border-gray-200 z-10">
                  <div className="relative">
                    <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center">
                      <Upload className="w-12 h-12 text-white" />
                    </div>
                    <svg className="absolute -bottom-2 left-1/2 -translate-x-1/2" width="60" height="20" viewBox="0 0 60 20">
                      <path d="M 10 10 Q 30 5 50 10" stroke="#22c55e" strokeWidth="2" fill="none" strokeDasharray="5,5" />
                    </svg>
                  </div>
                  <div className="text-center space-y-1">
                    <div className="text-2xl font-bold">Posting</div>
                    <div className="text-base text-gray-700">them on YouTube</div>
                    <div className="text-base text-gray-700">1-3x a week</div>
                  </div>
                </div>
                
                {/* Curved Arrows */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ overflow: 'visible' }}>
                  <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                      <polygon points="0 0, 10 3, 0 6" fill="#9ca3af" />
                    </marker>
                  </defs>
                  {/* Arrow from Creating to Posting (bottom curve) */}
                  <path 
                    d="M 120 280 Q 400 380, 680 280" 
                    stroke="#9ca3af" 
                    strokeWidth="2" 
                    fill="none" 
                    strokeDasharray="5,5"
                    markerEnd="url(#arrowhead)"
                  />
                  {/* Arrow from Posting to Creating (top curve) */}
                  <path 
                    d="M 680 280 Q 400 180, 120 280" 
                    stroke="#9ca3af" 
                    strokeWidth="2" 
                    fill="none" 
                    strokeDasharray="5,5"
                    markerEnd="url(#arrowhead)"
                  />
                </svg>
              </div>
            </div>
            
            {/* Text below graphic */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mt-8">
              I personally guarantee if you commit to this workflow your channel will grow and you will begin creating passive income
            </p>
            
            {/* Button */}
            <div className="mt-8">
              <Button size="lg" className="text-lg px-8 py-6 rounded-full flex flex-col items-center gap-1" asChild>
                <Link to="/pricing">
                  <span>Master The Excecution</span>
                  <span className="text-sm opacity-90">Join today for $495</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Systems Block */}
      <section className="py-20 bg-gradient-to-b from-gray-800/10 to-gray-900/15 rounded-2xl mx-4 mb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              🚀 YouTube Content Creation System
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
              Checklists, frameworks and templates to turn you into a content-creation beast
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 p-6 bg-card-elevated rounded-xl border border-border/50">
                <div className="text-3xl">🚂</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Infinite Content Engine</h3>
                  <p className="text-muted-foreground">Create videos consistently and effortlessly through our proven content creation system</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 bg-card-elevated rounded-xl border border-border/50">
                <div className="text-3xl">🐝</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">H.I.V.E.S Framework</h3>
                  <p className="text-muted-foreground">Write captivating scripts using our framework and video format templates</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 bg-card-elevated rounded-xl border border-border/50">
                <div className="text-3xl">📸</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Ultimate Gear Guide</h3>
                  <p className="text-muted-foreground">Find the perfect camera, audio, lighting for your budget with our comprehensive guide</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 bg-card-elevated rounded-xl border border-border/50">
                <div className="text-3xl">💡</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Idea Generation Machine</h3>
                  <p className="text-muted-foreground">Never run out of video ideas again using our 7-part Framework for generating endless content ideas</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 bg-card-elevated rounded-xl border border-border/50">
                <div className="text-3xl">📗</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Outsourcing Almanack</h3>
                  <p className="text-muted-foreground">Find the perfect editor or writer using our detailed guide with checklists for outsourcing, including sample job descriptions</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 bg-card-elevated rounded-xl border border-border/50">
                <div className="text-3xl">🔥</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">3 Best Systems</h3>
                  <p className="text-muted-foreground">Help yourself stand out with 3 of the best systems we've used to help identify and leverage your edge as a creator, even in a crowded niche</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 bg-card-elevated rounded-xl border border-border/50">
                <div className="text-3xl">🧭</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Creator's Compass</h3>
                  <p className="text-muted-foreground">Ensure your videos connect with the audience you want using our strategic framework</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 bg-card-elevated rounded-xl border border-border/50">
                <div className="text-3xl">☄️</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Identity Analyst Template</h3>
                  <p className="text-muted-foreground">Find the intersection between the videos you want to make and the ones which will grow your channel</p>
                </div>
              </div>
            </div>
            
            {/* Button */}
            <div className="text-center mt-12">
              <Button size="lg" className="text-lg px-8 py-6 rounded-full" asChild>
                <Link to="/pricing">Join now for $495 and start building your systems</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Course Academy Block */}
      <section className="py-20 bg-gradient-to-b from-gray-900/5 to-gray-800/10 rounded-2xl mx-4 mb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Join Stevie's YouTube Content Creation Academy
            </h2>
            
            <div className="mb-12">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-3xl line-through text-muted-foreground">$995</span>
                <span className="text-5xl md:text-6xl font-bold text-foreground">$495</span>
              </div>
              <p className="text-lg text-muted-foreground mb-6">Our best price ever</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="text-lg px-8 py-6 rounded-full" asChild>
                  <Link to="/pricing">Join Today For $495</Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-full" asChild>
                  <Link to="/pricing">Or Spread The Cost Over 2 Months</Link>
                </Button>
              </div>
              <div className="max-w-2xl mx-auto mt-8">
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Stevie Emerson started from scratch with zero subscribers and built a YouTube channel to 1.74M subscribers over 5 years. Starting with no experience in content creation, Stevie learned through trial and error, posting consistently and refining the formula that works. Now, Stevie shares the exact strategies, systems, and execution frameworks that transformed a passion for comedy and storytelling into a thriving career, generating over $1M in revenue and building a team of incredible creatives.
                </p>
              </div>
            </div>

            <div className="border-t border-b py-12 my-12">
              <div className="space-y-6 text-left max-w-3xl mx-auto">
                <div className="flex items-start gap-4">
                  <span className="text-2xl">🧠</span>
                  <div>
                    <h3 className="font-bold text-lg mb-2">The Core Course Curriculum</h3>
                    <p className="text-muted-foreground">20+ hours of material teaching you everything about YouTube from getting started all the way through to monetising, building a team and turning your channel from a hobby into a thriving business.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <span className="text-2xl">📚</span>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Bonus Modules</h3>
                    <p className="text-muted-foreground">More than 16 hours of extra video training on camera gear, studio setups, monetisation, repurposing, community building, and more.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <span className="text-2xl">🔑</span>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Lifetime Access</h3>
                    <p className="text-muted-foreground">Access to all the course material so that as your channel grows, there'll always be useful information and insights you can benefit from every step of the way.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <span className="text-2xl">🚀</span>
                  <div>
                    <h3 className="font-bold text-lg mb-2">YouTube Content Creation System</h3>
                    <p className="text-muted-foreground">Checklists, frameworks and templates to turn you into a content-creation beast, including the Infinite Content Engine, H.I.V.E.S Framework, Ultimate Gear Guide, Idea Generation Machine, and more.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <span className="text-2xl">🎬</span>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Exclusive Creator Interviews</h3>
                    <p className="text-muted-foreground">Learn from successful creators who share their content creation processes, unique strengths, and how they think about content creation on YouTube.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <span className="text-2xl">🎁</span>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Exclusive Bonuses</h3>
                    <p className="text-muted-foreground">Extra perks bundled in for added value, including community access, editing courses, and template packs.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-3xl line-through text-muted-foreground">$995</span>
                <span className="text-5xl md:text-6xl font-bold text-foreground">$495</span>
              </div>
              <p className="text-lg text-muted-foreground mb-6">Or Spread The Cost Over 2 Months</p>
              <Button size="lg" className="text-lg px-8 py-6 rounded-full" asChild>
                <Link to="/pricing">Join Today And Save Over 50%</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section Header */}
      <section className="py-12 bg-gradient-to-b from-gray-900/5 to-gray-800/10 rounded-2xl mx-4 mb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              We've helped creators shortcut their YouTube learning curve...
            </h2>
          </div>
        </div>
      </section>

      {/* Beginner Case Study */}
      <section className="py-20 bg-gradient-to-b from-gray-800/10 to-gray-900/15 rounded-2xl mx-4 mb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block bg-primary/10 text-primary px-6 py-2 rounded-full text-base font-semibold mb-6">
                Beginner
              </div>
              <h3 className="text-4xl md:text-5xl font-bold mb-4">From Zero to First 1,000 Subscribers</h3>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Learn how creators with zero experience used Stevie's frameworks to launch their channels and hit their first major milestone
              </p>
            </div>
            
            <Card className="bg-card-elevated border-border/50 shadow-xl">
              <CardContent className="p-12">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <Avatar className="w-20 h-20">
                        <AvatarImage src={stevieAvatar} alt="Sarah Martinez" />
                        <AvatarFallback className="text-2xl">SM</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="text-2xl font-bold">Sarah Martinez</h4>
                        <p className="text-muted-foreground">Lifestyle Creator</p>
                        <div className="flex items-center gap-2 mt-2">
                          <Users className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">Started with 0 subscribers</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <p className="text-lg font-semibold mb-2">The Challenge</p>
                        <p className="text-muted-foreground leading-relaxed">
                          Sarah had no idea where to start with YouTube. She was creating content randomly, posting inconsistently, and after 6 months had only gained 47 subscribers. She was about to give up.
                        </p>
                      </div>
                      <div>
                        <p className="text-lg font-semibold mb-2">The Solution</p>
                        <p className="text-muted-foreground leading-relaxed">
                          After joining Stevie's course, Sarah learned the H.I.V.E.S framework and the exact execution strategy. She implemented the Infinite Content Engine to create videos consistently, and used the Creator's Compass to find her unique angle.
                        </p>
                      </div>
                      <div>
                        <p className="text-lg font-semibold mb-2">The Results</p>
                        <p className="text-muted-foreground leading-relaxed">
                          "I went from 0 to 1,200 subscribers in just 3 months by following Stevie's execution strategy. My first video using the H.I.V.E.S framework got 50K views and brought me 800 subscribers in one week. The course gave me the exact formula I needed - no more guessing."
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4 pt-4">
                      <div className="bg-primary/10 rounded-lg p-4">
                        <div className="text-3xl font-bold text-primary">1,200+</div>
                        <div className="text-sm text-muted-foreground">Subscribers</div>
                      </div>
                      <div className="bg-primary/10 rounded-lg p-4">
                        <div className="text-3xl font-bold text-primary">50K+</div>
                        <div className="text-sm text-muted-foreground">Views on First Viral</div>
                      </div>
                      <div className="bg-primary/10 rounded-lg p-4">
                        <div className="text-3xl font-bold text-primary">3</div>
                        <div className="text-sm text-muted-foreground">Months</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-muted rounded-2xl p-8 text-center">
                    <div className="text-6xl font-bold text-primary mb-2">0 → 1,200</div>
                    <div className="text-xl text-muted-foreground mb-6">Subscribers</div>
                    <div className="space-y-3 text-left">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm">H.I.V.E.S Framework</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm">Infinite Content Engine</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm">Creator's Compass</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm">Execution Strategy</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Intermediate Case Study */}
      <section className="py-20 bg-gradient-to-b from-gray-900/5 to-gray-800/10 rounded-2xl mx-4 mb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block bg-primary/10 text-primary px-6 py-2 rounded-full text-base font-semibold mb-6">
                Intermediate
              </div>
              <h3 className="text-4xl md:text-5xl font-bold mb-4">From 10K to 100K Subscribers</h3>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Discover how creators broke through plateaus and scaled their channels using Stevie's advanced systems and strategies
              </p>
            </div>
            
            <Card className="bg-card-elevated border-border/50 shadow-xl">
              <CardContent className="p-12">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <Avatar className="w-20 h-20">
                        <AvatarImage src={stevieAvatar} alt="Emma Lawson" />
                        <AvatarFallback className="text-2xl">EL</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="text-2xl font-bold">Emma Lawson</h4>
                        <p className="text-muted-foreground">Comedy Creator</p>
                        <div className="flex items-center gap-2 mt-2">
                          <Users className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">Started with 12K subscribers</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <p className="text-lg font-semibold mb-2">The Challenge</p>
                        <p className="text-muted-foreground leading-relaxed">
                          Emma was stuck at 12K subscribers for over a year. She was posting weekly but couldn't break through. Her videos were getting 2-5K views consistently, but nothing was going viral or growing her channel significantly.
                        </p>
                      </div>
                      <div>
                        <p className="text-lg font-semibold mb-2">The Solution</p>
                        <p className="text-muted-foreground leading-relaxed">
                          Emma implemented Stevie's execution strategy and the Infinite Content Engine to create a consistent posting schedule. She used the Identity Analyst Template to find the intersection between her passion and what actually grows, and applied the 3 Best Systems to identify her unique edge.
                        </p>
                      </div>
                      <div>
                        <p className="text-lg font-semibold mb-2">The Results</p>
                        <p className="text-muted-foreground leading-relaxed">
                          "I was stuck at 12K for over a year. After implementing Stevie's execution strategy and the Infinite Content Engine, I hit 100K in 8 months. The systems made all the difference. My average views went from 3K to 150K, and I finally understood what makes content grow."
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4 pt-4">
                      <div className="bg-primary/10 rounded-lg p-4">
                        <div className="text-3xl font-bold text-primary">100K+</div>
                        <div className="text-sm text-muted-foreground">Subscribers</div>
                      </div>
                      <div className="bg-primary/10 rounded-lg p-4">
                        <div className="text-3xl font-bold text-primary">150K</div>
                        <div className="text-sm text-muted-foreground">Avg Views</div>
                      </div>
                      <div className="bg-primary/10 rounded-lg p-4">
                        <div className="text-3xl font-bold text-primary">8</div>
                        <div className="text-sm text-muted-foreground">Months</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-muted rounded-2xl p-8 text-center">
                    <div className="text-6xl font-bold text-primary mb-2">12K → 100K</div>
                    <div className="text-xl text-muted-foreground mb-6">Subscribers</div>
                    <div className="space-y-3 text-left">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm">Infinite Content Engine</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm">Identity Analyst Template</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm">3 Best Systems</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm">Execution Strategy</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Advanced Case Study */}
      <section className="py-20 bg-gradient-to-b from-gray-800/10 to-gray-900/15 rounded-2xl mx-4 mb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block bg-primary/10 text-primary px-6 py-2 rounded-full text-base font-semibold mb-6">
                Advanced
              </div>
              <h3 className="text-4xl md:text-5xl font-bold mb-4">From 100K to 500K+ Subscribers</h3>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                See how established creators scaled their channels into thriving businesses using Stevie's team-building and monetization strategies
              </p>
            </div>
            
            <Card className="bg-card-elevated border-border/50 shadow-xl">
              <CardContent className="p-12">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <Avatar className="w-20 h-20">
                        <AvatarImage src={stevieAvatar} alt="Jordan Kim" />
                        <AvatarFallback className="text-2xl">JK</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="text-2xl font-bold">Jordan Kim</h4>
                        <p className="text-muted-foreground">Relationship Content Creator</p>
                        <div className="flex items-center gap-2 mt-2">
                          <Users className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">Started with 120K subscribers</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <p className="text-lg font-semibold mb-2">The Challenge</p>
                        <p className="text-muted-foreground leading-relaxed">
                          Jordan had built a successful channel to 120K subscribers but was burning out. Creating all content alone, managing everything manually, and struggling to scale. Revenue was inconsistent and growth had plateaued.
                        </p>
                      </div>
                      <div>
                        <p className="text-lg font-semibold mb-2">The Solution</p>
                        <p className="text-muted-foreground leading-relaxed">
                          Jordan used Stevie's Outsourcing Almanack to build a team of editors and writers. Implemented the monetization strategies and repurposing frameworks to turn the channel into a real business. Applied the advanced scaling systems to maintain quality while increasing output.
                        </p>
                      </div>
                      <div>
                        <p className="text-lg font-semibold mb-2">The Results</p>
                        <p className="text-muted-foreground leading-relaxed">
                          "I thought I knew everything, but Stevie's team-building and scaling strategies helped me go from 120K to 450K. The Outsourcing Almanack was a game-changer for building my team. I'm now making 6-figures from YouTube and have a sustainable business, not just a channel."
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4 pt-4">
                      <div className="bg-primary/10 rounded-lg p-4">
                        <div className="text-3xl font-bold text-primary">450K+</div>
                        <div className="text-sm text-muted-foreground">Subscribers</div>
                      </div>
                      <div className="bg-primary/10 rounded-lg p-4">
                        <div className="text-3xl font-bold text-primary">6-Figures</div>
                        <div className="text-sm text-muted-foreground">Annual Revenue</div>
                      </div>
                      <div className="bg-primary/10 rounded-lg p-4">
                        <div className="text-3xl font-bold text-primary">10+</div>
                        <div className="text-sm text-muted-foreground">Team Members</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-muted rounded-2xl p-8 text-center">
                    <div className="text-6xl font-bold text-primary mb-2">120K → 450K</div>
                    <div className="text-xl text-muted-foreground mb-6">Subscribers</div>
                    <div className="space-y-3 text-left">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm">Outsourcing Almanack</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm">Monetization Strategies</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm">Repurposing Frameworks</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm">Scaling Systems</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What's Actually In The Course Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900/5 to-gray-800/10 rounded-2xl mx-4 mb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
              Okay, I get it – but what's actually in the course?
            </h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4 p-6 bg-card-elevated rounded-xl border border-border/50">
                <span className="text-3xl">🧠</span>
                <div>
                  <h3 className="text-xl font-bold mb-2">The Core Course Curriculum</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    20+ hours of material teaching you everything we know about YouTube from getting started all the way through to monetising, building a team and turning your channel from a hobby into a thriving business.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 bg-card-elevated rounded-xl border border-border/50">
                <span className="text-3xl">📚</span>
                <div>
                  <h3 className="text-xl font-bold mb-2">Bonus Modules</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    More than 16 hours of extra video training on camera gear, studio setups, monetisation, repurposing, community building, newsletter creation and more.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 bg-card-elevated rounded-xl border border-border/50">
                <span className="text-3xl">🔑</span>
                <div>
                  <h3 className="text-xl font-bold mb-2">Access to all the course material</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    So that as your channel grows, there'll always be useful information and insights you can benefit from every step of the way.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 bg-card-elevated rounded-xl border border-border/50">
                <span className="text-3xl">🚀</span>
                <div>
                  <h3 className="text-xl font-bold mb-2">YouTube Content Creation System</h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Checklists, frameworks and templates to turn you into a content-creation beast:
                  </p>
                  <ul className="space-y-2 text-muted-foreground ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">🚂</span>
                      <span>Create videos consistently and effortlessly through our <strong>Infinite Content Engine</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">🐝</span>
                      <span>Write captivating scripts using our <strong>H.I.V.E.S Framework</strong> and video format templates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">📸</span>
                      <span>Find the perfect camera, audio, lighting for your budget with our <strong>Ultimate Gear Guide</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">💡</span>
                      <span>Never run out of video ideas again using our <strong>Idea Generation Machine</strong> – our 7-part Framework for generating endless content ideas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">📗</span>
                      <span>Find the perfect editor or writer using our <strong>Outsourcing Almanack</strong> – a detailed guide with checklists for outsourcing, including sample job descriptions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">🔥</span>
                      <span>Help yourself stand out with <strong>3 of the best systems we've used</strong> to help identify and leverage your edge as a creator, even in a crowded niche</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">🧭</span>
                      <span>Ensure your videos connect with the audience you want using our <strong>Creator's Compass</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">☄️</span>
                      <span>Find the intersection between the videos you want to make and the ones which will grow your channel with our <strong>Identity Analyst template</strong></span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 bg-card-elevated rounded-xl border border-border/50">
                <span className="text-3xl">🎬</span>
                <div>
                  <h3 className="text-xl font-bold mb-2">Exclusive Creator Interviews</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We've also got exclusive interviews with over 20 creators where they chat to us about different aspects of their content creation processes, their unique strengths as creators and how they think about content creation on YouTube. Our guests have a combined total of over 36 million subscribers, so there's an incredible amount of expertise you can learn from.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 bg-card-elevated rounded-xl border border-border/50">
                <span className="text-3xl">🎁</span>
                <div>
                  <h3 className="text-xl font-bold mb-2">Exclusive Bonuses</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Extra perks bundled in for added value, including community access, editing courses, and template packs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-gray-800/10 to-gray-900/15 rounded-2xl mx-4 mb-8">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Ready to Start Your YouTube Journey?
            </h2>
            <p className="text-xl text-muted-foreground">
              Learn from a creator with 1.74M subscribers and start building your successful channel today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6 rounded-full" asChild>
                <Link to="/pricing">Enroll in the Course Today</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-8 py-6 rounded-full border-primary-foreground/20 hover:bg-primary-foreground/10 text-primary-foreground">
                <a href="https://www.youtube.com/@stevie_emerson" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Youtube className="w-5 h-5" />
                  <span>Watch Stevie's Content</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900/5 to-gray-800/10 rounded-2xl mx-4 mb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>
            
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="bg-card-elevated rounded-lg px-6 border border-border/50">
                <AccordionTrigger className="text-left font-semibold">
                  Is this really the best price?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes! We occasionally run discounts on the course, but $495 is our best price. If you're ready to transform your YouTube channel, now is the time to join.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-card-elevated rounded-lg px-6 border border-border/50">
                <AccordionTrigger className="text-left font-semibold">
                  Do I need to have a YouTube channel before I take the course?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  No, it's not compulsory but we always recommend having a channel set up and being prepared to post videos so that you have the opportunity to implement what you're learning from the course materials as you go.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-card-elevated rounded-lg px-6 border border-border/50">
                <AccordionTrigger className="text-left font-semibold">
                  What experience with YouTube do I need to have?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  No past experience with YouTube is required, you just need the desire to make YouTube part of your future. The course is designed to help everyone move their channels forward regardless of what stage of the journey they're at.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-card-elevated rounded-lg px-6 border border-border/50">
                <AccordionTrigger className="text-left font-semibold">
                  Does this course teach me how to edit?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  The course focuses on content strategy, execution, and growth systems. While we cover production basics, the main focus is on the frameworks and systems that help your channel grow. You'll get access to bonus editing resources as part of the course.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-card-elevated rounded-lg px-6 border border-border/50">
                <AccordionTrigger className="text-left font-semibold">
                  What sort of channel is the course suitable for?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  The course isn't tailored to any specific genre or style of video. The systems and processes can be applied to any genre of video - comedy, lifestyle, education, relationships, or any niche where you're providing value to your audience.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-card-elevated rounded-lg px-6 border border-border/50">
                <AccordionTrigger className="text-left font-semibold">
                  Should I wait until I have a certain number of subscribers?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  No. We've taught creators from zero subscribers to channels with over 500K. This course is designed to help everyone move their channels forward regardless of what stage of the journey they're at.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="bg-card-elevated rounded-lg px-6 border border-border/50">
                <AccordionTrigger className="text-left font-semibold">
                  I've made 100 videos already, is this course for me?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Of course! The course is aimed at creators of all abilities. Having 100 videos provides you with a really solid foundation to grow, monetise and scale your channel and we can help you do that through the lessons on the course.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="bg-card-elevated rounded-lg px-6 border border-border/50">
                <AccordionTrigger className="text-left font-semibold">
                  Will I get access to 1:1 support?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We don't offer 1:1 coaching as part of this course, but you will get access to our community where you can ask any questions you might have as you start your YouTube journey or get feedback from the community on your content.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9" className="bg-card-elevated rounded-lg px-6 border border-border/50">
                <AccordionTrigger className="text-left font-semibold">
                  Is it possible to pay in instalments?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes! You have the option to pay in full or spread the cost equally over two months. However you decide to pay, the price remains the same.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
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
                <li><a href="#course" className="hover:text-foreground transition-colors">Curriculum</a></li>
                <li><Link to="/pricing" className="hover:text-foreground transition-colors">Pricing</Link></li>
                <li><a href="#reviews" className="hover:text-foreground transition-colors">Reviews</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#about" className="hover:text-foreground transition-colors">About</a></li>
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

export default Index;
