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

    return <motion.pre ref={inViewRef} style={text}>{rounded}</motion.pre>
}

const text: React.CSSProperties = {
    fontSize: 90,
    color: "slate-900",
    fontWeight: 100,
}

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
          controls = animate(count, 30, { duration: 5 });
        }
        return () => controls?.stop();
      }, [inView, count]);

    return <motion.pre ref={inViewRef} style={text2}>{rounded}</motion.pre>
}

const text2 = {
    fontSize: 90,
    color: "slate-900",
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
          controls = animate(count, 1, { duration: 5 });
        }
        return () => controls?.stop();
      }, [inView, count]);

    return <motion.pre ref={inViewRef} style={text3}>{rounded}</motion.pre>
}

const text3: React.CSSProperties = {
    fontSize: 90,
    color: "slate-900",
    fontWeight: "lighter"

} as const

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
