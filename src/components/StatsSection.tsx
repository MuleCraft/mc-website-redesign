import { useState, useEffect, useRef, useMemo } from "react";

function useInView(
  threshold: number = 0,
  triggerOnce: boolean = false
): [React.RefObject<any>, boolean] {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
            setInView(true);
            if (triggerOnce && ref.current) {
                observer.unobserve(ref.current);
            }
        } else {
            if (!triggerOnce) {
                setInView(false);
            }
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, triggerOnce]);

  return [ref, inView];
}

interface Stat {
  value: string;
  description: string;
}

const statsData: Stat[] = [
  { value: "500+", description: "customers trust MuleCraft for MuleSoft integration excellence." },
  { value: "1000+", description: "successful integrations actively deployed by customers" },
  { value: "99.9%", description: "Uptime – best-in-class for integration and automation." },
  { value: "5K+", description: "Community members to collaborate with." },
];

const AnimatedNumber = ({ valueString }: { valueString: string }) => {
  const { numericValue, suffix, decimalPlaces } = useMemo(() => {
    const num = parseFloat(valueString.replace(/[K+%]/g, ''));
    const suf = valueString.replace(/[\d.]/g, '');
    const dec = (valueString.split('.')[1] || '').replace(/[K+%]/g, '').length;
    return { numericValue: num, suffix: suf, decimalPlaces: dec };
  }, [valueString]);
  
  const [count, setCount] = useState(Number(0).toFixed(decimalPlaces));
  const [ref, inView] = useInView(0.2, true);

  useEffect(() => {
    if (inView) {
      const end = numericValue;
      if (end === 0) {
        setCount(end.toFixed(decimalPlaces));
        return;
      }
      
      const duration = 1500;
      let startTimestamp: number | null = null;
      
      const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const easedProgress = easeOut(progress);
        
        const currentVal = easedProgress * end;

        setCount(currentVal.toFixed(decimalPlaces));

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
           setCount(end.toFixed(decimalPlaces));
        }
      };

      requestAnimationFrame(step);
    }
  }, [inView, numericValue, decimalPlaces]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const StatCard = ({ stat }: { stat: Stat }) => (
  <div className="text-center border border-[#E5E5E5] rounded-2xl bg-white p-10 px-8 transition-all duration-300 ease-out hover:shadow-[0_6px_20px_rgba(0,0,0,0.08)]">
    <p className="mb-3 text-4xl font-bold leading-tight bg-gradient-to-r from-[#B8438C] to-[#8B3A8B] bg-clip-text text-transparent md:text-5xl">
       <AnimatedNumber valueString={stat.value} />
    </p>
    <p className="mx-auto max-w-[280px] text-base leading-6 text-muted-foreground">
      {stat.description}
    </p>
  </div>
);

export const StatsSection = () => {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-[1400px] px-8">
        <h2 className="mb-12 text-center text-3xl font-bold text-[#1A1A2E] md:text-4xl">
          Proven Results. Trusted Worldwide.
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {statsData.map((stat, index) => (
            <StatCard key={index} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
};
