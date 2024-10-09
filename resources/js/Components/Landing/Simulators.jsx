import React from "react";
import { Carousel, Typography } from '@material-tailwind/react';

export default function Simulators({ landingData, isPrev = false }) {
    return (
        <section id="simulators" className="py-0 relative overflow-hidden bg-transparent">

            {/* Título centrado */}
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold mb-12">SIMULADORES</h2>
                {/* Contenedor de simuladores con bordes redondeados */}

                {/* Carousel de simuladores */}
                {isPrev
                    ? (
                        <Carousel
                            autoplay={true}
                            loop={true}
                            className="rounded-xl relative"
                        >
                            {landingData.map((simulator, index) => {
                                return (
                                    <div className="relative h-96 w-full" key={`simulator-prev-${index}`}>
                                        <img src={simulator?.image?.url ?? 'https://via.placeholder.com/1280'} alt={simulator.title} className="h-full w-full rounded-lg object-cover" />
                                        <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
                                            <div>
                                                <Typography variant="h5" color="blue-gray">
                                                    {simulator.title ?? 'Sin dato'}
                                                </Typography>
                                                <Typography color="gray" className="mt-2 font-normal">
                                                    {simulator.description ?? 'Sin dato'}
                                                </Typography>
                                            </div>
                                        </figcaption>
                                    </div>
                                );
                            })}
                        </Carousel>
                    )
                    : landingData.section5_simulators && JSON.parse(landingData.section5_simulators).length > 0 ? (
                        <Carousel
                            autoplay={true}
                            loop={true}
                            className="rounded-xl relative"
                        >
                            {JSON.parse(landingData?.section5_simulators).map((simulator, index) => {
                                return (
                                    <div className="relative h-96 w-full" key={`simulator-${index}`}>
                                        <img
                                            src={simulator?.image?.url ? `/storage/images/${simulator.image.url}` : 'https://via.placeholder.com/1280'}
                                            alt={simulator.title}
                                            key={`file-${index}`}
                                            className="h-full w-full rounded-lg object-cover"
                                        />
                                        <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
                                            <div>
                                                <Typography variant="h5" color="blue-gray">
                                                    {simulator?.title ?? 'No existe titulo'}
                                                </Typography>
                                                <Typography color="gray" className="mt-2 font-normal">
                                                    {simulator?.description ?? 'No existe descripcion'}
                                                </Typography>
                                            </div>
                                        </figcaption>
                                    </div>
                                );
                            })}
                        </Carousel>
                    ) : null}
            </div>
        </section>
    );
}
