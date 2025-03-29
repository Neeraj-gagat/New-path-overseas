"use client"

import { animate, motion, useMotionValue, useTransform } from "motion/react"
import { useEffect } from "react"

export  function HTMLContent() {
    const count = useMotionValue(0)
    const rounded = useTransform(() => Math.round(count.get()))

    useEffect(() => {
        const controls = animate(count, 100, { duration: 5 })
        return () => controls.stop()
    }, [])

    return <motion.pre style={text}>{rounded}</motion.pre>
}

const text = {
    fontSize: 90,
    color: "slate-900",
}

export  function HTMLContent2() {
    const count = useMotionValue(0)
    const rounded = useTransform(() => Math.round(count.get()))

    useEffect(() => {
        const controls = animate(count, 30, { duration: 5 })
        return () => controls.stop()
    }, [])

    return <motion.pre style={text2}>{rounded}</motion.pre>
}

const text2 = {
    fontSize: 90,
    color: "slate-900",
}

export  function HTMLContent3() {
    const count = useMotionValue(0)
    const rounded = useTransform(() => Math.round(count.get()))

    useEffect(() => {
        const controls = animate(count, 100, { duration: 5 })
        return () => controls.stop()
    }, [])

    return <motion.pre style={text3}>{rounded}</motion.pre>
}

const text3 = {
    fontSize: 90,
    color: "slate-900",
}
