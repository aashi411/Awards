import React from 'react'
import AnimatedTitle from './AnimatedTitle'
import gsap from 'gsap'
import { useRef } from 'react'
import RoundedCorners from './RoundedCorner'
import Button from './Button'

function Story() {

    const frameRef = useRef('null')

    const handleMouseLeave = () => {
        const element = frameRef.current;

        gsap.to(element, {
            duration: 0.3,
            rotateX: 0, 
            rotateY:0,
            ease: 'power1.inOut'
        })
    }

    const handleMouseMove = (e) => {
        const {clientX, clientY} = e;
        const element = frameRef.current;

        if(!element) return;

        const rect = element.getBoundingClientRect();
        const x= clientX - rect.left;
        const y= clientY - rect.top;//this cill help in calculating the center

        const centerX = rect.width /2;
        const centerY = rect.height /2;

        const rotateX = ((y-centerY)/centerY) * -10;
        const rotateY = ((x-centerX)/centerX) * 10;

        gsap.to(element, {
            duration: 0.3,
            rotateX, rotateY,
            transformPerspective: 500,
            ease: 'power1.inOut'
        })
    }

    return (
        <section id='story' className='min-h-dvh w-screen bg-black text-blue-50'>
            <div className='flex size-full flex-col items-center py-10 pb-24 '>
                <p className='font-general text-sm uppercase md:text-[10px]'>
                    the multiversal ip world
                </p>
                <div className='relativesize-full'>
                    <AnimatedTitle
                    title="The St<b>o</b>ry of <br/> a hidden Real<b>m</b>"
                    sectionId = '#story'
                    containerClass='mt-5 pointer-events-none mix-blend-difference relative z-10'
                    />
                    <div className='story-img-container'>
                        <div className='story-img-mask'>
                            <div className='story-img-content'>
                                <img
                                ref={frameRef}
                                onMouseLeave={handleMouseLeave}
                                onMouseUp={handleMouseLeave}
                                onMouseEnter={handleMouseLeave}
                                onMouseMove={handleMouseMove}
                                src='/img/entrance.webp'
                                alt='entrance'
                                className='object-contain'
                                />
                            </div>
                        </div>
                        <RoundedCorners/>
                    </div>
                </div>
                <div className='-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end'>
                    <div className='flex h-full w-fit flex-col items-center md:items-start'>
                        <p className='mt-3 max-w-sm text-cenetr font-circular-web text-violet-50 md:text-start'>
                            Where Rels conversges, lies Zentry and the boundless pillars. Discover its secrets and shape your fate amist infinite opportunities.</p>
                        <Button id="realm-button" 
                        title="discover porlogue"
                        containerClass="mt-5"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Story
