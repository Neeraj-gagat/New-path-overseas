"use client"

import { animate, AnimationPlaybackControls, motion, useMotionValue, useTransform } from "motion/react"
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export  function HTMLContent() {
    const count = useMotionValue(0)
    const rounded = useTransform(() => Math.round(count.get()))

    const { ref: inViewRef, inView } = useInView({
        threshold: 0.5, // 50% of the element is visible
        triggerOnce: true, // Only trigger once
    });

      useEffect(() => {
        let controls: AnimationPlaybackControls;
        if (inView) {
          controls = animate(count, 100, { duration: 5 });
        }
        return () => controls?.stop();
      }, [inView, count]);

    return <motion.pre ref={inViewRef} className="text-5xl md:text-7xl py-6">{rounded}</motion.pre>
}

// const text: React.CSSProperties = {
//     fontSize: 90,
//     color: "slate-900",
//     fontWeight: 100,
// }

export  function HTMLContent2() {
    const count = useMotionValue(0)
    const rounded = useTransform(() => Math.round(count.get()))

    const { ref: inViewRef, inView } = useInView({
        threshold: 0.5, // 50% of the element is visible
        triggerOnce: true, // Only trigger once
    });

      useEffect(() => {
        let controls: AnimationPlaybackControls;
        if (inView) {
          controls = animate(count, 56, { duration: 5 });
        }
        return () => controls?.stop();
      }, [inView, count]);

    return <motion.pre ref={inViewRef} className="text-5xl md:text-7xl py-6">{rounded}</motion.pre>
}



export  function HTMLContent3() {
    const count = useMotionValue(0)
    const rounded = useTransform(() => Math.round(count.get()))

    const { ref: inViewRef, inView } = useInView({
        threshold: 0.5, // 50% of the element is visible
        triggerOnce: true, // Only trigger once
    });

      useEffect(() => {
        let controls: AnimationPlaybackControls;
        if (inView) {
          controls = animate(count, 42, { duration: 5 });
        }
        return () => controls?.stop();
      }, [inView, count]);

    return <motion.pre ref={inViewRef} className="text-5xl md:text-7xl py-6">{rounded}</motion.pre>
}


// export  function HTMLContent3() {
//     const count = useMotionValue(0)
//     const rounded = useTransform(() => Math.round(count.get()))

//     useEffect(() => {
//         const controls = animate(count, 100, { duration: 5 })
//         return () => controls.stop()
//     }, [])

//     return <motion.pre style={text3}>{rounded}</motion.pre>
// }

// const text3 = {
//     fontSize: 90,
//     color: "slate-900",
// }
