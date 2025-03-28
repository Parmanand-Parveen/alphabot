import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTuOHNXWduLt7WbuhKFsIU3pV0vyhEOPodmLnHB_pPNnCWblb3vjRoR7hKTuRE9cZSgy8&usqp=CAU",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTuOHNXWduLt7WbuhKFsIU3pV0vyhEOPodmLnHB_pPNnCWblb3vjRoR7hKTuRE9cZSgy8&usqp=CAU",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTuOHNXWduLt7WbuhKFsIU3pV0vyhEOPodmLnHB_pPNnCWblb3vjRoR7hKTuRE9cZSgy8&usqp=CAU",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTuOHNXWduLt7WbuhKFsIU3pV0vyhEOPodmLnHB_pPNnCWblb3vjRoR7hKTuRE9cZSgy8&usqp=CAU",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTuOHNXWduLt7WbuhKFsIU3pV0vyhEOPodmLnHB_pPNnCWblb3vjRoR7hKTuRE9cZSgy8&usqp=CAU",
    },
  ];
  return <div className="mt-10">
 <h1 className="text-center text-3xl font-bold">Review</h1>
<AnimatedTestimonials testimonials={testimonials} />
  </div>;
}
