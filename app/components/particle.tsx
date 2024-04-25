"use client"



import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; 

export function ParticleBackground() {
    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);

    return (
      
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                className="z-[1] absolute w-full h-full "
                options={{
                    style:{
                        position:"absolute"
                    },
                    background: {
                        color: {
                            value: "primary",
                        }
                    },
                    fpsLimit: 120,
                    particles: {
                        maxConnections: 1,
                        color: {
                            value: "#be2929",
                        },
                        links: {
                            color: "#ffcccc",
                            distance: 175,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                            
                            
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            
                            random: true,
                            speed: {min:.5,max:2.5},
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 170
                                
                            },
                            value: 2.5,
                           limit:12,
                           
                        },
                       
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 7 },
                        },
                    },
                   
                }}
            />
     
    );
};
