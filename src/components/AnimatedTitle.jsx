import React from 'react'
import gsap from 'gsap';
import { useEffect } from 'react';
import { useRef } from 'react'

function AnimatedTitle({title, containerClass}) {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const titleAnimation = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: '100 bottom',
                    end: 'center bottom',
                    toggleActions: 'play none none reverse',
                }
            });
            titleAnimation.to('.animated-word',{
                opacity: 1,
                transform: 'translate3d(0,0,0) rotateY(0deg) rotateX(0deg)',
                ease: 'power2.inOut',
                stagger: 0.02,
            })
        }, containerRef)

        return () => ctx.revert();
    },[])//we'll leave the dependency array empty as we need the changes to  be made as soon as the page load not on making any kind of changes

    return (
        <div ref={containerRef} className={`animated-title ${containerClass}`}>
            {title.split('<br />').map((line, index) => (
                <div key={index} className='flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3'> 
                    {line.split(' ').map((word, i) => (
                        <span key={i} className='animated-word' dangerouslySetInnerHTML={{ __html: word}}/>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default AnimatedTitle
