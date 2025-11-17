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
  { value: "100+", description: "customers trust MuleCraft for MuleSoft integration excellence." },
  { value: "1000+", description: "successful integrations actively deployed by customers" },
  { value: "99.9%", description: "Uptime – best-in-class for integration." },
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
  <div 
    className="text-center backdrop-blur-[16px] p-4 md:p-6 transition-all duration-300 ease-out"
    style={{
      borderRadius: '2.4rem',
      background: 'rgba(23, 23, 23, 0.3)',
      boxShadow: `rgba(255, 255, 255, 0.15) -1px 0px 0px 0px inset,
        rgba(255, 255, 255, 0.15) 0px -1px 0px 0px inset,
        rgb(255, 255, 255) -2px -2px 2px -3px inset,
        rgba(255, 255, 255, 0.3) 0px 1px 0px 0px inset,
        rgba(255, 255, 255, 0.2) 1px 0px 0px 0px inset,
        rgb(255, 255, 255) 4px 4px 1px -5px inset,
        rgba(0, 0, 0, 0.3) 0px 4px 12px 0px inset,
        rgba(0, 0, 0, 0.2) 0px 2px 6px 0px inset,
        rgba(0, 0, 0, 0.01) 0px 0px 0px 2px inset`
    }}
  >
    <p className="mb-2 text-2xl md:text-3xl font-bold leading-tight bg-gradient-to-r from-[#00A1FF] to-[#0066CC] bg-clip-text text-transparent">
       <AnimatedNumber valueString={stat.value} />
    </p>
    <p className="mx-auto max-w-[240px] text-sm leading-5 text-white/70">
      {stat.description}
    </p>
  </div>
);

export const StatsSection = () => {
  return (
    <section className="bg-black py-16 md:py-20">
      <div className="mx-auto max-w-[1400px] px-8">
        <h2 className="mb-12 text-center text-2xl md:text-3xl lg:text-4xl font-bold text-white">
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
